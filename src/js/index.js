//import react into the bundle
import React from 'react'
import { createRoot } from 'react-dom/client'

//include bootstrap npm library into the bundle
//import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//
const root = createRoot(document.querySelector("#app"))

//render your react application
root.render(<Layout />)