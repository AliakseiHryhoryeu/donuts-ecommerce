import { IProject } from './project.types'
const Pomodoro = 'static/projects/pomodoro/pomodoro-preview.jpg'
const Canvas = 'static/projects/canvas/canvas-1.gif'
const LndingPageVPNUFO = 'static/projects/VPNUFO-preview.jpg'
const Donuts = 'static/projects/donuts/donuts-1.jpg'
const Sushi = '/static/projects/sushi/sushi-3.jpg'
const Christmas = '/static/projects/christmas/christmas-3.gif'
const ReactApps = '/static/projects/reactApps-preview.jpg'
const NoteList = '/static/projects/noteList-preview.jpg'
const Restaurant = '/static/projects/Restaraunt-preview.jpg'
const Todolist = '/static/projects/todolist-preview.jpg'
// const FlowerShop = '/static/projects/flowerShop-preview.jpg'
// const LaravelTournament = '/static/projects/LaravelTournament-preview.jpg'
// const ThemeForWPBlog = '/static/projects/ThemeWPBlog-preview.jpg'
const LandingRevizoro = '/static/projects/revizoro-preview.jpg'
// const FreeTeamSpeak3Server = '/static/projects/autorenamets3-preview.jpg'
// const SoftwareEngineer = '/static/projects/softwareEngeener-preview.jpg'
const CivilEngineer = '/static/projects/civilEngeener-preview.jpg'

