import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dataGetter",
  pure: true
})
export class DataGetterPipe implements PipeTransform {
  transform(data: any, key: string, ...args: unknown[]): unknown {
    return data[key] || 'N/A';
  }
}