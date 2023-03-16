import React, { Suspense, Lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const Login = lazy(() => import('./pages/Login'));
const Orders = lazy(() => import( './pages/Orders'));
const ProtectedRoute = lazy(() => import('./ProtectedRoute/ProtectedRoute'))
function App() {
  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <header className="App-header"> 
          </header>
          <Suspense fallback={<div className='ErrorMessage'>Loading...</div>}>
            <Switch>
              <ProtectedRoute path="/orders" component={Orders} />
              <Route exact path="/" component={Login} />
            </Switch>
          </Suspense>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
