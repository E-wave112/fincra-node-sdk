import { IsNotEmpty, IsString, IsOptional, IsEmail, IsMobilePhone, IsObject, ValidateNested } from 'class-validator';
import { AddressDto, BankDto } from './sub-dto';

export class CreateBeneficiaryDto {

    @IsNotEmpty()
    @IsString()
    businessId: string;

    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsOptional()
    @IsString()
    lastName?: string;

    @IsOptional()
    @IsString()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsMobilePhone('en-NG', { message: 'Phone number is not valid' })
    @IsString()
    phoneNumber?: string;

    @IsNotEmpty()
    @IsString()
    accountHolderName: string;

    @IsOptional()
    @IsObject()
    @ValidateNested()
    bank?: BankDto;

    @IsOptional()
    @IsObject()
    @ValidateNested()
    address?: AddressDto;

    @IsNotEmpty()
    @IsString()
    type: string;

    @IsNotEmpty()
    @IsString()
    currency: string;


    @IsNotEmpty()
    @IsString()
    paymentDestination: string;


    @IsNotEmpty()
    @IsString()
    destinationAddress: string;

    @IsOptional()
    @IsString()
    uniqueIdentifier?: string;


}