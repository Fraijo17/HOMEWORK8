const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee{
    constructor (name, id, email, github){
        super(name, id, email)
        this.github = github
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return "Engineer"
    }
}
module.exports = Engineer



// const person = new Engineer("abraham", 6, "fraijo@hot.com" "fraijo")
// person.getGithub()  