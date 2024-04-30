const accessToken = process.env.GIT_TOKEN
const accountName = process.env.GIT_ACCOUNT
const repoName = process.env.GIT_REPO

export async function fetchMarkdownFile(fileName: string) {

  const headers = new Headers();
  headers.set('Accept', 'application/vnd.github.v3.raw');
  headers.set('Authorization', `token ${accessToken}`);
  headers.set('User-Agent', 'the-portfolio');

  const repo = `https://api.github.com/repos/${accountName}/${repoName}`;
  const dir = '/contents/projects/';
  const url = new URL(repo + dir + fileName);
  const response = await fetch(url, { headers });

  if (!response.ok || response.status !== 200) {
    if (response.status === 404) {
      return undefined; // File not found
    }
    throw Error(`Fetching Markdown file from GitHub failed with ${response.status}: ${response.statusText}`);
  }
  return response.text();
}


export async function fetchContents(path?: string) {
  const headers = new Headers();
  headers.set('Accept', 'application/vnd.github.v3.raw');
  headers.set('Authorization', `token ${accessToken}`);
  headers.set('User-Agent', 'the-portfolio');

  const repo = `https://api.github.com/repos/${accountName}/${repoName}`;
  const dir = '/contents/';
  var urlPath = repo + dir
  if (path) {
    urlPath += path
  }
  const url = new URL(urlPath);
  const response = await fetch(url, { headers });

  if (!response.ok || response.status !== 200) {
    if (response.status === 404) {
      return undefined; // File not found
    }
    throw Error(`Fetching Markdown file from GitHub failed with ${response.status}: ${response.statusText}`);
  }

  return response
}