import { IsNotEmpty, IsString } from 'class-validator';

export class RejectChargeBackDto {
  @IsString()
  @IsNotEmpty()
  chargeBackId: string;

  @IsString()
  @IsNotEmpty()
  businessId: string;

  @IsString()
  @IsNotEmpty()
  reason: string;
}
