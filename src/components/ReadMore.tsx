import { useState, useLayoutEffect, useRef } from 'react'

type ReadMoreProps = {
  text: string
}

export default function ReadMore({ text }: ReadMoreProps) {
  const contentRef = useRef<HTMLParagraphElement>(null)

  const [showMore, setShowMore] = useState(false)
  const [showLink, setShowLink] = useState(false)

  useLayoutEffect(() => {
    if (contentRef.current && contentRef.current?.clientHeight < contentRef.current?.scrollHeight) {
      setShowLink(true)
    }
  }, [contentRef])

  function onToggle() {
    setShowMore((prevState) => !prevState)
  }

  return (
    <div className='bg-gray-900 min-h-fit overflow-hidden p-4 rounded-md shadow-2xl text-white'>
      <p ref={contentRef} className={showMore ? 'line-clamp-none' : 'line-clamp-10'}>
        {text}
      </p>
      <button className={showLink ? 'text-blue-500' : 'text-blue-500 invisible'} onClick={onToggle}>
        {showMore ? 'Read less' : 'Read more'}
      </button>
    </div>
  )
}
