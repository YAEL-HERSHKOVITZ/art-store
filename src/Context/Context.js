

 import React from 'react';
//יצירת המאגר
const MyContext=React.createContext({});
//ספק של המאגר
export const MyProvider = MyContext.Provider;

//יצוא של המאגר
export default MyContext

