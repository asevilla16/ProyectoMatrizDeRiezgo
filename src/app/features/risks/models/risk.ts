import { Process } from "../../process/models/process";
import { User } from "../../users/models/user";

export interface Risk{
    uid: string;
    name: string;
    impact: string;
    frequency: string;
    description: string;
    associatedProcesses: Process[];
    responsibles: User[];
}