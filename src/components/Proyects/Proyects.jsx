import { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider";
import { LanContext } from "../../LanguageProvide";
import Card from "../Card/Card";
import humble from "../../resources/video/HumbleFood.mp4";
import country from "../../resources/video/Country.mp4";

export default function Proyects() {
	const theme = useContext(ThemeContext);
	const lan = useContext(LanContext);
	const darkMode = theme.state.darkMode;
	const languague = lan.state.languague;

	const proyect = [
		{
			video: humble,
			name: languague
				? "Proyecto Final - Humble Food"
				: "Final Project - Humble Food",
			git: "https://github.com/Hugo-Morales/HumbleFood-Front-End",
			linkedin:
				"https://www.linkedin.com/posts/hugo-mauricio-morales_henry-typescript-prisma-activity-6915048457778909185-HLvx?utm_source=linkedin_share&utm_medium=member_desktop_web",
		},
		{
			video: country,
			name: languague
				? "Proyecto Individual - Countries"
				: "Single Project - Countries",
			git: "https://github.com/Hugo-Morales/PI--Country",
			linkedin:
				"https://www.linkedin.com/posts/hugo-mauricio-morales_postgresql-javascript-postgresql-activity-6900068624451915776-n1Cf?utm_source=linkedin_share&utm_medium=member_desktop_web",
		},
	];

	return (
		<div
			id="projects"
			className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
		>
			<div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
				<h2 className="text-5xl font-bold px-4 md:px-0 text-center">
					{languague ? <>Mis Proyectos</> : <>Proyects</>}
				</h2>
				<div className="mt-8 flex justify-start items-center flex-wrap">
					{proyect?.map((e, index) => (
						<Card key={index} e={e} />
					))}
				</div>
			</div>
		</div>
	);
}
