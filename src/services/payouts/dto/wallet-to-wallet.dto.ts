import { IsString, IsNotEmpty } from "class-validator";
export class WalletToWalletTransferDto {
    @IsString()
    @IsNotEmpty()
    amount: string;
    @IsString()
    @IsNotEmpty()
    beneficiaryWalletNumber: string;
    @IsString()
    @IsNotEmpty()
    business: string;
    @IsString()
    @IsNotEmpty()
    customerReference: string;
    @IsString()
    @IsNotEmpty()
    description: string;
}
