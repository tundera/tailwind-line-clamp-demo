import { useState, useLayoutEffect, useRef } from 'react'

type CardProps = {
  text: string
}
export default function Card({ text }: CardProps) {
  const contentRef = useRef<HTMLParagraphElement>(null)

  const [showMore, setShowMore] = useState(false)
  const [showLink, setShowLink] = useState(false)

  useLayoutEffect(() => {
    console.log(contentRef)
    if (contentRef.current && contentRef.current?.clientHeight < contentRef.current?.scrollHeight) {
      setShowLink(true)
    }
  }, [contentRef])

  function onToggle() {
    setShowMore((prevState) => !prevState)
  }

  return (
    <div className='bg-gray-900 flex-initial h-[800px] overflow-hidden p-4 rounded-md shadow-2xl text-white'>
      <p ref={contentRef} className={showMore ? 'line-clamp-none' : 'line-clamp-10'}>
        {text}
      </p>
      {showLink ? (
        <a className='text-blue-500' onClick={onToggle}>
          {showMore ? 'Read less' : 'Read more'}
        </a>
      ) : null}

      <div className='flex font-bold justify-between py-4'>
        <div>Client Height: {contentRef.current ? contentRef.current.clientHeight : null}</div>
        <div>Scroll Height: {contentRef.current ? contentRef.current.scrollHeight : null}</div>
      </div>
    </div>
  )
}
