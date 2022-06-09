import Image from 'next/image';

export default function visits() {
  return (
    <div>
      <h1 className='text-4xl text-fuchsia-500 font-sans font-semibold select-none tracking-tighter'>
        Visits
      </h1>
      <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight mt-2'>
        <p>
          Visits is a serverless application that enables companies to list
          their industrial visit offerings which can then be booked by students.
          The app provides seamless magic link authentication. The user can list
          or book visits after they have signed in. I have worked on both the
          design and development of the project from scratch.
        </p>
        <p>
          Visits is created with Next.js, JavaScript, PostgreSQL, Supabase,
          Prisma, Tailwind CSS and Stripe.
        </p>
        <div className='flex gap-6 uppercase text-fuchsia-500 font-bold text-base'>
          <a
            href='https://github.com/alabhyajindal/visit'
            target='_blank'
            rel='noreferrer'
          >
            Source Code
          </a>
          <a href='https://visits.vercel.app/' target='_blank' rel='noreferrer'>
            Live Site
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
          <p>
            I created Visits because I wanted to solve the problem I faced
            myself when I was in college. Right now there exists no platform
            where students can look up companies offering industrial visits and
            book them. The current process involves arranging industrial visits
            based on personal connections. This is not the right way, everyone
            should be aware of companies offering visits and be able to book it
            seamlessly.
          </p>
        </div>
      </div>

      <div className='mt-8 relative aspect-[15.9/7.9] bg-fuchsia-200 rounded-md shadow-md border'>
        <Image
          src='/visits/screen0.png'
          layout='fill'
          objectFit='contain'
          className='rounded-md'
        />
      </div>
      <div className='mt-8 relative aspect-[15.9/7.9] bg-fuchsia-200 rounded-md shadow-md border'>
        <Image
          src='/visits/screen1.png'
          layout='fill'
          objectFit='contain'
          className='rounded-md'
        />
      </div>
      <div className='mt-8 relative aspect-[15.9/7.9] bg-fuchsia-200 rounded-md shadow-md border'>
        <Image
          src='/visits/screen3.png'
          layout='fill'
          objectFit='contain'
          className='rounded-md'
        />
      </div>
      <div className='mt-8 relative aspect-[15.9/7.9] bg-fuchsia-200 rounded-md shadow-md border'>
        <Image
          src='/visits/screen4.png'
          layout='fill'
          objectFit='contain'
          className='rounded-md'
        />
      </div>

      <div className='mt-8 relative aspect-[15.9/7.9] bg-fuchsia-200 rounded-md shadow-md border'>
        <Image
          src='/visits/screen5.png'
          layout='fill'
          objectFit='contain'
          className='rounded-md'
        />
      </div>
      <div className='mt-8 relative aspect-[15.9/7.9] bg-fuchsia-200 rounded-md shadow-md border'>
        <Image
          src='/visits/screen8.png'
          layout='fill'
          objectFit='contain'
          className='rounded-md'
        />
      </div>
      <div className='mt-8 relative aspect-[15.9/7.9] bg-fuchsia-200 rounded-md shadow-md border'>
        <Image
          src='/visits/screen6.png'
          layout='fill'
          objectFit='contain'
          className='rounded-md'
        />
      </div>
      <div className='mt-8 relative aspect-[15.9/7.9] bg-fuchsia-200 rounded-md shadow-md border'>
        <Image
          src='/visits/screen2.png'
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
          <p>
            The details of the cards on the{' '}
            <a
              className='link'
              href='https://visits.vercel.app/explore'
              target='_blank'
              rel='noreferrer'
            >
              Explore
            </a>{' '}
            page are being fetched from a PostgreSQL database hosted on
            Supabase. I am using the <code>getServerSideProps</code> function
            provided by Next.js to fetch the data from the database on the
            Server and pass it to the component rendering the cards. This is
            what the code to fetch the data of all visits looks like:
            {/* Add alt to all screenshots on this page */}
          </p>
          <pre>
            <code>
              {`
          export async function getServerSideProps() {
            const visits = await prisma.visit.findMany();
            return {
              props: { visits: JSON.parse(JSON.stringify(visits)) },
            };
          }
          `}
            </code>
          </pre>
          <p>
            Explain dynamic routing and SSG. It should be clear how the below
            page is created on the fly once a user lists a visit.
          </p>
        </div>
        <div className='mt-8 relative aspect-[15.9/7.9] bg-fuchsia-200 rounded-md shadow-md border'>
          <Image
            src='/visits/screen7.png'
            layout='fill'
            objectFit='contain'
            className='rounded-md'
          />
        </div>
      </div>

      <div className='mt-8'>
        <h2 className='text-3xl font-sans font-semibold select-none tracking-tighter'>
          Current Status
        </h2>
        <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight mt-2'>
          <p>
            I have made this project with the aim of having it used by actual
            users. I plan to reach out to target users, students and companies,
            to find out if they have this problem. There are lots of
            improvements needed in the app, especially in user onboarding and
            the process of listing and booking visits before I could look at
            user acquisition.
          </p>
        </div>
      </div>

      <div className='mt-8'>
        <h2 className='text-3xl font-sans font-semibold select-none tracking-tighter'>
          What I learned
        </h2>
        <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight mt-2'>
          <p>
            This project helped me develop a great understanding about combining
            different technologies together to deliver a great UX. I learned to
            use Supabase Auth, which is way easier to set up and use than
            alternatives like NextAuth.js. I experienced how using a BaaS like
            Supabase drastically reduces development time.
          </p>
          <p>
            I learned to model data using Prisma which allowed for faster
            iterations. Working on this project has also improved my design
            skills as I researched quite a bit on how the different pages for
            the website should look and then designed everything from scratch.
          </p>
          <p>
            I also realized that it's bad to build a user centric app without
            talking to users first. In the future, when I execute on one of my
            ideas I will talk to users first to understand if they actually face
            the problem before building out the solution.
          </p>
        </div>
      </div>
    </div>
  );
}
