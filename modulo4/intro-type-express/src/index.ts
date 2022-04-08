import express from 'express';
import cors from 'cors';
import { AddressInfo } from "net"

const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

// Exercício 1

app.get("/", (req, res) => {
    console.log('Testando testando')
    res.send("Hello from Express")
})

// Exercício 2

type User = {
    id: number,
    nameUser: string,
    phone: string,
    email: string,
    website: string
}[]