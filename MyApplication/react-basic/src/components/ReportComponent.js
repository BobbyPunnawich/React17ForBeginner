import { useContext } from "react";
import DataContext from "../data/DataContext";

const ReportComponent = () => {
  const {income,expense} = useContext(DataContext);
  return <div> Hello React : {income} : {expense} </div>;
};

export default ReportComponent;
