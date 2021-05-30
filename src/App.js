import Header from './components/Header.js'
import IndexBody from './components/IndexBody.js'
import Footer from'./components/Footer.js'
import Login from './components/Login.js'
import Register from './components/Register.js'
import DashboardBody from './components/DashboardBody.js'
import ReservationTable from './components/ReservationTable.js'
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import AboutPage from './components/AboutPage.js'
import SearchBody from './components/SearchBody.js'

function App() {

  return (
    
    <Router>
      
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

      <Route path="/about">
        <Header/>
        <main>
        <AboutPage/>
        </main>
        <Footer/>
      </Route>

      <Route path="/search">
        <Header/>
        <main>
          <SearchBody/>
        </main>
        <Footer/>
      </Route>

      <Route path="/restaurant">
        <Header/>
        <main>
          
        </main>
        <Footer/>
      </Route>

      <Route path="/register">
        <Header/>
        <main>
          <Register/>
        </main>
        <Footer/>
      </Route>

      <Route path="/login">
        <Header/>
        <main>
          <Login/>
        </main>
        <Footer/>
      </Route>

      <Route path="/dashboard/reservas-a-aprovar">
      <main>
          <DashboardBody/>
          <ReservationTable type="A Aprovar"/>
      </main>
        
      </Route>
      <Route path="/dashboard/reservas-aprovadas">
      <main>
          <DashboardBody/>
          <ReservationTable type="Aprovadas" />
      </main>      
      </Route>
      <Route path="/dashboard/reservas-em-andamento">
      <main>
          <DashboardBody/>
          <ReservationTable type="Andamento"/>
      </main>
      </Route>
      <Route path="/dashboard/reservas-concluidas">
      <main>
          <DashboardBody/>
          <ReservationTable type="Concluidas"/>
      </main>
      </Route>
      <Route path="/dashboard/reservas-canceladas">
      <main>
          <DashboardBody/>
          <ReservationTable type="Canceladas"/>
      </main>
      </Route>
      </Router>
  );
}

export default App;
