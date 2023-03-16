import { useState } from "react";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import ContainerList from "./components/ItemListContainer"
import Modal from "./components/Modal";

function App() {
  const [stateModal1, setStateModal] = useState(false)
  const [stateModal2, setStateModal2] = useState(false)
  const [stateModal3, setStateModal3] = useState(false)
  return (
    <>
    <Navbar></Navbar>
    <Title string="products"/>
    {/*Modal #1*/}
    <Modal
      state={stateModal1}
      change={setStateModal}
      title='Hello im dinamic'
    >
    </Modal>
    {/*Modal #2*/}
    <Modal
      state={stateModal2}
      change={setStateModal2}
      title='Hello im dinamic 2'
    >
    </Modal>
    {/*Modal #3*/}
    <Modal
      state={stateModal3}
      change={setStateModal3}
      image={'https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4'}
      title='Hello im dinamic 2'
    >
    </Modal>
    <ContainerList>
    <div className="container mx-auto grid gap-4 grid-cols-3">
      <div className="h-36 sm:h-56 bg-red-200 cursor-pointer" onClick={() => setStateModal(!stateModal1)}></div>
      <div className="h-36 sm:h-56 bg-red-300 col-span-2 grid grid-cols-2 gap-1 cursor-pointer" onClick={() => setStateModal2(!stateModal2)}>
      </div>
      <div className="h-36 sm:h-56 bg-red-400 col-span-2 cursor-pointer" onClick={() => setStateModal3(!stateModal3)}></div>
      <div className="h-36 sm:h-56 bg-red-500"></div>
      <div className="h-36 sm:h-56 bg-blue-200"></div>
      <div className="h-36 sm:h-56 bg-red-300 col-span-2"></div>
      <div className="h-36 sm:h-56 bg-green-100 col-span-2"></div>
      <div className="h-36 sm:h-56 bg-red-400"></div>
    </div>
    </ContainerList>
    </>
  );
}

export default App;
