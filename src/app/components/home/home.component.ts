import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/Article';
import { Card } from 'src/app/models/Card';
import { ProductService } from 'src/app/sercices/product.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  data: Card[] = [];
  btnName: string = "ADD";
  panier:Article[]=[];

  constructor(private productService:ProductService, private router:Router){
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(products =>{
      this.data = products.map((product)=>{
        return {id:product.id, title: product.name, subTitle:product.price+' euros', image: product.picture}
      })
    });

      const localPanier = localStorage.getItem('panier')
      this.panier = localPanier!==null? JSON.parse(localPanier):this.panier;
    
    
  }

  onLikeClick(id:number){
    console.log("Like clicked from home" + id)
  }

  onCardClick(id:number){
    console.log("card clicker " + id)
    this.router.navigateByUrl('product/' + id);
  }

  onAddClick(product:Card){
    let price = parseInt(product.subTitle);
    this.inCreaseStockOrAdd({id: product.id, name: product.title, price: price, quantity: 1})
    localStorage.setItem('panier',JSON.stringify(this.panier));
  }

  inCreaseStockOrAdd(newArticle:Article){
    let art = this.panier.find(article => article.id === newArticle.id);
    if(art !== undefined){
      art.quantity++
    }else{
      this.panier.push(newArticle); 
    }
  }
  
}
