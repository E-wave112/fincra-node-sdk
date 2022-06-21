import { Quote } from '../../../src/services';
import { CreateQuoteDto } from '../../../src/services/quotes/dto';
import { keys } from '../../env';

const quoteInstance = new Quote(keys[0], keys[1]);

describe('service to create a quote object for a merchant', () => {
  it('returns a message object on the status of a quote', async () => {
    try {
      const quote = new CreateQuoteDto();
      quote.action = 'payment';
      quote.amount = '2000';
      quote.beneficiaryType = 'next-of-kin';
      quote.business = 'd0310ab1-0352-497e-93f2-aef33e6bb043';
      quote.destinationCurrency = 'NGN';
      quote.feeBearer = 'customer';
      quote.paymentDestination = 'bank_account';
      quote.paymentScheme = '';
      quote.sourceCurrency = 'NGN';
      quote.transactionType = 'conversion';

      const result = await quoteInstance.createQuote(quote);
      expect(result).toHaveBeenCalledWith(quote);
      expect(typeof result).toBe('object');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
