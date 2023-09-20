import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from '../components/app.component';
import { NftComponent } from '../components/nft/nft.component';
import { NftDetailComponent } from '../components/nft-detail/nft-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { NftAddComponent } from '../components/nft-add/nft-add.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NftComponent,
    NftDetailComponent,
    NftAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
