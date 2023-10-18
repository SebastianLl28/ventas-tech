// eslint-disable-next-line no-undef
const splide = new Splide('.splide-categories', {
  type: 'loop',
  gap: '1rem',
  focus: 'start',
  autoWidth: true,
  perPage: 'auto',
  arrows: false,
  pagination: false,
  drag: 'free'
})

splide.mount()

// eslint-disable-next-line no-undef
const splideNewProducts = new Splide('.splide-new-products', {
  type: 'loop',
  gap: '1rem',
  focus: 'start',
  autoWidth: true,
  perPage: 'auto',
  arrows: false,
  pagination: false,
  drag: 'free'
})

splideNewProducts.mount()

// eslint-disable-next-line no-undef
const splideNewBanner = new Splide('.splide-new-banner', {
  perPage: 1,
  type: 'loop',
  gap: '1rem',
  focus: 'start',
  autoHeight: true,
  autoWidth: true,
  arrows: false,
  pagination: true,
  autoplay: true
}).mount()

splideNewBanner.on('click', (e) => {
  console.log(e)
})

// eslint-disable-next-line no-undef
const splideComputers = new Splide('.splide-computers', {
  perPage: 1,
  type: 'loop',
  gap: '1rem',
  focus: 'start',
  autoHeight: true,
  autoWidth: true,
  arrows: false,
  pagination: false
}).mount()

splideComputers.on('click', (e) => {
  console.log(e)
})

// eslint-disable-next-line no-undef
const splideLaptops = new Splide('.splide-laptops', {
  perPage: 1,
  type: 'loop',
  gap: '1rem',
  focus: 'start',
  autoHeight: true,
  autoWidth: true,
  arrows: false,
  pagination: false
}).mount()

splideLaptops.on('click', (e) => {
  console.log(e)
})
// eslint-disable-next-line no-undef
const splidePhone = new Splide('.splide-phone', {
  perPage: 1,
  type: 'loop',
  gap: '1rem',
  focus: 'start',
  autoHeight: true,
  autoWidth: true,
  arrows: false,
  pagination: false
}).mount()

splidePhone.on('click', (e) => {
  console.log(e)
})
