import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import PatternList from './PatternList'

const setup = propOverrides => {
  const props = Object.assign({
    patterns: [
      {
        text: 'Ginger jeans',
        id: 0
      }, {
        text: 'Wiksten tank',
        id: 1
      }
    ],
    actions: {
      deletePattern: jest.fn()
    }
  }, propOverrides)

  const renderer = createRenderer()
  renderer.render(<PatternList {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('PatternList', () => {
    it('initial render', () => {
      const { output } = setup()

      expect(output.type).toBe('div')
      expect(output.props.className).toBe('row')
    })
  })
})
