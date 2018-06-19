import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-forms-component',
  templateUrl: './forms-component.component.html',
  styleUrls: ['./forms-component.component.css']
})
export class FormsComponent implements OnInit {

  eventId: string;
  eventName: string;
  eventPlace: string;
  allItemsArray: Array<Object>=[];
  submitBtnDisabledFlag: boolean;

  constructor(private _router: Router,private _commonService: CommonService) { }

  ngOnInit() {
    let newInputObject = JSON.parse(localStorage.getItem('newInput'));
    this.eventId = newInputObject['eventId'];
    this.eventName = newInputObject['eventName'];
    this.eventPlace = newInputObject['eventPlace'];
  }

  submit(){
    let inputsObj = {
      'eventId': this.eventId,
      'eventName': this.eventName,
      'eventPlace': this.eventPlace
    };

    localStorage.setItem('newInput', JSON.stringify(inputsObj));
    if(this.eventId && this.eventName && this.eventPlace)
      this._commonService.setInput(inputsObj)

    this._router.navigate(['/list']);
  }

  validateEventId(){
    let allItemsArray = JSON.parse(localStorage.getItem('allItemsArray'));

    allItemsArray.forEach(element => {
      if(this.eventId && element.eventId == this.eventId){
        alert("eventId Must be Unique"); 
        this.eventId = '';
      }
    });
  }

}
