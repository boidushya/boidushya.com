import { motion, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { useDockStore } from "@contexts/Dock/Dock";

const DockItem = ({ img, fullWidth = false, title }) => {
	const mousePosX = useDockStore(state => state.mousePosX);
	const baseValue = 32;
	const spring = useSpring(baseValue, { stiffness: 2000, damping: 150 });
	useEffect(() => {
		if (mousePosX === null) {
			spring.set(baseValue);
		} else {
			const target = itemRef.current;
			const box = target.getBoundingClientRect();
			const multiplier = Math.abs(mousePosX - (box.left + box.right) / 2);
			spring.set(Math.max(baseValue * 2.25 - multiplier / 8, baseValue));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [mousePosX]);
	const itemRef = useRef(null);
	return (
		<motion.li
			ref={itemRef}
			data-title={title}
			style={{ width: spring, height: spring }}
			className={`dock-item ${fullWidth ? `` : `img-padding`}`}
		>
			<img src={img} className="img-fluid" alt="mac" />
		</motion.li>
	);
};

export default DockItem;
