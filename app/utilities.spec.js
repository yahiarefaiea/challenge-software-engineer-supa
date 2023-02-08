import {expect} from 'chai'
import {isValidDate, formatDate} from './utilities'

describe('Date is valid if it is...', function() {
  it('formated as YYYY-MM-DD hh:mm:ss', function() {
    expect(isValidDate(
      '2021-03-13 15:13:05'
    )).to.equal(true)
  })
  it('formated as known value date, like `new Date()`', function() {
    expect(isValidDate(
      new Date()
    )).to.equal(true)
  })
  it('not a random string', function() {
    expect(isValidDate('foo-bar')).to.equal(false)
  })
  it('not an empty string', function() {
    expect(isValidDate('')).to.equal(false)
  })
})

describe('As per requirements, the date\'s format is valid only if it...', function() {
  it('matches the `YYYY-MM-DD` format', function() {
    expect(formatDate(
      '2021-03-13 15:13:05'
    )).to.equal('2021-03-13')
  })
  it('doesn\'t match any other format', function() {
    expect(formatDate(
      '2021-03-13T20:24:31.371Z'
    )).to.equal('2021-03-13')
  })
})
