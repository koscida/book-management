// https://www.freecodecamp.org/news/react-crud-app-how-to-create-a-book-management-app-from-scratch/
//https://www.freecodecamp.org/news/how-to-perform-crud-operations-using-react/

import React from "react";
import AppRouter from "./router/AppRouter";
import { createRoot } from "react-dom/client";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<AppRouter />);
