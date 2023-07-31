
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
import featforskin from "./productimage/featforskin.jpg"
import brioge from "./productimage/brioge.jpg"
import biossance from "./productimage/BIOSSANCE.jpg"
import caudalietoner from "./productimage/caudalietoner.jpg"
import sugar from "./productimage/sugar.jpg"
import biossance2 from "./productimage/biossance2.jpg"


 const productdata = [
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





  ];

  export default productdata;