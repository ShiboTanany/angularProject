
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Http,Response,Headers, RequestOptions, URLSearchParams} from '@angular/http';
@Injectable()
export class InsertService {

options: RequestOptions;
    headers: Headers;
  constructor(private http:Http) { 
this.headers = new Headers({ 'Content-Type': 'application/json', 
                                     'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new RequestOptions({ headers: this.headers });
    
  }

insert(MyObj):Observable<any>{
  
      this.headers.append('Content-Type', 'application/json');

     // let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: this.headers });
   
   

  
  
 return this.http.post('http://localhost:8082/Service/add', MyObj, this.headers).map((res: Response) => res.json())
 ._catch(this.handleError);

}

getCategories():Observable<any>{
   
    return this.http.get('http://localhost:8082/category/all').map((response:Response)=>response.json()
    
    );


}
 private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.log(errMsg);
        return Observable.throw(errMsg);
    }

  


getComponents(id:number):Observable<any>{

   return  this.http.get('http://localhost:8082/category/Category/'+id).map((response:Response)=>response.json())._catch(this.handleError);

}

}
