import React, { useRef } from "react";

function AddFishForm(props) {
  const nameRef = React.createRef();
  const priceRef = React.createRef();
  const statusRef = React.createRef();
  const descRef = React.createRef();
  const imageRef = React.createRef();
  function createFish(event) {
    event.preventDefault();
    const fish = {
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value),
      status: statusRef.current.value,
      desc: descRef.current.value,
      image: imageRef.current.value,
    };
    props.addFish(fish);
    // console.log("fish 🐟 :", fish);
  }

  return (
    <form className="fish-edit" onSubmit={createFish}>
      <input name="name" ref={nameRef} type="text" placeholder="name" />
      <input name="price" ref={priceRef} type="text" placeholder="price" />
      <select name="status" ref={statusRef}>
        <option value="available">Fresh</option>
        <option value="unavailable">Sold out</option>
      </select>
      <textarea name="desc" ref={descRef} type="text" placeholder="desc" />
      <input name="image" ref={imageRef} type="text" placeholder="image" />
      <button type="submit">+ Add fish</button>
    </form>
  );
}

export default AddFishForm;
