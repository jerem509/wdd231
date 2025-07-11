//=================== DISPLAY COURSES ====================

//------------------ Course Details ------------------------
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]
// get the div element with the id 'course-list'
const courseList = document.querySelector('#course-list');

//get the cse, wdd, all buttons in the html
const allBtn = document.querySelector('#all-btn');
const cseBtn = document.querySelector('#cse-btn');
const wddBtn = document.querySelector('#wdd-btn');

function showCourse(courseType) {
    courseList.innerHTML = '';
    for (const course of courseType) {
        const newBtn = document.createElement('button');
        const courseCode = course.subject + course.number;
        newBtn.value = courseCode;
        newBtn.textContent = courseCode;
        newBtn.classList.add('course-button');
        if (course.completed === true) {
            newBtn.style.backgroundColor = '#24bba9';
        }
        else {
            newBtn.style.backgroundColor = '#grey';
        }
        courseList.appendChild(newBtn);
    }
}
//-------------------------- Show course on click -----------------------------
allBtn.addEventListener('click', () => {
    showCourse(courses);
    getSumOfCourses(courses);

});

cseBtn.addEventListener('click', () => {
    const coursesArr = courses.filter(course => course.subject[0] === 'C');
    showCourse(coursesArr);
    getSumOfCourses(coursesArr);
});

wddBtn.addEventListener('click', () => {
    const coursArr = courses.filter(course => course.subject[0] === 'W');
    showCourse(coursArr);
    getSumOfCourses(coursArr);
});

//-------------------------- Function to Show the total number of courses -----------------------------
function getSumOfCourses(arr) {
    const totalId = document.querySelector('#total');
    total.style.display = 'block';
    const elt = arr.map(item => item.credits);
    console.log(elt);
    const totalCourses = elt.reduce((total, eltItem) => total + eltItem);
    totalId.textContent = `The total number of credits is ${totalCourses}.`;
}


