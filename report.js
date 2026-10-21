const withStatus =(students)=>
{
    const arrStudents = [];
    for(const student of students){
        const student1 = {...student,status:student.grade>=56?"pass":"fail"}
            arrStudents.push(student1)
        }

        return arrStudents;
}

export default withStatus;