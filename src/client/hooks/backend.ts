import { Backend } from '../infra/backend'

export const useBackend = () => {
  return new Backend()
}
