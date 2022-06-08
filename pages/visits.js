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
          from the Stripe and Airbnb&apos;s website.
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
      <div className='mt-8'>
        <h2 className='text-3xl font-sans font-semibold select-none tracking-tighter'>
          Spotlight
        </h2>
        <div className='text-slate-600 font-medium text-lg space-y-3 tracking-tight mt-2'>
          <p>Few important features of the applications include:</p>
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
          src='/visits/screen2.png'
          layout='fill'
          objectFit='contain'
          className='rounded-md'
        />
      </div>
    </div>
  );
}
