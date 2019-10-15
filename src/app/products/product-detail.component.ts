import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  products: IProduct[];
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {

  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`
    this.productService.getProducts().subscribe({
      next: products => {
          this.products = products
          this.product = this.getProduct(id, products)         
      } ,
      error: err => this.errorMessage = err
  })

  }
  onBack(): void {
    this.router.navigate(['/products'])
  }

  getProduct(id: number, products: IProduct[]): IProduct{
    return products.find(product => product.productId === id)
  }

}
