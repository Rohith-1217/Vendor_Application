import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private baseURL = "http://localhost:8080/api/v1/vendors";
  constructor(private httpClient: HttpClient) { }

  getVendorsList(): Observable<Vendor[]> {
    return this.httpClient.get<Vendor[]>(`${this.baseURL}`)
  }

  createVendor(vendor: Vendor): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,vendor);
  }

  getVendorsById(id:number): Observable<Vendor> {
    return this.httpClient.get<Vendor>(`${this.baseURL}/${id}`);
  }

  updateVendor(id:number,vendor:Vendor):Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, vendor);
  }

  deleteVendor(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
