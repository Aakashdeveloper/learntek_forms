import { Component } from '@angular/core';
import {Employee} from './models/employee.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  languages = ["NodeJS","AngularJS","ReactJS"]
  model = new Employee("Learntek","Angular",true,"male","NodeJS")

  firstToUpper(value:string): void{
    if(value.length>0)
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1)
  }
}
