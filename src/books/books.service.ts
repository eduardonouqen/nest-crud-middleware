import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateBookDto } from './dto/update-book.dto';
import { Books } from './schemas/book.schema';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Books.name) private BooksModel: Model<Books>) {}

  async create(createCatDto: CreateBookDto): Promise<Books> {
    const createdCat = new this.BooksModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Books[]> {
    return this.BooksModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  async update(id: string, updateBookDto: UpdateBookDto): Promise<Books> {
    return this.BooksModel.findByIdAndUpdate(id, updateBookDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Books> {
    return this.BooksModel.findByIdAndDelete(id).exec();
  }
}
