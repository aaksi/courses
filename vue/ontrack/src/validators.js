import { NAV_ITEMS, HOURS_IN_DAY, MIDNIGHT_HOUR } from '@/constans'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}
export function validateTimeLineItems(timelineItems) {
  return timelineItems.every(isTimeLineValid)
}

export function isTimeLineValid({ hour }) {
  return isHourValid(hour)
}

export function isActivityValid(activity) {
  return isNotEmptyString(activity)
}
export function validateActivities(activities) {
  return activities.every(isActivityValid)
}

export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}
function isSelectOptionValid({ value, label }) {
  return isNumber(value) && isString(label)
}
export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value)
}
export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

function isNull(value) {
  return value === null
}
function isUndefined(value) {
  return value === undefined
}

function isNumber(value) {
  return typeof value === 'number'
}
function isString(value) {
  return typeof value === 'string'
}

function isBetween(value, start, end) {
  return value >= start && value <= end
}

function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}
