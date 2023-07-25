import { produce } from "immer";

const initState = {
  carts: [],
} as { carts: any[] };

export const CartReducer = (state = initState, action: any) => {
  return produce(state, (darfState) => {
    switch (action.type) {
      case "cart/addtocart":
        const product = action.payload;
        const exitProductItem = darfState.carts.findIndex(
          (item) => item.id === product.id
        );
        if (exitProductItem < 0) {
          darfState.carts.push(product);
        } else {
          darfState.carts[exitProductItem].quantity++;
        }

        break;
      case "cart/increas":
        darfState.carts.find((item) => item.id == action.payload).quantity++;
        break;
      case "cart/decreas":
        const currentProduct = darfState.carts.find(
          (item) => item.id == action.payload
        );
        currentProduct.quantity--;
        if (currentProduct.quantity < 1) {
          const confirm = window.confirm(
            "Bạn có chắc chắn muốn xóa sản phẩm khỏi giỏ hàng"
          );

          if (confirm) {
            darfState.carts = darfState.carts.filter(
              (item) => item.id !== currentProduct.id
            );
          }
        }
        break;
      default:
        return state;
    }
  });
};
