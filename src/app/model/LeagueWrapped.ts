import { League } from "./league.model";
export class LeagueWrapper{
_embedded!: { League: League[]};
}