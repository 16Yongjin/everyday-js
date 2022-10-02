import { promisify } from 'util';
const exec = promisify(require('child_process').exec);

const $ = async (texts: string[], ...values: string[]) => {
  const command = texts.map((text, i) => text + (values[i] ?? '')).join('');
  const { stdout, stderr } = await exec(command);
  if (stderr) {
    throw new Error(stderr);
  }
  return stdout.trim();
};
