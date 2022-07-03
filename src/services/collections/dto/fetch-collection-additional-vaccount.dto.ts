import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class FetchCollectionVirtualAccountDto {
  @IsOptional()
  @IsString()
  business?: string;

  @IsNotEmpty()
  @IsString()
  reference: string;
}
