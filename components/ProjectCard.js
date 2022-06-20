import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function ProjectCard({ title, desc, date, page, img, stack }) {
  const imgRef = useRef(null);
  const viewRef = useRef(null);

  function addStyles() {
    viewRef.current.classList.add('text-fuchsia-400');
    imgRef.current.classList.remove('shadow-md');
    imgRef.current.classList.add('shadow-xl');
    imgRef.current.classList.add('-translate-y-1');
  }
  function removeStyles() {
    viewRef.current.classList.remove('text-fuchsia-400');
    imgRef.current.classList.remove('shadow-xl');
    imgRef.current.classList.add('shadow-md');
    imgRef.current.classList.remove('-translate-y-1');
  }

  return (
    <div className='lg:flex lg:gap-6 lg:items-center active:scale-95 transition duration-150'>
      <Link href={page}>
        <a>
          <div
            ref={imgRef}
            className='relative w-96 h-96 shadow-md rounded-md transition duration-150'
          >
            <Image
              onMouseEnter={addStyles}
              onMouseLeave={removeStyles}
              src={img}
              layout='fill'
              objectFit='contain'
              className='rounded-md'
              alt={`Screenshot of the ${title} project`}
            />
          </div>
        </a>
      </Link>
      <div>
        <h3 className='text-3xl mt-4 text-fuchsia-500 font-sans font-medium select-none tracking-tighter'>
          {title}
        </h3>
        <p className='text-slate-600 font-medium text-lg tracking-tight'>
          {desc}
        </p>
        <p className='text-slate-500 font-medium text-base tracking-tight mt-1'>
          {stack}
        </p>
        <p className='text-slate-500 font-medium text-sm tracking-tight mt-1'>
          {date}
        </p>
        <Link href={page}>
          <a>
            <p
              ref={viewRef}
              onMouseEnter={addStyles}
              onMouseLeave={removeStyles}
              className='inline-block uppercase text-fuchsia-500 font-bold text-sm mt-2 transition duration-150'
            >
              View Project
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
}
