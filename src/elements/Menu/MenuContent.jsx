import "@styles/menubar.scss";
import AppleIcon from "@static/apple.png";
import BatteryIcon from "@static/battery.png";
import WifiIcon from "@static/wifi.png";
import ControlCenterIcon from "@static/controlcenter.png";
import * as Menubar from "@radix-ui/react-menubar";
import React from "react";

const formatMinutes = min => {
	return min < 10 ? "0" + min : min;
};

const convertToReadableDate = timestamp => {
	const shortenedDaysOfTheWeek = [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
	];
	const shortenedMonth = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const currentDate = new Date(timestamp);
	return (
		<>
			{shortenedDaysOfTheWeek[currentDate.getDay()]}{" "}
			{currentDate.getDate()} {shortenedMonth[currentDate.getMonth()]}{" "}
			<span className="time">
				{currentDate.getHours()}:
				{formatMinutes(currentDate.getMinutes())}
			</span>
		</>
	);
};

const ChevronRightIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={2}
		stroke="white"
		width="12"
		height="12"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M8.25 4.5l7.5 7.5-7.5 7.5"
		/>
	</svg>
);

const CheckIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={2.5}
		stroke="white"
		width="12"
		height="12"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M4.5 12.75l6 6 9-13.5"
		/>
	</svg>
);

const CHECK_ITEMS = ["Always Show Bookmarks Bar", "Always Show Full URLs"];

const MenuItems = React.forwardRef((props, forwardedRef) => {
	const [checkedSelection, setCheckedSelection] = props.viewState;
	switch (props.menuType) {
		case "File":
			return (
				<Menubar.Content
					className="MenubarContent"
					align="start"
					sideOffset={5}
					alignOffset={-3}
				>
					<Menubar.Item className="MenubarItem">
						New Tab <div className="RightSlot">⌘ T</div>
					</Menubar.Item>
					<Menubar.Item className="MenubarItem">
						New Window <div className="RightSlot">⌘ N</div>
					</Menubar.Item>
					<Menubar.Item className="MenubarItem" disabled>
						New Incognito Window
					</Menubar.Item>
					<Menubar.Separator className="MenubarSeparator" />
					<Menubar.Sub>
						<Menubar.SubTrigger className="MenubarSubTrigger">
							Share
							<div className="RightSlot">
								<ChevronRightIcon />
							</div>
						</Menubar.SubTrigger>
						<Menubar.Portal>
							<Menubar.SubContent
								className="MenubarSubContent"
								alignOffset={-5}
							>
								<Menubar.Item className="MenubarItem">
									Email Link
								</Menubar.Item>
								<Menubar.Item className="MenubarItem">
									Messages
								</Menubar.Item>
								<Menubar.Item className="MenubarItem">
									Notes
								</Menubar.Item>
							</Menubar.SubContent>
						</Menubar.Portal>
					</Menubar.Sub>
					<Menubar.Separator className="MenubarSeparator" />
					<Menubar.Item className="MenubarItem">
						Print… <div className="RightSlot">⌘ P</div>
					</Menubar.Item>
				</Menubar.Content>
			);
		case "Edit":
			return (
				<Menubar.Content
					ref={forwardedRef}
					className="MenubarContent"
					align="start"
					sideOffset={5}
					alignOffset={-3}
				>
					<Menubar.Item className="MenubarItem">
						Undo <div className="RightSlot">⌘ Z</div>
					</Menubar.Item>
					<Menubar.Item className="MenubarItem">
						Redo <div className="RightSlot">⇧ ⌘ Z</div>
					</Menubar.Item>
					<Menubar.Separator className="MenubarSeparator" />
					<Menubar.Sub>
						<Menubar.SubTrigger className="MenubarSubTrigger">
							Find
						</Menubar.SubTrigger>

						<Menubar.Portal>
							<Menubar.SubContent
								className="MenubarSubContent"
								alignOffset={-5}
							>
								<Menubar.Item className="MenubarItem">
									Search the web…
								</Menubar.Item>
								<Menubar.Separator className="MenubarSeparator" />
								<Menubar.Item className="MenubarItem">
									Find…
								</Menubar.Item>
								<Menubar.Item className="MenubarItem">
									Find Next
								</Menubar.Item>
								<Menubar.Item className="MenubarItem">
									Find Previous
								</Menubar.Item>
							</Menubar.SubContent>
						</Menubar.Portal>
					</Menubar.Sub>
					<Menubar.Separator className="MenubarSeparator" />
					<Menubar.Item className="MenubarItem">Cut</Menubar.Item>
					<Menubar.Item className="MenubarItem">Copy</Menubar.Item>
					<Menubar.Item className="MenubarItem">Paste</Menubar.Item>
				</Menubar.Content>
			);
		case "View":
			return (
				<Menubar.Content
					className="MenubarContent"
					align="start"
					sideOffset={5}
					alignOffset={-14}
				>
					{CHECK_ITEMS.map(item => (
						<Menubar.CheckboxItem
							className="MenubarCheckboxItem inset"
							key={item}
							checked={checkedSelection.includes(item)}
							onCheckedChange={() =>
								setCheckedSelection(current =>
									current.includes(item)
										? current.filter(el => el !== item)
										: current.concat(item)
								)
							}
						>
							<Menubar.ItemIndicator className="MenubarItemIndicator">
								<CheckIcon />
							</Menubar.ItemIndicator>
							{item}
						</Menubar.CheckboxItem>
					))}
					<Menubar.Separator className="MenubarSeparator" />
					<Menubar.Item className="MenubarItem inset">
						Reload <div className="RightSlot">⌘ R</div>
					</Menubar.Item>
					<Menubar.Item className="MenubarItem inset" disabled>
						Force Reload <div className="RightSlot">⇧ ⌘ R</div>
					</Menubar.Item>
					<Menubar.Separator className="MenubarSeparator" />
					<Menubar.Item className="MenubarItem inset">
						Toggle Fullscreen
					</Menubar.Item>
					<Menubar.Separator className="MenubarSeparator" />
					<Menubar.Item className="MenubarItem inset">
						Hide Sidebar
					</Menubar.Item>
				</Menubar.Content>
			);
		case "Contact":
			return (
				<Menubar.Content
					className="MenubarContent"
					align="start"
					sideOffset={5}
					alignOffset={-14}
				>
					<Menubar.Item className="MenubarItem">Contact</Menubar.Item>
				</Menubar.Content>
			);
		case "Help":
			return (
				<Menubar.Content
					className="MenubarContent"
					align="start"
					sideOffset={5}
					alignOffset={-14}
				>
					<Menubar.Item className="MenubarItem">
						Type help to get started
					</Menubar.Item>
				</Menubar.Content>
			);
		default:
			return <></>;
	}
});

