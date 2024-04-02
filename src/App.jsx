import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./Components/HomePage/Page";
import Login from "./Components/Login"; // Import the Login component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/Login" element={<Login />} /> {/* Define the route for the Login component */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// https://www.wix.com/website-template/view/html/3342
