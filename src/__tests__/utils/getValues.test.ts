import { getValues } from '../../app/utils';
import { testData } from '../../app/constants';

describe('getValues', () => {
	it('functionality', () => {
		const testValue = getValues(testData, 'lessons');
		expect(testValue).toHaveLength(3);
	});
});
