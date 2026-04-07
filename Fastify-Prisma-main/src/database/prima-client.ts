import {
    PrismaClient} from "@prisma/client";


// O código do database será referencado via const prisma
export const prisma = new PrismaClient();