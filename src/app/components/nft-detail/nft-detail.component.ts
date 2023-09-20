import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nft } from 'src/app/interfaces/nft';
import { NftServiceService } from 'src/app/services/nft-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-nft-detail',
  templateUrl: './nft-detail.component.html',
  styleUrls: ['./nft-detail.component.css']
})
export class NftDetailComponent implements OnInit {

  // id?: number;
  // nft?: Nft[] = [];
  nft!: Nft;
  isLoading!: boolean;

  constructor(private activatedRoute: ActivatedRoute, private nftService: NftServiceService) {


  }
  ngOnInit(): void {
    this.isLoading = true;
    let id = parseInt(<string>this.activatedRoute.snapshot.paramMap.get("id"));

    this.nftService.getOne(id).subscribe(data => {
      this.nft = data;
      this.isLoading = false;
    })
  }

}
