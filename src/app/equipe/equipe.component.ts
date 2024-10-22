import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Equipe} from '../model/equipe.model'

import { EquipeService } from '../services/equipe.service';
import { League } from '../model/league.model';
@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  equipe?:Equipe[];
  league!:League[];
  constructor(private equipeservices: EquipeService,
    public authService:AuthService) {

    //this.equipe = equipeservices.listeEquipe();
   }

   ngOnInit(): void {
    this.equipeservices.listeEquipe().subscribe(equipe => {
    console.log(equipe);
    this.equipe = equipe;
    });
    
      
    }
  supprimerequipe(p: Equipe)
{
  let conf=confirm("etes vous sur");
  if(conf)
this.equipeservices.supprimerEquipe(p.id!).subscribe(() => {});
//this.router.navigate(['equipe']).then(() => {
  window.location.reload();
}

}
