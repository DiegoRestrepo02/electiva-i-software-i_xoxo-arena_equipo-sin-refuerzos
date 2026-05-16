import { createContext } from "react";

type UserType = {
  strCorreo: string;
  strNombre: string;
  uid: string;
  bitLogeado: boolean;
};

type UserContextType = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

export const UserContext = createContext<UserContextType>({} as UserContextType);
