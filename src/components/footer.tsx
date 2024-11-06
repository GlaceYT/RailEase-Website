import logo from '../assets/images/logoo.png';

const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto py-16 sm:px-10 px-5 pb-0">
      <a href="/" title="acme.ai" className="relative mr-6 flex items-center space-x-2">
      <img
                src={logo}
                alt="RailEase Logo"
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover cursor-pointer"
              />
        <span className="font-bold text-xl">RailEase</span>
      </a>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 mt-8">
        {/* Product Section */}
        <div className="mb-5">
          <h2 className="font-semibold">Main</h2>
          <ul>
            {['Complaints', 'Profile', 'Contact'].map((item) => (
              <li className="my-2" key={item}>
                <a
                  className="group inline-flex cursor-pointer items-center justify-start gap-1 text-muted-foreground duration-200 hover:text-foreground hover:opacity-90"
                  href="#"
                >
                  {item}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Section */}
        <div className="mb-5">
          <h2 className="font-semibold">About Us</h2>
          <ul>
            {['Reviews','Partners'].map((item) => (
              <li className="my-2" key={item}>
                <a
                  className="group inline-flex cursor-pointer items-center justify-start gap-1 text-muted-foreground duration-200 hover:text-foreground hover:opacity-90"
                  href="#"
                >
                  {item}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Section */}
        <div className="mb-5">
          <h2 className="font-semibold">Other</h2>
          <ul>
            {['Community', 'Status'].map((item) => (
              <li className="my-2" key={item}>
                <a
                  className="group inline-flex cursor-pointer items-center justify-start gap-1 text-muted-foreground duration-200 hover:text-foreground hover:opacity-90"
                  href="#"
                >
                  {item}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Section */}
        <div className="mb-5">
          <h2 className="font-semibold">Social</h2>
          <ul>
            {['Facebook', 'Twitter', 'Instagram'].map((item) => (
              <li className="my-2" key={item}>
                <a
                  className="group inline-flex cursor-pointer items-center justify-start gap-1 text-muted-foreground duration-200 hover:text-foreground hover:opacity-90"
                  href="#"
                >
                  {item}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
