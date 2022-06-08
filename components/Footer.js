export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer id='footer' className='px-4 py-4 flex justify-between items-center'>
      <p className='text-slate-500 tracking-tight'>
        Alabhya Jindal &copy; {date}
      </p>
      <div className='flex gap-4'>
        <a href='mailto:alabhya10@gmail.com'>
          <img
            src='/icons/mail-outline.svg'
            className='icon'
            alt='Mail icon. Click to send a mail to Alabhya Jindal.'
          />
        </a>
        <a
          href='https://twitter.com/alabhyajindal'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src='/icons/logo-twitter.svg'
            className='icon'
            alt='Twitter icon. Click to view the Twitter profile of Alabhya Jindal.'
          />
        </a>
        <a
          href='https://www.linkedin.com/in/alabhyajindal/'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src='/icons/logo-linkedin.svg'
            className='icon'
            alt='LinkedIn icon. Click to view the LinkedIn profile of Alabhya Jindal.'
          />
        </a>
        <a
          href='https://github.com/alabhyajindal'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src='/icons/logo-github.svg'
            className='icon'
            alt='GitHub icon. Click to view the GitHub profile of Alabhya Jindal.'
          />
        </a>
      </div>
      <style jsx>{`
        #footer {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </footer>
  );
}
