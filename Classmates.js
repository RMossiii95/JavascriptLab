let students = [
{
    "Name": "Richard",
    "Hometown": "Canton, MI",
    "Favorite Food": "Sushi"
},

{
    "Name": "Andy",
    "Hometown": "Berkeley, MI",
    "Favorite Food": "French Fries"
},

{
    "Name": "Phillip",
    "Hometown": "Canton, MI",
    "Favorite Food": "Fried Chicken"
},

{
    "Name": "Cassly",
    "Hometown": "Detroit, MI",
    "Favorite Food": "Steak"
}
]

function GetStudents(){
    let student = GetStudents(students);
    StudentInfo(student);
}

function GetStudent(list){
    let studentSearch = prompt("Please select a student");
    if(studentSearch >= 0 && studentSearch < list.length)
    {
        return list[studentSearch];
    }
    else 
    {
        console.log("That input was invalid");
    }
}
function MoreInfo(info)
{
    let studentInfo = prompt("Please select an option to learn more!");
    if(StudentInfo == "hometown")
    {
        console.log(info.Name + "hometown is" + info.Hometown);
    }
    else if(studentInfo == "favorite food") 
    {
        console.log(info.Name + "Favorite food is " + info.FavoriteFood);
    }
    else
    {
        console.log("Input was invalid");
    }
}