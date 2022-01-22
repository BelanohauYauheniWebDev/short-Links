import { useState } from "react";
import useMatchMedia from "use-match-media-hook";
import { IoMenu } from "react-icons/io5";
import Button from "../../atoms/Button/Button";
import Logo from "../../atoms/Logo/Logo";
import Menu from "../../molecules/Menu/Menu";
import s from "./Header.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "../Modal/Modal";
import { Login, SignUp } from "../SignUp";

const media = ["(max-width: 766px)", "(min-width: 767px)"];
const Header = () => {
	const [mobile] = useMatchMedia(media);

	const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
	const [isSignUpOpen, setSignUpOpen] = useState<boolean>(false);
	const [isLoginOpen, setLoginOpen] = useState<boolean>(false);

	const openSignUp = () => setSignUpOpen(true);
	const closeSignUp = () => setSignUpOpen(false);
	const openLogin = () => setLoginOpen(true);
	const closeLogin = () => setLoginOpen(false);

	return (
		<>
			<header className={`container ${s.header_container} `}>
				<Logo />

				{mobile ? (
					<IoMenu
						className={s.burger}
						onClick={() => setShowMobileMenu(!showMobileMenu)}
					/>
				) : (
					<Menu handleSignUp={openSignUp} handleLogin={openLogin} />
				)}

				<AnimatePresence>
					{showMobileMenu && mobile && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className={s.mobileMenu}
						>
							<Menu
								handleSignUp={openSignUp}
								handleLogin={openLogin}
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</header>

			<Modal
				open={isSignUpOpen}
				title="Sign Up"
				handleClose={closeSignUp}
			>
				<SignUp closeModal={closeSignUp} />
			</Modal>
			<Modal open={isLoginOpen} title="Sign In" handleClose={closeLogin}>
				<Login closeModal={closeLogin} />
			</Modal>
		</>
	);
};

export default Header;
