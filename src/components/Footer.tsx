
const Footer = () => {
  return (
    <footer className="py-6 text-center text-slate">
      <div className="container mx-auto px-6">
        <p className="font-mono text-sm">
          Designed & Built by Jay Bhesania
        </p>
        <p className="font-mono text-xs mt-2">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
