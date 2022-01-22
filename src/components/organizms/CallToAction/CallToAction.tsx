import Button from "../../atoms/Button/Button";
import s from "./CallToAction.module.scss";

const CallToAction = () => {
	return (
		<section className={s.call_to_action}>
			<h2>Boost yuor links tooday</h2>
			<Button>Get started</Button>
		</section>
	);
};

export default CallToAction;
