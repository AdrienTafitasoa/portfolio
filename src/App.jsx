import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Portfolio from './pages/Portfolio/Portfolio';
import ProjectDetail from './pages/ProjectDetails/ProjectDetail';

function App() {
const router = createBrowserRouter([
  {
    path:"/",
    element:<Portfolio/>
  },
  {
    path:"/project/:id",
    element:<ProjectDetail/>
  }
])
  return (<RouterProvider router={router}/>);
}

export default App;
