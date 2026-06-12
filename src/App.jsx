import { BrowserRouter, Routes, Route } from "react-router-dom";

import SplashScreen from "./pages/SplashScreen";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import AddSkill from "./pages/AddSkill";
import FindMatch from "./pages/FindMatch";
import Requests from "./pages/Requests";
import Membership from "./pages/Membership";
import Chat from "./pages/Chat";
import Reviews from "./pages/Reviews";
import Notifications from "./pages/Notifications";
import ViewProfile from "./pages/ViewProfile";
import SearchUsers from "./pages/SearchUsers";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<SplashScreen />}
        />

        <Route
          path="/welcome"
          element={<Welcome />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/add-skill"
          element={<AddSkill />}
        />
        <Route 
          path="/search-users" 
          element={<SearchUsers />} 
        />

        <Route 
          path="/profile/:id" 
          element={<ViewProfile />} 
        />

        <Route
          path="/find-match"
          element={<FindMatch />}
        />

        <Route
          path="/requests"
          element={<Requests />}
        />

        <Route
          path="/membership"
          element={<Membership />}
        />

        <Route
          path="/chat"
          element={<Chat />}
        />

        <Route
          path="/reviews"
          element={<Reviews />}
        />

        <Route
          path="/notifications"
          element={<Notifications />}
        />

        

      </Routes>

    </BrowserRouter>

  );
}

export default App;