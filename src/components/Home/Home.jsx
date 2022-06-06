import { useContext } from "react";
import { contactLinks } from "../../resources/json/data";
import { ThemeContext } from "../../ThemeProvider";
import { LanContext } from "../../LanguageProvide";
import user from "../../resources/img/20210825_194939.jpg";

export default function Home() {
	const theme = useContext(ThemeContext);
	const lang = useContext(LanContext);
	const darkMode = theme.state.darkMode;
	const languague = lang.state.languague;

	return (
		<>
			<main
				className="relative mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
				id="/"
			>
				<div className="sm:text-center lg:text-left">
					<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl animate-conecta">
						<span
							className={darkMode ? "block text-black" : "block text-black"}
						>
							{languague ? (
								<>Hola Soy Hugo Morales</>
							) : (
								<>Hi, I'm Hugo Morales</>
							)}
						</span>
						<span className="block text-blue-500 z-0 lg:inline">
							Full Stack Developer
						</span>
					</h1>
					<p
						className={
							darkMode
								? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-hidden"
								: "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-hidden"
						}
					>
						{languague ? <>Soy </> : <>I am a </>}Front-End / Full-Stack
						Developer.
					</p>
					<div className="flex md:justify-start ">
						{contactLinks.map((el, index) => (
							<a
								key={index}
								href={el.link}
								className="mr-5 cursor-pointer mt-8 hover:scale-125"
							>
								<img alt="" src={el.url} className="w-10" />
							</a>
						))}
					</div>
					<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
						<div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
							<a
								href="../../resources/Hugo Morales.pdf"
								className="w-full flex items-center justify-center px-7 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500"
								download="Hugo Morales CV.pdf"
							>
								{languague ? <>Descargar CV</> : <> Download CV </>}
							</a>
						</div>
					</div>
					<div className="absolute right-24 top-1/4">
						<img
							src={user}
							alt="name"
							className="rounded-full w-64 hover:grayscale-0 grayscale duration-1000"
						/>
					</div>
				</div>
			</main>
			<hr />
		</>
	);
}
