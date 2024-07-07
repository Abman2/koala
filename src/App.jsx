
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { RootLayout } from "./layout/RootLayout"
import { Home } from "./pages/Home"
import { Security } from "./pages/Security"
import { DownloadApp } from "./pages/DownloadApp"
import { News } from "./pages/News"
import { ErrorPage } from "./pages/ErrorPage"


function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<RootLayout/>} errorElement={<ErrorPage/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="security" element={<Security/>}/>
        <Route path="downloadApp" element={<DownloadApp/>}/>
        <Route path="news" element={<News/>}/>

      </Route>
  )
)

  return (
   <div style={{ backgroundColor: 'rgb(23, 24, 38)' }}>
   <RouterProvider router={router} />
   </div>
  )
}

export default App



