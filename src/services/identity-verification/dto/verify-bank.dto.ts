import { IsNotEmpty, IsString } from 'class-validator';

export class VerifyBankAccountDto {
    @IsString()
    @IsNotEmpty()
    accountNumber: string;

    @IsString()
    @IsNotEmpty()
    bankCode: string;
}