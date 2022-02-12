import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RecipeService } from './recipe.service';
import { Prisma } from '@prisma/client';
import { GetCurrentUserId, Public } from '../common/decorators';
import { UseGuards } from '@nestjs/common';
import { AtGuard } from '../common/guards';
import { CreateRecipeInput, UpdateRecipeInput } from "../graphql";

@Resolver('Recipe')
export class RecipeResolver {
  constructor(private readonly recipeService: RecipeService) {}

  @Public()
  @Query('recipes')
  findAll() {
    return this.recipeService.findAll();
  }

  @Public()
  @Query('recipe')
  findOne(@Args('id') id: number) {
    return this.recipeService.findOne(id);
  }

  @UseGuards(AtGuard)
  @Mutation('createRecipe')
  create(
    @GetCurrentUserId() userId: number,
    @Args('createRecipeInput') createRecipeInput: CreateRecipeInput,
  ) {
    return this.recipeService.create(userId, createRecipeInput);
  }

  @UseGuards(AtGuard)
  @Mutation('updateRecipe')
  update(
    @GetCurrentUserId() userId: number,
    @Args('updateRecipeInput') updateRecipeInput: UpdateRecipeInput,
  ) {
    return this.recipeService.update(updateRecipeInput);
  }

  @UseGuards(AtGuard)
  @Mutation('removeRecipe')
  remove(@GetCurrentUserId() userId: number, @Args('id') id: number) {
    return this.recipeService.remove(id);
  }
}
