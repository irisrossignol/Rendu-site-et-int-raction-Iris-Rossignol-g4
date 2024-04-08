import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
import jwt from 'jsonwebtoken';

const getUser = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        if (!token) {
            res.status(401).json({ error: 'No token provided' })
        }
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {
                res.status(401).json({ error: 'Unauthorized' })
            }
            const user = await prisma.user.findUnique({
                where: {
                    id: decoded.id,
                },
            }).then(data => {
                res.send(data);
            }).catch(error => {
                res.send(error);
            })
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export { getUser }
