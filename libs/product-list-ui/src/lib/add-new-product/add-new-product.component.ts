import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';
import { ProductService, PRODUCT_SERVICE_TOKEN } from '@tcode/product';
import { MatSnackBar } from '@angular/material/snack-bar'
import { AddNewProductService } from './add-new-product.service';

@Component({
  selector: 'tcode-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewProductComponent implements OnInit {
  addProductForm: FormGroup;
  @Output() addProduct = new EventEmitter<any>();
  constructor(
    public dialogRef: MatDialogRef<AddNewProductComponent>,
    private _fb: FormBuilder,
    private cdRef: ChangeDetectorRef,
    @Inject(PRODUCT_SERVICE_TOKEN) private productService: ProductService,
    private _snackBar: MatSnackBar,
    private addNewProductService: AddNewProductService
  ) { 
    this.initalizeForm();
  }
  categories = [
    { id: 1, name: 'FMCG', category: 'farm'},
    { id: 2, name: 'Livestock', category: 'farm'},
    { id: 3, name: 'Farm tool', category: 'farm'},
    { id: 4, name: 'Raw food', category: 'farm'},
    { id: 5, name: 'Land', category: 'estate'},
    { id: 6, name: 'Building property', category: 'estate'},
    { id: 7, name: 'Rent', category: 'estate'},
    { id: 8, name: 'Lease', category: 'estate'},
    { id: 9, name: 'Battery', category: 'inverter'},
    { id: 10, name: 'Solar panel', category: 'inverter'},
    { id: 11, name: 'Inverter box', category: 'inverter'},
  ]
  lState: 'idle' | 'loading' = 'idle';
  inverterImages = [
    {
      image: 'https://res.cloudinary.com/horlabyc/image/upload/v1595830331/photo_wa9ask.png',
      thumb: 'https://res.cloudinary.com/horlabyc/image/upload/v1595830331/photo_wa9ask.png',
      public_Id: '1',
      width: 200,
      height: 200
    },
  ];

  farmImages = [
    {
      image: 'https://res.cloudinary.com/horlabyc/image/upload/v1594847543/image_1_uhaa4w.svg',
      thumb: 'https://res.cloudinary.com/horlabyc/image/upload/v1594847543/image_1_uhaa4w.svg',
      public_Id: '1',
      width: 200,
      height: 200
    }
  ];

  estateImages = [
    {
      image: 'https://res.cloudinary.com/horlabyc/image/upload/v1594847543/image_2_pj2jw1.svg',
      thumb: 'https://res.cloudinary.com/horlabyc/image/upload/v1594847543/image_2_pj2jw1.svg',
      public_Id: '1',
      width: 200,
      height: 200
    },
    {
      image: 'https://res.cloudinary.com/horlabyc/image/upload/v1594847543/image_vbs2ir.svg',
      thumb: 'https://res.cloudinary.com/horlabyc/image/upload/v1594847543/image_vbs2ir.svg',
      public_Id: '2',
      width: 200,
      height: 200
    }
  ]

  ngOnInit(): void {
    this.addProductForm.controls.type.valueChanges.pipe(
      tap((value) => this.updateFormFields(value))
    ).subscribe();
    // this.addProductForm.valueChanges.pipe(
    //   tap(() => console.log(this.addProductForm.value))
    // ).subscribe();
  }

  get categoryArray() {
    return this.addProductForm.get('category') as FormArray;
  }

  get farmCategoryArray() {
    return new FormArray(this.categoryArray.controls.filter((c) => c.value.category === 'farm'));
  }

  get estateCategoryArray() {
    return new FormArray(this.categoryArray.controls.filter((c) => c.value.category === 'estate'));
  }

  get inverterCategoryArray() {
    return new FormArray(this.categoryArray.controls.filter((c) => c.value.category === 'inverter'));
  }

  get categoryArrayControl() {
    return this.addProductForm.get('category')['controls'] as FormControl[];
  }

  get isFormValid(){
    return this.addProductForm.valid;
  }

  initalizeForm() {
    this.addProductForm = this._fb.group({
      name: [undefined, Validators.required],
      price: [0, Validators.compose([Validators.required, Validators.min(0)])],
      type: ['', Validators.required],
      category: this.mapToCheckboxArrayGroup(this.categories),
      location: [undefined],
      agent: [undefined],
      bathrooms: [0],
      rooms: [0],
      livingRooms: [0],
      description: [undefined, Validators.required],
      owner: [undefined],
    })
  }

  private mapToCheckboxArrayGroup(data: { id: number, name: string, category: string}[]): FormArray {
    return this._fb.array(data.map((i) => {
      return this._fb.group({
        name: i.name,
        selected: false,
        category: i.category
      });
    }));
  }

  closeDialog(prop?) {
    this.dialogRef.close(prop);
  }

  onSubmit() {
    const { type } = this.addProductForm.value;
    const allCategories = this.farmCategoryArray.value.concat(this.estateCategoryArray.value, this.inverterCategoryArray.value) as Array<any>;
    const selectedCategories = allCategories.filter(cat => cat.category === type && cat.selected).map((c) => {
      return c.name
    })
    const values = {
      ...this.addProductForm.value,
      category: selectedCategories,
      images: type === 'estate' ? this.estateImages : type === 'farm' ? this.farmImages : this.inverterImages
    }
    this.lState = 'loading';
    this.productService.createProduct(values).subscribe((res) => {
      this.lState = 'idle';
      this.closeDialog(true);
    }, (error) => {
      this._snackBar.open(error, 'Ok');
      this.lState = 'idle';
    })
  }

  private updateFormFields(type: string) {
    this.resetForm();
    this.cdRef.detectChanges();
    const updater = {
      estate: this.setEstate.bind(this),
      farm: this.setfarm.bind(this),
      inverter: this.setInverter.bind(this)
    };
    if (updater[type]) {
      updater[type]();
    }
    this.cdRef.detectChanges();
  }

  private resetForm() {
    this.addProductForm.controls.location.reset();
    this.addProductForm.controls.agent.reset();
    this.addProductForm.controls.rooms.reset();
    this.addProductForm.controls.livingRooms.reset();
    this.addProductForm.controls.bathrooms.reset();
    this.addProductForm.controls.owner.reset();

    this.addProductForm.controls.location.clearValidators();
    this.addProductForm.controls.agent.clearValidators();
    this.addProductForm.controls.rooms.clearValidators();
    this.addProductForm.controls.livingRooms.clearValidators();
    this.addProductForm.controls.bathrooms.clearValidators();
    this.addProductForm.controls.owner.clearValidators();

    this.addProductForm.controls.location.updateValueAndValidity();
    this.addProductForm.controls.agent.updateValueAndValidity();
    this.addProductForm.controls.rooms.updateValueAndValidity();
    this.addProductForm.controls.livingRooms.updateValueAndValidity();
    this.addProductForm.controls.bathrooms.updateValueAndValidity();
    this.addProductForm.controls.owner.updateValueAndValidity();
  }
  
  private setEstate() {
    this.addProductForm.controls.location.setValidators(Validators.required);
    this.addProductForm.controls.agent.setValidators(Validators.required);
    this.addProductForm.controls.rooms.setValidators(Validators.required);
    this.addProductForm.controls.livingRooms.setValidators(Validators.required);
    this.addProductForm.controls.bathrooms.setValidators(Validators.required);
    this.addProductForm.controls.location.updateValueAndValidity();
    this.addProductForm.controls.agent.updateValueAndValidity();
    this.addProductForm.controls.rooms.updateValueAndValidity();
    this.addProductForm.controls.livingRooms.updateValueAndValidity();
    this.addProductForm.controls.bathrooms.updateValueAndValidity();
  }

  private setfarm() {
    this.addProductForm.controls.owner.setValidators(Validators.required);
    this.addProductForm.controls.owner.updateValueAndValidity();
  
  }

  private setInverter() {
  }

  pickFile(event){
    // console.log(e.target)
    const file = event.target.files[0];
    console.log(file)
    this.addNewProductService.uploadImage(file).subscribe((res) => {
      console.log(res)
    });
  }

}
