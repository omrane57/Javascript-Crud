class Student{
   static  id=0;
    static allStudents=[]
    constructor(id,firstName,lastName,fullName,dateOfBirth,age,semesterCGPAArray,finalCGPA,semesterGrades,finalGrade,yearOfEnrollment,yearOfPassing,numberOfYearsToGraduate){
        this.id=id
        this.firstName=firstName;
        this.lastName=lastName;
        this.fullName=fullName;
        this.dateOfBirth=dateOfBirth;
        this.age=age;
        this.semesterCGPAArray=semesterCGPAArray;
        this.finalCGPA=finalCGPA;
        this.semesterGrades=semesterGrades;
        this.finalGrade=finalGrade;
        this.yearOfEnrollment=yearOfEnrollment;
        this.yearOfPassing=yearOfPassing;
        this.numberOfYearsToGraduate=numberOfYearsToGraduate;
        
    }
     static newStudent(firstName,lastName,dateOfBirth,semesterCGPAArray,yearOfEnrollment,yearOfPassing){
        // string Validation   
        if(typeof firstName!="string"||typeof lastName!="string"||typeof dateOfBirth!="string"||typeof yearOfEnrollment!="string"||typeof yearOfPassing!="string"){
        
            return null
           }

        //    name validation
           let fullName=firstName+" "+lastName;
        //    dateOfBirth validation
           let dob=new Date(dateOfBirth)
           if(dob=="Invalid Date"){
            
            return null
           }
        //    age validation
           let age=new Date().getFullYear()-dob.getFullYear();
            
            
             if(semesterCGPAArray.length!=8){
                return null
             }
             let semesterGrades=[]
            for(let k=0;k<semesterCGPAArray.length;k++){
              
        // semesterCGPA vaidation
                if(!(semesterCGPAArray[k]>=0 && semesterCGPAArray[k]<=10)){
                    
                    return null
                   }
         //    pushing semesterCGPA into semesterArray
               
           
           if(semesterCGPAArray[k]>=0 && semesterCGPAArray[k] < 5){
            semesterGrades.push("F")
           }
           else if(semesterCGPAArray[k]>=5 && semesterCGPAArray[k] < 6){
            semesterGrades.push("D")
           }
            else if(semesterCGPAArray[k]>=6 && semesterCGPAArray[k] < 7){
            semesterGrades.push("C")
           }
            else if(semesterCGPAArray[k]>=7 && semesterCGPAArray[k] < 8){
            semesterGrades.push("B")
           }
            else if(semesterCGPAArray[k]>=8 && semesterCGPAArray[k] < 9){
            semesterGrades.push("A")
           }
            else if(semesterCGPAArray[k]>=9 && semesterCGPAArray[k] < 10){
            semesterGrades.push("O")

           }
           else{
            semesterGrades.push("O+")
           }
            }
          
       
           
        
        //    calculating final CGPA
           let sumFinalCGPA=0;
           for(let i=0;i<semesterCGPAArray.length;i++){
            sumFinalCGPA=sumFinalCGPA+semesterCGPAArray[i];
           }
           let finalCGPA=sumFinalCGPA/semesterCGPAArray.length;
        //    calculating final Grades
           let finalGrade=""
           if(finalCGPA>=0 && finalCGPA < 5){
            finalGrade="F"           }
           else if(finalCGPA>=5 && finalCGPA < 6){
            finalGrade="D"         }
           else if(finalCGPA>=6 && finalCGPA < 7){
            finalGrade="C"          }
           else if(finalCGPA>=7 && finalCGPA < 8){
            finalGrade="B"        }
           else if(finalCGPA>=8 && finalCGPA < 9){
            finalGrade="A"           }
           else if(finalCGPA>=9 && finalCGPA < 10){
            finalGrade="O"
           }
           else {
            finalGrade="O+"
           }
        //    validation of passingYear and enrollmentYear
          let passingYear=new Date(yearOfPassing);
          let enrollmentYear=new Date(yearOfEnrollment)
          if(passingYear=="Invalid Date"||enrollmentYear=="Invalid Date"){
           
            return null
          }
        //   calculating number of years required to become graduate
         let numberOfYearsToGraduate=passingYear.getFullYear()-enrollmentYear.getFullYear()
         
        //  returning complete object
         let student=new Student(Student.id++,firstName,lastName,fullName,dob,age,semesterCGPAArray,finalCGPA,semesterGrades,finalGrade,enrollmentYear.getFullYear(),passingYear.getFullYear(),numberOfYearsToGraduate);
         Student.allStudents.push(student);
         return student;
          

    
        }
//******************************lists of all functions************************************
        // getting all students details
       static #getAllStudent(){
            return Student.allStudents

        }
        // getting student id
       static getId(id){
            for(let j=0;j<Student.allStudents.length;j++){
                if(Student.allStudents[j].id===id){
                    return Student.allStudents[j].id;
                }
            }
        }
        // getting student details
        static getStudentById(id){
            for(let j=0;j<Student.allStudents.length;j++){
                if(Student.allStudents[j].id===id){
                    return [Student.allStudents[j],j];
                }
            }
        }
        // delete function
        static #deleteByStudentId(id){
            let idNo=Student.getId(id);
            Student.allStudents.splice(idNo,1)

        }
       
        #updateFirstName(newValue){
            this.firstName=newValue;
            this.#updateFullName()
        }
        #updateLastName(newValue){
            this.lastName=newValue;
            this.#updateFullName()
        }
        #updateFullName(){
            this.fullName=this.firstName+" "+this.lastName;
        }
        #updateDateOfBirth(newValue){
            let latestValue=new Date(newValue)
            if(latestValue==="Invalid Date"){
                return null
            }
            this.dateOfBirth=latestValue;
            
           this.#updateAge(new Date().getFullYear()-latestValue.getFullYear());
        }
        #updateAge(newValue){
            this.age=newValue;
        }
        #updateNumberOfYearsToGraduate(){
            this.numberOfYearsToGraduate=this.yearOfPassing-this.yearOfEnrollment;
        }
        #updateYearOfEnrollment(newValue){
            let latestValue=new Date(newValue)
            if(latestValue==="Invalid Date"){
                return null
            }
            this.yearOfEnrollment=latestValue.getFullYear();
            this.#updateNumberOfYearsToGraduate()
          
        }
        #updateYearOfPassing(newValue){
            let latestValue=new Date(newValue)
            if(latestValue==="Invalid Date"){
                return null
            }
            this.yearOfPassing=latestValue.getFullYear();
            this.#updateNumberOfYearsToGraduate()
          
        }
        #updateSemesterCGPAArray(newValue){
            for(let i=0;i<newValue.length;i++){
                this.semesterCGPAArray[i]=newValue[i]
            }
            this.#updateFinalCGPA()
            this.#updateFinalGrade()
            this.#updateSemesterGrades()
        }
        #updateSemesterGrades(){
               for(let k=0;k<this.semesterCGPAArray.length;k++){
              
        // semesterCGPA vaidation
                if(!(this.semesterCGPAArray[k]>=0 && this.semesterCGPAArray[k]<=10)){
                    
                    return null
                   }
         //    pushing semesterCGPA into semesterArray
               
           
           if(this.semesterCGPAArray[k]>=0 && this.semesterCGPAArray[k] < 5){
            this.semesterGrades[k]="F"
           }
           else if(this.semesterCGPAArray[k]>=5 && this.semesterCGPAArray[k] < 6){
            this.semesterGrades[k]="D"
           }
            else if(this.semesterCGPAArray[k]>=6 && this.semesterCGPAArray[k] < 7){
            this.semesterGrades[k]="C"
           }
            else if(this.semesterCGPAArray[k]>=7 && this.semesterCGPAArray[k] < 8){
            this.semesterGrades[k]="B"
           }
            else if(this.semesterCGPAArray[k]>=8 && this.semesterCGPAArray[k] < 9){
            this.semesterGrades[k]="A"
           }
            else if(this.semesterCGPAArray[k]>=9 && this.semesterCGPAArray[k] < 10){
            this.semesterGrades[k]="O"

           }
           else{
            this.semesterGrades[k]="O+"
           }
            }
          

        }
    #updateFinalCGPA(){
        let sumFinalCGPA=0;
        for(let i=0;i<this.semesterCGPAArray.length;i++){
            sumFinalCGPA=sumFinalCGPA+this.semesterCGPAArray[i];
           }
            this.finalCGPA=sumFinalCGPA/this.semesterCGPAArray.length;
    }
    #updateFinalGrade(){

           if(this.finalCGPA>=0 && this.finalCGPA < 5){
            this.finalGrade="F"           }
           else if(this.finalCGPA>=5 && this.finalCGPA < 6){
            this.finalGrade="D"         }
           else if(this.finalCGPA>=6 && this.finalCGPA < 7){
            this.finalGrade="C"          }
           else if(this.finalCGPA>=7 && this.finalCGPA < 8){
            this.finalGrade="B"        }
           else if(this.finalCGPA>=8 && this.finalCGPA < 9){
            this.finalGrade="A"           }
           else if(this.finalCGPA>=9 && this.finalCGPA < 10){
            this.finalGrade="O"
           }
           else {
            this.finalGrade="O+"
           }

    }

      
    //    menudriven update function
       static updateStudent(parameter,newValue,id){
            let [studentToBeUpdated,index]=Student.getStudentById(id);
            switch(parameter){
                case"firstName":{
                    if(typeof newValue!="string"){
                        return null
                    }
                    studentToBeUpdated.#updateFirstName(newValue)
                    break;
                }
                case"lastName":{
                    if(typeof newValue!="string"){
                        return null
                    }
                    studentToBeUpdated.#updateLastName(newValue)
                    break;
                }
                case"dateOfBirth":{
                    if(typeof newValue!="string"){
                        return null
                    }
                    studentToBeUpdated.#updateDateOfBirth(newValue)
                    break;
                }
                case"yearOfEnrollment":{
                    if(typeof newValue!="string"){
                        return null
                    }
                    studentToBeUpdated.#updateYearOfEnrollment(newValue)
                    break;

                }
                case"yearOfPassing":{
                    if(typeof newValue!="string"){
                        return null
                    }
                    studentToBeUpdated.#updateYearOfPassing(newValue)
                    break;

                }
                case"semesterCGPAArray":{
                    if(newValue.length!=8){
                        return null
                     }
                     studentToBeUpdated.#updateSemesterCGPAArray(newValue)
                    
                }

            }
        }


}




