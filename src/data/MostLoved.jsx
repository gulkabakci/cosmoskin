
import herbivore from "./productimage/herbivore.png"
import herbivoreaha from "./productimage/herbivoreahabha.jpg"
import thenimetyou from "./productimage/thenimetyou.jpg"
import idewcare from "./productimage/idewcare.png"
import caudalie from "./productimage/caudalie.jpg"
import transform from "./productimage/transform.png"
import laneige from "./productimage/laneige.avif"
import klairs from "./productimage/klairs.jpg"
import drjart from "./productimage/drjart.jpg"
import byecom from "./productimage/byecom.jpg"
import cicaliao from "./productimage/cicaliao.jpg"
import roocares from "./productimage/roocares.jpg"
import greenbare from "./productimage/greenbare.png"
import featforskin from "./productimage/featforskin.jpg"
import brioge from "./productimage/brioge.jpg"
import biossance from "./productimage/BIOSSANCE.jpg"
import caudalietoner from "./productimage/caudalietoner.jpg"
import sugar from "./productimage/sugar.jpg"
import biossance2 from "./productimage/biossance2.jpg"


 const productdata = [
    {
      id: 10,
      image: cicaliao,
      title: "CICA x Care CICALIAO Krem",
      exp: "Sorunlu cilde nazik ve rahat, yatıştırıcı bir bakım verin! Cildinizi çevresel hasarlardan korur, rahatlatır ve derinlemesine nemlendirme sağlar. Cildin nem tutma yeteneğini geliştirmeye yardımcı olur. ",
      brand: "vt cosmetics",
      type: "cica krem",
      use: `Esans veya serum kullandıktan sonra, yüzünüze uygulamak için uygun miktarda dağıtın.`,
      price: 370

    },
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
    },
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
  
    }
    ,
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
      use: ``,
      price: 860
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

    },
    

  
    {
      id: 7,
      image: klairs,
      title: "Yatıştırıcı Onarıcı Set     ",
      exp: "Bu güçlendirilmiş çift Peptit formüllü Anti-aging Gece Serumu sayesinde kırışıklık & ince çizgi karşıtı bakım yapar, esnekliğini koruyarak cildi genç tutar.Yumuşak dokulu krem ise stresli cildi içeriğindeki yoğun Centella Asiatica, Guaiazulene ve Peptit ile rahatlatır, leke karşıtı bakım sunar.  ",
      brand: "klairs",

      price: 350,
      type: "serum krem",
      use: `Serum: Cildinizi temizledikten sonra bu serumdan 3-4 damlayı cildinize uygulayıp emilmesini sağlayın. Oda sıcaklığında muhafaza edin. Buzdolabında saklarsanız kristalize olacaktır.
      Krem:Cilt bakımı rutininizin son aşamasında cildinizdeki hassas bölgeye az miktarda uygulayıp tam emilmesi için hafif masaj yapın.
    `,
    },

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
      type: "toner",
      use: `Sabah ve akşam bir pamuğa 3 pompa Nemlendirici Tonik alın.
      ​Pamuğu temiz yüzünüzde ve boynunuzda nazikçe gezdirerek uygulayın. Durulama gerektirmez.
      `,
      volume: "200ml",
      price: 260

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
    },
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
    },

    {
      id: 14,
      image: brioge,
      title: "Organik Çay Ağacı Yağı ",
      exp: `Briogeo'nun B. Well™ Organik + Avustralya %100 Çay Ağacı Yağı sivilceyle savaşır ve cildinizi yatıştırarak saç derinizdeki kaşıntıyı hafifletir. Bu %100 organik, GDO'suz çay ağacı yağı, maksimum saflık ve güç için Avustralya çay ağacı yapraklarından ve buharla damıtılmış buhardan sürdürülebilir şekilde yetiştirilir ve kafa derisi kaşıntısını ve tahrişini azaltmaya ve küçük lekeleri yatıştırmaya yardımcı olan güçlü antimikrobiyal özelliklere sahiptir.
         `  ,
      brand: "feat for skin",
      type: "bitki yağı",
      price: 790,
      use: ` Lekeler ve tahriş olmuş ciltler için, steril bir pamuklu çubuk kullanarak temiz ve kuru ilgili bölgelere doğrudan uygulamadan önce suyla veya taşıyıcı bir yağla (jojoba yağı gibi) seyreltin. Kuru kafa derisi kaşıntısı için, birkaç damla çay ağacı yağını bir taşıyıcı yağa (hindistan cevizi yağı gibi) seyreltin, yatmadan önce temiz bir saç derisine masaj yapın ve ertesi sabah durulayın. En sevdiğiniz Briogeo™ şampuan ve saç kreminin saç derisini yatıştırıcı faydalarını artırmak için birkaç damla da eklenebilir. Günlük veya gerektiği gibi kullanın.
      `,
    }
    ,
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

    },



  ];

  export default productdata;