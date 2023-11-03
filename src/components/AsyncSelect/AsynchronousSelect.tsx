import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import { PersonAge, getPersonAges } from "../../data/staticData";
import { SingleValue } from "react-select";
/**
 *
 * defaultOptions without any values will render all data initially
 * cacheOptions without any values will store the searched data in the cache
 * loadOptions will get a function as a prop that will asynchronously return options for the select component
 */
export const AsynchronousSelect = () => {
	const [value, setValue] = useState<SingleValue<PersonAge>>();

	return (
		<div className="flex justify-center">
			<div className="w-1/4">
				<div className="mb-4 font-bold">{JSON.stringify(value)}</div>
				<AsyncSelect
					value={value}
					onChange={e => setValue(e)}
					defaultOptions
					cacheOptions
					loadOptions={getPersonAges}
				/>
			</div>
		</div>
	);
};
