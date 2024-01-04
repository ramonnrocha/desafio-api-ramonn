import { FastifyInstance } from 'fastify'
import { Create } from './controllers/Create'
import { List } from './controllers/list'
import { Delete } from './controllers/delete'

export async function AppRoutes(app: FastifyInstance) {
  app.post('/result', Create)
  app.get('/result', List)
  app.delete('/result/:id', Delete)
}
