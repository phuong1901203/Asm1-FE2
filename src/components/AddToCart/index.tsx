import React, { useState } from "react";
import { FcPaid } from "react-icons/fc";
import { Button } from "..";
import Input from "../Input";
import { useDispatch } from "react-redux";
type Props = {
  product: any;
};

const AddToCart = ({ product }: Props) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    const cart = { ...product, quantity: 1 };
    dispatch({ type: "cart/addtocart", payload: cart });
  };

  return (
    <div className="text-2xl">
      <Button onClick={() => addToCart()}>
        <FcPaid />
      </Button>
    </div>
  );
};

export default AddToCart;
