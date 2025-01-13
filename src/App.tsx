import React from 'react'

import MyRouter from "./routers";

function App(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-gray-900">
            {/*Persona Card*/}
            Careverse Experimental Features
          </h1>

          <h2 className="text-xl font-medium uppercase text-gray-700">
            Persona Card
          </h2>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"> <MyRouter />
      </main>
    </div>
  )
}

export default App