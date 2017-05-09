// Make student reports

function makeStudentsReport(data) {
  var array = data.map(function(student) {
    return student.name + ': ' + student.grade;
  });
  return array;
}

// Enroll in summer school

function enrollInSummerSchool(students) {
  return students.map(function(student) {
    student.status = 'In Summer school';
    return student;
  });
}

// Find by id

function findById(items, idNum) {
 return items.find(function(item) {
   return item.id === idNum;
 });
}

// Validate object keys

function validateKeys(object, expectedKeys) {
 if (Object.keys(object).length !== expectedKeys.length) {
   return false;
 }
 expectedKeys.forEach(function(key) {
     if (!(object.key)) {
       return false;
     }
 });
 return true;
}

// Todo list factory

function makeToDos(owner, toDos) {
  return {
    owner: owner,
    toDos: toDos,
    generateHtml: function() {
      var ul = '<ul>';
      this.toDos.forEach(function(li) {
        ul += '<li>' + li + '</li>';
      });
      return ul + '</ul>';
    }
  };
}
