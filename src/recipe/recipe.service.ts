import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRecipeInput, UpdateRecipeInput } from '../graphql';
import { Prisma } from '@prisma/client';

@Injectable()
export class RecipeService {
  constructor(private prisma: PrismaService) {}

  create(userId: number, data: Prisma.RecipeCreateInput) {
    return this.prisma.recipe.create({
      data: { ...data, author: { connect: { id: userId } } },
    });
  }

  findAll() {
    return this.prisma.recipe.findMany({ include: { author: true } });
  }

  findOne(id: number) {
    return this.prisma.recipe.findUnique({
      where: { id },
      include: { author: true },
    });
  }

  update(updateRecipeInput: UpdateRecipeInput) {
    const { id, ...data } = updateRecipeInput;
    return this.prisma.recipe.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.recipe.delete({ where: { id } });
  }
}
