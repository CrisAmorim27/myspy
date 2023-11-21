import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import {mediafiredl} from '@bochilteam/scraper';

const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙼𝙴𝙳𝙸𝙰𝙵𝙸𝚁𝙴, 𝙴x𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} https://www.mediafire.com/file/r0lrc9ir5j3e2fs/DOOM_v13_UNCLONE*`;
  try {
    const resEX = await mediafiredl(args[0]);
    const captionES = `
*📓 𝙽𝙾𝙼𝙱𝚁𝙴:* ${resEX.filename}
*📁 𝙿𝙴𝚂𝙾:* ${resEX.filesizeH}
*📄 𝚃𝙸𝙿𝙾:* ${resEX.ext}

*⏳ Vou baixar aqui e já te mando. . . .* 
`.trim();
    m.reply(captionES);
    await conn.sendFile(m.chat, resEX.url, resEX.filename, '', m, null, {mimetype: resEX.ext, asDocument: true});
  } catch {
    try {
      const res = await mediafireDl(args[0]);
      const {name, size, date, mime, link} = res;
      const caption = `
*📓 𝙽𝙾𝙼𝙱𝚁𝙴:* ${name}
*📁 𝙿𝙴𝚂𝙾:* ${size}
*📄 𝚃𝙸𝙿𝙾:* ${mime}

*⏳ To enviand𝙾. . . .* 
`.trim();
      await m.reply(caption);
      await conn.sendFile(m.chat, link, name, '', m, null, {mimetype: mime, asDocument: true});
    } catch {
      await m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁 *\n\n*- Link tem que ser assim seu burro:*\n*◉ https://www.mediafire.com/file/r0lrc9ir5j3e2fs/DOOM_v13_UNCLONE*');
    }
  }
};
handler.help = ['mediafire'].map((v) => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i;
export default handler;

async function mediafireDl(url) {
  const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
  const $ = cheerio.load(res.data);
  const link = $('#downloadButton').attr('href');
  const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ', '').replaceAll('\n', '');
  const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
  const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ', '');
  let mime = '';
  const rese = await axios.head(link);
  mime = rese.headers['content-type'];
  return {name, size, date, mime, link};
}
