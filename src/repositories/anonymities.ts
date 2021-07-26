import { Anonymity, PrismaClient } from '@prisma/client'
import { AnonymitUpdateArgs, AnonymityCreateArgs } from '../../typings/struct'

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

  async findByAddress(ipAddress: Anonymity['ipAddress']): Promise<Anonymity | null> {
    return new Promise(async (resolve, reject) => {
      const anonymity = await this.db.anonymity.findFirst({
        where: {
          ipAddress: ipAddress
        },
      })
      resolve(anonymity)
    })
  }

  async create({ ipAddress, userAgent }: AnonymityCreateArgs): Promise<Anonymity> {
    return new Promise(async (resolve, reject) => {
      const anonymity = await this.db.anonymity.create({
        data: {
          ipAddress: ipAddress,
          userAgent: userAgent
        },
      })
      resolve(anonymity)
    })
  }

  async update({ id, ipAddress, userAgent }: AnonymitUpdateArgs): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      const find = await this.findById(id)
      if (find != null) {
        const anonymity = await this.db.anonymity.update({
          where: {
            id: id
          },
          data: {
            ipAddress: ipAddress,
            userAgent: userAgent
          },
        })
        resolve(anonymity ? true : false)
      } else {
        resolve(false)
      }
    })
  }
}
