import type {RealmName} from "./RealmName.d.mts"

export type _DependenciesFileExport = {
	created_by_core_version: number
	realm_name: RealmName
	platform: string
	dependencies: {
		name: string
		module: any
		version: string
		isolated: boolean
	}[]
}
