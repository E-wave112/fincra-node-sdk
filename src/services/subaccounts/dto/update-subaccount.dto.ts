import { CreateSubAccountDto } from "./";

export interface UpdateSubAccountDto extends Omit<CreateSubAccountDto, "businessId" | "country" > {
    business: string;
    subAccountId: string;
}