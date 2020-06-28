# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

health = Health.create(
    [
        {
            status: "Suave"
        },
        {
            status: "Suspeito"
        },
        {
            status: "Doente - Covidado"
        },
    ]
)

point = Point.create(
    [
        {
            initials: "ICC",
            name: "Instituto central de ciências",
            address: "No meio de tudo",
            latitude: 2,
            longitude: 3
        },
        {
            initials: "CIC/EST",
            name: "Departamento de ciência da computação",
            address: "Em cima do athos bulcão",
            latitude: 2,
            longitude: 3
        },
        {
            initials: "Amarelinha",
            name: "Amarela pequena",
            address: "N sei tem muitas",
            latitude: 2,
            longitude: 3
        },

    ]
)

user = User.create(
    [
        {
            name: "Felipe",
            password: "Dapedo lindo",
            registration: "19/0027622",
            program: "Ciência da computação",
            health_id: 3
        },
        {
            name: "Dapedo",
            password: "Nath lindo",
            registration: "19/0023512",
            program: "Ciência da computação",
            health_id: 2
        },
        {
            name: "Nath",
            password: "Zito lindo",
            registration: "19/03234223512",
            program: "Ciência da computação",
            health_id: 1
        }
    ]
)

checkin = Checkin.create(
    [
        {
            date: "muitas",
            hour: "várias tbm",
            user_id: 1,
            point_id: 1
        },
        {
            date: "muitas",
            hour: "várias tbm",
            user_id: 2,
            point_id: 2
        },
        {
            date: "muitas",
            hour: "várias tbm",
            user_id: 3,
            point_id: 3
        },
    ]
)