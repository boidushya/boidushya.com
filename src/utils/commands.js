import neofetch from "./neofetch";

const compileResponseHTML = (styleMap) => {
	return styleMap.map((item)=>{
		return `<span class="${item.folder?`style3`:`${item.executable?`style2`:`style1`}`}">${item.link?`<a target="_blank" href="${item.link}">${item.name}</a>`:`${item.name}`}</span>`
	}).join("  ")
}

const fileList = [
	{
		name:".github",
		link:"https://github.com/boidushya",
		folder:true,
		executable:false,
	},
	{
		name:"src",
		link:"https://github.com/boidushya/personalsite",
		folder:true,
		executable:false,
	},
	{
		name:"resume",
		link:"https://github.com/sb2nov/resume",
		folder:false,
		executable:true,
	},
]

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
	"resume": {
		"validArgs": {
			"/": {
				"action": null,
				"response": "ls: cannot access System Volume Information: Permission Denied"
			},
			"_dir": {
				"action": null,
				"response": "<span class=\"style1\"><a target=\"_blank\" href=\"https://github.com/boidushya\">.git</a></span>  <span class=\"style2\">src</span>  <span class=\"style3\">resume.pdf</span>"
			},
			"default": {
				"action": null,
				"response": "ls: cannot access %arg%: Permission Denied"
			}
		}
	},
	"neofetch":{
		"validArgs": {
			"_dir": {
				"action": null,
				"response": `<pre>${neofetch}</pre>`
			},
			"default": {
				"action": null,
				"response": `<pre>${neofetch}</pre>`
			}
		}
	},
	"danger":{
		"validArgs": {
			"_dir": {
				"action": {"DANGER":""},
				"response": ""
			},
			"default": {
				"action": {"DANGER":""},
				"response": ""
			}
		}
	},
	"code":{
		"validArgs": {
			"_dir": {
				"action": {"CODE":""},
				"response": ""
			},
			".": {
				"action": {"CODE":""},
				"response": ""
			},
			"default": {
				"action": {"CODE":""},
				"response": ""
			}
		}
	},
	"qemu": {
		"validArgs": {
			"_dir": {
				"action": { "QEMU": "" },
				"response": ""
			},
			"default": {
				"action": { "QEMU": "" },
				"response": ""
			}
		}
	},
}

export default commands