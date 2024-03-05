//1.create your own resume for JSON format
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

//question 2
// for the given JSON iterate over all for loops
//for-in loop
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
for(var i in resume){
    console.log(i,resume[i]);
}



//2nd loop
//for loop iteration
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
for(var i = 0; i<resume.length; i++){
  console.log(resume[i]);
}


// 3.for of -loop iteration
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
for(var i of resume){
  console.log(i);
}


//4. for each-loop iteration
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

resume.forEach(i => {
  console.log(i)
});


