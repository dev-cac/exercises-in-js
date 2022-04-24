import { Link, Route, Switch } from "wouter";

import Menu from "./Menu"
import Selector from "./Selector"

function App() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Link to="/" >
        <img className="w-16 h-16 mt-4 mb-4 rounded border-2 border-dashed border-black hover:border-yellow-500 cursor-pointer" src="/logo.svg" alt="Logo" />
      </Link>

      <Switch>
        <Route path="/">
          <header className="text-center">
            <h1 className="font-mono text-4xl font-bold md:text-6xl">Ejercicios de Algoritmia</h1>
            <h2 className="font-mono text-2xl font-medium md:text-4xl">
              Resueltos con <span className="font-bold md:font-semibold">Javascript</span>
            </h2>
          </header>
        </Route>

        <Route path="/:all">
          <span className="font-extrabold text-2xl mb-2">Ejercicios: </span>
          <Selector/>
        </Route>
      </Switch>

      <div className="w-11/12 h-[60%] text-xl p-5 bg-white rounded-2xl overflow-x-hidden overflow-y-auto border-2 border-black border-dotted mt-5 md:w-4/5 md:text-2xl">
        <div className="w-full h-auto min-h-full flex items-center justify-center text-center break-words">
          <Switch>
            <Route path="/">
              <Selector/>
            </Route>

            <Route path="/:all">
                <Menu />
            </Route>
          </Switch>
        </div>
      </div>

      <footer className="mt-5 text-center">
        Hecho con <span className="font-bold text-red-700">♡</span> por <span className="font-bold">Luis Osorio</span> y <span className="font-bold">Bryan Muñoz</span><br />
        <p className="font-bold text-gray-800">Copyright &copy; 2022</p>
      </footer>
    </div>
  )
}

export default App
