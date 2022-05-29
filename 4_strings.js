const title = 'Hello'
const isViseble = () => Math.random() > 0.5

const template = `
${isViseble() ? `<p>Visible</p>` : '' }
<h1 id="demo" style="color: red">${title}</h1>
`



console.log(template)


// новые ме5тоды у строк
let i =0
const l = (str) =>{
i++
    console.log(i+": " +str)

}
const s = 'Hello'

/*1*/l(s.startsWith('He'))
/*2*/l(s.startsWith('FG'))
/*3*/l(s.endsWith('lo'))
/*4*/l(s.endsWith('sad'))
/*5*/l(s.includes('ll'))
/*6*/l(s.repeat(3))
/*7*/l(s.trim())
/*8*/l(s.trimEnd())
/*9*/l(s.trimStart())
/*10*/l(s.padStart(10,'1234'))
/*11*/l(s.padEnd(8,'abc'))
/*12*/
/*13*/
/*14*/
/*15*/