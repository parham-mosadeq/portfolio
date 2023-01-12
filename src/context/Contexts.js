import { createContext } from 'react';
export const appContext = createContext();
export const sayGoodbye = createContext();
const Contexts = ({ children }) => {
  return (
    <appContext.Provider value={'hi'}>
      <sayGoodbye.Provider value={'bye'}>{children}</sayGoodbye.Provider>
    </appContext.Provider>
  );
};

export default Contexts;
