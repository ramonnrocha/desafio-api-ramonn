import { Prisma, Resultado } from '@prisma/client'

export interface ResultadoRepository {
  create(data: Prisma.ResultadoCreateInput): Promise<Resultado>
  findMany(): Promise<Resultado[] | null>
  delete(id: string): Promise<Resultado | null>
  findFirst(bimestre: string, disciplina: string): Promise<Resultado | null>
  update(id: string, nota: number): Promise<Resultado | null>
}
