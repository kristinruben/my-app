import * as types from '../constants/ActionTypes'

export const addPattern = text => ({ type: types.ADD_PATTERN, text })
export const deletePattern = id => ({ type: types.DELETE_PATTERN, id })
