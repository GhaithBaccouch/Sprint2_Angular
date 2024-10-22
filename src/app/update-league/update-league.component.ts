import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { League } from '../model/league.model';

@Component({
  selector: 'app-update-league',
  templateUrl: './update-league.component.html',
  styles: [
  ]
})
export class UpdateLeagueComponent implements OnInit {
  @Input()
ajout!:boolean;

  @Input()
  league!:League;


  @Output()
  leagueupdated=new EventEmitter<League>();
 



  constructor() { }

  ngOnInit(): void {
    console.log(this.league);
  }
  saveCategorie(){
    this.leagueupdated.emit(this.league);
    
    
    }
    

}
