import "./App.css";
import Form from "./Components/CreateForms/Form";
import EditForm from "./Components/EditForm/EditForm";
import NavBar from "./Components/NavBar/NavBar";
import Detail from "./Views/Detail";
import Home from "./Views/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
        <Route path="/editForm/:id" element={<EditForm />} />
      </Routes>
    </div>
  );
}

export default App;
