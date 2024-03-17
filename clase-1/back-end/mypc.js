const os = require("os");
const fs = require("fs");

const myPc = {};

function bytesToGB(bytes) {
  return bytes / Math.pow(1024, 3);
}

const getInfoPc = () => {
  myPc.pcname = os.hostname();
  myPc.totalram = `${bytesToGB(os.totalmem()).toFixed(2)} GB`;
  myPc.freeram = `${bytesToGB(os.freemem()).toFixed(2)} GB`;
  myPc.cpumodel = os.cpus()[0].model;
  myPc.cpuspeed = `${os.cpus()[0].speed} MHz`;
  myPc.opsystem = os.type();
};

getInfoPc();

console.log(myPc);

const info = JSON.stringify(myPc, null, 2);

fs.writeFile("My pc info.txt", info, (err) => {
  if (err) {
    console.error(err);
  } else {
    return;
  }
});
