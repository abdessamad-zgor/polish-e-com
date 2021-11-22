import React from "react";
import { userContextLG, UserContext, useUser } from "./logic/user.lg";

function UserContextProvider({ children }) {
  let { userState, userDispatch } = userContextLG();
  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;

export { useUser };
