import { IsNotEmpty, IsString } from 'class-validator';

export class AcceptChargeBackDto {
  @IsString()
  @IsNotEmpty()
  chargeBackId: string;

  @IsString()
  @IsNotEmpty()
  businessId: string;
}
