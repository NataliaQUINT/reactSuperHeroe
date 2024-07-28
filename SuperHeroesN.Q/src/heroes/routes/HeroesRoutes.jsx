import { Navigate, Route, Routes } from "react-router-dom"
import { Footer } from "../../ui/components/footer"
import { Navbar } from "../../ui/components/navbar"
import { HomePage } from "../pages/HomePage"
import { AnimePage } from "../pages/AnimePage"
import { ComicPage } from "../pages/ComicPage"
import { HeroesPage } from "../pages/HeroesPage"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}></Route>
            <Route path="home" element={<HomePage/>}></Route>
            <Route path="animes" element={<AnimePage/>}></Route>
            <Route path="comics" element={<ComicPage/>}></Route>
            <Route path="hero/:id" element={<HeroesPage/>}></Route>
        </Routes>
        <Footer/>
        </>
  )
}
