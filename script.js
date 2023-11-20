
// VARIABLES para la pesta;a de preferencias 
const $PreferenciasText = document.querySelector('.preference');
const $PreferenceTab = document.querySelector('.div-preference');
// Variables para la pesta;a de las cuentas o perfil
const $CuentaText = document.querySelector('.Profile');
const $CuentaTab = document.querySelector('.Tab-account')
const $Cuentas = document.querySelector('.accounts');
const $ShowAccounts = document.querySelector('.show-accounts');
const $Accounts =document.querySelector('.accounts');


$PreferenciasText.addEventListener('click', tabPreference);
$CuentaText.addEventListener('click', tabCuenta);
$ShowAccounts.addEventListener('click', MostrarPerfiles);




function tabPreference() {
    const isClosed = $CuentaTab.classList.contains('inactive');
    if(!isClosed){
        $CuentaTab.classList.add('inactive');
    }
    $PreferenceTab.classList.toggle('inactive');
}

function tabCuenta() {
    const isClosed = $PreferenceTab.classList.contains('inactive');
    if(!isClosed){
        $PreferenceTab.classList.add('inactive');
    }

    $CuentaTab.classList.toggle('inactive');
}

function MostrarPerfiles(){
    $Accounts.classList.toggle('inactive');
}

const Cuentas_perfiles = [];
Cuentas_perfiles.push({
    nombre: 'Diana De la concha',
    correo: 'dianadelaconcha77@gmail.com',
});
Cuentas_perfiles.push({
    nombre: 'Logan 07',
    correo: 'logandiazdelaconcha@gmail.com',
});


function Perfiles(arr){
    for (profile of arr){
        const Profile = document.createElement('button');
        Profile.classList.add('profiles');

        const texto = document.createElement('p');
        texto.innerText = profile.nombre;
        const text = document.createElement('p');
        text.innerText = profile.correo;


        Profile.appendChild(texto);
        Profile.appendChild(text);
        $Cuentas.appendChild(Profile);
    }
}
Perfiles(Cuentas_perfiles);


