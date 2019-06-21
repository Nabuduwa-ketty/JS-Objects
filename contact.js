function Contact(first_name, second_name,phone_number,email,address1) {
this.first_name = first_name;
this.second_name = second_name;
this.phone_number = phone_number;
this.email = email;
this.address =address1
};

function Address(street,city,country){
 	this.street=street, 
 	this.city=city,
 	this.country=country,

 	this.introduce = function (){
	console.log("My name is" + this.street + this.country + "on number" + this.city+ "and email"+ this.email);
 };
}


myContactAddress = new Address('mitchele lane','mbale','uganda');
var myContact = new Contact('Nabuduwa', 'ketty','0782965050','nabuduwaketty@gmail.com', myContactAddress);


//let Contact = myContact();
//let address = myContactAddress();

//console.log(introduce);
//console.log(address.myContactAddress);

myContact.address.introduce();

