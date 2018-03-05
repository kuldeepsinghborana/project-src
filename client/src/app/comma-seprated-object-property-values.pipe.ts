import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaSepratedObjectPropertyValues'
})
export class CommaSepratedObjectPropertyValuesPipe implements PipeTransform {

  transform(object:object): any[] {
    let valArray = [];
    for (var key in object) {
      valArray.push(object[key]);
    }
    // return valArray.join(',');
    return valArray;
  }

}
