import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className='text-3xl text-slate-700'>About</h1>
      <h1 className='text-3xl text-slate-700'>Projects</h1>
      <Link href='/visits'>
        <a>
          <h3>Visits</h3>
        </a>
      </Link>
      <Link href='/searchselect'>
        <a>
          <h3>Search Select</h3>
        </a>
      </Link>
      <h1 className='text-3xl text-slate-700'>Say hello!</h1>
    </div>
  );
}
