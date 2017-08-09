import { ADD_PATTERN, DELETE_PATTERN } from '../constants/ActionTypes'

const initialState = [
  {
    id: 0,
    text: 'Ginger jeans'
  }
]

export default function patterns(state = initialState, action) {
  switch (action.type) {
    case ADD_PATTERN:
      return [
        {
          id: state.reduce((maxId, pattern) => Math.max(pattern.id, maxId), -1) + 1,
          text: action.text
        },
        ...state
      ]

    case DELETE_PATTERN:
      return state.filter(pattern =>
        pattern.id !== action.id
      )

    default:
      return state
  }
}
