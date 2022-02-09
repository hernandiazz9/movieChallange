import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUserAction } from "../../redux/actions/LoginAction";
import { Logout, NavBarStyle } from "./navBarStyle";

const NavBar = ({ createButton = true, title = null }) => {
  const dispatch = useDispatch();
  const handleClickLogout = () => {
    dispatch(logOutUserAction());
  };

  return (
    <NavBarStyle title={title}>
      {title ? (
        <div>
          <h2>{title}</h2>
          {createButton && (
            <Link to={"/create-movie"}>
              <i className="fa fa-plus-circle"></i>
            </Link>
          )}
        </div>
      ) : null}
      <Logout onClick={handleClickLogout}>
        <span className="body-text-regular">Logout</span>
        <i className="fas fa-sign-out-alt"></i>
      </Logout>
    </NavBarStyle>
  );
};

export default NavBar;
