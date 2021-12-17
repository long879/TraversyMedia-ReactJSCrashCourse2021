import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <button className="btn">Add</button>
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
