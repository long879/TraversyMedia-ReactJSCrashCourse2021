import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task ",
};

// PropTypes
Header.propTypes = {
  title: PropTypes.string.isRequired,
  // yêu cầu props.title truyền vào là string. Nếu có isRequired thì yêu cầu bắt bắt buộc phải có
};

export default Header;

// Cách 2:
// const Header = ({ title }) => {
//     return (
//       <header>
//         <h1>{title}</h1>
//       </header>
//     );
//   };

//   Header.defaultProps = {
//     title: "Task ",
//   };

//   export default Header;
