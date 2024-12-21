export type DependencyMapEntry = {
	version: string
	isolated?: boolean
} & ({
	import_kind?: "default"
} | {
	import_kind: "star"
} | {
	import_kind: "named"
	imports: {
		[name: string]: string|undefined
	}
})
