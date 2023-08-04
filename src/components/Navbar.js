const { Navbar, Typography } = require("@material-tailwind/react");
const { Navigate, useNavigate } = require("react-router-dom");
const { useAuth } = require("../AuthContext/useAuth");
const React = require("react");


export function NavbarSimple() {
  const auth = useAuth();

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/results");
  };
  const handleBookingsClick = () => {
    navigate("/bookings");
  };
  const handleSearchClick = () => {
    navigate("/search");
  };

  const handleLogout = () => {
    auth.logOut();
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-16">
      <Navbar>
        <div className="flex items-left justify-between text-blue-gray-900">
          <h3
            class="text-2xl font-semibold text-gray-600 hover:text-blue-500 transition-colors cursor-pointer"
            onClick={handleLogoClick}
          >
            TRIPFUSION
          </h3>
          <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <a
              href=""
              className="flex items-center hover:text-blue-500 transition-colors"
              onClick={handleSearchClick}
            >
              Search
            </a>
            <a
              href=""
              className="flex items-center hover:text-blue-500 transition-colors"
              onClick={handleBookingsClick}
            >
              View bookings
            </a>
            <a
              href=""
              className="flex items-center hover:text-blue-500 transition-colors"
              onClick={handleLogout}
            >
              Log out
            </a>
          </ul>
        </div>
      </Navbar>
    </div>
  );
}
