import Home from "./components/home_page/home";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import LogIn from "./components/auth/login";
import SignIn from "./components/auth/signin";
import Dashboard from "./dashboard/dashboar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/login" component={LogIn} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/dashboard" exact component={Dashboard} />
      </div>
    </BrowserRouter>
  );
}

export default App;
