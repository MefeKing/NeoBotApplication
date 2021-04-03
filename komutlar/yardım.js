const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  const Embed = new Discord.RichEmbed()
    .setAuthor("Server Stat", client.user.avatarURL)
    .setTitle("Yardım Menüsü")
    .setColor("GREEN")
    .setDescription("Sunucu İstatistiğini Gösteren Bir Bot!")
    .addField(
      "afk | **Sizi afk bırakır**",
      "ailemiz| **Botun olduğu sunucular hakkında bilgi verir**",
      "alevlogo | **Alevli bir logo oluşturur**",
      "altınlogo | **Altın bir logo oluşturur**",
      "animefont| **Yazdığınız yazıyı dinamik çevirir**",
      "anket| **Bu komutla anket oluşturulur **",
      "ara155| **eğlence komutudur**",
      "aşkölçer| **eğlence komutudur aşkınızı ölçer .d**",
      "atam| **Atatürk'ün rastgele fotoğrafını atar**",
      "avatar| **PP'nizi atar**",
      "balıktut| **Eğlence komutudur balık tutarsınız .d**",
      "ban-sorgula| **ban sorgular**",
      "bakım| **sunucuyu bakıma sokar**",
      "ban| **belirtilen kişiyi banlar**",
      "bdvpara| **Size bedava para verir**",
      "caps-engel| **caps-lock engeller**",
      "cowsay| **eğlence komutudur xd**",
      "çekiliş|  **çekiliş oluşturur**",
      "çeviri|  **Kelimeleri çevirmeye yarar (**",
      "davet-kur|  **Bulunduğunuz sunucunun davet linkini atar.**",
      "davet|  **Botun davet linkini atar**",
      "destek-kanal-ayarla|  **Destek kanalı ayarlar**",
      "destek-rol-ayarla|  **Destek rol ayarlar**",
      "ejdarha-yazı| **Belirtiğiniz yazı ile ejderha Logosu Yaparsınız**",
      "emojiler| **Sunucuda bulunan emojileri atar**",
      "espri| **Espri yapar (küfürlüyse bana sövmeyin .d )**",
      "greenlogo| **Belirttiğiniz yazı ile yeşil bir logo yapar**",
      "insta-hesapara| **İnstagramda hesap ararsınız**",
      "istatistik| **Botun istatiklerini atar**",
      "kapak-olsun| **Kapak yapar**",
      "kedişgo| **Kedi resmi atar**",
      "kick| **Belirtilen üyeyi atar **",
      "köpüş| **Size köpek resmi atar**",
      "kullanıcı-bilgi| **Kullanıcının bilgilerini atar**",
      "kurucu| **Kurucunun kim olduğunu söyler**",
      "küfürengel| **Küfür engel açar**",
      "mesajdöndür| **Mesajınızı döndürür**",
      "mod-log| **Moderator log açar**",
      "mute| **Belirtilen kullanıcı susturulur**",
      "oyun-ara| **Oyun arar**",
      "ping| **Pinginizi söyler**",
      "pixel| **Avatarınızı pixelleştirir**",
      "play,veya p| **Müzik çaldırır**",
      "playlist| **Müzik listesini atar**",
      "prefix| **Prefixi değiştirir (istediğinizi yapabilirsiniz)**",
      "resume| **Şarkıyı devam ettirir**",
      "roller| **Sunucuda bulunan rolleri atar**",
      "romen| **Yazdığınız sayıyı romen sayısına çevirir**",
      "sa-as| **Sa as ı açarsınız**",
      "salak| **Salak gifi atar**",
      "search| **Şarkı ararsınız**",
      "sil| **Belirttiğiniz kadar mesaj siler**",
      "skip| **Müziği bitirir**",
      "stop| **Müziğinizi dondurur**",
      "sunucu-kur| **Sunucu kurdurur**",
      "sunucubilgi| **Sunucu hakkında bilgi verir**",
      "sunucuresmi| **Sunucunun resmini atar**",
      "şekerye| **Eğlence komutu**",
      "tavsiye| **Bot geliştiricisine hataları raporlamayı/tavsiye vermeyi/öneri iletmeyi sağlar.**",
      "top10| **Botun bulunduğu sunuculardan en çok kişiye sahip olan 10 sunucuyu sıralar.**",
      "unban| **Banı kaldırırsınız**",
      "unmute| **Mute u kaldırırsınız**",
      "uyar| **İstediğiniz kişiyi uyarır.**",
      "uyarı-kaldır| **Uyarıyı kaldırırır**",
      "yardım| **Botun komutlarını atar**",
      "yavaş-mod| **Belirttiğiniz kanalda yavaş mod açar",
      "yazıtura|  **Kura çeker**",

      "Arkadaşlar NeoBota top gg den oy vererek bana destek olmuş olursunuz .",
      "Emeğe saygı :heart:"
      




      

      

    )
    .setTimestamp()
    .setFooter("© Server Stat", client.user.avatarURL);
  message.channel.send(Embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Bu komut ile sunucudaki komutları öğrenirsiniz",
  usage: "yardım"
};
