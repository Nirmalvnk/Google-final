import { Route, Routes } from "react-router-dom";
import Login from "./conponents/Login";
import Register from "./conponents/Regsiteration";
import Sidebar from "./conponents/Sidebar";
import Executer from "./conponents/Executer";
import CloudConnector from "./conponents/CloudConnect";
import SCMConnector from "./conponents/SCMConnet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/sidebar" element={<Sidebar />}>
        <Route path="executer" element={<Executer />} />
        <Route path="cloud-connector" element={<CloudConnector />} />
        <Route path="scm-connector" element={<SCMConnector/>} />
      </Route>
    </Routes>
  );
}

export default App;
