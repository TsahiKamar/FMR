import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatTable } from '@angular/material';
import { PhoneDialogComponent } from  '../phones/dialog/dialog.component';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  @Output() save = new EventEmitter<Phone>();//new EventEmitter<{newPhone: Phone,phones: Phone[]}>();
  
  phones: Phone[] = [];

  displayedColumns: string[] = ['type','phoneNumber'];
  
  dataSource: Phone[];
  
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  selectedId:string = '';
  isNewPhone: boolean = false;


  constructor(private router: Router,private route: ActivatedRoute,public dialog: MatDialog) { }//,private gService: GeneralService

  ngOnInit() {
    
    this.phones = [];

    //orig this.properties = this.gService.getGeneral().Property;

    this.dataSource = this.phones;
 
  }

  // saveDetails(newPhone: Phone){
  
  //   alert('new phone arrived : ' + JSON.stringify(newPhone));
  //   //tbc
   
  // }


  onRowClicked(row) {
    // console.log('Row clicked: ', row);
    // console.log('selected row id :', row.id);
 
    // this.selectedId= row.id;
    // this.gService.setGeneralSelPropertyID(this.selectedId);
    // this.router.navigate(['/stepper']);

  }

  openDialog(action,obj) {
    if (obj) obj.action = action;
    
    const dialogRef = this.dialog.open(PhoneDialogComponent, {
      width: '300px',
      data:obj,
      autoFocus: false
    });
  
    dialogRef.afterClosed().subscribe(result => {
 
     let phone = JSON.parse(JSON.stringify(result.data));
     const newPhone : Phone = { id:undefined,isDeleted: false,updateDate: new Date(), customerId:phone.customerId ,
       type:phone.type,
       phoneNumber:phone.phoneNumber
     }

     this.save.emit(newPhone);
     this.phones.push(newPhone); 
     this.dataSource = this.phones;
     this.table.renderRows();

     //this.save.emit({newPhone:newPhone,phones:this.phones});

     if(result.event == 'Add')
      {
        this.addRowData(result.data);
      } 
    });
}


  addRowData(row_obj){

    this.isNewPhone = ! this.isNewPhone;

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

  
  
  }
 
 
}
