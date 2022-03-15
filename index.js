import { parseStringPromise } from 'xml2js';
import fs from 'fs';
import path from 'path';

const getPrettyTime = function getPrettyTimeFromHRTime(start) {
  return process.hrtime(start)[0] + (process.hrtime(start)[1] / 1e9);
};

const readAppleData = async function readAppleHealthData() {
  const start = process.hrtime();
  console.log('reading file');

  let appleHealthXML = await fs.promises.readFile(path.resolve('./apple_health_export/export.xml'));

  console.log(`done reading after ${getPrettyTime(start)}s, now parsing file`);

  let appleHealthData = await parseStringPromise(appleHealthXML);

  console.log(`done parsing after ${getPrettyTime(start)}s, now printing keys`);

  console.log(`done after ${getPrettyTime(start)}s`);
  return;
};

readAppleData()
  .catch((error) => {
    console.error(error);
  });