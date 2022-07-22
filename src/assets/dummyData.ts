const rows = [
    {
        id: 1,
        name: "Kaan",
        surname: "Bayram",
        birthDate: (new Date()).toDateString()
    },
    {
        id: 2,
        name: "Kaan1",
        surname: "Bayram",
        birthDate: (new Date()).toDateString()
    },
    {
        id: 3,
        name: "Kaan2",
        surname: "Bayram",
        birthDate: (new Date()).toDateString()
    },
    {
        id: 4,
        name: "Kaan3",
        surname: "Bayram",
        birthDate: (new Date()).toDateString()
    },
    {
        id: 5,
        name: "Kaan4",
        surname: "Bayram",
        birthDate: (new Date()).toDateString()
    },
    {
        id: 6,
        name: "Kaan5",
        surname: "Bayram",
        birthDate: (new Date()).toDateString()
    },
    {
        id: 7,
        name: "Kaan6",
        surname: "Bayram",
        birthDate: (new Date()).toDateString()
    }, {
        id: 8,
        name: "Kaan7",
        surname: "Bayram",
        birthDate: (new Date()).toDateString()
    }, {
        id: 9,
        name: "Kaan8",
        surname: "Bayram",
        birthDate: (new Date()).toDateString()
    }, {
        id: 10,
        name: "Kaan9",
        surname: "Bayram",
        birthDate: (new Date()).toDateString()
    }
];


const columns = [
    {
        name: "id",
        type: "",
        order: 0,
        isUniqDataField: true,
        caption: "Id",
    },
    {
        name: "name",
        type: "",
        order: 1,
        isUniqDataField: false,
        caption: "Name",
    },
    {
        name: "surname",
        type: "",
        order: 2,
        isUniqDataField: false,
        caption: "Surname",
    },
    {
        name: "birthDate",
        type: "",
        order: 3,
        isUniqDataField: false,
        caption: "Birth Date",
    }
]

export { rows, columns }