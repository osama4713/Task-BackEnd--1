
const fs = require("fs");
const app = require("./app")

const addfunction = (id, Fname, Lname, age, city) => {

    const allData = laodData()

    const duplicatedDate = allData.filter((obj) => {
        return obj.id === id
    })

    if (duplicatedDate.length == 0) {
        allData.push({
            id: id,
            Fname: Fname,
            Lname: Lname,
            age: age,
            city: city,
        })

        SaveAllData(allData)

    } else {
        console.log("ERROR DUPLICATED ID")
    }
}

// /////////////////////////////////////////////////////////////////////////

const laodData = () => {
    try {
        const DataJson = fs.readFileSync("data.json").toString()
        return JSON.parse(DataJson)
    } catch {
        return []
    }
}

// /////////////////////////////////////////////////////////////////////////

const SaveAllData = (allData) => {

    const SaveAllDatajson = JSON.stringify(allData);

    fs.writeFileSync("data.json", SaveAllDatajson)
}

// /////////////////////////////////////////////////////////////////////////

const deleteFunction = (id) => {
    const allData = laodData()

    const dataToKeep = allData.filter((obj) => {
        return obj.id !== id
    })

    SaveAllData(dataToKeep)

    console.log("you have already deleted an Item")
}

// /////////////////////////////////////////////////////////////////////////

const readFunction = (id) => {

    const allData = laodData()

    const readalldata = allData.find((obj) => {
        return obj.id == id
    })

    if (readalldata) {
        console.log(readalldata.Fname, readalldata.Lname)
    } else {
        console.log("id needed NOT found")
    }
}

// /////////////////////////////////////////////////////////////////////////

const listFunction =() => {
    const allData = laodData()

    allData.forEach((obj) => {
        console.log(obj.Fname, obj.Lname , obj.age, obj.city)    
    });
    
}

// /////////////////////////////////////////////////////////////////////////


module.exports = {
    addfunction,
    deleteFunction,
    readFunction,
    listFunction
}