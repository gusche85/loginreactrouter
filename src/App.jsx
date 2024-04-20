import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/Homepage";

export default function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        < Route element={<HomePage />} path="/" />
      </Routes>
      </BrowserRouter>
  )
}
