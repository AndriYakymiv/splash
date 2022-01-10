const logins = ['ma4fdrrj', 'sajhkjsdh', 'ppopo', 'uiuijiui'];
const loginToFind = 'ppopo';

const message = logins.includes(loginToFind)
    ? `Login ${loginToFind} find.`
    : `Login ${loginToFind} no find.`
console.log(message);