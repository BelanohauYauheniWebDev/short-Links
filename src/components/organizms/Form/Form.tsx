import Button from "../../atoms/Button/Button";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import s from "./Form.module.scss";
import {
	createShortLinks,
	selectLinks,
	selectLoading,
} from "../../../store/slice/linkSlice";
interface IData {
	Url?: string;
	[x: string]: any;
}

const Form = () => {
	const dispatch = useDispatch();
	const loading = useSelector(selectLoading);
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({ mode: "onSubmit" });

	const onSubmit = (data: IData) => {
		dispatch(createShortLinks(data.Url as string));

		reset();
	};
	return (
		<div className={`${s.form__container} container`}>
			<form
				className={s.form}
				autoComplete="off"
				onSubmit={handleSubmit(onSubmit)}
			>
				<input
					placeholder="Shorten a link here..."
					{...register("Url", {
						required: "Please add a link...",
						pattern: {
							value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
							message: "Please, enter a valid value...",
						},
					})}
					style={{
						outlineColor: errors.Url
							? "var(--secondary-300)"
							: "currentColor",
						outlineWidth: errors.Url ? "40px" : "1px",
					}}
					disabled={loading === "loading"}
				/>
				<Button
					disabled={loading === "loading"}
					type="submit"
					size={"large"}
					variant={"square"}
				>
					Shorten it!
				</Button>
				{errors.Url && (
					<div className={s.error}>{errors.Url.message}</div>
				)}
			</form>
		</div>
	);
};

export default Form;
