import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./component/Header";
import { SearchPanel } from "./component/SearchPanel";
import { MovieBoard } from "./component/MovieBoard";
import { AppProvider } from "./context/MovieContext";
import { Navbar } from "./component/Navbar";
import {Spinner} from "react-rainbow-components";

function App() {

  return (
      <AppProvider>
        <div className="container">
          <Navbar />
            <Header />
          <SearchPanel />
            <MovieBoard />
        </div>
      </AppProvider>
  );
}

export default App;
