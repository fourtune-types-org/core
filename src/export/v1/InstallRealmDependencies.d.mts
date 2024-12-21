import type {RealmName} from "./RealmName.d.mts"
import type {DependenciesToInstall} from "./DependenciesToInstall.d.mts"
import type {InstallRealmDependenciesOptions} from "./InstallRealmDependenciesOptions.d.mts"

export type InstallRealmDependencies = (
	project_root: string | "cli",
	realm_name: RealmName,
	dependencies: DependenciesToInstall,
	options?: InstallRealmDependenciesOptions
) => Promise<undefined>
