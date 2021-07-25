import { Anonymity, PrismaClient } from '@prisma/client'
import { AnonymityCreateArgs } from '../../typings/struct'

export class AnonymitiesRepository {
  private db: PrismaClient

  constructor(db) {
    this.db = db
  }

  async getMany(): Promise<Array<Anonymity>> {
    return new Promise(async (resolve, reject) => {
      resolve(await this.db.anonymity.findMany())
    })
  }

  async findById(id: Anonymity['id']): Promise<Anonymity | null> {
    return new Promise(async (resolve, reject) => {
      const anonymity = await this.db.anonymity.findUnique({
        where: {
          id: id
        },
      })
      resolve(anonymity)
    })
  }

  async findByAddress(address: Anonymity['address']): Promise<Anonymity | null> {
    return new Promise(async (resolve, reject) => {
      const anonymity = await this.db.anonymity.findFirst({
        where: {
          address: address
        },
      })
      resolve(anonymity)
    })
  }

  async create({ address }: AnonymityCreateArgs): Promise<Anonymity> {
    return new Promise(async (resolve, reject) => {
      const anonymity = await this.db.anonymity.create({
        data: {
          address: address
        },
      })
      resolve(anonymity)
    })
  }
}
