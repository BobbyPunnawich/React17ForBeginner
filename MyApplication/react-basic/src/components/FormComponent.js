import "./FormComponent.css";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FormComponent = (props) => {
  console.log("Render Form Component");
  // State
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [formValid, setFormValid] = useState(false);

  const inputTitle = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };
  const inputAmount = (event) => {
    setAmount(event.target.value);
  };
  const saveItem = (event) => {
    event.preventDefault();
    const itemData = {
      id: uuidv4(),
      title: title,
      amount: amount,
    };
    props.onAddItem(itemData);
    setTitle("");
    setAmount(0);
  };

  useEffect(() => {
    if (amount !== 0) {
      setFormValid(true);
    }
  }, [amount]);
  return (
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label> ชื่อรายการ </label>
          <input
            type="text"
            placeholder="ระบุชิื่อรายการของคุณ"
            onChange={inputTitle}
            value={title}
            required
          ></input>
        </div>
        <div className="form-control">
          <label> จำนวนเงิน </label>
          <input
            type="number"
            placeholder="(+ รายรับ / - รายจ่าย)"
            onChange={inputAmount}
            value={amount}
            required
          ></input>
        </div>
        <div>
          <button type="submit" className="btn" disabled={!formValid}>
            {" "}
            เพิ่มข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
