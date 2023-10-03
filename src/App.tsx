import AppRoutes from "./routes";
import ReactGA from 'react-ga';

ReactGA.initialize('G-4JJS45MKXK');

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
