import { FastifyReply, FastifyRequest } from 'fastify'
import { MakeListUseCase } from '../../use-cases/factories/make-list-use-cases'

export async function List(
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<void> {
  const listUseCase = MakeListUseCase()

  try {
    const resultados = await listUseCase.execute()

    reply.status(200).send(resultados)
  } catch (error) {
    reply.status(500).send({ error: 'Erro ao buscar resultados' })
  }
}
