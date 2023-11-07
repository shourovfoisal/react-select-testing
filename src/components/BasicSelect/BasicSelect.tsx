import React, { useState, useEffect } from "react";
import Select, { ActionMeta, SingleValue } from "react-select";
import { personAges } from "../../data/staticData";
import type { PersonAge } from "../../data/staticData";
import { Button } from "../common";

export const BasicSelect = () => {
	const [value, setValue] = useState<SingleValue<PersonAge>>();

	useEffect(() => {
		console.log(value);
	}, [value]);

	const handleChange = (
		value: SingleValue<PersonAge>,
		actionMeta: ActionMeta<PersonAge>
	) => {
		setValue(value);
		console.log(value);
		console.log(actionMeta);
	};

	return (
		<div className="flex justify-center">
			<div className="w-1/4">
				<div className="mb-4 font-bold">{JSON.stringify(value)}</div>
				<Button
					onClick={() => setValue(undefined)}
					className="p-2 bg-purple-200 rounded-lg shadow-md ml-auto mb-4"
				>
					Clear Selection
				</Button>
				<Select
					value={value}
					onChange={handleChange}
					options={personAges}
					isClearable
				/>
			</div>
		</div>
	);
};
