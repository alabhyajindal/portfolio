import Head from 'next/head';
import Image from 'next/image';

export default function FastFlow() {
  return (
    <div>
      <Head>
        <title>Fast Flow</title>
      </Head>
      <h1 className='text-4xl text-fuchsia-500 font-sans font-semibold select-none tracking-tight'>
        Fast Flow
      </h1>
      <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight mt-2'>
        <p>
          Fast Flow is a new way to create flow charts using only your keyboard.
        </p>
        <p>The project is created with React Flow, React and JavaScript.</p>
        <div className='flex gap-6 uppercase text-fuchsia-500 font-bold text-base'>
          <a
            className='hover:text-fuchsia-400'
            href='https://github.com/alabhyajindal/fastflow'
            target='_blank'
            rel='noreferrer'
          >
            Source Code
          </a>
          <a
            className='hover:text-fuchsia-400'
            href='https://fastflow.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            Live Site
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
        <h2 className='text-3xl font-sans font-semibold select-none tracking-tight'>
          Purpose
        </h2>
        <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight mt-2'>
          <p>
            I created Fast Flow as part of the interview process at Maya Labs,
            where I currently work as a Frontend Engineer. At Maya Labs, we have
            created a frontend on top of Node-RED, which is a flow based editor.
            Working on the project as part of the interview process gave me a
            better understanding of the product before joining the team.
          </p>
        </div>
      </div>
      <div className='mt-8'>
        <h2 className='text-3xl font-sans font-semibold select-none tracking-tight'>
          Spotlight
        </h2>
        <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight mt-2'>
          <p></p>
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
      </div>

      <div className='mt-8'>
        <h2 className='text-3xl font-sans font-semibold select-none tracking-tight'>
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
        <h2 className='text-3xl font-sans font-semibold select-none tracking-tight'>
          What I learned
        </h2>
        <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight mt-2'>
          <p>
            I learned how to create a browser extension from scratch, taking it
            from an idea to publishing it online for everyone to use. It made me
            appreciate the power of JavaScript even more and made me realize all
            the wonderful things that can be done with it.
          </p>
        </div>
      </div>
    </div>
  );
}
