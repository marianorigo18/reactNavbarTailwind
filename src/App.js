function App() {
  return (
    <div className="w-full bg-gray-700">
      <div className="container sm bg-slate-300 mx-auto py-1 flex justify-between">
        <h1 className="text-orange-600 text-4xl font-bold">Hello</h1>
        <input type="text" className="w-96 px-2" placeholder="busca productos..."></input>
        <ul className="flex w-96 bg-slate-600 font-bold justify-between text-yellow-200">
          <li>web</li>
          <li>web</li>
          <li>web</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
