import './_App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './Pages/Login'
import Cadastro from './Pages/Cadastro';
import Lista from './Pages/Lista';
import User from './Pages/User'
import Title from './Components/Title';

function App() {
  return (
    <Router>
      <main className='container'>
        <Title />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/cadastro' component={Cadastro} />
          <Route path='/lista' component={Lista} />
          <Route path='/user' component={User} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
