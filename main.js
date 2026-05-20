let msg = "Hi Lu Js is working"

console.log(msg)


function hideAllProjects() {
    // Grab every element with the project class
    const allProjects = document.querySelectorAll('.hiddenWindow');
    allProjects.forEach(project => {
        project.style.display = 'none';
    });
}

const linkedInBtn = document.getElementsByClassName('linkedinBranding')[0]



linkedInBtn.addEventListener('click', function(event){
    console.log('LinkedIn Button was clicked!');

    hideAllProjects();

    const hiddenWindow = document.getElementsByClassName('linkedInProject')[0]

    const hideWindow = document.getElementsByClassName('folioProfile')[0]


    hiddenWindow.style.display = 'block';

    hideWindow.style.display = 'none';

        
});

const emailBtn = document.getElementsByClassName('emailDesign')[0]
    emailBtn.onclick = function() {
    console.log('Email Button was clicked!');

    hideAllProjects();

    const hiddenWindow = document.getElementsByClassName('emailProject')[0]

    const hideWindow = document.getElementsByClassName('folioProfile')[0]

    hiddenWindow.style.display = 'block';
    hideWindow.style.display = 'none';
  
};

const brightrBtn = document.getElementsByClassName('brightergreen')[0]


brightrBtn.onclick = function() {
    console.log('Brightr Button clicked!');

    hideAllProjects();

    const hiddenWindow = document.getElementsByClassName('brighterGreenProject')[0]

    const hideWindow = document.getElementsByClassName('folioProfile')[0]

    hiddenWindow.style.display = 'block';

    hideWindow.style.display = 'none';

};


const exitButtons = document.querySelectorAll('.exitButton');

    exitButtons.forEach(button => {
    // 3. Attach the click event to EVERY button
    button.onclick = function() {
        console.log('Exit Button clicked!');

        // Hide all elements with 'hiddenWindow'
        const hiddenWindows = document.getElementsByClassName('hiddenWindow');
        for (let i = 0; i < hiddenWindows.length; i++) {
            hiddenWindows[i].style.display = 'none';
        }

        // Show the 'folioProfile' window
        const hideWindow = document.getElementsByClassName('folioProfile')[0];
        if (hideWindow) {
            hideWindow.style.display = 'block';
        }
    };
});