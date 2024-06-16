const accessToken = process.env.GIT_TOKEN
const accountName = process.env.GIT_ACCOUNT
const repoName = process.env.GIT_REPO

type ResponseData = {
  name: string
  path: string
  type: string
}

export async function fetchFileContents(path: string): Promise<string | null> {
  const response = await fetchContents(path);
  if (response) {
    const text = await response.text();
    return text;
  }
  return null;
}


export async function fetchFiles(path?: string): Promise<[ResponseData]>{ 
  const response = await fetchContents(path);
  const array = await response?.json();
  return array?.filter((res: ResponseData) => {
    return res.type == 'file';
  }) || [];
}


export async function fetchDirectories(path?: string): Promise<[ResponseData] | null>{
  const response = await fetchContents(path);
  const array = await response?.json();
  return array?.filter((res: ResponseData) => {
    return res.type == 'dir';
  });
}


export async function fetchContents(path?: string) {
  const headers = new Headers();
  headers.set('Accept', 'application/vnd.github.v3.raw');
  headers.set('Authorization', `token ${accessToken}`);
  headers.set('User-Agent', 'the-portfolio');

  const repo = `https://api.github.com/repos/${accountName}/${repoName}`;
  const dir = '/contents/';
  let urlPath = repo + dir;
  if (path) {
    urlPath += path;
  }
  const url = new URL(urlPath);

  const response = await fetch(url.toString(), { headers });

  if (!response.ok || response.status !== 200) {
    if (response.status === 404) {
      return undefined; // File not found
    }
    throw new Error(`GitHub failed with ${response.status}: ${response.statusText}`);
  }

  return response;
}