import { Event } from "./models/Event"
import { Participant } from "./models/Participant"
import { EventService } from "./services/EventService"

const svc = new EventService()

const e1 = new Event("e1", "Kertiparti", "kaposvar", new Date("2025-09-01"), "family")
const e2 = new Event("e2", "Őszi Feszt", "kaposvar", new Date("2025-10-10"), "festival")

svc.create(e1)
svc.create(e2)

const p1 = new Participant("p1", "balog ricsi", "ricsi@example.com")
const p2 = new Participant("p2", "kis anna ", "anna@example.com")

svc.addParticipant("e1", p1)
svc.addParticipant("e1", p2)

console.log("osszes:", svc.findAll().map(e => e.name))
console.log("festivalok:", svc.findByType("festival").map(e => e.name))

svc.update("e2", { location: "Szeged" })
console.log("e2 hely:", svc.findById("e2")?.location)

svc.removeParticipant("e1", "p1")
console.log("e1 resztvevok:", svc.findById("e1")?.participants.map(p => p.name))

svc.delete("e2")
console.log("maradt:", svc.findAll().map(e => e.name))