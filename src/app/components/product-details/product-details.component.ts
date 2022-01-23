import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  form: FormGroup;

  constructor(private router: Router,private route: ActivatedRoute,private custService: CustomerService) { }

  ngOnInit() {

       this.form = new FormGroup({
        customerId:new FormControl(""),
        productId: new FormControl("",Validators.required),
        name: new FormControl("",Validators.required),
        description: new FormControl(""),
        interestPercents: new FormControl("",Validators.required),
        deposit: new FormControl("",Validators.required),
        date: new FormControl("",Validators.required),
        profit: new FormControl("")
    
      });
          
 }
    
  onSubmit()
  {
  
  }

public GetControlValue(form: FormGroup, field: string){
  let el = document.querySelector('input[name="'+field+'"]');
  return form.get(field).value;
}


}
