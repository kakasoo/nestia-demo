import { PrimaryGeneratedColumn } from 'typeorm';
import { TimeColumns } from './time-columns';

export class CommonCloumns extends TimeColumns {
  @PrimaryGeneratedColumn()
  public readonly id!: number;
}
