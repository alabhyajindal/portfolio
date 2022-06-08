import Image from 'next/image';

export default function searchselect() {
  return (
    <div>
      <h1 className='text-4xl text-fuchsia-500 font-sans font-semibold select-none tracking-tighter'>
        Search Select
      </h1>
      <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight mt-2'>
        <p>Add intro</p>
        <p>
          The project is created with JavaScript, HTML, CSS and the Chrome Web
          APIs.
        </p>
        <div className='flex gap-6 uppercase text-fuchsia-500 font-bold text-base'>
          <a
            href='https://github.com/alabhyajindal/searchselect'
            target='_blank'
            rel='noreferrer'
          >
            Source Code
          </a>
          <a
            href='https://chrome.google.com/webstore/detail/search-select/ijpalmkmpikekpglgjacfnaecdidhmgn'
            target='_blank'
            rel='noreferrer'
          >
            Chrome Web Store
          </a>
        </div>
      </div>
      {/* Replace below with a video tour */}
      <div className='mt-8 relative aspect-[15.9/7.9] bg-fuchsia-200 rounded-md shadow-md border'>
        <Image
          src='/visits/screen6.png'
          layout='fill'
          objectFit='contain'
          className='rounded-md'
        />
      </div>
      <div className='mt-8'>
        <h2 className='text-3xl font-sans font-semibold select-none tracking-tighter'>
          Purpose
        </h2>
        <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight mt-2'>
          <p>Add purpose</p>
        </div>
      </div>

      {/* Replace image and add more if needed */}
      <div className='mt-8 relative aspect-[15.9/7.9] bg-fuchsia-200 rounded-md shadow-md border'>
        <Image
          src='/visits/screen0.png'
          layout='fill'
          objectFit='contain'
          className='rounded-md'
        />
      </div>

      <div className='mt-8'>
        <h2 className='text-3xl font-sans font-semibold select-none tracking-tighter'>
          Spotlight
        </h2>
        <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight mt-2'>
          {/* Add alt to all screenshots on this page */}
          <p>
            Add one main or difficult feature and explain how it was implemented
          </p>
        </div>
      </div>

      <div className='mt-8'>
        <h2 className='text-3xl font-sans font-semibold select-none tracking-tighter'>
          Current Status
        </h2>
        <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight mt-2'>
          <p>Add current status</p>
        </div>
      </div>

      <div className='mt-8'>
        <h2 className='text-3xl font-sans font-semibold select-none tracking-tighter'>
          What I learned
        </h2>
        <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight mt-2'>
          <p>Add lessons</p>
        </div>
      </div>
    </div>
  );
}
