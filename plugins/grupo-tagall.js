let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let vn = './media/Invocar.mp3'
let pesan = args.join` `
let oi = `*𝓒𝓪𝓭𝓪 𝓵𝓸𝓰𝓻𝓸 𝓬𝓸𝓶𝓲𝓮𝓷𝔃𝓪 𝓬𝓸𝓷 𝓵𝓪 𝓭𝓮𝓬𝓲𝓼𝓲𝓸́𝓷 𝓭𝓮 𝓲𝓷𝓽𝓮𝓷𝓽𝓪𝓻𝓵𝓸* ${pesan}`
let teks = `*🫧• 𝙄𝙉𝙑𝙊𝘾𝘼𝙉𝘿𝙊 𝙂𝙍𝙐𝙋𝙊 •🫧 *\n\n ${oi}\n\n🫶🏻 ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂\n`
for (let mem of participants) {
teks += `🌀•.  @${mem.id.split('@')[0]}\n`}
teks += `*🐾AurecitaBB*\n\n*😼♥️*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|todas|todos|todes|fantasmas|adornos|plantas)$/i
handler.admin = true
handler.group = true
export default handler
