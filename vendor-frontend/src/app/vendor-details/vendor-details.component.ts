import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent {

  id!: number;
  vendor: Vendor = new Vendor;
  
  constructor(private vendorService: VendorService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.vendorService.getVendorsById(this.id).subscribe( data => {
      this.vendor=data;
    }, error => console.log(error));
  }
}
