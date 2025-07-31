import { useState } from "react";

function App() {

  const [color, setColor] = useState('bg-gray-900');

  return (
    <>
      <div className={`w-full min-h-screen ${color} relative`}>
        <div className="w-[400px] h-auto bg-gray-800 py-4 px-5 flex items-center justify-center gap-5 rounded-lg absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <button onClick={() => setColor('bg-gray-900')} className="py-2 px-3 bg-gray-900 text-white rounded-lg cursor-pointer">Gray -900</button>
          <button onClick={() => setColor('bg-green-900')} className="py-2 px-3 bg-green-900 text-white rounded-lg cursor-pointer">Gray -900</button>
          <button onClick={() => setColor('bg-red-900')} className="py-2 px-3 bg-red-900 text-white rounded-lg cursor-pointer">Gray -900</button>
        </div>
      </div>
    </>
  );
};

export default App;