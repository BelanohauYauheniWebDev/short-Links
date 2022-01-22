import s from "./LinksList.module.scss";

interface ILink {
	url: string;
	text: string;
}

interface ILinksList {
	links: Array<ILink> | [];
}

const LinksList = ({ links = [] }: ILinksList) => {
	return (
		<div className={s.links__content}>
			{links.map(link => (
				<a key={link.text} className={s.link} href={link.url}>
					{link.text}
				</a>
			))}
		</div>
	);
};

export default LinksList;
