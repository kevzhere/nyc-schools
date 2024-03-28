import { SatInterface, SchoolInterface, SchoolSatInterface } from '../../interfaces/interfaces'
import { mergeDataByKey } from './utilities'

const schoolData: SchoolInterface[] = [{
  dbn: '12345',
  school_name: 'Tottenville',
  academicopportunities1: 'opportunities1',
  overview_paragraph: 'overview'
}, {
  dbn: '123456', 
  school_name: 'school',
  overview_paragraph: 'school overview'
}]

const satData: SatInterface[] = [{
  dbn: '12345',
  school_name: 'Tottenville',
  sat_critical_reading_avg_score: '500',
  sat_math_avg_score: '600'
}]

const mergeResult: SchoolSatInterface[] = [{
  dbn: '12345',
  school_name: 'Tottenville',
  academicopportunities1: 'opportunities1',
  overview_paragraph: 'overview',
  sat_critical_reading_avg_score: '500',
  sat_math_avg_score: '600'
}, {
  dbn: '123456', 
  school_name: 'school',
  overview_paragraph: 'school overview'
}]

describe('Utilities', () => {
  test('mergeDataByKey should merge correctly', async () => {
    const result = mergeDataByKey([...schoolData, ...satData])
    expect(result).toEqual(mergeResult)
  })
})