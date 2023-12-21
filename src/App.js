import React from "react";
import { ReactDOM } from "react";
function App() {

  var [data,setData] = React.useState("");
  var  [items, setItems] = React.useState([]);

  function storeData(){
    setItems((prevItems)=>{
      return [data,...prevItems];
    });
    setData("");
   
  }
  function changeData(event){
    setData(event.target.value);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value= {data}onChange={changeData} type="text" />
        <button onClick={storeData}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {
          items.map((item)=>{
            return (<li>{item}</li>);
          })
        }
        </ul>
      </div>
    </div>
  );
}

export default App;