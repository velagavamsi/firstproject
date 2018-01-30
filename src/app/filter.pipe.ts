import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(diagnosesList: any, term: any): any {
    // if search item is undefined
    if(term === undefined) return diagnosesList;

    // return updated list here
    return diagnosesList.filter(function(item, listItems){
      listItems= true;
      return item.name.toLowerCase().includes(term.toLowerCase());
    });
  }

}
