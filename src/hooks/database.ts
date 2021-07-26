import { PrismaClient } from '@prisma/client'

let prisma

export const useDatabase = () => {
  return prisma == null ? prisma = new PrismaClient() : prisma 
}