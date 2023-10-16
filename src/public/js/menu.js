/**
 * @type {HTMLElement} buttonClose
 */
const navigation = document.querySelector('#navigation')

/**
 * @type {HTMLElement} buttonClose
 */
const buttonClose = document.querySelector('#button-close')

/**
 * @type {HTMLElement} buttonClose
*/
const buttonNavigation = document.querySelector('#button-navigation')

buttonClose.addEventListener('click', () => {
  closeMenu()
})

buttonNavigation.addEventListener('click', () => {
  openMenu()
})

navigation.addEventListener('click', (e) => {
  if (e.target.id === 'navigation') closeMenu()
})

function closeMenu () {
  navigation.classList.add('hidden')
}

function openMenu () {
  navigation.classList.remove('hidden')
}
