import { Button, ButtonGroup } from "@mui/material"
import styles from "./Navbar.module.css"

interface NavbarProps {
    desktop: boolean
}

export default function Navbar(props: NavbarProps) {
    console.log(props.desktop)
    return (
        <div className={styles.navbar}>
            <ButtonGroup className={styles.buttons}>
                <Button className="home">Home</Button>
                <Button className="experience">Experience</Button>
                <Button className="projects">Projects</Button>
                <Button className="music">Music</Button>
                <Button className="contact">Contact</Button>
            </ButtonGroup>
        </div>
    )
}
