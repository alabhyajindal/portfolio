import Head from 'next/head';
import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <div id='main'>
      <Head>
        <title>Alabhya Jindal&apos;s portfolio</title>
      </Head>
      <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight'>
        <p>
          Hey, I&apos;m Alabhya. I live in Bangalore and work at{' '}
          <a
            className='link'
            target='_blank'
            rel='noreferrer'
            href='https://mayalabs.io/'
          >
            Maya Labs
          </a>{' '}
          as a Frontend Engineer. I love running, reading books and drinking
          coffee.
        </p>
      </div>
      <div className='mt-8'>
        <h1 className='text-4xl font-sans font-semibold tracking-tight'>
          Projects
        </h1>
        <div className='mt-6 space-y-8'>
          <ProjectCard
            title='Fast Flow'
            desc='A new way to create flow charts using only your keyboard.'
            date='July 2022'
            page='/fastflow'
            img='/fastflow/landing.png'
            stack='Created with React Flow, React and JavaScript.'
          />
          <ProjectCard
            title='Visits'
            desc='An online platform to connect companies offering industrial visits with students seeking them.'
            date='May 2022'
            page='/visits'
            img='/visits/landing.png'
            stack='Created with Next.js, JavaScript, PostgreSQL, Supabase,
            Prisma, Tailwind CSS and Stripe.'
          />
          <ProjectCard
            title='Search Select'
            desc='A lightweight browser extension to navigate and view search results using keyboard shortcuts.'
            date='April 2022'
            page='/searchselect'
            img='/searchselect/landing.png'
            stack='Created with JavaScript, HTML, CSS and the Chrome Web
            APIs.'
          />
        </div>
        {/* <div className='mt-2'>
          <Link href='/visits'>
            <a
              className='text-2xl font-sans font-semibold tracking-tight text-fuchsia-500 hover:text-fuchsia-400
            transition duration-100 inline-block
            '
            >
              Visits
            </a>
          </Link>
          <br />
          <Link href='/searchselect'>
            <a
              className='text-2xl font-sans font-semibold tracking-tight text-fuchsia-500 hover:text-fuchsia-400
             transition duration-100 inline-block mt-1
             '
            >
              Search Select
            </a>
          </Link>
        </div> */}
      </div>

      <div className='mt-8'>
        <h1 className='text-4xl font-sans font-semibold tracking-tight'>
          Say hello!
        </h1>
        <p className='text-slate-600 font-medium text-lg tracking-tight mt-2'>
          You can reach out to me on{' '}
          <a className='link' href='mailto:alabhya10@gmail.com'>
            Email
          </a>
          ,{' '}
          <a
            className='link'
            target='_blank'
            rel='noreferrer'
            href='https://twitter.com/alabhyajindal'
          >
            Twitter
          </a>{' '}
          or{' '}
          <a
            className='link'
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/alabhyajindal/'
          >
            LinkedIn
          </a>
          . The source code for all my projects is available on{' '}
          <a
            className='link'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/alabhyajindal'
          >
            GitHub
          </a>
          .
        </p>
      </div>
      <style jsx>{`
        #main {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </div>
  );
}
