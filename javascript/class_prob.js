class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data of website");
    }
}

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        console.log("new data");
    }
}

let student = new User("yakhsi", "yakshi12@gmail.com");
let admin1 = new Admin("raju", "raju@gamil.com"); 