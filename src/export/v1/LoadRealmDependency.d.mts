import type {RealmName} from "./RealmName.d.mts"
import type {LoadRealmDependencyResult} from "./LoadRealmDependencyResult.d.mts"

export type LoadRealmDependency = (
	project_root: string | "cli",
	realm_name: RealmName,
	dependency_name: string
) => Promise<LoadRealmDependencyResult>
