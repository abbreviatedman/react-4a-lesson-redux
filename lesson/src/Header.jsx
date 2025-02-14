function Header() {
  function toggleDarkMode() {
    // redux dispatch here
  }

  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    // backgroundColor: preferDarkMode ? "#1f1f1f" : "#f0f0f0",
    // borderBottom: preferDarkMode ? '1px solid #333' : '1px solid #ddd',
  };

  const buttonStyles = {
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    // backgroundColor: preferDarkMode ? '#bb86fc' : '#007bff',
  };

  const buttonHoverStyles = {
    // backgroundColor: preferDarkMode ? '#3700b3' : '#0056b3',
  };

  return (
    <header style={headerStyles}>
      <h1>Todo List App</h1>
      <button
        onClick={toggleDarkMode}
        style={buttonStyles}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = buttonHoverStyles.backgroundColor
        }}

        onMouseLeave={(e) => {
          e.target.style.backgroundColor = buttonStyles.backgroundColor
        }}
      >
        {/* {preferDarkMode ? 'Light Mode' : 'Dark Mode'} */}
      </button>
    </header>
  );
}

export default Header;
