import React from 'react'
import MarkDown from 'markdown-to-jsx'

const ReadMe = ({ readMe }) => {
  return <MarkDown>{readMe}</MarkDown>
}
export default ReadMe
