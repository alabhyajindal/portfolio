export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className='px-4 py-4'>
      <p className='text-slate-500 tracking-tighter'>
        Alabhya Jindal &copy; {date}
      </p>
    </footer>
  );
}
