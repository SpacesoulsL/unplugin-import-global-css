import type { Options } from '../types'

export function normailzeOptions(options: Options | undefined) {
  const relativeStylesPath = options?.globStylesPath ?? './styles'
  return {
    relativeStylesPath
  }
}