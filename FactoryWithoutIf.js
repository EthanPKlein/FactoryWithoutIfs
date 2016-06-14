function Student() {
    this.greet = function() {
        return "Hello, I'm a student.";
    }
}

function Teacher() {
    this.greet = function() {
        return "Hello, I'm a teacher.";
    }
}

// probably not ideal since Student and Teacher will get made even when not used
function Factory() {

    this.student = new Student();
    this.teacher = new Teacher();

    this.create = function(type) {
        return this[type];
    }

}

// better, only carete Teacher or Student when needed
function Factory2() {

    this.teacher = function() {
            return new Teacher();
        },

        this.student = function() {
            return new Student();
        },

        this.create = function(type) {
            return this[type]();
        }

}

var factory = new Factory();
var a = factory.create("teacher");
var b = factory.create("student");
console.log(a.greet()); // "Hello, I'm a teacher.";
console.log(b.greet()); // "Hello, I'm a student."

var factory2 = new Factory2();
var c = factory2.create("teacher");
var d = factory2.create("student");
console.log(c.greet()); // "Hello, I'm a teacher.";
console.log(d.greet()); // "Hello, I'm a student."