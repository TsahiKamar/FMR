



import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-phones-details',
  templateUrl: './phones-details.component.html',
  styleUrls: ['./phones-details.component.css']
})
export class PhonesDetailsComponent implements OnInit {

  phone: Phone;
  form: FormGroup;

  constructor(private router: Router,private route: ActivatedRoute,private custService: CustomerService) { }

  ngOnInit() {

    //this.general = this.gService.getGeneral();
      
   
     //if (this.general.Lawyers[0] != undefined)
    //{
    //let lawyer = this.general.Lawyers[0]; 

  //   this.form = new FormGroup({
  //   id:new FormControl(lawyer.idNum),
  //   fullName: new FormControl(lawyer.firstName,Validators.required),//ORIG ['', Validators.required],
  //   homePhone: new FormControl(lawyer.lastName,Validators.required),//[''],
  //   mobilePhone: new FormControl(lawyer.street,Validators.required),
  
  //   street:new FormControl(lawyer.city,Validators.required),  
  //   houseNum:new FormControl(lawyer.houseNum,Validators.required),
  //   city:new FormControl(lawyer.city,Validators.required),  
  //   mikud:new FormControl(lawyer.houseNum,Validators.required),
  //   postBox:new FormControl(lawyer.houseNum,Validators.required)
  // });
    //}
    //else
    //{

       this.form = new FormGroup({
        customerId:new FormControl("",Validators.required),
        type:new FormControl("",Validators.required),
        phoneNumber: new FormControl("",Validators.required),
      });
          
 }
    

  onSubmit()
  {
    
    //console.warn(this.form.value);
    
    // const newPhone : Phone = { id:undefined,isDeleted: false,updateDate: new Date(), customerId:this.GetControlValue(this.form,'customerId') ,
    //   type:this.GetControlValue(this.form,'type'),
    //   phoneNumber:this.GetControlValue(this.form,'phoneNumber')
    // }
    //this.save.emit(newPhone);

    //alert('new phone : ' + JSON.stringify(newPhone));

    // this.custService.updateCustomerDetails(customer).subscribe(result => {
    //   console.log("updateCustomerDetails result : " + result );
    // },
    // error => {
    //     alert("updateCustomerDetails error : " + error);
    // },
    // () => {
    //     // No errors
    // }
    // );


  }



//save() {

  // // const payment = new FormGroup({
  // //    num: new FormControl(''), 
  // //    date: new FormControl(this.GetControlValue(this.newPaymentForm,'date'),Validators.required),
  // //    amount: new FormControl(this.GetControlValue(this.newPaymentForm,'amount'),Validators.required),//ORIG ['', Validators.required],
  // //    method: new FormControl(this.GetControlValue(this.newPaymentForm,'method'),Validators.required)//[''],

  // // });

  
  // this.lawyer =  new Lawyer();
 
  // this.lawyer.id = this.general.Property[0].id;

  // this.lawyer.ownersInd =  this.general.Property[0].ownersInd === 1 ? 1 : 0 ;//ORIG this.general.Property.ownersInd === 1 ? 1 : 0 ;
  // this.lawyer.idNum =   this.general.Property[0].ownersInd === 1 ? this.general.Owners[0] != undefined ? this.general.Owners[0].idNum : null : this.general.Purchasers[0] != undefined ? this.general.Purchasers[0].idNum : null ;//ORIG this.general.Property.idNum ;
  // this.lawyer.lIdNum = this.GetControlValue(this.lawyerForm,'lIdNum');
  // this.lawyer.firstName = this.GetControlValue(this.lawyerForm,'firstName');
  // this.lawyer.lastName = this.GetControlValue(this.lawyerForm,'lastName');
  // this.lawyer.street = this.GetControlValue(this.lawyerForm,'street');
  // this.lawyer.houseNum = this.GetControlValue(this.lawyerForm,'houseNum');
  // this.lawyer.city = this.GetControlValue(this.lawyerForm,'city');
  // this.lawyer.mobilePhone = this.GetControlValue(this.lawyerForm,'mobilePhone');
  // this.lawyer.officePhone = this.GetControlValue(this.lawyerForm,'officePhone');
  // this.lawyer.eMail = this.GetControlValue(this.lawyerForm,'eMail');

  // // this.dataSource.push({
  // //   idNum: this.GetControlValue(this.newOwnerForm,'idNum'),
  // //   firstName: this.GetControlValue(this.newOwnerForm,'firstName'),
  // //   lastName: this.GetControlValue(this.newOwnerForm,'lastName'),//payment.get('amount').value,
  // //   street: this.GetControlValue(this.newOwnerForm,'street') ,
  // //   houseNum: this.GetControlValue(this.newOwnerForm,'houseNum'),
  // //   neighborhood: this.GetControlValue(this.newOwnerForm,'neighborhood'),
  // //   city: this.GetControlValue(this.newOwnerForm,'city'),
  // //   mobilePhone: this.GetControlValue(this.newOwnerForm,'mobilePhone'),
  // //   homePhone: this.GetControlValue(this.newOwnerForm,'homePhone'),
  // //   eMail: this.GetControlValue(this.newOwnerForm,'eMail'),
  // //   ownershipPercent: this.GetControlValue(this.newOwnerForm,'ownershipPercent')
  // // });
  // // this.table.renderRows(); //Table Refresh


  // this.general.Lawyers[0] = this.lawyer;//?
  // //orig this.gService.setGeneral(this.general); 

//}


public GetControlValue(form: FormGroup, field: string){
  let el = document.querySelector('input[name="'+field+'"]');
  return form.get(field).value;
}


}
