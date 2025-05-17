<script lang="ts">
    import type {ServerData} from "./+page.server";

    export let data: ServerData

    const topCities = data?.topCities ? data.topCities : []

    console.log(topCities)
</script>

<main class="container">
    <article>
        <hgroup>
            <h1>Reports</h1>
            <h2>All Reports</h2>
        </hgroup>
    </article>

    <article>
        <h2>Top Cities by Count of Tickets Booked</h2>

        {#each topCities as cityStat, i}
        [{i + 1}] {cityStat.cityName} ({(cityStat.percentOfThisCitysBookingsOverAllBookings * 100).toFixed(2)}%) <br>
            <ul>
                <li>Tickets Booked: {cityStat.totalBookings} -- ({cityStat.totalPaidBookings} paid | {cityStat.totalUnpaidBookings} unpaid | {(cityStat.percentOfPaidBookings * 100).toFixed(0)}% paid)</li>
            </ul>

    {/each}
    </article>


    <a href="/api">admin home</a>
</main>

