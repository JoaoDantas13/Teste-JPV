export  interface Galeria{
        id: number | null,
        name: string,
        powerstats: {
            intelligence: string | null,
            strength: string | null,
            speed: string | null,
            durability: string | null,
            power: string | null,
            combat: string | null
        },
        biography: {
            full_name: string | null,
            alter_egos: string | null,
            aliases: [],
            place_of_birth: string | null,
            first_appearance: string | null,
            publisher: string | null,
            alignment: string | null
        },
        appearance: {
            gender: string | null,
            race: string | null,
            height: [],
            weight: [],
            eye_color: string | null,
            hair_color: string | null
        },
        work: {
            occupation:string | null,
            base: string | null
        },
        connections: {
            group_affiliation: string | null,
            relatives:string | null
        },
        image: {
            url: string | null
        }
}
