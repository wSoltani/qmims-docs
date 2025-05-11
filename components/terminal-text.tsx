'use client'

import React, { useState, useEffect } from 'react'

interface TerminalTextProps {
  text: string
  prefix?: string
  typingSpeed?: number
  cursorBlinkSpeed?: number
  className?: string
  onComplete?: () => void
}

export function TerminalText({
  text,
  prefix = '$',
  typingSpeed = 100,
  cursorBlinkSpeed = 530,
  className = '',
  onComplete
}: TerminalTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)
  const [isTyping, setIsTyping] = useState(true)

  // Handle typing animation
  useEffect(() => {
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else {
      setIsTyping(false)
      if (onComplete) onComplete()
    }
  }, [displayText, text, typingSpeed, onComplete])

  // Handle cursor blinking (only after typing is complete)
  useEffect(() => {
    if (!isTyping) {
      const interval = setInterval(() => {
        setCursorVisible(prev => !prev)
      }, cursorBlinkSpeed)
      return () => clearInterval(interval)
    }
  }, [isTyping, cursorBlinkSpeed])

  return (
    <div className={`terminal-font inline-flex items-center justify-center ${className}`}>
      <span className="text-gray-400 mr-1">{prefix}</span>
      <span className="text-green-400">{displayText}</span>
      <span 
        className="text-green-400 inline-block" 
        style={{ 
          opacity: cursorVisible ? 1 : 0,
          width: '0.6em',
          height: '1.1em',
          backgroundColor: '#00ff00',
          marginLeft: '1px',
          transform: 'translateY(1px)'
        }}
      >
      </span>
    </div>
  )
}
