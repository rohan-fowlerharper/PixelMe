import { type HexString } from '../utils/colors'

export type Template = {
  art: Array<string>
  pallete: { [key: string]: HexString }
}
