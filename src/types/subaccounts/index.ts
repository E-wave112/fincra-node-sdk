export interface CreateSubAccountDto {
  businessId: string;

  name?: string;

  email?: string;

  mobile?: string;

  country?: string;
}

export interface FetchSubAccountDto {
  businessId: string;

  subAccountId: string;
}

export interface UpdateSubAccountDto
  extends Omit<CreateSubAccountDto, 'businessId' | 'country'> {
  business: string;
  subAccountId: string;
}
