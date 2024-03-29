import { Product } from './../product-create/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  
  product: any

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.reaById(id).subscribe(product => {
      this.product = product
      console.log(this.product)
    })
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.createProduct('Produto atualizado com sucesso')
      this.router.navigate(['/products'])
  })
}

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
