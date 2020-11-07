import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dataGetter"
})
export class DataGetterPipe implements PipeTransform {
  transform(data: any, key: string, ...args: unknown[]): unknown {
    return data[key];
  }
}