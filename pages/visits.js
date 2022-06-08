import Image from 'next/image';

export default function visits() {
  return (
    <div>
      <h1 className='text-4xl text-fuchsia-500 font-sans font-semibold select-none tracking-tighter'>
        Visits
      </h1>
      <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight mt-2'>
        <p>
          Visits is a Next.js application that enables companies offering
          industrial visits to list their offerings which students can book. The
          app provides seamless magic link authentication. The user can list or
          book visits after they have signed in. I have done both the design and
          development of the project from scratch. I took design inspiration
          from Stripe and Airbnb&apos;s website.
        </p>
        <p>
          The project is created with Next.js, JavaScript, PostgreSQL, Supabase,
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
              href='https://visits.vercel.app/explore'
              target='_blank'
              rel='noreferrer'
            >
              Explore
            </a>{' '}
            page are being fetched from a PostgreSQL database. This way, the
            users can list visits on the platform and it shows up immediately on
            the page. The great thing is that the landing page for the newly
            created visit is generated automatically as well. I am using
            Incremental Static Regeneration and Dynamic Routing to make this
            work.
            {/* Expand on the above */}
          </p>
        </div>
      </div>

      <div className='mt-8'>
        <h2 className='text-3xl font-sans font-semibold select-none tracking-tighter'>
          Current Status
        </h2>
        <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight mt-2'>
          <p>
            I have made this project with the aim of having it used by actual
            users. I haven't talked to users who have this problem yet but I
            plan to do that. There are lots of improvements needed in the app,
            especially in user onboarding and the process of listing and booking
            visits.
          </p>
        </div>
      </div>

      <div className='mt-8'>
        <h2 className='text-3xl font-sans font-semibold select-none tracking-tighter'>
          What I learned
        </h2>
        <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight mt-2'>
          <p>
            I have developed a great understanding about how to combine
            multitude of different technologies together to deliver a great UX.
            I really enjoyed using Supabase, especially the Auth features which
            are way easier to set up and use than alternatives like NextAuth.js.
            Using a BaaS like Supabase drastically reduces development time.
          </p>
          <p>
            I learned to model data using Prisma which allowed for faster
            iterations. Working on the project has improved my design skills as
            I researched quite a bit on how the different pages for the website
            should look.
          </p>
        </div>
      </div>
    </div>
  );
}
