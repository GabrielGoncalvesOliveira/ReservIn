import Header from './components/Header.js'
import IndexBody from './components/IndexBody.js'
import Footer from'./components/Footer.js'
import Login from './components/Login.js'
import Register from './components/Register.js'

function App() {

  return (
    <>
        <Header/>
        <main>
          <IndexBody/>
          {/*<Login/> 
          <Register/> */}
        </main>
        <Footer/>
      
    </>
  );
}

export default App;
