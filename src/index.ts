import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Same as importing mongoose and conneting to it .

async function insertUser(username: string , password: string , firstname:string, lastname:string)
{
    const res = await prisma.user.create({
        data : {
            email : username,
            password,
            firstname,
            lastname
        }
    })
    console.log(res);
}

insertUser("Krutik@gmail.com","duq3","krutik","dweafds");