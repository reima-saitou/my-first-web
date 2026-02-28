const button = document.getElementById('theme-toggle');

 function updatebuttonText() {
    if(document.body.classList.contains('dark-mode')) {
         button.textContent = 'Switch to Light Mode';
    }else {   
        button.textContent = 'Switch to Dark Mode';
    }
}

button.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    updatebuttonText();
});