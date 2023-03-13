import Navbar from "./components/Navbar";
import Title from "./components/Title";
import ContainerList from "./components/ItemListContainer"

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Title string="grilla"/>
    <ContainerList content="greatting"/>
    <Title string="grilla 2"></Title>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 my-2">
      <div className="bg-yellow-400 col-span-2 h-56">A</div>
      <div className="bg-red-500 h-56">B</div>
      <div className="bg-green-400 h-56">C</div>
      <div className="bg-blue-400 col-span-4 h-56">D</div>
    </div>
    <h1 className="text-center text-5xl mb-5">Grid column with rows</h1>
    <div className="container mx-auto grid grid-cols-1 grid-rows-1 sm:grid-cols-4 sm:grid-rows-2 gap-4 my-2">
      <div className="bg-yellow-400 h-56">A</div>
      <div className="bg-red-500 h-56">B</div>
      <div className="bg-green-400 col-span-1 row-span-1 sm:col-span-2 sm:row-span-2 h-56">C</div>
      <div className="bg-blue-400 h-56">D</div>
      <div className="bg-blue-400 h-56">D</div>
    </div>
    <h1 className="text-center text-5xl mb-5">Grid Movil</h1>
    <div className="container mx-auto grid gap-4 grid-cols-3">
      <div className="h-36 sm:h-56 bg-red-200">A</div>
      <div className="h-36 sm:h-56 bg-red-200 col-span-2 grid grid-cols-2 gap-1">
        <div className="bg-blue-300 grid grid-rows-2">
          <div className="bg-yellow-400 gap-1">img</div>
          <div className="bg-yellow-200 gap-1">inside down</div>
        </div>
        <div className="bg-blue-300 grid grid-rows-2">
          <div className="bg-yellow-400 gap-1">img</div>
          <div className="bg-yellow-200 gap-1">inside down</div>
        </div>
      </div>
      <div className="h-36 sm:h-56 bg-red-200 col-span-2">C</div>
      <div className="h-36 sm:h-56 bg-red-200">E</div>
      <div className="h-36 sm:h-56 bg-red-200">A</div>
      <div className="h-36 sm:h-56 bg-red-200 col-span-2">B</div>
      <div className="h-36 sm:h-56 bg-red-200 col-span-2">C</div>
      <div className="h-36 sm:h-56 bg-red-200">E</div>
    </div>
    </>
  );
}

export default App;
