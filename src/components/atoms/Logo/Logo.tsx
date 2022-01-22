import s from "./Logo.module.scss";
import logo from "../../../images/logo.svg";

const Logo = () => {
	return (
		<div className={s.logo}>
			<a href="#">
				<img src={logo} alt="logo" />
			</a>
		</div>
	);
};

export default Logo;
