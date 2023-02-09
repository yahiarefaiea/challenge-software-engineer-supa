import chai, {expect} from 'chai'
import chaiDeepMatch from 'chai-deep-match'
chai.use(chaiDeepMatch)

import {
  getLoginsByStreaks,
  structureDates,
  awardLoginsStreaks,
  updateLoginsArray
} from './loginsRepository'

const dirtyRecords = ["2023-04-02 12:48:18", "asdasd", "2023-03-16 11:48:18", "asdasd", "asdasd", "2023-04-04 03:48:18", "asdasd", "2023-03-17 02:48:18", "asdasd", "asdasd", "2023-03-19 20:48:18"]
const expectedResult = [{ START: '2023-03-16', END: '2023-03-17', LENGTH: 2 }, { START: '2023-03-19', END: '2023-03-19', LENGTH: 1 }, { START: '2023-04-02', END: '2023-04-02', LENGTH: 1 }, { START: '2023-04-04', END: '2023-04-04', LENGTH: 1 }]
const unorderedResult = [{ START: '2023-04-04', END: '2023-04-04', LENGTH: 1 }, { START: '2023-04-02', END: '2023-04-02', LENGTH: 1 }, { START: '2023-03-19', END: '2023-03-19', LENGTH: 1 }, { START: '2023-03-16', END: '2023-03-17', LENGTH: 2 }]

describe('Output is valid only if it...', function() {
  it('doesn\'t contain non-dates values', function() {
    expect(
      getLoginsByStreaks(dirtyRecords)
    ).to.deep.match(expectedResult)
  })
  it('is sorted by descending length', function() {
    expect(
      getLoginsByStreaks(dirtyRecords)
    ).to.not.deep.match(unorderedResult)
  })
})
