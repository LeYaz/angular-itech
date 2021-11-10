import { Component } from '@angular/core';


interface Person { name: string, age: number}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  yazid: Person = {name:'Yazid', age:25};
  persons: Person[] = [
    this.yazid,
    {name: 'toto', age:17},
    {name: 'mr', age:42}
    
  ]

}
