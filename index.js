// Your code here

// ["Gray", "Worm", "Security", 1]

// employee[0]

function createEmployeeRecord(employee){
   let employeeRecord = { 
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: [],
 }
 return employeeRecord
}

function createEmployeeRecords(records){

   let employeeRecords = records.map((arrayEmpl) =>  createEmployeeRecord(arrayEmpl));

    return employeeRecords
}

// "YYYY-MM-DD HHMM"
function createTimeInEvent(employeeRecord, dateStamp){
   let [date, hour] = dateStamp.split(' ')

   

   let timeInObject = {
    type: 'TimeIn',
    hour: parseInt(hour),
    date, 
   }

   employeeRecord.timeInEvents.push(timeInObject)

   return employeeRecord
   
}

function createTimeOutEvent(employeeRecord, dateStamp){

   let [date, hour] = dateStamp.split(' ')

   let timeOutObject = {
    type: 'TimeOut',
    hour: parseInt(hour),
    date,
   }

   employeeRecord.timeOutEvents.push(timeOutObject)

   return employeeRecord
}
let cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000])

function hoursWorkedOnDate(employeeRecord, date){

   let timeInDate = employeeRecord.timeInEvents.find((e) => e.date === date)
   let timeOutDate = employeeRecord.timeOutEvents.find((e) => e.date === date)

   // if (date == timeInDate && date == timeOutDate){

      // let hourIn = employeeRecord.timeInEvents.hour
      // let hourOut = employeeRecord.timeOutEvents.hour
      // console.log('This is hourIn:', hourIn)
      // console.log('This is hourOut:', hourOut)
      // let grossTime = (hourOut - hourIn) / 100
      // console.log('This is gross time:', grossTime)
      
   // }

   let grossTime = (timeOutDate.hour - timeInDate.hour) / 100
   return grossTime 
}

function wagesEarnedOnDate(employeeRecord, date){

   let hoursWorked = hoursWorkedOnDate(employeeRecord, date)
   let payRate = employeeRecord.payPerHour

   return parseInt(hoursWorked * payRate)
}

function allWagesFor(employeeRecord){
let datesArray = employeeRecord.timeInEvents.map((element) => element.date)

   let dateWages = datesArray.reduce(function(total, date){

      return total + wagesEarnedOnDate(employeeRecord, date)
   },0)

   return dateWages
}

function calculatePayroll(employeeRecords){
   // let recordsArray = employeeRecords.employeeRecord.timeInEvents.map((element) => element.date)
   // let employeeRecord = employeeRecords.map((element) => element.employeeRecord)
   // let datesArray = employeeRecord.timeInEvent.map((element) => element.date)
   let allPayroll = employeeRecords.reduce(function(counter, employeeRecord){
      return counter + allWagesFor(employeeRecord)

   }, 0)


   return allPayroll

}