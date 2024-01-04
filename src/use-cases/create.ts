import { ResultadoRepository } from '../repositories/results-repository'

interface CreateUseCaseParams {
  bimestre: string
  disciplina: string
  nota: number
}

export class CreateUseCase {
  constructor(private resultadoRepository: ResultadoRepository) {}

  async execute({ bimestre, disciplina, nota }: CreateUseCaseParams) {
    const resultadoExistente = await this.resultadoRepository.findFirst(
      bimestre,
      disciplina,
    )

    if (resultadoExistente) {
      await this.resultadoRepository.update(resultadoExistente.id, nota)
    } else {
      const resultado = await this.resultadoRepository.create({
        bimestre,
        disciplina,
        nota,
      })

      return {
        resultado,
      }
    }
  }
}
