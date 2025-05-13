import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ViewStory from './components/Feed/ViewStory'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },{
    path: "/story/:id/:tot",
    element: <ViewStory/>,
  }
])
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
