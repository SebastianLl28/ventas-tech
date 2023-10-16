window.addEventListener('load', async () => {
  await fetchingCategoies()
})

/**
 * @param {Object[]} data
 */
function showCategories (data) {
  const categories = document.getElementById('categories_data')
  categories.innerHTML = ''
  data.forEach(category => {
    categories.innerHTML += `
    <div class="overflow-hidden w-14">
      <div class="h-14 w-14 rounded-md bg-gray-100 flex items-center justify-center py-2">
        <img src="${category.image}" alt="${category.name}" class="h-12 bg-cover object-cover" />
      </div>
      <p class="text-ellipsis overflow-hidden text-center px-2 text-sm">${category.name}</p>
    </div>
    `
  })
}

async function fetchingCategoies () {
  try {
    const response = await fetch('http://localhost:8001/api/category')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    showCategories(data)
  } catch (error) {
    console.error('Error:', error)
  }
}

// fetching products
