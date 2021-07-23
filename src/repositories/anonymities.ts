import { Anonymity } from '@prisma/client'
import { AnonymityCreateArgs } from 'typings/struct'
import { Database } from '../database'

export class AnonymitiesRepository {
  private db: Database

  constructor(db) {
    this.db = db
  }

  async getMany(): Promise<Array<Anonymity>> {
    return new Promise(async (resolve, reject) => {
      resolve(await this.db.client.anonymity.findMany())
    })
  }

  async findById(id: Anonymity['id']): Promise<Anonymity | null> {
    return new Promise(async (resolve, reject) => {
      const anonymity = await this.db.client.anonymity.findUnique({
        where: {
          id: id
        },
      })
      resolve(anonymity)
    })
  }

  async findByAddress(address: Anonymity['address']): Promise<Anonymity | null> {
    return new Promise(async (resolve, reject) => {
      const anonymity = await this.db.client.anonymity.findFirst({
        where: {
          address: address
        },
      })
      resolve(anonymity)
    })
  }

  async create({ address }: AnonymityCreateArgs): Promise<Anonymity> {
    return new Promise(async (resolve, reject) => {
      const anonymity = await this.db.client.anonymity.create({
        data: {
          address: address
        },
      })
      resolve(anonymity)
    })
  }
}