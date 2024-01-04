// ResultadosController.ts
import { ResultadoRepository } from '../repositories/results-repository'

interface DeleteUseCaseParams {
  id: string
}

export class DeleteUseCase {
  constructor(private resultadoRepository: ResultadoRepository) {}

  async execute({ id }: DeleteUseCaseParams) {
    const resultado = await this.resultadoRepository.delete(id)

    if (!resultado) {
      throw new Error('Não Resultado não foi encontrado')
    }
  }
}
