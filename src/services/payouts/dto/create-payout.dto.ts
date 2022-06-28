import { IsString,IsNotEmpty, IsOptional, IsObject, ValidateNested } from "class-validator";
import { PayoutBeneficiaryDto } from "./sub-dto";
export class CreatePayoutDto {
    @IsNotEmpty()
    @IsString()
    sourceCurrency: string;

    @IsNotEmpty()
    @IsString()
    destinationCurrency: string;

    @IsNotEmpty()
    @IsString()
    amount: string;

    @IsNotEmpty()
    @IsString()
    business: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    customerReference?: string;

    @IsOptional()
    @IsObject()
    @ValidateNested()
    beneficiary?: PayoutBeneficiaryDto

    @IsOptional()
    @IsString()
    paymentDestination?: string;

    @IsOptional()
    @IsString()
    paymentScheme ?: string;

    @IsOptional()
    @IsString()
    quoteReference?: string;
    
}
