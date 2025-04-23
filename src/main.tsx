import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const redirect = sessionStorage.redirect;
if (redirect) {
    console.log("Redirecting to: ", redirect);
    sessionStorage.removeItem("redirect");
    window.history.replaceState(null, "", redirect);
}


createRoot(document.getElementById("root")!).render(<App />);
