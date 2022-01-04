export default function Footer() {
  return (
    <footer className='flex flex-col py-4 space-y-2'>
      <div className='text-gray-500 text-xs md:text-sm'>
        Source code available on{' '}
        <a
          href='https://github.com/tundera/tailwind-line-clamp-demo'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </a>
        .
      </div>
    </footer>
  )
}
