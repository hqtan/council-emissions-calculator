const Drive = require('@googleapis/drive');
const eachSeries = require('async/eachSeries');

const setupDriveClient = async () => {
  const keysEnvVar = process.env['GCP_APP_CREDS'];

  if (!keysEnvVar) {
    throw new Error('[ERR] Unable to setup Drive Client. $GCP_APP_CREDS environment variable was not found!');
  }
  const keys = JSON.parse(keysEnvVar);

  const auth = new Drive.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/drive.file']
  });

  const authClient = auth.fromJSON(keys);

  const drive = await Drive.drive({
    version: 'v3',
    auth: authClient
  });

  return drive;
}

const main = async () => {

  const drive_client = await setupDriveClient();

  const driveResponse = await drive_client.files.list();
  const file_list = driveResponse.data.files;

  console.log(JSON.stringify(file_list, null, 2));

  /* DELETE MULTIPLE SPREADSHEETS MATCHING A TITLE */
  // const spreadsheets = file_list
  //   .filter((f) => f.name === "2021 Council Emission Survey")
  //   .map((f) => f.id);

  // console.log(JSON.stringify(spreadsheets, null, 2));

  // eachSeries(
  //   spreadsheets,
  //   async (f) => drive_client.files.delete({fileId: f}),
  //   (err) => {if(err) {console.error(err)}}
  // );

  /* DELETE SINGLE SPREADSHEET */
  // const params = {
  //   fileId: "1PKM1Xq_Mql6jdwKfyIt5avVcD7gNW-pnzuA0F1Q1nlY"
  // };

  // const driveResponse = await drive_client.files.delete(params);
  // console.log(JSON.stringify(driveResponse, null, 2));

}

main().catch(console.error);
