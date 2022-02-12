import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  updateUser(data: Prisma.UserUpdateArgs, userId: number) {
    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data,
    });
  }

  getUser(userId: number) {
    return this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }

  deleteUser(userId: number) {
    return this.prisma.user.delete({ where: { id: userId } });
  }

  deactivate(userId: number) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { isActive: false },
    });
  }
}
