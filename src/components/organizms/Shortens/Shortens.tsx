import { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { IResult, selectLinks } from "../../../store/slice/linkSlice";
import Button from "../../atoms/Button/Button";
import s from "./Shortens.module.scss";

const Shortens = () => {
	const [copiedLink, setCopiedLink] = useState<string | null>(null);
	const links = useSelector(selectLinks);

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text).then(() => setCopiedLink(text));
	};

	return links?.length ? (
		<section className={s.Shortens}>
			<div className="container">
				{links.map((item: IResult) => (
					<AnimatePresence key={item.code}>
						<motion.div
							data-active={copiedLink === item.full_short_link2}
							layout
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							transition={{ duration: 0.5 }}
							className={s.item}
						>
							<span>{item.original_link}</span>
							<span>{item.full_short_link2}</span>
							<Button
								onClick={() =>
									copyToClipboard(item.full_short_link2)
								}
								variant="square"
							>
								{copiedLink === item.full_short_link2
									? "Copied!"
									: "Copy"}
							</Button>
						</motion.div>
					</AnimatePresence>
				))}
			</div>
		</section>
	) : null;
};

export default Shortens;
