import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/Homepage";

export default function App() {
  return (
    <div className='m-2'>
      <BrowserRouter>
      <Routes>
        < Route element={<HomePage />} path="/" />
      </Routes>
      </BrowserRouter></div>
  )
}
