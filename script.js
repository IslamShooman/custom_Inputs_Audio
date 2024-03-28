function getQuranApi(){


    async function fetchReaders(){
        // const req = await fetch("https://api.alquran.cloud/v1/quran/ar.alafasy")
        const req = await fetch(`https://api.alquran.cloud/v1/edition?format=audio&language=ar&type=versebyverse`)
        const data = await req.json()
        const readers = data["data"]
        console.log(readers)
        getReaders(readers)

    }fetchReaders()

    // async function getAudios(){
    //     // const req = await fetch("https://api.alquran.cloud/v1/quran/ar.alafasy")
    //     const req = await fetch(`https://api.alquran.cloud/v1/quran/ar.${nameReader}`)
    //     const data = await req.json()
    //     const audiosQuran = data["data"]["surahs"][sra]["ayahs"][aya]["audio"]
    //     console.log(data)
    //     console.log(audiosQuran)
    //     putSrc(audiosQuran)
    // }getAudios()


    // async function getQuranText(){
    //     const req = await fetch("https://api.alquran.cloud/v1/quran")
    //     const data = await req.json()
    //     // const audiosQuran = data["data"]["surahs"][0]["ayahs"][0]["audio"]
    //     console.log(data)
    //     // console.log(audiosQuran)
    // }
    // getQuranText()

    // async function getQuranTafseer(){
    //     const req = await fetch("https://api.alquran.cloud/v1/quran/type")
    //     const data = await req.json()
    //     // const audiosQuran = data["data"]["surahs"][0]["ayahs"][0]["audio"]
    //     console.log(data)
    //     // console.log(audiosQuran)
    // }
    // getQuranTafseer()



}
getQuranApi()

const readersSelect = document.getElementById("readers")
const surahsSelect = document.getElementById("sra")
const ayaSelect = document.getElementById("aya")
function getReaders(readers){
    readers.forEach(reader=>{
        readersSelect.innerHTML += `<option value="1" data-name="${reader["identifier"]}">${reader["name"]}</option>`
    })
}
function getSurahs(surahs){
    surahs.forEach(surah=>{
        surahsSelect.innerHTML += `<option value="1" data-name="${surah["identifier"]}">${surah["name"]}</option>`
    })
}
function getAyahs(readers){
    readers.forEach(reader=>{
        readersSelect.innerHTML += `<option value="1" data-name="${reader["identifier"]}">${reader["name"]}</option>`
    })
}
function onSubmit(){
    const reader = readersSelect.options[readersSelect.selectedIndex].dataset.name
    const sra = surahsSelect.options[surahsSelect.selectedIndex].value
    const aya = ayaSelect.options[ayaSelect.selectedIndex].value
    console.log(sra)
    console.log(aya)

    let nameReader = reader
    console.log(nameReader)

    async function getAudios(){
        // const req = await fetch("https://api.alquran.cloud/v1/quran/ar.alafasy")
        const req = await fetch(`https://api.alquran.cloud/v1/quran/${nameReader}`)
        const data = await req.json()
        const audiosQuran = data["data"]["surahs"][sra]["ayahs"][aya]["audio"]
        console.log(data)
        console.log(audiosQuran)
        putSrc(audiosQuran)
    }getAudios()
}

function putSrc(src){
    const aud = document.getElementById("audioQuran")
    aud.src = src
}
