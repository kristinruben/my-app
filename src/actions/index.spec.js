import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('pattern actions', () => {
  it('addPattern should create ADD_PATTERN action', () => {
    expect(actions.addPattern('Ginger jeans')).toEqual({
      type: types.ADD_PATTERN,
      text: 'Ginger jeans'
    })
  })

  it('deletePattern should create DELETE_PATTERN action', () => {
    expect(actions.deletePattern(1)).toEqual({
      type: types.DELETE_PATTERN,
      id: 1
    })
  })
})
