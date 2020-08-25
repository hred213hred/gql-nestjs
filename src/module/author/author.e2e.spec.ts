import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../app';
import { MainService } from '../../common/services';

describe('Author e2e', () => {
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

  it('createAuthor', () => {
    const data = {
      name: 'Новый автор',
    };

    const query = `
        mutation {
          createAuthor(data: ${MainService.createValidObjectToTest(data)}) {
           name
          }
        }`;

    return req
      .post('/graphql')
      .send({ query })
      .expect(({ body }) => {
        const data = body.data.createAuthor;
        expect(data.name).toBe(data.name);
      })
      .expect(200);
  });


});