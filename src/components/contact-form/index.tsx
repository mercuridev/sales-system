import { Button, TextField } from '@mui/material'
import React from 'react'

const ContactForm: React.FC = () => {
    return (
        <form>
            <TextField label="Nome" fullWidth />
            <TextField label="E-mail" fullWidth />
            <TextField label="Mensagem" multiline rows={4} fullWidth />
            <Button type="submit" variant="contained" color="primary">
                Enviar
            </Button>
        </form>
    )
}

export default ContactForm
