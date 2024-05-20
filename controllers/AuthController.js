import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const signup = async (req, res) => {
    const { email, pseudo, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = await prisma.user.create({
            data: {
                email: email,
                pseudo: pseudo,
                password: hashedPassword,
            },
        });
        res.status(200).json({ user });
    } catch (error) {
        console.error("Error", error);
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email,
            },
        });

        if (!user) {
            return res.status(404).send("User not found");
        }

        const valid = await bcrypt.compare(req.body.password, user.password);
        if (!valid) {
            return res.status(400).send("Invalid password");
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        res.send({ token: token });
    } catch (error) {
        console.error("Error", error);
        res.status(400).send(error.message);
    }
};

export { signup, login };
