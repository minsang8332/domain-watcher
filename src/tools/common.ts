import crypto from 'crypto'
const randomHex = (bytes: number = 20): string =>
    crypto.randomBytes(bytes).toString('hex')
export default {
    randomHex,
}
