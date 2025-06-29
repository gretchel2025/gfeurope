<script lang="ts">
  import { onMount } from 'svelte';

  let daysEl: HTMLDivElement;
  let hoursEl: HTMLDivElement;
  let minutesEl: HTMLDivElement;
  let secondsEl: HTMLDivElement;
  let starContainer: HTMLDivElement;
  let registerBtn: HTMLButtonElement;
  let ticketsSection: HTMLElement;
  let mapFrame: HTMLIFrameElement;

  function updateCountdown() {
    const eventDate = new Date('September 20, 2025 13:00:00').getTime();
    const now = Date.now();
    const timeLeft = eventDate - now;

    if (timeLeft > 0) {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);

      daysEl.textContent = days.toString().padStart(2, '0');
      hoursEl.textContent = hours.toString().padStart(2, '0');
      minutesEl.textContent = minutes.toString().padStart(2, '0');
      secondsEl.textContent = seconds.toString().padStart(2, '0');
    }
  }

  onMount(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      Object.assign(star.style, {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${2 + Math.random() * 3}s`
      });
      starContainer?.appendChild(star);
    }

    registerBtn?.addEventListener('click', () => {
      ticketsSection?.scrollIntoView({ behavior: 'smooth' });
    });

    return () => clearInterval(interval);
  });
</script>

<!-- Aurora Background -->
<div class="aurora-bg">
  <div class="stars" bind:this={starContainer}></div>
  <div class="aurora aurora-1"></div>
  <div class="aurora aurora-2"></div>
  <div class="aurora aurora-3"></div>
  <div class="aurora aurora-4"></div>
</div>

<!-- HERO Section with Countdown and Single Register Button -->
<section class="relative z-10 py-16 sm:py-20 px-4 text-center">
  <div class="max-w-5xl mx-auto">
    <p class="text-center italic text-lg sm:text-xl text-blue-200 mb-6 px-4">
      “Now to him who is able to do immeasurably more than all we ask or imagine, 
      according to his power that is at work within us.” — <span class="font-semibold text-yellow-300">Ephesians 3:20</span>
    </p>
    <br/>
    <h1 class="text-6xl sm:text-7xl font-extrabold mb-4 text-yellow-400 tracking-wide animate-fadeInUp">
      Called To More
    </h1>
    
    <h2 class="text-3xl sm:text-4xl md:text-5xl font-light mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-teal-200 to-white drop-shadow">
      Grand Feast EU and UK 2025
    </h2>
    <br/>
    <div class="flex flex-wrap justify-center items-center gap-4 mb-4">
      <p class="text-lg sm:text-xl md:text-2xl text-blue-100">September 20, 2025</p>
      <span class="text-lg sm:text-xl md:text-2xl text-yellow-400">• Oslo, Norway</span>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
      <div class="bg-white/10 p-4 rounded-lg text-center backdrop-blur-sm">
        <div bind:this={daysEl} class="text-2xl sm:text-3xl md:text-4xl font-bold">--</div>
        <div class="text-sm text-blue-200">Days</div>
      </div>
      <div class="bg-white/10 p-4 rounded-lg text-center backdrop-blur-sm">
        <div bind:this={hoursEl} class="text-2xl sm:text-3xl md:text-4xl font-bold">--</div>
        <div class="text-sm text-blue-200">Hours</div>
      </div>
      <div class="bg-white/10 p-4 rounded-lg text-center backdrop-blur-sm">
        <div bind:this={minutesEl} class="text-2xl sm:text-3xl md:text-4xl font-bold">--</div>
        <div class="text-sm text-blue-200">Minutes</div>
      </div>
      <div class="bg-white/10 p-4 rounded-lg text-center backdrop-blur-sm">
        <div bind:this={secondsEl} class="text-2xl sm:text-3xl md:text-4xl font-bold">--</div>
        <div class="text-sm text-blue-200">Seconds</div>
      </div>
    </div>
  </div>

    <button bind:this={registerBtn} class="bg-gradient-to-r from-blue-600 to-teal-400 px-10 py-4 rounded-full text-white text-base sm:text-lg font-bold uppercase tracking-wider shadow-lg hover:scale-105 transition-transform duration-200">
      BUY TICKET
    </button>
</section>

<section id="speakers" class="py-20 bg-[#0c0f1d] text-white">
  <div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
    <!-- Speaker Image -->
    <div class="md:w-1/2 w-full">
      <img src="https://res.cloudinary.com/dg2u7fmoc/image/upload/v1748121253/poster2_rdfj6w.png" alt="Bo Sanchez" class="w-full h-auto shadow-lg" />
    </div>

    <!-- Speaker Message -->
    <div class="md:w-1/2 w-full">
      <h3 class="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4">"Called To More"</h3>
      <p class="italic text-blue-200 mb-6">
        “Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us.” — <span class="font-bold text-yellow-300">Ephesians 3:20</span>
      </p>
      <p class="text-blue-100 leading-relaxed">
        Join us at the Grand Feast EU and UK 2025 as we gather in faith and inspiration. <span class="text-white font-semibold">Bo Sanchez</span>, a best-selling author and founder of The Feast, invites you to step into a deeper calling. Through powerful storytelling and spiritual reflection, you'll be reminded that you are called to a life beyond limits—filled with hope, love, and God's abundant grace.
      </p>
    </div>
  </div>
</section>


<section id="details" class="relative z-10 py-24 px-4 bg-gradient-to-b from-[#071327] to-[#0b1a2f] text-white">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-200">
      Event Details
    </h2>

    <div class="bg-white/5 backdrop-blur-md border border-teal-500/20 rounded-2xl p-8 shadow-lg">
      <h3 class="text-2xl md:text-3xl font-semibold text-center text-white mb-6">
        2025 EU and UK Grand Feast in Oslo
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div class="flex items-start gap-4">
          <div class="text-teal-300 text-2xl">
            🕒
          </div>
          <div>
            <h4 class="text-lg font-semibold text-teal-200">Time</h4>
            <p class="text-white">1:00 PM to 5:00 PM</p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="text-teal-300 text-2xl">
            📅
          </div>
          <div>
            <h4 class="text-lg font-semibold text-teal-200">Date</h4>
            <p class="text-white">September 20, 2025</p>
          </div>
        </div>
      </div>

      <div class="flex items-start gap-4 mb-8">
        <div class="text-teal-300 text-2xl">
          📍
        </div>
        <div>
          <h4 class="text-lg font-semibold text-teal-200">Location</h4>
          <p class="text-white">Lambertseter kirke, Langbølgen 33, 1150 Oslo, Norway</p>
        </div>
      </div>

      <!-- Optional Google Map Embed -->
      <div class="mt-8 rounded-xl overflow-hidden shadow-md">
        <iframe
          bind:this={mapFrame}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2032.0893365937292!2d10.81919681592025!3d59.87363058187439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e38178a0611%3A0x89b0e6220b7fce55!2sLambertseter%20kirke!5e0!3m2!1sen!2sno!4v1685232932978"
          title="Lambertseter Kirke Location"
          width="100%"
          height="400"
          class="w-full rounded-xl border-none shadow-lg"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </div>
</section>

<!-- Version 10 - Refined Event Details & Ticket Section -->

<!-- <section id="details" class="relative z-10 py-24 px-4 bg-gradient-to-b from-[#0c0f1d] to-[#0a0a1a]">
  <div class="container mx-auto">
    <h2 class="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">
      Event Details
    </h2>
    <div class="max-w-4xl mx-auto bg-blue-900/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30">
      <h3 class="text-2xl font-bold mb-6 text-center text-white">The Grand Feast Europe and UK 2025</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-teal-300 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h4 class="text-lg font-semibold text-teal-200">Time</h4>
            <p class="text-white">1:00 PM to 5:00 PM</p>
          </div>
        </div>
        <div class="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-teal-300 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <div>
            <h4 class="text-lg font-semibold text-teal-200">Date</h4>
            <p class="text-white">September 20, 2025</p>
          </div>
        </div>
        <div class="flex items-start md:col-span-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-teal-300 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <h4 class="text-lg font-semibold text-teal-200">Location</h4>
            <p class="text-white">Lambertseter kirke : Langbølgen 33, 1150 Oslo, Norway</p>
          </div>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-blue-500/30">
        <div class="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-blue-300 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</section> -->

<!-- Version 13 - Ticket Section with Complementary Background Color -->
<section id="tickets" bind:this={ticketsSection} class="relative z-10 py-24 px-4 bg-gradient-to-b from-[#10172a] to-[#0a0e1a]">
  <div class="container mx-auto">
    <h2 class="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-teal-300">
      Ticket Types
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        <!-- Standard Ticket -->
    <div class="ticket-card rounded-2xl p-6 flex flex-col border border-blue-500/30 transition-transform transform hover:scale-105 duration-300 ease-in-out shadow hover:shadow-2xl">
      <h3 class="text-2xl font-bold mb-4 text-white">Standard</h3>
      <div class="text-3xl font-bold mb-6 text-teal-300">30 €</div>
      <ul class="mb-8 flex-grow text-blue-100 space-y-3">
        <li class="flex items-center"><span class="text-teal-300 mr-2">✔</span>General admission</li>
        <li class="flex items-center"><span class="text-teal-300 mr-2">✔</span>Standard seating</li>
      </ul>
      <a
        href="/newbooking"
        class="inline-block text-center py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-teal-400 text-white hover:brightness-110 transition"
      >
        Select
      </a>
    </div>

    <!-- Premium Ticket -->
    <div class="ticket-card rounded-2xl p-6 flex flex-col relative border-2 border-yellow-400/60 transform scale-105 shadow-lg transition-transform hover:scale-110 duration-300 ease-in-out hover:shadow-2xl">
      <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-yellow-100 bg-yellow-600 animate-pulse">
        LIMITED OFFER
      </div>
      <h3 class="text-2xl font-bold mb-4 text-white">Premium</h3>
      <div class="text-3xl font-bold mb-2 text-teal-300">50 €</div>
      <p class="text-yellow-300 text-sm mb-4">Limited to 40 seats only</p>
      <ul class="mb-8 flex-grow text-blue-100 space-y-3">
        <li class="flex items-center"><span class="text-teal-300 mr-2">🎟</span>Premium seating area</li>
        <li class="flex items-center"><span class="text-teal-300 mr-2">📘</span>One Bo Sanchez book</li>
        <li class="flex items-center"><span class="text-teal-300 mr-2">✍️</span>Priority book signing access</li>
        <li class="flex items-center"><span class="text-teal-300 mr-2">🤝</span>Meet-and-greet with Bro. Bo</li>
      </ul>
      <a
        href="/newbooking"
        class="inline-block text-center py-3 rounded-lg font-semibold bg-gradient-to-r from-indigo-500 to-blue-400 text-white hover:brightness-110 transition"
      >
        Select
      </a>
    </div>

      <!-- Child Ticket -->
      <div class="ticket-card rounded-2xl p-6 flex flex-col border border-blue-500/10 transition-transform transform hover:scale-105 duration-300 ease-in-out shadow hover:shadow-2xl">
        <h3 class="text-2xl font-bold mb-4 text-white">Child</h3>
        <div class="text-3xl font-bold mb-2 text-teal-300">FREE</div>
        <p class="text-blue-200 text-sm mb-4">Under 12 years old</p>
        <ul class="mb-8 flex-grow text-blue-100 space-y-3">
          <li class="flex items-center"><span class="text-teal-300 mr-2">✔</span>General admission</li>
          <li class="flex items-center"><span class="text-teal-300 mr-2">✔</span>Must be with a paying adult</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<slot />