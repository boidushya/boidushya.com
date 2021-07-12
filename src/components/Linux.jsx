import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { V86Starter } from "v86";
import bios from "v86/bios/bochs-bios.bin";
import vgaBios from "v86/bios/bochs-vgabios.bin";
import image from "v86/images/linux3.iso";
import Default from "./Default";
import theme from "../styles/theme";

const Container = styled.div`
	white-space: pre;
	font: 14px monospace;
	padding: 0.5rem;
	span{
		background: transparent !important;
		// color: ${theme.bodyFont4} !important;
	}
`

const Canvas = styled.canvas`
	display: none;
`

const Screen = styled.div`
	display: grid;
	background: ${theme.bodyBgWithOpacity};
`

const createFile = (emulator,filename,content) => {
	emulator.serial0_send(`echo "${content}" > ${filename}\n`);
}

const Arch = () => {
	let screenRef = useRef()
	const [fileCreated, setFileCreated] = useState(false)
	useEffect(() => {
		let emulator
		const init = () => {
			let config = {
				memory_size: 32 * 1024 * 1024,
				vga_memory_size: 2 * 1024 * 1024,
				screen_container: screenRef.current,
				bios: {
					url: bios,
				},
				vga_bios: {
					url: vgaBios,
				},
				cdrom: {
					url: "/iso/linux3.iso",
					async:true
				},
				autostart: true,
				disable_speaker:true,
			}
			emulator = window.emulator  = new V86Starter(config);
			let serial_out;
			emulator.add_listener("serial0-output-char", function(chr)
			{
				serial_out += chr;
				console.log(serial_out)
				if(serial_out.endsWith("~% ")){
					if(!fileCreated){
						let content = "Welcome to Linux\nHope you enjoy your stay!\n~ Boidushya"
						createFile(emulator,"welcome.txt",content)
						setFileCreated(true)
						console.log("VM Loaded")
					}
					// var code = "console.log(\"Hello, World!\");\n";
					// var buffer = new Uint8Array(code.length);

					// buffer.set(code.split("").map(function(chr) { return chr.charCodeAt(0); }));

					// emulator.create_file("/root/code.js", buffer, function(error)
					// {
					// 	if(error) throw error;
					// 	console.log("yes")
					// 	// emulator.serial0_send("node /root/code.js > /root/out.txt 2> /root/out.txt\n");
					// });
					// emulator.serial0_send("touch nice.txt\n");
				}
			});
		}
		init()
		return () => {
			emulator.destroy();
		}
	//eslint-disable-next-line
	}, [])
	return (
		<Default heading="qemu" contextMenu={true} resizable={false}>
			<Screen ref={screenRef}>
				<Container/>
				<Canvas></Canvas>
			</Screen>
		</Default>
	)
}

export default Arch
