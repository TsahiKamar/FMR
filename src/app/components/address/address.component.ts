import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatTable } from '@angular/material';
import { AddressDialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Output() save = new EventEmitter<Address>();
  
  addresses: Address[] = [];

  displayedColumns: string[] = ['customerId','type','city','street','houseNum','pob','zip'];

  dataSource: Address[];
  
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  selectedId:string = '';
  isNewAddress: boolean = false;

  constructor(private router: Router,private route: ActivatedRoute,public dialog: MatDialog) { }

  ngOnInit() {
    
    this.addresses = [];

    //orig this.properties = this.gService.getGeneral().Property;

    this.dataSource = this.addresses;
 
  }

  
  saveDetails(newAddress: Address){
  
    alert('new newAddress arrived : ' + JSON.stringify(newAddress));
    //tbc
   
  }

  onRowClicked(row) {
    // console.log('Row clicked: ', row);
    // console.log('selected row id :', row.id);
 
    // this.selectedId= row.id;
    // this.gService.setGeneralSelPropertyID(this.selectedId);
    // this.router.navigate(['/stepper']);

  }

  
  openDialog(action,obj) {
    if (obj) obj.action = action;
    
    const dialogRef = this.dialog.open(AddressDialogComponent, {
      width: '350px',
      data:obj,
      autoFocus: false
    });
  
    dialogRef.afterClosed().subscribe(result => {


      let address = JSON.parse(JSON.stringify(result.data));
      
      const newAddress : Address = {id:undefined,isDeleted: false,updateDate: new Date(), customerId:address.customerId,
         type:address.type,
         city:address.city,
         street:address.street,
         houseNum:address.houseNum,
         pob:address.pob,
         zip:address.zip
      }

      this.save.emit(newAddress);
      this.addresses.push(newAddress); 
      this.dataSource = this.addresses;
      this.table.renderRows();
 
      if(result.event == 'Add')
      {
        this.addRowData(result.data);
      } 
    });
}


  addRowData(row_obj){

    this.isNewAddress = ! this.isNewAddress;

    //const newPhone : Phone = [...this.form.value];

    //this.save.emit(this.form.value)

//     const customer = {id:undefined,updateDate:undefined,isDeleted:undefined, customerId : row_obj.customerId,fullName: row_obj.fullName, phones:[] ,addresses:[],products:[]};  
       
//     this.custService.addCustomer(customer).subscribe(result => {
//       console.log("addCustomer result : " + result );
//     },
//     error => {
//         alert("addCustomer error : " + error);
//     },
//     () => {
//         // 'onCompleted' callback.
//         // No errors
//     }

//     );

//     alert('customer:' + JSON.stringify(customer));
//  this.customers.push(customer); //temp
 
//     this.table.renderRows();
  
  }
 

}
