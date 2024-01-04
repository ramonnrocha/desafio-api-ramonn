import fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import { AppRoutes } from './http/routes'

export const app = fastify()

app.register(fastifyCors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
})

app.register(AppRoutes)
