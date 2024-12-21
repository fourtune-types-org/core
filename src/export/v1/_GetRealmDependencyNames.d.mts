import type {RealmName} from "./RealmName.d.mts"

export type _GetRealmDependencyNames = (
	project_root: string,
	realm_name: RealmName
) => Promise<string[]|false>
