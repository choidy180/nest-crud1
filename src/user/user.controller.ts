import { Controller, Get, Param } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService){}

  @Get('list')
  getAllusers(): Promise<User []>{
    return this.userService.getAllusers();
  }

  @Get(':userId')
  async findUser(@Param('userId') id:string): Promise<User>{
    const findUser = await this.userService.findUser(id);
    if(findUser){
      return Object.assign({
        data: findUser,
        statusCode: 200,
        statusMsg: `데이터 조회가 성공적으로 완료되었습니다.`,
      });
    } else {
      return Object.assign({
        data: "Data does not exist.",
        statusCode: 500,
        statusMsg: `데이터가 존재하지 않습니다.`,
      });
    }
  }
}
