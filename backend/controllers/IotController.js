import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

// let lastHouse = Math.random.choice(Houses)

// const nomDeFonction (req, res)

// res.json ([house : lastHouse])

// export nomDeFonction

const getHouse = (req, res) => {
    var Houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]
    var rand = Math.floor(Math.random() * Houses.length);
    var lastHouse = Houses[rand];
    res.json({ house : lastHouse })
}

export { getHouse }