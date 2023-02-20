import React from 'react'
import {Route, Routes} from "react-router-dom";
import {Home} from "../pages/Home";
import {Planet} from "../../projects/Planet/Planet";
import {CalculateFactorial} from "../../projects/Factorial/Factorial";
import {AboutProject} from "../../projects/AboutProject";
import {About} from "../pages/About";
import {ContactMe} from "./ContactMe";
import {Map} from "./Map";
import {MyMission} from "./MyMission";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='' element={<Home/>} />
            <Route path='planet' element={<Planet/>}/>
            <Route path='factorial' element={<CalculateFactorial/>}/>
            <Route path='project/:projectId' element={<AboutProject/>} />
            <Route path='about' element={<About />}>
                <Route path='contact' element={<ContactMe/>}  />
                <Route path='map' element={<Map/>}  />
                <Route path='mission' element={<MyMission/>}  />
            </Route>
        </Routes>
    )
}