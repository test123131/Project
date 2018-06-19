import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-lists-component',
  templateUrl: './lists-component.component.html',
  styleUrls: ['./lists-component.component.css']
})
export class ListsComponent implements OnInit {

  allItemsArray: Array<Object>=[];
  add: boolean;

  constructor(private _router: Router,private _commonService: CommonService) { }

  ngOnInit() {

    let inputsObj = this._commonService.getInput();
    this.allItemsArray = JSON.parse(localStorage.getItem('allItemsArray'));

    if(!this.allItemsArray){
      this.allItemsArray = [];
    }
    if(inputsObj)
      this.allItemsArray.push(inputsObj);
    
    localStorage.setItem('allItemsArray', JSON.stringify(this.allItemsArray));

    console.log(this.allItemsArray);
  }

  update(updatedItem){
    console.log(updatedItem);

    this.allItemsArray.map((item,key)=>{
      if(item['eventId'] == updatedItem['eventId']){
        item['eventId'] = updatedItem['eventId'];
        item['eventName'] = updatedItem['eventName'];
        item['eventPlace'] = updatedItem['eventPlace'];
      }
    });
    
    localStorage.setItem('allItemsArray', JSON.stringify(this.allItemsArray));
    console.log(this.allItemsArray);
  }


}
