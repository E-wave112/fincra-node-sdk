import { IsString, IsNotEmpty } from "class-validator";

export class FetchSubAccountDto {
    @IsString()
    @IsNotEmpty()
    businessId: string;

    @IsString()
    @IsNotEmpty()
    subAccountId: string;
}