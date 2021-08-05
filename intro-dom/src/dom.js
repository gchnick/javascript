window.onload = () => {
    const parr = document.getElementById('text')
    console.log(parr.innerHTML)

    // Edit text
    const update = document.getElementById('text2')
    update.innerText = 'Texto actualizado'

    // Edit html
    const html = document.getElementById('html')
    html.innerHTML = '<li>Elemento 1</li><li>Elimento 2</li>'
}