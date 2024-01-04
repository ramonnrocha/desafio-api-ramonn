import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { MakeCreateUseCase } from '../../use-cases/factories/make-create-use-cases'

export async function Create(request: FastifyRequest, reply: FastifyReply) {
  const resultBodySchema = z.object({
    bimestre: z.enum(['PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO']),
    disciplina: z.enum(['Biologia', 'Artes', 'Geografia', 'Sociologia']),
    nota: z
      .number()
      .min(0, 'A nota tem que ser maior igual que 0')
      .max(10, 'A nota tem que ser menor igual que 10'),
  })

  const { bimestre, disciplina, nota } = resultBodySchema.parse(request.body)

  const createUseCase = MakeCreateUseCase()

  try {
    await createUseCase.execute({ bimestre, disciplina, nota })

    return reply.status(201).send()
  } catch (error) {
    return reply.status(400).send({
      message: 'Não foi possivel cadastrar nota',
    })
  }
}
