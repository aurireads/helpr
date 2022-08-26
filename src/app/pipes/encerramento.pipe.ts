import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encerramento'
})
export class EncerramentoPipe implements PipeTransform {

  transform(value: null | string | undefined): unknown {
    if(value === null || value ===undefined) {
      return "Não possui data de encerramento"
    }
    else {
      return value;
    };
  }

}
