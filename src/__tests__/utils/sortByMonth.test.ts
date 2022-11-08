import { sortByMonth } from '../../app/utils';
import { testData } from '../../app/constants';

describe('sortByMonth', () => {
	it('functionality', () => {
		const testValue = sortByMonth(testData);
		expect(testValue).toHaveLength(3);
		expect(testValue[0].month).toBe('Feb');
	});
});
