export type PersonAge = {
	label: string;
	value: number;
	ageGroup: string;
};

export const personAges: PersonAge[] = [
	{
		label: "Shourov",
		value: 30,
		ageGroup: "Adult",
	},
	{
		label: "Foisal",
		value: 25,
		ageGroup: "Adult",
	},
	{
		label: "Alex",
		value: 10,
		ageGroup: "Child",
	},
	{
		label: "Adam",
		value: 12,
		ageGroup: "Child",
	},
	{
		label: "Adrian",
		value: 5,
		ageGroup: "Child",
	},
	{
		label: "Bob",
		value: 15,
		ageGroup: "Child",
	},
	{
		label: "Ben",
		value: 16,
		ageGroup: "Child",
	},
	{
		label: "Billy",
		value: 24,
		ageGroup: "Adult",
	},
	{
		label: "Julia",
		value: 32,
		ageGroup: "Adult",
	},
	{
		label: "Tim",
		value: 11,
		ageGroup: "Child",
	},
];

const searchAges = (inputValue: string) => {
	return personAges.filter(personAge =>
		personAge.label.toLowerCase().includes(inputValue.toLowerCase())
	);
};

export const getPersonAges = (inputValue: string): Promise<PersonAge[]> => {
	return new Promise<PersonAge[]>(resolve => {
		setTimeout(() => {
			resolve(searchAges(inputValue));
		}, 1000);
	});
};
