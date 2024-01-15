import React from "react";
import ProjectCard from "./ProjectCard";


const projectData = [
    {
        id: 1,
        title: "Portfolio",
        description: "This is a NextJs Portfolio.",
        image: "/projects/linkedout&about.png",
        gitUrl: "https://github.com/yikai03/Portfolio"

    },
    {
        id: 2,
        title: "House Rent Prediction in India",
        description: "A project to predict house rent in India using Data Analysis and Model Building.",
        image: "/projects/Thumnail.png",
        gitUrl: "https://github.com/yikai03/House-Rent-Prediction-in-India.git"
    }
];

const Projects = () => {
    return (
        <div id="projects">
            <div className="text-4xl font-semibold mb-8">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};

export default Projects;
