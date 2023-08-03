import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import "@/styles/index.scss";

export const metadata = {
	title: "Myteam - Home",
	description: "Find the right people and build high performing teams",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
