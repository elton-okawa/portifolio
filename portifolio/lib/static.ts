import fs from 'fs';
import path from 'path';

const staticDirectory = path.join(process.cwd(), '..', 'static');

export function listStaticData(folder: string): object[] {
  const directory = path.join(staticDirectory, folder);
  const fileNames = fs.readdirSync(directory);

  return fileNames.map((fileName) => {
    const filepath = path.join(directory, fileName);
    const data = fs.readFileSync(filepath);
    return JSON.parse(data.toString());
  });
}
