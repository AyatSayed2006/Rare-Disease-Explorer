/* =========================================================
   RARE DISEASE EXPLORER - MEDICAL ASSISTANT WIDGET
   File: chatbot.js  (Bilingual RTL/LTR auto-switching)
   Version: 5
========================================================= */
(function () {
  "use strict";

  if (window.__rdeChatLoaded) return;
  window.__rdeChatLoaded = true;

  var VERSION = "5";
  try { console.log("[rdeChat] v" + VERSION + " loaded"); } catch (e) {}

  var scriptEl = document.currentScript || document.querySelector('script[src*="chatbot.js"]');
  var SCRIPT_SRC = (scriptEl && scriptEl.src) || "";

  /* ---------- 1. قاعدة بيانات الأمراض ---------- */
  var DISEASES = {
    "rett": {
      "name": "Rett Syndrome",
      "ar": "متلازمة ريت",
      "tag": "Rare Neurogenetic Disorder",
      "tagAr": "اضطراب عصبي جيني نادر",
      "intro": "Rett syndrome is a rare genetic neurological disorder that primarily affects females.",
      "introAr": "متلازمة ريت هي اضطراب عصبي جيني نادر يؤثر بشكل أساسي على الإناث.",
      "keys": ["ريت", "rett", "اعصاب", "تراجع", "نمو", "بنات", "حركات يد", "تشنج", "تشنجات", "صداع", "neuro", "seizure", "hands", "female"]
    },
    "huntington": {
      "name": "Huntington's Disease",
      "ar": "مرض هنتنغتون",
      "tag": "Inherited Neurodegenerative Disorder",
      "tagAr": "اضطراب عصبي تنكسي وراثي",
      "intro": "Huntington's disease is an inherited progressive neurological disorder affecting movement and cognition.",
      "introAr": "مرض هنتنغتون هو اضطراب عصبي وراثي تدريجي يؤثر على الحركة والقدرات المعرفية والسلوك.",
      "keys": ["هنتنغتون", "huntington", "رقص", "chorea", "حركات لاارادية", "تدهور", "مزاج", "صداع", "عصبية", "movement", "involuntary"]
    },
    "wilson": {
      "name": "Wilson Disease",
      "ar": "مرض ويلسون",
      "tag": "Inherited Copper Metabolism Disorder",
      "tagAr": "اضطراب وراثي في استقلاب النحاس",
      "intro": "Wilson disease causes copper accumulation in the liver, brain and eyes.",
      "introAr": "مرض ويلسون هو اضطراب وراثي يتراكم فيه النحاس داخل الجسم وخاصة في الكبد والدماغ والعينين.",
      "keys": ["ويلسون", "wilson", "نحاس", "كبد", "عيون", "صفار", "رعشة", "صداع", "تعب", "ارهاق", "copper", "liver", "eyes", "jaundice"]
    },
    "gaucher": {
      "name": "Gaucher Disease",
      "ar": "مرض غوشيه",
      "tag": "Inherited Metabolic Disorder",
      "tagAr": "اضطراب أيضي وراثي",
      "intro": "Gaucher disease is an inherited metabolic disorder affecting spleen, liver and bone marrow.",
      "introAr": "مرض غوشيه هو اضطراب أيضي وراثي تتراكم فيه الدهون داخل الخلايا والكبد والطحال وعظام الجسم.",
      "keys": ["غوشيه", "gaucher", "طحال", "مفاصل", "الام مفاصل", "الم مفاصل", "عظام", "الام عظام", "الم عظام", "ارهاق", "تعب", "صداع", "كدمات", "spleen", "bone pain", "joint pain", "bruising"]
    },
    "cysticFibrosis": {
      "name": "Cystic Fibrosis",
      "ar": "التليف الكيسي",
      "tag": "Inherited Multisystem Disorder",
      "tagAr": "اضطراب وراثي متعدد الأجهزة",
      "intro": "Cystic fibrosis affects CFTR protein, producing thick mucus in lungs and digestive system.",
      "introAr": "التليف الكيسي هو اضطراب وراثي يؤدي لتكون مخاط سميك ولزج في الجهازين التنفسي والهضمي.",
      "keys": ["تليف", "كيسي", "كحة", "بلغم", "مخاط", "تنفس", "سعال", "ارهاق", "رئة", "cystic", "fibrosis", "cough", "mucus", "phlegm", "lungs", "breathing"]
    },
    "fop": {
      "name": "Fibrodysplasia Ossificans Progressiva",
      "ar": "خلل التعظم الليفي المترقي",
      "tag": "Ultra-Rare Genetic Disorder",
      "tagAr": "اضطراب جيني نادر للغاية",
      "intro": "FOP causes muscles and soft tissues to progressively turn into bone.",
      "introAr": "اضطراب جيني نادر تتكون فيه عظام جديدة تدريجياً داخل الأنسجة الرخوة والعضلات.",
      "keys": ["تعظم", "fop", "عضلات", "انسجة", "عظام", "تيبس", "الام مفاصل", "الم مفاصل", "muscle", "bone", "stiffness"]
    },
    "eds": {
      "name": "Ehlers-Danlos Syndromes",
      "ar": "متلازمات إهلرز-دانلوس",
      "tag": "Connective Tissue Disorders",
      "tagAr": "اضطرابات النسيج الضام",
      "intro": "A group of inherited connective tissue disorders characterized by hypermobility and stretchy skin.",
      "introAr": "مجموعة من اضطرابات النسيج الضام تتميز بفرط مرونة المفاصل وقابلية الجلد للتمدد.",
      "keys": ["اهلرز", "دانلوس", "مرونة", "مفاصل", "الام مفاصل", "الم مفاصل", "خلع", "جلد", "كدمات", "صداع", "eds", "hypermobility", "joints", "skin", "dislocation"]
    },
    "sickleCell": {
      "name": "Sickle Cell Disease",
      "ar": "مرض الخلايا المنجلية",
      "tag": "Inherited Blood Disorder",
      "tagAr": "اضطراب دم وراثي",
      "intro": "An inherited blood disorder causing red blood cells to become rigid and sickle-shaped.",
      "introAr": "اضطراب دم وراثي يسبب تحول خلايا الدم الحمراء إلى شكل منجلي صلب يعيق التروية.",
      "keys": ["منجلية", "انيميا", "دم", "الام مفاصل", "الم مفاصل", "الام عظام", "الم عظام", "تعب", "ارهاق", "صداع", "sickle", "anemia", "blood", "pain crisis"]
    },
    "pnh": {
      "name": "Paroxysmal Nocturnal Hemoglobinuria",
      "ar": "البيلة الهيموغلوبينية الليلية الانتيابية",
      "tag": "Rare Acquired Blood Disorder",
      "tagAr": "اضطراب دم مكتسب نادر",
      "intro": "A rare acquired disorder causing destruction of red blood cells and blood clots.",
      "introAr": "اضطراب دم مكتسب يسبب انحلال خلايا الدم الحمراء وزيادة خطر الجلطات.",
      "keys": ["بيلة", "هيموجلوبين", "pnh", "تكسر دم", "جلطات", "بول", "ارهاق", "صداع", "تعب", "hemoglobinuria", "clots", "anemia"]
    },
    "usher": {
      "name": "Usher Syndrome",
      "ar": "متلازمة أشر",
      "tag": "Inherited Hearing & Vision Disorder",
      "tagAr": "اضطراب وراثي للسمع والبصر",
      "intro": "Characterized by hearing loss and progressive vision loss caused by retinitis pigmentosa.",
      "introAr": "اضطراب وراثي يتسبب في فقدان السمع وفقدان البصر التدريجي بسبب تنكس الشبكية.",
      "keys": ["اشر", "usher", "سمع", "بصر", "شبكية", "صمم", "عشى", "hearing", "vision", "deafness", "blindness"]
    },
    "angelman": {
      "name": "Angelman Syndrome",
      "ar": "متلازمة أنجلمان",
      "tag": "Rare Neurogenetic Disorder",
      "tagAr": "اضطراب عصبي جيني نادر",
      "intro": "A neurogenetic disorder affecting speech, movement, balance and causing frequent laughter.",
      "introAr": "اضطراب عصبي جيني يؤثر في الكلام والتوازن والحركة ويرافقه نوبات ضحك متكررة.",
      "keys": ["انجلمان", "angelman", "ضحك", "توازن", "كلام", "تشنج", "تشنجات", "laughter", "balance", "speech"]
    },
    "eb": {
      "name": "Epidermolysis Bullosa",
      "ar": "انحلال البشرة الفقاعي",
      "tag": "Inherited Skin Fragility Disorder",
      "tagAr": "اضطراب وراثي يسبب هشاشة الجلد",
      "intro": "Causes extreme fragility of skin and mucosal membranes leading to painful blisters.",
      "introAr": "مجموعة اضطرابات وراثية تسبب هشاشة شديدة للجلد وظهور فقاعات عند أقل احتكاك.",
      "keys": ["فقاعي", "هشاشة", "فقاعات", "جلد", "جروح", "eb", "blisters", "skin fragility"]
    }
  };

  /* ---------- 2. خريطة ربط الأعراض ---------- */
  var SYMPTOM_MAP = {
    "صداع": ["wilson", "pnh", "huntington", "sickleCell", "eds"],
    "headache": ["wilson", "pnh", "huntington", "sickleCell", "eds"],
    "مفاصل": ["eds", "gaucher", "sickleCell", "fop"],
    "joint": ["eds", "gaucher", "sickleCell", "fop"],
    "joints": ["eds", "gaucher", "sickleCell", "fop"],
    "الم مفاصل": ["eds", "gaucher", "sickleCell", "fop"],
    "الام مفاصل": ["eds", "gaucher", "sickleCell", "fop"],
    "joint pain": ["eds", "gaucher", "sickleCell", "fop"],
    "عظام": ["gaucher", "fop", "sickleCell"],
    "bone": ["gaucher", "fop", "sickleCell"],
    "bones": ["gaucher", "fop", "sickleCell"],
    "الام عظام": ["gaucher", "fop", "sickleCell"],
    "bone pain": ["gaucher", "fop", "sickleCell"],
    "تعب": ["gaucher", "pnh", "sickleCell", "wilson"],
    "fatigue": ["gaucher", "pnh", "sickleCell", "wilson"],
    "ارهاق": ["gaucher", "pnh", "sickleCell", "wilson"],
    "tired": ["gaucher", "pnh", "sickleCell", "wilson"],
    "جلد": ["eb", "eds"],
    "skin": ["eb", "eds"],
    "تشنج": ["rett", "angelman"],
    "seizure": ["rett", "angelman"],
    "seizures": ["rett", "angelman"],
    "تشنجات": ["rett", "angelman"],
    "كحة": ["cysticFibrosis"],
    "cough": ["cysticFibrosis"],
    "بلغم": ["cysticFibrosis"],
    "mucus": ["cysticFibrosis"],
    "phlegm": ["cysticFibrosis"],
    "تنفس": ["cysticFibrosis", "pnh"],
    "breathing": ["cysticFibrosis", "pnh"]
  };

  /* ---------- 3. النصوص ---------- */
  var S = {
    en: {
      title: "Medical Assistant",
      sub: "Rare diseases & symptoms specialist",
      placeholder: "Describe symptoms or ask a medical question…",
      welcome: "Hi! Describe your symptoms (e.g. joint pain, headache, fatigue) and I will compare them with rare diseases on our platform.",
      chips: ["Chronic cough and thick mucus", "Bone and joint pain", "Headache and fatigue", "Find a specialist"],
      refuse: "Sorry, this request is out of my scope. I am a specialized medical assistant for rare diseases and symptoms only.",
      notFound: "Sorry, I don't have information about this condition or symptom on our platform right now. Could you describe your symptoms in more detail?",
      thanks: "You're welcome! Feel free to ask about any symptoms or rare diseases.",
      emergency: "These may be signs of a medical emergency. Please contact emergency services immediately.",
      emergencyMental: "If you are experiencing severe emotional distress, please contact emergency services or a helpline immediately.",
      location: "You can find specialists and medical centers on our Location page.",
      symptomIntro: "The symptoms you mentioned can be associated with the following rare diseases on our platform:",
      disclaimer: "This is general information only and not a medical diagnosis. Please consult a specialist doctor.",
      openLocation: "Open Location Page",
      openJourney: "Explore Disease Journey",
      toggleLabel: "Open Medical Assistant",
      closeLabel: "Close",
      sendLabel: "Send"
    },
    ar: {
      title: "المساعد الطبي الذكي",
      sub: "متخصص في الأعراض والأمراض النادرة",
      placeholder: "اكتب الأعراض مثل (صداع، آلام مفاصل، إرهاق)...",
      welcome: "أهلاً بك! اكتب لي الأعراض التي تشعر بها (مثل: آلام المفاصل، الصداع، التعب) وسأربطها بأقرب الأمراض النادرة المسجلة في منصتنا.",
      chips: ["كحة مزمنة وبلغم كثيف", "آلام في المفاصل والعظام", "صداع وإرهاق مستمر", "ابحث عن طبيب قريب"],
      refuse: "عذراً، هذا الطلب خارج نطاق اختصاصي. أنا مساعد طبي متخصص في الأعراض والأمراض النادرة فقط، ولا أستطيع المساعدة في موضوعات غير طبية.",
      notFound: "عذراً، ليس عندي معلومة بهذا المرض أو العرض حالياً في المنصة. هل يمكنك التوضيح أكثر أو كتابة الأعراض التي تعاني منها؟",
      thanks: "على الرحب والسعة! يسعدني إجابتك عن أي استفسار آخر يخص الأعراض أو الأمراض النادرة.",
      emergency: "قد تكون هذه علامات حالة طبية طارئة. يرجى الاتصال بالإسعاف أو توجه لأقرب مستشفى فوراً.",
      emergencyMental: "إذا كنت تشعر بضغط نفسي شديد، يرجى التواصل مع جهات الدعم أو الطوارئ فوراً.",
      location: "يمكنك البحث عن الأطباء والعيادات المتخصصة عبر صفحة الموقع بالمنصة.",
      symptomIntro: "الأعراض التي ذكرتها قد ترتبط بالأمراض النادرة التالية المسجلة بالمنصة:",
      disclaimer: "هذه معلومات تعريفية فقط وليست تشخيصاً طبياً. يرجى استشارة طبيب مختص.",
      openLocation: "افتح صفحة الموقع",
      openJourney: "افتح رحلة المرض",
      toggleLabel: "افتح المساعد الطبي",
      closeLabel: "إغلاق",
      sendLabel: "إرسال"
    }
  };

  var lang = "ar";

  function T(k) {
    return (S[lang] && S[lang][k]) || S.ar[k] || "";
  }

  function pick(en, ar) {
    return lang === "ar" ? (ar || en) : (en || ar);
  }

  /* =========================================================
     4. اكتشاف لغة الموقع (عربي = RTL ، English = LTR)
     الأولوية: لغة محددة يدوياً ← النص الظاهر ← الـ attributes
  ========================================================= */
  var forcedLang = null;

  var STORE_KEYS = [
    "rde-language", "rde-lang", "lang", "language", "site-lang",
    "siteLang", "selectedLanguage", "preferredLanguage", "i18nextLng", "locale"
  ];

  function toLang(v) {
    v = String(v == null ? "" : v).replace(/["']/g, "").toLowerCase().trim();
    if (!v) return null;
    if (/^en([-_]|$)|^english/.test(v)) return "en";
    if (/^ar([-_]|$)|^arabic|^عرب/.test(v)) return "ar";
    return null;
  }

  function dirToLang(v) {
    v = String(v || "").toLowerCase().trim();
    if (v === "ltr") return "en";
    if (v === "rtl") return "ar";
    return null;
  }

  /* لغة النص الظاهر فعلاً في الصفحة (بدون الشات وبدون العناصر المخفية) */
  function contentLang() {
    var nodes = document.querySelectorAll("h1,h2,h3,h4,nav a,header a,a,button,label,p,li,span");
    var ar = 0, en = 0, used = 0;

    for (var i = 0; i < nodes.length && used < 150; i++) {
      var el = nodes[i];
      if (root && root.contains(el)) continue;
      if (!el.getClientRects().length) continue;         // عنصر مخفي

      var t = "";
      for (var c = el.firstChild; c; c = c.nextSibling) {
        if (c.nodeType === 3) t += c.nodeValue;          // نصه المباشر فقط
      }
      if (!t.trim()) continue;

      used++;
      ar += (t.match(/[\u0600-\u06FF]/g) || []).length;
      en += (t.match(/[A-Za-z]/g) || []).length;
    }

    var total = ar + en;
    if (total < 15) return null;

    var ratio = ar / total;
    if (ratio > 0.6) return "ar";
    if (ratio < 0.4) return "en";
    return null;
  }

  function attrLang() {
    var html = document.documentElement;
    var body = document.body;
    var sig = [];

    function add(x) { if (x) sig.push(x); }

    add(toLang(html.getAttribute("lang")));
    add(toLang(html.getAttribute("data-lang")));
    add(dirToLang(html.getAttribute("dir")));

    if (body) {
      add(toLang(body.getAttribute("lang")));
      add(toLang(body.getAttribute("data-lang")));
      add(dirToLang(body.getAttribute("dir")));
    }

    try { add(toLang(new URLSearchParams(location.search).get("lang"))); } catch (e) {}

    var pm = location.pathname.match(/\/(en|ar)(\/|$)/i);
    if (pm) add(toLang(pm[1]));

    try {
      STORE_KEYS.forEach(function (k) { add(toLang(localStorage.getItem(k))); });
    } catch (e) {}

    return sig.length ? sig[0] : null;
  }

  /* مفتاح اللغة اللي الموقع نفسه بيحفظه (script.js / disease.js) */
  function storedLang() {
    try { return toLang(localStorage.getItem("rde-language")); } catch (e) { return null; }
  }

  /* lang / dir على <html> (الموقع بيغيّرهم عند تبديل اللغة) */
  function htmlLang() {
    var html = document.documentElement;
    return toLang(html.getAttribute("lang")) || dirToLang(html.getAttribute("dir"));
  }

  function getLang() {
    if (forcedLang) return forcedLang;
    return storedLang() || htmlLang() || contentLang() || attrLang() || "en";
  }

  /* ---------- 5. تطبيع النص والمطابقة بالكلمة الكاملة ---------- */
  function norm(s) {
    return String(s || "").toLowerCase()
      .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
      .replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه")
      .replace(/ؤ/g, "و").replace(/ئ/g, "ي")
      .replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();
  }

  var AR_PRE = ["", "ال", "وال", "بال", "لل", "فال", "و", "ب", "ل", "ف"];

  function has(text, phrase) {
    var p = norm(phrase);
    if (!p) return false;
    var padded = " " + text + " ";
    if (/^[a-z0-9]/.test(p)) {
      return padded.indexOf(" " + p + " ") !== -1 || padded.indexOf(" " + p + "s ") !== -1;
    }
    for (var i = 0; i < AR_PRE.length; i++) {
      if (padded.indexOf(" " + AR_PRE[i] + p + " ") !== -1) return true;
    }
    return false;
  }

  /* ---------- 6. محرك الإجابات ---------- */
  var EMERGENCY_RE = /chest pain|can t breathe|cannot breathe|can not breathe|unconscious|severe bleeding|stroke|الم في الصدر|الم الصدر|لا استطيع التنفس|فقدان الوعي|نزيف شديد/;
  var EMERGENCY_MENTAL_RE = /suicid|kill myself|want to die|end my life|انتحار|اقتل نفسي|اريد ان اموت|اتمني الموت/;
  var GREETING_RE = /^(hi|hello|hey|مرحبا|اهلا|سلام|السلام عليكم|صباح الخير|مساء الخير)(\s|$)/;
  var THANKS_RE = /^(thanks|thank you|thx|شكرا|تسلم|يعطيك العافيه)(\s|$)/;
  var LOC_WHO_RE = /(doctor|hospital|clinic|specialist|physician|طبيب|دكتور|مستشفي|عياده|اخصائي|متخصص)/;
  var LOC_WHERE_RE = /(near|nearby|find|where|locat|قريب|موقع|اين|ابحث|عنوان)/;

  var NON_MEDICAL = [
    "برمجه", "كود", "جافاسكريبت", "javascript", "python", "html", "css", "php", "java",
    "سيرفر", "موقع", "تطبيق", "قاعده بيانات", "حاسوب", "كمبيوتر",
    "سياسه", "انتخابات", "رئيس", "حكومه", "حرب", "دوله", "دين", "فتوي", "حلال", "حرام", "صلاه",
    "مباراه", "كره", "دوري", "ميسي", "رونالدو", "اهلي", "زمالك",
    "نكته", "اغنيه", "فيلم", "سينما", "طبخ", "وصفات", "مطعم", "كيك",
    "فلوس", "بيتكوين", "تداول", "اسهم", "بورصه",
    "coding", "programming", "software", "political", "football", "recipe", "movie", "song", "bitcoin"
  ];

  var GENERIC_SYMPTOMS = [
    "الم", "الام", "صداع", "مفاصل", "مفصل", "عظام", "تعب", "ارهاق", "جلد", "عضلات",
    "تشنج", "كحه", "تنفس", "دم", "عين", "سمع", "عصب",
    "pain", "painful", "headache", "joint", "bone", "fatigue", "skin", "seizure", "cough", "breath", "breathing"
  ];

  function respond(raw) {
    var n = norm(raw);
    if (!n) return { k: "notFound" };

    var words = n.split(" ").length;

    if (EMERGENCY_MENTAL_RE.test(n)) return { k: "emergencyMental" };
    if (EMERGENCY_RE.test(n)) return { k: "emergency" };
    if (words <= 3 && GREETING_RE.test(n)) return { k: "welcome" };
    if (words <= 4 && THANKS_RE.test(n)) return { k: "thanks" };
    if (LOC_WHO_RE.test(n) && LOC_WHERE_RE.test(n)) return { k: "location" };

    var matchedFromMap = [];
    Object.keys(SYMPTOM_MAP).forEach(function (symptom) {
      if (has(n, symptom)) matchedFromMap = matchedFromMap.concat(SYMPTOM_MAP[symptom]);
    });

    var scores = {};
    Object.keys(DISEASES).forEach(function (id) {
      var d = DISEASES[id];
      var score = 0;

      if (has(n, d.name) || has(n, d.ar)) score += 10;

      (d.keys || []).forEach(function (key) {
        if (has(n, key)) score += 3;
      });

      if (matchedFromMap.indexOf(id) !== -1) score += 5;
      if (score > 0) scores[id] = score;
    });

    var sortedIds = Object.keys(scores).sort(function (a, b) {
      return scores[b] - scores[a];
    });

    if (sortedIds.length > 0) {
      return { k: "disease", d: { ids: sortedIds.slice(0, 3) } };
    }

    if (NON_MEDICAL.some(function (w) { return has(n, w); })) return { k: "refuse" };

    if (GENERIC_SYMPTOMS.some(function (w) { return has(n, w); })) {
      return { k: "disease", d: { ids: ["eds", "gaucher", "sickleCell", "wilson"] } };
    }

    return { k: "notFound" };
  }

  /* ---------- 7. أدوات بناء العناصر ---------- */
  function h(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function link(label, href, cls) {
    var a = h("a", cls || "rde-chat__btn", label);
    a.href = href;
    return a;
  }

  function svg(inner) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
      inner + "</svg>";
  }

  var ICONS = {
    chat: svg('<circle cx="12" cy="6" r="3.1"/><path d="M4.5 22v-2.4a6.2 6.2 0 0 1 6.2-6.2h2.6a6.2 6.2 0 0 1 6.2 6.2V22"/><path d="M10.4 13.4L12 16l1.6-2.6" stroke-width="1.7"/><path d="M8.6 13.9v2.3a3.4 3.4 0 0 0 6.8 0v-2.3" stroke-width="1.7"/><circle cx="12" cy="20.3" r="1" fill="currentColor"/>'),
    pulse: svg('<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>'),
    close: svg('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'),
    send: svg('<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>')
  };

  /* ---------- 8. الحالة والعناصر ---------- */
  var state = { open: false, msgs: [{ r: "b", k: "welcome" }] };
  var root, toggle, panel, titleEl, subEl, closeBtn, list, form, input, sendBtn;
  var applied = false;

  function build() {
    if (document.querySelector(".rde-chat")) {
      root = document.querySelector(".rde-chat");
      return;
    }

    root = h("div", "rde-chat");
    root.setAttribute("dir", "rtl");
    root.setAttribute("data-rde-version", VERSION);

    toggle = h("button", "rde-chat__toggle");
    toggle.type = "button";
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = ICONS.chat;

    panel = h("section", "rde-chat__panel");
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-hidden", "true");

    var head = h("header", "rde-chat__head");
    var mark = h("span", "rde-chat__mark");
    mark.innerHTML = ICONS.pulse;

    var info = h("div", "rde-chat__head-info");
    titleEl = h("h2", "rde-chat__title");
    subEl = h("p", "rde-chat__sub");
    info.appendChild(titleEl);
    info.appendChild(subEl);

    closeBtn = h("button", "rde-chat__close");
    closeBtn.type = "button";
    closeBtn.innerHTML = ICONS.close;

    head.appendChild(mark);
    head.appendChild(info);
    head.appendChild(closeBtn);

    list = h("div", "rde-chat__list");
    form = h("form", "rde-chat__form");

    input = h("input", "rde-chat__input");
    input.type = "text";
    input.setAttribute("autocomplete", "off");

    sendBtn = h("button", "rde-chat__send");
    sendBtn.type = "submit";
    sendBtn.innerHTML = ICONS.send;

    form.appendChild(input);
    form.appendChild(sendBtn);

    panel.appendChild(head);
    panel.appendChild(list);
    panel.appendChild(form);

    root.appendChild(panel);
    root.appendChild(toggle);
    document.body.appendChild(root);

    toggle.addEventListener("click", function () { setOpen(!state.open); });
    closeBtn.addEventListener("click", function () { setOpen(false); });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var t = input.value.trim();
      if (t) {
        input.value = "";
        sendMsg(t);
      }
    });
  }

  function renderBotMsg(m) {
    var box = h("div", "rde-chat__msg rde-chat__msg--bot");
    var d = m.d || {};

    if (m.k === "welcome") {
      box.appendChild(h("p", null, T("welcome")));
      var chips = h("div", "rde-chat__chips");
      (T("chips") || []).forEach(function (c) {
        var b = h("button", "rde-chat__chip", c);
        b.type = "button";
        b.addEventListener("click", function () { sendMsg(c); });
        chips.appendChild(b);
      });
      box.appendChild(chips);

    } else if (m.k === "disease") {
      box.appendChild(h("p", null, T("symptomIntro")));
      (d.ids || []).forEach(function (id) {
        var dz = DISEASES[id];
        if (!dz) return;
        var card = h("div", "rde-chat__card");
        card.appendChild(h("strong", "rde-chat__card-title", pick(dz.name, dz.ar)));
        card.appendChild(h("span", "rde-chat__tag", pick(dz.tag, dz.tagAr)));
        card.appendChild(h("p", null, pick(dz.intro, dz.introAr)));
        card.appendChild(link(T("openJourney"), "disease.html?disease=" + id));
        box.appendChild(card);
      });
      box.appendChild(h("p", "rde-chat__note", T("disclaimer")));

    } else if (m.k === "location") {
      box.appendChild(h("p", null, T("location")));
      box.appendChild(link(T("openLocation"), "location.html"));

    } else {
      box.appendChild(h("p", null, T(m.k) || T("notFound")));
    }

    return box;
  }

  function renderAllMsgs() {
    if (!list) return;
    list.innerHTML = "";
    state.msgs.forEach(function (m) {
      if (m.r === "u") {
        list.appendChild(h("div", "rde-chat__msg rde-chat__msg--user", m.t));
      } else {
        list.appendChild(renderBotMsg(m));
      }
    });
    list.scrollTop = list.scrollHeight;
  }

  function setOpen(open) {
    state.open = !!open;

    if (root) root.classList.toggle("is-open", state.open);
    if (toggle) toggle.setAttribute("aria-expanded", state.open ? "true" : "false");

    if (panel) {
      panel.setAttribute("aria-hidden", state.open ? "false" : "true");
      try { panel.inert = !state.open; } catch (e) {}
    }

    if (state.open) {
      setTimeout(function () { if (input && state.open) input.focus(); }, 120);
      if (list) list.scrollTop = list.scrollHeight;
    }
  }

  function sendMsg(text) {
    state.msgs.push({ r: "u", t: text });
    renderAllMsgs();

    var res = respond(text) || { k: "notFound" };
    setTimeout(function () {
      state.msgs.push({ r: "b", k: res.k, d: res.d });
      renderAllMsgs();
    }, 280);
  }

  /* =========================================================
     9. تحديد موقع الأيقونة والبانل (inline !important)
        عربي = يسار ، English = يمين
        لا يعتمد على أي CSS خارجي
  ========================================================= */
  function positionChat(dir) {
    if (!root) return;

    var w = window.innerWidth || 1024;
    var gap = w <= 360 ? 12 : (w <= 480 ? 16 : 24);

    var side = dir === "rtl" ? "left" : "right";
    var other = side === "left" ? "right" : "left";

    root.style.setProperty("position", "fixed", "important");
    root.style.setProperty(side, gap + "px", "important");
    root.style.setProperty(other, "auto", "important");

    if (panel) {
      panel.style.setProperty(side, "0", "important");
      panel.style.setProperty(other, "auto", "important");
      panel.style.setProperty("transform-origin", "bottom " + side, "important");
    }
  }

  /* =========================================================
     10. تطبيق اللغة والاتجاه
  ========================================================= */
  function applyLang(force) {
    var next = getLang();
    if (!force && applied && next === lang) return;

    var prev = lang;
    lang = next;
    applied = true;

    var dir = lang === "ar" ? "rtl" : "ltr";
    var align = lang === "ar" ? "right" : "left";

    if (root) {
      root.setAttribute("dir", dir);
      root.setAttribute("lang", lang);
      root.style.direction = dir;
      root.style.textAlign = align;
    }

    [panel, list, form].forEach(function (el) {
      if (el) el.setAttribute("dir", dir);
    });

    positionChat(dir);

    if (titleEl) titleEl.textContent = T("title");
    if (subEl) subEl.textContent = T("sub");

    if (panel) panel.setAttribute("aria-label", T("title"));
    if (toggle) toggle.setAttribute("aria-label", T("toggleLabel"));
    if (closeBtn) closeBtn.setAttribute("aria-label", T("closeLabel"));
    if (sendBtn) sendBtn.setAttribute("aria-label", T("sendLabel"));

    if (input) {
      input.placeholder = T("placeholder");
      input.setAttribute("dir", dir);
      input.setAttribute("aria-label", T("placeholder"));
    }

    renderAllMsgs();

    try { console.log("[rdeChat v" + VERSION + "] language: " + prev + " -> " + lang + " (" + dir + ")"); } catch (e) {}
  }

  function checkLang() { applyLang(false); }

  /* ---------- 11. الـ CSS: ستايل حرج + تحميل الملف ---------- */
  function injectCritical() {
    if (document.getElementById("rde-chat-critical")) return;
    var st = document.createElement("style");
    st.id = "rde-chat-critical";
    st.textContent =
      ".rde-chat{position:fixed;bottom:24px;z-index:99999;pointer-events:none}" +
      '.rde-chat[dir="rtl"]{left:24px;right:auto}' +
      '.rde-chat[dir="ltr"]{right:24px;left:auto}' +
      ".rde-chat:not(.is-ready){visibility:hidden}" +
      ".rde-chat__panel{visibility:hidden;opacity:0;pointer-events:none}" +
      ".rde-chat.is-open .rde-chat__panel{visibility:visible;opacity:1;pointer-events:auto}";
    document.head.appendChild(st);
  }

  function ensureCss(done) {
    var finished = false;
    function fin() {
      if (finished) return;
      finished = true;
      done();
    }

    var cssLink = document.querySelector('link[href*="chatbot.css"]');

    if (!cssLink) {
      cssLink = document.createElement("link");
      cssLink.rel = "stylesheet";
      cssLink.href = SCRIPT_SRC
        ? SCRIPT_SRC.replace(/chatbot\.js(\?.*)?$/, "chatbot.css?v=" + VERSION)
        : "chatbot.css?v=" + VERSION;
      document.head.appendChild(cssLink);
    }

    if (cssLink.sheet) return fin();

    cssLink.addEventListener("load", fin);
    cssLink.addEventListener("error", fin);
    setTimeout(fin, 2000);
  }

  /* ---------- 12. التشغيل ---------- */
  function boot() {
    injectCritical();
    build();
    applyLang(true);
    setOpen(false);                       // دايماً مقفول عند فتح أي صفحة

    ensureCss(function () {
      if (root) root.classList.add("is-ready");
      if (root) positionChat(root.getAttribute("dir") || "rtl");
    });

    /* مراقبة تغيير lang / dir على html و body */
    var attrs = ["lang", "dir", "data-lang"];

    new MutationObserver(checkLang).observe(document.documentElement, {
      attributes: true,
      attributeFilter: attrs
    });

    if (document.body) {
      new MutationObserver(checkLang).observe(document.body, {
        attributes: true,
        attributeFilter: attrs
      });
    }

    /* حدث اللغة: يقبل detail = "en" أو { lang: "en" } */
    window.addEventListener("languageChange", function (e) {
      var d = e && e.detail;
      var l = toLang(d && typeof d === "object" ? d.lang : d);
      if (l) forcedLang = l;
      applyLang(true);
    });

    window.addEventListener("storage", checkLang);

    /* بعد أي ضغطة (زر تغيير اللغة مثلاً) نعيد الفحص */
    document.addEventListener("click", function (e) {
      if (root && root.contains(e.target)) return;
      setTimeout(checkLang, 80);
      setTimeout(checkLang, 500);
    }, true);

    /* فحص دوري: يلتقط تغيير النص أو localStorage داخل نفس التاب */
    setInterval(function () {
      if (root && document.body && !document.body.contains(root)) {
        document.body.appendChild(root);
      }
      if (!document.hidden) checkLang();
    }, 500);

    /* تغيير حجم الشاشة */
    window.addEventListener("resize", function () {
      if (root) positionChat(root.getAttribute("dir") || "rtl");
    });

    /* الرجوع بزر Back: الشات يفضل مقفول */
    window.addEventListener("pageshow", function (e) {
      if (e.persisted) {
        setOpen(false);
        applyLang(true);
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && state.open) setOpen(false);
    });
  }

  /* API:
     rdeChat.setLang("en") / rdeChat.setLang("ar") / rdeChat.setLang(null) للتلقائي
     rdeChat.debug() لعرض حالة الاكتشاف والموقع في الـ Console */
  window.rdeChat = {
    version: VERSION,
    setLang: function (l) { forcedLang = toLang(l); applyLang(true); },
    open: function () { setOpen(true); },
    close: function () { setOpen(false); },
    debug: function () {
      var cs = root ? getComputedStyle(root) : null;
      var out = {
        version: VERSION,
        detected: getLang(),
        forced: forcedLang,
        fromStorage: storedLang(),
        fromHtml: htmlLang(),
        fromPageText: contentLang(),
        fromAttributes: attrLang(),
        htmlLang: document.documentElement.getAttribute("lang"),
        htmlDir: document.documentElement.getAttribute("dir"),
        chatDir: root && root.getAttribute("dir"),
        chatLeft: cs && cs.left,
        chatRight: cs && cs.right,
        storage: {}
      };
      try {
        STORE_KEYS.forEach(function (k) {
          var v = localStorage.getItem(k);
          if (v != null) out.storage[k] = v;
        });
      } catch (e) {}
      console.log(out);
      return out;
    }
  };

  if (document.body) boot();
  else document.addEventListener("DOMContentLoaded", boot);
})();