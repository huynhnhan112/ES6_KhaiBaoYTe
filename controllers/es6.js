
document.querySelector('.signup-form .actions ul li:last-child a').onclick = () => {

    let arrInput = document.querySelectorAll('form input, form select');
    let user = {};
    for(let i = 0; i < arrInput.length; i++){
        let input = arrInput[i];
        let {name, value} = input;

        user = {...user, [name]: value};
    }

    console.log('user', user);
    console.log('arrInput', arrInput);

    let content = ``;
    for(let key in user){
        content += `<tr><td>${key}</td> <td>${user[key]}</td></tr>`;
    }

    document.querySelector('.donate-us').innerHTML = content;
}

