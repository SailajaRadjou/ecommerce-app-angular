import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offerRate'
})
export class OfferRatePipe implements PipeTransform {

  transform(offer: number): string {

    let strike: string = '';
    if (offer!=0) {
      strike = 'text-decoration-line-through';
    } else {
      strike = 'text-decoration-none';
    }

    return strike;
  }

}
