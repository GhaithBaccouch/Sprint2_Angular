import { League } from "./league.model";

export class Equipe {
    id? : number;
    nom? : string;
    classement?:number;
    datematch? : Date ;
    league!: League;
    }