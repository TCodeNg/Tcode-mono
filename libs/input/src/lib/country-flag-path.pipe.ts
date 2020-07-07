import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryFlagPath'
})
export class CountryFlagPathPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    const countryCode: string = value.countryCode;
    if (!countryCode) {
      return undefined;
    }
    return `https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/${countryCode.toLowerCase()}.svg`;
  }

}
