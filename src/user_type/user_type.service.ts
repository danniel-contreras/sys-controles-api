import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateUserTypeInput } from './dto/create-user_type.input';
import { UpdateUserTypeInput } from './dto/update-user_type.input';
import { InjectRepository } from '@nestjs/typeorm';
import { UserType } from './entities/user_type.entity';

@Injectable()
export class UserTypeService {
  constructor(
    @InjectRepository(UserType)
    private _userType: Repository<UserType>
  ){
    
  }
  create(createUserTypeInput: CreateUserTypeInput) {
    return 'This action adds a new userType';
  }

  async findAll() {
    const result = await this._userType.find()
    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} userType`;
  }

  update(id: number, updateUserTypeInput: UpdateUserTypeInput) {
    return `This action updates a #${id} userType`;
  }

  remove(id: number) {
    return `This action removes a #${id} userType`;
  }
}
