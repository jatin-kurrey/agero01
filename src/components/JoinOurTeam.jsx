
import React from 'react';

const JoinOurTeam = () => {
  return (
    <section className="bg-gray-800 text-white py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
          Want to Join Our Team?
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          We are always looking for passionate and talented individuals to join our growing team. If you are driven by innovation and excellence, we would love to hear from you.
        </p>
        <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-orange-600 transition-transform hover:scale-105 transform duration-300">
          See Open Positions
        </button>
      </div>
    </section>
  );
};

export default JoinOurTeam;
