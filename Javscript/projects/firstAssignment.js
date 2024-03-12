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
    studentId: 3,
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
  const filteredStudent = Student.find((student) => student.id === id); // Find Returns an object
  // console.log(filteredStudent);
  const studentQualification = Qualification.filter(
    (qualification) => qualification.studentId === id
  ); // Filter will always return an array
  // console.log(studentQualification);
  const obj = { ...filteredStudent, qualification: studentQualification[0] };
  // console.log(obj);
  const studentSubjects = Object.keys(StudentEnrolledSubjects);

  // console.log(studentSubjects);
  let studentSub = [];
  let totalMarks = 0;
  let totalObtainedMarks = 0;

  studentSubjects.forEach((subject) => {
    // studentSub.push(
    let sub = StudentEnrolledSubjects[subject]
      .filter((marks) => marks.studentId === id)
      .map((marks, ind) => {
        // console.log(marks, "marks");
        totalMarks += marks.totalMarks;
        totalObtainedMarks += marks.marksGain;
        return {
          subject: subject,
          marksGain: `${marks.marksGain} / ${marks.totalMarks}`,
          grade: marks.grade,
        };
      });

    studentSub.push(...sub);
  });
  // console.log(studentSub);
  return {
    ...obj,
    subjects: studentSub,
    totalMarks: totalMarks,
    totalObtainedMarks: totalObtainedMarks,
  };
}

const data = GetStudentDataById(1);

console.log(data);
