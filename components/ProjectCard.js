import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ title, desc, page, img }) {
  return (
    <div className='lg:flex lg:gap-4 lg:items-center'>
      <Link href={page}>
        <a>
          <div className='relative w-96 h-96 shadow-md rounded-md'>
            <Image
              id='img'
              src={img}
              layout='fill'
              objectFit='contain'
              className='rounded-md'
            />
          </div>
        </a>
      </Link>
      <div>
        <h3 className='text-3xl mt-4 text-fuchsia-500 font-sans font-medium select-none tracking-tighter'>
          {title}
        </h3>
        <p className=' text-slate-600 font-medium text-lg tracking-tight'>
          {desc}
        </p>
        <Link href={page}>
          <a>
            <p
              id='view'
              className='inline-block uppercase text-fuchsia-500 font-bold text-sm mt-2'
            >
              View Project
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
}
