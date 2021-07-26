import { Anonymity, Post } from '@prisma/client'

export type AnonymityCreateArgs = {
  ipAddress: Anonymity['ipAddress']
  userAgent: Anonymity['userAgent']
}

export type AnonymitUpdateArgs = {
  id: Anonymity['id']
  ipAddress: Anonymity['ipAddress']
  userAgent: Anonymity['userAgent']
}

export type PostCreateRequest = {
  text: Post['text']
  replyTo: Post['replyTo']
}

export type PostCreateResponse = {
  success: Boolean
}

export type PostCreateArgs = {
  ipAddress: Anonymity['ipAddress']
  userAgent: Anonymity['userAgent']
  text: Post['text']
  replyTo: Post['replyTo']
}

export type PostsSearchQuery = {
  keywords?: string[]
  anonymities?: number[]
  hashtags?: string[]
}
