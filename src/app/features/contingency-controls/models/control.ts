import { User } from './../../users/models/user';
import { Risk } from "../../risks/models/risk";

export interface Control {
    uid: string;
    name: string;
    description: string;
    associatedRisks: Risk[];
    responsibles: User[];
}