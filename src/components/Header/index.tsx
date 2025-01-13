import React from 'react';

const Header: React.FC = () => {
   return (
      <header className="bg-white shadow">
         <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-3">
            <h1 className="text-3xl font-bold text-gray-900">
               {/*Persona Card*/}
               Careverse Experimental Features
            </h1>

            <h2 className="text-xl font-medium uppercase text-gray-700">Persona Card</h2>
         </div>
      </header>
   );
};

export default Header;
