import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create an user' })
  @ApiCreatedResponse({
    description: 'User created successfully',
    type: UserDto,
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'User created successfully',
    type: UserDto,
    isArray: true,
  })
  @ApiOperation({ summary: 'Get all users' })
  findAll(@Query('offset') offset: number, @Query('limit') limit: number) {
    return this.usersService.findAll(offset, limit);
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'User created successfully',
    type: UserDto,
  })
  @ApiOperation({ summary: 'Get user details' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'User created successfully',
    type: UserDto,
  })
  @ApiOperation({ summary: 'Update user details' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'User deleted successfully',
  })
  @ApiOperation({ summary: 'Delete an user' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
