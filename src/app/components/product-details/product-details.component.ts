import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/sercices/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product = {id: 0,name: '', price: 0, stock: 0, picture: ''};
  constructor(private route: ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.productService.get(id).subscribe(product =>{
      this.product =product;
    });
  }

}
