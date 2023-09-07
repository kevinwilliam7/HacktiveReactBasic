import { createBrowserRouter } from "react-router-dom";
import AboutScreen from "../views/about";
import EducationScreen from "../views/education";
import ExperienceScreen from "../views/experience";
import SkillScreen from "../views/skill";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AboutScreen/>
    },
    {
        path: '/experience',
        element: <ExperienceScreen/>
    },
    {
        path: '/education',
        element: <EducationScreen/>
    },
    {
        path: '/skill',
        element: <SkillScreen/>
    }
])