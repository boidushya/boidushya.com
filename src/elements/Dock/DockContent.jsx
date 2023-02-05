import React from "react";
import "@styles/dock.scss";
import TerminalIcon from "@static/terminal.png";
import CodeIcon from "@static/code.png";
import GithubIcon from "@static/github.png";
import QemuIcon from "@static/qemu.png";
import FolderIcon from "@static/folder.png";
import FounderIcon from "@static/founder.jpg";
import DopeIcon from "@static/dope.svg";
import ContactIcon from "@static/contact.png";
import { Link } from "react-router-dom";
import { useDockStore } from "@contexts/Dock/Dock";
import DockItem from "./DockItem";

const DockContent = () => {
	const setMousePosX = useDockStore(state => state.setMousePosX);
	const handleMouseOver = e => {
		let x;
		if (
			e.type === "touchstart" ||
			e.type === "touchmove" ||
			e.type === "touchend" ||
			e.type === "touchcancel"
		) {
			let evt =
				typeof e.originalEvent === "undefined" ? e : e.originalEvent;
			let touch = evt.touches[0] || evt.changedTouches[0];
			x = touch.pageX;
		} else if (
			e.type === "mousedown" ||
			e.type === "mouseup" ||
			e.type === "mousemove" ||
			e.type === "mouseover" ||
			e.type === "mouseout" ||
			e.type === "mouseenter" ||
			e.type === "mouseleave"
		) {
			x = e.clientX;
		}
		setMousePosX(window.innerWidth > 640 ? x : null);
	};

	const handleMouseOut = () => {
		setMousePosX(null);
	};
	return (
		<div className="main-contain">
			<div className="container">
				<div
					className="dock"
					onMouseMove={handleMouseOver}
					onMouseLeave={handleMouseOut}
					onTouchMove={handleMouseOver}
					onTouchCancel={handleMouseOut}
					onTouchEnd={handleMouseOut}
				>
					<span></span>
					<div className="dock-nav">
						<ul>
							<Link to="/">
								<DockItem
									img={TerminalIcon}
									title="Terminal"
									fullWidth
								/>
							</Link>
							<Link to="/vscode">
								<DockItem img={CodeIcon} title="VS Code" />
							</Link>
							<Link to="/git">
								<DockItem img={GithubIcon} title="Git Log" />
							</Link>
							<Link to="/qemu">
								<DockItem img={QemuIcon} title="Qemu" />
							</Link>

							<a href="https://dope.boidushya.com">
								<DockItem img={DopeIcon} title="dope" />
							</a>
							<a href="https://founder.boidushya.com">
								<DockItem
									img={FounderIcon}
									fullWidth
									title='Minimal "Founder-esque" Website'
								/>
							</a>
							<div className="separator" />
							<Link to="/resume">
								<DockItem
									img={FolderIcon}
									title="Minimal Resume"
								/>
							</Link>
							<Link to="/contact">
								<DockItem
									img={ContactIcon}
									fullWidth
									title="Contact"
								/>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DockContent;
