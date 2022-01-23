import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatTable } from '@angular/material';
import { CustomerService } from 'src/app/services/customer.service';
import { ProductDialogComponent } from './dialog/dialog.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Output() save = new EventEmitter<Product>();
  
  products: Product[] = [];

  productsList: ProductListItem[] = [];

  displayedColumns: string[] = ['customerId','productId','name','description','interestPercents','deposit','date','profit'];
  
  dataSource: Product[];

  
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  selectedId:string = '';

  selectedProductId! : number;
  isAddCustomerProduct: boolean = false;
  customerId:string = undefined;
  
  constructor(private router: Router,private route: ActivatedRoute,private custService: CustomerService,public dialog: MatDialog) 
  { }

  ngOnInit() {
    
     this.route.queryParams.subscribe(params => {
       this.customerId = params['customerId'];
     });


    this.dataSource = null;
    
    this.custService.getProducts(this.customerId).subscribe(result => {
      this.products = [...result];
      this.dataSource = this.products;
  
      this.products.forEach(element => {
        const productListItem : ProductListItem = {productId : element.productId , name : element.name };
        this.productsList.push(productListItem);
      });

      console.log("getProducts result : " + result );
   },
   error => {
      alert("getProducts error : " + error);
    },
    () => {
   // 'onCompleted' callback.
   // No errors
    }
   );
    

    this.dataSource = this.products;
 
  }

  productSelected(event) {
    this.selectedProductId = event.source.value;
    var selectedProduct =  this.products.find(x=> x.productId == this.selectedProductId); 
    
    this.openDialog('Add',selectedProduct);
 
  }

  profitCalc() {

  }

  onRowClicked(row) {
   }

  add()
  {
    this.isAddCustomerProduct = !this.isAddCustomerProduct;
  }

  openDialog(action,obj) {
    if (obj) obj.action = action;
    obj.products = this.products;
    
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '300px',
      data:obj,
      autoFocus: false
    });
    
  
  
    dialogRef.afterClosed().subscribe(result => {
      let product = JSON.parse(JSON.stringify(result.data));
      const newProduct : Product = { id:undefined,isDeleted: false,updateDate: new Date(),customerId:product.customerId,
        productId:product.productId,
        name:product.name,
        description:product.description,
        interestPercents:product.interestPercents,
        deposit:product.deposit,
        date:product.date,
        profit:product.profit
      }
 
      this.save.emit(newProduct);
      this.products.push(newProduct); 
      this.dataSource = this.products;
      this.table.renderRows();
 

      if(result.event == 'Add')
      {
        this.addRowData(result.ata ,newProduct);
      } 
    });
  }
  
  addRowData(row_obj,newProduct){

  const request = {id:undefined,updateDate:undefined,isDeleted:undefined, customerId : row_obj.customerId,fullName: row_obj.fullName, phones:[] ,addresses:[],products:newProduct};  
   
  alert('add product request :' + JSON.stringify(request));

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
  

}
