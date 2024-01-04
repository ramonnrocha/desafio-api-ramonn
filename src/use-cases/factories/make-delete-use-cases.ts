import { PrismaResultRepository } from '../../repositories/prisma/prisma-resultados-repository'
import { DeleteUseCase } from '../delete'

export function MakeDeleteUseCase() {
  const prismaUsersRepository = new PrismaResultRepository()
  const deleteUseCase = new DeleteUseCase(prismaUsersRepository)

  return deleteUseCase
}
