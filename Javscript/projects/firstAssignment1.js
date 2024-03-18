const Student = [
  {
    id: 1,
    fName: "Wasif",
    lName: "haider",
    age: 20,
    email: "wasif@gmail.com",
  },
  {
    id: 2,
    fName: "Taqi",
    lName: "Raza",
    age: 20,
    email: "taqi@gmail,com",
  },
  {
    id: 3,
    fName: "Ali",
    lName: "Raza",
    age: 20,
    email: "ali@gmail.com",
  },
  {
    id: 4,
    fName: "Ali",
    lName: "khan",
    age: 20,
    email: "aliKhan@gmail.com",
  },
];

const Qualification = [
  {
    id: 1,
    degree: "BSCS",
    institute: "UCP",
    year: 2020,
    studentId: 1,
  },
  {
    id: 2,
    degree: "BBA",
    institute: "UET",
    year: 2020,
    studentId: 2,
  },
  {
    id: 3,
    degree: "BSCS",
    institute: "UMT",
    year: 2020,
    studentId: 2,
  },
  {
    id: 4,
    degree: "BSCS",
    institute: "NUST",
    year: 2020,
    studentId: 4,
  },
];

const StudentEnrolledSubjects = {
  OPP: [
    {
      id: 1,
      studentId: 1,
      marksGain: 90,
      totalMarks: 100,
      grade: "A",
    },
    {
      id: 2,
      studentId: 2,
      marksGain: 30,
      totalMarks: 100,
      grade: "f",
    },
    {
      id: 3,
      studentId: 3,
      marksGain: 70,
      totalMarks: 100,
      grade: "B",
    },
    {
      id: 4,
      studentId: 4,
      marksGain: 90,
      totalMarks: 100,
      grade: "A",
    },
  ],
  DLD: [
    {
      id: 1,
      studentId: 1,
      marksGain: 90,
      totalMarks: 100,
      grade: "A",
    },
    {
      id: 2,
      studentId: 2,
      marksGain: 90,
      totalMarks: 100,
      grade: "A",
    },
    {
      id: 3,
      studentId: 3,
      marksGain: 20,
      totalMarks: 100,
      grade: "F",
    },
    {
      id: 4,
      studentId: 4,
      marksGain: 90,
      totalMarks: 100,
      grade: "F",
    },
  ],
  AI: [
    {
      id: 1,
      studentId: 1,
      marksGain: 90,
      totalMarks: 100,
      grade: "A",
    },
    {
      id: 2,
      studentId: 2,
      marksGain: 55,
      totalMarks: 100,
      grade: "C",
    },
    {
      id: 3,
      studentId: 3,
      marksGain: 90,
      totalMarks: 100,
      grade: "A",
    },
    {
      id: 4,
      studentId: 4,
      marksGain: 90,
      totalMarks: 100,
      grade: "A",
    },
  ],
};

// 1. Write a function that takes student id
// Function  GetStudentDataById(id)

// =>  Returns An objects
// {
//    id: 1,
//    fName: "Wasif",
//     lName: "haider",
//     age: 20,
//     email: "",
//     qualification: {
//       degree: "BSCS",
//       institute: "UCP",
//       year: 2020,
//     },
//     subjects: [ // it will be an array of objects of all enroll subjects
//       {
//         subject: "OOP", // Use Object.keys to get the subject name
//         marksGain: '90 / total marks', // it will be in string
//         grade: "A"
//       },
//     ],
//     totalMarks: 300, // it will be total marks of all subjects
//     totalObtainedMarks: 270, // it will be total marks of all subjects
//   }
// }

function GetStudentDataById(id) {
  const student = Student.find((student) => student.id === id);
  const qualification1 = Qualification.filter((item) => item.studentId === id); // array 
  const subjectKeys = Object.keys(StudentEnrolledSubjects); /// ['OOP', 'DLD', 'AI']
  let subjects = [];
  let totalMarks = 0;
  let totalObtainedMarks = 0;

  subjectKeys.forEach((subject) => {
    let subjectData = StudentEnrolledSubjects[subject]
      .filter((item) => item.studentId === id)
      .map((item) => {
        totalMarks += item.totalMarks;
        totalObtainedMarks += item.marksGain;
        return {
          subject,
          marksGain: `${item.marksGain} / ${item.totalMarks}`,
          grade: item.grade,
        };
      });
    subjects.push(...subjectData);
  });

  return {
    ...student,
    qualification: qualification1,
    subjects,
    totalMarks,
    totalObtainedMarks,
  };
}

const data = GetStudentDataById(2);

console.log(data);


