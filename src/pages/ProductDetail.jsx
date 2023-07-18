import ProductDetails from '../components/ProductDetails';
import Highlights from '../components/Highlights';
import { Route, NavLink as Link, Switch, useLocation, useParams } from "react-router-dom";
import "./productdetail.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faHeart,faMinus } from '@fortawesome/free-solid-svg-icons'

import herbivore from "../data/productimage/herbivore.png"
import herbivoreaha from "../data/productimage/herbivoreahabha.jpg"
import thenimetyou from "../data/productimage/thenimetyou.jpg"
import idewcare from "../data/productimage/idewcare.png"
import caudalie from "../data/productimage/caudalie.jpg"
import transform from "../data/productimage/transform.png"
import laneige from "../data/productimage/laneige.avif"
import klairs from "../data/productimage/klairs.jpg"
import drjart from "../data/productimage/drjart.jpg"
import byecom from "../data/productimage/byecom.jpg"
import cicaliao from "../data/productimage/cicaliao.jpg"
import roocares from "../data/productimage/roocares.jpg"
import greenbare from "../data/productimage/greenbare.png"
import featforskin from "../data/productimage/featforskin.jpg"
import brioge from "../data/productimage/brioge.jpg"
import biossance from "../data/productimage/BIOSSANCE.jpg"
import caudalietoner from "../data/productimage/caudalietoner.jpg"
import sugar from "../data/productimage/sugar.jpg"
import biossance2 from "../data/productimage/biossance2.jpg"

import React, { useEffect, useRef, useState } from 'react'

<script defer src="https://use.fontawesome.com/releases/v5.15.1/js/all.js"
  integrity="sha384-9/D4ECZvKMVEJ9Bhr3ZnUAF+Ahlagp1cyPC7h5yDlZdXs4DQ/vRftzfd+2uFUuqS"
  crossorigin="anonymous"></script>

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
    id: 4,
    image: caudalie,
    title: "Nemlendirici Jel Krem",
    exp: "Cilt için doğal bir nem kaynağı olan Vinosource-Hydra Organik Üzüm Suyu İçeren Nemlendirici Jel Krem, cilt bariyerini güçlendirerek cilde yoğun nem sağlar. Silikon içermeyen, ferahlatıcı jel-krem dokusuyla cildi yağlı his bırakmadan nemlendirir. Uygulamanın hemen ardından cilt daha dolgun, yoğun olarak nemlenmiş, ferah bir hisse kavuşur.      ",
    brand: "caudalie",
    type: "nemlendirici",
    use: `Sabah ve akşam serumunuzdan sonra veya tek başına yüz ve boyun bölgesine uygulayın. `,
    volume: "50ml",
    price: 200
  },
  {
    id: 5,
    image: transform,
    title: "Siyah Nokta Toniği",
    exp: "Bu güçlü yüz toniği koyu lekeleri, ince çizgileri ve kırışıklıkları hedefler, dokuyu aydınlatır ve pürüzsüzleştirir. Temizleme sonrası tonlama yapın ve serum ve nemlendirici için mükemmel bir şekilde hazırlanacaksınız. Artı, bağımlılık yapan limon şekeri kokusu  ve karıncalanma, ilk kullanımdan itibaren bağlanacaksınız.",
    brand: "ole henriksen",
    type: "tonik",
    price: 140,
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
    id: 10,
    image: cicaliao,
    title: "CICA x Care CICALIAO Krem",
    exp: "Sorunlu cilde nazik ve rahat, yatıştırıcı bir bakım verin! Cildinizi çevresel hasarlardan korur, rahatlatır ve derinlemesine nemlendirme sağlar. Cildin nem tutma yeteneğini geliştirmeye yardımcı olur. ",
    brand: "vt cosmetics",
    type: "cica krem",
    use: `Esans veya serum kullandıktan sonra, yüzünüze uygulamak için uygun miktarda dağıtın.`,
    price: 370,
    volume: "50ml",

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
    use: `2-3 damlayı yeni temizlenmiş yüzün her yerine hafifçe vurun. Ekstra etkinlik ve koruma için nemlendirici ve güneş kremi (sabahları) ile katmanlayın. En iyi sonuçlar için en az 2 hafta boyunca her sabah ve akşam düzenli olarak kullanın. Herhangi bir tahriş meydana gelirse durdurun.        `,
  }
  ,
  {
    id: 14,
    image: brioge,
    title: "Organik Çay Ağacı Yağı ",
    exp: `Briogeo'nun B. Well™ Organik + Avustralya %100 Çay Ağacı Yağı sivilceyle savaşır ve cildinizi yatıştırarak saç derinizdeki kaşıntıyı hafifletir. Bu %100 organik, GDO'suz çay ağacı yağı, maksimum saflık ve güç için Avustralya çay ağacı yapraklarından ve buharla damıtılmış buhardan sürdürülebilir şekilde yetiştirilir ve kafa derisi kaşıntısını ve tahrişini azaltmaya ve küçük lekeleri yatıştırmaya yardımcı olan güçlü antimikrobiyal özelliklere sahiptir.
`  ,
    volume: "20ml",

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
    price: 260

  },
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
    price: 140

  },

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
    price: 625

  },

];


