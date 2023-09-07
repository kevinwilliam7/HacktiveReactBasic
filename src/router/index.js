import { createBrowserRouter } from "react-router-dom";
import AboutScreen from "../views/about";
import EducationScreen from "../views/education";
import ExperienceScreen from "../views/experience";
import SkillScreen from "../views/skill";
import ProjectScreen from "../views/project";
import Layout from "../views/layout";

export const router = createBrowserRouter([
    {
        path: '',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <AboutScreen/>
            },
            {
                path: '/about',
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
            },
            {
                path: '/project',
                element: <ProjectScreen/>
            }
        ]
    },
])