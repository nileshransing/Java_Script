class student{
   id;
   name;
   branch;
   marks;
   constructor(){
    this.id =45;
   }

accept(n,b,m){
    this.id=i;
     this.name=n;
    this.branch=b;
    this.marks=m;
}
display(){
    console.log("ID =",this.id);
    console.log("NAME =",this.name);
    console.log("BRANCH =",this.branch);
    console.log("MARKS =",this.marks);
}
}
let student1 = new student();
student1.accept("Nilesh","ENTC",74.70);
student1.display();