import { dummyData, dummyData2, dummyData3 } from "./data/todos";
import NewSetup from "./main/NewSetup";
import { Vote } from "lucide-react";

function App() {

  return (
     <main className="py-5 space-y-5 p-5 bg-gray-100 font-mono dark:bg-gray-950 transition-colors duration-1000">
      <div className="max-w-screen-lg mx-auto p-4">
        <h1 className="font-bold text-start text-red-600 text-3xl pb-3 dark:text-red-600 transition-colors duration-1000 flex items-center gap-2">
        <Vote size={37} className="inline-block text-red-600 dark:text-red-600" />
        Deployment Guide
        </h1>
       
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {/* Top row: two boxes */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
          <NewSetup dummy={dummyData} title="::New Computer Setup" />
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
          <NewSetup dummy={dummyData2} title="::OnSite Setup [Backup/Check]" />
        </div>

        {/* Bottom row: one box centered */}
        <div className="md:col-span-2 flex justify-center">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md w-full md:w-2/3">
            <NewSetup dummy={dummyData3} title="::New Computer [Replacement]" />
          </div>
        </div>
      </div>
    </div>

    </main>
  )
}

export default App
