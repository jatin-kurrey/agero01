import React from 'react';
import { portfolio } from '../data/portfolioData';
import PortfolioCard from '../components/PortfolioCard';

const PortfolioPage = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-center mb-12">Our Portfolio</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolio.map(project => (
                        <PortfolioCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;
