
import fs from 'fs/promises';


//Note: Make sure to put the utility function in a file ending with .server to exclude the Node.js lib imports from the client bundle.

export async function readPost(fileName: string) {
    //   const file = await fs.readFile(`../../app/resources/${fileName}`);
    // const files = await fs.readdir(`../wapp-portfolio/app/resources`)
    // console.log('files', files)
    const file = await fs.readFile(`../wapp-portfolio/app/resources/${fileName}`)
    return file.toString();
}