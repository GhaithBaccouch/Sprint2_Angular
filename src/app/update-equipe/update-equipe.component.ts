import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EquipeService } from '../services/equipe.service';
import { Equipe} from '../model/equipe.model';
import { League } from '../model/league.model';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styles: [
  ]
})
export class UpdateEquipeComponent implements OnInit {
  currentEquipe = new Equipe();
  league!:League[];
  updatedid!:number;
 
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private equipeService: EquipeService) { }

  ngOnInit(): void {
    //this.league=this.equipeService.listerLeague();
    this.equipeService.listeLeague().subscribe(leagues => {
      this.league = leagues;
    });
    this.equipeService.consulterEquipe(this.activatedRoute.snapshot.params['id']).subscribe((equipe) => {
      console.log(equipe);
      this.currentEquipe = equipe;
      this.updatedid=this.currentEquipe.league.id;
    });
    
  
  
  }
  updateEquipe() {
    this.currentEquipe.league = this.league.
    find(cat => cat.id == this.updatedid)!;
   this.equipeService.updateEquipe(this.currentEquipe).subscribe(prod => {
   this.router.navigate(['equipe']); }
   );
   

}
}
