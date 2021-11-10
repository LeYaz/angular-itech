import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/models/Card';
import { ProductService } from 'src/app/sercices/product.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  data: Card[] = []

  constructor(private productService:ProductService, private router:Router){
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(products =>{
      this.data = products.map((product)=>{
        return {id:product.id, title: product.name, subTitle:product.price+' euros', image: product.picture}
      })
    });
    
  }

  onLikeClick(id:number){
    console.log("Like clicked from home" + id)
  }

  onCardClick(id:number){
    console.log("card clicker " + id)
    this.router.navigateByUrl('product/' + id);
  }
  
}
