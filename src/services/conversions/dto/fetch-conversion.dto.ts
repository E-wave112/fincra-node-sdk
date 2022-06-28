import { IsString, IsOptional, IsNotEmpty } from "class-validator";

export class FetchConversionDto {
    @IsString()
    @IsNotEmpty()
    conversionId: string;

    @IsOptional()
    @IsString()
    business: string;

}