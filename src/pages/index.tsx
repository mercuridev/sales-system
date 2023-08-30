import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    Typography
} from '@mui/material'
import React from 'react'

const reasonsToUse = [
    'Automatize processos operacionais',
    'Aumente a eficiência da equipe',
    'Tenha visibilidade completa dos dados',
    'Integração com outras ferramentas',
    'Atualizações regulares com novos recursos',
    'Acessível em qualquer dispositivo',
    'Relatórios personalizáveis',
    'Segurança avançada de dados',
    'Fácil de implementar e usar'
]

const HomePage: React.FC = () => {
    return (
        <Box>
            {/* Banner */}
            <Box sx={{ p: 3, backgroundColor: '#1976D2', color: 'white' }}>
                <Container maxWidth="md">
                    <Typography variant="h4" gutterBottom>
                        Procurando o melhor sistema de gestão para sua empresa?
                        Conheça MercuriDev!
                    </Typography>
                    <Typography variant="body1" paragraph>
                        MercuriDev é o sistema de gestão que automatiza sua
                        operação de ponta a ponta.
                    </Typography>
                    <Button variant="contained" color="primary">
                        Comece a usar agora
                    </Button>
                </Container>
            </Box>

            {/* Reasons to Use */}
            <Box sx={{ p: 3 }}>
                <Container maxWidth="md">
                    <Typography variant="h5" align="center" gutterBottom>
                        10 Motivos para Usar o MercuriDev
                    </Typography>
                    <Grid container spacing={3}>
                        {reasonsToUse.map((reason, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ height: '100%' }}>
                                    <CardContent>
                                        <Typography variant="body1">
                                            {reason}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Customer Feedback */}
            <Box sx={{ p: 3, backgroundColor: '#1976D2', color: 'white' }}>
                <Container maxWidth="md">
                    <Typography variant="h5" align="center" gutterBottom>
                        Feedback de Clientes
                    </Typography>
                    <Typography variant="body1" align="center" paragraph>
                        "O MercuriDev revolucionou nossa empresa. Estamos mais
                        produtivos e eficientes do que nunca!"
                    </Typography>
                    <Typography variant="subtitle2" align="center" gutterBottom>
                        - Cliente Satisfeito
                    </Typography>
                </Container>
            </Box>

            {/* Product Features */}
            <Box sx={{ p: 3 }}>
                <Container maxWidth="md">
                    <Typography variant="h5" align="center" gutterBottom>
                        Nossos Planos e Recursos
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent>
                                    <BusinessCenterIcon fontSize="large" />
                                    <Typography variant="h6">
                                        Plano Básico
                                    </Typography>
                                    <Divider sx={{ my: 1 }} />
                                    <Typography variant="body1">
                                        Recurso 1<br />
                                        Recurso 2<br />
                                        Recurso 3
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        color="primary"
                                        sx={{ mt: 2 }}
                                    >
                                        $19/mês
                                    </Typography>
                                    <Button variant="outlined" fullWidth>
                                        Saiba Mais
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent>
                                    <MonetizationOnIcon fontSize="large" />
                                    <Typography variant="h6">
                                        Plano Intermediário
                                    </Typography>
                                    <Divider sx={{ my: 1 }} />
                                    <Typography variant="body1">
                                        Recurso 1<br />
                                        Recurso 2<br />
                                        Recurso 3<br />
                                        Recurso 4
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        color="primary"
                                        sx={{ mt: 2 }}
                                    >
                                        $39/mês
                                    </Typography>
                                    <Button variant="outlined" fullWidth>
                                        Saiba Mais
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent>
                                    <EmojiPeopleIcon fontSize="large" />
                                    <Typography variant="h6">
                                        Plano Premium
                                    </Typography>
                                    <Divider sx={{ my: 1 }} />
                                    <Typography variant="body1">
                                        Todos os recursos incluídos
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        color="primary"
                                        sx={{ mt: 2 }}
                                    >
                                        $79/mês
                                    </Typography>
                                    <Button variant="outlined" fullWidth>
                                        Saiba Mais
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Footer */}
            <Box sx={{ p: 3, backgroundColor: '#1976D2', color: 'white' }}>
                <Container maxWidth="md">
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item>
                            <a href="#">
                                <InstagramIcon
                                    sx={{ color: 'white' }}
                                    fontSize="large"
                                />
                            </a>
                        </Grid>
                        <Grid item>
                            <a href="#">
                                <FacebookIcon
                                    sx={{ color: 'white' }}
                                    fontSize="large"
                                />
                            </a>
                        </Grid>
                        <Grid item>
                            <a href="#">
                                <YouTubeIcon
                                    sx={{ color: 'white' }}
                                    fontSize="large"
                                />
                            </a>
                        </Grid>
                        <Grid item>
                            <a href="#">
                                <GitHubIcon
                                    sx={{ color: 'white' }}
                                    fontSize="large"
                                />
                            </a>
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: 3 }}>
                        <Button color="inherit" sx={{ mr: 2 }}>
                            Política de Privacidade
                        </Button>
                        <Button color="inherit" sx={{ mr: 2 }}>
                            Termos de Uso
                        </Button>
                        <Button color="inherit">
                            Código de Ética e Conduta
                        </Button>
                        <Button color="inherit">Trabalhe conosco</Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default HomePage
