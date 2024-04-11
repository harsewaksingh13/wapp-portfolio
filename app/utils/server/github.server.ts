export async function fetchMarkdownFile(fileName: string) {
    const accessToken = '<your access token>';
    const accountName = 'harsewaksingh13';
    const repoName = 'portfolio';
    const headers = new Headers();
    headers.set('Accept', 'application/vnd.github.v3.raw');
    headers.set('Authorization', `token ${accessToken}`);
    headers.set('User-Agent', 'the-portfolio');

    const repo = `https://api.github.com/repos/${accountName}/${repoName}`;
    const dir = '/contents/contents/';
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