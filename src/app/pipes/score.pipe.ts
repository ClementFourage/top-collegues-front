import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value > 0) {
      return `<span class="text-success">+ ${value}</span>`;
    }
    if (value < 0) {
      return `<span class="text-warning">${value}</span>`;
    }
    else {
      return `<span class="text-black-50">${value}</span>`;
    }

    
  }

}
