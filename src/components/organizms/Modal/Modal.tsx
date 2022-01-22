import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import Button from "../../atoms/Button/Button";

import s from "./Modal.module.scss";

interface IModal {
	open: boolean;
	handleClose: () => void;
	title: string;
	children: ReactNode;
}

const overlayVariants = {
	opened: {
		opacity: 1,
	},
	closed: {
		opacity: 0,
	},
};

const modalVariants = {
	opened: {
		opacity: 1,
		transform: "translate(-50%, 0%)",
	},
	closed: {
		opacity: 0,
		transform: "translate(-50%, 20%)",
	},
};

const Modal = ({ open, handleClose, title, children }: IModal) => {
	return createPortal(
		<AnimatePresence>
			{open && (
				<>
					<motion.div
						onClick={handleClose}
						className={s.overlay}
						initial={"closed"}
						animate="opened"
						exit={"closed"}
						variants={overlayVariants}
						transition={{ duration: 0.2 }}
					/>
					<motion.div
						className={s.modal}
						initial={"closed"}
						animate="opened"
						variants={modalVariants}
						exit={"closed"}
						transition={{ duration: 0.2 }}
					>
						{title && (
							<header>
								<h2>{title}</h2>
							</header>
						)}
						<div className={s.modalContent}>{children}</div>
						<div className={s.modalAction}>
							<Button onClick={handleClose}>Close</Button>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>,
		document.body
	);
};

export default Modal;
