import { ApiHideProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class UserDto {
  id: number;
  name: string;
  email: string;

  @Exclude()
  @ApiHideProperty()
  password: string;
}
