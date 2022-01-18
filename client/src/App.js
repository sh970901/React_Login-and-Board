import './App.css';
import AddLogin from './components/AddLogin';
import Login from './components/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom'



function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/loginAdd">
            <AddLogin></AddLogin>
          </Route>
        </Switch>


      </div>
    </BrowserRouter>


  );
}

export default App;
