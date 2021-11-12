import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { PanierService } from 'src/app/sercices/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  panier:Article[]=[];
  prixTotal:number=0;
  constructor(private panierService:PanierService) { }

  ngOnInit(): void {
    const localPanier = localStorage.getItem('panier')
    // this.panier = localPanier!==null? JSON.parse(localPanier):this.panier;
    this.panierService.getPanier().subscribe(articles => this.panier = articles)
    this.calculTotal();
  }

  removeArticle(id:number){
    this.panier = this.panier.filter(article => article.id !== id);
    // localStorage.setItem('panier', JSON.stringify(this.panier));
    this.panierService.removeArticle(id).subscribe(art => console.log(art + 'removed'));
    this.calculTotal();
  }

  calculTotal(){
    this.prixTotal=0;
    this.panier.forEach(article => this.prixTotal+= (article.quantity * article.price))
  }

  increaseQuantity(id:number){
    let article = this.panier.find(article => article.id === id);
    if(article) {
      article.quantity++;
      this.panierService.updateArticle(article).subscribe(art => console.log(art + 'updated'));
    }
    
    this.calculTotal();
  }

  decreaseQuantity(id:number){
    let article = this.panier.find(article => article.id === id);
    if(article){
      article.quantity--;
      this.panierService.updateArticle(article).subscribe(art => console.log(art + 'updated'));
      if(article.quantity===0) {
        this.removeArticle(id);
      }
    } 
    this.calculTotal();
  }
}
