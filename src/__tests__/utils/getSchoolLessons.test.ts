import { getSchoolLessons } from '../../app/utils';
import { testData } from '../../app/constants';

describe('getSchoolLesson', () => {
	it('functionality', () => {
		const testValue = getSchoolLessons(testData, 'Kakuma Secondary');
		expect(testValue).toHaveLength(2);
	});
});
