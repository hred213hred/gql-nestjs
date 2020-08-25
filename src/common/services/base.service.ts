import { Repository } from 'typeorm';

interface IFind {
  where?: any;
  select?: string[];
  relations?: string[]
}

export class BaseService {
  constructor(private readonly model: Repository<any>) {
  }

  public async findAll({ where, select, relations }: IFind) {
    try {
      return this.model.find({ where, select, relations });
    } catch (e) {
      console.log('Ошибка:', e.message);
    }
  }

  public async save(data: any) {
    try {
      return this.model.save(data);
    } catch (e) {
      console.log('Ошибка:', e.message);
    }
  }


  public async findOne({ where, select, relations }: IFind) {
    try {
      return this.model.findOne({ where, select ,relations});
    } catch (e) {
      console.log('Ошибка:', e.message);
    }
  }


}
