document.getElementById('dogs-toggle-view').addEventListener('click', function() {
    var element = document.getElementById('dogs-detail-content-view');
    var dogs_icon = document.querySelectorAll('_icons_nmzz8_14')
    element.classList.toggle('_isOpen_41ffi_17');
    var icons = this.getElementsByClassName('_icon_nmzz8_14');
    
    // Menambahkan atau menghapus kelas '_isOpen_nmzz8_58' pada setiap elemen
    for (var i = 0; i < icons.length; i++) {
        icons[i].classList.toggle('_isOpen_nmzz8_58');
    }
});


let leaderboard_page = `
<div class="_page_1ulsb_1">
    <div class="_gameView_13qtv_1" id="game-view">
        
    </div>
</div>`

// document.getElementById('leaderboard_footer_menu').addEventListener('click', function() {
//     document.getElementById('root').innerHTML = leaderboard_page
// });

function navbar_menu(page) {
    document.getElementById('root').innerHTML = page
}



