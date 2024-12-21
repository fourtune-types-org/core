import type {GetVersion} from "./GetVersion.d.mts"
import type {GetExactVersion} from "./GetExactVersion.d.mts"
import type {SetEnableDebugPrint} from "./SetEnableDebugPrint.d.mts"
import type {LoadRealmDependency} from "./LoadRealmDependency.d.mts"
import type {_GetRealmDependencyNames} from "./_GetRealmDependencyNames.d.mts"
import type {InstallRealmDependencies} from "./InstallRealmDependencies.d.mts"
import type {FindProjectRootFromDirectory} from "./FindProjectRootFromDirectory.d.mts"

export type DefaultExportObject = {
	getVersion: GetVersion,
	getExactVersion: GetExactVersion,
	setEnableDebugPrint: SetEnableDebugPrint,
	loadRealmDependency: LoadRealmDependency,
	// todo: consider removing it again
	_getRealmDependencyNames: _GetRealmDependencyNames,
	installRealmDependencies: InstallRealmDependencies,
	findProjectRootFromDirectory: FindProjectRootFromDirectory
}
