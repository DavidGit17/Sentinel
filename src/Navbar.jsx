import { Link } from "react-router-dom";

export const Navbar = () => {
  const LoginTypeSelection = () => {
    const [userType, setUserType] = useState(null);

    const handleHackerClick = () => setUserType("Hacker");
    const handleCustomerClick = () => setUserType("Customer");
  };
  return (
    <nav className="bg-customGreynav h-16 w-screen mb-16 flex items-center justify-between text-white px-5">
      <div className="flex items-center">
      <div className="img flex pr-10">
        <Link to="/homepage">
        <img src="src\assets\Sen filled finale.png" className="h-16 w-fit"></img>
        </Link>
      </div>
      <div className="navlinks flex gap-10 ">
        <Link to="/homepage" className="">Home</Link>
        <Link to="/whysentinel" className="">WhySentinal</Link>
        <Link to="/hacker" className="">Hacker</Link>
        <Link to="/about" className="">AboutUs</Link>
        <Link to="/contact" className="">ContactUs</Link>
      </div>
      </div>
      <div className="login-signup flex">
        <Link to="" className="button">Login</Link>
        <p className="border mx-2"></p>
        <Link to="" className="button">SignUp</Link>
      </div>
    </nav>
  );
};
