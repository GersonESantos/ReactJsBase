import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"

const NavBar = () => {
    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",
        minHeight: "64px"
    }))

    const StyledAppBar = styled(AppBar)(() => ({
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        color: "inherit" // Herda a cor do tema
    }))

    const StyledMenuItem = styled(MenuItem)(() => ({
        fontSize: "1rem",
        fontWeight: 500,
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            transform: "scale(1.05)"
        }
    }))

    return (
        <>
            <StyledAppBar position="fixed">
                <StyledToolbar>
                    <StyledMenuItem>About</StyledMenuItem>
                    <StyledMenuItem>Skills</StyledMenuItem>
                    <StyledMenuItem>Projects</StyledMenuItem>
                </StyledToolbar>
            </StyledAppBar>
        </>
    )
}

export default NavBar