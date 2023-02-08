import _ from 'lodash'
import moment from 'moment'
import {isValidDate, formatDate} from './utilities'

// get logins by streaks
export function getLoginsByStreaks(loginsRecords) {

  // filter all non-dates values
  const timestamps = loginsRecords.filter(record => isValidDate(record))

  // sort timestamps
  const timestampsSorted = timestamps.sort()

  // format all dates
  const datesFormated = timestampsSorted.map(date => formatDate(date))

  // create a duplicate-free version
  const uniqueDates = _.uniq(datesFormated)

  // structure dates
  const datesStructured = structureDates(uniqueDates)

  // sort dates by length
  const datesSortedByLength = _.orderBy(datesStructured, ['LENGTH', 'START'], ['desc', 'asc'])

  return datesSortedByLength
}

// structure dates
export function structureDates(dates) {
  let streak = 1
  let loginsByStreaks = []

  for(let i in dates) {

    // award logins streaks
    const loginRecord = awardLoginsStreaks({dates, i, streak})
    streak = loginRecord.LENGTH

    // update logins array
    loginsByStreaks = updateLoginsArray({
      array: loginsByStreaks,
      loginRecord,
      streak
    })
  }

  return loginsByStreaks
}

// award logins streaks
export function awardLoginsStreaks({dates, i, streak}) {
  const END = dates[i]
  const START = dates[i - 1] || END
  const gap = moment(END).diff(moment(START), 'days')

  if(gap > 1) streak = 1
  else if(gap === 1) streak += 1

  return {START, END, LENGTH: streak}
}

// update logins array
export function updateLoginsArray({array, loginRecord, streak}) {
  const {START, END, LENGTH} = loginRecord
  if(streak > 1) {
    const total = array.length - 1
    const dayRecord = array[total]
    dayRecord.END = END
    dayRecord.LENGTH = LENGTH
  } else array.push({START: END, END, LENGTH})

  return array
}
