import Header from "./components/Header";

function App() {
  const name = "React";
  const check = true;

  return (
    <div className="App">
      {/* JSX */}
      <h1 style={headingStyle}>Hello from {name}!</h1>

      {/* Expressions in JSX */}
      <p>{check ? "Have check" : "Haven't check"}</p>

      {/* Creating a component */}
      <Header />

      {/* Props */}
      <Header title="Task" />
    </div>
  );
}

// CSS in JS
const headingStyle = { color: "blue", fontSize: 12 };

export default App;
