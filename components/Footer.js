export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className='px-4 py-4 border border-t-2'>
      <p className='text-slate-500'>Alabhya Jindal &copy; {date}</p>
    </footer>
  );
}
