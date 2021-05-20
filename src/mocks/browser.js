import { setupWorker } from 'msw'
import { db } from './db'
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)

const createStudents = () => {
  for (let i = 0; i < 15; i++) {
    db.student.create()
  }
}
createStudents()
window.mocks = {
  createStudents,
  getStudents: () => db.student.getAll(),
}
