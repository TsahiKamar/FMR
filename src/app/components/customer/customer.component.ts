import { CustomerDetailsComponent } from './../customer-details/customer-details.component';
//import { DialogComponent } from '/.././customer-details/dialog/dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatTable } from '@angular/material';
import { DialogComponent } from  '../customer/dialog/dialog.component';//'../dialog/dialog.component';//'./dialog/dialog.component';
import { FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

 
  customers: Customer[] = [];

  displayedColumns: string[] = ['id','customerId','fullName'];
  
  dataSource: Customer[];
  
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  //selectedId:string = '';

  constructor(private router: Router,private route: ActivatedRoute,public dialog: MatDialog,private custService: CustomerService) { }

  ngOnInit() {
    
    this.custService.getCustomers().subscribe(result => {
      this.customers = [...result]; 
      this.dataSource = this.customers;
     },
    error => {
        alert("getCustomers error : " + JSON.stringify(error));
    },
    () => {
        // 'onCompleted' callback.
        // No errors
    }
    );
   
    this.dataSource = this.customers;
 
  }

  
  onRowClicked(row) {
     this.router.navigate(['/customerDetails'], { queryParams: { id: row.id, customerId: row.customerId,fullName:row.fullName}});
  }

  openDialog(action,obj) {
    if (obj) obj.action = action;
    
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data:obj,
      autoFocus: false
    });
  
    dialogRef.afterClosed().subscribe(result => {
      //(this.dataSource.length + 1).toString()
      let customer = JSON.parse(JSON.stringify(result.data));
      const newCustomer : Customer = { id: null,isDeleted: false,updateDate: new Date(), customerId:customer.customerId,
        fullName:customer.fullName,
        phones:null,
        addresses:null,
        products:null
      }
 
      this.customers.push(newCustomer); 
      this.dataSource = this.customers;
      this.table.renderRows();

      if(result.event == 'Add')
      {
        this.addRowData(result.data);
      } else if(result.event == 'Update')
      {
        this.updateRowData(result.data);
      }
    });
  }
  
 
  addRowData(row_obj){

    const customer = {id:undefined,updateDate:undefined,isDeleted:undefined, customerId : row_obj.customerId,fullName: row_obj.fullName, phones:[] ,addresses:[],products:[]};  
       
    this.custService.addCustomer(customer).subscribe(result => {
      console.log("addCustomer result : " + result );
    },
    error => {
        alert("addCustomer error : " + error);
    },
    () => {
        // 'onCompleted' callback.
        // No errors
    }

    );

   this.customers.push(customer); //temp
 
    this.table.renderRows();
  
  }
  
  
  updateRowData(row_obj){
    var customer = this.customers.find(x=> x.id === row_obj.id );
    if (customer)
    {
      customer.isDeleted = false;
      customer.updateDate = new Date() ;
      
      customer.customerId = row_obj.customerId;
      customer.fullName = row_obj.fullName;
      customer.id = row_obj.id;
      customer.addresses = row_obj.addresses;
      customer.products = row_obj.products;
      customer.phones = row_obj.phones;
      
      this.custService.updateCustomerDetails(customer).subscribe(result => {
        console.log("updateCustomerDetails result : " + result );
      },
      error => {
          alert("updateCustomerDetails error : " + error);
      },
      () => {
          // No errors
      }
      );

      this.table.renderRows();//?
   }

  }
  
  public GetControlValue(form: FormGroup, field: string){
    let el = document.querySelector('input[name="'+field+'"]');
    return form.get(field).value;
  }
  


}
