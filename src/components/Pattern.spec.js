import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import Pattern from './Pattern'

const setup = () => {
  const props = {
    pattern: {
      id: 0,
      text: 'Ginger jeans'
    },
    deletePattern: jest.fn()
  }

  const renderer = createRenderer()

  renderer.render(
    <Pattern {...props} />
  )

  let output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('Pattern', () => {
    it('initial render', () => {
      const { output } = setup()

      expect(output.type).toBe('div')
      expect(output.props.className).toBe('box list columns small-10 medium-8 large-8')

      const div = output.props.children

      expect(div.type).toBe('div')

      const [ text, button ] = div.props.children

      expect(text.type).toBe('p')
      expect(text.props.children).toBe('Ginger jeans')

      expect(button.type).toBe('button')
      expect(button.props.className).toBe('columns small-2 right')
    })

    it('button onClick should call deletePattern', () => {
      const { output, props } = setup()
      const button = output.props.children.props.children[1]
      button.props.onClick({})
      expect(props.deletePattern).toBeCalledWith(0)
    })
  })
})
