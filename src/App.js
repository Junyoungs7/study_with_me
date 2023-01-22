import "./App.css";
import Nav from "./component/Nav";
import PrivateStudyPage from "./route/PrivateStudyPage";
import TodoPage from "./route/TodoPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./route/NotFound";
import Login from "./route/Login";
import Register from "./route/Register";
import Main from "./route/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/private" element={<PrivateStudyPage />}></Route>
          <Route path="/todo/:id" element={<TodoPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
