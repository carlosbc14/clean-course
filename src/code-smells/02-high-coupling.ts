(()=>{
    // No aplicando el principio de responsabilidad única
    type Gender = 'M'|'F';

    // Alto Acoplamiento

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date,
        ){}
    }

    class User extends Person {
        private lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastFolderOpen: string,
            email     : string,
            role      : string,
            name      : string,
            gender    : Gender,
            birthdate : Date,
        ){
            super(
                email,
                role,
                name,
                gender,
                birthdate
            )
        }
    }


    const userSettings = new UserSettings(
        '/urs/home',
        '/development',
        'fernando@google.com',
        'F',
        'Fernando',
        'M',
        new Date('1985-10-21')
    );

    console.log({ userSettings, credentials: userSettings.checkCredentials() });
    
})()
