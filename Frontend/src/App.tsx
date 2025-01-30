import { Provider } from "react-redux";
import Dashboard from "./component/Dashboard";
import "./index.css";
import carStore from "./utils/carStore";

function App() {
  return (
    <Provider store={carStore}>
      <Dashboard />
    </Provider>
  );
}

export default App;
