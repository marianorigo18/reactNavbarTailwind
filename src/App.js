import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <h1 className="text-center text-5xl mb-5">Grid</h1>
    <div className="container mx-auto grid grid-cols-3 gap-4 my-2">
      <div className="bg-yellow-400">A</div>
      <div className="bg-red-500">B</div>
      <div className="bg-green-400">C</div>
      <div className="bg-blue-400">D</div>
    </div>
    <h1 className="text-center text-5xl mb-5">Grid responsive</h1>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 my-2">
      <div className="bg-yellow-400">A</div>
      <div className="bg-red-500">B</div>
      <div className="bg-green-400">C</div>
      <div className="bg-blue-400">D</div>
    </div>
    <h1 className="text-center text-5xl mb-5">Grid other</h1>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 my-2">
      <div className="bg-yellow-400 col-span-2">A</div>
      <div className="bg-red-500">B</div>
      <div className="bg-green-400">C</div>
      <div className="bg-blue-400 col-span-4">D</div>
    </div>
    <h1 className="text-center text-5xl mb-5">Grid twelve colums</h1>
    <div className="container mx-auto grid grid-cols-12 gap-4 my-2">
      <div className="bg-yellow-400">A</div>
      <div className="bg-red-500">B</div>
      <div className="bg-green-400">C</div>
      <div className="bg-blue-400">D</div>
      <div className="bg-yellow-400">A</div>
      <div className="bg-red-500">B</div>
      <div className="bg-green-400">C</div>
      <div className="bg-blue-400">D</div>
      <div className="bg-yellow-400">A</div>
      <div className="bg-red-500">B</div>
      <div className="bg-green-400">C</div>
      <div className="bg-blue-400">D</div>
    </div>
    <h1 className="text-center text-5xl mb-5">Grid three colums</h1>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-4 my-2">
      <div className="bg-yellow-400">A</div>
      <div className="bg-red-500">B</div>
      <div className="bg-green-400">C</div>
      <div className="bg-blue-400">D</div>
      <div className="bg-yellow-400">A</div>
      <div className="bg-red-500">B</div>
      <div className="bg-green-400">C</div>
      <div className="bg-blue-400">D</div>
      <div className="bg-yellow-400">A</div>
      <div className="bg-red-500">B</div>
      <div className="bg-green-400">C</div>
      <div className="bg-blue-400">D</div>
    </div>
    <h1 className="text-center text-5xl mb-5">Grid col start</h1>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-4 my-2">
      <div className="bg-yellow-400 sm:col-start-2">A</div>
      <div className="bg-red-500">B</div>
      <div className="bg-green-400">C</div>
      <div className="bg-blue-400">D</div>
      <div className="bg-yellow-400 col-start-3">A</div>
      <div className="bg-red-500">B</div>
      <div className="bg-green-400">C</div>
      <div className="bg-blue-400">D</div>
      <div className="bg-yellow-400">A</div>
      <div className="bg-red-500">B</div>
      <div className="bg-green-400">C</div>
      <div className="bg-blue-400">D</div>
    </div>
    <h1 className="text-center text-5xl mb-5">Grid row start</h1>
    <div className="container mx-auto grid grid-rows-1 gap-4 my-2">
      <div className="bg-yellow-400 row-span-6">A</div>
      <div className="bg-red-500">B</div>
      <div className="bg-green-400">C</div>
      <div className="bg-blue-400">D</div>
      <div className="bg-yellow-400">A</div>
      <div className="bg-red-500">B</div>
      <div className="bg-green-400">C</div>
      <div className="bg-blue-400">D</div>
      <div className="bg-yellow-400">A</div>
      <div className="bg-red-500">B</div>
      <div className="bg-green-400">C</div>
      <div className="bg-blue-400">D</div>
    </div>
    <h1 className="text-center text-5xl mb-5">Grid column with rows</h1>
    <div className="container mx-auto grid grid-cols-1 grid-rows-1 sm:grid-cols-4 sm:grid-rows-2 gap-4 my-2">
      <div className="bg-yellow-400">A</div>
      <div className="bg-red-500">B</div>
      <div className="bg-green-400 col-span-1 row-span-1 sm:col-span-2 sm:row-span-2">C</div>
      <div className="bg-blue-400">D</div>
      <div className="bg-blue-400">D</div>
    </div>
    </>
  );
}

export default App;
