export * from './github.server'

const accessToken = process.env.GIT_TOKEN
const accountName = process.env.GIT_ACCOUNT
const repoName = process.env.GIT_REPO

export { accessToken, accountName, repoName }