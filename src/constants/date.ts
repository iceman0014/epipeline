export const datePickerTypes = [
  'year',
  'month',
  'date',
  'week',
  'datetime',
] as const

export const WEEK_DAYS = [
  'sum',
  'mon',
  'tue',
  'wed',
  'thu',
  'fri',
  'sat',
] as const

export type DatePickerType = (typeof datePickerTypes)[number]
