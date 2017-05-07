var bio = {
	"name":"Girum",
	"role": "GIS developer",
	"contacts":[{
		"mobile": "650-555-5555",
		"email": "girumatakilti@yahoo.com",
		"github": "https://github.com/metsehaf",
		"location": "Toronto"
	}],
	"welcomeMessage":"Welcome to my biography website",
	"skills":[
	"GIS","Android development", "Front-End dev","python", "Java" 
	],
	"image":"images/girum.jpg"
}
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.image);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedGitHub = HTMLcontactGeneric.replace("%contact%","github").replace("%data%",bio.contacts[contact].github);
		$("#topContacts").append(formattedMobile,formattedEmail,formattedGitHub);
	};
};
var education = {
	"schools" : [
	{
		"name" : "University of Toronto",
		"location" : "Toronto, Ontario",
		"degree" : "Bachelor of Arts", 
		"majors" : "GIS and Urban Studies",
		"dates" : "2013 - 2016",
		"url" : "http://www.georgebrown.ca/"
	},
	{
		"name" : "George Brown College",
		"location" : "Toronto, Ontario",
		"degree" : "General Arts and Science diploma", 
		"majors" : "Arts and Science",
		"dates" : "2012 - 2013",
		"url" : "https://www.utoronto.ca/"
	}],
	"onlineCourses" : [
	{
		"title" : "Intro to HTML and CSS",
		"school" : "Udacity - Free Online Classes & Nanodegrees",
		"dates" : "2016 - 2017",
		"url" : "https://classroom.udacity.com/courses/ud304"
	},
	{
		"title" : "JavaScript basics",
		"school" : "Udacity - Free Online Classes & Nanodegrees",
		"dates" : "2017",
		"url" : "https://classroom.udacity.com/courses/ud804"}
	]
};
education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor,onlineTitle,onlineSchool,onlineDates,onlineURL);
		for(courses in education.onlineCourses){
			$("#education-entry:last").append(HTMLonlineClasses);
		var onlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[courses].title);
		var onlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[courses].school);
		var onlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[courses].dates);
		var onlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[courses].url);
		$("#education-entry:last").append(onlineTitle + onlineSchool,onlineDates,onlineURL);
		}
	}
};

var work = {
	"jobs":[
	{
	"employer": "Sharp Bus lines",
	"title":"Route coordinator",
	"location": "77 crockford boulevard Sharp bus lines ",
	"dates": "2016 till Present",
	"desciption": "Geocoding school and digitizing land marks using ArcGIS and google map. Creating web portals and geocoding schools to make it convenient for dispatchers to easily get information."
	},
	{
	"employer": "U of Toronto",
	"title":"GIS analyst",
	"location":[ "27 King's College Circle","100 St George Street"],
	"dates": "2015",
	"desciption": "Mapping Flood and Epidemic shocks after  collecting data points using a survey. \Preparation of a map book detailing our results and a vivid spatial pattern found during our analysis. Spatial query and overlooking of the database of the over all project. Performing queries on data acquired from Survey using ARCGIS built in SQL"
	}
 ]
}
function displayWork(){
for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace
	("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace
	("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer +
	formattedTitle;

	$(".work-entry:last").append(
		formattedEmployerTitle);
	var formattedLocation = HTMLworkLocation.replace
	("%data%", work.jobs[job].location);
		
	
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].desciption);
	$(".work-entry:last").append(
	formattedDescription);

}
}

var projects = {
	"projects":[
	{
	"title":"Parlap project",
	"dates":"2015",
	"desciption":"Resilience and Vulnerability of River-Side Communities to Environmental Shocks in Loreto and Ucayali Regions, Peruvian Amazon",
	"images":["images/flooddec1950.jpg","images/flooddec1960.jpg"]
	},
	{
	"title":"Flood Risk in Lower Humber Watershed",
	"dates":"2015",
	"desciption":"flood risk to lower income population in the GTA caused by the Humber River flood in 2013",
	"images":["images/humber.jpg", "images/studyarea.jpg"],	
	}
	]
}
projects.display = function(){
for(project in projects.projects){
	$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace
	("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);
	
	var formattedDates = HTMLprojectDates.replace
	("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);
	
	var formattedDescription = HTMLprojectDescription.replace
	("%data%", projects.projects[project].desciption);
	$(".project-entry:last").append(formattedDescription);
	
	if (projects.projects[project].images.length > 0){
	for(image in projects.projects[project].images){
		   var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
		   $(".project-entry:last").append(formattedImage);
	   }	
	}
 }
}
function inName(name){
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase(); 

	return newName;
};
projects.display();
bio.display();
displayWork();
education.display();
$("#mapDiv").append(googleMap);


