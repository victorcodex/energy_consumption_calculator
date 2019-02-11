import React from "react";
import { formatter } from "../../utils";

const CostList = ({ data }) => (
  <div className="list-wrapper">
    <div className="list-title-container">
      <span>Product Name</span>
      <span>Annual Cost</span>
    </div>
    <ul className="list">
      {data &&
        data.map(item => (
          <li>
            <span>{item.name}</span>
            <span>{formatter.format(item.annualCost)}</span>
          </li>
        ))}
    </ul>
  </div>
);

export default CostList;
