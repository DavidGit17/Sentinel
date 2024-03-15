function Navbar() {
  // window.onscroll = function() {
  //   var navbar = document.getElementById("main-navbar");
  //   var sticky = navbar.offsetTop;
    
  //   if (window.scrollY > sticky) {
  //     navbar.classList.add("sticky");
  //   } else {
  //     navbar.classList.remove("sticky");
  //   }
  // };
  
  return (
    <div className="">
      <div className="text-white flex justify-end px-14 py-1 mb-1" id="secondary-navbar">
        <a href="" className="pr-2">
          Hacker login
        </a>
        <p className="h-6 w-0.5 bg-customPurple mx-4 font-extrabold"></p>
        <a className="pl-2">Customer login</a>
      </div>
      <nav className="bg-customPurple w-full rounded-lg" id="main-navbar">
        <div className=" top-0 sticky max-w-screen-auto max-h-screen-auto flex flex-wrap justify-between py-2 px-10 mt-1 mb-1 .main-navbar {
  fixed left-0 w-full z-10 bg-customPurple rounded-lg
  sm:sticky
}
">
          <a
            href="/App"
            className="flex items-center space-x-3 rtl:space-x-reverse "
          >
            <div>
              <p className="text-white font-customMonserrat font-bold ">
                SENTINEL SHIELD
              </p>
            </div>
          </a>
          {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-customPurple rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button> */}
          <div className="flex items-center space-x-3 text-white font-bold pr-3">
            <ul>Home</ul>
            <ul>Why Sentinel</ul>
            <ul>Hacker</ul>
            <ul>About Us</ul>
            <ul>Contact Us</ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
