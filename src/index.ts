import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


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

insertUser("Krutik1@gmail.com","duq3","krutik","dweafds");


interface Updateparams {
    firstname : string,
    lastname: string
}

async function updateUser(username: string, { firstname, lastname }: Updateparams) {
    try {
        const res = await prisma.user.update({
            where: { email: username },
            data: { firstname, lastname }
        });
        console.log('User updated:', res);
    } catch (er) {
        console.log(er);
    }
}

updateUser("Krutik@gmail.com" , {
    firstname : "Kat",
    lastname : "Kardashaina"
})