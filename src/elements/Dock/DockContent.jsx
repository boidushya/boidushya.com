import React from "react";
import "@styles/dock.scss";
import TerminalIcon from "@static/terminal.png";
import CodeIcon from "@static/code.png";
import GithubIcon from "@static/github.png";
import QemuIcon from "@static/qemu.png";
import FolderIcon from "@static/folder.png";
import FounderIcon from "@static/founder.jpg";
import DopeIcon from "@static/dope.svg";
import { Link } from "react-router-dom";

const DockContent = () => {
	return (
		<div className="main-contain">
			<div className="container">
				<div className="dock">
					<span></span>
					<div className="dock-nav">
						<ul>
							<Link to="/">
								<li
									data-title="Terminal"
									className="full-width-icon"
								>
									<img
										src={TerminalIcon}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</Link>
							<Link to="/vscode">
								<li data-title="VS Code">
									<img
										src={CodeIcon}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</Link>
							<Link to="/git">
								<li data-title="Git Log">
									<img
										src={GithubIcon}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</Link>
							<Link to="/qemu">
								<li data-title="Qemu">
									<img
										src={QemuIcon}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</Link>
							<a href="https://dope.boidushya.com">
								<li data-title="This Website Is Dope">
									<img
										src={DopeIcon}
										className="img-fluid"
										alt="dope"
									/>
								</li>
							</a>
							<a href="https://founder.boidushya.com">
								<li data-title='Minimal "Founder-esque" Website'>
									<img
										src={FounderIcon}
										className="img-fluid"
										alt="dope"
									/>
								</li>
							</a>
							<div className="separator" />
							<Link to="/resume">
								<li data-title="Resume">
									<img
										src={FolderIcon}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DockContent;
