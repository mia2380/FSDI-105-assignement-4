function displayUsers(usersArray){
    let tr="";
    for(let i=0;i<usersArray.length;i++){//travel the array of users
        let user = usersArray[i];//get the user
        tr=`
        <tr>
        <td>${user.email}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.age}</td>
        <td>${user.address}</td>
        <td>${user.phoneNumber}</td>
        </tr>
        `;//create the html row
        $("#users-table").append(tr);//append the user into the table  
    }
    
}

function init(){
    console.log("Listing users...");
    let users = readUsers();//getting the users from the local storage
    displayUsers(users);//display the users
}
window.onload=init;