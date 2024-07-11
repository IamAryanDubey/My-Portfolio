document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarlinks = document.querySelector('.navbarlinks');

    toggleButton.addEventListener('click', function() {
        navbarlinks.classList.toggle('active');
    });
});
document.querySelector('#Startnav').addEventListener('click', Sclick)
function Sclick() {
    document.querySelector('#Start').scrollIntoView({behavior: 'smooth'})
}
document.querySelector('#Projectnav').addEventListener('click', Pclick)
function Pclick() {
    document.querySelector('#Projects').scrollIntoView({behavior: 'smooth'})
}
document.querySelector('#Experiencenav').addEventListener('click', Eclick)
function Eclick() {
    document.querySelector('#Experience').scrollIntoView({behavior: 'smooth'})
}
document.querySelector('#Educationnav').addEventListener('click', Expclick)
function Expclick() {
    document.querySelector('#Education').scrollIntoView({behavior: 'smooth'})
}
document.querySelector('#My_interestnav').addEventListener('click', interclick)
function interclick() {
    document.querySelector('#My_interest').scrollIntoView({behavior: 'smooth'})
}
