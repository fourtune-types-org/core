export type FindProjectRootFromDirectory = (
	start_directory: string
) => Promise<string|false>
