import { createContext } from "react";

type UserType = {
  logged: boolean;
  email: string;
  name: string;
};

type UserContextType = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

export const UserContext = createContext<UserContextType>({} as UserContextType);
