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
};

const drawCard = async (req, res) => {
    try {
      const user = req.user.id;
      const token = req.headers["x-access-token"];
  
      if (!token) {
        res.status(401).json({ error: "No token provided" });
      }
  
      const lastDraw = await prisma.user.findFirst({
        where: {
          id: user,
        },
        select: {
          lastDraw: true,
        },
      });
  
      if (lastDraw) {
        // Si lastDraw date de ya moins de 24h, l'utilisateur ne peut pas tirer de nouvelles cartes, last draw est défini sous cette forme : 2021-09-01T14:00:00.000Z
  
        console.log("debug lastDraw", lastDraw);
        const lastDrawTime = new Date(lastDraw.lastDraw).getTime();
        const currentTime = new Date().getTime();
  
        const timeDifference = currentTime - lastDrawTime;
        const timeDifferenceInHours = timeDifference / (1000 * 3600);
        console.log("debug lastDraw", lastDraw);
        if (timeDifferenceInHours < 24) {
          return res
            .status(403)
            .send("Vous ne pouvez pas tirer de nouvelles cartes pour le moment");
        }
        // Si lastDrawTime n'est pas défini, c'est la première fois que l'utilisateur tire des cartes
        await prisma.user.update({
          where: {
            id: user,
          },
          data: {
            lastDraw: new Date(),
          },
        });
      }
  
      const card = req.body.characters;
  
      for (let i = 0; i < card.length; i++) {
        await prisma.userCard.create({
          data: {
            userId: user,
            cardId: card[i].slug,
            namecard: card[i].name,
            house: card[i].house,
            image: card[i].image,
          },
        });
      }
      res.send("Cartes ajoutées avec succès");
    } catch (error) {
      console.log(error);
      res.status.send(error);
    }
  };
  
  const getCards = async (req, res) => {
    try {
      const user = req.user.id;
      const token = req.headers["x-access-token"];
  
      if (!token) {
        res.status(401).json({ error: "No token provided" });
      }
  
      const cards = await prisma.userCard.findMany({
        where: {
          userId: user,
        },
      });
  
      console.log(cards);
      res.send(cards);
    } catch (error) {
      console.log(error);
      res.status(401).send(error);
    }
  };
  
  export { getUser, drawCard, getCards };