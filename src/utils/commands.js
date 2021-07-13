import neofetch from "./neofetch";

const compileResponseHTML = (styleMap) => {
	return styleMap.map((item)=>{
		return `<span class="${item.folder?`style3`:`${item.executable?`style2`:`style1`}`}">${item.link?`<a target="_blank" href="${item.link}">${item.name}</a>`:`${item.name}`}</span>`
	}).join("  ")
}

const commandList = [
	{
		"name":["resume","./resume"],
		"action": { "RESUME":"https://firebasestorage.googleapis.com/v0/b/boidushya.appspot.com/o/Boidushya's%20Resume.pdf?alt=media"},
		"response":"",
		"subPathStrict":[false],
	},
	{
		"name": ["neofetch"],
		"action": false,
		"response": `<pre>${neofetch}</pre>`,
		"subPathStrict": [false],
	},
	{
		"name": ["code"],
		"action": true,
		"response": "",
		"subPathStrict": [true, "."],
	},
	{
		"name": ["danger"],
		"action": true,
		"response": "",
		"subPathStrict": [false],
	},
	{
		"name": ["qemu"],
		"action": true,
		"response": "",
		"subPathStrict": [false],
	}
]

const fileList = [
	{
		name:".github",
		link:"https://github.com/boidushya",
		folder:true,
		executable:false,
	},
	{
		name:"src",
		link:"https://github.com/boidushya/boidushya.com",
		folder:true,
		executable:false,
	},
	{
		name:"resume",
		link:"",
		folder:false,
		executable:true,
	},
]

const getCommandList = (commandList) => {
	let finalCommandList = {}
	commandList.forEach(item => {
		//eslint-disable-next-line
		let commandBuilder = {}
		item.name.forEach(elem => {
			let action = item.action ? { [item.name[0].toUpperCase()]: "" } : null,
				commandBuilder = {
					[elem]: {
						"validArgs": {
							"_dir": {
								action: action,
								response: item.response,
							},
							"default": {
								action: action,
								response: item.response,
							}
						}
					}
				}
			if (item.subPathStrict[0]) {
				commandBuilder[elem].validArgs[item.subPathStrict[1]] = {
					action: action,
					response: item.response,
				}
			}
			finalCommandList = { ...finalCommandList, ...commandBuilder }
		})
	})
	return finalCommandList
}

const getArgListCd = (fileList) => {
	let defArgs = {
		"_dir": {
			"action": null,
			"response": ""
		},
		"default": {
			"action": null,
			"response": "cd: cannot access %arg%: Permission Denied"
		}
	}
	let argList = {}
	fileList.forEach((item)=>{
		argList[item.name] = {
			action:item.folder?{PATH:item.link}:null,
			response:item.folder?"":"zsh: cd: %arg%: Not a directory",
		}
	})
	Object.keys(defArgs).forEach((item)=>{
		argList[item] = defArgs[item]
	})
	return argList
}

const commands = {
	"ls": {
		"validArgs":{
			"/":{
				"action":null,
				"response": "ls: cannot access System Volume Information: Permission Denied"
			},
			"_dir":{
				"action":null,
				"response":compileResponseHTML(fileList)
			},
			"default":{
				"action":null,
				"response":"ls: cannot access %arg%: Permission Denied"
			}
		}
	},
	"cd": {
		"validArgs": getArgListCd(fileList)
	},
	...getCommandList(commandList)
}

export default commands