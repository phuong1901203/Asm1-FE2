import React, { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "..";

type Props = {};

const ListCart = (props: Props) => {
  const { carts } = useSelector((state: any) => state.carts);
  const dispatch = useDispatch();
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold">Giỏ hàng</h1>
      <ul className="mt-4">
        {carts?.map((item: any) => (
          <div key={item.id} className="flex gap-3 mt-4">
            <li>
              Name: {item.name}- Quality: {item.quantity}- Price:{item.price}
            </li>
            <Button
              type="primary"
              onClick={() =>
                dispatch({ type: "cart/decreas", payload: item.id })
              }
            >
              -
            </Button>
            <Button
              type="primary"
              onClick={() =>
                dispatch({ type: "cart/increas", payload: item.id })
              }
            >
              +
            </Button>
          </div>
        ))}
      </ul>
      Total:
      {carts.reduce((sum: any, item: any) => {
        return sum + item.price * item.quantity;
      }, 0)}
    </div>
  );
};

export default ListCart;
