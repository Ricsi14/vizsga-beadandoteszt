import { Participant } from "./Participant"

export class Event {
  private _id: string
  private _name: string
  private _location: string
  private _date: Date
  private _type: string
  private _participants: Participant[] = []

  constructor(id: string, name: string, location: string, date: Date, type: string) {
    this._id = id
    this._name = name
    this._location = location
    this._date = date
    this._type = type
  }

  get id() { return this._id }
  get name() { return this._name }
  set name(n) { this._name = n }

  get location() { return this._location }
  set location(l) { this._location = l  }

  get date() { return this._date }
  set date(d) { this._date = d }

  get type() { return this._type }
  set type(t) { this._type = t }

  get participants() { return this._participants }

  addParticipant(p: Participant) { this._participants.push(p) }
  removeParticipant(pid: string) { 
    this._participants = this._participants.filter(p => p.id !== pid)
  }
}