import React from 'react';

import MyRouter from './routers';
import Header from './components/Header';

function App(): React.JSX.Element {
   return (
      <div className="min-h-screen bg-gray-50">
         <Header />
         <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <MyRouter />
         </main>
      </div>
   );
}

export default App;
