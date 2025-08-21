export class Participant {
    constructor(
      private readonly _id: string,
      private _name: string,
      private _email: string
    ) {}
  
    get id() { return this._id; }
    get name() { return this._name; }
    set name(v: string) { this._name = v; }
  
    get email() { return this._email; }
    set email(v: string) { this._email = v; }
  }