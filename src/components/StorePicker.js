import React from "react";
import { getFunName } from "../helpers";
export default class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    event.preventDefault();
    const storeName = this.myInput.current.value;

    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form onSubmit={this.goToStore} className="store-selector">
        <h2>Please select</h2>
        <input
          ref={this.myInput}
          type="text"
          placeholder="Please enter store name"
          defaultValue={getFunName()}
        />
        <button type="submit">Vistit Store</button>
      </form>
    );
  }
}
