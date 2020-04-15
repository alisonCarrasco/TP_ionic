import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecettesService } from './recettes.service';
import { Recette } from './recette.model';


@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})

export class RecettesPage implements OnInit, OnDestroy{
  
  recettes: Recette[];

  constructor(private recettesService: RecettesService) { }

  ngOnInit() 
  {
    // this.recettes = this.recettesService.getAllRecettes();
    console.log(this.recettes);
  }

  ionViewWillEnter()
  {
    this.recettes = this.recettesService.getAllRecettes();
    console.log(this.ionViewWillEnter)
  }

  ionViewDidEnter()
  {
    console.log(this.ionViewDidEnter)
  }

  ionViewDidLeave()
  {
    console.log(this.ionViewDidLeave)
  }

  ngOnDestroy()
  {
    console.log(this.ngOnDestroy)
  }

}
