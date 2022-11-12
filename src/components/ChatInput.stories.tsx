import ChatInput from './ChatInput'
import React from 'react'

export const SimpleChatInput = () => <ChatInput />

const autoCompleteProfiles: AutoCompleteProfile[] = [
  {
    filter: (option: string, keyword: string) =>
      option.toLowerCase().includes(keyword.toLocaleLowerCase()),
    options: ['Not Gr', 'Jamestown', 'Janet Doe'],
    render: (option: string) => option,
    select: (option: string) => option,
    trigger: '@',
  },
]

export const WithMentions = () => (
  <ChatInput autoCompleteProfiles={autoCompleteProfiles} />
)
