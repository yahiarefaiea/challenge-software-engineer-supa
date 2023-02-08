import moment from 'moment'

export function isValidDate(value) {
  return moment(value, null, true).isValid()
}

export function formatDate(date) {
  const DATE_FORMAT = 'YYYY-MM-DD'
  return moment(date).format(DATE_FORMAT)
}
