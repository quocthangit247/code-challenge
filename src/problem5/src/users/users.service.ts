import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(_createUserDto: CreateUserDto): Promise<UserDto> {
    const newUser = new User();
    newUser.email = _createUserDto.email;
    newUser.name = _createUserDto.name;
    newUser.password = _createUserDto.password;
    const res = await this.usersRepository.save(newUser);
    return plainToClass(UserDto, res);
  }

  async findAll(_offset: number, _limit: number): Promise<UserDto[]> {
    const foundUsers = await this.usersRepository.find({
      skip: _offset,
      take: _limit,
    });
    return foundUsers.map((user) => plainToClass(UserDto, user));
  }

  async findOne(id: number): Promise<UserDto> {
    const foundUser = await this.usersRepository.findOneBy({ id });
    if (!foundUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return plainToClass(UserDto, foundUser);
  }

  async update(id: number, _updateUserDto: UpdateUserDto): Promise<UserDto> {
    const foundUser = await this.usersRepository.findOneBy({ id });
    if (!foundUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    if (_updateUserDto.email) {
      foundUser.email = _updateUserDto.email;
    }

    if (_updateUserDto.name) {
      foundUser.name = _updateUserDto.name;
    }

    const res = await this.usersRepository.save(foundUser);
    return plainToClass(UserDto, res);
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
  }
}
