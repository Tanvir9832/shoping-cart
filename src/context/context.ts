import React from "react";
export type typeData = {
    id?: number,
    title?: string,
    price?: number,
    description?: string,
    image?: string,
    rating ?: {
      rate?: number,
      count?: number
    }
  }

export const UserContext = React.createContext<typeData>({});