// let myAge = 21
// console.log(myAge)

document.addEventListener('DOMContentLoaded', function() {
    let count = 0
    const counterButtons = document.querySelectorAll('.counter-button')

    counterButtons.forEach((button) => {
        button.addEventListener('click', function() {
            const action = button.getAttribute('data-action')

            if (action === 'add') {
                count++
            } else if (action === 'sub') {
                count--
            } else {
                count = 0
            }

            document.getElementById('counter-value').textContent = count
        })
    })
})