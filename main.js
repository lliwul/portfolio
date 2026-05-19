let msg = "Hi Lu Js is working"

console.log(msg)


const linkedInBtn = document.getElementsByClassName('linkedinBranding')[0]


linkedInBtn.addEventListener('click', function(event){

        let clickCount = 0;
        clickCount ++;
        console.log(clickCount)

        console.log('Button was clicked!');

       

        
});

const emailBtn = document.getElementsByClassName('emailDesign')[0]
emailBtn.onclick = function() {
    console.log('Button clicked!');

    const hiddenWindow = document.getElementsByClassName('folioExamples')[0]

    const hideWindow = document.getElementsByClassName('folioProfile')[0]

    hiddenWindow.style.display = 'block';

    hideWindow.style.display = 'none';
};

const brightrBtn = document.getElementsByClassName('brightergreen')[0]

brightrBtn.onclick = function() {
    console.log('Button clicked!');
};


const exitBtn = document.getElementsByClassName('exitButton')[0]

    exitBtn.onclick = function() {
    console.log('Button clicked!');


    const hiddenWindow = document.getElementsByClassName('folioExamples')[0]

    const hideWindow = document.getElementsByClassName('folioProfile')[0]

    hiddenWindow.style.display = 'none';

    hideWindow.style.display = 'block';
};
