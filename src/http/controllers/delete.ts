// ResultadosController.ts
import { FastifyRequest, FastifyReply } from 'fastify'
import { MakeDeleteUseCase } from '../../use-cases/factories/make-delete-use-cases'

interface Params {
  id: string
}

export async function Delete(
  request: FastifyRequest<{
    Params: Params
  }>,
  reply: FastifyReply,
) {
  const { id } = request.params

  const deleteUseCase = MakeDeleteUseCase()

  try {
    await deleteUseCase.execute({ id })

    return reply.status(201).send({
      message: 'Resultado excluido com Sucesso',
    })
  } catch (error) {
    return reply.status(400).send()
  }
}
