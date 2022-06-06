import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../ThemeProvider";
import { LanContext } from "../../LanguageProvide";
import { techStack } from "../../resources/json/icons";

export default function About() {
	const theme = useContext(ThemeContext);
	const lan = useContext(LanContext);
	const darkMode = theme.state.darkMode;
	const languague = lan.state.languague;

	return (
		<div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
			<div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-20 pb-12">
				<h2
					className={
						darkMode
							? "text-5xl font-bold px-4 md:px-0 text-center"
							: "text-5xl font-bold px-4 md:px-0 text-center text-white"
					}
				>
					{languague ? <>Acerca de mí</> : <>About Me</>}
				</h2>
				<div>
					<p
						className={
							darkMode
								? "mt-4 text-xl text-justify text-gray-500"
								: "mt-4 text-xl text-justify text-white"
						}
					>
						{languague ? (
							<>
								Tengo una gran motivación para seguir perfeccionando mis
								habilidades y formarme profesionalmente. Confío plenamente en mi
								capacidad de producir ideas interesantes y crear soluciones a
								diferentes problemas.
							</>
						) : (
							<>
								I have a great motivation to continue perfecting my skills and
								professional training. I fully trust myself ability to generate
								interesting ideas and create solutions to different problems.
							</>
						)}
					</p>
					<motion.div>
						<h4 className="mt-12 text-3xl font-semibold text-blue-500">
							{languague ? (
								<>Herramientas (Frameworks) que usó</>
							) : (
								<>Frameworks i use</>
							)}
						</h4>
					</motion.div>
					<motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-start items-center mx-auto">
						{techStack.map((el, index) => (
							<motion.div
								initial="hidden"
								whileInView={"visible"}
								variants={{
									visible: {
										y: 0,
										opacity: 1,
										transition: {
											type: "spring",
										},
									},
									hidden: { opacity: 1, y: 80 },
								}}
								className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40 hover:bg-gray-500 hover:text-white"
								key={index}
							>
								<img alt="" src={el.link} className="w-12" />
								<h4 className="text-md ml-4">{el.name}</h4>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</div>
	);
}
