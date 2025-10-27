function themeSwitchInit() {
    const themePreference = localStorage.getItem('theme');
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');

    function initTheme(mode) {
        if (mode === 'dark') {
            document.documentElement.classList.add('dark-mode');
        } else if (mode === 'light') {
            document.documentElement.classList.remove('dark-mode');
        } else if (mode === 'system') {
            if (systemPreference.matches) {
                document.documentElement.classList.add('dark-mode');
            }
        }
    }

    // Set initial theme on page load
    // Default to system preference if no localStorage value exists
    const themeToApply= themePreference ? themePreference : 'system';
    initTheme(themeToApply);

    document.addEventListener('DOMContentLoaded', function () {
        const themeToggleButton = document.createElement('button');
        themeToggleButton.id = 'theme-toggle';
        themeToggleButton.className = 'theme-toggle-button';

        const sunIcon = document.createElement('i');
        sunIcon.id = 'sun-icon';
        sunIcon.className = 'hidden';
        sunIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M232.6 56.1C225.9 51.7 217.5 50.9 210.1 53.9C202.7 56.9 197.4 63.5 195.9 71.3L175 174.6L71.7 195.4C63.9 197 57.3 202.4 54.3 209.7C51.3 217 52.1 225.5 56.5 232.2L114.7 320L56.5 407.8C52.1 414.5 51.3 422.9 54.3 430.3C57.3 437.7 63.9 443.1 71.7 444.6L175 465.4L195.9 568.7C197.5 576.5 202.9 583.1 210.2 586.1C217.5 589.1 226 588.3 232.7 583.9L320.5 525.7L408.3 583.9C415 588.3 423.4 589.1 430.8 586.1C438.2 583.1 443.6 576.5 445.1 568.7L466 465.5L569.2 444.6C577 443 583.6 437.6 586.6 430.3C589.6 423 588.8 414.5 584.4 407.8L526.2 320L584.4 232.2C588.8 225.5 589.6 217.1 586.6 209.7C583.6 202.3 577 196.9 569.2 195.4L465.8 174.6L445 71.3C443.4 63.5 438 57 430.6 53.9C423.2 50.8 414.8 51.7 408.1 56.1L320.4 114.3L232.6 56.1zM218.9 199.7L235.9 115.8L307.2 163.1C315.2 168.4 325.7 168.4 333.7 163.1L405 115.8L422 199.7C423.9 209.2 431.3 216.5 440.8 218.5L524.7 235.5L477.4 306.8C472.1 314.8 472.1 325.3 477.4 333.3L524.7 404.6L440.8 421.6C431.3 423.5 423.9 430.9 422 440.4L405 524.3L333.7 477C325.7 471.7 315.2 471.7 307.2 477L235.9 524.3L218.9 440.4C217 430.9 209.6 423.5 200.1 421.6L116.2 404.6L163.5 333.3C168.8 325.3 168.8 314.8 163.5 306.8L116.2 235.5L200.1 218.5C209.6 216.6 216.9 209.2 218.9 199.7zM271.6 320C271.6 293.3 293.3 271.6 320 271.6C346.7 271.6 368.4 293.3 368.4 320C368.4 346.7 346.7 368.4 320 368.4C293.3 368.4 271.6 346.7 271.6 320zM416.4 320C416.4 266.8 373.2 223.6 320 223.6C266.8 223.6 223.6 266.8 223.6 320C223.6 373.2 266.8 416.4 320 416.4C373.2 416.4 416.4 373.2 416.4 320z"/></svg>';

        const moonIcon = document.createElement('i');
        moonIcon.id = 'moon-icon';
        moonIcon.className = 'hidden';
        moonIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M303.3 112.7C196.2 121.2 112 210.8 112 320C112 434.9 205.1 528 320 528C353.3 528 384.7 520.2 412.6 506.3C309.2 482.9 232 390.5 232 280C232 214.2 259.4 154.9 303.3 112.7zM64 320C64 178.6 178.6 64 320 64C339.4 64 358.4 66.2 376.7 70.3C386.6 72.5 394 80.8 395.2 90.8C396.4 100.8 391.2 110.6 382.1 115.2C321.5 145.4 280 207.9 280 280C280 381.6 362.4 464 464 464C469 464 473.9 463.8 478.8 463.4C488.9 462.6 498.4 468.2 502.6 477.5C506.8 486.8 504.6 497.6 497.3 504.6C451.3 548.8 388.8 576 320 576C178.6 576 64 461.4 64 320z"/></svg>';

        const systemIcon = document.createElement('i');
        systemIcon.id = 'system-icon';
        systemIcon.className = 'hidden';
        systemIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M128 96C92.7 96 64 124.7 64 160L64 400L128 400L128 160L512 160L512 400L576 400L576 160C576 124.7 547.3 96 512 96L128 96zM19.2 448C8.6 448 0 456.6 0 467.2C0 509.6 34.4 544 76.8 544L563.2 544C605.6 544 640 509.6 640 467.2C640 456.6 631.4 448 620.8 448L19.2 448z"/></svg>';

        themeToggleButton.appendChild(sunIcon);
        themeToggleButton.appendChild(moonIcon);
        themeToggleButton.appendChild(systemIcon);

        toggleContainer.appendChild(themeToggleButton);

        function applyTheme(mode) {
            sunIcon.classList.add('hidden');
            moonIcon.classList.add('hidden');
            systemIcon.classList.add('hidden');

            if (mode === 'dark') {
                document.documentElement.classList.add('dark-mode');
                moonIcon.classList.remove('hidden');
            } else if (mode === 'light') {
                document.documentElement.classList.remove('dark-mode');
                sunIcon.classList.remove('hidden');
            } else if (mode === 'system') {
                if (systemPreference.matches) {
                    document.documentElement.classList.add('dark-mode');
                }
                systemIcon.classList.remove('hidden');
            }
        }
        applyTheme(themeToApply);

        // Listen for system theme changes and apply if in 'system' mode
        systemPreference.addEventListener('change', (e) => {
            if (localStorage.getItem('theme') === 'system') {
                applyTheme('system');
            }
        });

        // Toggle theme on button click
        themeToggleButton.addEventListener('click', () => {

            let currentTheme = localStorage.getItem('theme');
            let nextTheme;

            if (currentTheme === 'light') {
                nextTheme = 'dark';
            } else if (currentTheme === 'dark') {
                nextTheme = 'system';
            } else {
                // If currentTheme is null (first visit) or 'system'
                nextTheme = 'light';
            }

            localStorage.setItem('theme', nextTheme);
            applyTheme(nextTheme);
        });

    });
}

themeSwitchInit();
