import { IsNotEmpty, IsString } from 'class-validator';

export class BvnResolutionDto {
  @IsString()
  @IsNotEmpty()
  bvn: string;

  @IsString()
  @IsNotEmpty()
  business: string;
}
