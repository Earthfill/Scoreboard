import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error, Home, SharedLayout } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <SharedLayout />
          }
        >
          <Route index element={<Home />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
