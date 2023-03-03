import { FunctionComponent, useState } from "react";
import { AppContext } from "../components/context";

export const TestContextProvider: FunctionComponent = ({ children }: any) => {
  const [bikeName, setBikeName] = useState("");

  return (
    <AppContext.Provider
      value={{
        bikeNameState: [bikeName, setBikeName],
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
