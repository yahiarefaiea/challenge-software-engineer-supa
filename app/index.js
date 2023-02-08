import {printTable} from 'console-table-printer'
import {getLoginsByStreaks} from './loginsRepository'
import loginsRecords from '../loginsRecords.json'

// get logins by streaks
const logins = getLoginsByStreaks(loginsRecords)

// print logins
printTable(logins)
