function toggleCategories(event) {
    event.preventDefault();
    let popup = document.getElementById('categoriesPopup');
    if (popup.style.display === 'none'|| popup.style.display === '') {

        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }

    window.onclick = function(event) {
        let popup = document.getElementById('categoriesPopup');
        if(!event.target.matches('#toggleCategoriesBtn') && !popup.contains(event.target)) { 
            if(popup.style.display === 'block') {
                popup.style.display = 'none';
            }
        }
    }
      
}

function sidebarToggleCategories(event) {
    event.preventDefault();
    let popup = document.getElementById('sidebarCategoriesPopup');
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
        document.removeEventListener('click', closePopup);
    }

    window.onclick = function(event) {
        let popup = document.getElementById('sidebarCategoriesPopup');
        if(!event.target.matches('#sidebarToggleCategoriesBtn') && !popup.contains(event.target)) { 
            if(popup.style.display === 'block') {
                popup.style.display = 'none';
            }
        }
    }

}

