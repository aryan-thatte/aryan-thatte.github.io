import { useState } from "react"
import Experience from "../../content/Experience/Experience"
import Home from "../../content/Home/Home"
import Projects from "../../content/Projects/Projects"
import Contact from "../../content/Contact/Contact"
import Music from "../../content/Music/Music"
import styles from "./Page.module.css"

enum Pages {
    "Home" = "Home",
    "Experience" = "Experience",
    "Projects" = "Projects",
    "Music" = "Music",
    "Contact" = "Contact",
}

interface NavbarProps {
    desktop: boolean
}

export default function Page(props: NavbarProps) {
    const [page, setSection] = useState<Pages>(Pages.Home)

    return (
        <div className={styles.pages}>
            {page === Pages.Home && <Home />}
            {page === Pages.Experience && <Experience />}
            {page === Pages.Projects && <Projects />}
            {page === Pages.Music && <Music />}
            {page === Pages.Contact && <Contact />}
        </div>
    )
}