const MenuContent = props => {
	const menuItems = React.useMemo(
		() => [
			[
				<img src={AppleIcon} alt="Apple logo" className="apple" />,
				props.programName,
				"File",
				"Edit",
				"View",
				"Contact",
				"Help",
			],
			[
				<img
					src={BatteryIcon}
					alt="Battery icon"
					className="right-icon"
				/>,
				<img src={WifiIcon} alt="Wifi icon" className="right-icon" />,
				<img
					src={ControlCenterIcon}
					alt="Control Center icon"
					className="right-icon"
				/>,
				convertToReadableDate(Date.now()),
			],
		],
		[props.programName]
	);
	const view = React.useState([CHECK_ITEMS[1]]);
	return (
		<div className="menu-bar">
			<Menubar.Root
				className="app-menus"
				onValueChange={trig => console.log(trig)}
			>
				{menuItems[0].map(item => {
					return (
						<Menubar.Menu key={item}>
							<Menubar.Trigger
								className={`${
									typeof item !== "string"
										? `img-container`
										: `menu-trigger`
								}`}
							>
								{item}
							</Menubar.Trigger>
							<Menubar.Portal>
								<MenuItems menuType={item} viewState={view} />
							</Menubar.Portal>
						</Menubar.Menu>
					);
				})}
			</Menubar.Root>
			<div className="right-side">
				{menuItems[1].map((item, index) => {
					return (
						<div
							className={`${
								index !== menuItems[1].length - 1
									? `img-container`
									: ``
							}`}
							key={index}
						>
							{item}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MenuContent;
