import Head from 'next/head';

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
    </div>
  );
}
