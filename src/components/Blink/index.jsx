import React, { useState, useEffect } from 'react'
import './index.less'

export default function Blink(props) {
  const { 
    text = '趣谈前端',
    fontSize = '48px',
    themeColor = '#000',
    textColor = ['#74fcfd', '#ea3448']
  } = props

  useEffect(() => {
    
  }, [])

  return (
    <div className='blink' style={{backgroundColor: themeColor}}>
      <div className="blink-item" data-text={text} style={{fontSize: fontSize}}>
        <div className="text text-front" style={{color: textColor[0]}}>{text}</div>
        <div className="text text-back" style={{color: textColor[1]}}>{text}</div>
      </div>
    </div> 
  )
}