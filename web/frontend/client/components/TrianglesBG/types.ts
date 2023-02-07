export interface ISettings {
	w: number | undefined
	h: number | undefined
	triangles: ITriangle[]
	bgColor: string
	particleColor: string
	particleRadius: number
	particleMaxVelocity: number
	lineLength: number
	triangleLife: number
	trianglesCount: number
	thianglesParticles: number
}

export interface ITriangle {
	r: number
	x: number
	y: number
	particles: IParticle[]
	life: number
	createParticles(): void
	reCalculateLife(): void
	reDraw(): void
}
export interface IParticle {
	x: number
	y: number
	velocityX: number
	velocityY: number
	randomVelocity(): number
	position(): void
	changeVilocityX(): void
	changeVilocityY(): void
}
