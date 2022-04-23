import { Link, Route, Switch } from "wouter";

import Menu from "./Menu"
import Selector from "./Selector"

function App() {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col bg-yellow-300">
      <Link to="/" >
        <img className="w-16 h-16 rounded border-2 border-dashed border-black hover:border-yellow-500 mb-2 cursor-pointer" src="/logo.svg" alt="Logo" />
      </Link>

      <Switch>
        <Route path="/">
          <header className="text-center">
            <h1 className="font-mono text-6xl font-bold">Ejercicios de Algoritmia</h1>
            <h2 className="font-mono text-4xl font-medium">
              Resueltos con <span className="font-semibold">Javascript</span>
            </h2>
          </header>
        </Route>

        <Route path="/:all">
          <span className="font-extrabold text-2xl mb-2">Ejercicios: </span>
          <Selector/>
        </Route>
      </Switch>

      <div className="w-4/5 h-auto min-h-[60%] text-2xl p-8 bg-white flex flex-col items-center justify-center rounded-2xl overflow-auto border-2 border-black border-dotted mt-5">
        <Switch>
          <Route path="/">
            <Selector/>
          </Route>

          <Route path="/:all">
            <Menu />
          </Route>
        </Switch>
      </div>

      <footer className="mt-5 text-center">
        Hecho con <span className="font-bold text-red-700">♡</span> por <span className="font-bold">Luis Osorio</span> y <span className="font-bold">Bryan Muñoz</span><br />
        <p className="font-bold text-gray-800">Copyright &copy; 2022</p>
      </footer>
    </div>
  )
}

export default App
