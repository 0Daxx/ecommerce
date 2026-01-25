import { it, expect, describe } from 'vitest'

import { formatMoney } from './money'

describe('format money ', () => { 
  it('formats 1999 cents as $19.99 ', () => {
    expect(formatMoney(10)).toBe('$0.10')
    expect(formatMoney(5000)).toEqual('$50.00')
    expect(formatMoney(500000)).toEqual('$5000.00')
  })

  it('display 2 decimal ', () => {
    expect(formatMoney(1090)).toBe('$10.90')
    expect(formatMoney(100)).toBe('$1.00')
  })
})

/* 
describe : groups tests together 
group of test : test suite 
*/