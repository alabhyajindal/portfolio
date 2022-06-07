export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className='px-4 py-4 flex justify-between items-center'>
      <p className='text-slate-500 tracking-tighter'>
        Alabhya Jindal &copy; {date}
      </p>
      <div className='flex gap-4'>
        <a href='mailto:alabhya10@gmail.com'>
          <img src='/icons/mail-outline.svg' className='icon' />
        </a>
        <a
          href='https://twitter.com/alabhyajindal'
          target='_blank'
          rel='noreferrer'
        >
          <img src='/icons/logo-twitter.svg' className='icon' />
        </a>
        <a
          href='https://www.linkedin.com/in/alabhyajindal/'
          target='_blank'
          rel='noreferrer'
        >
          <img src='/icons/logo-linkedin.svg' className='icon' />
        </a>
        <a
          href='https://github.com/alabhyajindal'
          target='_blank'
          rel='noreferrer'
        >
          <img src='/icons/logo-github.svg' className='icon' />
        </a>
      </div>
    </footer>
  );
}
