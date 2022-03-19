
import { Risk } from "../../risks/models/risk";

export interface Process {
    uid: string;
    name: string;
    type: string;
    category: string;
    description: string;
    associatedRisks: Risk[];
}