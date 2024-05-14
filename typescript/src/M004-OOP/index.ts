import { Course, IStudent } from './student.class';

// StudentAlt implementiert IStudent explizit
const studentAlt: IStudent = new Course.StudentAlt('Jane', 'Doe');
studentAlt.greet();

// Student implementiert IStudent nicht, aber laesst sich trotzdem als IStudent definieren
const student: IStudent = new Course.Student('John', 'Doe');
student.greet();

const vcStudent = new Course.VirtualStudent('Jonny');
vcStudent.greet();
