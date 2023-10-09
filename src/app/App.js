import React from "react";
import NavBar from "./components/navBar";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import TasksPage from "./pages/tasksPage";
import ImportantPage from "./pages/importantPage";

function App() {
    return (
        <div className="main-container">
            <NavBar/>
            <Routes>
                <Route path="" element={<MainPage/>}/>
                <Route path="tasks" element={<TasksPage/>}>
                </Route>
                <Route path="important" element={<ImportantPage/>}/>
            </Routes>
        </div>
    );
};

export default App;
