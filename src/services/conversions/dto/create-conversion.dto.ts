import {
    IsString,
  } from 'class-validator';

export class CreateConversionDto {
    @IsString()
    business: string;

    @IsString()
    quoteReference: string;
}