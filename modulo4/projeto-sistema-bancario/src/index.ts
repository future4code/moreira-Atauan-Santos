import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { users } from "./data";
import { allowedNodeEnvironmentFlags } from "process";


const app = express ();
app.use(express.json())

//Requisições

app.get('/users', (req: Request, res: Response) => {
    let errorCode = 400
    try {

        if (users.length === 0) {
            throw new Error("Banco de dados vazio")
        }

        res.status(200).send(users)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

