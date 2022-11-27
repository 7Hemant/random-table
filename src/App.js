import "./App.css";
import Table from "./component/Table";
import { data } from "./data/data";

function App() {
  return (
    <div className="App">
      <h1>table with type-1</h1>
      <Table data={data} type="type-1" />
      <h1>table with type-2</h1>
      <Table data={data} type="type-2" />
      <h1>table with type-3</h1>
      <Table data={data} type="type-3" />
      <h1>table with type-4</h1>
      <Table data={data} type="type-4" />
    </div>
  );
}

export default App;
