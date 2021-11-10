import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card';
import { Person } from 'src/app/models/Person';



@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  styles: ['mat-card { background:blue;}']
})
export class AboutUsComponent implements OnInit{
  

  data: Card[]=[];

  persons: Person[] = [
    {id:1, name: 'abs', age:20},
    {id:2, name: 'aezaes', age:21},
    {id:3, name: 'aeaeaeas', age:10}
  ]

  ngOnInit(): void {
    this.data = this.persons.map((person)=>{
      return {id:person.id, title: person.name, subTitle:person.age+' ans', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'}
    })
  }

  onLikeClick(id: number){
    console.log("Like clicked from about " + id)
  }
}
