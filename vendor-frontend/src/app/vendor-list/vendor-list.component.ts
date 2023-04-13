import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent {
  vendors: Vendor[];

  constructor(private vendorService: VendorService, private router: Router) {
    this.vendors = [];
  }

  ngOnInit(): void {
    this.getVendors();
  }

  private getVendors() {
    this.vendorService.getVendorsList().subscribe(data => {
      this.vendors = data;
      console.log(data);
    });
  }

  updateVendor(id: number) {
    this.router.navigate(['update-vendor', id])
  }

  deleteVendor(id: number) {
    if (confirm("Are you sure you want to delete this record?"))
      this.vendorService.deleteVendor(id).subscribe(data => {
        console.log(data);
        this.getVendors();
      })
  }

  vendorDetails(id:number){
    this.router.navigate(['vendor-details', id])
  }

}
