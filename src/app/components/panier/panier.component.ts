import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  panier:Article[]=[];
  prixTotal:number=0;
  constructor() { }

  ngOnInit(): void {
    const localPanier = localStorage.getItem('panier')
    this.panier = localPanier!==null? JSON.parse(localPanier):this.panier;
    this.panier.forEach(article => this.prixTotal+= (article.quantity * article.price))
  }

}
