import {PagesType} from "./redux/store";
import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

// export const rerenderEntireTree = (state: PagesType) => {
//     const root = ReactDOM.createRoot(
//         document.getElementById('root') as HTMLElement
//     );
//     root.render(
//         <React.StrictMode>
//             <BrowserRouter>
//                 <App state={state}/>
//             </BrowserRouter>
//         </React.StrictMode>
//     );
// }