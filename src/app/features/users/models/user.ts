import { Role } from "./role";

export interface User {
    uid: string;
    name: string;
    email: string;
    role: Role;
}