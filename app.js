//easy
function exercise(type){
    function execute(){
        return `Today's exercise: ${type}`
    }
    return execute
}
var run = exercise('running');
console.log(run());
var swim = exercise('swimming');
console.log(swim());

//medium
var sharePizza = cutPizza(8)
function cutPizza(numSlices){
    return function(numPeople){
        return `Each person gets ${numSlices/numPeople} slices of pizza`;
    }
}
console.log(sharePizza(2));
console.log(sharePizza(3));

//hard
function clo(){
    let pii = {
        name:'John Doe',
        ssn: 5556668181
    }
    return {
        getName: function (){
            return `Name: ${pii.name}`
        }
    }
}
let c = clo();
console.log(c.getName())

//very hard
class person {
    constructor(name, job, age){
        this.name = name;
        this.job = job;
        this.age = age;
        this.exercise = function (){
            console.log('Running is fun!-said no one ever')
        }
        this.fetchJob = function(){
            console.log(`${name} is a ${job}`)
        }
    }
}
class programmer extends person{
    constructor(name, job, age, languages, busy=true){
        super(name,job,age)
        this.languages = languages;
        this.busy = busy;
    }
    completeTask(){
        this.busy = false;
    }
    acceptTask(){
        this.busy = true;
    }
    offerNewTask(){
        if (this.busy === true){
            console.log(`${this.name} can't accept any new tasks right now.`)
        } else {
            console.log(`${this.name} would love to take on a new responsibility`)
        }
    }
    learnLanguage(){
        for (let i = 0; i < arguments.length; i++){
            this.languages.push(arguments[i]);
        }
    }
    listLanguages(){
        console.log(`${this.name} knows the following languages: ${this.languages.join(", ")}`)
    }
}
let programmer1 = new programmer('Debora', 'Student', 25, ['CSS', 'Javascript', 'Html', 'Node'], false)
let programmer2 = new programmer('Mary', 'Associate', 27, ['Java', 'C++', 'C#'], true)

programmer1.fetchJob();
programmer1.offerNewTask();
programmer1.learnLanguage('React');
programmer1.listLanguages();

programmer2.fetchJob();
programmer2.offerNewTask();
programmer2.learnLanguage('Javascript');
programmer2.listLanguages();

/* console:
Today's exercise: running
Today's exercise: swimming
Each person gets 4 slices of pizza
Each person gets 2.6666666666666665 slices of pizza
Name: John Doe
Debora is a Student
Debora would love to take on a new responsibility
Debora knows the following languages: CSS, Javascript, Html, Node, React
Mary is a Associate
Mary can't accept any new tasks right now.
Mary knows the following languages: Java, C++, C#, Javascript */