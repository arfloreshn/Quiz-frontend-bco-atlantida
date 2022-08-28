export class Climas {

    constructor(
        region: string,
        currentConditions: {
            dayhour: string,
            temp: {
                c: number,
                f: number
            },
            precip: string,
            humidity: string,
            wind: {
                km: number,
                mile: number
            },
            iconURL: string,
            comment: string
        },
        next_days: [
            {
                day: string,
                comment: string,
                max_temp: {
                    c: number,
                    f: number
                },
                min_temp: {
                    c: number,
                    f: number
                },
                iconURL: string
            }],
        contact_author: {
            email: string,
            auth_note: string
        },
        data_source: string

    ) { }
}