import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { FormsModule } from '@angular/forms';
import { UpdateVendorComponent } from './update-vendor/update-vendor.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';

@NgModule({
  declarations: [
    AppComponent,
    VendorListComponent,
    CreateVendorComponent,
    UpdateVendorComponent,
    VendorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
