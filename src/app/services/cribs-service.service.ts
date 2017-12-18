import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';
import { Crib } from 'app/crib';
@Injectable()
export class CribsService {

  constructor(private http : Http) { }

public newCribSubject = new Subject<any>();

    getAllCribs(){
      return this.http.get('data/cribs.json').map(res => res.json())
    }
   addCrib(data){
     data.image="https://cdn.trendir.com/wp-content/uploads/old/house-design/assets_c/2013/10/diverse-luxury-touches-within-complex-open-house-design-1-pool-straight-thumb-970xauto-21051.jpg";
    this.newCribSubject.next(data);
   }
}
