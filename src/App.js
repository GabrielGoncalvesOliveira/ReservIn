import Header from './components/Header.js'
import IndexBody from './components/IndexBody.js'
import Footer from'./components/Footer.js'
import Login from './components/Login.js'
import Register from './components/Register.js'
import DashboardBody from './components/DashboardBody.js'
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom'

function App() {

  return (
    
    <Router>
      {/* <Header/>
      <main> */}
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Header/>
        <main>
        <IndexBody/> 
        </main>
        <Footer/>
      </Route>

      <Route path="/cadastro" component={Register}>
        <Header/>
        <main>
          <Register/>
        </main>
        <Footer/>
      </Route>

      <Route path="/login" component={Login}>
        <Header/>
        <main>
          <Login/>
        </main>
        <Footer/>
      </Route>

      <Route path="/dashboard">
        <main>
          <DashboardBody/>
        </main>
      </Route>
      
      {/* </main>
      <Footer/> */}
      </Router>
    
  );
}

export default App;
