import Head from 'next/head';
import Image from 'next/image';

export default function Visits() {
  return (
    <div>
      <Head>
        <title>Visits</title>
      </Head>
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
            className='hover:text-fuchsia-400'
            href='https://github.com/alabhyajindal/visit'
            target='_blank'
            rel='noreferrer'
          >
            Source Code
          </a>
          <a
            className='hover:text-fuchsia-400'
            href='https://visits.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            Live Site
          </a>
        </div>
      </div>

      <div className='mt-8 relative aspect-[15.9/7.9] bg-fuchsia-200 rounded-md shadow-md border'>
        <Image
          src='/visits/screen6.png'
          layout='fill'
          objectFit='contain'
          className='rounded-md'
          alt='Screenshot of the Visits explore page.'
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
          alt='Screenshot of the Visits homepage.'
        />
      </div>
      <div className='mt-8 relative aspect-[15.9/7.9] bg-fuchsia-200 rounded-md shadow-md border'>
        <Image
          src='/visits/screen1.png'
          layout='fill'
          objectFit='contain'
          className='rounded-md'
          alt='Screenshot of the Visits homepage with the options to Host or Find a Visit.'
        />
      </div>
      <div className='mt-8 relative aspect-[15.9/7.9] bg-fuchsia-200 rounded-md shadow-md border'>
        <Image
          src='/visits/screen3.png'
          layout='fill'
          objectFit='contain'
          className='rounded-md'
          alt='Screenshot of the Visits homepage with the Sign in modal window open, prompting the user to enter their Email address.'
        />
      </div>
      <div className='mt-8 relative aspect-[15.9/7.9] bg-fuchsia-200 rounded-md shadow-md border'>
        <Image
          src='/visits/screen4.png'
          layout='fill'
          objectFit='contain'
          className='rounded-md'
          alt='Screenshot of an Inbox with a mail from Supabase titled Magic Link. The mail body consists of a link which the user is asked to follow to log in.'
        />
      </div>

      <div className='mt-8 relative aspect-[15.9/7.9] bg-fuchsia-200 rounded-md shadow-md border'>
        <Image
          src='/visits/screen5.png'
          layout='fill'
          objectFit='contain'
          className='rounded-md'
          alt='Screenshot of the Visits profile creation page which consists of two form inputs for First Name and Last Name.'
        />
      </div>
      <div className='mt-8 relative aspect-[15.9/7.9] bg-fuchsia-200 rounded-md shadow-md border'>
        <Image
          src='/visits/screen8.png'
          layout='fill'
          objectFit='contain'
          className='rounded-md'
          alt='Screenshot of the Visits List a visit page with the form inputs of Title, Description, City, Duration, Maximum visitors, Price and a file prompt.'
        />
      </div>
      <div className='mt-8 relative aspect-[15.9/7.9] bg-fuchsia-200 rounded-md shadow-md border'>
        <Image
          src='/visits/screen6.png'
          layout='fill'
          objectFit='contain'
          className='rounded-md'
          alt='Screenshot of the Visits explore page.'
        />
      </div>
      <div className='mt-8 relative aspect-[15.9/7.9] bg-fuchsia-200 rounded-md shadow-md border'>
        <Image
          src='/visits/screen2.png'
          layout='fill'
          objectFit='contain'
          className='rounded-md'
          alt='Screenshot of the Supabase dashboard displaying data about the Visits platform over the past 7 days: API Requests: 32, Auth Requests: 5, Storage Requests: 25 and Connection Requests: 0.'
        />
      </div>

      <div className='mt-8'>
        <h2 className='text-3xl font-sans font-semibold select-none tracking-tighter'>
          Spotlight
        </h2>
        <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight mt-2'>
          <p>
            Allowing users to create visits and update the{' '}
            <a
              className='link'
              href='https://visits.vercel.app/explore'
              target='_blank'
              rel='noreferrer'
            >
              Explore
            </a>{' '}
            page immediately was the hardest part of the application. Here's how
            I did it.
          </p>
          <p>
            The details of the cards on the Explore page are being fetched from
            a PostgreSQL database hosted on Supabase. I am using the{' '}
            <code>getServerSideProps</code> function provided by Next.js to
            fetch the data from the database on the Server and pass it to the
            component rendering the cards. Fetching the data on the server like
            this results in a fast user experience compared to client-side data
            fetching (done using <code>useEffect</code>, for example).
          </p>

          <p>
            I am making use of dynamic routing for all the visits listed on the
            platform. This is done by using the square bracket notation provided
            by Next.js. Finally, I am using <code>getStaticProps</code> to pass
            in the data to the component with the matching <code>id</code> and{' '}
            <code>getStaticPaths</code> to tell Next.js which routes to
            statically generate during build time. Incremental Static
            Regeneration is enabled by setting <code>fallback: blocking</code>{' '}
            in the <code>getStaticPaths</code> function.
          </p>
        </div>
        <div className='mt-8 relative aspect-[15.9/7.9] bg-fuchsia-200 rounded-md shadow-md border'>
          <Image
            src='/visits/screen7.png'
            layout='fill'
            objectFit='contain'
            className='rounded-md'
            alt='Screenshot of one of the visits listed on the Visits platform.'
          />
        </div>
      </div>

      <div className='mt-8'>
        <h2 className='text-3xl font-sans font-semibold select-none tracking-tighter'>
          Current Status
        </h2>
        <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight mt-2'>
          <p>
            I started this project with the aim of having it being used by
            actual users. After a couple of interactions with a few companies I
            have realized that this is not much of a problem. Also, there are
            lots of improvements needed in the app, especially in user
            onboarding and the process of listing and booking visits. However,
            I&apos;m not focusing on this project right now and I&apos;m working
            on other exciting things!
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
            use Supabase Auth, which is easier to set up and use than
            alternatives like NextAuth.js. I experienced how using a BaaS like
            Supabase drastically reduces development time.
          </p>
          <p>
            I learned to model data using Prisma which allows for faster
            iterations. Working on this project has also improved my design
            skills as I researched quite a bit on how the different pages for
            the website should look and then designed everything from scratch.
          </p>
          <p>
            I also realized that it&apos;s bad to build a user centric app
            without talking to users first. In the future, when I execute on one
            of my ideas I will talk to users first to understand if they
            actually face the problem before building out the solution.
          </p>
        </div>
      </div>
    </div>
  );
}
