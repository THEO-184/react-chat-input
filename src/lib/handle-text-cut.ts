import { $getSelection, NodeSelection, RangeSelection } from 'lexical'
// import { $getSelection } from 'lexical'

function handleTextCut() {
  return (event: ClipboardEvent) => {
    const selection = $getSelection() as RangeSelection
    const data = selection?.getNodes().map((node) => node.exportJSON())
    console.log('serialized', data)
    const text = selection?.getTextContent()
    if (!text) {
      return false
    }
    console.log('text', text)
    event.clipboardData?.setData('text', text.toString())
    event.preventDefault()
    selection?.insertText('')
    return true
  }
}

export default handleTextCut
