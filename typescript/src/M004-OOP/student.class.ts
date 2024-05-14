// nochmal zur Erinnerung: Union type aus mehreren keys/typen mit pipe verknuepft
export type IStudent = Omit<IPerson, 'nickName' | 'color'> & {
    greet(): void;
};

export namespace Course {
    // implements IStudent ist optional, d. h. TSC erkennt von alleine, dass Student IStudent ist.
    export class StudentAlt implements IStudent {
        firstName: string;
        lastName: string;
        fullName: string;

        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = `${firstName} ${lastName}`;
        }

        greet(): void {
            throw new Error('Method not implemented.');
        }
    }

    export class Student {
        fullName: string;

        // verkuerzte Schreibweise: wir sparen uns die field deklaration
        // indem wir public oder private vor die parameter setzen
        constructor(public firstName: string, public lastName: string) {
            // this.fullName = 'Mein name ist ' + firstName + ' ' + lastName;
            this.fullName = `${firstName} ${lastName}`;
        }

        public greet() {
            console.log('Mein name ist ' + this.fullName);
        }

        toString() {
            return this.fullName;
        }
    }

    export class VirtualStudent extends Student {
        constructor(nickName: string) {
            super(nickName, '');
        }

        override greet(): void {
            console.warn('Hi ' + this.fullName);
        }
    }
}
