import Home from "./components/home_page/home";
import { BrowserRouter, Route } from "react-router-dom";
import LogIn from "./components/auth/login";
import SignIn from "./components/auth/signin";
import Dashboard from "./components/dashboard/dashboard";

//Redux store
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

//TODO: make home page responsive

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/login" component={LogIn} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/dashboard" exact component={Dashboard} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
