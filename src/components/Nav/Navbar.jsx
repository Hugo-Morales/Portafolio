import { useContext, useState } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../../ThemeProvider";
import { LanContext } from "../../LanguageProvide";
import { motion, AnimatePresence } from "framer-motion";
import en from "../../resources/img/reino-unido.png";
import es from "../../resources/img/espana.png";

export default function Navbar() {
	const [toggle, setToggle] = useState(false);
	const theme = useContext(ThemeContext);
	const lan = useContext(LanContext);
	const darkMode = theme.state.darkMode;
	const languague = lan.state.languague;

	const links = [
		{
			name: languague ? "Inicio" : "Home",
			route: "/",
		},
		{
			name: languague ? "Acerca de mí" : "About",
			route: "about",
		},
		{
			name: languague ? "Mis Proyectos" : "Projects",
			route: "projects",
		},
	];

	function toggleIcon(valor) {
		switch (valor) {
			case 1:
				if (darkMode === true) {
					theme.dispatch({ type: "LIGHTMODE" });
				} else {
					theme.dispatch({ type: "DARKMODE" });
				}
				break;
			case 2:
				if (languague === true) {
					lan.dispatch({ type: "ES" });
				} else {
					lan.dispatch({ type: "EN" });
				}
				break;
			default:
				break;
		}
	}

	return (
		<>
			<nav
				className={
					darkMode
						? "bg-white border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-full top-0"
						: "bg-gray-700 border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-full top-0"
				}
			>
				<div className="flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto">
					<div className="flex items-center cursor-pointer">
						<a
							href="/"
							className={
								darkMode
									? "text-xl font-medium text-decoration-none whitespace-nowrap text-black"
									: "text-xl font-medium text-decoration-none whitespace-nowrap text-white"
							}
						>
							Portafolio
						</a>
					</div>
					<div className="hidden justify-between items-center w-full md:flex md:w-auto ">
						<ul
							className={
								"flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium"
							}
						>
							{links.map((el, index) => (
								<li className="cursor-pointer" key={index}>
									<Link
										to={el.route}
										activeClass={"text-white bg-blue-500"}
										spy={true}
										smooth={true}
										className={
											darkMode
												? "block py-2 px-1 text-black hover:bg-blue-500 hover:text-white rounded-md"
												: "block py-2 px-1 text-white hover:bg-blue-500 hover:text-black rounded-md"
										}
									>
										{el.name}
									</Link>
								</li>
							))}
						</ul>
						<>
							{darkMode ? (
								<img
									src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
									className="w-6 ml-6 cursor-pointer hover:scale-1.50 block"
									alt="sun"
									onClick={() => toggleIcon(1)}
								/>
							) : (
								<img
									src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
									className="w-6 ml-6 cursor-pointer hover:scale-1.50 block"
									alt="moon"
									onClick={() => toggleIcon(1)}
								/>
							)}
						</>
						<>
							{languague ? (
								<img
									src={en}
									alt="en"
									className="w-6 ml-6 cursor-pointer hover:scale-1.50 block"
									onClick={() => toggleIcon(2)}
								/>
							) : (
								<img
									src={es}
									alt="en"
									className="w-6 ml-6 cursor-pointer hover:scale-1.50 block"
									onClick={() => toggleIcon(2)}
								/>
							)}
						</>
					</div>
				</div>
			</nav>
			<AnimatePresence>
				{toggle && (
					<motion.div
						initial={{ x: 100 }}
						animate={{ x: 0, transition: { type: "spring" } }}
						exit={{ x: 200, transition: { type: "spring" } }}
						className={
							darkMode
								? "bg-white py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
								: "bg-black py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
						}
					>
						<ul class="md:hidden md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
							{links.map((el) => (
								<Link
									to={el.route}
									activeClass={"text-white bg-blue-500"}
									className={
										darkMode
											? "hover:bg-blue-500 text-black block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
											: "hover:bg-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
									}
									spy={true}
									smooth={true}
									onClick={() => setToggle(false)}
								>
									<li>{el.name}</li>
								</Link>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
