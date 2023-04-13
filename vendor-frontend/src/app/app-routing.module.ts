import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { UpdateVendorComponent } from './update-vendor/update-vendor.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';

const routes: Routes = [
  {path: 'vendors', component: VendorListComponent},
  {path: '', redirectTo: 'vendors', pathMatch: 'full'},
  {path: 'create-vendor', component: CreateVendorComponent},
  {path: 'update-vendor/:id', component: UpdateVendorComponent},
  {path: 'vendor-details/:id', component: VendorDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
