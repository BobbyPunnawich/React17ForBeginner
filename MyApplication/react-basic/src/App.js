import logo from "./logo.svg";
import "./App.css";
import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import { useState } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";

const Title = () => {
  const design = { color: "red", textAlign: "center" };
  return <h2 style={design}> โปรแกรมบัญชีรายรับ - รายจ่าย</h2>;
};

//Parent Component
function App() {
  const [items, setItems] = useState([]);
  const onAddNewItem = (newItem) => {
    //
    setItems((prvItems) => {
      return [newItem, ...prvItems];
    });
  };
  return (
    // Nested Component
    <DataContext.Provider
      value={{
        income: 50000,
        expense: -8000,
      }}
    >
      <div className="container">
        <Title></Title>
        <ReportComponent></ReportComponent>
        <FormComponent onAddItem={onAddNewItem}></FormComponent>

        <Transaction items={items}></Transaction>
      </div>
    </DataContext.Provider>
  );
}

export default App;
