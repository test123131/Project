import { Injectable } from "@angular/core";

@Injectable()
export class CommonService{
    inputObject: any;

    setInput(inputObject){
        this.inputObject = inputObject;
    }

    getInput(){
        return this.inputObject;
    }
}