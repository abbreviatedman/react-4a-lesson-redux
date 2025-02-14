import Header from './Header';
import Footer from './Footer';
import TodoContainer from './TodoContainer';

function App() {
  function handleLogin (e) {
    e.preventDefault();
    const username = e.target.username.value;
    // dispatch username here
    // dispatch login here
  }

  function handleLogout (e) {
    e.preventDefault();
    // dispatch username here
    // dispatch login here
  }

  const appStyles = {
    minHeight: '100vh',
    padding: '20px',
    // backgroundColor: preferDarkMode ? '#121212' : '#fff',
    // color: preferDarkMode ? '#fff' : '#000',
  };

  return (
    <div style={appStyles}>
      {/* {!loggedIn ? ( */}
      {/*   <form onSubmit={handleLogin}> */}
      {/*     <label> */}
      {/*       Username: */}
      {/*       <input type="text" name="username" /> */}
      {/*     </label> */}
      {/*     <button type="submit">Login</button> */}
      {/*   </form> */}
      {/* ) : ( */}
      <div>
        <Header />
        {/* <h2>Hello, {user.username}</h2> */}
        <form onSubmit={handleLogout}>
          <button type="submit">Log Out</button>
        </form>
        {/* {user.isAdmin && <p>Welcome, admin!</p>} */}
        <TodoContainer />
        <Footer />
      </div>
      {/* )} */}
    </div>
  );
}

export default App;
