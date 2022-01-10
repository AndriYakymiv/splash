const logins = ['ma4fdrrj', 'sajhkjsdh', 'ppopo', 'uiuijiui'];
const loginToFind = 'ppopo';
let message = '';

for (let i = 0; i < logins.length; i += 1) {
    const login = logins[i];
    console.log(logins[i]);

    if (login === loginToFind) {
        message = `Client ${loginToFind} find.`;
        break;
    }
    message = `Client ${loginToFind} no find.`;
}
console.log(message);