import { IsNotEmpty } from 'class-validator';

export type SortOrder = -1 | 1 | 'asc' | 'ascending' | 'desc' | 'descending';
export type Sort = string | { [key: string]: SortOrder | { $meta: 'textScore' } } | undefined | null

export default class PagingDto {
  @IsNotEmpty()
  page: number;

  limit = 10;

  sort: Sort;

  constructor(query: any) {
    this.page = query?.page;
    this.limit = query?.limit || 10;
  }

  getSkip() {
    return (this.page - 1) * this.limit;
  }
}
