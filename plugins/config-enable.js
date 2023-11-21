const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
  const optionsFull = `*Opción:* ✨ | WELCOME
*Comando:* ${usedPrefix + command} welcome
*Descripción:* Ativa ou desativa bem vindo no grupo.

--------------------------------

*Opción:* 🌎 | MODO PUBLICO
*Comando:* ${usedPrefix + command} public
*Descripción:* O Bot passa a ser de uso público e/ou privado.
*Nota:* Este comando é só pro meu Mestre Spy, se necessário aqui está o contato wa.me/554884702848.

--------------------------------

*Opción:* 🥵 | MODO HORNY
*Comando:* ${usedPrefix + command} modohorny
*Descripción:* Ativa ou desativa os comandos +18 nesse grupo.

--------------------------------

*Opción:* 🔗 | ANTILINK
*Comando:* ${usedPrefix + command} antilink
*Descripción:* Ativa ou desativa anti-links de WhatsApp.
*Nota:* Nescessário estar ativo modo restrict.

--------------------------------

*Opción:* 🔗 | ANTILINK 2
*Comando:* ${usedPrefix + command} antilink2
*Descripción:* Ativa ou desativa anti-link que iniciarem com HTTPS.
*Nota:* Nescessário estar ativo modo restrict.

--------------------------------

*Opción:* 🔎 | DETECT
*Comando:* ${usedPrefix + command} detect
*Descripción:* Ativa ou desativa as notificações de cambios nesse grupo.

--------------------------------

*Opción:* 🔎 | DETECT 2
*Comando:* ${usedPrefix + command} detect2
*Descripción:* Detecta modificações no grupo e mantém uma melhor gestão.

--------------------------------

*Opción:* ❗ | RESTRICT
*Comando:* ${usedPrefix + command} restrict
*Descripción:* Ativa ou desativa as restrições do Bot, como remover ou adicionar membros ao grupo.
*Nota:* Este comando é só pro meu Mestre Spy, se necessário aqui está o contato wa.me/554884702848.

--------------------------------

*Opción:* ☑️ | AUTOREAD
*Comando:* ${usedPrefix + command} autoread
*Descripción:* Marca como lido todas as mensagens automáticamente.
*Nota:* Este comando é só pro meu Mestre Spy, se necessário aqui está o contato wa.me/554884702848.

--------------------------------

*Opción:* 🔊 | AUDIOS
*Comando:* ${usedPrefix + command} audios
*Descripción:* Ativa ou desativa os comandos de áudios sem prefixo, nesse grupo.

--------------------------------

*Opción:* 👾 | AUTOSTICKER
*Comando:* ${usedPrefix + command} autosticker 
*Descripción:* Todas as imagens ou vídeos enviados no grupo viram adesivos. 

--------------------------------

*Opción:* 💬 | PCONLY
*Comando:* ${usedPrefix + command} pconly
*Descripción:* O Bot só responderá aos comandos se for um chat privado.
*Nota:* Este comando é só pro meu Mestre Spy, se necessário aqui está o contato wa.me/554884702848.

--------------------------------

*Opción:* 🏢 | GCONLY
*Comando:* ${usedPrefix + command} gconly
*Descripción:* O Bot só responderá aos comandos se for um grupo. 
*Nota:* Este comando é só pro meu Mestre Spy, se necessário aqui está o contato wa.me/554884702848.

--------------------------------

*Opción:* ❌ | ANTIVIEWONCE 
*Comando:* ${usedPrefix + command} antiviewonce
*Descripción:* Imagens enviadas para serem visualizadas apenas uma vez são reenviadas normalmente pelo Bot.

--------------------------------

*Opción:* 📵 | ANTILLAMADAS
*Comando:* ${usedPrefix + command} anticall
*Descripción:* O Bot bloqueará as pessoas que ligarem para o Bot.
*Nota:* Este comando é só pro meu Mestre Spy.

--------------------------------

*Opción:* 💬 | ANTIPRIVADO
*Comando:* ${usedPrefix + command} antiprivado
*Descripción:* O Bot bloqueará as pessoas que mandarem mensagem para o privado do Bot. 
*Nota:* Só meu dono irmão.

--------------------------------

*Opción:* 🤬 | ANTITOXIC
*Comando:* ${usedPrefix + command} antitoxic
*Descripción:* Detecta palavrões e avisa o participante do grupo antes de ser eliminado.
*Nota:* O comando _restrict_ precisa estar ativo.

--------------------------------

*Opción:* 🕸️ | ANTITRABAS
*Comando:* ${usedPrefix + command} antitraba
*Descripción:* El Bot detecta textos largos que podrian ser virus y causar lag en el chat y elimina al usuario.
*Nota:* Se necesita tener activo el restrict.

--------------------------------

*Opción:* 👎 | ANTIARABES
*Comando:* ${usedPrefix + command} antiarabes
*Descripción:* Si un numero árabe se uné al grupo, el Bot lo elimina automaticamente.
*Nota:* Se necesita tener activo el welcome y el restrict.

--------------------------------

*Opción:* 👎 | ANTIARABES 2
*Comando:* ${usedPrefix + command} antiarabes2
*Descripción:* Si un numero árabe escribe en el grupo, el Bot lo elimina automaticamente.
*Nota:* Se necesita tener activo el restrict.

--------------------------------

*Opción:* 🤖 | MODEJADIBOT
*Comando:* ${usedPrefix + command} modejadibot
*Descripción:* Ativa ou desativa o uso do comando para sub bots (${usedPrefix}serbot / ${usedPrefix}jadibot). 
*Nota:* Só meu mestre.

--------------------------------

*Opción:* 👑 | MODOADMIN
*Comando:* ${usedPrefix + command} modoadmin
*Descripción:* Bot só responderá admins do grupo.

--------------------------------

*Opción:* 😃 | SIMSIMI
*Comando:* ${usedPrefix + command} simsimi
*Descripción:* O Bot começará a responder às mensagens usando a IA do SimSimi.

--------------------------------

*Opción:* ⏳ | ANTISPAM
*Comando:* ${usedPrefix + command} antispam
*Descripción:* O Bot detecta quando um usuário comanda spam e o bane por 5 segundos e avisa.
*Nota:* Este comando é só pro meu Mestre Spy, se necessário aqui está o contato wa.me/554884702848.

--------------------------------

*Opción:* 🛡️ | ANTIDELETE
*Comando:* ${usedPrefix + command} antidelete
*Descripción:* O Bot detecta quando um usuário exclui uma mensagem e a reenvia.

--------------------------------

*Opción:* 🔊 | AUDIOS_BOT
*Comando:* ${usedPrefix + command} audios_bot
*Descripción:* O áudio do bot está desativado no menu de áudio para todos os bate-papos privados
*Nota:* Este comando é só pro meu Mestre Spy, se necessário aqui está o contato wa.me/554884702848.

--------------------------------

*Opción:* 🤖 | MODOIA
*Comando:* ${usedPrefix + command} modoia
*Descripción:* Se ativa o modo "Inteligencia Artificial" com GPT em todos os chats privados.
*Nota:* Este comando só poderá ser usado por owners.`.trim();

  const isEnable = /true|enable|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'detect2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'simsimi':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'antiporno':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiporno = isEnable;
      break;
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antidelete = isEnable;
      break;
    case 'public':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'antilink2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case 'modohorny':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case 'modoadmin':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'restrict':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'audios_bot':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.audios_bot = isEnable;      
      break;
    case 'modoia':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.modoia = isEnable;      
      break;      
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'autoread':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      //global.opts['autoread'] = isEnable;
      break;
    case 'pconly':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['pconly'] = isEnable;
      break;
    case 'gconly':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['gconly'] = isEnable;
      break;
    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['swonly'] = isEnable;
      break;
    case 'anticall':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'antiprivado':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'antispam':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
    case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case 'antiarabes':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn); 
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'antiarabes2':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
      throw false;
  }
  conn.sendMessage(m.chat, {text: `🗂️ 𝐎𝐏𝐂𝐈𝐎𝐍: ${type}\n🎚️ 𝐄𝐒𝐓𝐀𝐃𝐎: ${isEnable ? 'ACTIVADO' : 'DESACTIVADO'}\n📣 𝐏𝐀𝐑𝐀: ${isAll ? 'ESTE BOT' : isUser ? '' : 'ESTE CHAT'}`}, {quoted: m});
};
handler.help = ['en', 'dis'].map((v) => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i;
export default handler;
