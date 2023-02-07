export interface IProject {
	_id: string
	title: string
	previewText: string
	img: string
	tags: string[]
	button: {
		text: string
		url: string
	}
	slides: string[]
	description: IDescription
	links: IProjectLinks
}

export interface IProjectLinks {
	website?: string
	github?: string
	figma?: string
	googlePlay?: string
	chromeExtension?: string
}

export interface IProjectButtons {
	primaryBtn: {}
}

export interface IProjectState {
	projects: IProject[]
}

export interface IDescription {
	text?: string
	frontend?: string[]
	backend?: string[]
	mobile?: string[]
	chromeExtension?: string[]
}
