import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserarrService
{
    constructor(private http: Http) { }
    private url = '/Values/Get';
    
    getUserarrs()//: Promise<string>
    {
        return this.http.get(this.url)
            .map((Response) => Response.json());
            
    };
}