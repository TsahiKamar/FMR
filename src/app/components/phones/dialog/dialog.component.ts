import { Component, Inject, OnInit, Optional } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

import { CustomerComponent } from '../../customer/customer.component';

export interface UsersData {} 

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class PhoneDialogComponent implements OnInit {

  action:string;
  local_data:any;

    constructor(
        private dialogRef: MatDialogRef<PhoneDialogComponent>,
        //@Inject(MAT_DIALOG_DATA) data) {
        @Optional() @Inject(MAT_DIALOG_DATA) public data:UsersData) { 
        //this.id = data.id;
        //this.fullName = data.fullName;

        this.local_data = {...data};
        this.action = this.local_data.action;

      }

    ngOnInit() {
    }

    save() {
      alert('save !' + JSON.stringify(this.local_data));

      this.dialogRef.close({event:this.action,data:this.local_data}); 
    } 

    close() {
        this.dialogRef.close({event:'Cancel'});
    }
}


