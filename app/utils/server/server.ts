export async function fetchMarkdownFile(fileName: string) {
    const accessToken = '<your-github-access-token>';
    const accountName = '<your-github-account-name>';
    const repoName = '<your-github-repo-name>';
    const headers = new Headers();
    headers.set('Accept', 'application/vnd.github.v3.raw');
    headers.set('Authorization', `token ${accessToken}`);
    headers.set('User-Agent', '<your-app-name>');
  
    const repo = `https://api.github.com/repos/${accountName}/${repoName}`;
    const dir = '/contents/articles/';
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