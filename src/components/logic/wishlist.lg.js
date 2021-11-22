import { useUser } from "../../context";

export const wishlistLogic = () => {
  const { userState } = useUser();
  let wishlist = userState.wishlist;

  return { wishlist };
};
