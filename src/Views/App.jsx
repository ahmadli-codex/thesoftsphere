import React, { lazy } from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom"

// import Layout from "components/Layout"
const LandingPage = lazy(() => import("./LandingPage"))

function App() {
  return (
    <Router>
      <React.Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </React.Suspense>
    </Router>
  )
}

export default App;