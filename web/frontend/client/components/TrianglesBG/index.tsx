import React, { useEffect, useRef, useState } from 'react'
import { ISettings, ITriangle, IParticle } from './types'

import styles from './trianglesBG.module.scss'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { RootState } from 'src/store'

export const TrianglesBG = () => {
	const { bgColor, particleColor } = useTypedSelector((state: RootState) => {
		return {
			bgColor: state.theme.bgColor,
			particleColor: state.theme.particleColor,
		}
	})
	const settings: ISettings = {
		w: undefined,
		h: undefined,
		triangles: [],
		bgColor: bgColor,
		particleColor: particleColor,
		particleRadius: 0.6,
		particleMaxVelocity: 0.07,
		lineLength: 30,
		triangleLife: 40,
		trianglesCount: 40,
		thianglesParticles: 3,
	}
	const canvasRef = useRef<HTMLCanvasElement>(null)
	let ctx = canvasRef.current?.getContext('2d')
	interface ITriangleProps {
		settingsX: number
		settingsY: number
	}

	class Triangle implements ITriangle {
		public r: number
		public x: number
		public y: number
		public particles: IParticle[]
		public life: number
		constructor(props: ITriangleProps) {
			this.r = settings.lineLength / 2 // initial Radius                            			   Y |
			this.x = Math.random() * (props.settingsX - this.r - this.r + 1) + this.r // initial Radius center X       |
			this.y = Math.random() * (props.settingsY - this.r - this.r + 1) + this.r // initial Radius center Y       |_________ X
			// Math.random() * (max - min + 1) + min - made in order to point generation did not go beyond the visible area of the screen
			// max = width(or height) screen - radius
			// min = radius
			this.particles = []
			this.life =
				Math.random() * (0.3 - 0.1 + 1 + 0.3) * settings.triangleLife * 60
		}
		createParticles() {
			for (let i = 0; i < settings.thianglesParticles; i++) {
				const particle = new Particle({
					x: Math.cos(Math.random() * Math.PI * 2) * this.r + this.x,
					y: Math.sin(Math.random() * Math.PI * 2) * this.r + this.y,
					// (Math.random() * Math.PI * 2) - random angle
					// Math.cos(angle) * this.r - generate in random radius
					// + this.x (+ this.y) - initial offset
				})
				this.particles.push(particle)
			}
		}
		reCalculateLife() {
			if (settings.w != undefined && settings.h != undefined) {
				if (this.life < 1) {
					// triangles = triangles.filter(
					// 	item => (item === item.x) !== this.x && item.y != this.y
					// )
					// triangles.push
					this.r = settings.lineLength / 2 // initial Radius                            			   Y |
					this.x = Math.random() * (settings.w - this.r - this.r + 1) + this.r // initial Radius center X       |
					this.y = Math.random() * (settings.h - this.r - this.r + 1) + this.r // initial Radius center Y       |_________ X

					this.particles = []

					this.life = Math.random() * settings.triangleLife * 60
					this.createParticles()
				}
				this.life--
			}
		}
		reDraw() {
			if (ctx != null && ctx != undefined) {
				// Checking Position on the screen and control borders of the screen

				for (let i in this.particles) {
					this.particles[i]?.position()
				}
				// Checking Position on the screen and control distances between particles
				// this algorithm not ideal, but he compensated by slow animation
				for (let i in this.particles) {
					let changed = false
					// @ts-ignore
					const x1 = this.particles[i].x
					// @ts-ignore
					const y1 = this.particles[i].y

					for (let j in this.particles) {
						if (i === j) {
							continue
						}
						// @ts-ignore
						const lenghtX = Math.abs(x1 - this.particles[j].x)
						// @ts-ignore
						const lenghtY = Math.abs(y1 - this.particles[j].y)

						// @ts-ignore
						if (lenghtX + this.particles[i].velocityX >= settings.lineLength) {
							this.particles[i]?.changeVilocityX()
							this.particles[j]?.changeVilocityX()
							changed = true
							break
						}
						// @ts-ignore
						if (lenghtY + this.particles[i].velocityY >= settings.lineLength) {
							this.particles[i]?.changeVilocityY()
							this.particles[j]?.changeVilocityY()
							changed = true
							break
						}
					}
					if (changed) {
						break
					}
				} // Draw Particles
				for (let i in this.particles) {
					ctx.beginPath()
					ctx.arc(
						// @ts-ignore
						this.particles[i].x,
						// @ts-ignore
						this.particles[i].y,
						settings.particleRadius,
						0,
						Math.PI * 2
					)
					ctx.closePath()
					ctx.fillStyle = settings.particleColor
					ctx.fill()
				}

				// Draw Lines
				for (let i in this.particles) {
					for (let j in this.particles) {
						// @ts-ignore
						const x1 = this.particles[i].x
						// @ts-ignore
						const y1 = this.particles[i].y
						// @ts-ignore
						const x2 = this.particles[j].x
						// @ts-ignore
						const y2 = this.particles[j].y

						const length = Math.sqrt(
							Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
						)
						const opacity = 1 - length / settings.lineLength + 0.4
						ctx.lineWidth = 0.5
						// ctx.strokeStyle = 'rgba(255, 40, 40, ' + opacity + ')'
						ctx.strokeStyle = settings.particleColor
						ctx.beginPath()
						ctx.moveTo(x1, y1)
						ctx.lineTo(x2, y2)
						ctx.closePath()
						ctx.stroke()
					}
				}
			}
		}
	}

	interface IParticleProps {
		x: number
		y: number
	}

	const updateBgColor = () => {
		setTimeout(() => {
			settings.bgColor = bgColor
			updateBgColor()
		}, 1000)
	}
	class Particle implements IParticle {
		public x: number
		public y: number
		public velocityX: number = this.randomVelocity()
		public velocityY: number = this.randomVelocity()

		constructor(props: IParticleProps) {
			this.x = props.x
			this.y = props.y
		}
		randomVelocity() {
			return (
				Math.random() * (settings.particleMaxVelocity * 2) -
				settings.particleMaxVelocity
			)
		}
		position() {
			// Check X и Y
			// x + velocity > width screen
			// or
			// x + velocity < width screen
			// if something === true -> change velocity direction
			if (settings.w != undefined && settings.h != undefined) {
				if (
					this.x + this.velocityX > settings.w ||
					this.x + this.velocityX < 0
				) {
					this.velocityX *= -1
				}
				if (
					this.y + this.velocityY > settings.h ||
					this.y + this.velocityY < 0
				) {
					this.velocityY *= -1
				}
				// change x and y taking into account velocity
				this.x += this.velocityX
				this.y += this.velocityY
			}
		}
		changeVilocityX() {
			this.velocityX *= -1
			this.x += this.velocityX
		}
		changeVilocityY() {
			this.velocityY *= -1
			this.y += this.velocityY
		}
	}

	function reDrawBackground() {
		if (ctx != null && ctx != undefined) {
			if (settings.w != undefined && settings.h != undefined) {
				ctx.fillStyle = settings.bgColor

				updateBgColor()
				// updateCanvasBackground()
				ctx.fillRect(0, 0, settings.w, settings.h)
			}
		}
	}

	function reDrawTriangles() {
		for (var i in settings.triangles) {
			settings.triangles[i]?.reDraw()
			settings.triangles[i]?.reCalculateLife()
		}
	}
	function loop() {
		reDrawBackground()
		// reDrawParticles()
		reDrawTriangles()
		updateBgColor()
		requestAnimationFrame(loop)
	}
	function updateCanvasBackground() {
		settings.bgColor = bgColor
	}
	function init() {
		for (let i = 0; i < settings.trianglesCount; i++) {
			if (settings.w != undefined && settings.h != undefined) {
				const triangle = new Triangle({
					settingsX: settings.w,
					settingsY: settings.h,
				})
				triangle.createParticles()
				settings.triangles.push(triangle)
			}
		}
		loop()
	}

	const updateWidth = () => {
		setTimeout(() => {
			var scrollHeight = Math.max(
				document.body.scrollHeight,
				document.documentElement.scrollHeight,
				document.body.offsetHeight,
				document.documentElement.offsetHeight,
				document.body.clientHeight,
				document.documentElement.clientHeight
			)
			if (canvasRef.current?.width != undefined) {
				canvasRef.current.width = innerWidth
			}
			if (canvasRef.current?.height != undefined) {
				canvasRef.current.height = scrollHeight
			}
			settings.w = innerWidth
			settings.h = scrollHeight
		}, 500)
	}

	useEffect(() => {
		ctx = canvasRef.current?.getContext('2d')

		var scrollHeight = Math.max(
			document.body.scrollHeight,
			document.documentElement.scrollHeight,
			document.body.offsetHeight,
			document.documentElement.offsetHeight,
			document.body.clientHeight,
			document.documentElement.clientHeight
		)
		if (canvasRef.current?.width != undefined) {
			canvasRef.current.width = innerWidth
		}
		if (canvasRef.current?.height != undefined) {
			canvasRef.current.height = scrollHeight
		}
		settings.w = innerWidth
		settings.h = scrollHeight
		init()
		updateBgColor()
		updateWidth()
	}, [bgColor, particleColor])
	return <canvas className={styles.canvas} ref={canvasRef}></canvas>
}
