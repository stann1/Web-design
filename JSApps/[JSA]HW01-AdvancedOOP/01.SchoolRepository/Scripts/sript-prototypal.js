﻿var Person = {
    init: function (fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    },
    introduce: function () {
        return "Name: " + this.fname + " " + this.lname + ", age: " + this.age;
    }
};

var SchoolClass = {
    init: function (name, capacity, students, formTeacher) {
        this.name = name;
        this.capacity = capacity;
        this.students = students;
        this.formTeacher = formTeacher;
    },
    getStudents: function () {
        var list = "";
        for (var i = 0; i < this.students.length; i++) {
            list += this.students[i].getName();
            list += (i == this.students.length - 1 ? "" : ", ");
        }
        return list;
    },
    introduce: function () {
        return "Class name: " + this.name + ", capacity: " + this.capacity + ", students: " + this.getStudents() + ", teacher: " + this.formTeacher.getName();
    }
};

var School = {
    init: function (name, town, classes) {
        this.name = name;
        this.town = town;
        this.classes = classes;
    },
    getClasses: function () {
        var list = "";
        for (var i = 0; i < this.classes.length; i++) {
            list += this.classes[i].name;
            list += (i == this.classes.length - 1 ? "" : ", ");
        }
        return list;
    },
    introduce: function () {
        return "School name: " + this.name + ", town: " + this.town + ", classes: " + this.getClasses();
    }
};

//Children classes
var Student = Person.extend({
    init: function (fname, lname, age, grade) {
        this._super = Object.create(this._super);
        this._super.init(fname, lname, age);
        this.grade = grade;
    },
    getName: function () {
        return this._super.fname + " " + this._super.lname;
    },
    introduce: function () {
        return this._super.introduce() + ", grade: " + this.grade;
    }
});

var Teacher = Person.extend({
    init: function (fname, lname, age, speciality) {
        this._super = Object.create(this._super);
        this._super.init(fname, lname, age);
        this.speciality = speciality;
    },
    getName: function () {
        return this._super.fname + " " + this._super.lname;
    },
    introduce: function () {
        return this._super.introduce() + ", speciality: " + this.speciality;
    }
});