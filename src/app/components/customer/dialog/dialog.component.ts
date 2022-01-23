import { Component, Inject, OnInit, Optional } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

export interface UsersData {} 

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  action:string;
  local_data:any;

    constructor(
        private dialogRef: MatDialogRef<DialogComponent>,
        @Optional() @Inject(MAT_DIALOG_DATA) public data:UsersData) { 
     
        this.local_data = {...data};
        this.action = this.local_data.action;

      }

    ngOnInit() {
   
    }

    save() {
        this.dialogRef.close({event:this.action,data:this.local_data}); // this.form.value
    } 

    close() {
        this.dialogRef.close({event:'Cancel'});
    }
}


