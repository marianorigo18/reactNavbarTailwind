import Navbar from "./components/Navbar";
import Title from "./components/Title";
import ContainerList from "./components/ItemListContainer"
import Modal from "./components/Modal";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Title string="products"/>
    <ContainerList>
    <div className="container mx-auto grid gap-4 grid-cols-3">
      <div className="h-36 sm:h-56 bg-red-200"></div>
      <div className="h-36 sm:h-56 bg-red-200 col-span-2 grid grid-cols-2 gap-1">
      </div>
      <div className="h-36 sm:h-56 bg-red-200 col-span-2"></div>
      <div className="h-36 sm:h-56 bg-red-200"></div>
      <div className="h-36 sm:h-56 bg-red-200"></div>
      <div className="h-36 sm:h-56 bg-red-200 col-span-2"></div>
      <div className="h-36 sm:h-56 bg-red-200 col-span-2"></div>
      <div className="h-36 sm:h-56 bg-red-200"></div>
    </div>
    </ContainerList>
    </>
  );
}

export default App;
