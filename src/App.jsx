import { createBrowserRouter, RouterProvider } from "react-router"; 

import Home from "./pages/destinations/Home";
import Moon from "./pages/destinations/Moon";
import Destinations from "./pages/destinations/Destinations";
import Mars from "./pages/destinations/Mars";
import Europa from "./pages/destinations/Europa";
import Titan from "./pages/destinations/Titan";
import Crew from "./pages/crew/Crew";
import Douglas from "./pages/crew/Douglas";
import Mark from "./pages/crew/Mark";
import Victor from "./pages/crew/Victor";
import Anousheh from "./pages/crew/Anousheh";
import Technology from "./pages/technology/Technology";
import Launch from "./pages/technology/Launch";
import Spaceport from "./pages/technology/Spaceport";
import Capsule from "./pages/technology/Capsule";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home />,
  },
  {
    path: '/destinations',
    element: <Destinations />,
    children: [
      {index: true, element: <Moon />},
      {path: "mars", element: <Mars />},
      {path: "europa", element: <Europa />},
      {path: "titan", element: <Titan />}
    ]
  },
  {
    path: 'crew',
    element: <Crew />,
    children: [
      {index: true, element: <Douglas />},
      {path: "mark", element: <Mark />},
      {path: "victor", element: <Victor />},
      {path: "anousheh", element: <Anousheh />}
    ]
  },
  {
    path: 'technology',
    element: <Technology />,
    children: [
      {index: true, element: <Launch />},
      {path: 'spaceport', element: <Spaceport />},
      {path: 'capsule', element: <Capsule />}
    ]
  }
])

function App() {
  
  return (
    <main className="w-full h-[880px] sm:h-[1024px] overflow-hidden ">
      <RouterProvider router={router} />
    </main>
  );
}



export default App
