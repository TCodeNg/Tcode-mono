import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';
import { ProductService, PRODUCT_SERVICE_TOKEN } from '@tcode/product';
import { MatSnackBar } from '@angular/material/snack-bar'
import { AddNewProductService } from './add-new-product.service';
import { IImage } from 'libs/api-interface/src/lib/image';
import { BehaviorSubject } from 'rxjs';

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
    // @Inject(PRODUCT_SERVICE_TOKEN) private productService: ProductService,
    private _snackBar: MatSnackBar,
    private addNewProductService: AddNewProductService
  ) { 
    this.initalizeForm();
  }
  uploadingFile = new BehaviorSubject(false);
  uploadingFile$ = this.uploadingFile.asObservable();
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
  selectedProductImages: {
    [key: string]: IImage
  } = {};

  ngOnInit(): void {
    this.addProductForm.controls.type.valueChanges.pipe(
      tap((value) => this.updateFormFields(value))
    ).subscribe();
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

  hasRequired(controlName: string): boolean {
    const validator = this.addProductForm.controls[controlName].validator({} as AbstractControl);
    return validator && validator.required;
  }

  onSubmit() {
    if(!this.isFormValid) {
      this._snackBar.open('Please fill all required fields', 'Ok')
      return;
    }
    const { type } = this.addProductForm.value;
    const allCategories = this.farmCategoryArray.value.concat(this.estateCategoryArray.value, this.inverterCategoryArray.value) as Array<any>;
    const selectedCategories = allCategories.filter(cat => cat.category === type && cat.selected).map((c) => {
      return c.name
    })
    if(!selectedCategories.length){
      this._snackBar.open('Please select at least one product category', 'Ok');
      return;
    }
    if(!Object.values(this.selectedProductImages).length){
      this._snackBar.open('Please upload at least one product image', 'Ok');
      return;
    }
    const values = {
      ...this.addProductForm.value,
      category: selectedCategories,
      images: Object.values(this.selectedProductImages),
      price: {
        value: this.addProductForm.value.price,
        currency: 'NGN'
      },
      agent: {
        id: 1,
        title: this.addProductForm.value.agent
      },
      owner: {
        id: 1,
        title: this.addProductForm.value.owner
      }
    }
    this.lState = 'loading';
    this.addNewProductService.createNewProduct(values).subscribe((res) => {
      this.lState = 'idle';
      this._snackBar.open('Product addedd successfully!!!', 'Ok');
      this.closeDialog(true);
    }, (error) => {
      
      this._snackBar.open(error, 'Ok');
      this.lState = 'idle';
    });
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

  get uploadedImageNames(): string[] {
    return Object.keys(this.selectedProductImages);
  }

  pickFile(event){
    const file = event.target.files[0];
    if(file){
      this.uploadingFile.next(true);
      this.addNewProductService.uploadImage(file).subscribe((res) => {
        this.selectedProductImages[file.name] = res.data;
        this.uploadingFile.next(false);
        this._snackBar.open('Picture uploaded', 'Ok');
      },(error) => {
        this._snackBar.open(error, 'Ok');
        this.uploadingFile.next(false);
      });
    }
  }
}