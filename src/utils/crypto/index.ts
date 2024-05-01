import CryptoJS from 'crypto-js'

let passphrase =
  'gecomer-88eab76637853e4067334bfeef0a82e67aa76a4561135922a90e05cecc1bb849c73dd97d1f50fdc1f4f3d'

const numberKey = [598247659532, 912221047613]
const numberIv = [754329871025, 818963540928]

const CRYPTO_KEY = CryptoJS.lib.WordArray.create(numberKey, 12)
const CRYPTO_IV = CryptoJS.lib.WordArray.create(numberIv, 12)

const encrypted = (str: string) => {
  const myEncrypted = CryptoJS.AES.encrypt(String(str), CRYPTO_KEY, {
    iv: CRYPTO_IV,
  }).toString()

  return myEncrypted
}

const decrypted = (str: string) => {
  const myDecrypted = CryptoJS.AES.decrypt(str, CRYPTO_KEY, {
    iv: CRYPTO_IV,
  }).toString(CryptoJS.enc.Utf8)

  return myDecrypted
}

export { encrypted, decrypted }
