// // var ele = document.createElement("div");
// // ele.innerHTML = "this is div"
// // document.body.append(ele);
// //question 1
// // for the given JSON iterate over all for loops
// //for-in loop
// var resume = {
//     "name": "MURALI PRASATH S",
//     "label": "WEB DEVELOPER",
//     "email": "muraliprasath49964@gmail.com",
//     "phone":"+91-6382530704",
//     "SUMMARY": ["Aiming to be a unique part of an organization through my updated knowledge, skills in Design & Analysis",
// "and do the smart work for the consistent growth of the company."],
//     "LOCATION": {
//       "address": "6/218,K.Pungampalayam",
//       "postalCode": "641104",
//       "city": "METTUPALAYAM",
//       "District":"Coimbatore",
//       "State":"Tamilnadu",
     
//     },
//   "EDUCATION": {
//     "institution": "Bharathiyar University",
//     "college":"KG College of Arts and Science",
//     "Degree": "Bsc.cs",
//     "Duration": "2019-2022",
//     "cgpa": "7.9",
    
//   },
//   "CERTIFICATES": {
//     "Addon Certification":[
//     "HTML",
//     "PHP",
//     "C++",]
//   },
//   "SKILLS": {
//     "Technical Skill": "C , C++ , HTML , SQL",
//     "keywords":[
//       "Autodesk Inventor,",
//       "Catia V5,",
//       "Ansys work bench,"
//     ]
//   },
//   "LANGUAGES": {
//     "language": "Tamil , English , Kannada",
//   },
//   "INTEREST": {
//     "name": "Watching movie",
//     "keywords": 
//       "based on true storeies",
//       "name": "Cricket",
//       "keywords": 
//         "During Weekends",  
    
//   },
//   "REFERENCE": {
//     "name": "Murali",
//     "reference": "Praveen",
//     "phone":"+91-6379601781",
//   },
// };
// for(var i in resume){
//     console.log(i,resume[i]);
// }



// //2nd loop
// //for loop iteration
// var resume = {
//     "name": "MURALI PRASATH S",
//     "label": "WEB DEVELOPER",
//     "email": "muraliprasath49964@gmail.com",
//     "phone":"+91-6382530704",
//     "SUMMARY": ["Aiming to be a unique part of an organization through my updated knowledge, skills in Design & Analysis",
// "and do the smart work for the consistent growth of the company."],
//     "LOCATION": {
//       "address": "6/218,K.Pungampalayam",
//       "postalCode": "641104",
//       "city": "METTUPALAYAM",
//       "District":"Coimbatore",
//       "State":"Tamilnadu",
     
//     },
//   "EDUCATION": {
//     "institution": "Bharathiyar University",
//     "college":"KG College of Arts and Science",
//     "Degree": "Bsc.cs",
//     "Duration": "2019-2022",
//     "cgpa": "7.9",
    
//   },
//   "CERTIFICATES": {
//     "Addon Certification":[
//     "HTML",
//     "PHP",
//     "C++",]
//   },
//   "SKILLS": {
//     "Technical Skill": "C , C++ , HTML , SQL",
//     "keywords":[
//       "Autodesk Inventor,",
//       "Catia V5,",
//       "Ansys work bench,"
//     ]
//   },
//   "LANGUAGES": {
//     "language": "Tamil , English , Kannada",
//   },
//   "INTEREST": {
//     "name": "Watching movie",
//     "keywords": 
//       "based on true storeies",
//       "name": "Cricket",
//       "keywords": 
//         "During Weekends",  
    
//   },
//   "REFERENCE": {
//     "name": "Murali",
//     "reference": "Praveen",
//     "phone":"+91-6379601781",
//   },
// };
// for(var i = 0; i<resume.length; i++){
//   console.log(resume[i]);
// }


// // 3.for of -loop iteration

// const num = [10,20,30,40,50];

