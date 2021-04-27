import React, { useContext } from "react";
import ComponentsF from "./ComponentsF";
import { ChannelContext, UserContext } from "./ContextOne";

function ComponentsE() {
  const User = useContext(UserContext);
  const Channel = useContext(ChannelContext);

  return (
    <div>
      {User} - {Channel}
      {/* <ComponentsF /> */}
    </div>
  );
}

export default ComponentsE;
