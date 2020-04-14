import { Injectable } from '@angular/core';
import { Recette } from './recette.model';

@Injectable({
  providedIn: 'root'
})
export class RecettesService {

  private recettes: Recette[]= [
    {
    id:'r1',
    title:'gaufre',
    imageUrl:'https://odelices.ouest-france.fr/images/recettes/gaufres-970x1024.jpg',
    ingredients:["farine", "sucre", "oeuf", "chocolat" ]
  },
  {
    id:'r2',
    title:'burger',
    imageUrl:'https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F03ab5e89-bad7-4a44-b952-b30c68934215.2Ejpeg/410x230/quality/80/crop-from/center/burger-maison.jpeg',
    ingredients:["pain", "steak", "oignon", "cheddar" ]
  }

];

  constructor() { }

  getAllRecettes()
  {
    return [...this.recettes];
  }

  getRecette(recetteId:string)
  {
    return {...this.recettes.find(recette =>
      {
        return recette.id === recetteId;
      })
    };
  }

  deleteRecette(recetteId:string)
    {
      this.recettes = this.recettes.filter(recette =>
        {
          return recette.id !== recetteId;
        });
      }
    }

