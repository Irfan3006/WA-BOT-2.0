// Coding WhatsaApp Bot by Irfan Syaraifudin

const { Client, LocalAuth, MessageMedia, Buttons } = require('whatsapp-web.js');

const moment = require("moment-timezone");
moment.tz.setDefault("Asia/Jakarta").locale("id");
const date = require('date-and-time');
const fs = require("fs");
//const process = require("proces")

const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');

const google = require('google-it')

const { spawn, exec } = require('child_process')


const tiktok = require('tiktok-scraper-without-watermark');
const max = require('events').EventEmitter.prototype._maxListeners = 100;
const { get } = require("https");

const qrcode = require('qrcode-terminal');
const express = require('express');
const app = express();
const fetch = require('node-fetch');

const projectId = 'main-dialog-ibqu'
const sessionId = uuid.v4();
const path = require('path');
const mime = require('mime-types');

//yt
let player1Score = 0;
let player2Score = 0;
//aw
const str_replace = require('str_replace');
//const fs = require('fs')
const puppeteer = require('puppeteer')
const args = process.argv.slice(2);
const url = str_replace('\[', ' ', args)
const crawl = async (url) => {
  try {
    //console.log(`Crawling ${url}`)
    const browser = await puppeteer.launch({ executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'], })
    const page = await browser.newPage()
    await page.goto(url)
    //const selector = '.style-scope.ytd-video-renderer'
    const selector2 = '#video-title'
    //await page.waitForSelector(selector)
    await page.waitForSelector(selector2)
    //const list = []
    //const links = await page.$$eval(selector2, am => am.filter(e => e.href).map(e => e.href))
    const links2 = await page.$$eval(selector2, list => list.map(n => n.getAttribute('aria-label')))
    const links3 = await page.$$eval(selector2, list => list.map(n => n.getAttribute('href')))
    //list.push({links,links2})
    let text = "";
    for (let i = 0; i < 6; i++) {
      text += links2[i] + " - https://www.youtube.com" + links3[i] + "\n";
      text += "\n";
    }
    console.log(text);
    await browser.close()
  }
  catch (err) {
    console.log(err)
  }
}

crawl(url)

const sessionClient = new dialogflow.SessionsClient({
  keyFilename: "main-dialog-ibqu-b97f49d8b989.json"
});


const sessionPath = sessionClient.projectAgentSessionPath(
  projectId,
  sessionId
);

const Scraper = require('@yimura/scraper').default;
const youtube = new Scraper();


async function Chatting(inputText) {
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // query untuk dikirim ke agen dialogflow
        text: inputText,
        // Bahasa yang digunakan (id-ID)
        languageCode: 'id-ID',
      },
    },
  };

  // Kirim permintaan dan hasil log
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  return result.fulfillmentText;

}

const authStrategy = new LocalAuth({
  clientId: "someCustomId",
})

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',

    authStrategy,
  },

});

const ffmpeg = require('@ffmpeg-installer/ffmpeg');
console.log(ffmpeg.path, ffmpeg.version);

const axios = require('axios');
const { getMaxListeners } = require('process');

function donwloadGambar(url) {
  return axios.get(url, { responseType: 'arraybuffer' })
    .then(response => Buffer.from(response.data, "binary").toString("base64"))
}

client.on('qr', (qr) => {
  // Menghasilkan dan memindai kode ini dengan ponsel Anda
  console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
  getUnreadMsg(client);

});

const prefix = "!";

