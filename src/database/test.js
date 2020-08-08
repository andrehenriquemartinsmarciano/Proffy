const Database = require('./db')
const createProffy = require('./createProffy')
Database.then(async (db) => {
    // Inserir dados
    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://github.com/diego3g.png",
        whatsapp: "900000000",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.",
    }
    classValue = {
        subject: 1,
        cost: "20",
        // o proffy id vira pelo banco de dados
    }
    classScheduleValues = [
        //class_id virá pelo banco de dados, após cadastramos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]
    //await createProffy(db, {proffyValue,classValue,classScheduleValues})
    // Consultar dados inseridos
    const selectedProffys = await Database.finally("SELECT * FROM proffys")
    //console.log(selectedProffys)
    //consultar as classes de um determinado professor
    //e trazer junto os dados do professor
    const selectedClassesAndProffy = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
 `)
    //console.log(selectedClassesAndProffy)

    //o horário que a pessoa trabalha, por exemplo, é das 8 - 18h
    //o horário do time_from (8h) precisa ser menor  ou igual ao horário solicitado
    // o time_to precisa ser acima
    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <=""
        AND class_schedule.time_to > "420"
    `)
   // console.log(selectedClassesSchedules)
})