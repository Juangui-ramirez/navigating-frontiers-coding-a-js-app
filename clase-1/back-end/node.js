const os = require ('os')
const pcname = os.hostname()
const cpu = os.cpus()
const ram = os.totalmem()/1000000000
const freeram = os.freemem()/1000000000

const myPc = () =>{
    let pcSystem = {
        name: pcname,
        cpu: cpu[0].model,
        ram: ram,
        freeRam: freeram
    }

    console.log(pcSystem)
}

myPc();

