import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
 private selectedCtegory = new BehaviorSubject<String>('');
  setSelectedOption: any;
  
  constructor() {}

  getselectedCategory(option:string){
    this.setSelectedOption=this.selectedCtegory.next(option);
    return this.selectedCtegory
  }

}

