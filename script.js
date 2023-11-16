
// VARIABLES
const PreferenciasText = document.querySelector('.preference');
const PreferenceTab = document.querySelector('.div-preference');


// EVENTS
PreferenciasText.addEventListener('click', tabPreference);


function tabPreference() {
    if(PreferenceTab.classList.contains('inactive')){
        PreferenceTab.classList.remove('inactive');
    }else{
        PreferenceTab.classList.add('inactive');
    }
}


