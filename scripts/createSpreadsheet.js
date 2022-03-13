const Sheets = require('@googleapis/sheets');
const Drive = require('@googleapis/drive');

const setupSheetsClient = async () => {
  const keysEnvVar = process.env['GCP_APP_CREDS'];

  if (!keysEnvVar) {
    throw new Error('[ERR] Unable to setup Sheets Client. $GCP_APP_CREDS environment variable was not found!');
  }
  const keys = JSON.parse(keysEnvVar);

  const auth = new Sheets.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  const authClient = auth.fromJSON(keys);

  const sheets = await Sheets.sheets({
    version: 'v4',
    auth: authClient
  });

  return sheets;
}

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

// const setupSpreadSheetHeaders = (sheetClient) => {
// }

const main = async () => {
  const sheets_client = await setupSheetsClient();

  const sheetRequest = {
    resource: {
      properties: {
        title: "2021 Council Emission Survey",
        locale: "en_AU",
        timeZone: "Australia/Melbourne",
      },
      sheets: [
        {
          properties: {
            title: "Survey Responses",
          },
          data: [
            {
              startRow: 0,
              startColumn: 0,
              rowData: [
                {
                  values: [
                    {
                      userEnteredValue: {
                        stringValue: "Timestamp"
                      }
                    },
                    {
                      userEnteredValue: {
                        stringValue: "TransactionId"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
  };

  const drive_client = await setupDriveClient();
  const permission = {
    'emailAddress': 'hanqing.tan@gmail.com',
    'role': 'reader',
    'type': 'user',
  }

  try {
    const sheetResponse = (await sheets_client.spreadsheets.create(sheetRequest)).data;
    const fileId = sheetResponse.spreadsheetId;

    console.log(JSON.stringify(sheetResponse, null, 2));
    const driveRequest = {
      resource: permission,
      fileId: fileId,
    };
    const driveResponse = await drive_client.permissions.create(driveRequest);
    // console.log(JSON.stringify(driveResponse, null, 2));

    // addHeader(sheets_client, fileId)
    getSheetData(fileId);
  } catch (err) {
    console.error(err);
  }
}

main();

const getSheetsData = async (params) => {
  const sheets_client = await setupSheetsClient();

  const data = await sheets_client.spreadsheets.values.get(params);
  return data;
}

const getSheetData = async (spreadsheetId) => {
  let params = {
    spreadsheetId: spreadsheetId,
    range: 'Survey Responses!A1:F10',
  };

  const data = await (await getSheetsData(params)).data.values;
  console.log(`spreadsheet data: ${JSON.stringify(data, null, 2)}`);
}

const addHeader = async (sheets_client, spreadsheetId) => {
  var params = {
    spreadsheetId: spreadsheetId,
    range: 'Survey Responses!A1',
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',

    resource: {
      values: [
        ["Timestamp"]
      ],
    },
  };

  try {
    await sheets_client.spreadsheets.values.append(params);
  } catch (err) {
    console.error(err);
  }
}