import { createContext } from "react";
import { SchoolSatInterface } from "../interfaces/interfaces";

export const GlobalContext = createContext<SchoolSatInterface[]>([])