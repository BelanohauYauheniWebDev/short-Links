import s from "./Features.module.scss";

import { features } from "./data";
import FeatureItem from "../../atoms/FeatureItem/FeatureItem";

const Features = () => {
	return (
		<section className={s.features}>
			<div className="container">
				<h2 className={s.title}>{features.title}</h2>
				<p className={s.description}>{features.description}</p>

				<div className={s.items}>
					{features.items.map(item => (
						<FeatureItem key={item.id} {...item} />
					))}
				</div>
			</div>
		</section>
	);
};
export default Features;
