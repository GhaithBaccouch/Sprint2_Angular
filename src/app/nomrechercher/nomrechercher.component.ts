import { League } from './../model/league.model';
import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { AuthService } from '../services/auth.service';
import { EquipeService } from '../services/equipe.service';

@Component({
  selector: 'app-nomrechercher',
  templateUrl: './nomrechercher.component.html',
  styles: [
  ]
})
export class NomrechercherComponent implements OnInit {

  equipe!:Equipe[];
  id! : number;
  nomequipe!:string;
  
  leagues! : League[];
  allequipe!:Equipe[];

  constructor(public  authService:AuthService,
   private equipeService:EquipeService) { }

  ngOnInit(): void {
    
    this.leagues=this.equipeService.listerLeague();
    
    //this.allequipe=this.equipeService.listeEquipe();
  }
  
  supprimerequipe(e: Equipe)
  {
    let conf = confirm("Etes-vous sûr ?");
  if (conf)
  {
    this.equipeService.supprimerequipe(e);
    this.equipe=this.equipeService.rechercherParlege(this.id);
  }
  }
  onkeyUpp(text:String)
  {
    console.log(text);
    this.equipe=this.allequipe.filter(item=>item.nom?.toLowerCase().includes(text.toLowerCase()));

  }
  onKeyUp(text:string){
    this.equipeService.rechercherParNom(this.nomequipe).
    subscribe(equipe => {
    this.equipe = equipe;
    console.log(equipe)});
    }

}
