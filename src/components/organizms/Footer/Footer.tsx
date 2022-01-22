import Button from "../../atoms/Button/Button";
import s from "./Footer.module.scss";
import { ReactComponent as Logo } from "../../../images/logo.svg";

import { footer } from "./data.js";

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={`${s.content} container`}>
				<Logo className={s.logo} />

				<div className={s.menu}>
					{footer.menu.map(menuItem => (
						<MenuGroup key={menuItem.id} {...menuItem} />
					))}
				</div>

				<div className={s.socials}>
					{footer.socials.map(({ id, url, image: Svg }) => (
						<a key={id} href={url}>
							<Svg />
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};

interface IMenuItem {
	groupTitle: string;
	links: ILink[];
}
interface ILink {
	text: string;
	url: string;
}

const MenuGroup = ({ groupTitle, links }: IMenuItem) => (
	<div className={s.menuGroup}>
		<h4>{groupTitle}</h4>
		{links.map(link => (
			<a key={link.text} href={link.url}>
				{link.text}
			</a>
		))}
	</div>
);

export default Footer;
