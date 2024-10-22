import { League } from './../model/league.model';

import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { EquipeService } from '../services/equipe.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {
  newEquipe = new Equipe();
  league!: League[] 
  newid!:number;
  newleague!:League;
  constructor(private equipeservices: EquipeService,
    private router :Router) { }
  ngOnInit(): void {
    this.equipeservices.listeLeague().
    subscribe(cats => {this.league = cats;
    console.log(cats);
    console.log(this.league);
    });
    }
 
  addEquipe(){
    this.newEquipe.league = this.league.find(cat => cat.id == this.newid)!;
    this.equipeservices.ajouterEquipe(this.newEquipe)
    .subscribe(prod => {
    console.log(prod);
    this.router.navigate(['equipe']).then(()=>{window.location.reload();});
    });
    }
  
  

    
    

}
