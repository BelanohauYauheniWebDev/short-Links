import s from "./Hero.module.scss";

import hero from "../../../images/illustration-working.svg";
import Button from "../../atoms/Button/Button";

const Hero = () => {
	return (
		<section className={`${s.hero__container} container`}>
			<div className={s.heroImg__container}>
				<img src={hero} alt="" />
			</div>
			<article className={s.heroText__container}>
				<h1 className={s.hero__title}>More than just shorter links</h1>
				<p className={s.hero__subtitle}>
					Build your brand's recognition and get detailed insights on
					how your links are performing.
				</p>
				<Button size="large" variant={"square"}>
					Get started
				</Button>
			</article>
		</section>
	);
};

export default Hero;
