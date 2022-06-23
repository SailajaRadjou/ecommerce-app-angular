import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productTypeColor'
})
export class ProductTypeColorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
