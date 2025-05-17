
import * as bookingWorkflows from "$lib/server/workflows/bookings";
import type {Booking, CityStats} from "$lib/entities/models";

export type ServerData = {
    topCities: CityStats[],
}

export async function load({}): Promise<ServerData> {
    // get all bookings
    const bookings: Booking[]  = await bookingWorkflows.List()
    if (!bookings) {
        return {
            topCities: [],
        }
    }

    // get top cities
    const topCities: CityStats[] = bookingWorkflows.GetTopCitiesByCountOfTicketsBooked(bookings)

    // respond
    return {
        topCities: topCities,
    }
}
