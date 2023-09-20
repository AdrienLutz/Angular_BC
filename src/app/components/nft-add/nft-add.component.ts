import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NftServiceService } from 'src/app/services/nft-service.service';


@Component({
  selector: 'app-nft-add',
  templateUrl: './nft-add.component.html',
  styleUrls: ['./nft-add.component.css']
})


export class NftAddComponent implements OnInit {
  nftAddForm!: FormGroup;

  constructor(private fb: FormBuilder, private nftService: NftServiceService) {}

  ngOnInit() {
    this.nftAddForm = this.fb.group({
      image: ['',[Validators.required]],
      name: ['',[Validators.required]],
      stock: ['',[Validators.required]],
      releaseDate: ['',[Validators.required]],
    });
  }

  onSubmit() {
    if (this.nftAddForm.valid) {
      const nftData = this.nftAddForm.value;

      // Appelez votre service pour ajouter le NFT à la base de données
      this.nftService.addNft(nftData).subscribe(
        (response) => {
          // Gérez la réponse de votre service (par exemple, affichez un message de réussite)
          console.log('NFT ajouté avec succès !', response);
        },
        (error) => {
          // Gérez les erreurs (par exemple, affichez un message d'erreur)
          console.error('Erreur lors de l\'ajout du NFT :', error);
        }
      );
    }
  }
  
}