// for(var newnum of num){
//   console.log(newnum);
// }
// //output
// //10
// //20
// //30
// //40
// //50

// //4. for each-loop iteration

// let str = [1,2,3,4,5];
// str.forEach(element => {
//   console.log(element)
// });
// //output
// //1
// //2
// //3
// //4
// //5


//question 2
//2.create your own resume for JSON format
var resume = {
    "name": "MURALI PRASATH S",
    "label": "WEB DEVELOPER",
    "email": "muraliprasath49964@gmail.com",
    "phone":"+91-6382530704",
    "SUMMARY": ["Aiming to be a unique part of an organization through my updated knowledge, skills in Design & Analysis",
"and do the smart work for the consistent growth of the company."],
    "LOCATION": {
      "address": "6/218,K.Pungampalayam",
      "postalCode": "641104",
      "city": "METTUPALAYAM",
      "District":"Coimbatore",
      "State":"Tamilnadu",
     
    },
  "EDUCATION": {
    "institution": "Bharathiyar University",
    "college":"KG College of Arts and Science",
    "Degree": "Bsc.cs",
    "Duration": "2019-2022",
    "cgpa": "7.9",
    
  },
  "CERTIFICATES": {
    "Addon Certification":[
    "HTML",
    "PHP",
    "C++",]
  },
  "SKILLS": {
    "Technical Skill": "C , C++ , HTML , SQL",
    "keywords":[
      "Autodesk Inventor,",
      "Catia V5,",
      "Ansys work bench,"
    ]
  },
  "LANGUAGES": {
    "language": "Tamil , English , Kannada",
  },
  "INTEREST": {
    "name": "Watching movie",
    "keywords": 
      "based on true storeies",
      "name": "Cricket",
      "keywords": 
        "During Weekends",  
    
  },
  "REFERENCE": {
    "name": "Murali",
    "reference": "Praveen",
    "phone":"+91-6379601781",
  },
};
console.log(resume);

//output
/*
{
name: 'SELVAM M',
label: 'Design Engineer',
email: 'selvamurugaiah100@gmail.com',
phone: '+91-8122371359',
SUMMARY: [
  'Aiming to be a unique part of an organization through my updated knowledge, skills in Design & Analysis',
  'and do the smart work for the consistent growth of the company.'
],
LOCATION: {
  address: '2/164 South street, kakkanallur',
  postalCode: '627418',
  city: 'Ambasamudram',
  District: 'Tirunelveli',
  State: 'Tamilnadu'
},
'PROFILE SNAPSHOT ': {
  'A goal-oriented and dedicated professional with over three years of commendable success in': [
    'Product Design & Development',
    'Effective Analysis',
    'Business Excellence',
    'Reporting & Documentation',
    'Team Management'
  ]
},
EDUCATION: {
  institution: 'Anna University',
  college: 'Dr.Sivanthi Aditanar college of Engineering',
  Degree: 'BE',
  Duration: '2015-2019',
  cgpa: '7.8'
},
'SOFTWARE PROFICIENCY': {
  '➢ Drafting Software ': 'Auto CAD 2018',
  '➢ Modelling Software ': 'Autodesk Inventor, Space Gass 12.6, Catia V5, Unigraphics NX',
  '➢ Analyzing Software ': 'Ansys work bench, Nastran'
},
CERTIFICATES: {
  silambam: 'in state level',
  date: '10-7-2006',
  kabadi: 'in zonal level'
},
SKILLS: {
  name: 'Drafting Software and Modelling software ',
  keywords: [ 'Autodesk Inventor,', 'Catia V5,', 'Ansys work bench,' ]
},
LANGUAGES: { language: 'Tamil , English' },
INTEREST: { name: 'Watching movie', keywords: 'based on true storeies' },
REFERENCE: [
  {
    name: 'selvam',
    reference: 'parmasivan',
    phone: '+91-7708991995'
  }
]
}
*/
