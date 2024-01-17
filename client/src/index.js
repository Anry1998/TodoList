import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import ToDoStore from './store'

// export const Context = React.createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

    // <Context.Provider value={{
    //   toDo: new ToDoStore()
    // }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    // </Context.Provider>

 
);


