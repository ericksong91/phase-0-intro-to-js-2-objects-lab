// Write your solution in this file!
//Declare Object
const employee = {
    name: "value1",
    streetAddress: "value2",
  };

//Functions down here

  function updateEmployeeWithKeyAndValue(object, key, value){
    const updatedObject = {...object};

    updatedObject[key] = value;

    return updatedObject;

  }

  updateEmployeeWithKeyAndValue(employee, "name", "Sam");
  updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");

  //console.log(employee)

  function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    object[key] = value;

    return object;

  }

  destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Sam");
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");

  function deleteFromEmployeeByKey(object, key, value){

    const newEmployee = {...object};

    newEmployee[key] = value;

    delete newEmployee.key;

    return newEmployee;
  }

  deleteFromEmployeeByKey(employee, "name", "value1");
  
  function destructivelyDeleteFromEmployeeByKey(object, key, value){

    object[key] = value;

    delete object.key;

    return object;
  }

  destructivelyDeleteFromEmployeeByKey(employee, "name", "value1");