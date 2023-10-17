// eslint-disable-next-line no-undef
const splide = new Splide('.splide', {
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