const ProductDetail = () => {

  const [basket, setBasket] = useState("Sepete Ekle");
  const [count, setCount] = useState(1);
  const [isClicked, setIsClicked] = useState(faPlus);

  const { id } = useParams();
  const productId = parseInt(id);
  const product = productdata.find((item) => item.id === productId);


  const fav = useRef()
  const favColor = () => {
    fav.current.style.color = "#e14062";
  }




  const notLike = () => {
    fav.current.style.color = "#e2879a";
  }


  if (!product) {
    return <div>Ürün bulunamadı.</div>;
  }


  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  
  return (
    <div className="productdiv"  >
      <div className='d-flex' style={{ position: "relative" }}>
        <img id="productimg" src={product.image} />
        <div>
          <div className='mx-5 px-4' > <span style={{ textTransform: "capitalize", fontFamily: "'Varela Round', sans-serif", fontSize: "26px", }}>{product.brand}  {product.title} </span><span style={{    fontFamily: " 'Annie Use Your Telescope', cursive",fontSize:"22px"}} >  &nbsp; ({product.volume})</span>
            <FontAwesomeIcon icon={faHeart} size="2xl" onClick={favColor} ref={fav} onMouseOver={favColor} onMouseOut={notLike} style={{ color: "#e2879a", cursor: "pointer" }} id="fav" /></div>


          <div style={{ marginTop: "30px", marginLeft: "80px", fontSize: "25px", fontFamily: "Dosis, sans-serif" }} > {product.price} TL </div>

          <div style={{ marginTop: "30px", marginLeft: "80px", fontSize: "18px" }}>
            <span id="productnum"> <button onClick={() => (setCount(count - 1))}>-</button> {count} <button onClick={() => (setCount(count + 1))}>+</button></span>
            <button id='addtobasket'  onMouseOver={()=> setBasket(`Sepete Ekle ${product.price * count} TL`)} onMouseOut={()=> setBasket(`Sepete Ekle`)} >{basket} </button>
          </div>


          <div className="container"  > 
            <div className="accordion"     >
              <input type="checkbox" id="Acc1" style={{ zIndex: "-1" }} />
              <label htmlFor="Acc1">detaylar  <span style={{float:"right"}}><FontAwesomeIcon icon={faPlus} /></span> </label> 
              <div className="fas fa-chevron-down rotate"></div>
              <div className="content">
                {product.exp}
              </div>

            </div>
            <div className="accordion" >
              <input type="checkbox" id="Acc2" style={{ zIndex: "-1" }} />
              <label  htmlFor="Acc2">kullanımı   <span style={{float:"right"}} ><FontAwesomeIcon icon={faMinus}/></span></label>
              <div className="fas fa-chevron-down rotate"></div>
              <div className="content">
                {product.use}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )

}


export default ProductDetail