import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nft } from '../interfaces/nft';


@Injectable({
  providedIn: 'root'
})
export class NftServiceService {
  
  // URL du backend symfony
  apiURL:string = 'https://localhost:8000/api/nfts';
  
  constructor(private http: HttpClient) { }

 getAll(): Observable <Nft[]>{
  return this.http.get<Nft[]>(this.apiURL+".json");
 } 

 getOne(id:number): Observable <Nft>{
  return this.http.get<Nft>(this.apiURL+'/'+id+".json");
 } 

 
}
