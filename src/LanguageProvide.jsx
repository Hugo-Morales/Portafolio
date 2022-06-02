import { createContext, useReducer } from "react";

export const LanContext = createContext(null);
const initialState = { languague: true };

const lanReducer = (state, { type }) => {
	switch (type) {
		case "ES":
			return { languague: false };
		case "EN":
			return { languague: true };
		default:
			return state;
	}
};

export function LanguagueProvider(props) {
	const [state, dispatch] = useReducer(lanReducer, initialState);

	return (
		<LanContext.Provider value={{ state: false || state, dispatch: dispatch }}>
			{props.children}
		</LanContext.Provider>
	);
}
