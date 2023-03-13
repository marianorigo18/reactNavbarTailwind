import Navbar from "./components/Navbar";
import Title from "./components/Title";
import ContainerList from "./components/ItemListContainer"
import Modal from "./components/Modal";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Title string="grilla"/>
    <ContainerList content="greatting"/>
    <Modal />
    <Title string="grilla 2"></Title>
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
