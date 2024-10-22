import { EquipeGuard } from './equipe.guard';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  EquipeComponent } from './equipe/equipe.component';
import {AddEquipeComponent} from './add-equipe/add-equipe.component'
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { NomrechercherComponent } from './nomrechercher/nomrechercher.component';
import { ListeLeagueComponent } from './liste-league/liste-league.component';

const routes: Routes = [
  {path:"equipe",component:EquipeComponent},
  {path:"add-equipe",component:AddEquipeComponent,canActivate:[EquipeGuard]},
  {path:"" ,redirectTo:"equipe",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path:"update-equipe/:id",component:UpdateEquipeComponent,canActivate:[EquipeGuard]},
  {path:"rechercheParLeague",component:RechercheParCategorieComponent},
  {path:"nomrechercher",component:NomrechercherComponent},
  {path:"listeLeague",component:ListeLeagueComponent,canActivate:[EquipeGuard]}


  

]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
