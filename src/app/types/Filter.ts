export type FilterType = {
	key: string;
	placeholder: string;
	canSelectAll?: boolean;
};

export type ContextFilterType = {
	[key: string]: string | number;
};
