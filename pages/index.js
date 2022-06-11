import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <div id='main'>
      <Head>
        <title>Alabhya Jindal&apos;s portfolio</title>
        <meta
          name='description'
          content="Hey, I'm Alabhya. Welcome to my portfolio."
        />
      </Head>
      <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight'>
        <p>
          Hey, I&apos;m Alabhya. I live in Khliehriat, Meghalaya. I love
          programming and have been doing it sporadically for over 10 years! I
          got started with Logo and have worked with Visual Basic, Python, Java
          and C over the years. These days, my main focus is on frontend web
          development.
        </p>
        <p>
          Next.js, Tailwind CSS and Supabase are some of my favorite
          technologies. I also try to contribute to Open Source. I consider this{' '}
          <a
            className='link'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/mdn/content/pull/15635'
          >
            PR
          </a>{' '}
          important. I am a big believer of learning in public and share my
          progress on{' '}
          <a
            className='link'
            target='_blank'
            rel='noreferrer'
            href='https://twitter.com/alabhyajindal'
          >
            Twitter
          </a>
          .
        </p>
        <p>
          I am currently a student of the Full Stack Development Bootcamp at{' '}
          <a
            className='link'
            target='_blank'
            rel='noreferrer'
            href='https://devsnest.in/'
          >
            Devsnest
          </a>
          . I graduated from{' '}
          <a
            className='link'
            target='_blank'
            rel='noreferrer'
            href='https://christuniversity.in/'
          >
            Christ University
          </a>{' '}
          in 2020. I have worked at{' '}
          <a
            className='link'
            target='_blank'
            rel='noreferrer'
            href='https://www.zwende.com/'
          >
            Zwende
          </a>{' '}
          and{' '}
          <a
            className='link'
            target='_blank'
            rel='noreferrer'
            href='https://www.jaaga.in/'
          >
            Jaaga
          </a>{' '}
          in the past.
        </p>
        <p>I love running, reading books and drinking medium roast coffee!</p>
      </div>
      <div className='mt-8'>
        <h1 className='text-4xl font-sans font-semibold select-none tracking-tighter'>
          Projects
        </h1>
        <div className='mt-6 space-y-8'>
          <ProjectCard
            title='Visits'
            desc='An online platform to connect companies offering industrial visits with students seeking them.'
            page='/visits'
            img='/visits/landing.png'
          />
          <ProjectCard
            title='Search Select'
            desc='A lightweight browser extension to navigate and view search results using keyboard shortcuts.'
            page='/searchselect'
            img='/searchselect/landing.png'
          />
        </div>
      </div>

      <div className='mt-8'>
        <h1 className='text-4xl font-sans font-semibold select-none tracking-tighter'>
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
          . The source code for all my projects are available on{' '}
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
