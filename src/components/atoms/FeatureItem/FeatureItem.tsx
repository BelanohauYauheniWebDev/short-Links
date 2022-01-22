import s from "./FeatureItem.module.scss";

interface IFeatureItem {
	title: string;
	body: string;
	icon: string;
}

const FeatureItem = ({ title, body, icon }: IFeatureItem) => {
	return (
		<article className={s.item}>
			<figure>
				<img src={icon} alt={title} />
			</figure>
			<h3>{title}</h3>
			<p>{body}</p>
		</article>
	);
};

export default FeatureItem;
