import Button from "../../atoms/Button/Button";
import s from "./Form.module.scss";

const Form = () => {
	return (
		<div className={s.form__container}>
			<div className={"container"}></div>
			<form className={s.form}>
				<input type="text" />
				<Button size={"large"} variant={"square"}>
					Shoryen it!
				</Button>
			</form>
		</div>
	);
};

export default Form;
