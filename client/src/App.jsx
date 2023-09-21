import { Route, Routes } from "react-router-dom"
import "./style/global.scss"
import Layout from "./layout/Layout"
import { NavRouter } from "./router/NavRouter"
import { HomePage } from "./pages"
const App = () => {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        {NavRouter.map((item, idnex) => (
          <Route key={idnex} path={item.path} element={item.element} />
        ))}
      </Route>
    </Routes>
  )


}

export default App