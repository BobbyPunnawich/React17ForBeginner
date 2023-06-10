import Item from "./Item";
import "./Transaction.css";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import DataContext from "../data/DataContext";
import { useContext } from "react";

const Transaction = (props) => {
  const { items } = props;
  return (
    // ใ้ช้ mapping ==> เพิ่มได้ auto
    // ใช้ spread op ==> ...e ลดรูแคำสั่ง assignment propertiesได้
    <div>
      <ul className="item-list">
        {items.map((e) => {
          return <Item {...e} key={e.id}></Item>;
        })}
      </ul>
    </div>
  );
};

export default Transaction;
