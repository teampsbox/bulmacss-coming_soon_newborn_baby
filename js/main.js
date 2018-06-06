const countdown = document.querySelector(".countdown");

const birthDate = new Date("December 25, 2018 08:08:08").getTime();

const intvl = setInterval(() => {
  const now = new Date().getTime();

  const distance = birthDate - now;

  const months = Math.floor(distance / (1000 * 60 * 60 * 24));
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display Result
  countdown.innerHTML = `
  <div class="columns is-mobile is-multiline is-centered">          
            <div class="column is-narrow">
              <strong>${days}</strong> Days
            </div>
            <div class="column is-narrow">
              <strong>${hours}</strong> Hours
            </div>
            <div class="column is-narrow">
              <strong>${mins}</strong> Minutes
            </div>
            <div class="column is-narrow">
              <strong>${seconds}</strong> Seconds
            </div>
          </div>
          `;
});
