// @flow
import _glob from 'glob';

export default async function glob (pattern: string, options?: any) {
  return new Promise((resolve, reject) => {
    const args = [pattern];

    if (options) {
      args.push(options);
    }

    args.push((err, files) => {
      if (err) {
        return reject(err);
      }
      resolve(files);
    });

    _glob.apply(_glob, args);
  });
}
