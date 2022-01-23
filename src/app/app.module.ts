import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './services/customer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { CustomerComponent } from './components/customer/customer.component';
//import { DialogComponent } from './components/customer-details/dialog/dialog.component';
import { AddressComponent } from './components/address/address.component';
import { ProductComponent } from './components/product/product.component';
import { PhonesComponent } from './components/phones/phones.component';
import { PhonesDetailsComponent } from './components/phones-details/phones-details.component';
import { AddressDetailsComponent } from './components/address-details/address-details.component';

import { DialogComponent } from './components/customer/dialog/dialog.component';
import { AddressDialogComponent } from './components/address/dialog/dialog.component';
import { PhoneDialogComponent } from './components/phones/dialog/dialog.component';
import { ProductDialogComponent } from './components/product/dialog/dialog.component';

//import { DialogComponent } from './components/products/dialog/dialog.component';


//Material
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';

@NgModule({
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    // Material
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],
  declarations: [],
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    PhoneDialogComponent,
    AddressDialogComponent,
    ProductDialogComponent,
    HeaderComponent,
    HomeComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    PhonesComponent,
    PhonesDetailsComponent,
    AddressComponent,
    AddressDetailsComponent,
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MaterialModule,
    HttpClientModule
  ],
  entryComponents: [
    DialogComponent,PhoneDialogComponent,AddressDialogComponent,ProductDialogComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CustomerService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
