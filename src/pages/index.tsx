import MenuIcon from '@mui/icons-material/Menu'
import {
    AppBar,
    Box,
    Container,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import HomeIcon from '@mui/icons-material/Home'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const menuItems = [
    { label: 'Home', icon: <HomeIcon />, link: '/' },
    { label: 'Products', icon: <ShoppingCartIcon />, link: '/products' }
    // Adicione mais itens de menu conforme necessário
]

const HomePage: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false)

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        edge="start"
                        sx={{ mr: 2 }} // Remova o display daqui
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        My App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="temporary"
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer}
                ModalProps={{
                    keepMounted: true
                }}
            >
                <Divider />
                <List sx={{ mt: 10 }}>
                    {menuItems.map((item) => (
                        <Link href={item.link} passHref key={item.label}>
                            <ListItem button component="a">
                                <ListItemIcon>
                                    <i className="material-icons">
                                        {item.icon}
                                    </i>
                                </ListItemIcon>
                                <ListItemText primary={item.label} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: `calc(100% - 240px)`,
                    marginLeft: '240px'
                }}
            >
                <Toolbar />
                <Container>
                    <Typography variant="h4" gutterBottom>
                        Welcome to My App
                    </Typography>
                    {/* Use o componente Image para exibir a imagem SVG */}
                    <Image
                        src="/next.svg"
                        alt="Next Logo"
                        width={200}
                        height={200}
                    />
                </Container>
            </Box>
        </Box>
    )
}

export default HomePage
