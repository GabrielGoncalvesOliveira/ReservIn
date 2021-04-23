import Header from './components/Header.js'
import IndexBody from './components/IndexBody.js'
import Footer from'./components/Footer.js'
import Login from './components/Login.js'

function App() {

  return (
    <>
        <Header/>
        <main>
          {/* <IndexBody/> */}
          <Login/>
        </main>
        <Footer/>
      
    </>
  );
}

export default App;
