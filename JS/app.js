
const allData = require("./allData")
const yargs = require("yargs");

yargs.command({
    command: "add",
    describe: "to sdd an item",
    builder: {
        FName: {
            describe: "is this is the first name description in add common",
            demandOption: true,
            type: "string"
        },

        LName: {
            describe: "Is this is the last name description in add common",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        allData.addfunction(x.id, x.FName, x.LName, x.age, x.city)
    }
})

yargs.command({
    command: "delete",
    describe: "to delete an item",
    handler: (x) => {
        allData.deleteFunction(x.id)
    }
})


yargs.command({
    command: "read" ,
    describe: "To Read Data" ,
    builder:{
        id:{
            describe:"this is ID description and read command",
            demandOption: true,
            type: "string"
        }
    },
    handler:(x) =>{
        allData.readFunction(x.id)
    }
})

yargs.command({
    command: "list",
    describe: "show list data",
    handler:() => {
        allData.listFunction()
    }
})


yargs.parse();
