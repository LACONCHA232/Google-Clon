
// VARIABLES para la pesta;a de preferencias 
const PreferenciasText = document.querySelector('.preference');
const PreferenceTab = document.querySelector('.div-preference');
// Variables para la pesta;a de las cuentas o perfil
const CuentaText = document.querySelector('.Profile');
const CuentaTab = document.querySelector('.Tab-account')


// EVENT de pesta;a preferencias
PreferenciasText.addEventListener('click', tabPreference);
//Event de pesta;a Perfil
CuentaText.addEventListener('click', tabCuenta);

function tabPreference() {
    const isClosed = CuentaTab.classList.contains('inactive');
    if(!isClosed){
        CuentaTab.classList.add('inactive');
    }
    PreferenceTab.classList.toggle('inactive');
}

function tabCuenta() {
    const isClosed = PreferenceTab.classList.contains('inactive');
    if(!isClosed){
        PreferenceTab.classList.add('inactive');
    }

    CuentaTab.classList.toggle('inactive');
    
}

