import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import Header from './Header'

const setup = propOverrides => {
  const props = Object.assign({}, propOverrides)

  const renderer = createRenderer()
  renderer.render(<Header {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output
  }
}

describe('components', () => {
  describe('Header', () => {
    it('should render container', () => {
      const { output } = setup()
      expect(output.type).toBe('div')
      expect(output.props.className).toBe('App')
    })
  })
})
