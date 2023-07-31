import herbivore from "./productimage/herbivore.jpg"
import herbivoreaha from "./productimage/herbivoreahabha.jpg"
import thenimetyou from "./productimage/thenimetyou.jpg"
import idewcare from "./productimage/idewcare.jpg"
import caudalie from "./productimage/caudalie.jpg"
import transform from "./productimage/transform.png"
import laneige from "./productimage/laneige.jpg"
import klairs from "./productimage/klairs.jpg"
import drjart from "./productimage/drjart.jpg"
import byecom from "./productimage/byecom.jpg"
import cicaliao from "./productimage/cicaliao.jpg"
import roocares from "./productimage/roocares.jpg"
import greenbare from "./productimage/greenbare.png"
import featforskin  from "./productimage/featforskin.jpg"
import brioge from "./productimage/brioge.jpg"
import biossance from "./productimage/BIOSSANCE.jpg"
import caudalietoner from "./productimage/caudalietoner.jpg"
import sugar from "./productimage/sugar.jpg"
import biossance2 from "./productimage/biossance2.jpg"
import uvcut from "./productimage/uvcut.jpg"


import React from 'react'


  const productdata = [

    {
      id: 0,
      image: herbivore,
      title: "Gözenek Arındırıcı Krem",
      exp: "Mavi solucan otu yağı ve beyaz söğüt kabuğu BHA ile yapılan AQUARIUS Gözenek Arındırıcı Berraklık Kremi, tıkanmış gözenekleri derinlemesine temizlemeye ve nem seviyelerini dengelemeye yardımcı olur. Kullanımdan sonra, cilt yumuşak, mat bir yüzeyle nemlenmiş hisseder.",
      brand: "herbivore",
      type: "arındırıcı krem",
      use: "BLUE TANSY Resurfacing Clarity Mask'i temizledikten ve uyguladıktan sonra cilde masaj yapın.Hidrasyonun korunmasına yardımcı olmak ve özel bir rutin oluşturmak için favori Herbivore yağınızı uygulayın. Lapis Blue Tansy Yüz Yağı öneririz.Hem gündüz hem de gece için uygundur.Serin, kuru bir yerde ve doğrudan güneş ışığından uzakta dik olarak saklayın.",
      volume: "1,7 ons | 50 mL cam kavanoz ",
      price: 250
      ,piece:1
    },
    {
      id: 4,
      image: caudalie,
      title: "Nemlendirici Jel Krem",
      exp: "Cilt için doğal bir nem kaynağı olan Vinosource-Hydra Organik Üzüm Suyu İçeren Nemlendirici Jel Krem, cilt bariyerini güçlendirerek cilde yoğun nem sağlar. Silikon içermeyen, ferahlatıcı jel-krem dokusuyla cildi yağlı his bırakmadan nemlendirir. Uygulamanın hemen ardından cilt daha dolgun, yoğun olarak nemlenmiş, ferah bir hisse kavuşur.      ",
      brand: "caudalie",
      type: "nemlendirici",
      use: `Sabah ve akşam serumunuzdan sonra veya tek başına yüz ve boyun bölgesine uygulayın. `,
      volume: "50ml",
      price: 200
      ,piece:1
    },
      
    {
      id: 3,
      image: idewcare,
      title: "aydınlatıcı glikolik maskesi",
      exp: "YIKANABİLİR YÜZ MASKESİ, GLİKOLİK ASİT, AYDINLATICI: Harika hissettiren bu dut kokulu yıkanabilir maske, donuk cildi canlandırmaya ve aydınlatmaya yardımcı olmak için antioksidanlar ve peeling yapan çilek tohumları ile doludur. Bu glikolik maske, daha parlak bir cilt için donukluğu azalttığı bilinen bileşenler içerir.",
      brand: "i dew care",
      type: "yüz maskesi",
      use: `Temiz cilde göz ve dudaklardan kaçınarak cömert, eşit bir tabaka uygulayın. 5-10 dakika bekletin - maske kurumaz! Cilde dairesel hareketlerle masaj yaparken ılık su ile durulayın. En iyi sonuçlar için haftada 2-3 kez kullanın.`,
      volume: "100g",
      price: 560
      ,piece:1
    },
    {
      id: 1,
      image: herbivoreaha,
      title: "AHA+BHA Glow Facial",
      exp: "Bitki bazlı AHA‚ ve Söğüt Kabuğu bazlı BHA'nın jöle dokulu, konsantre karışımı, cildi tek bir kullanım kadar kısa bir sürede mattan parlaklığa ve parlaklığa doğal olarak dönüştürmeye yardımcı olan, peeling yapan bir glow facial.",
      brand: "herbivore",
      type: "aha bha",
      use: `Cilt yenileme maskesi olarak haftada 1-2 kez kullanın.
        Temiz ve kuru cilde, göz çevresinden kaçınarak ince, eşit bir tabaka halinde uygulayın.
        10-15 dakika bekletin, ardından ılık su ile durulayın. Hassas ciltler için 5 dakika bekletin.
        Besleyici bir Otçul Yüz Yağı ile devam edin.
        Göz ile doğrudan temastan kaçının. Temas oluşursa, suyla yıkayın. Bu ürün, cildinizin güneşe karşı hassasiyetini artıran bir AHA içerir, bu nedenle SPF'yi her gün giydiğinizden ve yeniden uyguladığınızdan emin olun. Uygulama üzerine bir karıncalanma veya hafif kızarıklık normaldir. Tahriş kötüleşirse kullanmayı bırakın.`,
      volume: "90g",
      price: 390
      ,piece:1
  
    }, {
      id: 2,
      image: thenimetyou,
      title: "Living Temizleme Balmı  ",
      exp: "Yumuşak temizleme kremimiz ve makyaj temizleyicimiz, fazla yağları ve kirleri nazikçe temizlerken, uzun süre kalıcı formüllerin ve suya dayanıklı güneş kremlerinin tüm izlerini hızla yok eder.Deniz mersini yağı cildi yumuşatır ve korur, kreme parlak sarı rengini verir. Ayrıca hurma özü, zeytinyağı ve E vitamini cildi temizlemeye yardımcı olur. Deniz böğürtlen rengi ve narenciye koku notaları, balsamın kokusuna ve rengine göre değişir.",
      brand: "then i met you",
      type: "balm",
      use: `Çifte temizlemenizin ilk adımı için, kuru cilde kuru cilt üzerine küçük bir miktar almak için spatulayı kullanın ve dairesel hareketlerle hafifçe masaj yapın. Yağ bazlı safsızlıkları emülsifiye etmek ve çıkarmak için bir miktar ılık su ekleyin. Yatıştırıcı Çay Temizleme Jeli ile su bazlı bir temizlik olan ikinci adıma geçmeden önce iyice durulayın.`,
      volume: "90g",
      price: 320
      ,piece:1
  
    },

    {
      id: 5,
      image: transform,
      title: "Siyah Nokta Toniği",
      exp: "Bu güçlü yüz toniği koyu lekeleri, ince çizgileri ve kırışıklıkları hedefler, dokuyu aydınlatır ve pürüzsüzleştirir. Temizleme sonrası tonlama yapın ve serum ve nemlendirici için mükemmel bir şekilde hazırlanacaksınız. Artı, bağımlılık yapan limon şekeri kokusu  ve karıncalanma, ilk kullanımdan itibaren bağlanacaksınız.",
      brand: "ole henriksen",
      type: "tonik",
      price: 140,
      piece:1,
      volume: "190ml",
      use: `Geceleri, bir pamuğa dökün ve temiz, kuru yüzünüze dairesel hareketlerle uygulayın.
        Seçtiğiniz OLEHENRIKSEN serum veya nemlendirici ile devam edin.
        Sadece harici kullanım içindir. Talimatlara uygun kullan.
        Bu ürün aktif bileşenler içerir; Ön kolda küçük bir miktar test etmenizi öneririz.
        Güneş Yanığı Uyarısı: Bu ürün, cildinizin güneşe karşı hassasiyetini ve özellikle güneş yanığı olasılığını artırabilecek bir alfa hidroksi asit (AHA) içerir. Bir güneş koruyucu kullanın, koruyucu giysiler giyin ve bu ürünü kullandıktan sonra bir hafta boyunca güneşe maruz kalmayı sınırlayın. Göz bölgesinden kaçının. Göz ile teması halinde hemen yıkayınız.`
    }
    ,
    {
      id: 6,
      image: laneige,
      title: "Dudak Uyku Maskesi",
      exp: "Bu gece maskesi, hidrasyonunu en üst düzeye çıkarmak için dudakları saran yumuşatıcı bir balsam görevi görür.Güçlü antioksidanlar, uyku sırasında kuru dudakları besler ve yeniler. Hyaluronik asit ve mineral bazlı formül, dudakları yumuşak, rahat ve derinlemesine beslenmiş, yeni bir güne hazır hale getirir! Derinlemesine nemlendirilmiş dudaklarınız bir gecede daha yumuşak ve daha esnektir. Rujunuzu uygulamadan önce ideal tedavidir",
      brand: "laneige",
      type: "maske",
      use: `Geceleri, ürünü spatula ile dudaklarınıza bolca uygulayın. Ürünü bütün gece dudağınızda bekletirken, tatlı rüyalar görün. Sabahları fazlalığı nazikçe silin veya dudaklarınızı temizleyin. Haftada 1 ila 2 defa uygulayın.
      `,
      volume: "20gr",
      price: 760
      ,piece:1
  
    },
    {
      id: 7,
      image: klairs,
      title: "Yatıştırıcı Onarıcı Set     ",
      exp: "Bu güçlendirilmiş çift Peptit formüllü Anti-aging Gece Serumu sayesinde kırışıklık & ince çizgi karşıtı bakım yapar, esnekliğini koruyarak cildi genç tutar.Yumuşak dokulu krem ise stresli cildi içeriğindeki yoğun Centella Asiatica, Guaiazulene ve Peptit ile rahatlatır, leke karşıtı bakım sunar.  ",
      brand: "klairs",
      volume: "20ml - 30ml",
      price: 350,
      type: "serum krem",
      use: `Serum: Cildinizi temizledikten sonra bu serumdan 3-4 damlayı cildinize uygulayıp emilmesini sağlayın. Oda sıcaklığında muhafaza edin. Buzdolabında saklarsanız kristalize olacaktır.
        Krem:Cilt bakımı rutininizin son aşamasında cildinizdeki hassas bölgeye az miktarda uygulayıp tam emilmesi için hafif masaj yapın.
      `,
      piece:1,
    },
    {
      id: 8,
      image: drjart,
      title: "Renk Düzeltici Bakım",
      exp: "Cicapair™ Tiger Grass Color Correcting Treatment 15 Ml Kızarıklığı düzelten ve cildi UV hasarından ve çevresel saldırganlardan korumaya yardımcı olan, yeşilden bej rengine cilt rengini düzelten bir krem tedavisi.Tüm cilt tiplerine uygundur.- Kızarıklık - Düzensiz cilt tonu - Akne ve lekelere çözüm sunmaya yardımcı olur.Cicapair ™ Tiger Grass Renk Düzeltme Kremi, lekeleri kapatmak, cildin sağlığını ve canlılığını geri kazandırmak renk değiştiren bir kapsül içinde formüllenen hepsi bir arada çözüm sunar",
      brand: "drjart",
      type: "krem",
      volume: "50ml",
      price: 830,
      use: `Nemlendirdikten sonra, yüzünüze eşit miktarda küçük bir miktar sürün ve karıştırın.
      Cilde masaj yaptıkça krem ​​yeşilden beje dönüşerek cilt tonunu eşitler.`,
      piece:1,
    }
    ,
    {
      id: 9,
      image: byecom,
      title: " saf sakinleştirici ampul",
      exp: "Bu ampul, cildi hızlı bir şekilde sakinleştiren, cildinizin nemlenmiş ve tazelenmiş hissetmesini sağlayan yüksek nem içeriği ve çeşitli bitki özleri içerir. Centella Asiatica, Çay Ağacı ve Portulaca özleri gibi bileşenlerle tahrişi hafifletmeye ve cildi sakinleştirmeye yardımcı olur.",
      brand: "by ecom",
      use: `Temiz cilde 2-3 damla uygulayın (tonikten sonra)
      Tamamen emilene kadar cilde hafifçe vurun
      Tercih edilen nemlendirici ile takip edin`,
      type: "ampul serum",
      volume: "30ml",
      price: 500
      ,piece:1
    },
    {
      id: 10,
      image: cicaliao,
      title: "CICA x Care CICALIAO Krem",
      exp: "Sorunlu cilde nazik ve rahat, yatıştırıcı bir bakım verin! Cildinizi çevresel hasarlardan korur, rahatlatır ve derinlemesine nemlendirme sağlar. Cildin nem tutma yeteneğini geliştirmeye yardımcı olur. ",
      brand: "vt cosmetics",
      type: "cica krem",
      use: `Esans veya serum kullandıktan sonra, yüzünüze uygulamak için uygun miktarda dağıtın.`,
      price: 370,
      volume: "50ml",
      piece:1
  
    },
    {
      id: 11,
      image: roocares,
      title: "Rahatlatıcı esans yağı",
      exp: `Tek bir serumla 5 etki hedefler.
        Cilt lekelerinin oluşumunu engeller ve var olan lekelerin giderilmesine yardımcı olur.
        Cildin nem tutma kapasitesini maksimum seviyede yükseltir ve kolajen üretimini arttırır.
        Donuk, mat, cansız ciltler için ideal bir parlaklık ve canlanma sağlar.
        Var olan çizgi ve kırışıklık görünümünü azaltır, yenilerinin oluşumunu engeller, Cilt elastikiyetini arttırarak cildin daha sıkı ve pürüzsüz görünmesini sağlar.
        `  ,
      brand: "roocares",
      type: "serum",
      use: `Sıcak bir banyo yaparken, birkaç damla esans yağını banyo suyuna ekleyerek rahatlayabilirsiniz.Unutmayın ki esans yağları yalnızca destekleyici tedavi olarak kullanılmalıdır ve ciddi sağlık sorunlarında tıbbi danışmanlık yerine geçmez. Ayrıca, hamilelik, cilt rahatsızlıkları veya alerji durumunda mutlaka bir uzmana danışmalısınız. Herhangi bir esans yağı kullanırken, kullanım talimatlarını dikkatlice okumalı ve önerilen dozları aşmaktan kaçınmalısınız.    `,
      volume: "50ml",
      price: 860
      ,piece:1
    }
    ,
    {
      id: 17,
      image: sugar,
      title: "çilekli yüz temizleyici ",
      exp: ` Sugar Strawberry Exfoliating Face Wash cilt temizleyici yumuşak peeling, 
        cildi kirden arındırarak gözenekleri sıkılaştırır ve cilde olağanüstü pürüzsüz ve
         yumuşak bir doku sağlar.Bu yüz temizleyici peeling gözenekleri sıkılaştırmak ve 
         cilde daha aydınlık bir görünüm sağlamak için cilt üzerinde kademeli olarak eriyen
          iki farklı büyüklükte şeker kristalleri ve cilde parlak, sağlıklı ve dinç bir görünüm
           sunmak için ise çilek çekirdeği özü içerir. Yumuşak dokusuyla cildi nazikçe arındırıp
            sebum fazlalığını, kiri ve makyajı temizlerken cildin nemini ve dengesini korur.`,
      brand: "fresh",
      type: "face wash",
      use: `Eksfoliye Edici Temizleyiciyi nemli cildinize uygulayın. Şeker eriyene kadar ılık suyla nazikçe masaj yapın ve ardından durulayın.
        Size özel bir temizlik ve daha yumuşak bir doku için daha fazla su kullanın.
        Şeker peelingi günlük olarak kullanılabilir.    
        `,
      volume: "125ml",
      price: 140,
      piece:1
  
    },
  
    {
      id: 19,
      image: uvcut,
      title: "UV Cut güneş kremi Super SPF 50+ PA++++ ",
      exp: ` Can sıkıcı hasarlara karşı bariyer oluştururken güzel bir cilt veren yüz için bir güneş koruyucudur.
      Ultraviyole ışınlarına, hava kirleticilere ve yakın kızılötesi ışınlara odaklanır ve cildi bunlardan koruyan bileşenler içerir.
      Her ten rengine uyum sağlayan renk tasarımı ile beyazlatma olmadan parlak doğal bir parlaklık yaratır.
      
      `,
      brand: "orbis",
      type: "güneş kremi",
      use: `Elinize uygun bir miktar alarak güneş yanığını önlemek istediğiniz bölgeye azar azar uygulayın ve hemen eşit şekilde yayın.
      Yüzlerde de kullanılabilir.
      Fondöteni tekrar tekrar uygularken, bu ürünü cilde eşit ve sıkı bir şekilde uygulamanızı ve ardından bir makyaj bazı kullanmanızı öneririz.
      
        `,
      volume: "50ml",
      price: 825,
      piece:1
  
    },
    {
      id: 12,
      image: greenbare,
      title: "Sarı Kil Maskesi      ",
      exp: `Sarı Kil Yüz Maskemiz, hassas cildi sakinleştirmek ve yatıştırmak için hazırlanmış Marshmallow Kökü, Papatya ve Aynısefa ile yapılmıştır. Sıkıcı ve ihmal edilmiş bir ruh halinden, rahatlamış ve canlanmış bir hale geçmek istediğinizde bu lezzeti köpürtün. Yorgun cildiniz için sıcak bir kucaklaşma.
        `  ,
      brand: "green bare",
      type: "maske",
      use: `
          Maske uygulamadan önce daima temizleyin.Ürünle birlikte verilen fırçayı kullanarak yüzünüze ince bir tabaka halinde uygulayın, göz ve ağız çevresinden kaçının.Maske yaklaşık %80 kuruyana kadar yüzünüzde bırakın, %100 kurumasını istemezsiniz çünkü çıkarılması daha zor olur ve silerken pürüzlü olabilir.
          Ilık suyla durulayın ve ardından bir yüz yağı veya nemlendirici uygulayın.
          Cildinizin ihtiyacına göre haftada 1-2 kez kullanın.`,
      volume: "50g",
      price: 320
      ,piece:1
  
    }
    ,
    {
      id: 18,
      image: biossance2,
      title: "çilekli yüz temizleyici ",
      exp: ` Bu lüks, hafif C vitamini yağı ile gözle görülür sonuçların (aydınlatma, sıkılaştırma ve nemlendirme) üçlüsünü deneyimleyin . Yağda çözünen, rafta dayanıklı C vitaminimiz, güçlü bir parlatıcı ve elastikiyet arttırıcıdır. Skualen nemi hapsederken Sakız Adası kristal yağı, cildinize genç bir canlılık kazandırmak için sıkılaştırır ve canlandırır. Şam gülü yaprağı özümüz sakinleştirir ve yatıştırır, geride yumuşak, doğal bir koku bırakır.`,
      brand: "biossance",
      type: "c vitamini yağı",
      use: `Sabah ve akşam birkaç damla C Vitamini Gül Yağını temiz cilde hafifçe bastırın. Uzun süreli nemlendirmeyi kilitlemek için serum ve nemlendiricinizden sonra C Vitamini yağını kullanın. Ekstra nemli kapatıcılık için fondöteninize bir veya iki damla da ekleyebilirsiniz. 
        `,
      volume: "30ml",
      price: 625,
      piece:1
  
    },

    {
      id: 14,
      image: brioge,
      title: "Organik Çay Ağacı Yağı ",
      exp: `Briogeo'nun B. Well™ Organik + Avustralya %100 Çay Ağacı Yağı sivilceyle savaşır ve cildinizi yatıştırarak saç derinizdeki kaşıntıyı hafifletir. Bu %100 organik, GDO'suz çay ağacı yağı, maksimum saflık ve güç için Avustralya çay ağacı yapraklarından ve buharla damıtılmış buhardan sürdürülebilir şekilde yetiştirilir ve kafa derisi kaşıntısını ve tahrişini azaltmaya ve küçük lekeleri yatıştırmaya yardımcı olan güçlü antimikrobiyal özelliklere sahiptir.
  `  ,
      volume: "20ml",
      piece:1,
      brand: "feat for skin",
      type: "bitki yağı",
      price: 790,
      use: ` Lekeler ve tahriş olmuş ciltler için, steril bir pamuklu çubuk kullanarak temiz ve kuru ilgili bölgelere doğrudan uygulamadan önce suyla veya taşıyıcı bir yağla (jojoba yağı gibi) seyreltin. Kuru kafa derisi kaşıntısı için, birkaç damla çay ağacı yağını bir taşıyıcı yağa (hindistan cevizi yağı gibi) seyreltin, yatmadan önce temiz bir saç derisine masaj yapın ve ertesi sabah durulayın. En sevdiğiniz Briogeo™ şampuan ve saç kreminin saç derisini yatıştırıcı faydalarını artırmak için birkaç damla da eklenebilir. Günlük veya gerektiği gibi kullanın.
        `,
    },
    {
      id: 15,
      image: biossance,
      title: "DENİZ YOSUNU GÖZ KREMİ ",
      exp: `Ödüllü cruelty-free göz kremi, maksimum performans ve daha az görünür ince çizgi ve kırışıklık için güçlü deniz yosunu ve paracres özleri ile tüm alanı anında kaldırır. Deniz Yosunu Göz Kremi'nin hava-hafif dokusu temas halinde eriyerek derin nemlendirme sağlar ve arkasında makyaj için mükemmel bir tuval bırakı
           `  ,
      brand: "biossance",
      type: "göz kremi",
      price: 460,
      use: ` Yüzük parmağınızı kullanarak tüm göz çevresine göz kremini nazikçe uygulayın. Göz çevresine, şakağa ve kaş kemiğinin altına masaj yapın (göz kapaklarında kullanılabilir).
        Günde iki kez, sabah ve akşam kullanın.
        En iyi sonuçlar için, temizlemeden sonra ve serum ve nemlendiricilerden önce kullanın. `,
      volume:"50ml",
      piece:1,
  
    }
    ,
  
    {
      id: 16,
      image: caudalietoner,
      title: "Vinoclean Nemlendirici Tonik  ",
      exp: ` Temizleyicilerimiz VINOCLEAN serisi altında yenilendi!
        Vegan formüllere ve yüksek oranda doğal türevli içeriğe sahip, çevreye duyarlı yeni temizleyiciler.
        Kusursuz makyaj temizliğinin vazgeçilmez adımı olan Nemlendirici Tonik, makyaj kalıntılarını temizlerken cildi canlandırmaya yardımcıdır.
        İçeriğindeki nemlendirici  Vinolevure ve matlaştırıcı organik gül suyu ile canlanan, temizlenen ve yatışan cilt sonrasında uygulanan bakım ürünlerinin faydalarına hazır hale gelir.
        Cilt temizliğini tamamlar.
        Cildi canlandırır.
        Nemlendirir ve yatıştırır.`,
      brand: "caudalie",
      type: "tonik",
      use: `Sabah ve akşam bir pamuğa 3 pompa Nemlendirici Tonik alın.
        ​Pamuğu temiz yüzünüzde ve boynunuzda nazikçe gezdirerek uygulayın. Durulama gerektirmez.
        `,
      volume: "200ml",
      price: 260,
      piece:1,
  
    },
    {
      id: 13,
      image: featforskin,
      title: "aydınlatıcı serum ",
      exp: `Aktif ve doğal bileşenler arasındaki en iyi karışım, eşit olmayan cilt tonu görünümünü azaltır. Bakterileri ve ölü deri hücrelerini yok etmeye ve serbest radikallerin neden olduğu hasarı onarmaya yardımcı olmak için doğal bir Alfa Hidroksi Asit (AHA) formu olarak şeker akçaağaç özü içerir.
          Düzensiz cilt tonuna neden olan hiperpigmentasyon görünümünü azaltan Traneksamik Asit. Bu bileşenler, cildinizin güneş ışığına duyarlılığını etkilemez.
           `  ,
      brand: "feat for skin",
      type: "serum",
      volume: "30ml",
      price: 240,
      piece:1,
      use: `2-3 damlayı yeni temizlenmiş yüzün her yerine hafifçe vurun. Ekstra etkinlik ve koruma için nemlendirici ve güneş kremi (sabahları) ile katmanlayın. En iyi sonuçlar için en az 2 hafta boyunca her sabah ve akşam düzenli olarak kullanın. Herhangi bir tahriş meydana gelirse durdurun.        `,
    }
    ,
    {
      id: 30,
      image: featforskin,
      title: "aydınlatıcı serum ",
      exp: `Aktif ve doğal bileşenler arasındaki en iyi karışım, eşit olmayan cilt tonu görünümünü azaltır. Bakterileri ve ölü deri hücrelerini yok etmeye ve serbest radikallerin neden olduğu hasarı onarmaya yardımcı olmak için doğal bir Alfa Hidroksi Asit (AHA) formu olarak şeker akçaağaç özü içerir.
          Düzensiz cilt tonuna neden olan hiperpigmentasyon görünümünü azaltan Traneksamik Asit. Bu bileşenler, cildinizin güneş ışığına duyarlılığını etkilemez.
           `  ,
      brand: "feat for skin",
      type: "serum",
      volume: "30ml",
      price: 240,
      piece:1,
      use: `2-3 damlayı yeni temizlenmiş yüzün her yerine hafifçe vurun. Ekstra etkinlik ve koruma için nemlendirici ve güneş kremi (sabahları) ile katmanlayın. En iyi sonuçlar için en az 2 hafta boyunca her sabah ve akşam düzenli olarak kullanın. Herhangi bir tahriş meydana gelirse durdurun.        `,
    }
    ,
  
    
];


export default productdata

