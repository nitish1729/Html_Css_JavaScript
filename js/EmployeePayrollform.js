class EmployeePayrollData{
    get id()
    {
        return this.id;
     }
     set id(id)
     {
        this._id = id;
     }
get name()
{
    return this.name;
}
    set name(name)
    {
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
    if(nameRegex.test(name))
    this._name = name;
    else throw "Name is Incorrect";
}

get profilePic(){return this._ProfilePic;}
set profilePic(profilePic){
this._ProfilePic = profilePic;
}
get gender() {return this._gender;}
set gender(gender)
{
    this._gender = gender;
}
get department () {return this._department}
set department(department)
{
    this._department = department;
}
get salary() {return this._salary;}
set salary(salary){
    this._salary = salary;
}
get note() {return this._note;}
set note(note)
{
    this._note = note;
}
get startDate() {
    return this._startDate;
}
set startDate(startDate)
{
    this._startDate = startDate;
}

// method
  toString()
 {
    const options = {year: "numeric", month: "long", day:"numeric"};

    const empDate = !this.startDate ? "undefined":
                this.startDate.toLocalDateString("en-us",options);
                return "id=" + this.id + ", name =" +this.name +", gender=" + this.gender + ", salary= "+ this.salry + ",startDate=" + ", note= " +this.note;
 }
 
}
window.addEventListener("DOMContentLoaded", (event) =>
{const name = document.querySelector("#name")} );
const textError = document.querySelector(".text-error");
name.addEventListener ("input" ,function(){
    if(name.value.length == 0) 
    {
        textError.textContent = "";
        return;
    }
    try
    {
     (new EmployeePayrollData().name = naem.value);
     textError.textContent = "";
    }
    catch(e)
    {
        textError.textContent = e;
    }
});
const salry = document.querySelector("#salary");
const output = document.querySelector("#.Salary-Output");
output.textContent = salary.value;
salary.addEventListener("input", function()
{
output.textContent = salry.value;

});
