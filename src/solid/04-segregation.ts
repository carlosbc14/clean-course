interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface RunningBird {
    run(): void;
}

interface SwimmingBird {
    swim(): void;
}


class Tucan implements Bird, FlyingBird {
    public fly(): void {
        console.log('El tucán vuela');
    }
    
    public eat(): void {
        console.log('El tucán nada');
    }
}

class Humminbird implements Bird, FlyingBird {
    public fly(): void {
        console.log('El colibrí vuela');
    }
    
    public eat(): void {
        console.log('El colibrí come néctar');
    }
}

class Ostrich implements Bird, RunningBird {
    public eat(): void {
        console.log('El avestruz come semillas');
    }
    
    public run(): void {
        console.log('El avestruz corre rápido');
    }
}

class Penguin implements Bird, SwimmingBird {
    public eat(): void {
        console.log('El pingüino come pescado');
    }

    public swim(): void {
        console.log('El pingüino nada');
    }
}
