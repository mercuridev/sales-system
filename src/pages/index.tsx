import AssessmentIcon from '@mui/icons-material/Assessment'
import {
    Box,
    Button,
    Container,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Toolbar,
    Typography
} from '@mui/material'
import Image from 'next/image'
import React from 'react'
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts'

import Layout from '../components/layout'

const reasonsToUse = [
    'Aumenta a eficiência operacional',
    'Melhora a colaboração em equipe',
    'Reduz erros humanos',
    'Amplia a visibilidade dos processos',
    'Agiliza tomadas de decisão',
    'Integração com outras ferramentas',
    'Suporte técnico 24/7',
    'Atualizações frequentes com novas funcionalidades',
    'Acessibilidade e usabilidade',
    'Economia de tempo e recursos'
]

const data = [
    { name: 'Janeiro', produtividade: 80 },
    { name: 'Fevereiro', produtividade: 90 },
    { name: 'Março', produtividade: 85 },
    { name: 'Abril', produtividade: 95 },
    { name: 'Maio', produtividade: 88 },
    { name: 'Junho', produtividade: 92 }
]

const HomePage: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false)

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    return (
        <Layout>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Container>
                    <Typography variant="h4" gutterBottom>
                        Bem-vindo à Nossa Plataforma
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Paper elevation={3} sx={{ p: 2 }}>
                                <Typography variant="h6">
                                    Aumente Sua Produtividade
                                </Typography>
                                <Typography variant="body1">
                                    Nossa plataforma revolucionária vai melhorar
                                    a eficiência do seu trabalho e impulsionar a
                                    sua produtividade.
                                </Typography>
                                <Image
                                    src="/product-image.jpg"
                                    alt="Product"
                                    width={400}
                                    height={300}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper elevation={3} sx={{ p: 2 }}>
                                <Typography variant="h6">
                                    Estatísticas de Produtividade
                                </Typography>
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={data}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar
                                            dataKey="produtividade"
                                            fill="#8884d8"
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Typography variant="h5" sx={{ mt: 3 }}>
                        10 Motivos para Usar Nosso Produto
                    </Typography>
                    <List>
                        {reasonsToUse.map((reason, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <AssessmentIcon />
                                </ListItemIcon>
                                <ListItemText primary={reason} />
                            </ListItem>
                        ))}
                    </List>
                    <Button variant="contained" color="primary" sx={{ mt: 3 }}>
                        Saiba Mais
                    </Button>
                </Container>
            </Box>
        </Layout>
    )
}

export default HomePage
