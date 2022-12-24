import React, {
  ReactElement,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  createContext,
} from 'react';

const DrawerStateContext = createContext<boolean>(true);
const DrawerApiContext = createContext<Dispatch<SetStateAction<boolean>>>(
  () => null
);

export interface DrawerProviderProps {
  children: ReactElement;
}

export function DrawerProvider({ children }: DrawerProviderProps) {
  const [open, setOpen] = useState(true);

  return (
    <DrawerStateContext.Provider value={open}>
      <DrawerApiContext.Provider value={setOpen}>
        {children}
      </DrawerApiContext.Provider>
    </DrawerStateContext.Provider>
  );
}

export const useDrawerState = () => useContext(DrawerStateContext);
export const useDrawerApi = () => useContext(DrawerApiContext);
