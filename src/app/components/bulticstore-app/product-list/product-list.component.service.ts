import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './model/Bock';

@Injectable ()

export class BooksServices {
    private url = 'http://localhost:44382/api/bulticstore';

    httpsOptions = {
        Headers: new HttpHeaders ({'content-type' : 'application/json'})
    }
    constructor (private https:HttpClient){}

    getBock(){
        return this.https.get(this.url)
    }
}
