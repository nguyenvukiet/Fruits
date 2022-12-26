import { Component, OnInit } from '@angular/core';
import{ ApiService} from '../../SERVICES/api.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  items: any [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.api.getJson().subscribe(resp=>{
      this.items = resp
    })
  }

}
