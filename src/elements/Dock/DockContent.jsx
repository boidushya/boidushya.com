import React from "react";
import "@styles/dock.scss";
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
								<li data-title="Home" className="full-width-icon">
									<img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macos/Big-Sur/macos-big-sur-finder-icon.png" className="img-fluid" alt="mac"/>
								</li>
							</Link>
							<Link to="/vscode">
								<li data-title="VS Code">
									<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" className="img-fluid" alt="mac"/>
								</li>
							</Link>
							<Link to="/git">
								<li data-title="Git Log">
									<img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="img-fluid" alt="mac" />
								</li>
							</Link>
							<Link to="/qemu">
								<li data-title="Qemu">
									<img src="https://icons-for-free.com/iconfiles/png/512/qemu-1324440219327920651.png" className="img-fluid" alt="mac" />
								</li>
							</Link>
							<Link to="/resume">
								<li data-title="Resume">
									<img src="https://cdn.icon-icons.com/icons2/2963/PNG/512/macos_big_sur_folder_icon_186046.png" className="img-fluid" alt="mac" />
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DockContent
