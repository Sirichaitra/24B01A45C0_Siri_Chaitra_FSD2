class StudentInfo {
    studentName: string;
    semester: number;
    marks: number;

    constructor(studentName: string, semester: number, marks?: number) {
        this.studentName = studentName;
        this.semester = semester;
        this.marks = marks ?? 85;
    }

    public grade(): string {
        if (this.marks >= 0 && this.marks < 60)
            return "Needs Improvement";
        else if (this.marks >= 60 && this.marks < 85)
            return "Very Good";
        else
            return "Outstanding";
    }

    public displayDetails(): void {
        console.log("Student Name: " + this.studentName);
        console.log("Semester: " + this.semester);
        console.log("Marks: " + this.marks);
        console.log("Grade: " + this.grade());
    }
}

const student1 = new StudentInfo("Siri Chaitra", 5, 92);
const student2 = new StudentInfo("Harshitha", 3);

student1.displayDetails();
console.log("------------------------");
student2.displayDetails();