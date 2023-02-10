import React, { createContext, useContext, useState } from "react";
//create a context, with createContext api

export interface bikeDetailContextProps {
    bikeNameState: [any, React.Dispatch<React.SetStateAction<any>>];
}

export const AppContext = createContext<bikeDetailContextProps | undefined>(
  undefined
);

export const useBikeDetailContext = () =>
  useContext(AppContext) as bikeDetailContextProps;

interface Props {
  children?: React.ReactNode;
}

const AppContextProvider = ({ children }: Props) => {
  // this state will be shared with all components
  const [bikeName, setBikeName] = useState("");
  return (
    // this is the provider providing state
    <AppContext.Provider
      value={{
        bikeNameState: [bikeName, setBikeName]
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
