import {Injectable, Inject} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Employee} from '../models/employee.model';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class FormPoster{

    constructor(private _http:Http){}
    private handleError(error:any){
        return Observable.throw(error.statusText||"server error")
    }
    private extractData(res:Response){
        let body = res.json();
        return body.fields || {}
    }
    postEmployeeForm(employee:Employee):Observable<any>{
        let body = JSON.stringify(employee);
        let headers = new Headers({'Content-Type':'application/json'})
        let options = new RequestOptions({headers:headers})

        return this._http.post('http://localhost:3100/postemployee',body,options)
                    .map(this.extractData)
                    .catch(this.handleError)

        
    }
}
