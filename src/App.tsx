import Card from './components/Card'

const text =
  'Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue. Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue. Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue. Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.'

function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full'>
      <div className='flex flex-col items-center max-w-screen-md px-4 py-8 space-y-4'>
        <div className='px-8 py-8'>
          <h1 className='py-4 text-4xl'>Line Clamp Demo</h1>
          <p>
            The following text is clamped to 10 lines. Clicking the "Read More" button will expand
            the text to its full length, revealing a complimentary "Read Less" button to hide the
            overflow text again.
          </p>
        </div>
        <Card text={text} />
      </div>
    </div>
  )
}

export default App
