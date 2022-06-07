import Link from 'next/link';

export default function Home() {
  return (
    <div id='main'>
      <div className='text-slate-600 font-medium max-w-lg text-lg space-y-3'>
        <p>
          Hey, I'm Alabhya. I live in Khliehriat, Meghalaya. I enjoy using
          JavaScript and I'm always working on something. Right now I am
          expanding my skillsets by learning TypeScript.
        </p>
        <p>
          Some of my favorite technologies include Next.js, Tailwind CSS and
          Supabase. I also try and contribute to Open Source. I consider this{' '}
          <a className='link' href='https://github.com/mdn/content/pull/15635'>
            PR
          </a>{' '}
          on{' '}
          <a className='link' href='https://github.com/mdn'>
            MDN
          </a>{' '}
          important. I am big believer of learning in public and share my
          progress on{' '}
          <a className='link' href='https://twitter.com/alabhyajindal'>
            Twitter
          </a>
          .
        </p>
        <p>
          I am currently a student of the Full Stack Development Bootcamp at{' '}
          <a className='link' href='https://devsnest.in/'>
            Devsnest
          </a>
          . I graduated from{' '}
          <a className='link' href='https://christuniversity.in/'>
            Christ University
          </a>{' '}
          in 2020 and worked at{' '}
          <a className='link' href='https://www.zwende.com/'>
            Zwende
          </a>{' '}
          prior to this.
        </p>
        <p>I love running, reading books and drinking coffee (medium roast)!</p>
      </div>
      <h1 className='mt-4 text-4xl font-sans font-semibold select-none tracking-tighter'>
        Projects
      </h1>
      <Link href='/visits'>
        <a>
          <h3 className='text-3xl text-fuchsia-500 font-sans font-medium select-none tracking-tighter'>
            Visits
          </h3>
        </a>
      </Link>
      <Link href='/searchselect'>
        <a>
          <h3 className='text-3xl text-fuchsia-500 font-sans font-medium select-none tracking-tighter'>
            Search Select
          </h3>
        </a>
      </Link>
      {/* <h1 className='text-3xl text-slate-700'>Say hello!</h1> */}
      <style jsx>{`
        #main {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </div>
  );
}
