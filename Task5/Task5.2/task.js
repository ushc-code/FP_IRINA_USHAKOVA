
class Person {
    constructor(firstName, secondName) {
        this._firstName = firstName;
        this._secondName = secondName;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    get secondName() {
        return this._secondName;
    }

    set secondName(secondName) {
        this._secondName = secondName;
    }
}

class Client extends Person {
    constructor(firstName, secondName, tour) {
        super(firstName, secondName);
        this._tour = tour;
    }

}

class Tour {
    constructor(name, country, date) {
        this._name = name;
        this._country = country;
        this._date = date;
        this.clients = [];
    }

}

class TravelAgency {

    constructor() {
        this._tours = [];
        this._clients = [];
    }
    createTour(name, country, date) {
        const newTour = new Tour(name, country, date);
        this._tours.push(newTour);
    }

   deleteTour(name) {
        const idTour = this._tours.findIndex(tour => tour.name === name);
        if (idTour !== -1) {
            this._tours.splice(idTour, 1);
        }
    }

    editTour(oldName, newName, newCountry, newDate) {
        const tour = this._tours.find(tour => tour._name === oldName);
        if (tour) {
            tour._name = newName;
            tour._country = newCountry;
            tour._date = newDate;
        }
    }

    createClient(firstName, lastName, tour) {
        const newClient = new Client(firstName, lastName, tour);
        this._clients.push(newClient);
        tour.clients.push(newClient);
    }

    deleteClient(firstName, lastName) {
        const clientIndex = this._clients.findIndex(client => client._firstName === firstName && client._secondName === lastName);
        if (clientIndex !== -1) {
            const client = this._clients[clientIndex];
            client._tour.clients.splice(client._tour.clients.indexOf(client), 1);
            this._clients.splice(clientIndex, 1);
        }
    }

    editClient(oldFirstName, oldLastName, newFirstName, newLastName) {
        const client = this._clients.find(client => client.firstName === oldFirstName && client.lastName === oldLastName);
        if (client) {
            client.firstName = newFirstName;
            client.lastName = newLastName;
        }
    }
}


let person = new Person('Сергей', 'Сергеев');
person.firstName = 'Дмитрий';
console.log(person);

let agency = new TravelAgency();
agency.createTour("Сочи, все включено", "Россия","10.11.2023");
agency.createTour("Кемер, все включено", "Турция","10.11.2023");
console.log(JSON.stringify(agency._tours))
agency.editTour("Сочи, все включено", "Мадрид, все включено", "Испания", "20.11.2023");
console.log(agency._tours);

agency.createClient("Иван", "Иванов", agency._tours[0]);
agency.createClient("Петр", "Петров", agency._tours[0]);
agency.deleteClient("Иван", "Иванов");
console.log(agency._clients);


