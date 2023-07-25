import React, { Dispatch, useContext, useEffect } from "react";
import { Button } from "..";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  fetchProducts,
  removeProduct,
  updateProduct,
} from "../../actions/Product";
import AddToCart from "../AddToCart";
type Props = {};

const ProductsList = (props: Props) => {
  // const {state,dispatch} = useContext(ProductContext)
  const dispatch: Dispatch<any> = useDispatch();

  const { products, isLoading, error } = useSelector(
    (state: any) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
    const listCart = JSON.parse(localStorage.getItem("carts")!);
    dispatch({ type: "cart/listCarts", payload: listCart });
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-2xl font-bold">Quản lí sản phẩm</h1>
      <ul className="m-4 space-y-3">
        {products.map((product: any) => (
          <div className="flex justify-center gap-4 " key={product.id}>
            <li>-Name: {product.name}</li>
            <li>-Price: {product.price}</li>
            <Button
              type="danger"
              onClick={() => dispatch(removeProduct(product.id))}
            >
              Delete
            </Button>
            <Button
              type="primary"
              onClick={() =>
                dispatch(
                  updateProduct({
                    id: product.id,
                    name: "Product Added update",
                    price: 100,
                  })
                )
              }
            >
              Update
            </Button>
            <AddToCart product={product} />
          </div>
        ))}
      </ul>
      <Button
        type="primary"
        onClick={() =>
          dispatch(addProduct({ name: "Product Added 1", price: 200 }))
        }
      >
        Thêm
      </Button>
    </div>
  );
};

export default ProductsList;
