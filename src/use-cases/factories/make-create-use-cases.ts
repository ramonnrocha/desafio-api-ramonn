import { PrismaResultRepository } from '../../repositories/prisma/prisma-resultados-repository'
import { CreateUseCase } from '../create'

export function MakeCreateUseCase() {
  const prismaUsersRepository = new PrismaResultRepository()
  const createUseCase = new CreateUseCase(prismaUsersRepository)

  return createUseCase
}
