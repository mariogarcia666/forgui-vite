import { User } from "./models/user.model";

export abstract class Globals {
    static user?: User = new User();
}