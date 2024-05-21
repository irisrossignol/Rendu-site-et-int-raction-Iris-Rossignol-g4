import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getUser = async (req, res) => {
  try {
    const id = req.user.id;

    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



const drawCard = async (req, res) => {
  try {
    const user = req.user.id;
    const token = req.headers["x-access-token"];

    if (!token) {
      return res.status(401).json({ error: "No token provided" });
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
      console.log("debug lastDraw", lastDraw);
      const lastDrawTime = new Date(lastDraw.lastDraw).getTime();
      const currentTime = new Date().getTime();

      const timeDifference = currentTime - lastDrawTime;
      const timeDifferenceInHours = timeDifference / (1000 * 3600);
      console.log("debug lastDraw", lastDraw);
      if (timeDifferenceInHours < 24) {
        return res
          .status(403)
          .send("Pas de tirage");
      }
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
    res.json("Cartes ajoutées avec succès");
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
      return res.status(401).json({ error: "No token provided" });
    }

    const cards = await prisma.userCard.findMany({
      where: {
        userId: user,
      },
    });
    res.send(cards);
  } catch (error) {
    console.log(error);
    res.status(401).send(error);
  }
};

export { getUser, drawCard, getCards };
