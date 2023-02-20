//Burger
$(document).ready(function(){
    $('.icon-menu').click(function(event){
        $('.icon-menu, .header__menu').toggleClass('menu-open');
        $('body'),toggleClass('lock');
    });
});

class Dropdown {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.items = options.items
        
        this.$el.querySelector('.dropdown__label').textContent = this.items[0].label
    
        this.$el.addEventListener('click', event => {
            if (event.target.classList.contains('dropdown__label')) {
                if (this.$el.classList.contains('open')) {
                    this.close()
                } else {
                    this.open()
                }
            } else {
                if (event.target.tagName.toLowerCase() === 'li') {
                    this.select(event.target.dataset.id)
                }
            }
        })

        const itemsHTML = this.items.map(i => {
            return `<li data-id="${i.id}">${i.label}</li>`
        }).join(' ')

        this.$el.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin',
        itemsHTML)
    }

    select(id) {
        const item = this.items.find(i => i.id === id)
        this.$el.querySelector('.dropdown__label').textContent = item.label
        this.close()
    }

    open() {
        this.$el.classList.add('open')
    }

    close() {
        this.$el.classList.remove('open')
    }
}


const dropdown01 = new Dropdown('#dropdown01', {
    items: [
        {label: '30 минут', id: 'h1'},
        {label: '1 час', id: 'h2'},
        {label: '1,5 часа', id: 'h15'},
    ]
})





