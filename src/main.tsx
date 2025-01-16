import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import "./assets/css/fonts.css";

createRoot(document.getElementById("root")!).render(<App />);
