function format(d: string | Date) {
  return new Date(d).toLocaleDateString('es-AR', { timeZone: 'UTC' })
}

export default format
