'use strict';
void function () {

    function Student(name, lastName, birthYear) {
        this.name = name;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.marks = new Array(10);
        this.attandance = new Array(10);

        this.lessonIndex = 0;
        this.avgMark = 0;
        this.avgAttd = 0;

        this.marksQty = 0;
    }

    Student.prototype.present = function () {
        if( this.lessonIndex > 9) return console.log('Full indexes')

        this.attandance[this.lessonIndex] = true;
        this.lessonIndex += 1;
    }

    Student.prototype.absent = function () {
        if( this.lessonIndex > 9) return console.log('Full indexes')

        this.attandance[this.lessonIndex] = false;
        this.lessonIndex += 1;
    }

    Student.prototype.mark = function (mark) {
        const localIndex = this.lessonIndex - 1;

        if(!this.attandance[localIndex]) return console.warn('You cannot do that');
        this.marks[localIndex] = mark;
        this.marksQty += 1;
    }

    Student.prototype.calcSummary = function (arr, divider = this.lessonIndex) {
        const sumOfItems = arr.reduce((acc, item) => {
            const localItem = Number(item);
            isNaN(localItem) ? acc += 0 : acc += localItem;
            return acc;
        }, 0)

        return sumOfItems / divider;
    }

    Student.prototype.summary = function () {
        this.avgAttd = this.calcSummary(this.attandance);
        this.avgMark = this.calcSummary(this.marks, this.marksQty);

        return {
            avgMark: this.avgMark,
            avgAttd: this.avgAttd
        }
    }



    let student = new Student('Vlad', 'Sha', 1997)

    student.present();
    student.mark(10);

    student.absent();

    student.absent();

    student.absent();

    student.absent();

    student.present();
    student.mark(10);

    student.present();
    student.mark(10);

    student.present();
    student.mark(10);


    console.log(student.summary())
    console.log(student)
}();