export const projectsData: IProject[] = [
	{
		_id: 'Pomodoro',
		title: 'Pomodoro Apps',
		previewText: 'Chrome Extension, Website, Mobile - Google Play',
		img: Pomodoro,
		tags: ['Chrome Extension', 'Google Play', 'React', 'Redux', 'TypeScript'],
		button: {
			text: 'Live Website',
			url: 'https://vpnufo.vercel.app/',
		},
		slides: [
			'/static/projects/pomodoro/pomodoro-1.jpg',
			'/static/projects/pomodoro/pomodoro-2.jpg',
			'/static/projects/pomodoro/pomodoro-3.jpg',
			'/static/projects/pomodoro/pomodoro-4.jpg',
		],
		description: {
			text: 'Client server landing page, data about "feedbacks" section and "FAQ" section loading from server, but now server is disabled',
			frontend: [
				'React',
				'Redux Toolkit',
				'TypeScript',
				'SCSS',
				'Webpack',
				'Figma',
			],
			chromeExtension: [
				'HTML',
				'CSS / SCSS',
				'TypeScript',
				'Webpack',
				'Chrome Storage',
			],
			mobile: ['React Native', 'Expo', 'TypeScript', 'Google Play'],
		},
		links: {
			website: 'https://pomodoro11.vercel.app/',
			github: 'https://github.com/AliakseiHryhoryeu/pomodoro',
			figma: 'https://www.figma.com/file/KlVsemPIeBHVVdnhfKybUr/Pomodoro-app',
			chromeExtension:
				'https://chrome.google.com/webstore/detail/pomodoro-timer/ecfahmjaaikpolggmimbeobegomfgpeb',
			googlePlay:
				'https://play.google.com/store/apps/details?id=com.aliaksei.hryhoryeu.PomodoroTimer&pli=1',
		},
	},
	{
		_id: 'CanvasAnimations',
		title: 'Canvas Animations',
		previewText: 'Library of 3 Canvas Animations',
		img: Canvas,
		tags: ['JavaScript', 'Canvas'],
		button: {
			text: 'View in GitHub',
			url: 'https://github.com/AliakseiHryhoryeu/canvas-animations',
		},
		slides: [
			'/static/projects/canvas/canvas-1.gif',
			'/static/projects/canvas/canvas-2.jpg',
			'/static/projects/canvas/canvas-3.jpg',
			'/static/projects/canvas/canvas-4.jpg',
		],
		description: {
			text: 'Library of 3 Canvas Animations',
			frontend: ['HTML / CSS', 'JavaScript'],
		},
		links: {
			github: 'https://github.com/AliakseiHryhoryeu/canvas-animations',
		},
	},
	{
		_id: 'Donuts',
		title: 'Donuts - Responsive website',
		previewText:
			'now i work on this e-commerce website, this is will be theme for shopify',
		img: Donuts,
		tags: ['Figma'],
		button: {
			text: 'Github code',
			url: 'https://github.com/AliakseiHryhoryeu/donuts-theme-shopify',
		},
		slides: ['/static/projects/donuts/donuts-1.jpg'],
		description: {
			text: 'now i work on this e-commerce website, this is will be theme for shopify',
			frontend: ['HTML / CSS / JavaScript', 'Gulp / Webpack', 'Figma'],
		},
		links: {
			github: 'https://github.com/AliakseiHryhoryeu/donuts-theme-shopify',
			figma: 'https://www.figma.com/file/mbhRc9oPzPbgpBL5pvTmzw/Donuts',
		},
	},
	{
		_id: 'ReactApps',
		title: 'React Apps',
		previewText: '6 mini apps in 1',
		img: ReactApps,
		tags: ['Next.js', 'React', 'TypeScript'],
		button: {
			text: 'Live Website',
			url: 'https://react-apps-gamma.vercel.app/',
		},
		slides: [
			'/static/projects/reactapps/reactapps-1.jpg',
			'/static/projects/reactapps/reactapps-2.jpg',
			'/static/projects/reactapps/reactapps-3.jpg',
			'/static/projects/reactapps/reactapps-4.jpg',
		],
		description: {
			text: 'Client Single Page Application, 6 application in 1 app -  3 games & 3 sliders, ',
			frontend: ['React', 'Next.js', 'MaterialUI', 'TypeScript', 'Figma'],
		},
		links: {
			website: 'https://react-apps-gamma.vercel.app/',
			github: 'https://github.com/AliakseiHryhoryeu/react-apps',
			figma: 'https://www.figma.com/file/KEi1fudDOGDrT7sz3QhEKF',
		},
	},
	{
		_id: 'Todolist',
		title: 'To do list',
		previewText:
			'Client-server app, data save in local storage when server is offline or user dont have auth',
		img: Todolist,
		tags: ['React', 'Redux', 'Express.js', 'MongoDB'],
		button: {
			text: 'Live Website',
			url: 'https://to-do-list-client.vercel.app/',
		},
		slides: [
			'/static/projects/todolist/todolist-1.jpg',
			'/static/projects/todolist/todolist-2.jpg',
			'/static/projects/todolist/todolist-3.jpg',
			'/static/projects/todolist/todolist-4.jpg',
		],
		description: {
			text: 'Client-server Single Page Application, data saved in local storage if user not auth or server is offline, server now is offline',
			frontend: [
				'React',
				'Redux, Redux Toolkit',
				'TypeScript',
				'SCSS',
				'Webpack',
				'Figma',
			],
			backend: ['Express', 'MongoDB', 'JavaScript'],
		},
		links: {
			website: 'https://to-do-list-client.vercel.app/',
			github: 'https://github.com/AliakseiHryhoryeu/To-do-list',
			figma: 'https://www.figma.com/file/n5p6P6gIghvaMJvw2hVIZz/To-do-list',
		},
	},

	// {
	// 	_id: 'FlowerShop',
	// 	title: 'Flower Shop',
	// 	previewText: '',
	// 	img: FlowerShop,
	// 	tags: ['HTML/CSS', 'JavaScript', 'Bootstrap'],
	// 	button: {
	// 		text: 'Live Website',
	// 		url: 'https://github.com/AliakseiHryhoryeu/Flower-shop',
	// 	},
	// 	slides: ['/static/projects/flowerShop/flowerShop.jpg'],
	// 	description: {
	// 		text: 'Getting to know bootstrap',
	// 		frontend: ['HTML', 'CSS', 'Bootstrap', 'SCSS', 'Webpack', 'Figma'],
	// 	},
	// 	links: {
	// 		website: 'https://flower-shop-bootstrap5.vercel.app/',
	// 		github: 'https://github.com/AliakseiHryhoryeu/Flower-shop',
	// 		figma: 'https://www.figma.com/file/s5ANUgterSFZ64mVlfc1PW/Flower-shop',
	// 	},
	// },
	// {
	// 	_id: 'LaravelTournament',
	// 	title: 'Tournament table calculation',
	// 	previewText: 'Client-Server application',
	// 	img: LaravelTournament,
	// 	tags: ['PHP', 'Laravel', 'MySQL'],
	// 	button: {
	// 		text: 'View in GitHub',
	// 		url: 'https://github.com/AliakseiHryhoryeu/tournament-bracket',
	// 	},
	// 	slides: ['/static/projects/TournamentBracket/TournamentBracket.jpg'],
	// 	description: {
	// 		text: 'Tournament table calculation. The list of players and the start date of the tournament are set - a table of games is created where each player plays with each',
	// 		backend: ['PHP', 'Laravel', 'MySQL', 'HTML/SCSS', 'JavaScript'],
	// 	},
	// 	links: {
	// 		github: 'https://github.com/AliakseiHryhoryeu/tournament-bracket',
	// 	},
	// },
	// {
	// 	_id: 'ThemeForWPBlog',
	// 	title: 'Theme for Wordpress',
	// 	previewText: 'Blog',
	// 	img: ThemeForWPBlog,
	// 	tags: ['HTML/CSS', 'PHP', 'WordPress'],
	// 	button: {
	// 		text: 'View in GitHub',
	// 		url: 'https://github.com/AliakseiHryhoryeu/Theme-for-WordPress-blog',
	// 	},
	// 	slides: ['/static/projects/wordpressThemeBlog/ThemeWPBlog.jpg'],
	// 	description: {
	// 		text: 'Development the WordPress theme',
	// 		frontend: ['HTML/CSS', 'PHP', 'WordPress'],
	// 	},
	// 	links: {
	// 		github: 'https://github.com/AliakseiHryhoryeu/Theme-for-WordPress-blog',
	// 	},
	// },
	{
		_id: 'LndingPageVPNUFO',
		title: 'Landing page VPN-UFO',
		previewText:
			'Application owner can edit some website sections in the admin panel',
		img: LndingPageVPNUFO,
		tags: ['React', 'Nest', 'GraphQL', 'MongoDB'],
		button: {
			text: 'Live Website',
			url: 'https://vpnufo.vercel.app/',
		},
		slides: [
			'/static/projects/vpnufo/VPNUFO-1.jpg',
			'/static/projects/vpnufo/VPNUFO-2.jpg',
			'/static/projects/vpnufo/VPNUFO-3.jpg',
			'/static/projects/vpnufo/VPNUFO-4.jpg',
		],
		description: {
			text: 'Client server landing page, data about "feedbacks" section and "FAQ" section loading from server, but now server is disabled',
			frontend: [
				'React',
				'GraphQL / Apollo',
				'TypeScript',
				'SCSS',
				'Webpack',
				'Figma',
			],
			backend: [
				'NestJS',
				'GraphQL / Apollo',
				'MongoDB',
				'TypeScript',
				'Docker',
			],
		},
		links: {
			website: 'https://vpnufo.vercel.app/',
			github: 'https://github.com/AliakseiHryhoryeu/vpnufo-landing-page',
			figma: 'https://www.figma.com/file/Kis6CkWtqdEGzAx8cLiiid/VPN-ufo',
		},
	},
	{
		_id: 'Sushi',
		title: 'Responsive Sushi Website',
		previewText: 'Created responsive website',
		img: Sushi,
		tags: ['HTML', 'CSS', 'JavaScript', 'Gulp'],
		button: {
			text: 'Live Website',
			url: 'https://sushi1.vercel.app/',
		},
		slides: [
			'/static/projects/sushi/sushi-1.gif',
			'/static/projects/sushi/sushi-2.jpg',
			'/static/projects/sushi/sushi-3.jpg',
		],
		description: {
			text: 'Responsive Sushi Website',
			frontend: ['HTML', 'CSS', 'JavaScript', 'Figma'],
		},
		links: {
			website: 'https://sushi1.vercel.app/',
			// github: 'https://github.com/AliakseiHryhoryeu/vpnufo-landing-page',
			// figma: 'https://www.figma.com/file/Kis6CkWtqdEGzAx8cLiiid/VPN-ufo',
		},
	},
	{
		_id: 'Chrismas',
		title: 'Responsive Christmas Website',
		previewText: 'Created responsive website',
		img: Christmas,
		tags: ['HTML', 'CSS', 'JavaScript', 'Gulp'],
		button: {
			text: 'Live Website',
			url: 'https://christmas1.vercel.app/',
		},
		slides: [
			'/static/projects/christmas/christmas-1.gif',
			'/static/projects/christmas/christmas-2.jpg',
		],
		description: {
			text: 'Responsive chrismas Website',
			frontend: ['HTML', 'CSS', 'JavaScript', 'Figma'],
		},
		links: {
			website: 'https://christmas1.vercel.app/',
			// github: 'https://github.com/AliakseiHryhoryeu/vpnufo-landing-page',
			// figma: 'https://www.figma.com/file/Kis6CkWtqdEGzAx8cLiiid/VPN-ufo',
		},
	},
	{
		_id: 'LandingRevizoro',
		title: 'Landing Page - Revizoro',
		previewText: 'HTML / CSS / JavaScript development',
		img: LandingRevizoro,
		tags: ['HTML', 'SCSS', 'JavaScript', 'Gulp'],
		button: {
			text: 'Live Website',
			url: 'https://clean-landing-page.vercel.app/',
		},
		slides: [
			'/static/projects/cleaning/revizoro-1.jpg',
			'/static/projects/cleaning/revizoro-2.jpg',
			'/static/projects/cleaning/revizoro-3.jpg',
			'/static/projects/cleaning/revizoro-4.jpg',
		],
		description: {
			text: 'HTML/CSS/JavaScript Development Cleaning company website',
			frontend: ['HTML/CSS', 'JavaScript', 'Gulp', 'Figma'],
		},
		links: {
			website: 'https://clean-landing-page.vercel.app/',
			// github: 'https://github.com/AliakseiHryhoryeu/Revizorro-Landing-page',
			figma: 'https://www.figma.com/file/32LxQEmBOunC2dpThdi03Y/Cleaning',
		},
	},

	{
		_id: 'NoteList',
		title: 'Note-List',
		img: NoteList,
		previewText: 'App for fast notes, saving data in LocalStorage',
		tags: ['React', 'Redux', 'TypeScript'],
		button: {
			text: 'Live Website',
			url: 'https://note-list-green.vercel.app/',
		},
		slides: ['/static/projects/noteList/noteList.jpg'],
		description: {
			text: 'App for fast notes, save info about "message" and "current weather" in LocalStorage, in this project i use Weather API from openweathermap.org/api ',
			frontend: ['React', 'Redux', 'TypeScript', 'SCSS', 'Webpack', 'Figma'],
		},
		links: {
			website: 'https://note-list-green.vercel.app/',
			github: 'https://github.com/AliakseiHryhoryeu/note-list',
			figma: 'https://www.figma.com/file/pXUNkccApmty3LRIT5sxA4/note-list',
		},
	},
	{
		_id: 'Restaurant',
		title: 'Restaurant',
		previewText: 'Restaurant website UI/UX design',
		img: Restaurant,
		tags: ['UI/UX Design', 'Figma'],
		button: {
			text: 'View in Figma',
			url: 'https://www.figma.com/file/A5xG3niRWFMeGiyIbwdpKz/Restaraunt?node-id=0%3A1',
		},
		slides: [
			'/static/projects/restaraunt/Restaraunt-1.jpg',
			'/static/projects/restaraunt/Restaraunt-2.jpg',
			'/static/projects/restaraunt/Restaraunt-3.jpg',
			'/static/projects/restaraunt/Restaraunt-4.jpg',
		],
		description: {
			text: 'Restaurant website UI/UX design',
		},
		links: {
			// github: 'https://github.com/AliakseiHryhoryeu/restaurant-website',
			figma: 'https://www.figma.com/file/d6hH9vjtFmjIUpgyKLHlth/Restaurant',
		},
	},

	// {
	// 	_id: 'FreeTeamSpeak3Server',
	// 	title: 'Free TeamSpeak server',
	// 	previewText: 'Auto change server name to continue free rent ts3 server',
	// 	img: FreeTeamSpeak3Server,
	// 	tags: ['C#', 'WPF', 'MySQL'],
	// 	button: {
	// 		text: 'GitHub code',
	// 		url: 'https://github.com/AliakseiHryhoryeu/auto-rename-TeamSpeak3-server',
	// 	},
	// 	slides: ['/static/projects/autorenamets3/autorenamets3.jpg'],
	// 	description: {
	// 		// text: 'Auto change server name to continue free rent ts3 server',
	// 		backend: ['C#', 'WPF', 'MySQL'],
	// 	},
	// 	links: {
	// 		github:
	// 			'https://github.com/AliakseiHryhoryeu/auto-rename-TeamSpeak3-server',
	// 	},
	// },
	// {
	// 	_id: 'SoftwareEngineer',
	// 	title: 'Hotel managment software',
	// 	previewText: '',
	// 	img: SoftwareEngineer,
	// 	tags: ['C#', 'WPF', 'MySQL'],
	// 	button: {
	// 		text: 'GitHub code',
	// 		url: 'https://github.com/AliakseiHryhoryeu/graduate-work-software-engineer',
	// 	},
	// 	slides: ['/static/projects/softwareEngeener/preview1.jpg'],
	// 	description: {
	// 		// text: 'Software for hotels management',
	// 		backend: ['C#', 'WPF', 'MySQL'],
	// 	},
	// 	links: {
	// 		github:
	// 			'https://github.com/AliakseiHryhoryeu/graduate-work-software-engineer',
	// 	},
	// },

	{
		_id: 'CivilEngineer',
		title: 'Building plan of the Hotel',
		previewText: 'Graduation project (Bachelor) - Civil Engineer',
		img: CivilEngineer,
		tags: ['Revit', 'Robot', 'Autocad'],
		button: {
			text: 'View in GitHub',
			url: 'https://github.com/AliakseiHryhoryeu/graduate-work-construction-engineer',
		},
		slides: [
			'/static/projects/construction-engineer/construction-1.jpg',
			'/static/projects/construction-engineer/construction-2.jpg',
			'/static/projects/construction-engineer/construction-3.jpg',
			'/static/projects/construction-engineer/construction-4.jpg',
		],
		description: {
			text: 'Сalculation of the strength of the coating slab, selection of reinforcement, concrete, calculation of building premises, selection of a crane, etc.',
			frontend: ['Revit', 'Robot', 'Autocad', 'Word'],
		},
		links: {
			github:
				'https://github.com/AliakseiHryhoryeu/graduate-work-construction-engineer',
		},
	},
]
