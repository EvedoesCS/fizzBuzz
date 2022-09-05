function fizzBuzz(x) 
{
    const resultsContainer = document.getElementById('results');

    x = parseInt(x);
    for (let i = 1; i <= x; i++)
    {
        const number = document.createElement('p');
        number.classList.add('number')
        let output = '';

        if (i % 3 == 0)
        {
            output += 'Fizz';
        }
        if (i % 5 == 0)
        {
            output += 'Buzz';
        }
        else if (i % 3 !== 0 && i % 5 !== 0)
        {
            output = i;
        }

        number.textContent = output;
        resultsContainer.appendChild(number);

    }
}

const input = document.getElementById('input');
x = document.getElementById('input').value;
input.addEventListener('submit', fizzBuzz(x));

