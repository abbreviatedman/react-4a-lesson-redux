function Footer() {
  function handleTaskGoalChange () {
    // dispatch here
  };

  // const totalTasks = todos.length;

  const footerStyles = {
    marginTop: '20px',
    padding: '10px',
    textAlign: 'center',
    // backgroundColor: preferDarkMode ? '#1f1f1f' : '#f0f0f0',
    // borderTop: preferDarkMode ? '1px solid #444' : '1px solid #ddd',
    // color: preferDarkMode ? 'white' : 'black',
  };

  const inputStyles = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #555',
    marginTop: '10px',
    // backgroundColor: preferDarkMode ? '#333' : '#fff',
    // color: preferDarkMode ? '#fff' : '#000',
  };

  return (
    <footer style={footerStyles}>
      {/* <p>Total Tasks: {totalTasks}</p> */}
      <div>
        <label>Task Goal for Today: </label>
        <input
          type="number"
    /* value={taskGoal} */
          onChange={handleTaskGoalChange}
          style={inputStyles}
        />
      </div>
    </footer>
  );
}

export default Footer;
