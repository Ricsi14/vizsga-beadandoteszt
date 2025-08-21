// src/services/EventService.ts
import { Event } from "../models/Event"
import { Participant } from "../models/Participant"

export class EventService {
  private events: Event[] = []

  create(e: Event) {
    if (this.events.find(x => x.id === e.id)) throw new Error("dupla id")
    this.events.push(e)
    return e
  }

  update(id: string, data: Partial<{ name: string; location: string; date: Date; type: string }>) {
    const e = this.findById(id)
    if (!e) return undefined
    if (data.name !== undefined) e.name = data.name
    if (data.location !== undefined) e.location = data.location
    if (data.date !== undefined) e.date = data.date
    if (data.type !== undefined) e.type = data.type
    return e
  }

  delete(id: string) {
    const i = this.events.findIndex(x => x.id === id)
    if (i < 0) return false
    this.events.splice(i, 1)
    return true
  }

  findAll() { return [...this.events] }
  findById(id: string) { return this.events.find(x => x.id === id) }
  findByType(type: string) { return this.events.filter(x => x.type === type) }

  addParticipant(eventId: string, p: Participant) {
    const e = this.findById(eventId)
    if (!e) return false
    e.addParticipant(p)
    return true
  }

  removeParticipant(eventId: string, participantId: string) {
    const e = this.findById(eventId)
    if (!e) return false
    e.removeParticipant(participantId)
    return true
  }
}