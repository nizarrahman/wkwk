// JANGAN TERLALU TOLOL ANAK MUDA

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `Hello kak ${ye} Lagi Nyari Sc Ya? 

💌 CARI AJA DIBAWAH INI

📮 Instagram :
instagram.com/nizarrrahman.f_
📮 GITHUB :
github.com/nizarrahman/

📮 JANGAN LUPA MAMPIR :
https://nizarrahman.github.io/myProfile/#`

await conn.sendBut(m.chat, esce, '📮 DONT FORGET TO FOLLOW MY ACCOUNT', 'Thanks', '.menu', m) 
}
handler.help = ['sc', 'source code']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
