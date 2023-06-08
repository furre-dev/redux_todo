import { Provider } from "hooks-for-redux";
import {useTodo, removeItem, addItem, itemDone} from "./redux/todo"
import {MdDelete, MdDone} from "react-icons/md"
import { useState } from "react";


function App() {
  const [title, setTitle] = useState("");
  const data = useTodo().todoItems;
  console.log(data)

  return (
      <main className="flex flex-col space-y-8 py-10 items-center min-h-screen">
        <h1 className="text-7xl">Todolist</h1>
        <div className="space-y-4">
          {data.map((item) => {
            if(item.done){
              return;
            }
            return (
              <div className="bg-red-400 min-w-max w-96 h-24 rounded-lg px-5 flex items-center justify-between">
                <h2 className="text-4xl text-white">{item.title}</h2>
                <div>
                  <button 
                  onClick={() => itemDone(item.id)}
                  className="hover:scale-75 transition-transform duration-300"> 
                    <MdDone size={40} color="green" />
                  </button>
                  <button 
                  onClick={() => removeItem(item.id)}
                  className="hover:scale-75 transition-transform duration-300"> 
                    <MdDelete size={40} color="white" />
                  </button>
                  </div>
              </div>
            )
          })}
          <form className="flex flex-col justify-center" onSubmit={(e) => {
            e.preventDefault();
            addItem(title)
            }}>
            <input onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Title" className="border-2 border-lime-700 w-full h-10 px-3 rounded-md" />
            <button className="bg-lime-600 font-semibold text-white flex-grow-0 py-3 px-10 rounded-xl mt-2" type="submit">Add Item</button>
          </form>
        </div>
        <h1 className="text-7xl">Done</h1>
        <div className="space-y-4">
          {data.map((item) => {
            if(!item.done){
              return;
            }
            return (
              <div className="bg-green-600 min-w-max w-96 h-24 rounded-lg px-5 flex items-center justify-center">
                <h2 className="text-4xl text-white">{item.title}</h2>
              </div>
            )
          })}
        </div>
      </main>
  )
}

export default App
