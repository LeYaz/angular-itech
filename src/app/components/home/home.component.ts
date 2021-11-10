import { Component, OnInit} from '@angular/core';
import { Card } from 'src/app/models/Card';
import { ProductService } from 'src/app/sercices/product.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  data: Card[] = []

  constructor(private productService:ProductService){
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
  
}
