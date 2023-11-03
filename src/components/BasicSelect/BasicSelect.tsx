import React, { useState } from "react";
import Select, { ActionMeta, SingleValue } from "react-select";
import { personAges } from "../../data/staticData";
import type { PersonAge } from "../../data/staticData";

export const BasicSelect = () => {
	const [value, setValue] = useState<SingleValue<PersonAge>>();

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
