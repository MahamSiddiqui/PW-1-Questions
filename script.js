let students = [
    {
        name: "Amna",
        gender: "f",
        dob: new Date("02-04-1990"),
        address: {
            ilaqa: "Gulistan-e-Johar",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 47114
        },
        phoneNo: "0331-2324243",
        admissionTestScore: 56,
        hasInternet: true,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: false
    },
    {
        name: "Hadia",
        gender: "f",
        dob: new Date("05-15-1984"),
        address: {
            ilaqa: "Lyari",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 75660
        },
        phoneNo: "0345-3452953",
        admissionTestScore: 48,
        hasInternet: false,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: true
    },
    {
        name: "Ahmed",
        gender: "m",
        dob: new Date("06-27-2002"),
        address: {
            ilaqa: "University Road",
            city: "Quetta",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0333-0124325",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Fariha",
        gender: "f",
        dob: new Date("09-13-1998"),
        address: {
            ilaqa: "University Road",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0331-9432532",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Abdullah",
        gender: "m",
        dob: new Date("01-24-1972"),
        address: {
            ilaqa: "Bazar Colony",
            city: "Lahore",
            country: "Pakistan",
            postalCode: 32212
        },
        phoneNo: "0345-9912121",
        admissionTestScore: 33,
        hasInternet: false,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: true
    }
];
//Q1
// for (let i = 0; i < students.length; i++) {
//     console.log("Name: " + students[i].name);

//     console.log("Gender: " + students[i].gender);

//     console.log("City: " + students[i].address.city);
//     console.log("Score: " + students[i].admissionTestScore + "marks");
//     console.log("");
// }

//Q2
//   console.log(student.name[0]);
//   
// for(let i = 0; i< students.length; i++){
//     if (students[i].gender ==="f"){
//         console.log(students[i].name);
//     }
// }

//Q3
// for (let i = 0; i < students.length; i++) {
//     if (students[i].gender === "m") {
//         console.log(students[i].name);
//     }
// }

//Q4
// for (let i = 0; i < students.length; i++) {
//     if (students[i].admissionTestScore >= 50) {
//         console.log(students[i].name);
//     }
// }

//Q5
// for (let i = 0; i < students.length; i++) {
//     if (students[i].hasInternet === true && students[i].address.city === "Karachi") {
//         console.log(students[i].name);
//     }
// }
//Q6
// for (let i = 0; i < students.length; i++) {
//         console.log(students[i].name + "'s address: " + students[i].address.ilaqa + " in "  + students[i].address.city + "," + students[i].address.country);    
// }

//Q7
// for (let i = 0; i < students.length; i++) {
//     if (students[i].phoneNo.charAt(2) === "3" && students[i].phoneNo < "8") {
//         console.log(students[i].name + ":" + students[i].phoneNo);
//     }
// }

//Q8
// let groupA=[];
// let groupB=[];

// for (let i = 0; i < students.length; i++) {
//     if (students[i].hasJob == true || students[i].hasSchoolBefore == true) {
//         groupB.push(students[i].name);   
//     } else {
//         groupA.push(students[i].name);

//     }
// }
// console.log("Groub B : " + groupB);
// console.log("Groub A : " + groupA);

// function bnaya hai taky repeation na ho coding ki.
function calculateAge(dateOfBirth) {
    for (let i = 0; i < students.length; i++) {

        let dobYear = students[i].dob.getFullYear();
        let todayYear = new Date().getFullYear();
        let age = todayYear - dobYear;


        let dobMonth = students[i].dob.getMonth();
        let todayMonth = new Date().getMonth();
        if (todayMonth < dobMonth) {
            age--;
        } else if (todayMonth === dobMonth) {
            let todayDate = new Date().getDate();
            let dobDate = students[i].dob.getDate();
            if (todayDate < dobDate) {
                age--;
            }
        }
        console.log(`${students[i].name}'s age is ${age}  year`);
    }
}
//Q9
for (let i = 0; i < students.length; i++) {
    let age = calculateAge(students[i].dob);
}
console.log(`${students[i].name}'s age is ${age}  year`);


//Q10
//this method uses in to dermine the highest tempr and length etc.

// let oldestStudents = students[0];

// for (let i = 1; i < students.length; i++) {

//     if (students[i].age > oldestStudents.age) {
//         oldestStudents = students[i];
//     }
// }
// console.log(oldestStudents.name);


