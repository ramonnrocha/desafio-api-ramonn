import { PrismaResultRepository } from '../../repositories/prisma/prisma-resultados-repository'
import { ListUseCase } from '../list'

export function MakeListUseCase() {
  const prismaUsersRepository = new PrismaResultRepository()
  const listUseCase = new ListUseCase(prismaUsersRepository)

  return listUseCase
}
