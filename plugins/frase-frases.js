import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';
const handler = async (m, {conn, command}) => {
  if (command === 'consejo') {
    const consejo = consejos[Math.floor(Math.random() * consejos.length)];
    const mensaje = `╭─◆────◈⚘◈─────◆─╮\n\n⠀⠀🌟 *Conselho do día* 🌟\n\n❥ ${consejo}\n\n╰─◆────◈⚘◈─────◆─╯`;
    await m.reply(mensaje);
  }

  if (command === 'fraseromantica') {
    const frase_romantica = frasesromanticas[Math.floor(Math.random() * frasesromanticas.length)];
    const mensaje = `╭─◆────◈⚘◈─────◆─╮\n\n⠀⠀💖 *Frase romântica* 💖\n\n❥ ${frase_romantica}\n\n╰─◆────◈⚘◈─────◆─╯`;
    await m.reply(mensaje);
  }

  if (command == 'historiaromantica') {
    try {
      const cerpe = await cerpen(`cinta romantis`);
      const storytime = await translate(cerpe.cerita, {to: 'es', autoCorrect: true}).catch((_) => null);
      const titletime = await translate(cerpe.title, {to: 'es', autoCorrect: true}).catch((_) => null);
      conn.reply(m.chat, `᭥🫐᭢ Título: ${titletime.text}
᭥🍃᭢ Autor: ${cerpe.author}
────────────────
${storytime.text}`, m);
    } catch {
      const err = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=Elabora%20una%20historia%20romantica%20que%20use%20el%20siguiente%20formato:%20%E1%AD%A5%F0%9F%AB%90%E1%AD%A2%20T%C3%ADtulo:%20%E1%AD%A5%F0%9F%8D%83%E1%AD%A2%20Autor:%20%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%E2%94%80%20hsitoria...%20adalah&user=user-unique-id`);
      const json = await err.json();
      const fraseChat = json.result;
      conn.reply(m.chat, fraseChat, m);
    }
  }
};
handler.tags = ['frases'];
handler.command = handler.help = ['consejo', 'fraseromantica', 'historiaromantica'];
export default handler;

async function cerpen(category) {
  return new Promise((resolve, reject) => {
    const title = category.toLowerCase().replace(/[()*]/g, '');
    const judul = title.replace(/\s/g, '-');
    const page = Math.floor(Math.random() * 5);
    axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
          const $ = cheerio.load(get.data);
          const link = [];
          $('article.post').each(function(a, b) {
            link.push($(b).find('a').attr('href'));
          });
          const random = link[Math.floor(Math.random() * link.length)];
          axios.get(random).then((res) => {
            const $$ = cheerio.load(res.data);
            const hasil = {
              title: $$('#content > article > h1').text(),
              author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
              kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
              lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
              cerita: $$('#content > article > p').text(),
            };
            resolve(hasil);
          });
        });
  });
}

global.frasesromanticas = [
'Você é a luz que ilumina minha vida na escuridão.',
   'Com você, cada dia é uma nova aventura cheia de amor.',
   'Seus olhos são o reflexo do céu no qual quero me perder.',
   'Cada batida do meu coração leva o seu nome.',
   'Em seus braços encontrei o lar que sempre procurei.',
   'Você é o sonho que eu nunca mais quero acordar.',
   'O verdadeiro amor é estarmos juntos nos bons e maus momentos.',
   'Não existem distâncias quando dois corações estão unidos.',
   'Seus beijos são a melodia que faz meu coração disparar.',
   'Amor é ver em si mesmo o que ninguém mais consegue ver.',
   'Em cada batida do coração, eu levo você comigo para todos os lugares.',
   'O amor que sinto por você é minha força e minha inspiração.',
   'Suas doces palavras são meu alimento emocional diário.',
   'Você é o presente mais precioso que a vida me deu.',
   'O tempo para quando estou ao seu lado.',
   'No seu sorriso encontro a felicidade que procurava.',
   'Cada dia ao seu lado é uma história de amor sem fim.',
   'Nosso amor é como um conto de fadas que se torna realidade.',
   'Seus abraços são meu refúgio neste mundo caótico.',
   'Você é a razão pela qual acredito no destino.',
   'Amor é descobrir todos os dias algo novo que admiro em você.',
   'Seu amor é a tela em branco onde pinto minha felicidade.',
   'Com você o futuro é um caminho cheio de promessas e sonhos.',
   'Você é o farol que guia meu coração na escuridão.',
   'A magia do amor está em cada gesto que compartilhamos.',
   'Nosso amor é uma dança eterna de paixão e ternura.',
   'Em seus braços, o mundo inteiro desaparece e só você e eu existimos.',
   'O amor é a linguagem com a qual nossos corações conversam.',
   'Você é o pedacinho que faltava para completar minha alma.',
   'Amor é encontrar em você tudo que eu nunca soube que precisava.',
];

global.consejos = [
  'Aceite que as mudanças são uma parte natural da vida e aprenda a se adaptar a elas.',
   'Nunca pare de aprender;  O conhecimento é uma ferramenta poderosa.',
   'Cuide da sua saúde física e mental, elas são essenciais para uma vida plena.',
   'Aproveite as pequenas coisas, porque são elas que dão sentido à vida.',
   'Aprenda a perdoar, tanto aos outros como a si mesmo, para libertar o seu coração.',
   'Valorize o tempo que você passa com seus entes queridos, é o presente mais valioso que você pode dar e receber.',
   'Seja gentil e compassivo com os outros, cada ato de bondade pode fazer a diferença em suas vidas.',
   'Aprenda a dizer 'não' quando necessário e estabeleça limites saudáveis.',
   'Encontre tempo para fazer o que você ama, porque isso nutre sua alma e faz você se sentir vivo.',
   'Não se compare com os outros, cada pessoa tem seu caminho e ritmo de vida.',
   'Ouça o seu parceiro com empatia e compreensão, a comunicação é a base de um relacionamento sólido.',
   'Não tenha medo de expressar seus sentimentos, a honestidade é essencial no amor.',
   'Aprenda a ceder e a se comprometer, o amor requer sacrifício e esforço mútuo.',
   'Surpreenda seu parceiro de vez em quando, mantenha viva a centelha do romance.',
   'Respeite a individualidade do seu parceiro e permita que ele cresça como pessoa.',
   'O amor próprio é tão importante quanto amar outra pessoa;  cuide-se e valorize-se.',
   'Lembre-se de que um relacionamento saudável é baseado na confiança e no respeito mútuos.',
   'Escolha alguém que te complemente e faça de você uma versão melhor de você mesmo.',
   'O amor verdadeiro não faz você se sentir menos, faz você se sentir mais.',
   'O amor é um verbo, é uma escolha diária que se cultiva com ações e palavras.',
   'Encontre um emprego pelo qual você seja apaixonado e você nunca sentirá que está trabalhando.',
   'Seja proativo e tome a iniciativa no seu trabalho, isso será valorizado pelos seus superiores.',
   'Aprenda com seus erros e falhas, são oportunidades para crescer e melhorar.',
   'Mantenha uma atitude positiva e procure soluções para os desafios do trabalho.',
   'Cultive bons relacionamentos com seus colegas, o trabalho em equipe é a chave para o sucesso.',
   'Estabeleça metas claras e realistas e trabalhe com determinação para alcançá-las.',
   'Não tenha medo de pedir ajuda ou buscar orientação, sempre há algo novo para aprender.',
   'Reconheça e valorize suas conquistas, comemore seus sucessos, por menores que sejam.',
   'Procure um equilíbrio entre o trabalho e a vida pessoal, ambos os aspectos são importantes.',
   'O trabalho é uma parte importante da sua vida, mas não é a única coisa que define quem você é.',
   'Acredite em você mesmo e na sua capacidade de alcançar o que se propõe a fazer.',
   'Visualize seus objetivos e sonhos, imagine como você se sentirá ao alcançá-los.',
   'Encontre inspiração naqueles que superaram obstáculos semelhantes aos seus.',
   'Aceite os fracassos como parte do processo, eles são oportunidades para aprender e crescer.',
   'Cerque-se de pessoas positivas que o impulsionam.',
   'Mantenha a mente aberta e a disposição para aprender coisas novas.',
   'Lembre-se por que você começou quando se sentir desmotivado;  reconecte-se com seu propósito.',
   'Divida seus objetivos em pequenos passos, que tornarão o caminho mais alcançável e menos cansativo.',
   'Não tenha medo de perseguir seus sonhos, a vida é muito curta para viver com arrependimentos.',
   'Confie que, com esforço e perseverança, você pode alcançar tudo o que deseja.',
];
