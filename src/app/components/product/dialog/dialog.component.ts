import { Component, Inject, OnInit, Optional } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

export interface UsersData {} 

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class ProductDialogComponent implements OnInit {

  action:string;
  local_data:any;
  products:Product[];
  selectedProductId! : number;

    constructor(
        private dialogRef: MatDialogRef<ProductDialogComponent>,
        @Optional() @Inject(MAT_DIALOG_DATA) public data:any) {//UsersData 
        //this.id = data.id;
        //this.fullName = data.fullName;

        this.local_data = {...data};

this.local_data.deposit = null;//?

        this.action = this.local_data.action;

        this.products = this.local_data.products;
        //this.products = dialogRef.componentInstance.products;//{...products};//this.local_data.products;

      }

    ngOnInit() {
    }

    productSelected(event) {
      this.selectedProductId = event.source.value;
      var selectedProduct =  this.products.find(x=> x.productId == this.selectedProductId); 
      this.local_data = {...selectedProduct};//?
      this.local_data.deposit = null;//?

    }
    save() {
        this.dialogRef.close({event:this.action,data:this.local_data}); 
    } 

    close() {
        this.dialogRef.close({event:'Cancel'});
    }
}


