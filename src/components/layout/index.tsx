import AssessmentIcon from '@mui/icons-material/Assessment'
import DashboardIcon from '@mui/icons-material/Dashboard'
import HomeIcon from '@mui/icons-material/Home'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import PeopleIcon from '@mui/icons-material/People'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {
    AppBar,
    Box,
    Container,
    CssBaseline,
    Dialog,
    DialogContent,
    DialogTitle,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    SpeedDial,
    Toolbar,
    Typography
} from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactNode, useState } from 'react'
import ContactForm from '../contact-form'

const menuItems = [
    { label: 'Home', icon: <HomeIcon />, link: '/' },
    { label: 'Products', icon: <ShoppingCartIcon />, link: '/products' },
    { label: 'Customers', icon: <PeopleIcon />, link: '/customers' },
    { label: 'Reports', icon: <AssessmentIcon />, link: '/reports' },
    { label: 'Dashboard', icon: <DashboardIcon />, link: '/dashboard' }
    // Adicione mais itens de menu conforme necessário
]

// TODO: Exportar interface
interface LayoutProps {
    children: ReactNode
}

// TODO: Precisa fazer com que o template padrão fique para todas as paginas, sem ter que ficar repetindo
const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [speedDialOpen, setSpeedDialOpen] = useState(false)
    const [openDialog, setOpenDialog] = useState(false) // Adicione o estado do modal aqui
    const router = useRouter()

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const openContactDialog = () => {
        setOpenDialog(true)
    }

    const closeContactDialog = () => {
        setOpenDialog(false)
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
                            <ListItem component="a">
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
                <Container>{children}</Container>
            </Box>
            <SpeedDial
                ariaLabel="SpeedDial"
                icon={<MailIcon />}
                onClick={openContactDialog}
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            />
            <Dialog open={openDialog} onClose={closeContactDialog}>
                <DialogTitle>Entre em Contato</DialogTitle>
                <DialogContent>
                    <ContactForm />
                </DialogContent>
            </Dialog>
        </Box>
    )
}

export default Layout
