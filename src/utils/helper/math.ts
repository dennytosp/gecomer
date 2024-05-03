const isNumber = (num: string): boolean => {
  return !isNaN(parseFloat(String(num)))
}

const tryParseNumber = (num: any): any => {
  if (isNumber(num)) {
    return parseFloat(String(num))
  }
  return num
}

const roundMaxFixed = (num: number, decimals: number): number => {
  return Number(
    Math.round(Number(String(num + 'e' + decimals))) + 'e-' + decimals,
  )
}

const formatNumber = (num: number | string, comma = ',') => {
  if (typeof num !== 'number' && typeof num !== 'string') {
    return num
  }
  return String(num).replace(/(\d)(?=(\d{3})+\b)/g, `$1${comma}`)
}

const formatDollar = (number: number) => {
  return `$${number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
}

const formatMoney = (number: number) => {
  return `${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} đ`
}

export {
  isNumber,
  tryParseNumber,
  roundMaxFixed,
  formatNumber,
  formatDollar,
  formatMoney,
}
