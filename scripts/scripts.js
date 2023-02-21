//Burger
$(document).ready(function(){
    $('.icon-menu').click(function(event){
        $('.icon-menu, .header__menu').toggleClass('menu-open');
        $('body'),toggleClass('lock');
    });
});

class Dropdown {
    constructor(selector1, selector2, options) {
        this.$el = document.querySelector(selector1)
        this.price = document.querySelector(selector2)
        this.items = options.items

        if (this.items[0].label === '') {
            this.$el.classList.add('hidden');
        } 
        
        this.$el.querySelector('.dropdown__label').textContent = this.items[0].label
        this.price.textContent = this.items[0].price
        
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
        this.price.textContent = item.price
        this.close()
    }

    open() {
        this.$el.classList.add('open')
    }

    close() {
        this.$el.classList.remove('open')
    }
}


const dropdown01 = new Dropdown('#dropdown01','#price01',{
    items: [
        {label: '30 минут', id: 'h1', price: 'от 990 ₽'},
        {label: '1 час', id: 'h2', price: '1 500 ₽'},
        {label: '1,5 часа', id: 'h3', price: '5 000 ₽'},
    ]
})

const dropdown02 = new Dropdown('#dropdown02','#price02',{
    items: [
        {label: '', id: 'h1', price: '3 000 ₽'},
    ]
})

const dropdown03 = new Dropdown('#dropdown03','#price03',{
    items: [
        {label: '3 минуты', id: 'h1', price: '1 800 ₽'},
        {label: '6 минут', id: 'h2', price: '3 000 ₽'},
        {label: '10 минут', id: 'h3', price: '4 800 ₽'},
    ]
})





