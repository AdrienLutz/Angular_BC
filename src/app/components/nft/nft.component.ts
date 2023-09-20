import { Component, OnInit } from '@angular/core';
import { Nft } from '../../interfaces/nft';
import { NftServiceService } from 'src/app/services/nft-service.service';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.css']
})
export class NftComponent implements OnInit {

  nft: Nft[] = [];
  isLoading:boolean = false;

  constructor(private nftService: NftServiceService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.nftService.getAll().subscribe( data=>{
      this.nft = data;
      this.isLoading = false;
    })
  }

}

//  nft : Nft[] = [{
//   id : 1000, 
//   image : "img1000",
//   name : "nft1000",
//   stock : 1,
//   categoryId : 1000,
//   releaseDate: new Date('2023-09-16'),
//  }]