client.on('message', async msg => {


  const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
  const tanggal = date.format(new Date(), 'DD-MM-YYYY');
  const public = "PUBLIC"

  try {
    client.sendMessage(msg.from, await Chatting(msg.bod));
  }
  catch (err) {
    console.log("opsie, " + err.message)
  }

  if (msg.body[0] == prefix) {
    let [cmd, ...args] = msg.body.slice(1).split(" ");
    args = args.join(" ");
  }
  if (msg.body.toLowerCase() == "say") {
    client.sendMessage(msg.from, args);
  }

  if (cmd == "gambar1") {
    const gambar = await donwloadGambar("https://images6.alphacoders.com/100/1002129.jpg");
    const media = new MessageMedia('image/jpg', gambar);
    client.sendMessage(msg.from, media);
  }
  if (cmd == "gambar2") {
    const gambar = await donwloadGambar("https://a-static.besthdwallpaper.com/kaguya-sama-love-is-war-chika-fujiwara-wallpaper-1366x768-17609_46.jpg");
    const media = new MessageMedia('image/jpg', gambar);
    client.sendMessage(msg.from, media);
  }

  if (cmd == "gambar3") {
    const media = MessageMedia.fromFilePath('./IMAGES/chika.jpg');
    client.sendMessage(msg.from, media);
  }
  if (cmd == "waifu" || cmd == "Waifu" || cmd == "WAIFU" || cmd == "anime" || cmd == "Anime" || cmd == "ANIME" || cmd == "gambar") {
    caption = ["LARI ADA WIBU 🏃‍♀️🏃‍♂️", "JANJI GAK KE KAMAR MANDI", "IH WIBU", "AKU BARU SADAR KALAU ANIME ITU GAK SAMA SEPERTI DUNIA NYATA", "JANGAN LUPA !donasi ADIK ADIK", "SADAR BOS CUMA KARTUN", "Tch nandayo koitse, mendokusai",
      "“ Tidak guna memberikan semangat untuk orang yang sama sekali tidak berniat apa yang dia lakukan” Hinata Shoyo ~ Haikyuu", "GEPENG DEK", "NJIR WIBU", "CIH MANUSIA HANYALAH ALAT", "mendokusai ", "😅🫵",
      "https://bit.ly/Request-Gambar"]
    linkgambar = ["https://cdn.discordapp.com/ephemeral-attachments/1040150974880284722/1083703605338578974/https_maze-guru.oss-accelerate.aliyuncs.com_image_FB329D3FBD41B874BAF30B36337CD8E9-01.jpg", "https://cdn.discordapp.com/attachments/1011226226788155402/1083702602799267962/https_maze-guru.png", "https://i.waifu.pics/rF-pZ8a.jpg", "https://cdn.discordapp.com/attachments/1011226226788155402/1029765227211935874/unknown.png", "https://cdn.discordapp.com/attachments/1011226226788155402/1028642532697063594/export_1662737120304.JPG", "https://cdn.discordapp.com/attachments/1011226226788155402/1028642532994863174/IMG_1079.PNG", "https://i.waifu.pics/WMTQpNf.jpg", "https://i.waifu.pics/L~qlLcJ.jpg", "https://i.waifu.pics/vd4XAVZ.jpg", "https://i.waifu.pics/rzLcgTU.jpg", "https://i.waifu.pics/bZI5L7-.png", "https://i.waifu.pics/zkJ5AHV.png", "https://i.waifu.pics/k-akF2p.jpg", "https://i.waifu.pics/NOJicBh.png", "https://i.pinimg.com/originals/da/96/1b/da961bed337182e847bf3b67c4e8f44f.jpg", "https://i.waifu.pics/_laUTLb.jpg", "https://cdn.discordapp.com/attachments/1011226226788155402/1019205010174791780/unknown.png", "https://cdn.discordapp.com/attachments/1011226226788155402/1019201538763268156/unknown.png", "https://i.pinimg.com/originals/c1/e4/bf/c1e4bf513b531e3e68a5275b037aae62.jpg", "https://i.pinimg.com/originals/4d/57/53/4d5753fbd5150e97771e4674360bbfd1.jpg", "https://i.pinimg.com/originals/0c/b6/04/0cb604d33f632a0ffaae6cba7ca50b8a.jpg", "https://cdn.discordapp.com/attachments/1011226226788155402/1018526336307953714/unknown.png", "https://i.waifu.pics/7ELy73A.gif", "https://i.waifu.pics/-WhXn5t.jpg", "https://i.waifu.pics/8-xAiM1.png", "https://i.waifu.pics/eRKDedk.jpg", "https://i.waifu.pics/DjgwmRf.jpg", "https://i.waifu.pics/SoQkXA3.jpg", "https://i.waifu.pics/9MqLD4d.jpg", "https://i.waifu.pics/QQW7VKy.jpg", "https://i.waifu.pics/QQW7VKy.jpg", "https://i.waifu.pics/JIQ9QZ_.jpg", "https://i.waifu.pics/tLc5RfN.png", "https://cdn.discordapp.com/attachments/1011226226788155402/1014193116129021982/unknown.png", "https://i.waifu.pics/nxREZO6.png", "https://i.waifu.pics/II9WeHB.png", "https://cdn.discordapp.com/attachments/1011226226788155402/1013835886263291987/unknown.png", "https://i.waifu.pics/BwHGNNK.png", "https://cdn.discordapp.com/attachments/1011226226788155402/1013835718579212428/unknown.png", "https://i.waifu.pics/CxL~Tbz.jpg", "https://i.waifu.pics/~bMLxB_.jpg", "https://i.waifu.pics/AoPMBb_.jpeg", "https://i.waifu.pics/TrwecOg.jpg", "https://i.waifu.pics/GLGHJqM.jpg", "https://i.waifu.pics/CmAsGKo.jpg", "https://i.waifu.pics/E_U9eeg.jpg", "https://cdn.discordapp.com/attachments/1011226226788155402/1011913335534534676/unknown.png", "https://i.waifu.pics/sLd~4NU.jpg", "https://i.waifu.pics/tE7-FfJ.jpg", "https://i.waifu.pics/kBYBvIP.jpg", "https://i.waifu.pics/WGTA1vN.png", "https://i.waifu.pics/VxoRcT4.jpeg", "https://i.waifu.pics/5At1P4A.jpg", "https://i.waifu.pics/8m-r1_O.png", "https://i.waifu.pics/ysB8wtC.jpg", "https://i.waifu.pics/lA-Jaec.jpg", "https://i.waifu.pics/yYcF1Me.png", "https://i.waifu.pics/P6X-ph6.jpg", "https://i.waifu.pics/Y5-tibK.png", "https://i.waifu.pics/gnpc_Lr.jpeg", "https://i.waifu.pics/V2kTPbJ.jpg", "https://i.waifu.pics/5tN4N4D.jpg", "https://i.waifu.pics/LOR7MBO.jpg", "https://i.waifu.pics/CNzs4Pd.jpg", "https://i.waifu.pics/i~RQhRD.png", "https://i.waifu.pics/45IA-ur.jpg", "https://i.waifu.pics/cG2o0Hs.jpg", "https://i.waifu.pics/0paXBfG.png", "https://i.waifu.pics/ueqBS0o.jpg", "https://i.waifu.pics/2qfjhSP.jpg", "https://i.waifu.pics/r0UW03D.jpg", "https://s1.zerochan.net/Oosaki.Amana.600.3734915.jpg", "https://s1.zerochan.net/San.%28Mononoke.Hime%29.600.913337.jpg", "https://s1.zerochan.net/Mikasa.Ackerman.600.3718808.jpg", "https://i.waifu.pics/94LH-aU.jpg", "https://i.waifu.pics/slz3yPL.png", "https://i.waifu.pics/LhA7EZ9.jpg", "https://i.waifu.pics/pgLtw5E.jpg", "https://i.waifu.pics/ZPXy_XG.jpg", "https://data.whicdn.com/images/362558858/original.jpg", "https://i.pinimg.com/474x/46/60/99/46609963809bc952e57334e09d5d6162.jpg", "https://memegenerator.net/img/instances/85622524.jpg", "https://i.waifu.pics/cKe~bpZ.jpg", "https://i.waifu.pics/XSy69q6.png", "https://a-static.besthdwallpaper.com/kaguya-sama-love-is-war-chika-fujiwara-wallpaper-1366x768-17609_46.jpg", "https://images6.alphacoders.com/100/1002129.jpg", "https://i.waifu.pics/Fs1hUxz.jpg", "https://c4.wallpaperflare.com/wallpaper/393/423/638/anya-forger-spy-x-family-anime-girls-hd-wallpaper-preview.jpg", "https://i.waifu.pics/R5n5P7f.png", "https://i.waifu.pics/Hd7NRd9.png", "https://i.waifu.pics/_NBeyLj.png", "https://i.waifu.pics/dPXxQqE.png", "https://i.waifu.pics/mJkPaVR.png", "https://i.waifu.pics/xUYXg76.png", "https://i.waifu.pics/wPbusA9.png", "https://i.pinimg.com/originals/9a/5e/03/9a5e03b5bb22c46c3ba17ef896b15063.jpg", "https://cdn.discordapp.com/attachments/1011226226788155402/1011226304588283965/unknown.png", "https://cdn.discordapp.com/attachments/1011226226788155402/1011226288842866798/unknown.png", "https://cdn.discordapp.com/attachments/1011226226788155402/1011226258245435484/unknown.png", "https://i.waifu.pics/VIJYb_Z.png", "https://cdn.discordapp.com/attachments/1011226226788155402/1013833447602667631/unknown.png", "https://i.waifu.pics/04afe1y.jpg", "https://i.waifu.pics/2Xdpuov.png", "https://cdn.discordapp.com/attachments/1011226226788155402/1011244669193175200/unknown.png", "https://cdn.discordapp.com/attachments/1011226226788155402/1013832659358711868/unknown.png", "https://cdn.discordapp.com/attachments/1011226226788155402/1013831770875121715/unknown.png", "https://cdn.discordapp.com/attachments/1011226226788155402/1011244739410006056/unknown.png"]
    let link = linkgambar[Math.floor(Math.random() * linkgambar.length)];
    let pesan = caption[Math.floor(Math.random() * caption.length)];
    const media = await MessageMedia.fromUrl(link);
    //let button = new Buttons('Button body',[{body:'!waifu'}],'title','footer');
    msg.reply(pesan, undefined, { media: media })// msg.from, button);

  }

  if (cmd == "husbu" || cmd == "Husbu" || cmd == "HUSBU" || cmd == "gambar" || cmd == "anime" || cmd == "ANIME" || cmd == "Anime" || cmd == "gambar") {
    linkgambar = ["https://cdn.wallpapersafari.com/83/96/oxfdU1.jpg", "https://cdn.discordapp.com/attachments/1011229329457418313/1028642582319865926/IMG_1080.JPG", "https://cdn.discordapp.com/attachments/1011229329457418313/1022048299815018537/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1022047286555066408/unknown.png", "https://i.pinimg.com/originals/16/4a/45/164a45afe0204ab27d9570779c37efab.jpg", "https://i.pinimg.com/originals/cf/b7/a9/cfb7a9d6d6b8fb84acc64a1816be84ae.jpg", "https://i.pinimg.com/originals/1e/c4/c5/1ec4c52cca954597d136ca8e17317b9b.jpg", "https://cdn.discordapp.com/attachments/1011229329457418313/1018918377340801024/unknown.png", "https://i.pinimg.com/originals/e3/23/e8/e323e8e271474df74714cf19dc2255a5.jpg", "https://i.pinimg.com/originals/58/53/0d/58530db9eb585865cb08c135ae7ff9ca.jpg", "https://i.pinimg.com/originals/b6/f7/92/b6f792e2454dc4c3507e523cf44e5fc5.jpg", "https://i.pinimg.com/originals/ef/22/2e/ef222e18cb66480364d07e3fe27ac2b3.jpg", "https://i.pinimg.com/originals/26/9d/72/269d724c582c018b6d5a4d434f321cd6.jpg", "https://i.pinimg.com/originals/85/45/5c/85455ca489c991d5dc9fb8388f05defb.jpg", "https://cdn.discordapp.com/attachments/1011229329457418313/1014193487702405214/unknown.png", "https://i.pinimg.com/originals/91/95/e1/9195e1c6a3f9444c4bda829751ab9ba7.jpg", "https://cdn.discordapp.com/attachments/1011229329457418313/1018915659515707483/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1014193226447601685/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1014192954497318912/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1011913023839010886/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1013835216554557460/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1013834995053379754/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1011912582669537310/unknown.png", "https://i.pinimg.com/originals/e0/9d/26/e09d26c64fc636b78f452df2aaf66820.jpg", "https://c4.wallpaperflare.com/wallpaper/616/450/559/anime-hunter-x-hunter-killua-zoldyck-hd-wallpaper-preview.jpg", "https://cdn.discordapp.com/attachments/1011229329457418313/1011245198182981712/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1011245230936309790/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1011245260980113448/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1011245316768538624/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1011245357558136882/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1011245384527532062/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1011245415892521000/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1011245433215012925/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1011245456703094834/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1011245467138531379/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1011245486524608622/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1011245507156377690/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1011245556342992966/unknown.png", "https://assets-a2.kompasiana.com/items/album/2021/06/17/images-jpeg-5-60cade4695a0ab63e81214e2.jpg?t=o&v=500", "https://belajartulis.com/wp-content/uploads/2021/03/boruto-full-karma-800x400.jpg", "https://cdn.discordapp.com/attachments/1011229329457418313/1013438025742700584/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1013438682969161809/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1013438712400592947/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1013438735238582282/unknown.png", "https://cdn.discordapp.com/attachments/1011229329457418313/1013438941430550609/unknown.png"]
    caption = ["GEPENG DEK", "KANG HALU 😅🫵", "LARI WIBU 🏃‍♂️🏃‍♀️", "BAU BAWANG😀", "Tcih watashi benci semua orang", "https://bit.ly/Request-Gambar",]
    let link = linkgambar[Math.floor(Math.random() * linkgambar.length)];
    let chat = caption[Math.floor(Math.random() * caption.length)];
    const media = await MessageMedia.fromUrl(link);
    msg.reply(chat, undefined, { media: media });
  }

  if (msg.body.toLowerCase() === "!neko" || msg.body.toLowerCase() === "!cat" || msg.body.toLowerCase() === "!anime" || msg.body.toLowerCase() === "!gambar") {
    linbkgambar = ["https://cdn.discordapp.com/ephemeral-attachments/1040150974880284722/1083706183887634552/https_maze-guru.oss-accelerate.aliyuncs.com_image_5A608F87844ED0FE197CC529DAD8337B-01.jpg", "https://i.waifu.pics/Ajo6Wsi.jpg", "https://i.waifu.pics/SjROXS7.jpg", "https://i.waifu.pics/UD4KTxW.png", "https://i.waifu.pics/UqJxBw0.jpg", "https://cdn.discordapp.com/attachments/1033772700402974901/1033773232450449539/8d8df30741c5dbe2ec385db73fde1b18.jpg", "https://cdn.discordapp.com/attachments/1033772700402974901/1033773293821493258/02718ebd3f9e98416d9175ac705b4a0e.jpg", "https://cdn.discordapp.com/attachments/1033772700402974901/1033773321357099008/8561b61194074cf7e48c34aa5822431e.jpg", "https://cdn.discordapp.com/attachments/1033772700402974901/1033773344954273812/1619038798_15-pibig_info-p-neko-tyan-anime-krasivo-17.jpg", "https://cdn.discordapp.com/attachments/1033772700402974901/1033773345470160916/331277411.jpg", "https://cdn.discordapp.com/attachments/1033772700402974901/1033773365187596318/anime_neko_render_by_nanavichan_dcinel3-fullview.png", "https://cdn.discordapp.com/attachments/1033772700402974901/1033773400256155679/Anime-Neko-stella2015-37767798-500-699.png", "https://cdn.discordapp.com/attachments/1033772700402974901/1033773444686430248/ANIME-PICTURES.NET_-_718097-1800x1767-original-nekohashizuku-nachi-single-longhair-fringe.png", "https://cdn.discordapp.com/attachments/1033772700402974901/1033773452898881648/ANIME-PICTURES.NET_-_728862-1100x1100-virtualyoutuber-hololive-hololiveenglish-gawrgura-huyase-single.png", "https://cdn.discordapp.com/attachments/1033772700402974901/1033773465146241054/d80cc1654138c08202ea9cdd2a9cb2cdea4c3029r1-800-1000v2_uhq.jpg", "https://cdn.discordapp.com/attachments/1033772700402974901/1033773479159406613/flat750x1000075f.jpg", "https://cdn.discordapp.com/attachments/1033772700402974901/1033773498147024996/neko-ears-anime-girls-pink-ribbon-hd-wallpaper-preview.jpg", "https://i.waifu.pics/cYDzDOZ.jpg"];
    caption = ["Miaw😺", "🐈", "LARI WIBU 🏃‍♂️🏃‍♀️", "BAU WHISKAS🙀", "fury indonesia, solid solid solid!!", "https://bit.ly/Request-Gambar",]
    let link = linbkgambar[Math.floor(Math.random() * linbkgambar.length)];
    let chat = caption[Math.floor(Math.random() * caption.length)];
    const media = await MessageMedia.fromUrl(link);
    msg.reply(chat, undefined, { media: media });
  }

  if (cmd == "meme" || cmd == "Meme" || cmd == "MEME" || cmd == 'gambar') {
    linkgambar = ["https://i.kym-cdn.com/photos/images/newsfeed/001/895/227/980.jpg", "https://cdn.discordapp.com/attachments/1010126068134457424/1031936735866785822/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1030837872036679680/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1028642609150828554/IMG_1078.PNG", "https://i.pinimg.com/originals/82/47/cf/8247cf8e8ae30255add5a73c870a86e0.jpg", "https://cdn.discordapp.com/attachments/1010126068134457424/1018072335187714128/unknown.png", "https://cdn.discordapp.com/attachments/833284841540943892/1013478964209131562/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1014197796137619547/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1014197568189767762/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1014197080220258426/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1014196520167407747/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1014196245755076619/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1014195900899410040/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1014195702408151040/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1014195514650136677/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1014195227055112263/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1011915850586013706/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1011915455314792498/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1011911816273744023/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1011910980755800064/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1011910581382549544/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1018350330116853900/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1011906907033849976/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1011906745192431676/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1011906576774336592/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1011906372167802920/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1011906184728543312/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1011905822277767198/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1011905106217795654/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1011262898976325663/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1011262661188661320/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1011257149076275200/unknown.png", "https://media.discordapp.net/attachments/1010126068134457424/1010473121498791936/unknown.png", "https://media.discordapp.net/attachments/1010126068134457424/1010472687702921266/unknown.png", "https://media.discordapp.net/attachments/1010126068134457424/1010472144959967272/unknown.png?width=676&height=676", "https://media.discordapp.net/attachments/1010126068134457424/1010471835437117481/unknown.png?width=676&height=676", "https://media.discordapp.net/attachments/1010126068134457424/1010471475821682738/unknown.png?width=676&height=676", "https://media.discordapp.net/attachments/833284841540943892/1010446962715275315/FB_IMG_1660979712887.jpg", "https://media.discordapp.net/attachments/1010126068134457424/1010469346285457458/unknown.png", "https://media.discordapp.net/attachments/1010126068134457424/1010469252886704138/unknown.png", "https://media.discordapp.net/attachments/1010126068134457424/1010468986871361576/unknown.png", "https://media.discordapp.net/attachments/1010126068134457424/1010468517868486666/unknown.png?width=676&height=676", "https://media.discordapp.net/attachments/1010126068134457424/1010468271729938505/unknown.png?width=676&height=676", "https://media.discordapp.net/attachments/1010126068134457424/1010467996076093460/unknown.png?width=676&height=676", "https://media.discordapp.net/attachments/1010126068134457424/1010467468394889296/unknown.png?width=676&height=676", "https://media.discordapp.net/attachments/1010126068134457424/1010466806873464872/unknown.png", "https://media.discordapp.net/attachments/1010126068134457424/1010467164316246028/unknown.png?width=380&height=676", "https://media.discordapp.net/attachments/1010126068134457424/1010466384930680863/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1010465905186189342/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1010231948381278429/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1010229670576398406/unknown.png", "https://cdn.memes.com/up/24551061595129931/i/1595246140879.jpg", "https://cdn.discordapp.com/attachments/1010126068134457424/1010126752909111316/299514668_3084717601839837_960423698678917824_n.jpg", "https://cdn.discordapp.com/attachments/1010126068134457424/1010129806077202532/285688895_126861839787513_6066360208566354097_n.jpg", "https://cdn.discordapp.com/attachments/1010126068134457424/1010129806790238268/298586498_146334787729111_2607171448847337321_n.jpg", "https://cdn.discordapp.com/attachments/1010126068134457424/1010129806077202532/285688895_126861839787513_6066360208566354097_n.jpg", "https://cdn.discordapp.com/attachments/1010126068134457424/1010129806333063238/293058204_180746957649868_8669246689037163425_n.jpg", "https://cdn.discordapp.com/attachments/833284841540943892/1009410768409722932/FB_IMG_1660732612131.jpg", "https://img-9gag-fun.9cache.com/photo/agLddDr_460s.jpg", "https://cdn.discordapp.com/attachments/1010126068134457424/1010129807020920862/298751012_839825103846776_4013871737651708262_n.jpg", "https://cdn.discordapp.com/attachments/1010126068134457424/1010129807234838548/299093325_1735339803531821_7371829242872968150_n.jpg", "https://cdn.discordapp.com/attachments/1010126068134457424/1010231370922065930/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1010231050816995409/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1010230720091918436/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1010230366226894858/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1010230072302653530/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1010129807427772446/299196694_794113768390760_3047179163723482998_n.jpg", "https://cdn.discordapp.com/attachments/1010126068134457424/1010129807654260786/299208039_795080558176010_82031388004882159_n.jpg", "https://cdn.discordapp.com/attachments/1010126068134457424/1010129807914303499/299373009_1302032937286627_5114157882668058035_n.jpg", "https://cdn.discordapp.com/attachments/1010126068134457424/1010129808140804167/299535200_184675410601627_8745521946330518432_n.jpg", "https://cdn.discordapp.com/attachments/1010126068134457424/1010129808371486750/300192306_763948871607164_5264742565087434347_n.jpg", "https://cdn.discordapp.com/attachments/1010126068134457424/1010129859491667998/299688853_513533223872515_5756880690209971503_n.jpg", "https://cdn.discordapp.com/attachments/1010126068134457424/1010129859764310087/299723726_738090787489079_620974297560623147_n.jpg", "https://cdn.discordapp.com/attachments/1010126068134457424/1010129860036935730/299782352_6129040113789180_7492315856567718687_n.jpg", "https://cdn.discordapp.com/attachments/1010126068134457424/1010129860284403772/299799994_1048986545762542_7430148384560109323_n.jpg", "https://cdn.discordapp.com/attachments/1010126068134457424/1010129860586389554/299867518_378240437779071_7927777136435395627_n.jpg", "https://cdn.discordapp.com/attachments/1010126068134457424/1010129860854820985/299960072_483080589850375_4939213527951126645_n.jpg", "https://cdn.discordapp.com/attachments/833284841540943892/1009688718308810752/unknown.png", "https://media.discordapp.net/attachments/892828443165732885/1005003281300471858/FB_IMG_1658179525739.jpg", "https://cdn.discordapp.com/attachments/833284841540943892/1007073697808535593/FB_IMG_1660175469368.jpg", "https://cdn.discordapp.com/attachments/1010126068134457424/1014191693098127451/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1014192021189173318/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1014192097689092176/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1014192410496086106/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1014192657192456302/unknown.png", "https://cdn.discordapp.com/attachments/1010126068134457424/1015661864421707857/unknown.png", "https://cdn.discordapp.com/attachments/833284841540943892/1015596050276425768/FB_IMG_16622073584563606.jpg"]
    cpt = ["xixiixi", "Meme fresh hari ini", "acamalaca", "https://bit.ly/Request-Gambar", "Icikiwir",]
    let link = linkgambar[Math.floor(Math.random() * linkgambar.length)];
    let rndm = cpt[Math.floor(Math.random() * cpt.length)];
    const media = await MessageMedia.fromUrl(link);
    msg.reply(rndm, undefined, { media: media });
  }

  if (msg.body.toLowerCase() === "!cosplay" || msg.body.toLowerCase() === "!cosplayer" || msg.body.toLowerCase() === "!anime" || msg.body.toLowerCase() === "!gambar") {
    link = ["https://cdn.discordapp.com/attachments/1043749434162417727/1043749811494584351/unknown.png", "https://cdn.discordapp.com/attachments/1043749434162417727/1043749786668498954/unknown.png", "https://cdn.discordapp.com/attachments/1043749434162417727/1043749562310983691/unknown.png", "https://i.pinimg.com/originals/d7/85/75/d78575eb904fc925dd5f09199c218b19.jpg", "https://i.pinimg.com/originals/42/28/b5/4228b5a22b874751b3c6d7d8069a5649.jpg", "https://i.pinimg.com/originals/c0/e2/5b/c0e25ba5cd04b78b94d07d4f645ac09a.jpg", "https://i.pinimg.com/originals/43/9b/82/439b82c04edaed4a9c564fe6e3a2922f.jpg", "https://i.pinimg.com/originals/61/94/30/6194307deb25974bc591b6b7b234cbd1.jpg", "https://i.pinimg.com/originals/cf/70/ef/cf70efa2da438d4cb78495c08dcbb31c.jpg", "https://i.pinimg.com/originals/02/65/0e/02650e663f6885651f0338f50b24700d.jpg", "https://i.pinimg.com/originals/cf/70/ef/cf70efa2da438d4cb78495c08dcbb31c.jpg", "https://i.pinimg.com/originals/85/70/66/857066b1f4553abba732464fc4537960.jpg", "https://i.pinimg.com/originals/06/85/96/0685967185566b78755b903e8818c4b6.jpg", "https://i.pinimg.com/originals/b5/14/9d/b5149d60a36cde3e8756cdd70e466c6d.jpg", "https://i.pinimg.com/originals/47/63/26/4763260e9fdc7b42c28b5fda5a81125f.jpg", "https://i.pinimg.com/originals/ba/d9/82/bad9824b1e894d797e543b3a59616150.jpg", "https://i.pinimg.com/originals/c2/6f/83/c26f834a4c6f71990a4b012ce1c00ad0.jpg", "https://i.pinimg.com/originals/eb/16/b9/eb16b9f35976e4cf05b4f785c9ed3604.jpg", "https://i.pinimg.com/originals/99/eb/f7/99ebf723cd01a7e784e07d05b2d66eef.jpg", "https://i.pinimg.com/originals/9b/ae/51/9bae51bc4b94edf8eff25cc616905f25.jpg", "https://i.pinimg.com/originals/ec/fd/9f/ecfd9fbfe7135e8f2fd733804e7ce56b.jpg", "https://i.pinimg.com/originals/a3/01/35/a301352c036ab3a536249beb98625e77.jpg", "https://i.pinimg.com/originals/3c/78/49/3c7849fd98cf2e30f76ce1cb3027f211.jpg", "https://i.pinimg.com/originals/4e/2c/5f/4e2c5f5a0c3434c2818105629deb6cc0.jpg", "https://i.pinimg.com/originals/dd/0d/f2/dd0df265e62a11973f654bd2f40533ea.jpg", "https://i.pinimg.com/originals/89/28/6d/89286dfcf9a803679ee74d39cace605b.jpg", "https://i.pinimg.com/originals/72/44/09/724409b3be7fb248af6135473ba62aa8.jpg", "https://i.pinimg.com/originals/71/2b/f4/712bf4241f43f118e8815c15d8950989.jpg", "https://i.pinimg.com/originals/d6/04/a7/d604a7f6fb789a178f17157ab283f738.jpg", "https://i.pinimg.com/originals/62/04/7e/62047e26115c32e56caa1586c4e6ec8d.jpg", "https://i.pinimg.com/originals/73/72/80/7372809cd3fac7e46cda09d2e0522b0e.jpg", "https://i.pinimg.com/originals/fc/1c/5b/fc1c5b7e125e0daec788d3439f2fcb3e.jpg", "https://i.pinimg.com/originals/bf/fd/e4/bffde4728610d02c08822f49d5c1d1d4.jpg", "https://i.pinimg.com/originals/2a/c8/3b/2ac83b99d6ecdeb7e934a55eee3f8c8b.jpg", "https://i.pinimg.com/originals/71/4e/70/714e70e3bb35c4bdf8ebe265e7f859be.jpg", "https://i.pinimg.com/originals/56/d7/7e/56d77e832150dac257dc8d1f4f8f4901.jpg", "https://i.pinimg.com/originals/9b/85/d7/9b85d73053e8b4cca7aea73b1deae718.jpg", "https://pbs.twimg.com/media/Dmbrm8tUYAATdWu.jpg", "https://i.pinimg.com/originals/d3/d9/72/d3d97250d7bccde1142910d37693059c.jpg", "https://i.pinimg.com/originals/bd/c1/96/bdc196753b1cdd32d03502ea75b8edbb.jpg", { unsafeMime: true }]
    cpt = ["🙄", "Ih wibu", "😋", "BAU BAWANG",]
    let random1 = link[Math.floor(Math.random() * link.length)]
    let random = cpt[Math.floor(Math.random() * cpt.length)];
    const cosplay = await MessageMedia.fromUrl(random1)
    msg.reply(random, undefined, { media: cosplay });
  }

  if (msg.body.toLowerCase() === "!loli" || msg.body.toLowerCase() === "!pedo" || msg.body.toLowerCase() === "!anime" || msg.body.toLowerCase() === "!gambar") {
    loli = ["https://cdn.discordapp.com/ephemeral-attachments/1040150974880284722/1083706547076616223/https_maze-guru.oss-accelerate.aliyuncs.com_image_BCD4C0BCB6800DA1B5AC3ECB5BB28664-01.jpg", "https://i.pinimg.com/originals/50/24/f2/5024f2a5d020d5458700daabcf5b842d.jpg", "https://i.pinimg.com/originals/af/79/65/af79651375122583765cef1cef3cbc5e.jpg", "https://i.pinimg.com/originals/db/54/c1/db54c1ebc149003679c0441700887746.jpg", "https://i.pinimg.com/originals/a3/5b/a9/a35ba9ee9b640e1517bfec521d8f56b3.jpg", "https://i.pinimg.com/originals/af/b9/74/afb974fddf68532685227431ee5a54c2.jpg", "https://i.pinimg.com/originals/cc/e4/fd/cce4fda6d39e37ac58bcd0f01908b701.jpg", "https://i.pinimg.com/originals/c5/d3/44/c5d34465dbc5e7b0eab24a2a0cfb4d56.jpg", "https://i.pinimg.com/originals/6b/b7/49/6bb749fb150c683b8a66787de04178d8.jpg", "https://i.pinimg.com/originals/63/05/40/630540eab0a938d75f841c771cb03e0f.jpg", "https://i.pinimg.com/originals/d6/4f/b7/d64fb7b32f4c94a0c2ae8e2c08246c86.jpg", "https://i.pinimg.com/originals/43/95/7d/43957d9fddecad87343a80caf77584e3.jpg", "https://i.pinimg.com/originals/0a/61/2c/0a612c0c85c14e466d3f604f35ce90f5.jpg", "https://i.pinimg.com/originals/7f/04/05/7f0405692bcb7ee0353c44ea30a2eec5.jpg", "https://i.pinimg.com/originals/36/79/0d/36790d8c9be0532ad90d4dd99c6ea69b.jpg", "https://i.pinimg.com/originals/aa/18/3e/aa183ef1219c7ae1b58e4084bbf7fb4d.jpg", "https://i.pinimg.com/originals/52/9a/45/529a4534438994fec9293ec5d7f6b4dd.jpg", "https://i.pinimg.com/originals/40/a3/9d/40a39d01a48e4912e6ed927e4c4807b8.jpg", "https://i.pinimg.com/originals/d5/ed/c3/d5edc3faca14617d9f73e3d58648151a.jpg", "https://i.pinimg.com/originals/e4/b9/f8/e4b9f8c3ed59643474cc2f4f205e338f.jpg", "https://i.pinimg.com/originals/9a/ba/60/9aba6040f5c0af8c93b388f5df24c121.jpg", "https://i.pinimg.com/564x/7b/53/77/7b53775250d2248bea77fef56a471263.jpg", "https://i.pinimg.com/originals/cd/41/16/cd4116b8c21b51cd202bb74f2af7cea9.jpg", "https://i.pinimg.com/originals/c8/6b/59/c86b59f1cb25088308b1987c271a5d04.jpg", "https://i.pinimg.com/originals/91/6e/0d/916e0d09e66c5fa5b0bcdaf20931e99f.jpg", "https://i.pinimg.com/originals/32/53/5b/32535bb11102698e828ddae3422de56d.jpg", "https://i.pinimg.com/originals/5a/8f/c1/5a8fc1542fde7bcbabc58f4f3bf9698b.jpg", "https://i.pinimg.com/originals/b2/4a/5b/b24a5b3513b3484eec98b0a7a232f3bd.jpg", "https://i.pinimg.com/564x/61/bb/19/61bb1953333d88fc7c4c5eff48262a4a.jpg", "https://i.pinimg.com/originals/dc/2a/ca/dc2aca94c32926ad4fb5409c113013a9.jpg", "https://i.pinimg.com/originals/d6/4d/cd/d64dcd104bcf85d6b2d216d90463e308.jpg", "https://i.pinimg.com/originals/3b/75/d6/3b75d6226853816b2b75213d57257cbd.jpg", "https://i.pinimg.com/originals/16/3c/5c/163c5c38b765198b1e197cc857a9443b.jpg", "https://i.pinimg.com/originals/3e/8c/35/3e8c35415b87877f1edc91b6ec0a66eb.jpg", "https://i.pinimg.com/originals/ba/77/c3/ba77c3600d21f068de8d9fee9d365927.jpg", { unsafeMime: true }]
    cpt = ["🙄", "Ih wibu", "Ih Pedo", "FBI OPEN THE DOOR",]
    let randomg = loli[Math.floor(Math.random() * loli.length)];
    let random = cpt[Math.floor(Math.random() * cpt.length)];
    const floli = await MessageMedia.fromUrl(randomg)
    msg.reply(random, undefined, { media: floli }).catch(e => {
      console.log(e)
      msg.reply('!loli error silahkan ulangi perintah sekali lagi');
    });
  }
  if (msg.body.toLowerCase() === "!shota" || msg.body.toLowerCase() === "!pedo" || msg.body.toLowerCase() === "!sota" || msg.body.toLowerCase() === "!anime" || msg.body.toLowerCase() === "!gambar") {
    shota = ["https://cdn.discordapp.com/attachments/867020440411832340/1074895856785956895/IMG-20230214-WA0345.jpg", "https://i.pinimg.com/originals/f2/4c/80/f24c80ccbf3c194e46a69f57b0689fab.jpg", "https://i.pinimg.com/originals/5b/c8/18/5bc8180e22dc51f78139c47cd9b06a41.jpg", "https://i.pinimg.com/originals/d8/7d/57/d87d57baad459a18c63277eacf2b9e42.jpg", { unsafeMime: true }];
    kata = ["🙄", "Ih wibu", "Ih bau bawang", "FBI OPEN THE DOOR",]
    let shotar = shota[Math.floor(Math.random() * shota.length)];
    let random = kata[Math.floor(Math.random() * kata.length)];
    const shota1 = await MessageMedia.fromUrl(shotar)
    msg.reply(random, undefined, { media: shota1 }).catch(e => {
      console.log(e)
      msg.reply('!shota error silahkan ulangi perintah sekali lagi');
    });
  }

  if (msg.body.toLowerCase() === "!pokemon" || msg.body.toLowerCase() === "!anime" || msg.body.toLowerCase() === "!gambar") {
    pokemon = ["https://img.freepik.com/free-vector/stay-tuned-coming-soon-banner-design_1017-26693.jpg?w=826&t=st=1668764817~exp=1668765417~hmac=2aa7195777f626de4a114a1037397ce3cf297f77a01c77df74cb13a54c3ee402", "https://i.pinimg.com/originals/60/55/c2/6055c2e47d653554b48ab093dcf30792.jpg", "https://i.imgur.com/WuzcL.jpg", "https://i.pinimg.com/originals/9c/f5/1c/9cf51cf69722ea0216044b680db3c6c7.jpg", { unsafeMime: true }];
    caption = ["🗾", "Ih wibu", "😋", "BAU BAWANG",]
    let poke = pokemon[Math.floor(Math.random() * pokemon.length)];
    let acak = caption[Math.floor(Math.random() * caption.length)];
    const pokemon2 = await MessageMedia.fromUrl(poke);
    msg.reply(acak, undefined, { media: pokemon2 }).catch(e => {
      console.log(e)
      msg.reply('!pokemon error silahkan ulangi perintah sekali lagi');
    });
  }

  if (msg.body.toLowerCase() === "!cecan" || msg.body.toLowerCase() === "!cewe" || msg.body.toLowerCase() === "!cewek" || msg.body.toLowerCase() === "!wanita" || msg.body.toLowerCase() === "!gambar") {
    cecan = ["https://i.pinimg.com/originals/06/a1/b2/06a1b2ba9bb76b2a5e7cd39afeb88937.jpg", "https://i.pinimg.com/564x/74/78/2a/74782aa5e7d33102afaa72df5ba0deda.jpg", "https://i.pinimg.com/originals/68/e1/c5/68e1c561997efd513696b74fa1628c53.jpg", "https://i.pinimg.com/originals/75/48/b7/7548b7afced53ba19be79c6086c45071.jpg", "https://i.pinimg.com/originals/9e/ab/10/9eab10fe3c06a041e2bc13544a0e148a.jpg", "https://i.pinimg.com/originals/56/00/53/5600535e8ba0266828337c2188509a54.jpg", "https://i.pinimg.com/originals/70/0c/40/700c404d84fc3b6fc47d442e40df3218.jpg", "https://i.pinimg.com/originals/59/75/df/5975dfc2ad7dcc18734a62e85205d9f0.jpg", "https://i.pinimg.com/originals/6f/9e/91/6f9e91405c98a350589f92b07e1546dd.jpg", "https://i.pinimg.com/564x/52/d0/dd/52d0dde3caaa2609733eaac3b9822eb9.jpg", "https://i.pinimg.com/originals/ee/2d/51/ee2d5199bb7f8b406dbb479dcee43d9d.jpg", "https://i.pinimg.com/originals/ef/ea/8a/efea8a1f0751cd87b06460ddcbd44636.jpg", "https://i.pinimg.com/originals/71/ef/e1/71efe123ff791f4a0ceebbc311626ddc.jpg", "https://i.pinimg.com/originals/59/f3/43/59f343fd82b0b609edce6ba34703567f.jpg", "https://i.pinimg.com/736x/a9/06/26/a90626dc62487e1c9b13d523d3c8873e.jpg", "https://i.pinimg.com/originals/96/b4/8c/96b48c7b6321353f82807b2919635f97.jpg", "https://i.pinimg.com/564x/b8/bd/2a/b8bd2a088679099d69ac3a33d1f5ba08.jpg", "https://i.pinimg.com/originals/85/ab/31/85ab31cf36c249d8fe7fb797dd408e60.jpg", "https://i.pinimg.com/originals/2c/99/c1/2c99c104a65fe9adaac3a17bc3c62f61.jpg", "https://i.pinimg.com/750x/d5/30/6a/d5306a1c3c1d6bd330b13ef1d7a2a199.jpg", "https://i.pinimg.com/originals/a4/b7/c2/a4b7c224bb6a06bef7547dd89d5494c2.jpg", "https://i.pinimg.com/originals/06/98/67/0698674cb5b560a35f8d5d8ee0e25954.jpg", "https://i.pinimg.com/originals/ed/f0/68/edf068f3a769ef69f697f29288727831.jpg", "https://i.pinimg.com/originals/4b/25/a1/4b25a1546e6c09928d9032031911d37b.jpg", "https://i.pinimg.com/564x/71/fe/2c/71fe2c71a82c1e059f96c6b38e2a6a3e.jpg", "https://i.pinimg.com/originals/03/c5/e2/03c5e2e6a56fe0a2d0fcee8711cb50bc.jpg", "https://i.pinimg.com/originals/4d/aa/0c/4daa0c0a00f39d1c1e83d5d7b9a5fca9.jpg", "https://i.pinimg.com/originals/b3/d8/b7/b3d8b77bff0f050a4d89e673860084dd.jpg", "https://i.pinimg.com/originals/03/f5/48/03f548c9b7ad900ad22cee0d487daec7.jpg", "https://i.pinimg.com/originals/93/fa/22/93fa2215aaeaed7aea62916a5b3be1e9.jpg", "https://i.pinimg.com/originals/b4/0f/df/b40fdf5c8e26e4016c7c9587021562db.jpg", "https://i.pinimg.com/originals/75/89/b3/7589b3306f3153022155e79393209e15.jpg", "https://i.pinimg.com/originals/e5/43/9c/e5439ca0e25753973c1300b4913c2b83.jpg", "https://i.pinimg.com/originals/ca/eb/b0/caebb055d8c4bdd9df905f254ad19809.jpg", "https://i.pinimg.com/originals/95/69/fc/9569fcc619d9be47f4de9e4b15e241aa.jpg", "https://i.pinimg.com/originals/2e/85/25/2e8525168e2d8dc7dfe4177d5b7e397a.jpg", "https://i.pinimg.com/originals/b7/d2/f1/b7d2f1b0ad00af418e9c4cc76281a169.jpg", "https://i.pinimg.com/originals/6d/fe/34/6dfe34374f640268aa7d76565d4747ed.jpg", "https://i.pinimg.com/originals/d4/e0/37/d4e03706bd091133984627140428ef7d.jpg", "https://i.pinimg.com/originals/db/2b/b1/db2bb10370a669e9a1bb954383bf8b16.jpg", "https://i.pinimg.com/originals/99/3e/31/993e31e7ae55b9e7531f15be4512b2cc.jpg", "https://i.pinimg.com/originals/4f/79/6e/4f796e78191d3b1d0ce27229567222db.jpg", "https://i.pinimg.com/564x/89/21/6d/89216d63516fda31237752ec1b60c628.jpg", "https://i.pinimg.com/originals/79/02/9d/79029d0a1877f0a9f3f96268d3b9c5d5.jpg", "https://i.pinimg.com/originals/e4/7c/30/e47c3089754136f9d6fe290a03828bfd.jpg", "https://i.pinimg.com/originals/e0/e4/86/e0e486157c8569f9316d116c867b3702.jpg", "https://i.pinimg.com/originals/40/be/48/40be488078e46e8bc7a4e2600d6b7a70.jpg", "https://i.pinimg.com/originals/d8/cf/53/d8cf533900520384bdf7d86d3eb509a7.jpg", "https://i.pinimg.com/originals/a5/1c/9f/a51c9f02d8f166d684509ccbf3f2a560.jpg", "https://i.pinimg.com/originals/5f/77/71/5f7771deba717bf535caafb966c1f636.jpg", "https://i.pinimg.com/originals/2c/ce/10/2cce10289933fff617cf409e5344ea57.jpg", "https://i.pinimg.com/originals/ee/30/b9/ee30b9ce8aae3e1579c1e04a51a8982d.jpg", "https://i.pinimg.com/originals/df/ea/c5/dfeac5ccdb2747e6a1952832ca9d360f.jpg", "https://i.pinimg.com/564x/25/db/ca/25dbca8d4fa375e015b1b66c38f98f93.jpg", "https://i.pinimg.com/originals/29/e8/ec/29e8ec99544c8bb4ce5e9485a01c2be8.jpg", "https://i.pinimg.com/originals/d1/52/54/d152546689bc64d62f2713be1ae6c0ad.jpg", "https://i.pinimg.com/originals/00/b4/e3/00b4e3e680d63db836479a64934dd327.jpg", "https://i.pinimg.com/originals/93/5b/b3/935bb3eabe93f41abbb6da8d56525d71.jpg", "https://i.pinimg.com/originals/4c/83/32/4c83329ee18c0170b90a606d8fc365e0.jpg", "https://i.pinimg.com/originals/0c/8f/83/0c8f833b53d2d6aaae919d0c00116a36.jpg"]
    cpt = ["🙄", "cantik kali", "Idaman🤤", "kawai",]
    let cr = cecan[Math.floor(Math.random() * cecan.length)];
    let random1 = cpt[Math.floor(Math.random() * cpt.length)];
    const cewe = await MessageMedia.fromUrl(cr)
    msg.reply(random1, undefined, { media: cewe }).catch(e => {
      console.log(e)
      msg.reply('!cecan error silahkan ulangi perintah sekali lagi');
    });
  }

  if (msg.body.toLowerCase() === "!cogan" || msg.body.toLowerCase() === "!cowo" || msg.body.toLowerCase() === "!cowok" || msg.body.toLowerCase() === "!pria" || msg.body.toLowerCase() === "!gambar") {
    cogan = ["https://i.pinimg.com/originals/96/c5/ae/96c5aea225e271cc31cae4e3893b15f7.jpg", "https://i.pinimg.com/originals/a3/d6/29/a3d6290fd416f4448c187ea46a1fc807.jpg", "https://i.pinimg.com/originals/1f/d0/9c/1fd09c31e636736f18fec0cc2bbf90cc.jpg", "https://i.pinimg.com/originals/28/28/75/28287542e2caceb44e58f8a007325739.jpg", "https://i.pinimg.com/originals/58/4b/7c/584b7cf10677c4fa431010c77d16ea54.jpg", "https://i.pinimg.com/564x/2c/52/62/2c5262b6e9faa6949866f4c84c6e47a1.jpg", "https://i.pinimg.com/originals/ce/2d/67/ce2d67135c082fc9018473a402ceafa9.jpg", "https://i.pinimg.com/originals/4b/4f/06/4b4f069ccc5ae08eeb0f6f144f746ad3.jpg", "https://i.pinimg.com/originals/c3/d4/34/c3d434f32b6a24874b340e38a8c4e8a8.jpg", "https://i.pinimg.com/originals/d1/3d/3c/d13d3c5ede2d15f967f03e16a5127386.jpg", "https://i.pinimg.com/originals/c7/15/14/c7151437d9eb4edfd0f404051bcb197f.jpg", "https://i.pinimg.com/originals/39/fb/d1/39fbd1c257a92369ab498d39f813ea0d.jpg", "https://i.pinimg.com/originals/c7/42/59/c74259cd873c99c46736fa11e965d4a4.jpg", "https://i.pinimg.com/originals/a8/f4/76/a8f4765bc5a75674e470807be899618e.jpg", "https://i.pinimg.com/originals/34/59/72/3459721e9b6967eb2c185aa3a0ce13bd.jpg", "https://i.pinimg.com/originals/c1/6d/6b/c16d6b094834626903e08153e26d26b0.jpg", "https://i.pinimg.com/originals/bd/dd/c6/bdddc6dbee6a70ce9d9ff31064c22e17.jpg", "https://i.pinimg.com/originals/3d/11/c0/3d11c005d8c98d9174b6f36f11419284.jpg", "https://i.pinimg.com/originals/08/98/2a/08982a63d95120cd80d0ace2801ddd96.jpg", "https://i.pinimg.com/originals/39/88/a6/3988a623839347b3c11d719f3bbafeb1.jpg", "https://i.pinimg.com/originals/9d/57/13/9d5713e1402138e6d7d95a15111c2ebd.jpg", "https://i.pinimg.com/originals/e8/d9/51/e8d951a1a03ea2fc4e4a71e7ff22a045.jpg", "https://i.pinimg.com/originals/8c/44/dc/8c44dc312b6a108999a557b628357456.jpg", "https://i.pinimg.com/originals/2d/25/b4/2d25b4fedc775dddde0bae6716f25122.jpg", "https://i.pinimg.com/originals/d7/c8/06/d7c806e561ac54a85db2c1641be0106e.jpg", "https://i.pinimg.com/originals/59/f2/7d/59f27d93e468c3778124ffd4e12e1236.jpg", "https://i.pinimg.com/originals/5c/f9/77/5cf9777a9782606e6c64e1f679c6bf54.jpg", "https://i.pinimg.com/originals/06/28/c6/0628c6820d7289c07982fef05a2c6f17.png", "https://i.pinimg.com/originals/2c/cb/89/2ccb89148390956d3eb3b37ad227aa11.jpg", "https://i.pinimg.com/originals/0c/ce/66/0cce663b2cfd2aeb1feca5f48775e3db.jpg", "https://i.pinimg.com/originals/13/f1/45/13f14515bcf860d3509432f49a25c365.jpg", "https://i.pinimg.com/originals/5b/97/f1/5b97f1507ac250ac96e63bdf8bbcda3a.jpg", "https://i.pinimg.com/564x/2c/52/62/2c5262b6e9faa6949866f4c84c6e47a1.jpg", { unsafeMime: true }];
    cpt = ["🙄", "ganteng kali", "halo dek", "idaman🤤",];
    let gambarc = cogan[Math.floor(Math.random() * cogan.length)];
    let random2 = cpt[Math.floor(Math.random() * cpt.length)];
    const finalcogan = await MessageMedia.fromUrl(gambarc)
    msg.reply(random2, undefined, { media: finalcogan }).catch(e => {
      console.log(e)
      msg.reply('!cogan error silahkan ulangi perintah sekali lagi');
    });
  }

  if (msg.body.toLowerCase() === "!kpop" || msg.body.toLowerCase() === "!gambar") {
    plastik = ["https://akcdn.detik.net.id/visual/2022/06/07/bts-1_169.jpeg?w=650", "https://i.pinimg.com/originals/83/26/ef/8326eff104e45a31ca0cfed8aa32c864.jpg", "https://i.pinimg.com/originals/d5/15/1d/d5151d5b666f95c10db06c0898c98b9e.jpg", "https://i.pinimg.com/originals/28/cf/a2/28cfa23cf76c3892786fdd78550ff34b.jpg", "https://i.pinimg.com/originals/cd/20/c1/cd20c1b7ebbd57e060b8f67205fd86fa.jpg", "https://i.pinimg.com/originals/98/3a/2c/983a2c646f483519129f487f7cca36bd.jpg", "https://i.pinimg.com/originals/4e/80/dd/4e80ddd5b6dd41fbf1dbdaf07a03ec19.jpg", "https://i.pinimg.com/originals/fc/56/64/fc5664f9d130709d3b4729c9be51ddcd.jpg", "https://i.pinimg.com/originals/41/63/1b/41631baa62009dc6f1beb34f297ea048.jpg", "https://i.pinimg.com/originals/2a/05/d5/2a05d5008f05e6b3a46ecb9ef457cf5b.jpg", "https://assets.pikiran-rakyat.com/crop/46x20:1079x832/x/photo/2022/03/10/1442203628.jpg", "https://akcdn.detik.net.id/api/wm/2020/06/24/secret-number-1_169.jpeg", "https://i.pinimg.com/originals/27/67/d3/2767d3941c8b55f3e57a330b92cbf035.jpg", "https://i.pinimg.com/originals/69/24/85/692485384b940730b0ab5290908c7bf7.jpg", "https://i.pinimg.com/originals/be/7c/bf/be7cbfa0ca15f016415cb091a396d53d.jpg", "https://i.pinimg.com/originals/41/1a/d9/411ad9759c429ba01aa58035717268ef.jpg", { unsafeMime: true }];
    caption = ["Nih kak", "😍", "💞"]
    let plastik2 = plastik[Math.floor(Math.random() * plastik.length)];
    let cptr = caption[Math.floor(Math.random() * caption.length)];
    const plastik3 = await MessageMedia.fromUrl(plastik2)
    msg.reply(cptr, undefined, { media: plastik3 }).catch(e => {
      console.log(e)
      msg.reply('!kpop error silahkan ulangi perintah sekali lagi');
    });
  }



  if (msg.body.toLowerCase() === "!islam" || msg.body.toLowerCase() === "!gambar") {
    picture = ["https://i.pinimg.com/originals/1d/c9/34/1dc9343aab6c189a9dc5957b8621c27b.jpg", "https://i.pinimg.com/originals/ad/31/d7/ad31d784c30dca0f4f08cc2d1aa2574f.jpg", "https://i.pinimg.com/originals/40/2c/25/402c2594b17c8c93e9bffe465b411cc5.jpg", "https://i.pinimg.com/originals/8e/9a/e3/8e9ae3a4e890de2adec8b31cefe13b53.jpg", "https://i.pinimg.com/originals/7e/11/91/7e11910917a10db6483f3828bfea2443.jpg", { unsafeMime: true }];
    kata = ["Masya Allah Tabarakallah", "Allahu Akbar", "Masya Allah", "Man jadda wajada", "Subhanallah"]
    let cpt = kata[Math.floor(Math.random() * kata.length)];
    let islam = picture[Math.floor(Math.random() * picture.length)];
    const muslim = await MessageMedia.fromUrl(islam)
    msg.reply(cpt, undefined, { media: muslim }).catch(e => {
      console.log(e)
      msg.reply('Fitur error silahkan ulangi perintah sekali lagi');
    });
  }

  if (msg.body.toLowerCase() === "!stes" || msg.body.toLowerCase() === "!gtes") {
    let picture = await MessageMedia.fromFilePath("./couplepp.json", { unsafeMime: true });
    kata = ["Masya Allah Tabarakallah", "Allahu Akbar", "Masya Allah", "Man jadda wajada", "Subhanallah"]
    let cpt = kata[Math.floor(Math.random() * kata.length)];
    msg.reply(cpt, undefined, { media: picture }).catch(e => {
      console.log(e)
      msg.reply('Fitur error silahkan ulangi perintah sekali lagi');
    });
  }

  if (cmd == "XXX" || cmd == "xxx" || cmd == "Xxx" || cmd == "*XXX*" || cmd == "*xxx*" || cmd == "*Xxx*" || cmd == "gambar" || msg.body.includes('!xxx') || cmd == "18") {
    linkgambar = ["https://cdn.discordapp.com/attachments/1016648878256300112/1016648967972474960/unknown.png", "https://cdn.discordapp.com/attachments/1016648878256300112/1016656133697585172/unknown.png", "https://cdn.discordapp.com/attachments/1016648878256300112/1016650536847683594/unknown.png", "https://cdn.discordapp.com/attachments/1016648878256300112/1016649006111272970/unknown.png", "https://cdn.discordapp.com/attachments/1016648878256300112/1016649016383119450/unknown.png"]
    let link = linkgambar[Math.floor(Math.random() * linkgambar.length)];
    const media = await MessageMedia.fromUrl(link);
    msg.reply(`"Stay Halal" -CHIKA BOT 

Undang-undang (UU) No. 44 Tahun 2008
Setiap orang yang memperdengarkan, mempertontonkan, memanfaatkan, memiliki, atau menyimpan produk pornografi sebagaimana dimaksud dalam Pasal 6 dipidana dengan pidana penjara paling lama 4 (empat) tahun dan/atau pidana denda paling banyak Rp2.000.000.000,00 (dua miliar rupiah).

قُل لِّلْمُؤْمِنِينَ يَغُضُّوا۟ مِنْ أَبْصَٰرِهِمْ وَيَحْفَظُوا۟ فُرُوجَهُمْ ۚ ذَٰلِكَ أَزْكَىٰ لَهُمْ ۗ إِنَّ ٱللَّهَ خَبِيرٌۢ بِمَا يَصْنَعُونَ
Artinya: “Katakanlah kepada orang laki-laki yang beriman: "Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; yang demikian itu adalah lebih suci bagi mereka, sesungguhnya Allah Maha Mengetahui apa yang mereka perbuat”.

Pornografi menyebabkan kecanduan (1 Korintus 6:12; 2 Petrus 2:19), merusak (Amsal 6:25-28; Yehezkiel 20:30; Efesus 4:19), dan mengakibatkan kejahatan (Roma 6:19).

Jika pria dan wanita, dengan harapan untuk melakukan hubungan seks, menggunakan gerak kaki atau secara rahasia mengadakan percakapan yang tidak sopan (percakapan yang bernada porno), denda untuk wanita adalah dua puluh empat pana, dua kali lipat untuk pria (48 pana).{ Kautilya Arthasastra, III.3.59.25}

LINK : https://bit.ly/bokeb-ASIA-viral
`, undefined, { media: media });
  }

  if (msg.body.toLowerCase() === "!hentai" || msg.body.toLowerCase() === "*!hentai*" || msg.body.toLowerCase() === "!gambar" || msg.body.includes('hentai') || cmd == "21") {
    linkgambar = ["https://cdn.discordapp.com/attachments/1031214277064925214/1031214445105528883/unknown.png", "https://cdn.discordapp.com/attachments/1031214277064925214/1031214462411231272/unknown.png", "https://cdn.discordapp.com/attachments/1031214277064925214/1031214493247746078/unknown.png", "https://cdn.discordapp.com/attachments/1031214277064925214/1031214527154487348/unknown.png", "https://cdn.discordapp.com/attachments/1031214277064925214/1031214570330652723/unknown.png", "https://cdn.discordapp.com/attachments/1031214277064925214/1031214689973190666/unknown.png", "https://cdn.discordapp.com/attachments/1031214277064925214/1031214756331278367/unknown.png", "https://cdn.discordapp.com/attachments/1031214277064925214/1031214820659306576/unknown.png", "https://cdn.discordapp.com/attachments/1031214277064925214/1031215117003657337/unknown.png", "https://cdn.discordapp.com/attachments/1031214277064925214/1031215161559748711/unknown.png", "https://cdn.discordapp.com/attachments/1031214277064925214/1031215161559748711/unknown.png", "https://cdn.discordapp.com/attachments/1031214277064925214/1031215440883630121/unknown.png"]
    let link = linkgambar[Math.floor(Math.random() * linkgambar.length)];
    const media = await MessageMedia.fromUrl(link);
    msg.reply(`"Stay Halal" -CHIKA BOT 

Undang-undang (UU) No. 44 Tahun 2008
Setiap orang yang memperdengarkan, mempertontonkan, memanfaatkan, memiliki, atau menyimpan produk pornografi sebagaimana dimaksud dalam Pasal 6 dipidana dengan pidana penjara paling lama 4 (empat) tahun dan/atau pidana denda paling banyak Rp2.000.000.000,00 (dua miliar rupiah).

قُل لِّلْمُؤْمِنِينَ يَغُضُّوا۟ مِنْ أَبْصَٰرِهِمْ وَيَحْفَظُوا۟ فُرُوجَهُمْ ۚ ذَٰلِكَ أَزْكَىٰ لَهُمْ ۗ إِنَّ ٱللَّهَ خَبِيرٌۢ بِمَا يَصْنَعُونَ
Artinya: “Katakanlah kepada orang laki-laki yang beriman: "Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; yang demikian itu adalah lebih suci bagi mereka, sesungguhnya Allah Maha Mengetahui apa yang mereka perbuat”.

Pornografi menyebabkan kecanduan (1 Korintus 6:12; 2 Petrus 2:19), merusak (Amsal 6:25-28; Yehezkiel 20:30; Efesus 4:19), dan mengakibatkan kejahatan (Roma 6:19).

Jika pria dan wanita, dengan harapan untuk melakukan hubungan seks, menggunakan gerak kaki atau secara rahasia mengadakan percakapan yang tidak sopan (percakapan yang bernada porno), denda untuk wanita adalah dua puluh empat pana, dua kali lipat untuk pria (48 pana).{ Kautilya Arthasastra, III.3.59.25}

LINK : https://bit.ly/bokeb-ASIA-viral
`, undefined, { media: media });
  }

  else if (msg.body.toLowerCase().startsWith('!menfess ') || msg.body.toLowerCase().startsWith('!menfes ')) {
    //  command chat nomor
    if (msg.body.includes('628') || msg.body.includes('601') || msg.body.includes('673') || msg.body.includes('670')) {
      msg.reply(`Pesan Berhasil Terkirim`)
      let number = msg.body.split(' ')[1];
      let messageIndex = msg.body.indexOf(number) + number.length;
      let message = `══ ❰  CHIKA BOT  ❱ ══
*Anda telah menerima pesan rahasia dari seseorang*

*Pengirim* : Anonim          
*Pesan* :${msg.body.slice(messageIndex, msg.body.length)}

══ ❰  CHIKA BOT  ❱ ══`;
      number = number.includes('@c.us') ? number : `${number}@c.us`;
      let chat = await msg.getChat();
      chat.sendSeen();

      (client.sendMessage(number, message)).catch(e => {
        console.log(e)
        if (console.log(e)) {
          msg.reply(`Pesan Berhasil Terkirim.`)

        } else {
          msg.reply(`^^^PESAN GAGAL TERKIRIM^^^
FORMAT SALAH (1) TANPA ENTER
GUNAKAN 628 HANYA ANGKA tanpa + tanpa- 
*TANPA ENTER*
                           
Contoh :!menfess 62895603343007 HAI
CONTOH :!menfess 60195603343007 HAI
CONTOH :!menfess 67395603343007 HAI`)
        }
      });

    } else {
      msg.reply(`FORMAT SALAH 2
GUNAKAN 628 HANYA ANGKA tanpa + tanpa -

CONTOH :!menfess 6281454854298 HAI
CONTOH :!menfess 6019454854298 HAI
CONTOH :!menfess 6739454854298 HAI`);
    }

  }
  //pek
  else if (msg.body.toLowerCase().startsWith('!dmenfess ') || msg.body.toLowerCase().startsWith('!dmenfes ')) {
    //  command chat nomor
    if (msg.body.includes('628') || msg.body.includes('601') || msg.body.includes('673') || msg.body.includes('670')) {
      msg.reply(`Pesan Berhasil Terkirim`)
      let number = msg.body.split('|')[1];
      let sender = msg.body.split('|')[1];
      let messageIndex1 = msg.body.indexOf(sender) + sender.length;
      let messageIndex2 = msg.body.indexOf(number) + number.length;
      let message = `*Anda telah menerima pesan rahasia dari seseorang*

*Pengirim :* ${msg.body.slice(messageIndex1, msg.body.length)}       
*Pesan :* ${msg.body.slice(messageIndex2, msg.body.length)}`;
      number = number.includes('@c.us') ? number : `${number}@c.us`;
      let chat = await msg.getChat();
      chat.sendSeen();

      (client.sendMessage(number, message)).catch(e => {
        console.log(e)
        if (console.log(e)) {
          msg.reply(`Pesan Berhasil Terkirim.`)

        } else {
          msg.reply(`^^^PESAN GAGAL TERKIRIM^^^
FORMAT SALAH 1
GUNAKAN 628 HANYA ANGKA tanpa + tanpa
                         
Contoh :!menfess 62895603343007 HAI
CONTOH :!menfess 60195603343007 HAI
CONTOH :!menfess 67395603343007 HAI
           
Unknown Format ${e}`)
        }
      });

    } else {
      msg.reply(`FORMAT SALAH 2
GUNAKAN 628 HANYA ANGKA tanpa + tanpa -

CONTOH :!menfess 6281454854298 HAI
CONTOH :!menfess 6019454854298 HAI
CONTOH :!menfess 6739454854298 HAI`);
    }

  }
  //po
  if (cmd == "yt" || cmd == "youtube" || cmd == "YT" || cmd == "Yt") {
    youtube.search(args).then(result => {
      //console.log();
      client.sendMessage(msg.from, result.videos[0].description + " " + result.videos[0].link);
    }).catch(e => {
      console.log(e)
      msg.reply('YOUTUBE Error : ' + e);
    })
  }

  else if (msg.body.toLowerCase().startsWith('!google ') || msg.body.toLowerCase().startsWith('.google ')) {
    const googleSearch = msg.body.slice(8)
    if (googleSearch == undefined || googleSearch == ' ') return msg.reply(`*Result : ${googleSearch}* tidak ditemukan`)
    google({ 'query': googleSearch }).then(results => {
      let lets = `_*Result : ${googleSearch}*_\n`
      for (let i = 0; i < results.length; i++) {
        lets += `\n------------------------------------------------\n\n*Judul* : ${results[i].title}\n\n*Keterangan* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
      }
      msg.reply(lets);
    }).catch(e => {
      console.log(e)
      msg.reply('Google Error : ' + e);
    })
  }
  //yt search
  else if (msg.body.startsWith('ys')) {
    const chat = await msg.getChat();

    let it = (msg.body.slice(2))
    let query = ('https://www.youtube.com/results?search_query=' + it + '')
    const { exec } = require("child_process")
    exec(query + "", (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        //return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        //return;
      }
      //console.log(`stdout: ${stdout}`);
      chat.sendMessage(`${stdout}`);
    })

  }

  if (cmd == 'info' || cmd == 'Info' || cmd == 'INFO' || cmd == 'P' || cmd == 'p') {
    //Kirim pesan baru sebagai balasan untuk yang saat ini
    msg.reply(`CHIKA-BOT
Terima kasih telah menghubungi CHIKA BOT.
Silakan ketik !Help untuk melihat menu 
(BOT INI MASIH DALAM MODE PENGEMBANGAN HARAP MAKLUM JIKA FITUR BOT SEDIKIT)`)
  }

  if (cmd == 'ping' || cmd == 'Ping' || cmd == 'PING') {
    //Kirim pesan TES BOT
    msg.reply(`CHIKA CHAN
BOT AKTIF`)
  }
  if (cmd == 'donasi' || cmd == 'Donasi' || cmd == 'DONASI' || cmd == 'Donate' || cmd == 'donate' || cmd == 'DONATE') {
    //PESAN DONASI

    const media = MessageMedia.fromFilePath('./IMAGES/Banner-Yuk-Sedekah.jpg');
    msg.reply(`Donasi digunakan untuk foya-foya

Donasi Melalui Link Berikut 🤗
https://bit.ly/chika-donasi` , undefined, { media: media });
  }

  if (msg.body.toLowerCase().includes('makasih') || msg.body.toLowerCase().includes('makasi') || msg.body.includes('makasih') || msg.body.includes('makasi') || msg.body == 'Makasi' || msg.body == 'Makasihh' || msg.body == 'f' || msg.body == 'Makasih' || msg.body == '!Makasih' || msg.body == 'Makasih ya kk' || msg.body == 'Makasih ya kak' || msg.body == 'terimakasih' || msg.body == 'Terimakasih' || msg.body == 'Terima kasih' || msg.body == '!terimakasih' || msg.body == 'Terimakasih' || msg.body == 'terima kasih' || msg.body == '!terima kasih' || msg.body == 'Terima kasi' || msg.body == 'I love you bot' || msg.body == 'Thanks' || msg.body == 'Thank' || msg.body == 'maksih' || msg.body == 'Makaseeh' || msg.body == 'Makaseh' || msg.body == 'Makasii minn❤️❤️' || msg.body == 'Makasii minn' || msg.body == 'Makasih😁' || msg.body == 'Othey makacih😍' || msg.body == 'Keren makasih' || msg.body == 'Wahh makasih') {
    msg.reply
      ('sama-sama🙏')
  }

  if (msg.body.toLowerCase().includes('!clue_1') || msg.body.toLowerCase().includes('!clue_2')) {
    msg.reply
      ('LIhat Gambar dibwha')
    const media = MessageMedia.fromFilePath('./IMAGES/HEXA.png');
    client.sendMessage(msg.from, media);
  }

  if (msg.body.toLowerCase().includes('!clue_3') || msg.body.toLowerCase().includes('!clue_4')) {
    msg.reply
      (' berasal dari verba describe dan bahasa latin describere yang artinya memaparkan, menguraikan atau melukiskan. Paragraf deskripsi adalah paragraf yang memiliki tujuan memberikan kesan atau impresi kepada para pembaca terhadap objek, peristiwa, gagasan, tempat yang ingin disampaikan penulis secara otentik. ')
  }

  if (msg.body.toLowerCase().includes('!clue_5') || msg.body.toLowerCase().includes('!clue_6')) {
    msg.reply
      ('kAMU sUdAh M3n99unakan semua clue')
  }

  if (msg.body == 'P' || msg.body == '*Help*' || msg.body == 'Ini gimana' || msg.body == '*help*' || msg.body == '*HELP*' || msg.body == 'p' || msg.body == 'menu' || msg.body == 'Menu' || msg.body == 'MENU' || msg.body == 'help' || msg.body == 'Help' || msg.body == 'HELP' || msg.body == '.help' || msg.body == '.Help' || msg.body == '.HELP' || msg.body == 'Hallo' || msg.body == 'Halo' || msg.body == 'halo' || msg.body == 'Hi') {
    msg.reply(` CHIKA-BOT

Terima kasih telah menghubungi CHIKA BOT.
Silakan ketik !Help untuk melihat menu
(BOT INI MASIH DALAM MODE PENGEMBANGAN HARAP MAKLUM JIKA FITUR BOT SEDIKIT)`);
  }

  if (msg.body.toLowerCase() === '$owner') {

    const media = MessageMedia.fromFilePath('./IMAGES/chika.jpg');
    msg.reply(`kak IRFAN Anjay Mabar
Fitur khusus buat kak IRFANNNN muach😚
IG OWNER : https://www.instagram.com/irfann_404/`, undefined, { media: media });
  }
  if (msg.body.toLowerCase() === "!irfan") {
    const media2 = await MessageMedia.fromUrl("https://media.tenor.com/ojzcJtKyydsAAAAd/woman.gif");
    client.sendMessage(media2, { caption: "Irfan adalah pembuat chika-bot", sendVideoAsGif: true })
  }

  if (msg.body.toLowerCase() === 'Asma') {
    msg.reply("masuk")
    let husna = await msg.fromUrl("https://ibeng-api.ddns.net/api/muslim/asmaulhusna?apikey=ibeng");
    client.sendMessage(msg.from, link, husna)
  }

  if (msg.body.toLowerCase() === 'tes') {
    msg.reply('Chika on')
  }

  if (msg.body.toLowerCase() === 'irfan') {
    msg.reply(`CHIKA-BOT OWNER
PROFESIONAL
Syarifudin Anjay Mabar
Jangan Lupa Donate Saya Agar Saya Lebih Semangat Lagi
(Link Donasi Ada Di Command !donate Terima kasih)`);
  }

  if (msg.body.toLowerCase().includes('assalamualaikum') || msg.body.toLowerCase().includes("Assalamu'alaikum") || msg.body.toLowerCase().includes('Shalom') || msg.body.toLowerCase().includes('Permisi') || msg.body == 'Assalamualaikum') {
    msg.reply(`CHIKA Said:
Waalaikumsalam, Shalom, Om Swastiastu, Namo Budaya, Salam Kebajikan. Selamat Sejahtera bagi kita semua`);
  }

  if (cmd == "rules" || cmd == "RULES" || cmd == "Rules" || cmd == "peraturan") {
    msg.reply(`── 「 RULES 」 ──

-NO VIRTEX
-NO TELPON / VIDEO CALL
-NO SPAM
-MEMATUHI UNDANG-UNDANG DAN PERATURAN NEGARA YANG BERLAKU

*MELANGGAR ➡️ BLOCKED*

── 「 CHIKA BOT 」 ──`);
  }

  if (msg.body.toLowerCase() === '!banned' || msg.body.toLowerCase() === '!blocked' || msg.body.toLowerCase() === "!rules" || msg.body.toLowerCase() === "!RULE") {
    msg.reply(`KONTAK DIBWAH INI DENGAN SENGAJA MELANGGAR PERATURAN CHIKA-BOT :

-SPAM VIRTEX
-SPAM BERUNTUN
-MENELPON DAN/ATAU VIDEO CALL
-MELANGGAR UU DAN PERATURAN NEGARA` )
    const block = await client.getBlockedContacts();
    await client.sendMessage(msg.from, block)

  }

  if (cmd == 'help' || cmd == 'Help' || cmd == 'HELP' || cmd == '*Help*' || cmd == '*help*' || cmd == 'H' || cmd == '*HELP*' || cmd == 'menu' || cmd == 'Menu' || cmd == 'MENU' || cmd == 'hepl' || msg.body.toLowerCase() == '.menu' || msg.body.toLowerCase() == '!helpp') {
    //Kirim pesan menu bot
    const contact = await msg.getContact();
    const chat = await msg.getChat();

    chat.sendMessage(`── 「 CHIKA BOT 」 ──
Hello, @${contact.number} 
*Here Are My Command List*

╔═══ ❰ INFO BOT ❱ ═════
║ Time : ${jam}
║ Date : ${tanggal}
║ Prefix : ❰ ${prefix} ❱
║ Status : ❰ ${public} ❱
╚═══ ❰  CHIKA BOT  ❱ ═════

╔═══ ❰ List Menu ❱ ═════
║ !RULES
║ !ping
║ !menu
║ !help 
║ !donasi 
║ !owner
╚═══ ❰  CHIKA BOT  ❱ ═════

╔═══ ❰ Open AI Menu ❱ ═════
║ !ai  <teks> 🆕
║ !draw <teks> 🆕
╚═══ ❰  CHIKA BOT  ❱ ═════

╔═══ ❰ List Menu ❱ ═════
║ !mute
║ !profil
║ !stiker
║ !delete (reply)
║ !menfess nomorHP Pesan ║(GUNAKAN *628* HANYA ANGKA ║tanpa + tanpa -)
║^contoh:!menfess 62895603343007 hi 
╚═══ ❰  CHIKA BOT  ❱ ═════

╔═══ ❰ Random Menu ❱ ═════
║ !toxic
║ !apakah <teks>
║ !say <teks> 
║ !persen <teks>
║ !kapan <teks>
╚═══ ❰  CHIKA BOT  ❱ ═════

╔═══ ❰ Random Picture Menu ❱ ══
║ !meme
║ !cecan
║ !cogan 
║ !kpop 
║ !islam 
║ *!xxx* (🔞)
╚═══ ❰  CHIKA BOT  ❱ ═════

╔═══ ❰ Anime Picture Menu❱ ══
║ !waifu 
║ !husbu
║ !loli 
║ !shota 
║ !cosplay
║ !pokemon 
║ !neko
║ *!hentai* (🔞)
╚═══ ❰  CHIKA BOT  ❱ ═════

╔═══ ❰ Search Menu ❱ ═════
║ !google <keyword>
║ !yt <keyword>
╚═══ ❰  CHIKA BOT  ❱ ═════

╔═══ ❰ Game Menu ❱ ═════
║ !slot
║ !skor       
╚═══ ❰  CHIKA BOT  ❱ ═════
              
╔═══ ❰ Grup Menu ❱ ═════
║ !grupinfo 
║ !leave 
║ !tag
║ !mention <teks>
║ !join <linkgrup>
║ !kick <@mention>
╚═══ ❰  CHIKA BOT  ❱ ═════

╔═══ ❰ Grup Chika ❱ ═════
║join grup chika : https://chat.whatsapp.com/EQpzpW3zcWsChOCRN9G9KX
╚═══ ❰  CHIKA BOT  ❱ ═════

── 「© CHIKA BOT 」 ──`,
      {
        mentions: [contact]
      })

  }
  if (cmd == 'mention' || cmd == 'Mention' || cmd == 'MENTION') {
    const contact = await msg.getContact();
    const chat = await msg.getChat();
    chat.sendMessage(`Hai @${contact.number} ${msg.from, args}`, {
      mentions: [contact]
    });
  }
  if (msg.body.toLowerCase() == '!update') {
    //ADMIN ONLY
    msg.reply(`
              ── 「 CHIKA BOT UPDATE 」 ──
IRFAN BOT 1.0 INITIAL RELEASE
FIRST RELEASE 
Fix some bug
              
IRFAN BOT 2.0 UPDATE
-BIG UPDATE NEW SCRIPT, FIX 1.0 BUG, NEW PROFILE, NEW FEATURE, ETC
-Auto login  wa web tanpa qr code
-Penambahan fitur auto jawab lebih beragam
-Fix some bug & human errorr

              
IRFAN BOT 2.1 UPDATE
-Penambahan fitur auto jawab yang lebih beragam 
-New command !ping untuk mengetahui bot aktif atau tidak
-Penyesuaian profil bot & penggantian nama bot
-Fix minor bug & human error
              
IRFAN BOT 3.0 UPDATE
-Disable fitur auto jawab (cukup menggangu🖕🏻)
-Disable fitur !ping (Ga guna malah memberatkan code bot)
-Penambahan Fitur !help
-Penambahan Fitur say
-Penambahan Fitur gambar
-Penambahan Fitur menfess
-Pembaruan profil bot menjadi Chika-Bot
-Fix Minor bug

IRFAN BOT 3.1 UPDATE
-Add Instagram
-Pembaruan Fitur Menfess
-Proteksi Anti Spam
-PERBAIKAN BEBERAPA BUG YANG DIKETAHUI TERMASUK BUG FORCE CLOSE
              
IRFAN BOT 3.2 UPDATE
-Pembaruan fitur gambar
-Pembaruan fitur !help
-Penambahan fitur search Youtube
-Penambahan comand !info
-Penambahan fitur first chat
-Penambahan command update (Autor Only)
-Fix beberapa bug dan error termasuk bug Dikirim link, bot error
              
IRFAN BOT 3.3 UPDATE
-Penambahan Comand !grupinfo
-Penambahan Comand !gambar3
-Penambahan Comand !ping
-Pembaruan fitur !help
-Fix minor Bug
          
IRFAN BOT 3.4 UPDATE
-Penambahan command !donasi
-Penambahan chat otomatis ketika bot offline
-Penambahan fitur !leave
-Penambahan fitur !join
-Update and Fix Bug !grupinfo Fitur

IRFAN BOT 3.5 UPDATE
-Penambahan Fitur !Stiker
-Penambahan Fitur !google
-Penambahan Fitur !meme
-Penambahan Fitur !gambar
-Remove Fitur !gambar1,2,3
-Perbaikan fitur !join
-Fix Major Bug

IRFAN BOT 3.6
-REMOVE !gambar
-Penambahan Fitur !waifu
-Add waifu.API by irfan
-Add meme.API by irfan
-Fix some bug

IRFAN BOT 3.7
-Add !husbu
-Add husbu.API by irfan Anjay
-Add sama-sama message when !makasih or etc
-Add non cmd message opening
-Add irfan by dimas
-Fix !stiker spam crash (BEBERAPA KASUS MASIH SERING BUG)
-Fix Some Crash Bug 

IRFAN BOT 3.8
-Add !delete
-Add grup notifikasi : masuk,keluar,ubah deskripsi (nonaktif)
-Add cmd yang lebih bergam
-Add !profil
-Add wrong command message

IRFAN BOT 3.8.1
-Remove grup notifikasi
-Fix UI, Lag, and bug

IRFAN BOT 3.9
-Add scred command xixixi (!pin, !loncat, !typing, !vn, !sama)
-Add auto blocked spam +500 message
-Add spam & virtex detected
-Add spam & virtex block automatic
-Fix scred command bug

IRFAN BOT 4.0
-Add assalamualaikum / shalom by DIMAS SLEBEW
-Add Chrome for bot wa.js (Lebih cepat, Lebih ringan, Anti crash spam)
-Improve !sticker spam
-Improved proteksi spam
-Remove chromium
-Fix some Lag

IRFAN BOT 4.1
-Remove Chika-bot (nomor terblokir)
-Add Chika-bot 2.0 (nomor baru)
-Add new katalog wa bisnis
-Perbaikan bug nomor baru
-Fix wa web bug

IRFAN BOT 4.2
-Add fitur rahasia owner
-Memperbarui Fitur !waifu
-Memperbarui Fitur !husbu
-Memperbarui Fitur !meme

IRFAN BOT 4.3
-NEW UI MENU
-Add !rules
-Add !mention
-Add reaction emoji
-Improved !sticker
-Fix minor bug

IRFAN BOT 4.4.
-Add !xxx
-Add reaction ketika mengandung kata "bot"
-Improved stiker msg body (tidak perlu ! lagi)
-Fix UI !help bug
-Fix wa web bug

IRFAN BOT 4.5
-Improved !mention
-Improved reaction bot
-Fix help menu
-Fix !mention bug

IRFAN BOT 4.6
-Add Tes
-Add !banned (list banned)
-New Foto Profil
-Improved !menfess (msg capital)
-Improved !google (msg tolowercase)
-Improved irfan (msg tolowercase)
-Improved owner (msg tolowercase)
-Improved stiker (msg include asal mengandung stiker, stiker jalan)

IRFAN BOT 4.7
-Add kerang ajaib
-Update bot reaction
-Fix image bug (INDIHOME JANCOK)
-Add new real donasi
-Fix Bug

IRFAN BOT 4.8
-Improved !apakah
-Improved !waifu
-Fix wa web bug
-Fix minor bug

IRFAN BOT 4.9
-Improved !husbu
-Improved !leave
-Add !toxic (scred)
-Add !tag
-Fix bug

IRFAN BOT 5.0
-Add Chika on.bat shortcut cuy anjay
-Add welcome group message
-Add leave group message
-Add !persen
-Add !kapan

IRFAN BOT 5.1
-Add format salah menfes
-Add tag bukan di grub message
-Add invalid format sticker
-Add owner kontak
-FIX ALL BUG (TERMASUK CRASH MENFES, TAG, GAMABR, STIKER DLL)

IRFAN BOT 5.1
-Nomor baru (nomor lama terblokir)
-Improved IF ELSE !stiker
-Fix Wa web bug
-Fix stiker bug

IRFAN BOT 5.2
-Adjust !menfess
-Adjust bot reaction
-Improved performance and stability

IRFAN BOT 5.3
-Adjust !meme
-Add Request Gambar "https://bit.ly/Request-Gambar"
-Fix Stiker GIF/MP4 bug
-New owner number

IRFAN BOT 5.4
-Add !cosplay api by ibeng
-Add New Scred Feature
-Fix bug crased !gruoupinfo
-Improved performance and stability

IRFAN BOT 5.5
-Add !loli api by ibeng
-Add New scred feature
-Add !cogan api by ibeng
-Add !cecan api by ibeng
-Add !hentai (18)
-Improved UI menu
-Improved !stiker (reply)

IRFAN BOT 5.6
-Add !Slot
-Add !Skor
-FIX BUG !join AND HUMAN ERROR

IRFAN BOT 5.7
-Add !islam api by ibeng
-Add !pokemon api by ibeng
-Add chika-bot startup
-Improved !rule
-Improved !banned

IRFAN BOT 5.8
-Move !toxic to public
-Add !shota api by ibeng
-Add !kick
-Fix all bug picture menu

IRFAN BOT 5.9
-Improved !skor
-Fix minor !YT bug
-PERBAIKAN SEMENTARA WA WEB JS ISUE
-Add !$restart (owner)

IRFAN BOT 6.0
-Add new rule
-Add jam
-Add tanggal
-Add prefix
-Add status
-Improved !help UI
-Improved !menfess
-Fix minor bug

IRFAN BOT 6.1
-Improved !menfess
-Improved !leave 
-Improved !sticker
-Fix !neko bug
-Fix Error: Evaluation failed: TypeError: Cannot read properties of undefined (reading 'mediaData')

IRFAN BOT 6.2
-Fix WA Bussines bug
-Fix wa web js bug
-New account, pp, ETC
-Add broadcast chat feature
-Disable ibeng API

IRFAN BOT 6.2
-Remake !cosplay database by irfan
-Remake !loli database by irfan
-Remake !cecan database by irfan
-Improved UI !help
-Fix minor bug

IRFAN BOT 6.3
-Add !grub
-Improved !$restart
-Improved !menfess

IRFAN BOT IS BACK 6.4
-Fix ALL API ERROR
-Add !tugas (TKJ ONLY)
-Improved !tugas (TKJ ONLY)
-Fix bug

IRFAN BOT IS BACK 6.5 (Open Ai Special)
-BIG FIX BUG
-Add Open AI API
-Add !ai (based chat gpt-3 API)
-Add !draw (based dall-e API)

IRFAN BOT 6.6
-Just fix some bugs

IRFAN BOT 6.7
-Add survey
-Add auto send survey (jika ada kalimat jelek,fitur,fiturnya jelek.dll)
-New Image

Know Issue : 
Error: Evaluation failed: Error: MsgKey error: don't have a matching constructor (?) 
Error: Evaluation failed: TypeError: Cannot read properties of undefined (reading '_canRevoke') (?)
Open AI Limit Reached Api (Asyu bayar cok)
let imgUrl = response.data.data[0].url (Dall-e issue)
── 「 CHIKA BOT 」 ──`               )
  }
  //umpan balik

  if (msg.body.toLowerCase().includes("jelek" || "fiturnya jelek" || "fitur jelek" || "fiturnya kurang" || "survey" || "survei" || "umpan balik" || "fitur sedikit" || "fiturnya dikit")) {
    let link = "https://bit.ly/SURVEY-KEPUASAN-CHIKA-BOT"
    msg.reply(`Hai, tolong bantu kami dengan beberapa umpan balik dari Anda. Kami telah bekerja keras untuk terus memperbarui layanan kami dan ingin mengetahui pendapat Anda! Terima kasih atas dukungan Anda. 
Link : ${link}`)
  }

  if (cmd == 'grupinfo' || cmd == 'Grupinfo' || cmd == 'GRUPINFO' || cmd == 'grubinfo' || cmd == 'Grubinfo' || cmd == 'GRUBINFO') {
    let chat = await msg.getChat();
    if (chat.isGroup) {
      msg.reply(`*Grup Details*
Nama Grup: ${chat.name}

Deskripsi Grup: ${chat.description}

Dibuat Pada: ${chat.createdAt.toString()}

Dibuat Oleh: ${chat.owner.user}

Jumlah Peserta: ${chat.participants.length}`).catch(e => {
        console.log(e)
        msg.reply('Info  ' + e);
      })
    } else {
      msg.reply('HEH GOBLOK DIBACA TOLOL "Perintah ini hanya dapat digunakan dalam grup!"');
    }
  }

  //BATAS
  if (msg.body.toLowerCase() === "!leave") {
    const contact = await msg.getContact();
    const chat = await msg.getChat();
    if (chat.isGroup) {
      const { isAdmin, isSuperAdmin: isOwner } = chat.participants.find(participant => participant.id._serialized == contact.id._serialized)
      if (isAdmin || isOwner) {
        // Keluar dari grup

        await msg.reply('KAMU TEGA MENGELUARKAN AKU😥');
        chat.leave();
      } else {
        msg.reply('Maaf, Anda bukan admin grup, Anda tidak dapat melakukan ini ');
      }
    } else {
      msg.reply("Perintah ini hanya dapat digunakan dalam grup!");

    }
  }


  else if (msg.body.startsWith("!join ")) {
    const inviteLink = msg.body.split('https://chat.whatsapp.com/')[1];
    const inviteCode = msg.body.split(' ')[1];

    if (msg.body.includes('https://chat.whatsapp.com/')) {
      try {
        await client.acceptInvite(inviteLink);
        msg.reply('Bergabung dalam grup!');
      } catch (e) {
        msg.reply('Kode undangan itu tampaknya tidak valid / saya telah di kick dari grub tersebut');
      }
    } else {
      await client.acceptInvite(inviteCode).catch(e => {
        console.log(e)
        msg.reply('Kode undangan itu tampaknya tidak valid  ');
      });
    }
  }
  if (msg.body.toLowerCase() === "!linkgrub" || msg.body.toLowerCase() === "!grub") {
    msg.reply("Grub Chika-Bot : https://s.id/Grub-1")
  }

  else if (msg.body.startsWith("!$restart") || msg.body.startsWith("!$reboot")) {
    await msg.reply("OKE BOS IRFAN")
    const inviteLink = msg.body.split('https://chat.whatsapp.com/')[1];
    const inviteCode = msg.body.split(' ')[1];

    //restart
    if (msg.body.includes('https://chat.whatsapp.com/')) {
      try {
        await client.acceptInvite(inviteLink);
        msg.reply('Bergabung dalam grup!');
      } catch (e) {
        msg.reply('Kode undangan itu tampaknya tidak valid / saya telah di kick dari grub tersebut');
      }
    } else {
      await client.acceptInvite(inviteCode)
    }
  }

  if (msg.body.toLowerCase() === '!tag' || msg.body.toLowerCase() === '!tagall') {
    const chat = await msg.getChat();
    if (chat.isGroup) {
      let text = "";
      let mentions = [];

      for (let participant of chat.participants) {
        const contact = await client.getContactById(participant.id._serialized);

        mentions.push(contact);
        text += `•@${participant.id.user} 
`;
      }

      await chat.sendMessage(text, { mentions });
    } else {
      msg.reply("Perintah ini hanya dapat digunakan dalam grup!");
    }
  }

  if (msg.body.toLowerCase().includes('sticker') || msg.body.toLowerCase().includes('stiker') || cmd == 'sticker' || cmd == 'Sticker' || cmd == 'STICKER' || cmd == 'stiker' || cmd == 'Stiker' || cmd == 'STIKER' || cmd == 'Setiker' || cmd == 'setiker' || cmd == 'SETIKER' || cmd == 'STK' || cmd == 'Stk' || cmd == 'stk' || cmd == 's' || cmd == 'S' || msg.body == 'sticker' || msg.body == 'Sticker' || msg.body == 'STICKER' || msg.body == 'stiker' || msg.body == 'Stiker' || msg.body == 'STIKER' || msg.body == 'Setiker' || msg.body == 'setiker' || msg.body == 'SETIKER' || msg.body == 'STK' || msg.body == 'Stk' || msg.body == 'stk' || msg.body == 's' || msg.body == 'S' || msg.body == '.s' || msg.body == '.S' || msg.body == '. s' || msg.body == '. S' || msg.body == 'S' && msg.reply.hasMedia) {
    const author = await msg.getContact();
    const attachmentData = await msg.downloadMedia();
    if (attachmentData) {
      msg.react('⏳');
      await client.sendMessage(msg.from, attachmentData, {
        extra: {
          quotedMsg: {
            body: msg.body,
            type: "chat"
          },
          quotedStanzaID: 'Some Random shit',
          quotedParticipant: author.id._serialized
        },
        sendMediaAsSticker: true,
        stickerName: "Chika Bot",
        stickerAuthor: `Sticker by ${author.pushname}`,
      }).catch(e => {
        console.log(e)
        msg.reply('Stiker  ' + e);
      })
    } else {
      await msg.react('⁉');
    }
  }

  if (msg.body.toLowerCase().includes('toimg') && msg.reply.hasMedia) {
    if (msg.hasQuotedMsg) {
      const quotedMsg = await msg.getQuotedMessage();
      if (quotedMsg.hasMedia) {
        const attachmentData = await quotedMsg.downloadMedia();
        if (attachmentData) {
          msg.react('⏳');
          const media = client.MessageMedia.fromFilePath('./');
          await client.sendMessage(msg.from, attachmentData, media).catch(e => {
            console.log(e)
            msg.reply('image ' + e);
          })
        } else {
          msg.react('❌');
          msg.reply("Stiker Tidak Ditemukan");
        }
      }
    }
  }

  if (msg.body.toLowerCase().includes('sticker') || msg.body.toLowerCase().includes('stiker') || cmd == 'sticker' || cmd == 'Sticker' || cmd == 'STICKER' || cmd == 'stiker' || cmd == 'Stiker' || cmd == 'STIKER' || cmd == 'Setiker' || cmd == 'setiker' || cmd == 'SETIKER' || cmd == 'STK' || cmd == 'Stk' || cmd == 'stk' || cmd == 's' || cmd == 'S' || msg.body == 'sticker' || msg.body == 'Sticker' || msg.body == 'STICKER' || msg.body == 'stiker' || msg.body == 'Stiker' || msg.body == 'STIKER' || msg.body == 'Setiker' || msg.body == 'setiker' || msg.body == 'SETIKER' || msg.body == 'STK' || msg.body == 'Stk' || msg.body == 'stk' || msg.body == 's' || msg.body == 'S' || msg.body == '.s' || msg.body == 'S' && msg.reply.hasMedia) {
    if (msg.hasQuotedMsg) {
      const author = await msg.getContact();
      const quotedMsg = await msg.getQuotedMessage();
      if (quotedMsg.hasMedia) {
        const attachmentData = await quotedMsg.downloadMedia().catch(e => {
          console.log(e)
        });
        if (attachmentData) {
          msg.react('⏳');
          await client.sendMessage(msg.from, attachmentData, {
            extra: {
              quotedMsg: {
                body: msg.body,
                type: "chat"
              },
              quotedStanzaID: 'Some Random shit',
              quotedParticipant: author.id._serialized
            },
            sendMediaAsSticker: true,
            stickerName: "Chika Bot",
            stickerAuthor: `Sticker by ${author.pushname}`,
          }).catch(e => {
            console.log(e)
            msg.reply('Stiker  ' + e);
          })
        } else {
          msg.react('❌');
          msg.reply("Gambar Tidak Ditemukan").catch(e => {
            console.log(e)
            msg.reply('Stiker  ' + e);
          });
        }
      }
    }
  }

  //HAH VIRTEX GA JAMA DEK
  if (msg.body.length > 3000 && msg.author == undefined) {
    await msg.reply('TERDEKTESI VIRTEX & SPAM --BOT AKAN MEMBLOKIR KAMU PERMANEN');
    (await msg.getContact()).block();
  }

  if (msg.isVideo) {
    await msg.reply('TERDEKTESI TELPON / VIDEO CALL --BOT AKAN MEMBLOKIR KAMU PERMANEN');
    (await msg.getContact()).block();
  }


  if (msg.body.toLowerCase() === '!mute') {
    msg.reply('Nothing Happens')
    const chat = await msg.getContact();
    const unblockDate = new Date();
    unblockDate.setSeconds(unblockDate.getSeconds() + 20);
    await chat.block(unblockDate)
    await chat.unblock(unblockDate)
  }


  else if (msg.body === '!3') {
    const chat = await msg.getChat();
    // mute the chat for 20 seconds
    const unmuteDate = new Date();
    unmuteDate.setSeconds(unmuteDate.getSeconds() + 20);
    await chat.mute(unmuteDate);
  }

  else if (msg.body.toLowerCase() === '!delete' || msg.body.toLowerCase() === '!hapus' || msg.body.toLowerCase() === 'delete' || msg.body.toLowerCase() === 'hapus' || msg.body.toLowerCase() === "!deleted" || msg.body.toLowerCase() === "deleted") {
    if (msg.hasQuotedMsg) {
      const quotedMsg = await msg.getQuotedMessage();
      if (quotedMsg.fromMe) {
        quotedMsg.delete(true);
        msg.react('👍');
      } else {
        msg.reply('Untuk saat ini "Saya hanya bisa menghapus pesan saya sendiri"');
        msg.react('❌').catch(e => {
          console.log(e)
          msg.reply('Delete Error : ' + e);
        });
      }
    }
  }

  else if (cmd == 'Profil' || cmd == 'profil' || cmd == 'PROFIL') {
    let info = client.info;

    client.sendMessage(msg.from, `
*Connection info*
Nama Lengkap: ${info.pushname}
Nomor Saya: ${info.wid.user}
Platform: ${info.platform}
        `);
  }
  if (msg.body.toLowerCase().includes('bot') || msg.body.toLowerCase().includes('chika') || msg.body.toLowerCase().includes('cika')) {
    const balasan = [
      '😎', '😊', '😪', '😴', '⁉', '🤖', '‼️', '👀', '❓', '🤐', '❤', '🧐', '🤨', '❔', '💢', '🆗', '👁‍🗨', '💞', '😑',
    ];


    let reaction = balasan[Math.floor(Math.random() * balasan.length)];
    msg.react(reaction);
  }

  if (msg.body.toLowerCase().includes('!apakah')) {
    const balasan = [
      "Iyaa", "YNTKTS", "Tidak", "Mungkin", "Iyain", "Kurasa tidak", "Mungkin suatu hari", "Tidak juga", "Tidak keduanya", "Bisa jadi", "Menurut saya iya",
      "Kurasa iya", "Coba pikir sendiri", "Tidak ada", "YTTA", "Tidak mungkin", "Tentu saja iya", "Ya", "Tentu saja tidak", "Menurut saya tidak", "Tidak tahu",
    ];

    let pesan = balasan[Math.floor(Math.random() * balasan.length)];
    msg.reply(pesan);
  }

  if (msg.body.toLowerCase().includes("persen")) {
    let persen = Math.floor((Math.random() * 100) + 1);
    const chat = await msg.getChat();
    chat.sendMessage(`${msg.from, args} : ${persen}%`);
  }

  if (msg.body.toLowerCase().includes('!kapan')) {
    const balasan = [
      "Besok", "YNTKTS", "Kapan-kapan", "Mungkin 2 hari lagi", "Lusa depan", "Minggu depan", "Mungkin suatu hari", "Kemarin", "1 menit yang lalu", "1 tahun lagi", "Menurut saya kemarin",
      "Kurasa besok", "Coba tanya lagi", "Tidak tahu", "Yo Ndak Tau Kok Tanya Saya", "2 hari lagi", "Tentu saja 3 jam lagi", "4 menit lagi", "Tentu saja besok senin", "Menurut saya minggu depan",
      "1 Abad lagi", "3 minggu yang lalu", "3 jam lagi", "2 jam dari sekarang",
    ];

    let pesan = balasan[Math.floor(Math.random() * balasan.length)];
    msg.reply(pesan);
  }

  if (msg.body.toLowerCase() === "!slot") {
    let slot = ["🍔", "🌭", "🍗", "🍟", "🥩", "🥯", "🥘", "🥂", "🍻",];
    let final1 = slot[Math.floor(Math.random() * slot.length)];
    let final2 = slot[Math.floor(Math.random() * slot.length)];
    let final3 = slot[Math.floor(Math.random() * slot.length)];
    let final4 = slot[Math.floor(Math.random() * slot.length)];
    let final5 = slot[Math.floor(Math.random() * slot.length)];
    let final6 = slot[Math.floor(Math.random() * slot.length)];
    let final7 = slot[Math.floor(Math.random() * slot.length)];
    let final8 = slot[Math.floor(Math.random() * slot.length)];
    let final9 = slot[Math.floor(Math.random() * slot.length)];
    msg.reply(`
[  🎰 | SLOTS ]
-----------------
${final1} : ${final4} : ${final7}
${final2} : ${final5} : ${final8}
${final3} : ${final6} : ${final9}
-----------------
[  🎰 | SLOTS ]`)

  }
  if (msg.body.toLowerCase() === "!slot") {
    let persen = Math.floor((Math.random() * 100) + 1);

    client.sendMessage(msg.from, `*Peluang Anda :${persen}%*
*📝 : Jika Anda Mendapatkan 3 Buah Pasangan Anda Menang*
----------------
🥩 : 🥩 : 🥩 <---
🌭 : 🌭 : 🍟
🍗 : 🍗 : 🌭
---------------- `)
  }

  if (msg.body.toLowerCase() === "!score" || msg.body.toLowerCase() === "!skor") {
    const bendera = [
      "🇦🇨", "🇦🇩", "🇦🇪", "🇦🇫", "🇦🇬", "🇦🇮", "🇦🇱", "🇩🇿", "🇦🇲", "🇦🇴", "🇦🇶", "🇦🇷", "🇦🇸", "🇦🇹", "🇦🇺", "🇦🇼", "🇦🇽", "🇦🇿", "🏳️‍🌈", "🏳️‍⚧️", "🇺🇳", "🇧🇦", "🇧🇧", "🇧🇩", "🇧🇪", "🇧🇫", "🇧🇬", "🇧🇭", "🇧🇮", "🇧🇯", "🇧🇱", "🇧🇲", "🇧🇳", "🇧🇴", "🇧🇷", "🇧🇸", "🇧🇹", "🇧🇻", "🇧🇼", "🇧🇾", "🇧🇿", "🇨🇦", "🇧🇶", "🇨🇨", "🇨🇩", "🇨🇫", "🇨🇬", "🇨🇮", "🇨🇰", "🇹🇩", "🇨🇱", "🇨🇲", "🇨🇳", "🇨🇴", "🇨🇵", "🇨🇷", "🇨🇺", "🇨🇻", "🇨🇼", "🇨🇽", "🇨🇾", "🇨🇿", "🇭🇷", "🇪🇦", "🇮🇨", "🇰🇭", "🇰🇲", "🇰🇾",
      "🇩🇬", "🇩🇯", "🇩🇰", "🇩🇲", "🇩🇴", "🇪🇨", "🇪🇪", "🇪🇬", "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "🇪🇷", "🇪🇹", "🇸🇻", "🇸🇿", "🇪🇺", "🇫🇮", "🇫🇯", "🇫🇰", "🇫🇴", "🇫🇷", "🇬🇫", "🇵🇫", "🇹🇫", "🇩🇪", "🇬🇦", "🇬🇩", "🇬🇪", "🇬🇬", "🇬🇭", "🇬🇮", "🇬🇱", "🇬🇲", "🇬🇳", "🇬🇵", "🇬🇶", "🇬🇷", "🇬🇸", "🇬🇹", "🇬🇺", "🇬🇼", "🇬🇾", "🇭🇰", "🇭🇲", "🇭🇳", "🇭🇹", "🇭🇺", "🇸🇭", "🇮🇩", "🇮🇪", "🇮🇱", "🇮🇲", "🇮🇳", "🇮🇴", "🇮🇶", "🇮🇷", "🇮🇸", "🇮🇹", "🇯🇪", "🇯🇲", "🇯🇴", "🇯🇵", "🇰🇪", "🇰🇬", "🇰🇮", "🇰🇳", "🇰🇵", "🇰🇷", "🇰🇼", "🇽🇰", "🇰🇿", "🇱🇦", "🇱🇧", "🇱🇨", "🇱🇮", "🇱🇰", "🇱🇷", "🇱🇸",
      "🇱🇹", "🇱🇺", "🇱🇻", "🇱🇾", "🇾🇹", "🇲🇦", "🇲🇨", "🇲🇩", "🇲🇪", "🇲🇫", "🇲🇬", "🇲🇭", "🇲🇰", "🇲🇱", "🇲🇲", "🇲🇳", "🇲🇴", "🇲🇵", "🇲🇶", "🇲🇷", "🇫🇲", "🇲🇸", "🇲🇹", "🇲🇺", "🇲🇻", "🇲🇼", "🇲🇽", "🇲🇾", "🇲🇿", "🇳🇦", "🇳🇨", "🇳🇪", "🇳🇫", "🇳🇬", "🇳🇮", "🇳🇱", "🇳🇴", "🇳🇵", "🇳🇷", "🇳🇺", "🇳🇿", "🇴🇲", "🇵🇦", "🇵🇪", "🇵🇬", "🇵🇭", "🇵🇰", "🇵🇱", "🇵🇲", "🇵🇳", "🇵🇷", "🇵🇸", "🇵🇹", "🇵🇼", "🇵🇾", "🇶🇦", "🇷🇪", "🇷🇴", "🇷🇺", "🇷🇼", "🇷🇸", "🇸🇦", "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "🇸🇧", "🇸🇨", "🇸🇩", "🇸🇪", "🇸🇬", "🇨🇭", "🇸🇮", "🇪🇭",
      "🇪🇸", "🇸🇯", "🇸🇰", "🇸🇱", "🇸🇲", "🇸🇳", "🇸🇴", "🇸🇷", "🇸🇸", "🇸🇾", "🇸🇹", "🇸🇽", "🇼🇸", "🇿🇦", "🇹🇦", "🇹🇨", "🇹🇬", "🇹🇭", "🇹🇯", "🇹🇰", "🇹🇱", "🇹🇲", "🇹🇳", "🇹🇴", "🇹🇷", "🇹🇹", "🇹🇻", "🇹🇼", "🇹🇿", "🇺🇦", "🇺🇬", "🇺🇲", "🇺🇳", "🇺🇸", "🇬🇧", "🇺🇾", "🇺🇿", "🇻🇦", "🇻🇨", "🇻🇪", "🇻🇬", "🇻🇮", "🇻🇳", "🇻🇺", "🇼🇫", "🏴󠁧󠁢󠁷󠁬󠁳󠁿", "🇾🇪", "🇿🇲", "🇿🇼",
    ]
    let benderar1 = bendera[Math.floor(Math.random() * bendera.length)];
    let benderar2 = bendera[Math.floor(Math.random() * bendera.length)];
    let angka = Math.floor((Math.random() * 10) + 1);
    let angka2 = Math.floor((Math.random() * 10) + 1);
    msg.reply(`${benderar1} VS ${benderar2}
${angka} VS ${angka2}`)
  }

  //KENE KI ERROR ASTAGA
  else if (msg.body.startsWith('!tes1 ')) {
    const msc = msg.body.split(' ')[1];
    const msn = msg.body.split(' ')[2];
    const mso = msg.body.split(' ')[3];
    const msp = msg.body.split(' ')[4];
    //console.log(msgy);
    const contact = str_replace('@', '', msc)
    chat.sendStateTyping();
    const { MessageMedia } = require('./index');
    chat.sendMessage(`NUMBER: ${contact}\nNAMA : ${msn} ${mso} ${msp}`);

  }
  //tes
  else if (msg.body.startsWith('!profile ')) {
    let mentions = await msg.getMentions();
    for (let contact of mentions) {
      if (contact.number == msg.from) {
        msg.reply(`*PROFILE*
NUMBER: ${contact.number}
NAME: ${contact.pushname}

note: THIS IS YOUR PROFILE`)
      } else if (contact.number == 'owner number') {
        msg.reply(`*PROFILE*
NUMBER: ${contact.number}
NAME: ${contact.pushname}
*OWNER*

note: THIS IS YOUR PROFILE`)
      }
    };
  }
  //rwt
  else if (msg.body === '!nuliss') {
    const chat = await msg.getChat();
    // simulates typing in the chat
    chat.sendStateTyping();
  }
  //ERROR ASU
  if (cmd == 'stingnulis') {
    if (args.length === 1) msg.reply(from, 'Kirim Perintah */nulis [text]*', id)
    const diTulis = body.slice(14)
    await zahraaa.reply(from, menulis.magernulissatu, id)
    const panjangKalimat = diTulis.replace(/(\S+\s*){1,10}/g, '$&\n')
    const panjangBaris = panjangKalimat.split('\n').slice(0, 30).join('\n')
    spawn('convert', [
      './MFarelSZ/Farelll/magernulis1.jpg',
      '-font',
      './font/Zahraaa.ttf',
      '-size',
      '1024x784',
      '-pointsize',
      '20',
      '-interline-spacing',
      '-7.5',
      '-annotate',
      '+344+142',
      panjangBaris,
      './MFarelSZ/Zahraaa/magernulis1√.jpg'
    ])
      .on('error', () => zahraaa.reply(from, menulis.errormagernulissatu, id))
      .on('exit', () => {
        zahraaa.sendImage(from, './IMAGES/magernulis1.jpg', 'magernulis1.jpg', '*Sukses✓ Nulis DiBuku ✓*\n\n*YouTube : MFarelS CH*\n*Instagram : @mfarelsyahtiawan*\n*Twitter : @MSyahtiawan*\n*GitHub : @MFarelS*\n*Saweria : MFarelS*\n\n*© 2021 MFarelS✓*', id)
      })
  }



  //===========SCRED===========\\
  else if (msg.body === '!vn') {
    const chat = await msg.getChat();
    // mensimulasikan audio perekaman dalam obrolan
    chat.sendStateRecording();
  }
  else if (msg.body === '!loncat') {
    if (msg.hasQuotedMsg) {
      const quotedMsg = await msg.getQuotedMessage();
      client.interface.openChatWindowAt(quotedMsg.id._serialized);
    }
  }
  else if (msg.body === '!typing') {
    const chat = await msg.getChat();
    // mensimulasikan pengetikan dalam obrolan
    chat.sendStateTyping();
  }
  else if (msg.body === '!pin') {
    const chat = await msg.getChat();
    await chat.pin();
  }

  else if (msg.body.startsWith('!sama')) {
    // balas dengan pesan yang sama
    msg.reply(msg.body.slice(6));
  }

  else if (cmd == 'kick' || cmd == 'Kick' || cmd == 'KICK') {
    const contact = await msg.getContact();
    const chat = await msg.getChat();
    if (chat.isGroup) {
      const { isAdmin, isSuperAdmin: isOwner } = chat.participants.find(participant => participant.id._serialized == contact.id._serialized)

      if (isAdmin || isOwner) {
        await chat.removeParticipants([msg.mentionedIds[0]]).catch(e => {
          console.log(e)
          msg.reply('Error : ' + e)
        });

        if (chat.removeParticipants([msg.mentionedIds[0]])) {
          msg.reply("Berhasil mengeluarkan user").catch(e => {
            console.log(e)
            msg.reply('Error : ' + e)
          });
        } else {
          msg.reply("Jadikan chika Admin untuk mengeluarkan seeorang").catch(e => {
            console.log(e)
            msg.reply('Error : ' + e)
          });
        }
      } else {
        client.sendMessage(msg.from, "Maaf, Anda bukan admin grup, Anda tidak dapat melakukan ini").catch(e => {
          console.log(e)
          msg.reply('Error : ' + e)
        });
      }
    } else {
      client.sendMessage(msg.from, "Perintah ini hanya dapat digunakan dalam grup!").catch(e => {
        console.log(e)
        msg.reply('Error : ' + e)
      });
    }

  }

  else if (msg.body.toLowerCase() === "!toxic") {
    const jawab = ["ASU", "NGENTOT", "BAJINGAN", "KONTOL", "JEMBUT", "MEMEK", "TAI", "ANJING", "GOBLOG", "BODOH", "FUCK", "BITCH", "ANJEG", "DOGGY", "🤐", "FUCK IT", "TOLOL", `أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْه
  Astaghfirullah, alladzi la ilaha illa huwal hayyul qayyumu wa atuubu ilaih.
  “Aku memohon ampun kepada Allah, Dzat yang tidak ada sesembahan kecuali Dia. Yang Maha hidup lagi Maha Berdiri Sendiri. Dan aku bertaubat kepada-Nya.”`]
    let balas = jawab[Math.floor(Math.random() * jawab.length)];
    client.sendMessage(msg.from, balas);
  }

  //FIX SOON
  //if (msg.body.toLowerCase() === "!18" || msg.body.toLowerCase() === "!pussy" || msg.body.toLowerCase() === "!memek" ){
  //let linkgambar = await MessageMedia.fromUrl ("https://ibeng-api.ddns.net/api/nsfw/pussy?apikey=ibeng", {unsafeMime : true});menfes


  // cpt =["🙄", "Ih wibu", "😋", "BAU TERASI",]
  //let random = cpt[Math.floor(Math.random()*cpt.length)];
  //msg.reply(random, undefined, { media: linkgambar});
  //}

  //if (msg.body.toLowerCase() === "!lesbi" || msg.body.toLowerCase() === "!yuri" || msg.body.toLowerCase() === "!21" ){
  //let linkgambar = await MessageMedia.fromUrl ("https://ibeng-api.ddns.net/api/nsfw/yuri?apikey=ibeng", {unsafeMime : true});;
  //cpt =["🙄", "Ih wibu", "😋", "BAU TERASI",]
  //let random = cpt[Math.floor(Math.random()*cpt.length)]; 
  //msg.reply(random, undefined, { media: linkgambar});
  //}
  if (cmd == '!add') {

    const chat = await msg.getChat();
    if (chat.isGroup) {
      if (isAdmin || isOwner) {
        await chat.addParticipants('@c.us').catch(e => {
          console.log(e)
          msg.reply('Error : ' + e)
        });
      } else {
        msg.reply("grub")

      }
    }
  }
  // Here you know they are not an admin




  //d


  //batas


  if (cmd == "tess") {
    const stk = MessageMedia.fromFilePath('./IMAGES/welcome.webp');
    client.sendMessage(msg.from, stk, { sendMediaAsSticker: true });

  }
  if (msg.body.toLowerCase().includes("!owner") || msg.body.toLowerCase().includes("!admin") || msg.body.toLowerCase() === ".owner") {
    let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
      + 'VERSION:3.0\n'
      + 'FN:Chika-Bot\n' // full name
      + 'ORG:Chika BOT;\n' // the organization of the contact
      + 'TEL;type=CELL;type=VOICE;waid=6288221512567:+62 882-2151-2567\n' // WhatsApp ID + phone number
      + 'END:VCARD'
    msg.reply(vcard)
    /*let vcard = 'BEGIN:VCARD\n'
    + 'VERSION:3.0\n' 
    + 'FN:ADMIN\n' 
    + 'ORG:CHIKA BOT ADMIN;\n' 
    + 'TEL;type=CELL;type=VOICE;waid=6288221512567:+62 882-2151-2567\n' // WhatsApp ID + phone number
    + 'END:VCARD'
  
  msg.reply(vcard)*/
  }

  if (msg.body.toLowerCase().startsWith('!dtesting ')) {
    const response = await axios.get(`https://api2.trizy.co/api/download/tiktok2?url=${msg.body.slice(11)}`);
    const tiktok = response.data;
    const att = await MessageMedia.fromUrl(tiktok);
    await client.sendMessage(msg.from, att, { caption: tiktok }).catch(error => {
      console.log(error)
      msg.reply('Terjadi kesalahan saat memproses permintaan.');
    });
  }



  //batas suci 
  if (msg.body.toLowerCase() === "!ctes") {
    const url = await axios.get("https://botcahx-rest-api.herokuapp.com/api/randomgambar/couplepp", { json: true })
    await client.sendMessage(msg.from, url).catch(error => {
      console.log(error);
      msg.reply(error);
    });
  }


  //b
  if (msg.body.startsWith('ymp3') || msg.body.startsWith('Ymp3')) {
    const execSync = require('child_process').execSync;
    try {
      const chat = await msg.getChat();
      const contact = await msg.getContact();
      chat.sendStateTyping();
      const { MessageMedia } = require('whatsapp-web.js');
      //const { exec } = require("child_process")
      let cp = `${contact.number}`
      let it = (msg.body.slice(5))
      let options = { stdio: 'pipe' };
      //home/xxxx/yt-dlp is your path off yt-dlp
      let stdout = execSync(`/home/xxxx/yt-dlp -S "res:144" --extract-audio --audio-format mp3 -o ${contact.number}y.mp3 --max-filesize 26121471 --force-overwrites ` + it + ``, options);
      chat.sendStateTyping();
      const media = MessageMedia.fromFilePath(`${contact.number}y.mp3`);
      chat.sendMessage(`download done ${media.data.length}`);
      if (`${media.data.length}` > 110000) {
        chat.sendMessage(media, { sendMediaAsDocument: true });
      }
      else {
        chat.sendMessage(media);
      }
      //execSync('rmdir doesntexist' , options);//will exit failure and give stderr
    } catch (e) {
      msg.reply("SEDANG ERROR");
    }
  }
  else if (msg.body.startsWith('ytd') || msg.body.startsWith('Ytd')) {
    const execSync = require('child_process').execSync;
    try {
      const chat = await msg.getChat();
      const contact = await msg.getContact();
      chat.sendStateTyping();
      const { MessageMedia } = require('whatsapp-web.js');
      //const { exec } = require("child_process")
      let cp = `${contact.number}`
      let it = (msg.body.slice(3))
      let options = { stdio: 'pipe' };
      //home/xxxx/yt-dlp is your path off yt-dlp
      let stdout = execSync(`/home/xxxx/yt-dlp -f "(mp4)[height<480]" -o ${contact.number}.mp4 --max-filesize 26121471 --force-overwrites ` + it + ``, options);
      chat.sendStateTyping();
      const media = MessageMedia.fromFilePath(`${contact.number}.mp4`);
      chat.sendMessage(`download done ${media.data.length}`);
      if (`${media.data.length}` > 110000) {
        chat.sendMessage(media, { sendMediaAsDocument: true });
      }
      else {
        chat.sendMessage(media);
      }
      //execSync('rmdir doesntexist' , options);//will exit failure and give stderr
    } catch (e) {
      msg.reply("MAAF ERROR");
    }
  }
  //
  else if (msg.body === '!buttons') {
    let button = new Buttons('Button body', [{ body: '!stiker' }, { body: '!toxic' }, { body: 'tes' }], 'title', 'footer');
    client.sendMessage(msg.from, button);
  }

  else if (msg.body === '!listz') {
    let sections = [{ title: 'sectionTitle', rows: [{ title: 'ListItem1', description: 'desc' }, { title: 'ListItem2' }] }];
    let list = new List('List body', 'btnText', sections, 'Title', 'footer');
    client.sendMessage(msg.from, list);
  }
  //

  if (msg.body.startsWith("!BC ")) {
    const getAllChats = await client.getChats()
    const message = msg.body.slice(4)

    for (let i = 0; i < getAllChats.length; i++) {
      const sendTo = getAllChats[i].id._serialized
      await client.sendMessage(sendTo, message)
    }
    await msg.react("👍")
  }
  //c


  if (msg.body.toLowerCase().startsWith('!tiktok ')) {
    if (msg.body.includes("tiktok")) {
      if (msg.links[0]) {
        const chat = await msg.getChat()
        await chat.sendMessage(msg.reply("donwloading"))
        const tiktok = await (async result => {
          const b64 = Buffer.from(await fetch(result.tiktok).then(e => e.arrayBuffer())).toString("base64");
          const att = new MessageMedia("video/mp4".b64, tiktok);
          client.sendMessage(msg.from, b64, att).catch(e => {
            console.log(e)
            msg.reply('Error : ' + e);
          })
        });

      }
    }
  }
  if (msg.body.toLowerCase() === "makalah kelompok 1") {
    Media1 = await MessageMedia.fromFilePath('./pdf/Batik.pdf'), { sendMediaAsDocument: true };
    const media = Media1
    client.sendMessage(msg.from, media).catch(e => {
      console.log(e)
      msg.reply('Error : ' + e);
    })
  }

  if (msg.body.toLowerCase() === "makalah kelompok 2") {
    Media1 = await MessageMedia.fromFilePath('./pdf/Makalah Shared Hosting.docx'), { sendMediaAsDocument: true };
    const media = Media1
    client.sendMessage(msg.from, media).catch(e => {
      console.log(e)
      msg.reply('Error : ' + e);
    })
  }

  if (msg.body.toLowerCase() === "makalah kelompok 3") {
    Media1 = await MessageMedia.fromFilePath('./pdf/Makalah Shared Hosting.pdf'), { sendMediaAsDocument: true };
    const media = Media1
    client.sendMessage(msg.from, media).catch(e => {
      console.log(e)
      msg.reply('Error : ' + e);
    })
  }

  if (msg.body.toLowerCase() === "makalah kelompok 4") {
    Media1 = await MessageMedia.fromFilePath('./pdf/Batik.pdf'), { sendMediaAsDocument: true };
    const media = Media1
    client.sendMessage(msg.from, media).catch(e => {
      console.log(e)
      msg.reply('Error : ' + e);
    })
  }

  if (msg.body.toLowerCase() === "makalah kelompok 5") {
    Media1 = await MessageMedia.fromFilePath('./pdf/Batik.pdf'), { sendMediaAsDocument: true };
    const media = Media1
    client.sendMessage(msg.from, media).catch(e => {
      console.log(e)
      msg.reply('Error : ' + e);
    })
  }

  if (msg.body.toLowerCase() === "makalah kelompok 6") {
    Media1 = await MessageMedia.fromFilePath('./pdf/Batik.pdf'), { sendMediaAsDocument: true };
    const media = Media1
    client.sendMessage(msg.from, media).catch(e => {
      console.log(e)
      msg.reply('Error : ' + e);
    })
  }

  if (msg.body.toLowerCase() === "jadwal") {
    jadwal = await MessageMedia.fromFilePath("./pdf/Jadwal Kelas XI.pdf"), { sendMediaAsDocument: true };
    let pdf = jadwal
    await msg.reply(pdf).catch(e => {
      console.log(e)
      msg.reply('Error : ' + e);
    })
  }

  if (msg.body.toLowerCase() === 'tugas') {
    let button = new Buttons('(BY IRFAN SYARIFUDIN)', [{ body: 'makalah kelompok 1' }, { body: 'makalah kelompok 2' }, { body: 'makalah kelompok 3' },], 'Tugas Makalah ASKJ', 'Silahkan klik tombol dibawah');
    client.sendMessage(msg.from, button).catch(e => {
      console.log(e)
      msg.reply('Error : ' + e);
    });
  }

  if (msg.body.toLowerCase() === 'tugas') {
    let button = new Buttons('(BY IRFAN SYARIFUDIN)', [{ body: 'makalah kelompok 4' }, { body: 'makalah kelompok 5' }, { body: 'makalah kelompok 6' },], 'Tugas Makalah ASKJ', 'Silahkan klik tombol dibawah');
    client.sendMessage(msg.from, button).catch(e => {
      console.log(e)
      msg.reply('Error : ' + e);
    });
  }

  let alreadyTyping;
  if (typeof content === 'string' && !alreadyTyping) {
    const chat = await this.client.getChatById(chatId);
    await chat.sendStateTyping();
    alreadyTyping = true;

    const wpm = (content.split(' ').length / 90) * 60000;
    if (wpm < 25000) {
      await chat.clearState();
      alreadyTyping = false;
    }

    await new Promise((r) => setTimeout(r, wpm))
  }




})
client.initialize();

async function getUnreadMsg(client) {
  try {
    const allChats = await client.getChats();

    console.log(allChats);
  } catch (e) {
    console.error(e);
  }
}
//fuit
module.exports = class NeoxrApi {
  baseUrl = 'https://api.neoxr.my.id/api/tiktok?url=https://vt.tiktok.com/ZSJ7CgDUC&apikey=598dsC'
  apiKey = null

  constructor(apiKey) {
    this.apiKey = apiKey || ''
  }
  tiktok = async (url) => {
    let json = await (await axios.get(this.baseUrl + '/tiktok?url=' + url + '&apikey=' + this.apiKey)).data
    return json
  }


}

//grup notification
client.on('group_join', (notification) => {
  console.log('join', notification);
  let stk = MessageMedia.fromFilePath('./IMAGES/welcome.webp');
  notification.reply(stk, { sendMediaAsSticker: true });
});

client.on('group_leave', (notification) => {
  console.log('leave', notification);
  let stk = MessageMedia.fromFilePath('./IMAGES/bye.webp');
  notification.reply(stk, { sendMediaAsSticker: true });
});
client.on('group_update', (notification) => {
  console.log('update', notification);
});

const EditPhotoHandler = async (text, msg) => {
  if (msg.body.toLowerCase() === "!bg") {
    const cmd = text.split(" ");

    const color = cmd[1]

    if (msg.hasMedia) {
      if (msg.type != 'image') {
        return msg.reply("gambarnya mana cok");
      }

      msg.reply("sedang diproses");

      const media = await msg.downloadMedia();
      const chat = await msg.getChat();

      if (media) {
        const newPhoto = await EditPhoto(media.data, color)

        if (!newPhoto.success) {
          return msg.reply('Terjadi Kesalahan')
        }
        media.data = newPhoto.base64;
        chat.sendMessage(media, { caption: 'beta v 1.0' })
      }

    }

  }
}

const playGame = async (player1, player2) => {
  try {
    const player1Choice = await askForChoice(player1.message);
    const player2Choice = await askForChoice(player2.message);

    if (player1Choice === player2Choice) {
      return 'SERI';
    } else if (
      (player1Choice === 'gunting' && player2Choice === 'kertas') ||
      (player1Choice === 'batu' && player2Choice === 'gunting') ||
      (player1Choice === 'kertas' && player2Choice === 'batu')
    ) {
      return `${player1.name} MENANG`;
    } else {
      return `${player2.name} MENANG`;
    }
  } catch (error) {
    return error.message;
  }
};

const player1 = {
  name: 'Andi',
  message: 'Saya pilih gunting',
};

const player2 = {
  name: 'Budi',
  message: 'Saya pilih batu',
};

console.log(playGame(player1, player2));

// WhatsApp Bot by Irfan Syarifudin