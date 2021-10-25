import React ,{useEffect} from 'react'
import './App.css';
import HomeScreen from './screens/HomeScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom'
import Login from './screens/Login';
import { auth } from './firebase';
import {logout,login} from './features/useSlice';
import { useDispatch } from 'react-redux';

function App() {
  const user = null;
  const dispatch = useDispatch();
  useEffect(()=>{
      const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth)
      {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
      );
      }else{
        dispatch(logout);
      }
    });
    return unsubscribe;
  },[])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Route exact path='/login'> 
            <Login/>
          </Route>
        ):(
          <Switch>
          <Route exact path='/'>
            <HomeScreen />
          </Route>
          </Switch> 
        )}
      </Router>
    </div>
  );
}

export default App;
