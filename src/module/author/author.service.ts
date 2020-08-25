import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AuthorModel } from './models/author.model';
import { BaseService } from '../../common/services';
import { AuthorInput } from './input/author.input';

@Injectable()
export class AuthorService extends BaseService {
  constructor(
    @InjectRepository(AuthorModel) private readonly authRepository: Repository<AuthorModel>,
  ) {
    super(authRepository);
  }

  async getAuthors(): Promise<AuthorModel[]> {
    return await this.findAll({ where: {} });
  }

  async createAuthor({ name }: AuthorInput): Promise<AuthorModel> {
    return await this.save({ name });
  }

  async getAuthor(id: number): Promise<AuthorModel> {
    const res = await this.findOne({ where: { id } });
    if (!res) {
      throw new NotFoundException('Автор не найден');
    }
    return res;
  }

}