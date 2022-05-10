export default function formatter(value) {
  const options = {
    style: 'currency',
    currency: 'US',
    minimumFractionDigits: 2,
  }
  return new Intl.NumberFormat('US', options).format(value)
}
