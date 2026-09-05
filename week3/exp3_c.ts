class Hospital {
    readonly hospitalCode: string;
    patientName: string;
    disease: string;
    static hospitalType: string = "Multi Speciality";

    constructor(hospitalCode: string, patientName: string, disease: string) {
        this.hospitalCode = hospitalCode;
        this.patientName = patientName;
        this.disease = disease;
    }

    public displayDetails(): void {
        console.log("Hospital Code: " + this.hospitalCode);
        console.log("Patient Name: " + this.patientName);
        console.log("Disease: " + this.disease);
        console.log("Hospital Type: " + Hospital.hospitalType);
    }
}

const patient1 = new Hospital("HSP101", "Rahul", "Fever");
const patient2 = new Hospital("HSP102", "Ananya", "Asthma");

patient1.displayDetails();
console.log("----------------------");
patient2.displayDetails();

console.log("----------------------");

// Accessing static property
console.log("Hospital Type: " + Hospital.hospitalType);

// Accessing readonly property
console.log("Hospital Code: " + patient1.hospitalCode);

// Not Allowed
// patient1.hospitalCode = "HSP200";   // Error: Cannot assign to readonly property