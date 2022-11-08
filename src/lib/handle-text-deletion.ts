import { $getSelection, RangeSelection } from 'lexical'

function handleTextDeletion(event: boolean) {
  const selection = $getSelection() as RangeSelection | null
  selection?.deleteCharacter(event)
  return true
}

export default handleTextDeletion
