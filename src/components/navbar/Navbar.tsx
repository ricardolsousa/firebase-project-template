import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase/firebase";
import { Link, useNavigate } from "react-router";
import { logoutReducer } from "../../store/auth/authSlice";
import Button from "../utils/button/Button";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: { auth: { userId: string } }) => state.auth.userId
  );

  const handleLogout = () => {
    try {
      signOut(auth)
        .then(() => {
          dispatch(logoutReducer());
          navigate("/login");
        })
        .catch((error) => {
          throw error;
        });
    } catch (e) {
      throw e;
    }
  };

  return (
    <div className="h-16 flex fixed w-full z-10 items-center justify-between py-2 bg-gray-600">
      <div className="flex justify-between w-full lg:mx-28 md:mx-1 sm:mx-1 xs:mx-1 lg:px-6 px-4">
        <Link to={"/"}>
          <h1 className="text-3xl font-bold text-white">Firebase Template</h1>
        </Link>
        {isAuthenticated ? (
          <div className="flex gap-4">
            <Button size="md" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Button size="md" onClick={() => navigate("/register")}>
              Register
            </Button>
            <Button size="md" onClick={() => navigate("/login")}>
              Login
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
