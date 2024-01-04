import { Prisma } from '@prisma/client'
import { prisma } from '../../lib/prisma'
import { ResultadoRepository } from '../results-repository'

export class PrismaResultRepository implements ResultadoRepository {
  async findMany() {
    const resultados = await prisma.resultado.findMany()

    return resultados
  }

  async delete(id: string) {
    const user = await prisma.resultado.delete({
      where: {
        id,
      },
    })

    return user
  }

  async create(data: Prisma.ResultadoCreateInput) {
    const result = await prisma.resultado.create({
      data,
    })

    return result
  }

  async findFirst(bimestre: string, disciplina: string) {
    const result = await prisma.resultado.findFirst({
      where: {
        bimestre,
        disciplina,
      },
    })

    return result
  }

  async update(id: string, nota: number) {
    const result = await prisma.resultado.update({
      where: {
        id,
      },
      data: {
        nota,
      },
    })

    return result
  }
}
