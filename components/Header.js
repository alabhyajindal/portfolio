import Link from 'next/link';

export default function Header() {
  return (
    <div className='py-4 px-4'>
      <Link href='/'>
        <a>
          <h2 className='text-6xl font-sans font-semibold select-none tracking-tighter'>
            Alabhya Jindal
          </h2>
        </a>
      </Link>
    </div>
  );
}
