import React from "react";

class ProductList extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div>
        <div className="list-wrapper">
          <div className="list-title-container">
            <span>Product Name</span>
          </div>
          <ul className="list">
            {data &&
              data.map(item => (
                <li key={item.id}>
                  <span>{item.name}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductList;
