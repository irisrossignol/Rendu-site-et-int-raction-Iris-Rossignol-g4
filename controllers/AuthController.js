import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



const signup = async (req, res) => {
    const { email, pseudo, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(req.body)
    prisma.user.create({
        data: {
            email : email,
            pseudo : pseudo,
            password : hashedPassword,
        },
    })
    .then((user) => {
        res.status(200).json({ user })
    })
    .catch((error) => {
        res.status(400).json({ error })
    })
}





    /*const login = async (req, res) => {
        console.log("login");
        console.log(req.body);
        try {
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email
            }
        }).then(data => {
            if(!data) res.status(404).send("User not found");
        const valid = bcrypt.compare(req.body.password, data.password);
    if (!valid) res.status(400).send("Invalid password");
            const token = jwt.sign ({ id: data.id, email: data.email }, process.env.JWT_SECRET,
                {          
                    expiresIn: '1h'
                });
                res.send({token: token});
            }).catch(e => {
                console.log(error);
                res.status(400).send(e)
        })
    } catch (error) {
        res.json(error)
    }} */

   
const login = async (req, res) => {
    console.log("login");
    console.log(req.body);
    try {
    const user = await prisma.user.findUnique({
        where: {
            email: req.body.email
        }
    }).then(data => {
        if(!data) res.status(404).send("User not found");
    const valid = bcrypt.compare(req.body.password, data.password);
if (!valid) res.status(400).send("Invalid password");
        const token = jwt.sign ({ id: data.id, email: data.email }, process.env.JWT_SECRET,
            {          
                expiresIn: '1h'
            });
            res.send({token: token});
        }).catch(e => {
            console.log(error);
            res.status(400).send(e)
    })
} catch (error) {
    res.json(error)
}}

    
    
    export { signup, login }
    