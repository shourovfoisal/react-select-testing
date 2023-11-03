import { useForm, useWatch, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Select, { ActionMeta, SingleValue } from "react-select";
import { personAges } from "../../data/staticData";
import type { PersonAge } from "../../data/staticData";

type FormValues = {
	personAge: PersonAge;
};

export const HookFormSelect = () => {
	const { control, getValues } = useForm<FormValues>();
	const { personAge } = useWatch<FormValues>({ control });
	const handleChange = (
		value: SingleValue<PersonAge>,
		actionMeta: ActionMeta<PersonAge>
	) => {
		console.log(value);
		console.log(actionMeta);
	};

	return (
		<div className="flex justify-center">
			<div className="w-1/4">
				{/* getValues() doesn't show the real-time values, while useWatch does. */}
				{/* <div className="mb-4 font-bold">
					{JSON.stringify(getValues("personAge"))}
				</div> */}
				<div className="mb-4 font-bold">{JSON.stringify(personAge)}</div>
				<Controller
					control={control}
					name="personAge"
					render={({ field, fieldState, formState }) => {
						return (
							<Select
								{...field}
								onChange={(
									value: SingleValue<PersonAge>,
									actionMeta: ActionMeta<PersonAge>
								) => {
									handleChange(value, actionMeta);
									field.onChange(value, actionMeta);
								}}
								value={personAges?.find(
									personAge => personAge?.value === field?.value?.value
								)}
								options={personAges}
								isClearable
							/>
						);
					}}
				/>
				<DevTool control={control} placement="bottom-right" />
			</div>
		</div>
	);
};
