import React from "react";
import ComponentsA from "./ComponentsA";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function ContextOne() {
  return (
    <div>
      <UserContext.Provider value="Talha">
        <ChannelContext.Provider value="Selfcodex">
          <ComponentsA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default ContextOne;
