import React from 'react';

const PortfolioCard = ({ project }) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                </div>
            </a>
        </div>
    );
};

export default PortfolioCard;
