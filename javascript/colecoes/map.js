function getAdmins(map){
    let admins = [];

    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }

    return admins;
}

const usuarios = new Map();

usuarios.set('Pamela', 'Admin');
usuarios.set('Alef', 'Admin');
usuarios.set('Viviane', 'User');
usuarios.set('Jailson', 'User')

console.log(getAdmins(usuarios))