import { createContext } from "react";

const InfoContextObject = createContext({
  name: "",
  email: "",
  SetNameEmail: () => {},
});

export default InfoContextObject;