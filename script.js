const jokeBtn = document.getElementById('jokeBtn');
const darkModeBtn = document.getElementById('darkModeBtn');
const jokeContainer = document.querySelector('.joke');

async function fetchJoke() {
  try {
    jokeContainer.textContent = 'Loading... 😂';
    const response = await fetch('https://api.api-ninjas.com/v1/dadjokes', {
    headers: {
      'X-Api-Key': 'b6UVUCE9y6zz/WH+svNWcA==fDQRPXSuwS7x002S'
    }
  });

    if (!response.ok) {
      throw new Error('Failed to fetch joke');
    }
    const data = await response.json();
    jokeContainer.textContent = data[0]?.joke || 'No jokes available! 😢';
    } catch (error) {
      jokeContainer.textContent = 'Oops! Something went wrong. Try again later. 😬';
      console.error(error);
      }
    }

    jokeBtn.addEventListener('click', fetchJoke);

    darkModeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });