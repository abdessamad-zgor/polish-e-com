import React from "react";

function ContainerContext(ContextProvider, children) {
  return function () {
    return <ContextProvider>{children}</ContextProvider>;
  };
}

export default ContainerContext;
