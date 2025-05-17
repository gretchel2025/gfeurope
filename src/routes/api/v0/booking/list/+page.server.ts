
import * as bookingWorkflows from "$lib/server/workflows/bookings";
import type { Booking } from "$lib/entities/models";

export type ServerData = {
    bookings: Booking[],
}

export async function load({}): Promise<ServerData> {
    const bookings: Booking[]  = await bookingWorkflows.List()

    if (!bookings) {
        return {
            bookings: [],
        }
    }


    // sort the bookings by date in reverse
    const reversedBookings: Booking[] = bookings.sort(sortBookingByDateDescending)

    return {
        // bookings: bookings,
        bookings: reversedBookings,
    }
}

function sortBookingByDateDescending(a: Booking, b: Booking) {
    // TODO make this conversion as a Getter in booking field
    const aBookDateStr = Date.parse(a.book_date)
    const aBookDateD = new Date(aBookDateStr).toISOString()

    const bBookDateStr = Date.parse(b.book_date)
    const bBookDateD = new Date(bBookDateStr).toISOString()

    return aBookDateD < bBookDateD ? 1 : -1
}
