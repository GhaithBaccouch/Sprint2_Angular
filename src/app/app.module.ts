import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipeComponent } from './equipe/equipe.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { NomrechercherComponent } from './nomrechercher/nomrechercher.component';
import { ListeLeagueComponent } from './liste-league/liste-league.component';
import { UpdateLeagueComponent } from './update-league/update-league.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EquipeComponent,
    AddEquipeComponent,
    UpdateProduitComponent,
    UpdateEquipeComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParCategorieComponent,
    NomrechercherComponent,
    ListeLeagueComponent,
    UpdateLeagueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
