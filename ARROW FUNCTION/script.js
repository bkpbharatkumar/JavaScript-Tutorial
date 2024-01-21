// this used in current context

const user = {
    username: "bkp",
    price: "999",

    welcomeMessage: function (){
        console.log(`${this.username}, welcome to the website`);
        // console.log(this);
    }
}

user.welcomeMessage() // bkp, welcome to the website

user.username = "i.m.bkp"

user.welcomeMessage() // i.m.bkp, welcome to the website



