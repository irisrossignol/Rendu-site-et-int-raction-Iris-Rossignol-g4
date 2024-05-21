import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
  try {
    const { email, pseudo, password } = req.body;

    console.log(req.body);
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashedPassword");

    const checkUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (checkUser) {
      return res.status(400).json("User already exists");
    }

    const user = await prisma.user.create({
      data: {
        email: email,
        pseudo: pseudo,
        password: hashedPassword,
      },
    });
    console.log("user created");

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}; 

const login = async (req, res) => {
    console.log("login");
    console.log(req.body);
    try {
      await prisma.user
        .findUnique({
          where: {
            email: req.body.email,
          },
        })
        .then((data) => {
        if (!data) return res.status(404).json("User not found");
        console.log(data);
        const valid = bcrypt.compare(req.body.password, data.password);

        if (!valid) return res.status(400).json("Invalid password");
        console.log('debug')
          const token = jwt.sign(
            { id: data.id, email: data.email },
          process.env.JWT_SECRET,
            {
              expiresIn: "1h",
            },
          );
          console.log(token);
          res.json({ token: token });
        })
        .catch((e) => {
          console.log(error);
          res.status(400).send(e);
        });
    } catch (error) {
       res.json(error);
    }
  };

export { signup, login };
