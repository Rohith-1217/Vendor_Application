import { Component } from '@angular/core';
import { Vendor } from '../vendor';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-vendor',
  templateUrl: './update-vendor.component.html',
  styleUrls: ['./update-vendor.component.css']
})
export class UpdateVendorComponent {

  id!: number;
  vendor: Vendor = new Vendor();
  
  constructor(private vendorService: VendorService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.vendorService.getVendorsById(this.id).subscribe( data => {
      this.vendor=data;
    }, error => console.log(error));
  }

  goToVendorList(){
    this.router.navigate(['/vendors']);
  }

  onSubmit(){
    this.vendorService.updateVendor(this.id, this.vendor).subscribe( data => {
      this.goToVendorList();
    },error => console.log(error));
  }
}
