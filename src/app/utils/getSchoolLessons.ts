import { DataType } from '../types';

export const getSchoolLessons = (data: DataType[], school: string) => {
	return data.filter(data => data.school === school).map(fData => fData.lessons);
};
