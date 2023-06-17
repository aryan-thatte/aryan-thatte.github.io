import { useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Page from "./components/Page/Page"
import styles from "./App.module.css"

export default function App() {
    const [windowWidth, setWindowWidth] = useState<number>(0)

    useEffect(() => {
        updateDimensions()
        window.addEventListener("resize", updateDimensions)
        return () => window.removeEventListener("resize", updateDimensions)
    }, [])
    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }

    return (
        <>
            <div className={styles.container}>
                <Page desktop={windowWidth > 750} />
                <Navbar desktop={windowWidth > 750} />
            </div>
        </>
    )
}
