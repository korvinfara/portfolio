let icons = [];

const recalculateActiveIcons = () => {
    const windowTop = 0; //window.scrollY; // $window.scrollTop()
    const windowBottom = window.innerHeight; // windowTop + $window.height()

    for (let i = 0; i < icons.length; ++i) {
        const icon = icons[i];
        const elRect = icon.getBoundingClientRect();

        if ((elRect.bottom >= windowTop && elRect.top < windowBottom)) {
            if (!icon.classList.contains('checked')) {
                icon.classList.add('checked');
            }
        }
    }
}

const initPage = () => {
    icons = document.querySelectorAll('.animated');
    recalculateActiveIcons();
}

const init = () => {
    document.addEventListener('scroll', recalculateActiveIcons)
    initPage();
}

init(initPage);