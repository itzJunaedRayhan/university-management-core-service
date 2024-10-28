import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();
const createUser = async (data: User): Promise<User> => {
  const result = await prisma.user.create({ data });
  return result;
};

const getAllUsers = async (): Promise<User[]> => {
  const result = await prisma.user.findMany();
  return result;
};

const getSingleUser = async (id: number): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return result;
};

export const UserServices = {
  createUser,
  getAllUsers,
  getSingleUser,
};
