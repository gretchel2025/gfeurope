
import * as dbCounters from "$lib/server/data_sources/counters";
import * as dbUsers from "$lib/server/data_sources/users";
import type {User} from "$lib/entities/models";
import {redirect} from "@sveltejs/kit";

// This page is just to init the data, like when we have a new environment set up

export async function load({}) {
    // console.log("[INFO] performing initialization")
    //
    // // create the tickets
    // try {
    //     await dbCounters.Create("standard_tickets")
    //     console.log("[DEBUG] successfully created counter: standard_tickets")
    // } catch (e) {
    //     console.log("[DEBUG] wasn't able to create counter: standard_tickets (maybe it already exists)")
    // }
    //
    // try {
    //     await dbCounters.Create("vip_tickets")
    //     console.log("[DEBUG] successfully created counter: vip_tickets")
    // } catch (e) {
    //     console.log("[DEBUG] wasn't able to create counter: vip_tickets (maybe it already exists)")
    // }
    //
    // // create the default users
    // try {
    //     const jsl: User = {
    //         _id: "jonathangersam@gmail.com",
    //         roles: ["admin", "superuser"]
    //     }
    //     await dbUsers.Insert(jsl)
    //     console.log("[DEBUG] successfully created user: jonathangersam@gmail.com")
    // } catch (e) {
    //     console.log("[DEBUG] wasn't able to create user: jonathangersam@gmail.com (maybe it already exists)")
    // }
    //
    // try {
    //     const ggl: User = {
    //         _id: "gretchelglopez@gmail.com",
    //         roles: ["admin", "superuser"]
    //     }
    //     await dbUsers.Insert(ggl)
    //     console.log("[DEBUG] successfully created user: gretchelglopez@gmail.com")
    // } catch (e) {
    //     console.log("[DEBUG] wasn't able to create user: jonathangersam@gmail.com (maybe it already exists)")
    // }
    //
    //
    // return {}

    throw redirect(303, "/")
}
