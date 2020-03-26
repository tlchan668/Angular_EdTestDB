import { Pipe, PipeTransform } from '@angular/core';
import { Major } from './major.class';

@Pipe({
  name: 'majorSearch'
})
export class MajorSearchPipe implements PipeTransform {

  transform(majors: Major[], searchCriteria: string = ''): Major[] {
    //check to seeif criteria an empty string then return collection
    if(searchCriteria === '') return majors;
    let criteria = searchCriteria.toLowerCase();//takes away case sensitivity
    let selMajors: Major[] = [];
    for(let major of majors){
      if(major.id.toString().includes(criteria)){
        selMajors.push(major);
        continue;
      }
      if(major.code.toLowerCase().includes(criteria)){
        selMajors.push(major);
        continue;
      }
      if(major.minSat.toString().includes(criteria)){
        selMajors.push(major);
        continue;
      }
      
    }
    return selMajors;
  }

}
