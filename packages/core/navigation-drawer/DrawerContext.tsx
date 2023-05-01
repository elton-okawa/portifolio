import React, {
  ReactNode,
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
  defaultOpen: boolean;
  children: ReactNode;
}

export function DrawerProvider({ defaultOpen, children }: DrawerProviderProps) {
  const [open, setOpen] = useState(defaultOpen);

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
