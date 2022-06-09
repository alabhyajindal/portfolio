import Image from 'next/image';

export default function Searchselect() {
  return (
    <div>
      <h1 className='text-4xl text-fuchsia-500 font-sans font-semibold select-none tracking-tighter'>
        Search Select
      </h1>
      <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight mt-2'>
        <p>
          Search Select is a lightweight browser extension available for Chrome
          that allows users to select and view search results quickly with
          shortcuts.
        </p>
        <p>
          The project is created with JavaScript, HTML, CSS and the Chrome Web
          APIs.
        </p>
        <div className='flex gap-6 uppercase text-fuchsia-500 font-bold text-base'>
          <a
            className='hover:text-fuchsia-400'
            href='https://github.com/alabhyajindal/searchselect'
            target='_blank'
            rel='noreferrer'
          >
            Source Code
          </a>
          <a
            className='hover:text-fuchsia-400'
            href='https://chrome.google.com/webstore/detail/search-select/ijpalmkmpikekpglgjacfnaecdidhmgn'
            target='_blank'
            rel='noreferrer'
          >
            Chrome Web Store
          </a>
        </div>
      </div>
      <div className='mt-8 relative aspect-[16/9] bg-fuchsia-200 rounded-md shadow-md border'>
        <Image
          src='/searchselect/screen4.jpg'
          layout='fill'
          objectFit='contain'
          className='rounded-md'
          alt='Screenshot of the Search Select extension page on the Chrome Web Store with a 5 star review by a user.'
        />
      </div>
      <div className='mt-8'>
        <h2 className='text-3xl font-sans font-semibold select-none tracking-tighter'>
          Purpose
        </h2>
        <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight mt-2'>
          <p>
            I am always looking for ways to speed up my workflow. I noticed
            that, like other developers, I use Google a lot. Having to move my
            hand over to the mouse after every search query slowed down my
            workflow. I wanted to be able to select the search results using the
            keyboard which led me to create Search Select.
          </p>
        </div>
      </div>

      <div className='mt-8 relative aspect-[16/9] bg-fuchsia-200 rounded-md shadow-md border'>
        <Image
          src='/searchselect/screen0.png'
          layout='fill'
          objectFit='contain'
          className='rounded-md'
          alt='Screenshot of a Google search results page with instructions on the side about using the Search Select extension.'
        />
      </div>
      <div className='mt-8 relative aspect-[16/9] bg-fuchsia-200 rounded-md shadow-md border'>
        <Image
          src='/searchselect/screen1.jpg'
          layout='fill'
          objectFit='contain'
          className='rounded-md'
          alt='Screenshot of a Google search results page with the popup menu of the Search Select extension open displaying three options: Settings, Send Feedback and About.'
        />
      </div>
      <div className='mt-8 relative aspect-[16/9] bg-fuchsia-200 rounded-md shadow-md border'>
        <Image
          src='/searchselect/screen2.jpg'
          layout='fill'
          objectFit='contain'
          className='rounded-md'
          alt='Screenshot of the Search Select settings page displaying a form which can be used by the user to customize the navigation shortcut keys.'
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
          <p>
            The extension is currently being used by me and my friends. Version
            0.0.2 was released on the Chrome Web Store a while back with bug
            fixes and design improvements. I want to add support for YouTube in
            the future.
          </p>
        </div>
      </div>

      <div className='mt-8'>
        <h2 className='text-3xl font-sans font-semibold select-none tracking-tighter'>
          What I learned
        </h2>
        <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight mt-2'>
          <p>
            I learned how to create a browser extension from scrach, taking it
            from an idea to publishing it online for everyone to use. It made me
            appreciate the power of JavaScript even more and made me realize all
            the wonderful things that can be done with it.
          </p>
        </div>
      </div>
    </div>
  );
}
