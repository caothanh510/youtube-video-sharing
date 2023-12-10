import React from "react";
import { createContext, useContext, useReducer } from "react";

const NotificationContext = createContext();

const initialState = {
  notification: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "notification":
      return {
        ...state,
        notification: action.payload,
      };
    default:
      throw new Error("Unknown action");
  }
}

function NotificationProvider({ children }) {
  const [{ notification }, dispatch] = useReducer(reducer, initialState);

  setNotification = (data) => {
    dispatch({ type: "notification", payload: data });
  };

  return (
    <NotificationContext.Provider
      value={{
        notification,
        setNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

function useNotification() {
  const context = useContext(NotificationContext);
  if (context === undefined)
    throw new Error(
      "NotificationContext was used outside NotificationProvider"
    );
  return context;
}

export { NotificationProvider, useNotification };
