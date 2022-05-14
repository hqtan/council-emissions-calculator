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

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const surveyFields = [
  "timestamp",
  "transactionId",
  "workMode",
  "numDaysWorked",
  "wfhDays",
  "onsiteDays",
  "travelMethods",
  "travelMethodByDay",
  "carpoolPassengerCount",
  "km",
  "department",
  "incentive"
];

const setHeader = (headers=surveyFields) => {

  const processField = (field) => {
    let result = ""
    switch (field) {
      case "timestamp":
        result = "Timestamp";
        break;
      case "transactionId":
        result = "TransactionId";
        break;
      case "workMode":
        result = "Work Arrangement";
        break;
      case "numDaysWorked":
        result = "Number of Work Days";
        break;
      case "wfhDays":
        result = "WFH Days";
        break;
      case "onsiteDays":
        result = "Onsite Days";
        break;
      case "travelMethods":
        result = "Travel Methods";
        break;
      case "travelMethodByDay":
        result = daysOfWeek.map((day) => { return `${day} Travel Method`});
        break;
      case "carpoolPassengerCount":
        result = "Carpool Passenger Count";
        break;
      case "km":
        result = "Distance";
        break;
      case "department":
        result = "Department";
        break;
      case "incentive":
        result = "Incentive Feedback";
        break;
      default:
        result = field;
    }
    return result;
  };

  let headerFields = surveyFields.reduce(
    (prev, curr) => prev.concat(processField(curr)),
    []
  );

  const rowDataVals = headerFields.map((field) => { return {
    userEnteredValue: {
      stringValue: field
    }
  }});

  return rowDataVals;
}

const main = async () => {
  const sheets_client = await setupSheetsClient();

  const sheetRequest = {
    resource: {
      properties: {
        title: "2022 Council Emission Survey",
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
              rowData: [{ values: setHeader() }]
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

    // getSheetData(fileId);
  } catch (err) {
    console.error(err);
  }
}

main();

// const getSheetsData = async (params) => {
//   const sheets_client = await setupSheetsClient();

//   const data = await sheets_client.spreadsheets.values.get(params);
//   return data;
// }

// const getSheetData = async (spreadsheetId) => {
//   let params = {
//     spreadsheetId: spreadsheetId,
//     range: 'Survey Responses!A1:F10',
//   };

//   const data = await (await getSheetsData(params)).data.values;
//   console.log(`spreadsheet data: ${JSON.stringify(data, null, 2)}`);
// }