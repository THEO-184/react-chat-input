import { $getSelection } from 'lexical'

function handleControlledTextInsertion(event: InputEvent) {
  const selection = $getSelection()
  if (typeof event === 'string') {
    selection?.insertRawText(event)
  }

  return true
}

export default handleControlledTextInsertion
