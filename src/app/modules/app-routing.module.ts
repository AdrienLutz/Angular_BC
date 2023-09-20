import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NftComponent } from '../components/nft/nft.component';
import { NftDetailComponent } from '../components/nft-detail/nft-detail.component';
import { NftAddComponent } from '../components/nft-add/nft-add.component';

const routes: Routes = [
  {path: 'nfts', component: NftComponent},
  {path: 'nfts/:id', component: NftDetailComponent},
  { path: 'nfts/add', component: NftAddComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
