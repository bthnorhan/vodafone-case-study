import { testData } from '../../app/constants';
import { getData } from '../../app/utils';

describe('getData', () => {
	it('functionality', () => {
		const testValue = getData(testData, 140);
		expect(testValue.camp).toBe('Omaka');
	});
});
