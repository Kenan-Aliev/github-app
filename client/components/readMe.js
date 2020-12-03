import React from 'react'
import MarkDown from 'markdown-to-jsx'
import { useSelector } from 'react-redux'

const ReadMe = () => {
  const rdM = useSelector((s) => s.readMe.readMe)
  return <MarkDown>{rdM}</MarkDown>
}
export default ReadMe
