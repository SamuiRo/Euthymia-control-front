import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonStringify',
  standalone: true,
})
export class JsonStringifyPipe implements PipeTransform {
  transform(value: any): string {
    return JSON.stringify(value, null, 2);
  }
}
