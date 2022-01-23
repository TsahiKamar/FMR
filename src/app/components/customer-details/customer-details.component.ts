import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit,OnDestroy {

  customer: Customer;
  form: FormGroup;

  id: string;
  customerId: string;
  fullName: string;
  
  private sub: any;

  isDisabled: boolean = false;

  constructor(private router: Router,private route: ActivatedRoute,private custService: CustomerService,private fb: FormBuilder) { }

  ngOnInit() {

  
      this.route.queryParams.subscribe(params => {
        this.id = params['id'];
        this.customerId = params['customerId'];
        this.fullName = params['fullName'];
      
      });
  

      this.form = new FormGroup({
        customerId:new FormControl({value: this.customerId , disabled: this.isDisabled},Validators.required),
        fullName: new FormControl({value: this.fullName, disabled: this.isDisabled},Validators.required),
        addresses: this.fb.array([]), 
        phones: this.fb.array([]) ,
        products: this.fb.array([]), 
      });

     if (this.id !=='' && this.id !== undefined)
     {
        this.custService.getCustomerDetails(this.id).subscribe(result => {
           this.customer = result;

           console.log("getCustomerDetails result : " + result );
           this.form.patchValue(
            {
                ...this.customer,
                customerId:this.customer.customerId,
                fullName:this.customer.fullName
                //'addresses': this.customer["addresses"],//this.customer ? this.customer.addresses : [],
                //'phones': this.customer["phones"],//this.customer ? this.customer.phones : [],
                //'products': this.customer["products"]//this.customer ? this.customer.addresses : []
            }
         ); 
          
      
        },
        error => {
           alert("getCustomerDetails error : " + error);
         },
         () => {
        // 'onCompleted' callback.
        // No errors
         }
        );
     }

  
}

savePhone(newPhone: Phone){
  let formArray = this.form.get("phones") as FormArray;
  formArray.push(new FormControl(newPhone));
  
  this.form.patchValue(
    {
      //...this.phones,
      ...newPhone
    }
  );
}

get phones() {
  return this.form.controls["phones"] as FormArray;
}

saveAddress(newAddress: Address){
  let formArray = this.form.get("addresses") as FormArray;
  formArray.push(new FormControl(newAddress));
  this.form.patchValue(
    {
      //...this.addresses,
      ...newAddress
    }
  );
}

get addresses() {
  return this.form.controls["addresses"] as FormArray;
}

saveProduct(newProduct: Product){
  let formArray = this.form.get("products") as FormArray;
  formArray.push(new FormControl(newProduct));
  this.form.patchValue(
    {
      //...this.products,
      ...newProduct
    }
  );
}

get products() {
  return this.form.controls["products"] as FormArray;
}


get phonesArray() {
  return this.form.get('phones') as FormArray;
}

  onSubmit()
  {
    console.warn(this.form.value);
  }

  edit() {
    this.isDisabled =!this.isDisabled; 
  }

//Save All
save() {

  //if (this.form.invalid) return;
  
  var request = this.form.getRawValue();

  //let formArray = this.form.get("phones") as FormArray;
  //let formArray1 = this.form.get("addresses") as FormArray;
  //let formArray2= this.form.get("products") as FormArray;
  
  alert('request : ' + JSON.stringify(request));

  //const customer : Customer = [...this.form.value];  
   this.custService.updateCustomerDetails(request).subscribe(result => {
     console.log("updateCustomerDetails result : " + result );
   },
   error => {
       alert("updateCustomerDetails error : " + error);
   },
   () => {
       // No errors
   }
   );




}

loadAddresses() {
 
}

loadPhones() {

}

profitCalc(){
  
}

 

//getter used in html to loop through address
get adddressControls(){

  return (<FormArray>this.form.get('addresses')).controls
}
get phonesControls(){

  return (<FormArray>this.form.get('phones')).controls
}
get productsControls(){

  return (<FormArray>this.form.get('products')).controls
}


public GetControlValue(form: FormGroup, field: string){
  let el = document.querySelector('input[name="'+field+'"]');
  return form.get(field).value;
}


ngOnDestroy() {
  //this.sub.unsubscribe();
}

}
