import { parse } from 'qs'
import { MAGNET_KEY, SPLIT_MAGNET_STRING } from './movies.const'

export const extractMagnetFromQuery = (query: string) => {
  const parsedMagnetLink = parse(query)
  return String(parsedMagnetLink[MAGNET_KEY]).replace(SPLIT_MAGNET_STRING, '')
}
