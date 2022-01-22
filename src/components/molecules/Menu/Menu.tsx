import Button from "../../atoms/Button/Button";
import LinksList from "../../atoms/LinksList/LinksList";
import s from "./Menu.module.scss";

interface IMenu {
	handleSignUp: () => void;
	handleLogin: () => void;
}

const Menu = ({ handleSignUp, handleLogin }: IMenu) => {
	const links = [
		{
			url: "#",
			text: "Features",
		},
		{
			url: "#",
			text: "Prices",
		},
		{
			url: "#",
			text: "Resources",
		},
	];
	return (
		<div className={s.menu__container}>
			<LinksList links={links} />
			<div className={s.btn__group}>
				<Button onClick={handleLogin} variant="link">
					Login
				</Button>
				<Button onClick={handleSignUp}>Sign Up</Button>
			</div>
		</div>
	);
};

export default Menu;
