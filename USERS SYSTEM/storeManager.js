function saveUser(newUser){
    let oldUsers = readUsers();
    oldUsers.push(newUser);//convert the object into a string
    let val = JSON.stringify(oldUsers);//JSON.stringify converts objects into strings
    localStorage.setItem('user', val);
}

function readUsers(){
    let users = localStorage.getItem('user');//getting users in the local storage
    console.log (users); 
    if(!users){ //Not users
        //if you get here the LS is empty
        return[];//creating empty array
    }else{
        //if you get here the LS has users
        let list = JSON.parse(users);//JSON.parse converts objects into strings
        console.log(list);
        return list;
    }
}
