import { IsString, IsOptional } from 'class-validator';

export class FetchCollectionVirtualAccountDto {
  @IsOptional()
  @IsString()
  business?: string;

  @IsOptional()
  @IsString()
  reference?: string;
}
