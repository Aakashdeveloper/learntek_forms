import { Component } from '@angular/core';
import {Employee} from './models/employee.model';
import {FormPoster} from './services/form-poster.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  languages = ["NodeJS","AngularJS","ReactJS"]
  model = new Employee("Learntek",0,"Angular",true,"male","NodeJS")

  hasCodeLangError=false

  firstToUpper(value:string): void{
    if(value.length>0)
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1)
  }

  constructor(private _formPoster:FormPoster){}
  validDropDown(event){
    if(this.model.codeLang === "default")
        this.hasCodeLangError =true;
    else
        this.hasCodeLangError = false;
  }

  submitForm(form:NgForm){
    this.validDropDown(this.model.codeLang)
    if(this.hasCodeLangError)
       return;
    
    this._formPoster.postEmployeeForm(this.model)
        .subscribe(
          data =>console.log('success:',data),
          err=>console.log('error:',err)
        )
  }
}

/*
ng-untouched ng-pristine ng-valid
ng-touched   ng-dirty    ng-invalid
*/
