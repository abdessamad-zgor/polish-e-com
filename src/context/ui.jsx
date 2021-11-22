import React, { useContext, createContext, useState } from "react";

const AppbarContext = createContext();
function useAppbar() {
  const context = useContext(AppbarContext);
  return context;
}

function AppbarContextProvider({ children }) {
  const [drawers, setDrawers] = useState({
    navigation: false,
    cart: false,
    auth: false,
    user: false,
    search: false,
  });

  return (
    <AppbarContext.Provider value={{ drawers, setDrawers }}>
      {children}
    </AppbarContext.Provider>
  );
}

export default AppbarContextProvider;

export { useAppbar };
