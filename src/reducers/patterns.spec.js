import patterns from './patterns'
import * as types from '../constants/ActionTypes'

describe('patterns reducer', () => {
  it('should handle initial state', () => {
    expect(
      patterns(undefined, {})
    ).toEqual([
      {
        text: 'Ginger jeans',
        id: 0
      }
    ])
  })

  it('should handle ADD_PATTERN', () => {
    expect(
      patterns([], {
        type: types.ADD_PATTERN,
        text: 'Ginger jeans'
      })
    ).toEqual([
      {
        text: 'Ginger jeans',
        id: 0
      }
    ])

    expect(
      patterns([
        {
          text: 'Wiksten tank',
          id: 0
        }
      ], {
        type: types.ADD_PATTERN,
        text: 'Ginger jeans'
      })
    ).toEqual([
      {
        text: 'Ginger jeans',
        id: 1
      }, {
        text: 'Wiksten tank',
        id: 0
      }
    ])

    expect(
      patterns([
        {
          text: 'Wiksten tank',
          id: 1
        }, {
          text: 'Ginger jeans',
          id: 0
        }
      ], {
        type: types.ADD_PATTERN,
        text: 'Elisalex dress'
      })
    ).toEqual([
      {
        text: 'Elisalex dress',
        id: 2
      }, {
        text: 'Wiksten tank',
        id: 1
      }, {
        text: 'Ginger jeans',
        id: 0
      }
    ])
  })

  it('should handle DELETE_PATTERN', () => {
    expect(
      patterns([
        {
          text: 'Wiksten tank',
          id: 1
        }, {
          text: 'Ginger jeans',
          id: 0
        }
      ], {
        type: types.DELETE_PATTERN,
        id: 1
      })
    ).toEqual([
      {
        text: 'Ginger jeans',
        id: 0
      }
    ])
  })
})
