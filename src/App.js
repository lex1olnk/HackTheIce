import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './content/screens/Header';
import Main from './content/screens/Main';
import './content/fonts/stylesheet.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
