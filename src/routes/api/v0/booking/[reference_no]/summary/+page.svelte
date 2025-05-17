<script lang="ts">
    import type {ServerData} from "./+page.server";

    // data is the object received from the server
    export let data: ServerData

    const booking = data.booking
    const ticketsData = data.ticketsData
</script>

<main class="container">
    <!-- MAIN PAGE -->
    <article>
        {#if booking}


        <!-- SUMMARY HEADER -->
        <h1>Booking: {booking.reference_no}</h1>
        <hr>
        <!-- TICKETS + QR CODE SECTION -->
        {#each ticketsData as ticketData, i}
            <div>
                <h2>#{i+1}: Ticket {ticketData.ticket.ticket_id}</h2>
                Name: {ticketData.ticket.name}<br>
                Ticket Class: {ticketData.ticket.ticket_type}<br>
<!--                Checkin: {ticketData.qrCodeData.targetURL} <br>-->
                Checkin QR Code <br>
                <div>
                    <img src="{ticketData.qrCodeData.imageData}" alt="QR Code"/>
                </div>

            </div>
            <hr>
        {/each} 

        <h2>Booking Summary</h2>
        <!-- {booking.name} ({booking.email}) <br>
        <br> -->

        <!-- BOOKING DETAILS SECTION -->
        {booking.ticket_ids.length} {booking.ticket_type} tickets, {booking.amount_total} EUR, {booking.payment_status} <br>

        {booking.guests.length} guests: <br>
        <ol>
            {#each booking.guests as guest}
                <li>
                    {guest}
                </li>
            {/each}
        </ol>

        Event Details: <br>
        <ul>
            <li>2025 EU and UK Grand Feast in Oslo</li>
            <li>Date: September 20, 2024</li>
            <li>Time: 1:00 PM to 5:00 PM CET</li>
            <li>Venue: Lambertseter kirke</li>
            <li>Address: Langbølgen 33, 1150 Oslo, Norway</li>
        </ul>


        <!-- PARTING MESSAGE -->
        We hope you have a great time at the event! <br>
        <br>

        Have a blessed day! <br>
        The Grand Feast EU and UK Team <br>
        <br>

        <hr>

        <!-- PRINT ME -->
        <button onclick="window.print()">Print this page</button>
        {/if}
    </article>

    <!-- PAGE NAVIGATION -->
    <article>
        <a href="/api/v0/booking/{booking.reference_no}/details">back to details</a> |
        <a href="/api/v0/booking/list">list bookings</a> |
        <a href="/api/v0/booking/search">search</a>
    </article>

    <a href="/api">admin home</a>
</main>

