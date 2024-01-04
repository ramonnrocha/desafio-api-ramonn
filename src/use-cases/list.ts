import { prisma } from '../lib/prisma'
import { ResultadoRepository } from '../repositories/results-repository'

interface Resultado {
  id: string
  disciplina: string
  nota: number
  criadoEm: Date
  atualizadoEm: Date
}

type BimestreData = {
  [bimestre in 'PRIMEIRO' | 'SEGUNDO' | 'TERCEIRO' | 'QUARTO']: Resultado[]
}

export class ListUseCase {
  constructor(private resultadoRepository: ResultadoRepository) {}

  async execute() {
    const resultados = await prisma.resultado.findMany() // Função onde o Prisma Consulta ao banco de dados para obter os resultados

    const resultadosPorBimestre: BimestreData = {
      PRIMEIRO: [],
      SEGUNDO: [],
      TERCEIRO: [],
      QUARTO: [],
    }

    if (resultados) {
      resultados.forEach((resultado) => {
        const { id, bimestre, disciplina, nota, criadoEm, atualizadoEm } =
          resultado
        if (!resultadosPorBimestre[bimestre]) {
          resultadosPorBimestre[bimestre] = []
        }
        resultadosPorBimestre[bimestre].push({
          id,
          disciplina,
          nota,
          criadoEm,
          atualizadoEm,
        })
      })

      return resultadosPorBimestre
    } else {
      return resultadosPorBimestre
    }
  }
}
