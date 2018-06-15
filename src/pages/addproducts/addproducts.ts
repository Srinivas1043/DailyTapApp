import { Component, ViewChild, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

/**
 * Generated class for the AddproductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addproducts',
  templateUrl: 'addproducts.html',
})
export class AddproductsPage {
products:Product[];

  constructor(public navCtrl: NavController, public navParams: NavParams,  public product: ProductProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddproductsPage');
    this.product.getProduct().subscribe((datas) => {
    this.products = datas;

    console.log(this.products);
  });
  }

  showProducts(){
    this.product.getProduct().subscribe((datas) => {
   this.products = datas;
   console.log(this.products);
    });

  }

}

interface Product{
  ProductId:any,
CategoryId: any,
BrandId: any,
MeasureId: any,
ProductName: any,
ProductPrice: any,
Availability: any,
ProductDescription:any,
CreatedAt: any,
UpdatedAt: any,
ProductImage:any

}
