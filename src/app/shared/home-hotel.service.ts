import { Injectable } from '@angular/core';
import { HomeHotel } from './home-hotel.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeHotelService {

  formData : HomeHotel;
  list : HomeHotel[];
  guide1 : HomeHotel;

<<<<<<< HEAD
  readonly rootURL = "https://localhost:44392/api"
  // readonly rootURL = "http://localhost:62083/api"
=======
<<<<<<< HEAD
  readonly rootURL = "https://localhost:44392/api"
=======
  // readonly rootURL = "https://localhost:44392/api"
  readonly rootURL = "http://localhost:62083/api"
>>>>>>> b705e94a3884c9914305dda14ced14e8094666a4
>>>>>>> 5e35cbbd083a66797195246c269a05831080a59c

  constructor(public http : HttpClient) { }

  postHomeHotel(formData : HomeHotel[]){
    return this.http.post(this.rootURL+'/HomeHotel',formData)
   }
 
   refreshList(){
     this.http.get(this.rootURL+'/HomeHotel')
     .toPromise().then(res => this.list = res as HomeHotel[])
   }
 
   putHomeHotel(formData : HomeHotel){
     return this.http.put(this.rootURL+'/HomeHotel/'+formData.HomeHotelID,formData)
    }
 
    deleteHomeHotel(id : number){
      return this.http.delete(this.rootURL+'/HomeHotel/'+id);
    }
    GetSingleHomeHotel(id : number): Observable<any>{
      return this.http.get(this.rootURL+'/HomeHotel/' + id)
        
    }
}



 
