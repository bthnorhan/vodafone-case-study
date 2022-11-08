import { DataType } from './';
import { ContextFilterType } from './Filter';

export type ContextType = {
	data?: Array<DataType>;
	updateFilter?: (filter: ContextFilterType) => void;
	blackListSchools?: Array<string>;
	toggleBlackList?: (school: string) => void;
	getFilteredData?: () => Array<DataType>;
	filter?: ContextFilterType;
	getTotalLessons?: () => number;
	findById?: (id: string) => DataType | undefined;
};
