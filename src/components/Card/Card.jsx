import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Card({ e }) {
	console.log(e.video);

	return (
		<div className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8 mx-3">
			<div className="text-white p-3 font-bold">
				<h1 className="mb-3">{e.name}</h1>
				<video width="320" controls className="cursor-pointer">
					<source src={e.video} />
				</video>
				<div className="mt-3 flex justify-between items-center p-3">
					<a
						href={e.git}
						className="flex flex-wrap justify-start items-center hover:text-black"
					>
						<BsGithub />
						<p className="mx-2">Ver Más...</p>
					</a>
					<a
						href={e.linkedin}
						className="flex flex-wrap justify-start items-center text-blue-400 hover:text-black"
					>
						<BsLinkedin />
						<p className="mx-2">Ver Más...</p>
					</a>
				</div>
			</div>
		</div>
	);
}
