import { Component, OnInit, forwardRef, Input, ViewChild, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'
import { countries, countryStyle, Country } from '../countries';
import { util } from '../util';

@Component({
  selector: 'tcode-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneNumberComponent),
      multi: true
    }
  ]
})
export class PhoneNumberComponent implements OnInit, ControlValueAccessor {

  constructor() { }
  @ViewChild('input') child: ElementRef;
  @Input() value = '';
  disabled = false;

  private onChange: Function;
  private onTouched: Function;

  countries = countries;

  selectedCountry: Country = {
    "name": "Nigeria",
    "iso": "+234",
    "countryCode": "NG"
  }

  ngOnInit(): void {
    this.value = '';
    this.onChange = (_: any) => {
    };
    this.onTouched = () => {
    };
  }

  getCountryFlag(country) {
    return countryStyle(country)
  }

  writeValue(value: any): void {
    this.value = this.formatNumber(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  keyUp(event) {
    let value = event.target.value;
    if (value) {
      value = this.formatNumber(value)
      this.doChange(value);
    }
  }

  private doChange(value: string) {
    this.onChange(value);
    this.onTouched();
  }

  selectCode(country: Country) {
    this.selectedCountry = country;
    this.doChange('');
    this.child.nativeElement.value = '';
  }

  private formatNumber(value: string) {
    return util.formatNumber(value, this.selectedCountry.countryCode);
  }

}
