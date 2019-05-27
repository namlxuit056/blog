import { Module, forwardRef } from '@nestjs/common';
import { DateScalar } from '../common/scalars/date.scalar';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { UserSchema } from '../schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';

@Module({
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
