import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError,tap } from 'rxjs/operators';
//5161

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
 
   headers = new HttpHeaders({
       'Access-Control-Allow-Origin': '*' 
        });
   options = { headers: this.headers };


constructor(private http: HttpClient) {
}

public getCustomers():Observable<any> {
return this.http.get<any>('http://localhost:63281/Customer/customers',this.options) 
.pipe(
  map((res: Customer) => res )
)
}

public addCustomer(request: Customer):Observable<any> {
  return this.http.post<any>('http://localhost:63281/Customer/addCustomer',request,this.options)
  .pipe(
    map((res: any) => res )//OK res["data"])
  )
  }
  


public getCustomerDetails(id:string):Observable<any> {
  return this.http.get<Customer>('http://localhost:63281/Customer/GetCustomerDetails/' + id,this.options)
  .pipe(
    map((res: Customer) => res )//OK res["data"])
  )
  }

  
  public updateCustomerDetails(request: Customer):Observable<any> {
    return this.http.put<any>('http://localhost:63281/Customer/customerDetailsUpdate',request,this.options)
    .pipe(
      map((res: any) => res )// res["data"])
    )    
   
  }

  public getProducts():Observable<any> {
    return this.http.get<Product>('http://localhost:63281/Customer/products',this.options)
    .pipe(
      map((res: Product) => res )//OK res["data"])
    )
    }
   

}
