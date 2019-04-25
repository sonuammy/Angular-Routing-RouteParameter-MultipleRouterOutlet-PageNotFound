import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  brand: string;
  matchingproducts: Product[] = [];
  constructor(@Inject(ProductsService) private prodService : ProductsService, @Inject(ActivatedRoute) private route: ActivatedRoute)
  {
  }
  ngOnInit()
  {
  this.route.params.subscribe(params =>
  {
  var selectedBrand = params["brandname"];
  this.brand = selectedBrand;
  this.matchingproducts = this.prodService.getProductsByBrand(selectedBrand);
  });
  }

}
