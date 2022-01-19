import './App.css';
import AddLogin from './components/AddLogin';
import Login from './components/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginFind from './components/LoginFind';
import Main from './components/Main';




function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main></Main>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/loginAdd">
            <AddLogin></AddLogin>
          </Route>
          <Route path="/loginFind">
            <LoginFind></LoginFind>
          </Route>
        </Switch>


      </div>
    </BrowserRouter>


  );
}

export default App;
