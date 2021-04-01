/* MOSTRAR MENU */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    /* Valida a existência de variáveis */
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            /* Adiciona a classe 'show-menu' à tag 'div' com a classe 'nav__menu' */            
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    /* Quando clica em cada 'nav__link', removemos a classe 'show-menu' */
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ATIVA LINK DAS SEÇÕES PELO SCROLL */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* ALTERA TELA DE FUNDO DO HEADER */ 
function scrollHeader(){
    const nav = document.getElementById('header')
    /* Quando a rolagem for maior que 200 de altura da janela de visualização, adiciona a classe 'scroll-header' à tag 'header' */
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* MOSTRA SCROLL-TOP */ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    /* Quando a rolagem for superior a 560 altura da janela de visualização, adiciona a classe 'show-scroll' à tag 'a' com a classe 'scroll-top' */
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/* TEMA DARK LIGHT */ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

/* Tópico selecionado anteriormente (caso o usuario selecione o topico) */
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

/* Obtem o tema atual que a interface possui validando a classe dark-theme */ 
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

/* Valida se o usuário escolheu previamente um tópico */
if (selectedTheme) {
 /* Se a validação for verdadeira, verifica se ativa ou não o tema escuro */
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

/* Ativa / desativa o tema manualmente com o botão */
themeButton.addEventListener('click', () => {
    /* Adiciona ou remove o tema escuro / ícone */
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    /* Salva o tema e o ícone atual que o usuário escolheu */
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* ANIMACAO SCROLL REVEAL */
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})