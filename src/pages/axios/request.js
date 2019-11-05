import { Service } from "./Service";

export function getDemo() {
    return Service({
        url: "/app",
        params: {}
    })
}