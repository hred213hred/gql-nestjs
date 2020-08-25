require('../../utils/config');
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

//MODULES
import { AuthorModule } from '../author';
import { BookModule } from '../book';

const { DB_TYPE, DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME, NODE_ENV }: any = process.env;

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: DB_TYPE,
        host: DB_HOST,
        port: parseInt(DB_PORT),
        username: DB_USER,
        password: DB_PASS,
        database: DB_NAME,
        synchronize: true,
        autoLoadEntities: true,
        logging: NODE_ENV !== 'production',
        keepConnectionAlive: true,
      }),
    }),
    GraphQLModule.forRootAsync({
      useFactory: () => ({
        installSubscriptionHandlers: true,
        autoSchemaFile: true,
      }),
    }),
    AuthorModule,
    BookModule,
  ],
})

export class AppModule {
}
