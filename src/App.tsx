import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Board from "./pages/board/Board";
import Profile from "./pages/profile/Profile";
import Messages from "./pages/messages/Messages";
import Settings from "./pages/settings/Settings";
import Help from "./pages/help/Help";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <div className="app-container__main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Board />} />
            <Route path="profile" element={<Profile />} />
            <Route path="messages" element={<Messages />} />
            <Route path="settings" element={<Settings />} />
            <Route path="help" element={<Help />} />
            <Route path="login" element={<h1>Login</h1>} />
            <Route path="register" element={<h1>Register</h1>} />
            <Route
              path="*"
              element={
                <div className="px-8 py-5">
                  <h1>Not found.</h1>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
