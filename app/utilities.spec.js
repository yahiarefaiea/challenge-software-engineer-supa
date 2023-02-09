import {expect} from 'chai'
import {isValidDate, formatDate} from './utilities'

const dateSampleAsString = '2021-03-13 15:13:05'
const dateSampleAsDateObject = new Date()
const dateSampleAsISO = '2021-03-13T20:24:31.371Z'
const dirtyDateSampleContainsDate = 'foo-bar-2021-03-13 15:13:05'
const randomString = 'foo-bar'
const emptyString = ''
const dateFormated = '2021-03-13'

describe('Date is valid if it is...', function() {
  it('formated as YYYY-MM-DD hh:mm:ss', function() {
    expect(isValidDate(dateSampleAsString)).to.equal(true)
  })
  it('formated as known value date, like `new Date()`', function() {
    expect(isValidDate(dateSampleAsDateObject)).to.equal(true)
  })
  it('not a dirty date', function() {
    expect(isValidDate(dirtyDateSampleContainsDate)).to.equal(false)
  })
  it('not a random string', function() {
    expect(isValidDate(randomString)).to.equal(false)
  })
  it('not an empty string', function() {
    expect(isValidDate(emptyString)).to.equal(false)
  })
})

describe('As per requirements, the date\'s format is valid only if it...', function() {
  it('matches the `YYYY-MM-DD` format', function() {
    expect(formatDate(dateSampleAsString)).to.equal(dateFormated)
  })
  it('doesn\'t match any other format', function() {
    expect(formatDate(dateSampleAsISO)).to.equal(dateFormated)
  })
})
