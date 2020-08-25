import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../app';
import { CreateBookInterface } from './interface/create-book.interface';
import {MainService} from '../../common/services'

describe('Book e2e', () => {
  let app: INestApplication;
  let req;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,

      ],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
    req = request(app.getHttpServer());
  });
  it('getBookWithAuthor', () => {
    const query = `{
       books{
          name,id
          author{
            name,id
          }
        }
      }`;
    return req
      .post('/graphql')
      .send({ query })
      .expect(200);
  });
  it('getBookWithoutAuthor', () => {
    const query = `{
       books{
          name,id
        }
      }`;
    return req
      .post('/graphql')
      .send({ query })
      .expect(200);
  });


  it('createBook', () => {
    const data: CreateBookInterface = {
      name: 'Интересная книга',
      pageCount: 200,
      author: 'Тестовый автор',
    };
    const query = `
        mutation {
          createBook(data: ${MainService.createValidObjectToTest(data)}) {
           name,pageCount
          }
        }`;
    return req
      .post('/graphql')
      .send({ query })
      .expect(({ body }) => {
        const data = body.data.createBook;
        expect(data.name).toBe(data.name);
        expect(data.pageCount).toBe(data.pageCount);
      })
      .expect(200);
  });


});