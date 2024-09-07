const button = document.querySelector('#btn');
const ul = document.querySelector('ul');

button.addEventListener('click', function (e) {
    
    // if (ul.classList.contains('sm')) {
    //     ul.classList.remove('sm');

    // }
    // else{
    //     ul.classList.remove('links')
    //     ul.classList.add('sm');
    // }

    ul.classList.toggle('sm');
    
})