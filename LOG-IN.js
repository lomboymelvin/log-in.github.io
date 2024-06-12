document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const picbg1 = document.querySelector('.picbg1');
    const picbg2 = document.querySelector('.picbg2');
    const loginState = document.getElementById('loginState');
    const signupState = document.getElementById('signupState');

    signupState.style.opacity = '0';
    picbg2.style.opacity = '1';

    loginBtn.addEventListener('click', function() {
        // Toggle opacity for login and signup states
        loginState.style.opacity = '0';
        signupState.style.opacity = '1';

        // Switch positions of picbg1 and picbg2
        picbg2.style.transition = 'transform 1s ease, background-image 1s ease'; // Added background-image transition
        picbg1.style.transition = 'transform 1s ease';
        picbg2.style.transform = 'translateX(-100%)';
        picbg1.style.transform = 'translateX(100%)';

        // Change background image of picbg2
        picbg2.style.backgroundImage = 'url("try.png")';
    });

    signupBtn.addEventListener('click', function() {
        // Toggle opacity for login and signup states
        loginState.style.opacity = '1';
        signupState.style.opacity = '0';

        // Switch positions of picbg1 and picbg2
        picbg1.style.transition = 'transform 1s ease';
        picbg2.style.transition = 'transform 1s ease, background-image 1s ease'; // Added background-image transition
        picbg1.style.transform = 'translateX(0)';
        picbg2.style.transform = 'translateX(0)';

        // Reset background image of picbg2 to original
        picbg2.style.backgroundImage = '';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const signupState = document.getElementById('signupState');

    loginBtn.addEventListener('click', function() {
        document.getElementById('loginState').style.display = 'none';
        signupState.style.display = 'block';
    });

    signupBtn.addEventListener('click', function() {
        document.getElementById('loginState').style.display = 'block';
        signupState.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const switchContentBtn = document.getElementById('switchContentBtn');
    const switchContentBtn2 = document.getElementById('switchContentBtn2');
    const content1 = document.getElementById('content1');
    const content2 = document.getElementById('content2');

    switchContentBtn.addEventListener('click', function() {
        // Toggle visibility of content1 and content2
        content1.style.display = 'none';
        content2.style.display = 'block';
        switchContentBtn.textContent = 'Sign Up'; // Change button text
    });

    switchContentBtn2.addEventListener('click', function() {
        // Toggle visibility of content1 and content2
        content1.style.display = 'block';
        content2.style.display = 'none';
        switchContentBtn.textContent = 'Log In'; // Change button text
    });
});
