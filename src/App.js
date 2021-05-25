import Header from './components/Header.js'
import IndexBody from './components/IndexBody.js'
import Footer from'./components/Footer.js'
import Login from './components/Login.js'
import Register from './components/Register.js'
import DashboardBody from './components/DashboardBody.js'
import ReservationTable from './components/ReservationTable.js'
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { Grid } from '@material-ui/core'

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
        <main>

        </main>
      </Route>

      <Route path="/search">
        <main>

        </main>
      </Route>

      <Route path="/restaurant">
        <main>
          
        </main>
      </Route>

      <Route path="/cadastro">
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
          <ReservationTable />
      </main>
        
      </Route>
      <Route path="/dashboard/reservas-aprovadas">
      <main>
          <DashboardBody/>
          <ReservationTable />
      </main>      
      </Route>
      <Route path="/dashboard/reservas-em-andamento">
      <main>
          <DashboardBody/>
          <ReservationTable />
      </main>
      </Route>
      <Route path="/dashboard/reservas-concluidas">
      <main>
          <DashboardBody/>
          <ReservationTable />
      </main>
      </Route>
      <Route path="/dashboard/reservas-canceladas">
      <main>
          <DashboardBody/>
          <ReservationTable/>
      </main>
      </Route>
      </Router>
  );
}

export default App;
