import { PrismaClient } from '@prisma/client'

export const useDatabase = () => {
  return new PrismaClient()
}