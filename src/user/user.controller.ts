import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common";
import { UserService } from './user.service';
import { GetCurrentUserId } from '../common/decorators';
import { Prisma } from "@prisma/client";

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Put()
  updateUser(
    @Body() data: Prisma.UserUpdateArgs,
    @GetCurrentUserId() userId: number,
  ) {
    return this.userService.updateUser(data, userId);
  }

  @Get()
  getCurrentUser(@GetCurrentUserId() userId: number) {
    return this.userService.getUser(userId);
  }

  @Delete()
  deleteUser(@GetCurrentUserId() userId: number) {
    return this.userService.deleteUser(userId);
  }

  @Put('deactivate')
  deactivate(@GetCurrentUserId() userId: number) {
    return this.userService.deactivate(userId);
  }
}
