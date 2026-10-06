/* =========================================================
   RARE DISEASE EXPLORER - DISEASE JOURNEY JAVASCRIPT (FIXED)
========================================================= */

/* ===================== LANGUAGE ===================== */

let currentLanguage = localStorage.getItem("rde-language") || "en";
const languageButton = document.getElementById("languageBtn");

function saveLanguage() { localStorage.setItem("rde-language", currentLanguage); }
function isArabic() { return currentLanguage === "ar"; }
function t(en, ar) { return isArabic() ? ar : en; }

/* ===================== UI TRANSLATIONS ===================== */

const ui = {
  en: {
    brandName: "Rare Disease Explorer",
    home: "Home",
    comparison: "Diseases Comparison",
    journey: "Disease Journey",
    location: "Location",
    exploreJourney: "Explore the Disease Journey",
    exploreAnother: "Explore Another Disease",
    diseaseExplorer: "Disease Explorer",
    exploreAnotherTitle: "Explore Another Disease",
    exploreAnotherText: "Choose another disease to explore its complete medical journey.",
    selectDisease: "Select a disease",
    overview: "Overview",
    understandingDisease: "Understanding the Disease",
    essentialFacts: "The essential facts you need to understand this condition.",
    diseaseJourney: "Disease Journey",
    howDiseaseUnfolds: "How the Disease Unfolds",
    followDisease: "Follow the disease from its biological beginning through its clinical journey.",
    currentStage: "Stage",
    nextStage: "Next Stage",
    journeyComplete: "Journey Complete",
    details: "Disease Details",
    understandingCondition: "Understanding the Condition",
    biologicalClinical: "Explore the biological, clinical and genetic aspects of the disease.",
    diagnosis: "Diagnosis",
    howDiagnosed: "How Is It Diagnosed?",
    diagnosticInfo: "Diagnostic information and the types of evaluation used to identify the condition.",
    living: "Living With",
    lifeWithDisease: "Life With the Disease",
    dailyLife: "How the condition can affect everyday life and different areas of functioning.",
    sources: "Reliable Sources",
    trustedSources: "Learn From Trusted Medical Sources",
    externalReferences: "External references used to support the information presented on this page.",
    footer: "An educational platform designed to make rare disease information easier to explore and understand.",
    educational: "Educational purposes only.",
    sourceVisit: "Visit Source"
  },
  ar: {
    brandName: "مستكشف الأمراض النادرة",
    home: "الرئيسية",
    comparison: "مقارنة الأمراض",
    journey: "رحلة المرض",
    location: "الموقع",
    exploreJourney: "استكشف رحلة المرض",
    exploreAnother: "استكشف مرضًا آخر",
    diseaseExplorer: "استكشاف الأمراض",
    exploreAnotherTitle: "استكشف مرضًا آخر",
    exploreAnotherText: "اختر مرضًا آخر لاستكشاف رحلته الطبية بالكامل.",
    selectDisease: "اختر مرضًا",
    overview: "نظرة عامة",
    understandingDisease: "فهم المرض",
    essentialFacts: "أهم المعلومات الأساسية لفهم هذه الحالة.",
    diseaseJourney: "رحلة المرض",
    howDiseaseUnfolds: "كيف تتطور الحالة",
    followDisease: "تتبّع المرض منذ بدايته البيولوجية وحتى رحلته السريرية.",
    currentStage: "المرحلة",
    nextStage: "المرحلة التالية",
    journeyComplete: "اكتملت الرحلة",
    details: "تفاصيل المرض",
    understandingCondition: "فهم الحالة",
    biologicalClinical: "استكشف الجوانب البيولوجية والسريرية والجينية للمرض.",
    diagnosis: "التشخيص",
    howDiagnosed: "كيف يتم التشخيص؟",
    diagnosticInfo: "معلومات عن التشخيص وأنواع التقييم المستخدمة للتعرف على الحالة.",
    living: "الحياة مع المرض",
    lifeWithDisease: "الحياة مع الحالة",
    dailyLife: "كيف يمكن أن تؤثر الحالة على الحياة اليومية ومختلف جوانب الأداء.",
    sources: "مصادر موثوقة",
    trustedSources: "تعرّف من خلال المصادر الطبية الموثوقة",
    externalReferences: "مراجع خارجية تدعم المعلومات الموجودة في هذه الصفحة.",
    footer: "منصة تعليمية تهدف إلى جعل استكشاف وفهم معلومات الأمراض النادرة أسهل.",
    educational: "لأغراض تعليمية فقط.",
    sourceVisit: "زيارة المصدر"
  }
};

/* ===================== DISEASE DATA ===================== */

const diseases = {

/* ---------- RETT ---------- */
rett: {
  name: "Rett Syndrome", arabicName: "متلازمة ريت",
  tag: "Rare Neurogenetic Disorder", tagAr: "اضطراب عصبي جيني نادر",
  heroIcon: "fa-dna",
  intro: "Rett syndrome is a rare genetic neurological disorder that primarily affects females. Early development may appear relatively typical before developmental regression and changes in communication, purposeful hand use and movement.",
  introAr: "متلازمة ريت هي اضطراب عصبي جيني نادر يؤثر بشكل أساسي على الإناث. قد يبدو التطور المبكر طبيعيًا نسبيًا قبل ظهور تراجع في المهارات وتغيرات في التواصل واستخدام اليدين والحركة.",
  overview: [
    { icon: "fa-dna", title: "Genetic Cause", ar: "السبب الجيني", text: "Most cases are associated with changes in the MECP2 gene on the X chromosome.", textAr: "ترتبط معظم الحالات بتغيرات في جين MECP2 الموجود على الكروموسوم X." },
    { icon: "fa-person", title: "Who It Affects", ar: "من يتأثر به", text: "Rett syndrome occurs predominantly in females and usually begins after an early period of apparently typical development.", textAr: "تظهر المتلازمة بشكل أساسي لدى الإناث، وعادة تبدأ بعد فترة مبكرة من التطور الذي قد يبدو طبيعيًا." },
    { icon: "fa-brain", title: "Main Systems", ar: "أهم الأجهزة المتأثرة", text: "The condition affects neurological development, movement, communication and several body systems.", textAr: "تؤثر الحالة على التطور العصبي والحركة والتواصل وعدة أجهزة في الجسم." }
  ],
  journey: [
    { title: "Early Development", ar: "التطور المبكر", description: "During the first period of life, development may appear relatively typical, although subtle differences can sometimes be present.", descriptionAr: "خلال المرحلة الأولى من الحياة قد يبدو التطور طبيعيًا نسبيًا، رغم إمكانية وجود اختلافات بسيطة." },
    { title: "Developmental Changes", ar: "التغيرات النمائية", description: "A period of developmental slowing or regression may begin, with changes in communication, movement and purposeful hand use.", descriptionAr: "قد تبدأ فترة من تباطؤ أو تراجع التطور، مع تغيرات في التواصل والحركة واستخدام اليدين بشكل هادف." },
    { title: "Loss of Acquired Skills", ar: "فقدان المهارات المكتسبة", description: "Previously acquired abilities such as purposeful hand use, language or motor skills may become reduced.", descriptionAr: "قد تقل بعض المهارات المكتسبة سابقًا مثل استخدام اليدين بشكل هادف أو اللغة أو بعض المهارات الحركية." },
    { title: "Neurological Features", ar: "السمات العصبية", description: "Repetitive hand movements, coordination difficulties, gait changes, seizures and other neurological features may become more apparent.", descriptionAr: "قد تصبح حركات اليد المتكررة وصعوبات التناسق وتغيرات المشي والتشنجات وغيرها من السمات العصبية أكثر وضوحًا." },
    { title: "Long-Term Course", ar: "المسار طويل المدى", description: "The condition follows a long-term course with varying effects on movement, communication, breathing, feeding, sleep and musculoskeletal function.", descriptionAr: "تتبع الحالة مسارًا طويل المدى تختلف خلاله التأثيرات على الحركة والتواصل والتنفس والتغذية والنوم والجهاز العضلي الهيكلي." }
  ],
  details: [
    { title: "Causes & Genetics", ar: "الأسباب والجينات", text: "Rett syndrome is most commonly associated with pathogenic variants in MECP2. Most cases occur as new genetic changes rather than being inherited from a parent. X-chromosome inactivation contributes to differences between individuals.", textAr: "ترتبط متلازمة ريت غالبًا بتغيرات مرضية في جين MECP2. تحدث معظم الحالات نتيجة تغيرات جينية جديدة وليست موروثة من أحد الوالدين. ويساهم تعطيل أحد كروموسومي X في اختلاف شدة الأعراض." },
    { title: "First Signs", ar: "العلامات الأولى", text: "Early signs may include developmental slowing, reduced purposeful hand use, changes in communication, loss of previously acquired abilities and repetitive hand movements.", textAr: "قد تشمل العلامات الأولى تباطؤ التطور، انخفاض استخدام اليدين بشكل هادف، تغيرات التواصل، فقدان بعض المهارات المكتسبة وظهور حركات متكررة باليدين." },
    { title: "Symptoms & Clinical Features", ar: "الأعراض والسمات السريرية", text: "Features can include movement difficulties, repetitive hand movements, communication impairment, breathing abnormalities, sleep problems, seizures, scoliosis and feeding or gastrointestinal difficulties.", textAr: "قد تشمل السمات صعوبات الحركة وحركات اليد المتكررة وضعف التواصل واضطرابات التنفس ومشكلات النوم والتشنجات والجنف وصعوبات التغذية أو الجهاز الهضمي." },
    { title: "What Happens Inside the Body?", ar: "ماذا يحدث داخل الجسم؟", text: "MECP2 is involved in regulating gene activity in the nervous system. Changes affecting its function can disrupt normal neurological development and brain function.", textAr: "يساهم جين MECP2 في تنظيم نشاط الجينات داخل الجهاز العصبي. ويمكن أن تؤثر التغيرات التي تعطل وظيفته في التطور العصبي الطبيعي ووظائف الدماغ." },
    { title: "Complications & Associated Features", ar: "المضاعفات والسمات المصاحبة", text: "Associated features may involve breathing patterns, feeding and swallowing, gastrointestinal function, bone health, scoliosis, sleep and seizure activity.", textAr: "قد تشمل السمات المصاحبة أنماط التنفس والتغذية والبلع ووظائف الجهاز الهضمي وصحة العظام والجنف والنوم والتشنجات." },
    { title: "Similar Conditions", ar: "الحالات المشابهة", text: "Conditions that may overlap clinically include MECP2-related disorders, CDKL5 deficiency disorder, FOXG1 syndrome, Angelman syndrome and Pitt-Hopkins syndrome.", textAr: "قد تتشابه بعض الحالات سريريًا مثل اضطرابات MECP2 واضطراب نقص CDKL5 ومتلازمة FOXG1 ومتلازمة أنجلمان ومتلازمة بيت-هوبكنز." }
  ],
  diagnosis: [
    { title: "Clinical Evaluation", ar: "التقييم السريري", text: "Diagnosis begins with developmental history, neurological examination and recognition of the characteristic pattern of regression and neurological features.", textAr: "يبدأ التشخيص بالتاريخ النمائي والفحص العصبي والتعرف على النمط المميز للتراجع والسمات العصبية." },
    { title: "Genetic Testing", ar: "الاختبارات الجينية", text: "Testing for MECP2 variants can support the diagnosis. Genetic testing is interpreted together with the clinical picture.", textAr: "يمكن لاختبار جين MECP2 أن يدعم التشخيص، ويتم تفسير الاختبار مع الصورة السريرية." },
    { title: "Clinical Context", ar: "السياق السريري", text: "There is no single test that explains every case. Diagnosis combines clinical findings with appropriate genetic evaluation.", textAr: "لا يوجد اختبار واحد يفسر جميع الحالات، لذلك يجمع التشخيص بين النتائج السريرية والتقييم الجيني المناسب." }
  ],
  living: [
    { icon: "fa-comments", title: "Communication", ar: "التواصل", text: "Changes in spoken language and purposeful hand use can make communication more difficult and may affect everyday interaction.", textAr: "قد تجعل التغيرات في اللغة المنطوقة واستخدام اليدين التواصل اليومي أكثر صعوبة." },
    { icon: "fa-person-walking", title: "Movement", ar: "الحركة", text: "Movement, coordination and gait can change over the course of the condition and may influence independence.", textAr: "قد تتغير الحركة والتناسق والمشي خلال مسار الحالة، مما قد يؤثر في الاستقلالية." },
    { icon: "fa-school", title: "Education & Daily Life", ar: "التعليم والحياة اليومية", text: "Communication, mobility and neurological features can influence education, social interaction and daily activities.", textAr: "يمكن أن تؤثر صعوبات التواصل والحركة والسمات العصبية في التعليم والتفاعل الاجتماعي والأنشطة اليومية." }
  ],
  sources: [
    ["NIH / NINDS", "https://www.ninds.nih.gov/health-information/disorders/rett-syndrome"],
    ["MedlinePlus Genetics", "https://medlineplus.gov/genetics/condition/rett-syndrome/"],
    ["NORD", "https://rarediseases.org/rare-diseases/rett-syndrome/"],
    ["GeneReviews", "https://www.ncbi.nlm.nih.gov/books/"],
    ["Orphanet", "https://www.orpha.net/"]
  ]
},

/* ---------- HUNTINGTON ---------- */
huntington: {
  name: "Huntington's Disease", arabicName: "مرض هنتنغتون",
  tag: "Inherited Neurodegenerative Disorder", tagAr: "اضطراب عصبي تنكسي وراثي",
  heroIcon: "fa-brain",
  intro: "Huntington's disease is an inherited progressive neurological disorder that affects movement, cognition and behavior.",
  introAr: "مرض هنتنغتون هو اضطراب عصبي وراثي تدريجي يؤثر على الحركة والقدرات المعرفية والسلوك.",
  overview: [
    { icon: "fa-dna", title: "HTT Gene", ar: "جين HTT", text: "The condition is caused by a CAG repeat expansion in the HTT gene on chromosome 4.", textAr: "ينتج المرض عن توسع تكرارات CAG في جين HTT على الكروموسوم الرابع." },
    { icon: "fa-share-nodes", title: "Inheritance", ar: "الوراثة", text: "Huntington's disease follows an autosomal dominant inheritance pattern.", textAr: "ينتقل مرض هنتنغتون بنمط وراثي جسدي سائد." },
    { icon: "fa-brain", title: "Main Effects", ar: "التأثيرات الأساسية", text: "Movement, cognition, behavior and emotional functioning can all be affected.", textAr: "يمكن أن تتأثر الحركة والإدراك والسلوك والجوانب الانفعالية." }
  ],
  journey: [
    { title: "Before Symptoms", ar: "قبل ظهور الأعراض", description: "A person may carry the genetic change for years before noticeable symptoms begin.", descriptionAr: "قد يحمل الشخص التغير الجيني لسنوات قبل ظهور أعراض واضحة." },
    { title: "Early Changes", ar: "التغيرات المبكرة", description: "Subtle movement, cognitive, behavioral or emotional changes may begin.", descriptionAr: "قد تبدأ تغيرات بسيطة في الحركة أو الإدراك أو السلوك أو الحالة الانفعالية." },
    { title: "Established Symptoms", ar: "الأعراض الواضحة", description: "Chorea, coordination difficulties, cognitive changes and behavioral features can become more evident.", descriptionAr: "قد تصبح الحركات اللاإرادية وصعوبات التناسق والتغيرات المعرفية والسلوكية أكثر وضوحًا." },
    { title: "Progressive Functional Changes", ar: "التغيرات الوظيفية التدريجية", description: "Movement, communication, swallowing and independence may become increasingly affected.", descriptionAr: "قد تتأثر الحركة والتواصل والبلع والاستقلالية بشكل متزايد." },
    { title: "Advanced Disease", ar: "المراحل المتقدمة", description: "The condition can lead to substantial changes in mobility, communication, cognition and daily functioning.", descriptionAr: "يمكن أن تؤدي الحالة إلى تغيرات كبيرة في الحركة والتواصل والإدراك والقدرة على أداء الأنشطة اليومية." }
  ],
  details: [
    { title: "Causes & Genetics", ar: "الأسباب والجينات", text: "Huntington's disease results from a CAG repeat expansion in HTT. The expanded repeat produces an altered huntingtin protein that contributes to progressive neuronal dysfunction.", textAr: "ينتج مرض هنتنغتون عن توسع تكرارات CAG في جين HTT، مما يؤدي إلى إنتاج بروتين هنتنغتين غير طبيعي يساهم في خلل الخلايا العصبية التدريجي." },
    { title: "How Is It Inherited?", ar: "كيف ينتقل وراثيًا؟", text: "The disorder is autosomal dominant. Each child of an affected parent has a 50% chance of inheriting the altered gene.", textAr: "المرض ذو نمط وراثي جسدي سائد. ولكل طفل لأحد الوالدين المصابين احتمال 50% لوراثة الجين المتغير." },
    { title: "Symptoms", ar: "الأعراض", text: "Symptoms may include chorea, coordination problems, changes in gait and speech, difficulties with planning and concentration, and behavioral changes.", textAr: "قد تشمل الأعراض الحركات اللاإرادية وصعوبات التناسق وتغيرات المشي والكلام وصعوبات التخطيط والتركيز والتغيرات السلوكية." },
    { title: "What Happens Inside the Brain?", ar: "ماذا يحدث داخل الدماغ؟", text: "Neurons in several brain regions, especially structures within the basal ganglia such as the striatum, become progressively dysfunctional.", textAr: "تتعرض الخلايا العصبية في عدة مناطق من الدماغ، وخاصة أجزاء من العقد القاعدية مثل الجسم المخطط، لخلل تدريجي في وظائفها." },
    { title: "Family Dimension", ar: "البعد الأسري", text: "Because the condition is inherited, the diagnosis can have implications for multiple generations of a family.", textAr: "بسبب الطبيعة الوراثية للمرض، يمكن أن يكون للتشخيص تأثير على عدة أجيال داخل الأسرة." }
  ],
  diagnosis: [
    { title: "Clinical Assessment", ar: "التقييم السريري", text: "Neurological examination, symptom history and family history are important parts of evaluation.", textAr: "يُعد الفحص العصبي وتاريخ الأعراض والتاريخ العائلي أجزاء مهمة من التقييم." },
    { title: "Genetic Testing", ar: "الاختبار الجيني", text: "Molecular genetic testing can identify the HTT CAG repeat expansion.", textAr: "يمكن للاختبار الجيني تحديد توسع تكرارات CAG في جين HTT." },
    { title: "Differential Diagnosis", ar: "التشخيص التفريقي", text: "Other neurological and movement disorders may need to be considered depending on the clinical presentation.", textAr: "قد تحتاج اضطرابات عصبية وحركية أخرى إلى الدراسة حسب الصورة السريرية." }
  ],
  living: [
    { icon: "fa-person-walking", title: "Movement", ar: "الحركة", text: "Changes in coordination, gait and involuntary movements can affect mobility and independence.", textAr: "يمكن أن تؤثر تغيرات التناسق والمشي والحركات اللاإرادية في الحركة والاستقلالية." },
    { icon: "fa-comments", title: "Communication", ar: "التواصل", text: "Speech and communication can become increasingly difficult during the disease course.", textAr: "قد يصبح الكلام والتواصل أكثر صعوبة مع تقدم الحالة." },
    { icon: "fa-people-group", title: "Family Impact", ar: "تأثير المرض على الأسرة", text: "The inherited nature and progressive course can affect family relationships, planning and daily routines.", textAr: "يمكن أن تؤثر الطبيعة الوراثية والمسار التدريجي في العلاقات الأسرية والتخطيط والروتين اليومي." }
  ],
  sources: [
    ["NIH / NINDS", "https://www.ninds.nih.gov/health-information/disorders/huntingtons-disease"],
    ["MedlinePlus Genetics", "https://medlineplus.gov/genetics/condition/huntington-disease/"],
    ["GeneReviews", "https://www.ncbi.nlm.nih.gov/books/"],
    ["NORD", "https://rarediseases.org/rare-diseases/huntington-disease/"],
    ["HDSA", "https://hdsa.org/"]
  ]
},

/* ---------- WILSON ---------- */
wilson: {
  name: "Wilson Disease", arabicName: "مرض ويلسون",
  tag: "Inherited Copper Metabolism Disorder", tagAr: "اضطراب وراثي في استقلاب النحاس",
  heroIcon: "fa-coins",
  intro: "Wilson disease is a rare inherited disorder in which copper accumulates in the body, particularly affecting the liver, brain and eyes.",
  introAr: "مرض ويلسون هو اضطراب وراثي نادر يتراكم فيه النحاس داخل الجسم، وخاصة في الكبد والدماغ والعينين.",
  overview: [
    { icon: "fa-dna", title: "ATP7B", ar: "جين ATP7B", text: "Variants in ATP7B interfere with normal copper transport and elimination.", textAr: "تؤثر التغيرات في جين ATP7B في نقل النحاس والتخلص منه بصورة طبيعية." },
    { icon: "fa-vial", title: "Liver", ar: "الكبد", text: "The liver is often one of the first major organs affected by copper accumulation.", textAr: "يُعد الكبد من أهم الأعضاء التي تتأثر بتراكم النحاس." },
    { icon: "fa-brain", title: "Brain & Eyes", ar: "الدماغ والعينان", text: "Neurological and psychiatric features can occur, along with Kayser-Fleischer rings.", textAr: "قد تظهر أعراض عصبية ونفسية إلى جانب حلقات كايزر-فلايشر." }
  ],
  journey: [
    { title: "Genetic Beginning", ar: "البداية الجينية", description: "A change in ATP7B alters the body's ability to handle copper normally.", descriptionAr: "يؤدي التغير في جين ATP7B إلى اضطراب قدرة الجسم على التعامل مع النحاس بصورة طبيعية." },
    { title: "Copper Accumulation", ar: "تراكم النحاس", description: "Copper gradually accumulates because normal transport and elimination are impaired.", descriptionAr: "يتراكم النحاس تدريجيًا بسبب خلل النقل والتخلص الطبيعي منه." },
    { title: "Liver Involvement", ar: "تأثر الكبد", description: "Liver abnormalities may be an early or major manifestation.", descriptionAr: "قد تكون اضطرابات الكبد من العلامات المبكرة أو الرئيسية." },
    { title: "Neurological Changes", ar: "التغيرات العصبية", description: "When copper affects the nervous system, movement, speech, behavior or mood may change.", descriptionAr: "عندما يؤثر النحاس في الجهاز العصبي، قد تتغير الحركة أو الكلام أو السلوك أو المزاج." },
    { title: "Multi-System Effects", ar: "التأثيرات متعددة الأجهزة", description: "The disease can involve several organs, including the liver, brain, eyes, kidneys and blood.", descriptionAr: "يمكن أن يؤثر المرض في عدة أعضاء مثل الكبد والدماغ والعينين والكلى والدم." }
  ],
  details: [
    { title: "Causes & Genetics", ar: "الأسباب والجينات", text: "Wilson disease is caused by pathogenic variants in ATP7B, a gene involved in copper transport.", textAr: "ينتج مرض ويلسون عن تغيرات مرضية في جين ATP7B المسؤول عن وظائف مرتبطة بنقل النحاس." },
    { title: "Inheritance", ar: "الوراثة", text: "Wilson disease is inherited in an autosomal recessive pattern.", textAr: "ينتقل مرض ويلسون بنمط وراثي جسدي متنحٍ." },
    { title: "Clinical Features", ar: "السمات السريرية", text: "Features may include liver disease, neurological symptoms, psychiatric changes, movement abnormalities and eye findings.", textAr: "قد تشمل السمات أمراض الكبد والأعراض العصبية والتغيرات النفسية واضطرابات الحركة وبعض العلامات في العين." },
    { title: "Other Possible Features", ar: "سمات أخرى محتملة", text: "Bone and joint abnormalities, kidney problems and hemolytic anemia can occur in some individuals.", textAr: "قد تظهر لدى بعض الأشخاص مشكلات في العظام والمفاصل والكلى أو فقر دم انحلالي." }
  ],
  diagnosis: [
    { title: "Copper Studies", ar: "تحاليل النحاس", text: "Evaluation may include ceruloplasmin, serum copper and urinary copper measurements.", textAr: "قد يشمل التقييم قياس السيرولوبلازمين والنحاس في الدم والنحاس في البول." },
    { title: "Liver Evaluation", ar: "تقييم الكبد", text: "Liver function and clinical findings help determine whether the liver is involved.", textAr: "تساعد وظائف الكبد والنتائج السريرية في تحديد مدى تأثر الكبد." },
    { title: "Genetic Testing", ar: "الفحص الجيني", text: "ATP7B testing can help confirm the molecular cause in appropriate cases.", textAr: "يمكن لاختبار ATP7B المساعدة في تأكيد السبب الجزيئي في الحالات المناسبة." }
  ],
  living: [
    { icon: "fa-brain", title: "Neurological Function", ar: "الوظائف العصبية", text: "Movement, speech and coordination may be affected when neurological involvement develops.", textAr: "قد تتأثر الحركة والكلام والتناسق عند حدوث تأثر عصبي." },
    { icon: "fa-comments", title: "Psychological & Social Life", ar: "الحياة النفسية والاجتماعية", text: "Psychiatric and behavioral changes may influence relationships, education and everyday interaction.", textAr: "يمكن أن تؤثر التغيرات النفسية والسلوكية في العلاقات والتعليم والتفاعل اليومي." },
    { icon: "fa-person", title: "Daily Function", ar: "الوظائف اليومية", text: "The effects of liver or neurological involvement can influence everyday activities differently between individuals.", textAr: "يمكن أن تختلف تأثيرات تأثر الكبد أو الجهاز العصبي على الأنشطة اليومية من شخص لآخر." }
  ],
  sources: [
    ["NIDDK", "https://www.niddk.nih.gov/health-information/liver-disease/wilson-disease"],
    ["MedlinePlus Genetics", "https://medlineplus.gov/genetics/condition/wilson-disease/"],
    ["GeneReviews", "https://www.ncbi.nlm.nih.gov/books/"],
    ["NORD", "https://rarediseases.org/rare-diseases/wilson-disease/"],
    ["Orphanet", "https://www.orpha.net/"]
  ]
},

/* ---------- GAUCHER ---------- */
gaucher: {
  name: "Gaucher Disease", arabicName: "مرض غوشيه",
  tag: "Inherited Metabolic Disorder", tagAr: "اضطراب أيضي وراثي",
  heroIcon: "fa-droplet",
  intro: "Gaucher disease is an inherited metabolic disorder in which certain fatty substances accumulate inside cells, particularly affecting the spleen, liver, bone marrow and sometimes the nervous system.",
  introAr: "مرض غوشيه هو اضطراب أيضي وراثي تتراكم فيه بعض المواد الدهنية داخل الخلايا، خاصة في الطحال والكبد ونخاع العظام وأحيانًا الجهاز العصبي.",
  overview: [
    { icon: "fa-dna", title: "GBA1", ar: "جين GBA1", text: "Changes in GBA1 can reduce the activity of the enzyme glucocerebrosidase.", textAr: "يمكن أن تؤدي التغيرات في GBA1 إلى انخفاض نشاط إنزيم جلوكوسيريبروسيداز." },
    { icon: "fa-droplet", title: "Blood & Bone", ar: "الدم والعظام", text: "Blood abnormalities and bone involvement are important features, especially in type 1 disease.", textAr: "تُعد اضطرابات الدم وتأثر العظام من السمات المهمة، خاصة في النوع الأول." },
    { icon: "fa-brain", title: "Neurological Forms", ar: "الأشكال العصبية", text: "Types 2 and 3 involve the nervous system to different degrees.", textAr: "يشمل النوعان الثاني والثالث الجهاز العصبي بدرجات مختلفة." }
  ],
  journey: [
    { title: "Genetic Beginning", ar: "البداية الجينية", description: "Variants in GBA1 affect the enzyme responsible for breaking down glucocerebroside.", descriptionAr: "تؤثر التغيرات في GBA1 في الإنزيم المسؤول عن تكسير الجلوكوسيريبروسيد." },
    { title: "Cellular Accumulation", ar: "التراكم داخل الخلايا", description: "Undigested material accumulates inside macrophages.", descriptionAr: "تتراكم المواد غير المتحللة داخل الخلايا البلعمية." },
    { title: "Gaucher Cells", ar: "خلايا غوشيه", description: "The affected macrophages become characteristic Gaucher cells.", descriptionAr: "تتحول الخلايا البلعمية المتأثرة إلى خلايا غوشيه المميزة." },
    { title: "Organ Involvement", ar: "تأثر الأعضاء", description: "The spleen, liver and bone marrow become major sites of accumulation.", descriptionAr: "يصبح الطحال والكبد ونخاع العظام من أهم أماكن التراكم." },
    { title: "Clinical Manifestations", ar: "المظاهر السريرية", description: "Anemia, low platelets, bone disease, enlarged organs and neurological features may appear depending on the type.", descriptionAr: "قد يظهر فقر الدم ونقص الصفائح ومشكلات العظام وتضخم الأعضاء والسمات العصبية حسب نوع المرض." }
  ],
  details: [
    { title: "Types of Gaucher Disease", ar: "أنواع مرض غوشيه", text: "Type 1 is generally non-neuronopathic. Type 2 is an acute neuronopathic form, while type 3 is a chronic neuronopathic form.", textAr: "يكون النوع الأول عادةً دون تأثر عصبي رئيسي. أما النوع الثاني فهو شكل عصبي حاد، والنوع الثالث شكل عصبي مزمن." },
    { title: "Blood-Related Features", ar: "التأثيرات المتعلقة بالدم", text: "Anemia and thrombocytopenia can occur because of bone marrow involvement and enlargement of the spleen.", textAr: "قد يحدث فقر الدم ونقص الصفائح نتيجة تأثر نخاع العظام وتضخم الطحال." },
    { title: "Bone & Skeletal Features", ar: "تأثيرات العظام", text: "Bone pain, reduced bone density, fractures and bone infarction may occur.", textAr: "قد يحدث ألم العظام وانخفاض كثافتها والكسور واحتشاءات العظام." },
    { title: "Liver & Spleen", ar: "الكبد والطحال", text: "Accumulation can cause enlargement of the spleen and liver.", textAr: "يمكن أن يؤدي التراكم إلى تضخم الطحال والكبد." }
  ],
  diagnosis: [
    { title: "Enzyme Activity", ar: "نشاط الإنزيم", text: "Measurement of glucocerebrosidase activity can support the diagnosis.", textAr: "يمكن لقياس نشاط إنزيم جلوكوسيريبروسيداز أن يدعم التشخيص." },
    { title: "Genetic Testing", ar: "الاختبار الجيني", text: "GBA1 testing can identify disease-causing variants.", textAr: "يمكن لاختبار GBA1 تحديد التغيرات الجينية المسببة للمرض." },
    { title: "Clinical Evaluation", ar: "التقييم السريري", text: "Blood counts, organ size, bone findings and neurological features help characterize the condition.", textAr: "تساعد صورة الدم وحجم الأعضاء ونتائج العظام والسمات العصبية في تحديد طبيعة الحالة." }
  ],
  living: [
    { icon: "fa-bone", title: "Bone Health", ar: "صحة العظام", text: "Bone involvement can affect mobility, comfort and physical activity.", textAr: "يمكن أن يؤثر تأثر العظام في الحركة والراحة والنشاط البدني." },
    { icon: "fa-person", title: "Energy & Daily Activities", ar: "الطاقة والأنشطة اليومية", text: "Anemia and other systemic features may influence energy and daily functioning.", textAr: "يمكن أن يؤثر فقر الدم والسمات الجهازية الأخرى في الطاقة والوظائف اليومية." },
    { icon: "fa-users", title: "Family Dimension", ar: "البعد الأسري", text: "The autosomal recessive inheritance pattern makes family genetics an important part of understanding the disease.", textAr: "يجعل نمط الوراثة الجسدي المتنحي الجينات العائلية جزءًا مهمًا من فهم المرض." }
  ],
  sources: [
    ["NIDDK", "https://www.niddk.nih.gov/health-information/liver-disease/gaucher-disease"],
    ["MedlinePlus Genetics", "https://medlineplus.gov/genetics/condition/gaucher-disease/"],
    ["GeneReviews", "https://www.ncbi.nlm.nih.gov/books/"],
    ["NORD", "https://rarediseases.org/rare-diseases/gaucher-disease/"],
    ["Orphanet", "https://www.orpha.net/"]
  ]
},

/* ---------- CYSTIC FIBROSIS ---------- */
cysticFibrosis: {
  name: "Cystic Fibrosis", arabicName: "التليف الكيسي",
  tag: "Inherited Multisystem Disorder", tagAr: "اضطراب وراثي متعدد الأجهزة",
  heroIcon: "fa-lungs",
  intro: "Cystic fibrosis is an inherited disorder that affects the CFTR protein and can cause thick, sticky mucus in the respiratory and digestive systems.",
  introAr: "التليف الكيسي هو اضطراب وراثي يؤثر في بروتين CFTR ويمكن أن يؤدي إلى تكوّن مخاط سميك ولزج في الجهازين التنفسي والهضمي.",
  overview: [
    { icon: "fa-dna", title: "CFTR", ar: "جين CFTR", text: "Variants in CFTR disrupt chloride, bicarbonate and water transport across epithelial cells.", textAr: "تؤثر تغيرات CFTR في نقل الكلوريد والبيكربونات والماء عبر الخلايا الطلائية." },
    { icon: "fa-lungs", title: "Respiratory System", ar: "الجهاز التنفسي", text: "Thick mucus can impair airway clearance and contribute to recurrent respiratory problems.", textAr: "يمكن أن يعيق المخاط السميك تنظيف الشعب الهوائية ويساهم في تكرار المشكلات التنفسية." },
    { icon: "fa-utensils", title: "Digestive System", ar: "الجهاز الهضمي", text: "Pancreatic involvement can interfere with digestion and nutrient absorption.", textAr: "يمكن أن يؤثر البنكرياس في عملية الهضم وامتصاص العناصر الغذائية." }
  ],
  journey: [
    { title: "Genetic Beginning", ar: "البداية الجينية", description: "A CFTR variant changes epithelial ion and water transport.", descriptionAr: "يؤدي التغير في CFTR إلى اضطراب نقل الأيونات والماء عبر الخلايا الطلائية." },
    { title: "Early Biological Changes", ar: "التغيرات البيولوجية المبكرة", description: "Secretions in several organs become abnormally thick and sticky.", descriptionAr: "تصبح الإفرازات في عدة أعضاء أكثر سمكًا ولزوجة من الطبيعي." },
    { title: "First Signs", ar: "العلامات الأولى", description: "Respiratory symptoms, digestive problems or findings on newborn screening may bring the condition to attention.", descriptionAr: "قد تلفت الأعراض التنفسية أو مشكلات الهضم أو نتائج فحص حديثي الولادة الانتباه إلى الحالة." },
    { title: "Respiratory & Digestive Involvement", ar: "التأثر التنفسي والهضمي", description: "Chronic airway disease and pancreatic dysfunction become important parts of the disease course.", descriptionAr: "يصبح مرض الشعب الهوائية المزمن واضطراب وظيفة البنكرياس من الجوانب المهمة في مسار المرض." },
    { title: "Multisystem Disease", ar: "مرض متعدد الأجهزة", description: "The lungs, pancreas, liver, reproductive system, bones and other organs can be affected.", descriptionAr: "يمكن أن تتأثر الرئتان والبنكرياس والكبد والجهاز التناسلي والعظام وأعضاء أخرى." }
  ],
  details: [
    { title: "Causes & Genetics", ar: "الأسباب والجينات", text: "Cystic fibrosis is caused by variants in the CFTR gene and follows an autosomal recessive inheritance pattern.", textAr: "ينتج التليف الكيسي عن تغيرات في جين CFTR وينتقل بنمط وراثي جسدي متنحٍ." },
    { title: "Respiratory Features", ar: "الأعراض التنفسية", text: "Chronic cough, thick mucus, wheezing, recurrent respiratory infections and bronchiectasis may occur.", textAr: "قد يحدث السعال المزمن والمخاط السميك والصفير وتكرار العدوى التنفسية وتوسع الشعب الهوائية." },
    { title: "Digestive Features", ar: "الأعراض الهضمية", text: "Pancreatic duct obstruction can lead to poor digestion and absorption, fatty stools and growth problems.", textAr: "يمكن أن يؤدي انسداد قنوات البنكرياس إلى ضعف الهضم والامتصاص والبراز الدهني ومشكلات النمو." },
    { title: "Sweat Glands", ar: "الغدد العرقية", text: "Abnormally high sweat chloride is a characteristic biological feature and is used in diagnosis.", textAr: "يُعد ارتفاع تركيز الكلوريد في العرق من السمات المميزة ويُستخدم في التشخيص." },
    { title: "Reproductive System", ar: "الجهاز التناسلي", text: "Reproductive effects can occur, including infertility in many males with cystic fibrosis.", textAr: "قد تحدث تأثيرات على الجهاز التناسلي، بما في ذلك العقم لدى نسبة كبيرة من الذكور المصابين." }
  ],
  diagnosis: [
    { title: "Newborn Screening", ar: "فحص حديثي الولادة", text: "Many cases are first identified through newborn screening programs.", textAr: "يتم اكتشاف العديد من الحالات لأول مرة من خلال برامج فحص حديثي الولادة." },
    { title: "Sweat Chloride Test", ar: "اختبار كلوريد العرق", text: "Measurement of sweat chloride is a central diagnostic test for cystic fibrosis.", textAr: "يُعد قياس كلوريد العرق من الاختبارات الأساسية لتشخيص التليف الكيسي." },
    { title: "CFTR Testing", ar: "اختبار CFTR", text: "Genetic testing can identify disease-causing CFTR variants.", textAr: "يمكن للاختبارات الجينية تحديد التغيرات المسببة للمرض في CFTR." }
  ],
  living: [
    { icon: "fa-lungs", title: "Respiratory Health", ar: "الصحة التنفسية", text: "Respiratory disease can influence physical activity, school, work and daily routines.", textAr: "يمكن أن يؤثر المرض التنفسي في النشاط البدني والتعليم والعمل والروتين اليومي." },
    { icon: "fa-utensils", title: "Nutrition & Digestion", ar: "التغذية والهضم", text: "Digestive and pancreatic involvement can influence nutrition and growth.", textAr: "يمكن أن يؤثر تأثر الجهاز الهضمي والبنكرياس في التغذية والنمو." },
    { icon: "fa-person", title: "Daily Life", ar: "الحياة اليومية", text: "The multisystem nature of the disease means that its impact can extend across several areas of everyday life.", textAr: "تعني الطبيعة متعددة الأجهزة للمرض أن تأثيره قد يمتد إلى عدة جوانب من الحياة اليومية." }
  ],
  sources: [
    ["NHLBI", "https://www.nhlbi.nih.gov/health/cystic-fibrosis"],
    ["MedlinePlus Genetics", "https://medlineplus.gov/genetics/condition/cystic-fibrosis/"],
    ["GeneReviews", "https://www.ncbi.nlm.nih.gov/books/"],
    ["Cystic Fibrosis Foundation", "https://www.cff.org/"],
    ["NORD", "https://rarediseases.org/rare-diseases/cystic-fibrosis/"]
  ]
},

/* ---------- FOP ---------- */
fop: {
  name: "Fibrodysplasia Ossificans Progressiva", arabicName: "خلل التعظم الليفي المترقي",
  tag: "Ultra-Rare Genetic Disorder", tagAr: "اضطراب جيني نادر للغاية",
  heroIcon: "fa-bone",
  intro: "Fibrodysplasia ossificans progressiva, or FOP, is an ultra-rare genetic disorder in which soft tissues progressively develop bone outside the normal skeleton.",
  introAr: "خلل التعظم الليفي المترقي أو FOP هو اضطراب جيني نادر للغاية تتكون فيه عظام جديدة تدريجيًا داخل الأنسجة الرخوة خارج الهيكل العظمي الطبيعي.",
  overview: [
    { icon: "fa-dna", title: "ACVR1", ar: "جين ACVR1", text: "FOP is usually caused by a pathogenic variant in ACVR1, also known as ALK2.", textAr: "ينتج FOP عادة عن تغير مرضي في جين ACVR1 المعروف أيضًا باسم ALK2." },
    { icon: "fa-bone", title: "Extra Bone Formation", ar: "تكوين عظام إضافية", text: "Bone can form in muscles, tendons, ligaments and other soft tissues.", textAr: "يمكن أن تتكون العظام داخل العضلات والأوتار والأربطة والأنسجة الرخوة الأخرى." },
    { icon: "fa-triangle-exclamation", title: "Flare-Ups", ar: "النوبات", text: "Episodes of swelling and inflammation can precede new bone formation.", textAr: "قد تسبق نوبات التورم والالتهاب تكوّن عظام جديدة." }
  ],
  journey: [
    { title: "ACVR1 Mutation", ar: "تغير جين ACVR1", description: "A genetic change alters signaling involved in bone formation.", descriptionAr: "يؤدي التغير الجيني إلى اضطراب الإشارات المرتبطة بتكوين العظام." },
    { title: "Congenital Big Toe Abnormality", ar: "التغير الخلقي في إصبع القدم الكبير", description: "An abnormal great toe is a characteristic early feature of FOP.", descriptionAr: "يُعد وجود تغير غير طبيعي في إصبع القدم الكبير من العلامات المبكرة المميزة." },
    { title: "Flare-Up", ar: "النوبة الالتهابية", description: "Soft tissue swelling, pain and inflammation can appear before heterotopic bone formation.", descriptionAr: "قد يظهر تورم وألم والتهاب في الأنسجة الرخوة قبل تكوّن العظم خارج مكانه الطبيعي." },
    { title: "Soft Tissue Bone Formation", ar: "تكوّن العظم في الأنسجة الرخوة", description: "New bone gradually forms where soft tissue would normally remain flexible.", descriptionAr: "تتكون عظام جديدة تدريجيًا في أماكن يفترض أن تظل فيها الأنسجة الرخوة مرنة." },
    { title: "Changing Mobility", ar: "تغير الحركة", description: "Progressive joint restriction can change mobility and affect everyday function.", descriptionAr: "يمكن أن يؤدي تقييد حركة المفاصل تدريجيًا إلى تغير القدرة على الحركة والوظائف اليومية." }
  ],
  details: [
    { title: "Why Does Trauma Matter?", ar: "لماذا تمثل الإصابات مشكلة؟", text: "Trauma, surgery and some injections can trigger or worsen flare-ups in FOP. Spontaneous flare-ups can also occur.", textAr: "يمكن أن تؤدي الإصابات والجراحات وبعض الحقن إلى تحفيز أو زيادة النوبات في FOP، كما يمكن أن تحدث نوبات تلقائية." },
    { title: "Symptoms & Clinical Features", ar: "الأعراض والسمات", text: "Congenital great toe abnormalities, painful swelling, progressive heterotopic ossification and joint restriction are characteristic features.", textAr: "تشمل السمات المميزة تغيرات إصبع القدم الكبير منذ الولادة والتورم المؤلم والتعظم خارج الهيكل الطبيعي وتقييد حركة المفاصل." },
    { title: "Respiratory Impact", ar: "التأثير التنفسي", text: "Progressive restriction of the chest wall can affect breathing mechanics in advanced disease.", textAr: "يمكن أن يؤثر التقييد التدريجي لحركة جدار الصدر في ميكانيكية التنفس في المراحل المتقدمة." }
  ],
  diagnosis: [
    { title: "Clinical Pattern", ar: "النمط السريري", text: "The combination of congenital great toe abnormalities and progressive heterotopic ossification is highly characteristic.", textAr: "يُعد اجتماع تغيرات إصبع القدم الكبير الخلقية مع التعظم التدريجي خارج الهيكل الطبيعي نمطًا مميزًا جدًا." },
    { title: "ACVR1 Testing", ar: "اختبار ACVR1", text: "Molecular testing can identify the characteristic ACVR1 variant in most affected individuals.", textAr: "يمكن للاختبار الجزيئي تحديد التغير المميز في ACVR1 لدى معظم المصابين." },
    { title: "Differential Diagnosis", ar: "التشخيص التفريقي", text: "Other fibro-osseous lesions and disorders of heterotopic ossification may need to be distinguished from FOP.", textAr: "قد يلزم التمييز بين FOP وبعض الآفات الليفية العظمية واضطرابات التعظم خارج الهيكل الطبيعي." }
  ],
  living: [
    { icon: "fa-person-walking", title: "Mobility", ar: "الحركة", text: "Progressive joint restriction can gradually change mobility and independence.", textAr: "يمكن أن يؤدي تقييد المفاصل تدريجيًا إلى تغير الحركة والاستقلالية." },
    { icon: "fa-house", title: "Daily Environment", ar: "البيئة اليومية", text: "Changes in mobility can affect how a person interacts with home, school, work and public spaces.", textAr: "يمكن أن تؤثر تغيرات الحركة في طريقة تعامل الشخص مع المنزل والتعليم والعمل والأماكن العامة." },
    { icon: "fa-users", title: "Social Life", ar: "الحياة الاجتماعية", text: "A progressive physical condition can influence social participation and everyday routines.", textAr: "يمكن أن تؤثر الحالة الجسدية التدريجية في المشاركة الاجتماعية والروتين اليومي." }
  ],
  sources: [
    ["MedlinePlus Genetics", "https://medlineplus.gov/genetics/condition/fibrodysplasia-ossificans-progressiva/"],
    ["GeneReviews", "https://www.ncbi.nlm.nih.gov/books/"],
    ["NORD", "https://rarediseases.org/rare-diseases/fibrodysplasia-ossificans-progressiva/"],
    ["Orphanet", "https://www.orpha.net/"],
    ["IFOPA", "https://www.ifopa.org/"]
  ]
},

/* ---------- EDS ---------- */
eds: {
  name: "Ehlers-Danlos Syndromes", arabicName: "متلازمات إهلرز-دانلوس",
  tag: "Connective Tissue Disorders", tagAr: "اضطرابات النسيج الضام",
  heroIcon: "fa-hand",
  intro: "Ehlers-Danlos syndromes are a group of inherited connective tissue disorders characterized by differences in collagen and related tissue structure.",
  introAr: "متلازمات إهلرز-دانلوس هي مجموعة من اضطرابات النسيج الضام الوراثية التي تتميز بتغيرات في الكولاجين وبنية الأنسجة المرتبطة به.",
  overview: [
    { icon: "fa-layer-group", title: "A Group of Disorders", ar: "مجموعة من الاضطرابات", text: "EDS is not a single disease. The current classification includes multiple distinct types.", textAr: "EDS ليست مرضًا واحدًا، بل مجموعة من الأنواع المختلفة." },
    { icon: "fa-hand", title: "Joint Hypermobility", ar: "فرط حركة المفاصل", text: "Joint hypermobility and instability are common features in several types.", textAr: "يُعد فرط حركة المفاصل وعدم استقرارها من السمات الشائعة في عدة أنواع." },
    { icon: "fa-dna", title: "Genetic Diversity", ar: "التنوع الجيني", text: "Different EDS types are associated with different genes and inheritance patterns.", textAr: "ترتبط الأنواع المختلفة بجينات وأنماط وراثة مختلفة." }
  ],
  journey: [
    { title: "Connective Tissue", ar: "النسيج الضام", description: "A genetic difference affects proteins or biological pathways involved in connective tissue structure.", descriptionAr: "يؤثر التغير الجيني في بروتينات أو مسارات بيولوجية مرتبطة ببنية النسيج الضام." },
    { title: "Joint Features", ar: "تأثر المفاصل", description: "Joint hypermobility, instability or recurrent injuries may become noticeable.", descriptionAr: "قد يظهر فرط حركة المفاصل أو عدم استقرارها أو تكرار إصاباتها." },
    { title: "Skin & Tissue Features", ar: "تأثر الجلد والأنسجة", description: "Depending on the subtype, skin hyperextensibility, fragility or abnormal scarring may occur.", descriptionAr: "بحسب النوع قد يحدث تمدد زائد للجلد أو هشاشته أو ندبات غير طبيعية." },
    { title: "Organ-Specific Features", ar: "تأثر أعضاء محددة", description: "Some subtypes can involve blood vessels, internal organs or the skeleton.", descriptionAr: "قد تؤثر بعض الأنواع في الأوعية الدموية أو الأعضاء الداخلية أو الهيكل العظمي." },
    { title: "Individual Journey", ar: "المسار الفردي", description: "The course varies considerably depending on the specific EDS type and the organs involved.", descriptionAr: "يختلف المسار بدرجة كبيرة حسب نوع EDS المحدد والأعضاء المتأثرة." }
  ],
  details: [
    { title: "Types of EDS", ar: "أنواع EDS", text: "The EDS classification includes multiple types, including hypermobile, classical, vascular and several rarer forms.", textAr: "يشمل تصنيف EDS عدة أنواع، منها فرط الحركة والكلاسيكي والوعائي وعدة أشكال نادرة." },
    { title: "Causes & Genetics", ar: "الأسباب والجينات", text: "Genes such as COL5A1, COL5A2, COL3A1, COL1A1 and COL1A2 are associated with different forms.", textAr: "ترتبط جينات مثل COL5A1 وCOL5A2 وCOL3A1 وCOL1A1 وCOL1A2 بأشكال مختلفة." },
    { title: "Clinical Features", ar: "السمات السريرية", text: "Features can include joint hypermobility, skin hyperextensibility, tissue fragility, bruising, pain and joint instability.", textAr: "قد تشمل السمات فرط حركة المفاصل وتمدد الجلد وهشاشة الأنسجة والكدمات والألم وعدم استقرار المفاصل." },
    { title: "Vascular EDS", ar: "EDS الوعائي", text: "Vascular EDS can involve blood vessels and certain internal organs and represents a distinct subtype.", textAr: "يمكن أن يؤثر النوع الوعائي في الأوعية الدموية وبعض الأعضاء الداخلية وهو نوع مميز من المتلازمة." },
    { title: "Diagnosis", ar: "التشخيص", text: "Diagnosis depends on the specific type. Some forms have molecular testing, while hypermobile EDS is diagnosed clinically.", textAr: "يعتمد التشخيص على النوع المحدد. تتوفر اختبارات جزيئية لبعض الأنواع، بينما يعتمد تشخيص النوع مفرط الحركة على التقييم السريري." }
  ],
  diagnosis: [
    { title: "Clinical Assessment", ar: "التقييم السريري", text: "Medical history, physical examination and assessment of joint and skin features are central to evaluation.", textAr: "يُعد التاريخ المرضي والفحص وتقييم المفاصل والجلد من أساسيات التقييم." },
    { title: "Genetic Testing", ar: "الفحص الجيني", text: "Molecular testing can identify variants responsible for several EDS subtypes.", textAr: "يمكن للاختبارات الجزيئية تحديد التغيرات المسؤولة عن عدة أنواع من EDS." },
    { title: "Subtype Identification", ar: "تحديد النوع", text: "Identifying the specific subtype is important because clinical features and inheritance can differ.", textAr: "يُعد تحديد النوع المحدد مهمًا لأن السمات السريرية ونمط الوراثة يمكن أن يختلفا." }
  ],
  living: [
    { icon: "fa-person-walking", title: "Mobility & Joints", ar: "الحركة والمفاصل", text: "Joint hypermobility, instability and pain can influence movement, physical activity and everyday tasks.", textAr: "يمكن أن يؤثر فرط حركة المفاصل وعدم استقرارها والألم في الحركة والنشاط البدني والمهام اليومية." },
    { icon: "fa-person", title: "Daily Activities", ar: "الأنشطة اليومية", text: "The effect on daily life varies considerably depending on the EDS subtype and the features experienced by each person.", textAr: "يختلف تأثير الحالة على الحياة اليومية بشكل كبير حسب نوع المتلازمة والسمات التي يعاني منها كل شخص." },
    { icon: "fa-users", title: "Social & Family Life", ar: "الحياة الاجتماعية والأسرية", text: "Pain, mobility limitations or other physical features may influence education, work, social participation and family routines.", textAr: "يمكن أن يؤثر الألم أو محدودية الحركة أو غيرها من السمات الجسدية في التعليم والعمل والمشاركة الاجتماعية وروتين الأسرة." }
  ],
  sources: [
    ["MedlinePlus Genetics", "https://medlineplus.gov/genetics/condition/ehlers-danlos-syndromes/"],
    ["GeneReviews", "https://www.ncbi.nlm.nih.gov/books/"],
    ["NORD", "https://rarediseases.org/rare-diseases/ehlers-danlos-syndromes/"],
    ["Orphanet", "https://www.orpha.net/"],
    ["Ehlers-Danlos Society", "https://www.ehlers-danlos.com/"]
  ]
},

/* ---------- SICKLE CELL ---------- */
sickleCell: {
  name: "Sickle Cell Disease", arabicName: "مرض الخلايا المنجلية",
  tag: "Inherited Blood Disorder", tagAr: "اضطراب دم وراثي",
  heroIcon: "fa-droplet",
  intro: "Sickle cell disease is a group of inherited blood disorders in which abnormal hemoglobin can cause red blood cells to become rigid and sickle-shaped.",
  introAr: "مرض الخلايا المنجلية هو مجموعة من اضطرابات الدم الوراثية التي يمكن أن تؤدي فيها الهيموجلوبينات غير الطبيعية إلى تحول خلايا الدم الحمراء إلى شكل منجلي وصلب.",
  overview: [
    { icon: "fa-dna", title: "HBB Gene", ar: "جين HBB", text: "Sickle cell disease is associated with variants in the HBB gene that affect hemoglobin.", textAr: "يرتبط مرض الخلايا المنجلية بتغيرات في جين HBB تؤثر في الهيموجلوبين." },
    { icon: "fa-droplet", title: "Red Blood Cells", ar: "خلايا الدم الحمراء", text: "Red blood cells can become rigid, fragile and sickle-shaped.", textAr: "يمكن أن تصبح خلايا الدم الحمراء صلبة وهشة وذات شكل منجلي." },
    { icon: "fa-heart-pulse", title: "Blood Flow", ar: "تدفق الدم", text: "Sickled cells can obstruct small blood vessels and reduce oxygen delivery to tissues.", textAr: "يمكن للخلايا المنجلية أن تعيق الأوعية الدموية الصغيرة وتقلل وصول الأكسجين إلى الأنسجة." }
  ],
  journey: [
    { title: "HBB Genetic Change", ar: "التغير الجيني في HBB", description: "A genetic change affects the structure of hemoglobin inside red blood cells.", descriptionAr: "يؤثر التغير الجيني في تركيب الهيموجلوبين داخل خلايا الدم الحمراء." },
    { title: "Hemoglobin S", ar: "هيموجلوبين S", description: "Certain forms of the disease produce hemoglobin S, which can behave differently under low-oxygen conditions.", descriptionAr: "تنتج بعض أشكال المرض هيموجلوبين S الذي يمكن أن يتصرف بصورة مختلفة عند انخفاض الأكسجين." },
    { title: "Sickling", ar: "تمنجل الخلايا", description: "Red blood cells can become rigid and take on a characteristic sickle shape.", descriptionAr: "يمكن أن تصبح خلايا الدم الحمراء صلبة وتأخذ الشكل المنجلي المميز." },
    { title: "Hemolysis & Vaso-Occlusion", ar: "انحلال الدم وانسداد الأوعية", description: "Sickled cells may break down more easily and can obstruct small blood vessels.", descriptionAr: "قد تتحلل الخلايا المنجلية بسهولة أكبر ويمكن أن تعيق الأوعية الدموية الصغيرة." },
    { title: "Organ Effects", ar: "تأثير الأعضاء", description: "Repeated blood-flow problems and anemia can affect multiple organs over time.", descriptionAr: "يمكن أن يؤثر اضطراب تدفق الدم المتكرر وفقر الدم في عدة أعضاء مع مرور الوقت." }
  ],
  details: [
    { title: "Types", ar: "الأنواع", text: "Important forms include HbSS, HbSC and sickle beta-thalassemia. Sickle cell trait is different from sickle cell disease.", textAr: "تشمل الأشكال المهمة HbSS وHbSC وSickle beta-thalassemia. وتختلف صفة الخلايا المنجلية عن مرض الخلايا المنجلية." },
    { title: "Inheritance", ar: "الوراثة", text: "Sickle cell disease is generally inherited in an autosomal recessive pattern.", textAr: "ينتقل مرض الخلايا المنجلية عادةً بنمط وراثي جسدي متنحٍ." },
    { title: "Symptoms & Clinical Features", ar: "الأعراض والسمات السريرية", text: "Features can include anemia, episodes of pain, fatigue, jaundice, infections and complications affecting different organs.", textAr: "قد تشمل السمات فقر الدم ونوبات الألم والإرهاق واليرقان والعدوى ومضاعفات تؤثر في أعضاء مختلفة." },
    { title: "Pain Episodes", ar: "نوبات الألم", text: "Vaso-occlusion can reduce blood flow to tissues and cause episodes of pain that vary in frequency and severity.", textAr: "يمكن أن يؤدي انسداد الأوعية الدموية إلى تقليل تدفق الدم إلى الأنسجة وحدوث نوبات من الألم تختلف في تكرارها وشدتها." },
    { title: "Organs & Blood Vessels", ar: "الأعضاء والأوعية الدموية", text: "Repeated sickling and hemolysis can affect the brain, lungs, kidneys, eyes, bones and other organs.", textAr: "يمكن أن يؤثر التمنجل وانحلال الدم المتكرران في الدماغ والرئتين والكلى والعينين والعظام وأعضاء أخرى." },
    { title: "Common Triggers", ar: "العوامل المحفزة", text: "Dehydration, infections, low oxygen levels, extreme temperatures and physical stress can be associated with worsening symptoms in some people.", textAr: "قد يرتبط الجفاف والعدوى وانخفاض الأكسجين ودرجات الحرارة الشديدة والإجهاد البدني بزيادة الأعراض لدى بعض الأشخاص." }
  ],
  diagnosis: [
    { title: "Newborn Screening", ar: "فحص حديثي الولادة", text: "Many individuals are identified through newborn screening programs before symptoms become obvious.", textAr: "يتم اكتشاف العديد من الحالات من خلال برامج فحص حديثي الولادة قبل ظهور الأعراض بشكل واضح." },
    { title: "Hemoglobin Analysis", ar: "تحليل الهيموجلوبين", text: "Hemoglobin electrophoresis or high-performance liquid chromatography can identify abnormal hemoglobin patterns.", textAr: "يمكن لتحليل رحلان الهيموجلوبين أو تقنيات تحليل الهيموجلوبين المتقدمة تحديد أنماط الهيموجلوبين غير الطبيعية." },
    { title: "Genetic Testing", ar: "الاختبار الجيني", text: "Genetic testing can identify variants in HBB and help clarify the specific form of sickle cell disease.", textAr: "يمكن للاختبار الجيني تحديد التغيرات في HBB والمساعدة في تحديد الشكل المحدد من مرض الخلايا المنجلية." }
  ],
  living: [
    { icon: "fa-person", title: "Daily Activities", ar: "الأنشطة اليومية", text: "Pain episodes, fatigue and anemia can influence school, work, physical activity and everyday routines.", textAr: "يمكن أن تؤثر نوبات الألم والإرهاق وفقر الدم في الدراسة والعمل والنشاط البدني والروتين اليومي." },
    { icon: "fa-heart-pulse", title: "Physical Function", ar: "الوظائف الجسدية", text: "The effects of anemia and repeated vascular complications can influence physical functioning differently between individuals.", textAr: "يمكن أن تؤثر آثار فقر الدم والمضاعفات الوعائية المتكررة في الوظائف الجسدية بدرجات مختلفة من شخص لآخر." },
    { icon: "fa-users", title: "Family & Social Life", ar: "الحياة الأسرية والاجتماعية", text: "The chronic nature of the condition can affect family routines, education, employment and social participation.", textAr: "يمكن أن تؤثر الطبيعة المزمنة للحالة في روتين الأسرة والتعليم والعمل والمشاركة الاجتماعية." }
  ],
  sources: [
    ["NHLBI", "https://www.nhlbi.nih.gov/health/sickle-cell-disease"],
    ["CDC", "https://www.cdc.gov/sickle-cell/"],
    ["MedlinePlus Genetics", "https://medlineplus.gov/genetics/condition/sickle-cell-disease/"],
    ["GeneReviews", "https://www.ncbi.nlm.nih.gov/books/"],
    ["NORD", "https://rarediseases.org/rare-diseases/sickle-cell-disease/"]
  ]
},

/* ---------- PNH ---------- */
pnh: {
  name: "Paroxysmal Nocturnal Hemoglobinuria", arabicName: "البيلة الهيموغلوبينية الليلية الانتيابية",
  tag: "Rare Acquired Blood Disorder", tagAr: "اضطراب دم مكتسب نادر",
  heroIcon: "fa-droplet",
  intro: "Paroxysmal nocturnal hemoglobinuria, or PNH, is a rare acquired disorder of blood-forming stem cells that can cause destruction of red blood cells, blood clots and bone marrow dysfunction.",
  introAr: "البيلة الهيموغلوبينية الليلية الانتيابية أو PNH هي اضطراب دموي مكتسب نادر يصيب الخلايا الجذعية المكونة للدم، ويمكن أن يؤدي إلى تكسير خلايا الدم الحمراء والجلطات واضطراب نخاع العظام.",
  overview: [
    { icon: "fa-dna", title: "Acquired PIGA Mutation", ar: "تغير مكتسب في PIGA", text: "PNH usually results from an acquired mutation in the PIGA gene within a blood-forming stem cell.", textAr: "ينتج PNH عادةً عن تغير مكتسب في جين PIGA داخل إحدى الخلايا الجذعية المكونة للدم." },
    { icon: "fa-droplet", title: "Hemolysis", ar: "انحلال الدم", text: "Abnormal red blood cells become unusually sensitive to complement and may be destroyed within the bloodstream.", textAr: "تصبح خلايا الدم الحمراء غير الطبيعية شديدة الحساسية لنظام المتممة وقد يتم تدميرها داخل مجرى الدم." },
    { icon: "fa-heart-pulse", title: "Thrombosis", ar: "الجلطات", text: "PNH is associated with an increased risk of abnormal blood clot formation.", textAr: "يرتبط PNH بزيادة خطر تكوّن الجلطات الدموية غير الطبيعية." }
  ],
  journey: [
    { title: "Acquired PIGA Mutation", ar: "التغير المكتسب في PIGA", description: "A somatic mutation develops in a blood-forming stem cell during a person's lifetime.", descriptionAr: "يحدث تغير جيني جسدي في إحدى الخلايا الجذعية المكونة للدم خلال حياة الشخص." },
    { title: "GPI Anchor Defect", ar: "خلل مرساة GPI", description: "The PIGA mutation disrupts production of GPI anchors that normally attach several protective proteins to cell surfaces.", descriptionAr: "يؤدي تغير PIGA إلى اضطراب تكوين مراسي GPI التي تساعد على تثبيت عدة بروتينات واقية على سطح الخلايا." },
    { title: "Complement Sensitivity", ar: "الحساسية للمتممة", description: "Red blood cells become more vulnerable to destruction by the complement system.", descriptionAr: "تصبح خلايا الدم الحمراء أكثر عرضة للتدمير بواسطة نظام المتممة." },
    { title: "Hemolysis & Anemia", ar: "انحلال الدم وفقر الدم", description: "Red blood cell destruction releases hemoglobin and can lead to hemolytic anemia.", descriptionAr: "يؤدي تدمير خلايا الدم الحمراء إلى إطلاق الهيموجلوبين ويمكن أن يسبب فقر الدم الانحلالي." },
    { title: "Thrombosis & Marrow Effects", ar: "الجلطات وتأثر نخاع العظام", description: "The disease can involve abnormal clotting and may coexist with bone marrow failure or other blood-cell abnormalities.", descriptionAr: "يمكن أن يرتبط المرض بالجلطات كما قد يترافق مع فشل نخاع العظام أو اضطرابات أخرى في خلايا الدم." }
  ],
  details: [
    { title: "What Causes PNH?", ar: "ما سبب PNH؟", text: "PNH is caused by an acquired somatic mutation in PIGA. It is generally not inherited from parents and is not usually passed genetically to children.", textAr: "ينتج PNH عن تغير جيني جسدي مكتسب في PIGA. ولا يكون عادةً مرضًا موروثًا من الوالدين ولا ينتقل وراثيًا إلى الأبناء." },
    { title: "Red Blood Cell Effects", ar: "تأثيره على خلايا الدم الحمراء", text: "Loss of protective surface proteins makes affected blood cells vulnerable to complement-mediated destruction.", textAr: "يؤدي فقدان بعض البروتينات الواقية على سطح الخلايا إلى جعل خلايا الدم المتأثرة أكثر عرضة للتدمير بواسطة المتممة." },
    { title: "Symptoms", ar: "الأعراض", text: "Fatigue, anemia, dark urine, abdominal pain, headaches and shortness of breath can occur.", textAr: "قد يحدث الإرهاق وفقر الدم والبول الداكن وألم البطن والصداع وضيق التنفس." },
    { title: "Why Is It Called Nocturnal?", ar: "لماذا يسمى ليلًا؟", text: "The name comes from the historical observation of dark urine that could be more noticeable in the morning. Hemolysis is not limited to nighttime.", textAr: "جاء الاسم من الملاحظة التاريخية لظهور البول الداكن الذي قد يكون أكثر وضوحًا في الصباح، لكن انحلال الدم لا يقتصر على الليل." },
    { title: "Blood Clots", ar: "الجلطات الدموية", text: "Thrombosis is an important feature of PNH and can occur in unusual locations compared with common forms of thrombosis.", textAr: "تُعد الجلطات من السمات المهمة في PNH وقد تحدث في أماكن غير معتادة مقارنةً بالأنواع الشائعة من الجلطات." },
    { title: "Bone Marrow", ar: "نخاع العظام", text: "PNH can occur alongside bone marrow failure, aplastic anemia or reduced production of different blood-cell types.", textAr: "يمكن أن يحدث PNH بالتزامن مع فشل نخاع العظام أو فقر الدم اللاتنسجي أو انخفاض إنتاج أنواع مختلفة من خلايا الدم." },
    { title: "Kidney Effects", ar: "تأثير الكلى", text: "Free hemoglobin released during hemolysis can affect the kidneys over time.", textAr: "يمكن أن يؤثر الهيموجلوبين الحر الناتج عن انحلال الدم في الكلى مع مرور الوقت." }
  ],
  diagnosis: [
    { title: "Flow Cytometry", ar: "قياس التدفق الخلوي", text: "Flow cytometry is the main laboratory method used to identify PNH cell populations.", textAr: "يُعد قياس التدفق الخلوي من أهم الطرق المخبرية المستخدمة للكشف عن خلايا PNH." },
    { title: "FLAER Testing", ar: "اختبار FLAER", text: "FLAER can help identify cells with deficient GPI-anchored proteins.", textAr: "يساعد اختبار FLAER في تحديد الخلايا التي تعاني من نقص بروتينات مرتبطة بمرساة GPI." },
    { title: "Hemolysis Evaluation", ar: "تقييم انحلال الدم", text: "Laboratory findings can demonstrate evidence of red blood cell destruction and anemia.", textAr: "يمكن أن تظهر التحاليل المخبرية دلائل على تدمير خلايا الدم الحمراء وفقر الدم." }
  ],
  living: [
    { icon: "fa-battery-quarter", title: "Energy & Fatigue", ar: "الطاقة والإرهاق", text: "Anemia and ongoing hemolysis can contribute to fatigue and reduced physical energy.", textAr: "يمكن أن يساهم فقر الدم وانحلال الدم المستمر في الإرهاق وانخفاض الطاقة البدنية." },
    { icon: "fa-person", title: "Daily Function", ar: "الوظائف اليومية", text: "Symptoms can influence physical activity, work, education and everyday routines.", textAr: "يمكن أن تؤثر الأعراض في النشاط البدني والعمل والتعليم والروتين اليومي." },
    { icon: "fa-users", title: "Chronic Condition", ar: "الحالة المزمنة", text: "The unpredictable nature of symptoms and complications can affect social and family life.", textAr: "يمكن أن تؤثر الطبيعة غير المتوقعة للأعراض والمضاعفات في الحياة الاجتماعية والأسرية." }
  ],
  sources: [
    ["NHLBI", "https://www.nhlbi.nih.gov/health/paroxysmal-nocturnal-hemoglobinuria"],
    ["MedlinePlus", "https://medlineplus.gov/ency/article/000534.htm"],
    ["NCBI / GeneReviews", "https://www.ncbi.nlm.nih.gov/books/"],
    ["NORD", "https://rarediseases.org/rare-diseases/paroxysmal-nocturnal-hemoglobinuria/"],
    ["Orphanet", "https://www.orpha.net/"]
  ]
},

/* ---------- USHER ---------- */
usher: {
  name: "Usher Syndrome", arabicName: "متلازمة أشر",
  tag: "Inherited Hearing & Vision Disorder", tagAr: "اضطراب وراثي يؤثر على السمع والبصر",
  heroIcon: "fa-eye",
  intro: "Usher syndrome is a group of inherited disorders characterized mainly by hearing loss and progressive vision loss caused by retinal degeneration.",
  introAr: "متلازمة أشر هي مجموعة من الاضطرابات الوراثية التي تتميز بشكل أساسي بفقدان السمع وفقدان البصر التدريجي نتيجة تنكس الشبكية.",
  overview: [
    { icon: "fa-ear-listen", title: "Hearing", ar: "السمع", text: "Hearing loss varies between Usher types and may be present from birth or develop progressively.", textAr: "يختلف فقدان السمع بين أنواع أشر، وقد يكون موجودًا منذ الولادة أو يتطور تدريجيًا." },
    { icon: "fa-eye", title: "Vision", ar: "البصر", text: "Retinitis pigmentosa causes progressive retinal degeneration and changes in night and peripheral vision.", textAr: "يسبب التهاب الشبكية الصباغي تنكسًا تدريجيًا في الشبكية وتغيرات في الرؤية الليلية والمحيطية." },
    { icon: "fa-person-walking", title: "Balance", ar: "التوازن", text: "Some forms of Usher syndrome also affect balance because of inner-ear dysfunction.", textAr: "تؤثر بعض أنواع متلازمة أشر أيضًا في التوازن بسبب خلل الأذن الداخلية." }
  ],
  journey: [
    { title: "Genetic Beginning", ar: "البداية الجينية", description: "Variants in genes involved in the structure and function of sensory cells lead to Usher syndrome.", descriptionAr: "تؤدي التغيرات في جينات مرتبطة ببنية ووظيفة الخلايا الحسية إلى متلازمة أشر." },
    { title: "Hearing Changes", ar: "تغيرات السمع", description: "Hearing loss may be severe from birth, moderate to severe, or progressive depending on the type.", descriptionAr: "قد يكون فقدان السمع شديدًا منذ الولادة أو متوسطًا إلى شديد أو تدريجيًا حسب النوع." },
    { title: "Vision Changes", ar: "تغيرات البصر", description: "Retinal degeneration can lead to night blindness followed by progressive loss of peripheral vision.", descriptionAr: "يمكن أن يؤدي تنكس الشبكية إلى العمى الليلي ثم فقدان تدريجي للرؤية المحيطية." },
    { title: "Balance Problems", ar: "مشكلات التوازن", description: "Balance difficulties are particularly characteristic of some forms such as Usher type 1.", descriptionAr: "تُعد صعوبات التوازن مميزة بشكل خاص لبعض الأنواع مثل النوع الأول." },
    { title: "Daily Life Adaptation", ar: "التكيف مع الحياة اليومية", description: "Changes in hearing and vision can influence communication, mobility, education and independence.", descriptionAr: "يمكن أن تؤثر تغيرات السمع والبصر في التواصل والحركة والتعليم والاستقلالية." }
  ],
  details: [
    { title: "Causes & Genetics", ar: "الأسباب والجينات", text: "Usher syndrome is associated with variants in several genes, including MYO7A, USH1C, CDH23, PCDH15, USH2A, ADGRV1 and WHRN.", textAr: "ترتبط متلازمة أشر بتغيرات في عدة جينات منها MYO7A وUSH1C وCDH23 وPCDH15 وUSH2A وADGRV1 وWHRN." },
    { title: "Inheritance", ar: "الوراثة", text: "Most forms of Usher syndrome follow an autosomal recessive inheritance pattern.", textAr: "تنتقل معظم أشكال متلازمة أشر بنمط وراثي جسدي متنحٍ." },
    { title: "Types", ar: "الأنواع", text: "Type 1 usually involves severe congenital hearing loss, balance problems and early retinal disease. Type 2 usually causes congenital hearing loss with later retinal disease and generally preserved balance. Type 3 is characterized by progressive hearing loss and variable retinal involvement.", textAr: "يتضمن النوع الأول عادةً فقدان سمع شديد منذ الولادة ومشكلات في التوازن ومرضًا شبكيًا مبكرًا. أما النوع الثاني فعادةً ما يسبب فقدان سمع منذ الولادة مع مرض شبكي لاحق وتوازن محفوظ غالبًا. ويتميز النوع الثالث بفقدان سمع تدريجي وتأثر شبكي متفاوت." },
    { title: "Vision Changes", ar: "تغيرات الرؤية", text: "Night blindness and progressive peripheral vision loss are characteristic features of retinal degeneration in Usher syndrome.", textAr: "يُعد العمى الليلي وفقدان الرؤية المحيطية التدريجي من السمات المميزة لتنكس الشبكية في متلازمة أشر." }
  ],
  diagnosis: [
    { title: "Hearing Evaluation", ar: "تقييم السمع", text: "Audiological testing determines the degree and pattern of hearing loss.", textAr: "تحدد اختبارات السمع درجة ونمط فقدان السمع." },
    { title: "Eye Evaluation", ar: "فحص العين", text: "Retinal examination, visual field testing, electroretinography and retinal imaging can help evaluate retinal disease.", textAr: "يمكن لفحص الشبكية واختبار مجال الرؤية وتخطيط كهربية الشبكية وتصوير الشبكية المساعدة في تقييم مرض الشبكية." },
    { title: "Genetic Testing", ar: "الفحص الجيني", text: "Genetic testing can identify disease-associated variants and help determine the specific type.", textAr: "يمكن للاختبار الجيني تحديد التغيرات المرتبطة بالمرض والمساعدة في تحديد النوع." }
  ],
  living: [
    { icon: "fa-ear-listen", title: "Communication", ar: "التواصل", text: "Hearing loss can affect spoken communication, social interaction and access to information.", textAr: "يمكن أن يؤثر فقدان السمع في التواصل اللفظي والتفاعل الاجتماعي والوصول إلى المعلومات." },
    { icon: "fa-eye", title: "Vision & Mobility", ar: "الرؤية والحركة", text: "Progressive visual loss can affect navigation, reading, mobility and independence.", textAr: "يمكن أن يؤثر فقدان البصر التدريجي في التنقل والقراءة والحركة والاستقلالية." },
    { icon: "fa-school", title: "Education & Work", ar: "التعليم والعمل", text: "Combined hearing and vision changes can influence learning, communication and participation in school or work.", textAr: "يمكن أن تؤثر تغيرات السمع والبصر معًا في التعلم والتواصل والمشاركة في التعليم أو العمل." }
  ],
  sources: [
    ["MedlinePlus Genetics", "https://medlineplus.gov/genetics/condition/usher-syndrome/"],
    ["GeneReviews", "https://www.ncbi.nlm.nih.gov/books/"],
    ["NEI", "https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/retinitis-pigmentosa"],
    ["NIDCD", "https://www.nidcd.nih.gov/"],
    ["NORD", "https://rarediseases.org/rare-diseases/usher-syndrome/"]
  ]
},

/* ---------- ANGELMAN ---------- */
angelman: {
  name: "Angelman Syndrome", arabicName: "متلازمة أنجلمان",
  tag: "Rare Neurogenetic Disorder", tagAr: "اضطراب عصبي جيني نادر",
  heroIcon: "fa-brain",
  intro: "Angelman syndrome is a rare neurogenetic disorder that affects development, communication, movement, balance and the nervous system.",
  introAr: "متلازمة أنجلمان هي اضطراب عصبي جيني نادر يؤثر في التطور والتواصل والحركة والتوازن والجهاز العصبي.",
  overview: [
    { icon: "fa-dna", title: "Chromosome 15", ar: "الكروموسوم 15", text: "Angelman syndrome is related to abnormal function of the UBE3A gene in a specific region of chromosome 15.", textAr: "ترتبط متلازمة أنجلمان بخلل وظيفة جين UBE3A في منطقة محددة من الكروموسوم 15." },
    { icon: "fa-comments", title: "Communication", ar: "التواصل", text: "Severe speech impairment is a characteristic feature, while nonverbal communication abilities can vary.", textAr: "يُعد ضعف الكلام الشديد من السمات المميزة، بينما تختلف قدرات التواصل غير اللفظي بين الأشخاص." },
    { icon: "fa-person-walking", title: "Movement & Balance", ar: "الحركة والتوازن", text: "Ataxia, balance difficulties and characteristic movement patterns are common.", textAr: "تُعد الرنح وصعوبات التوازن وبعض أنماط الحركة المميزة من السمات الشائعة." }
  ],
  journey: [
    { title: "Chromosome 15 / UBE3A", ar: "الكروموسوم 15 وUBE3A", description: "Abnormal maternal UBE3A function in relevant brain regions affects neurological development.", descriptionAr: "يؤثر خلل وظيفة UBE3A من النسخة الأمومية في مناطق معينة من الدماغ في التطور العصبي." },
    { title: "Developmental Differences", ar: "الاختلافات النمائية", description: "Developmental delay and differences in communication and motor development become noticeable.", descriptionAr: "يصبح تأخر التطور والاختلافات في التواصل والتطور الحركي أكثر وضوحًا." },
    { title: "Movement & Balance", ar: "الحركة والتوازن", description: "Ataxia, tremor, balance problems and characteristic movements can become prominent.", descriptionAr: "قد تصبح الرنح والرعشة ومشكلات التوازن وبعض الحركات المميزة أكثر وضوحًا." },
    { title: "Seizures & Sleep", ar: "التشنجات والنوم", description: "Seizures and sleep disturbances are common parts of the clinical picture.", descriptionAr: "تُعد التشنجات واضطرابات النوم من الجوانب الشائعة في الصورة السريرية." },
    { title: "Daily Life", ar: "الحياة اليومية", description: "Communication, mobility, learning and independence can remain affected throughout life.", descriptionAr: "يمكن أن يستمر تأثر التواصل والحركة والتعلم والاستقلالية طوال الحياة." }
  ],
  details: [
    { title: "Genetic Mechanisms", ar: "الآليات الجينية", text: "Angelman syndrome can result from a maternal chromosome 15 deletion, a pathogenic UBE3A variant, paternal uniparental disomy or an imprinting defect.", textAr: "يمكن أن تنتج متلازمة أنجلمان عن حذف في الكروموسوم 15 من النسخة الأمومية أو تغير مرضي في UBE3A أو توارث نسختين من الأب أو خلل في البصمة الجينية." },
    { title: "Early Signs", ar: "العلامات المبكرة", text: "Developmental delay, limited speech, difficulties with balance and movement and characteristic behavioral features may become apparent during early childhood.", textAr: "قد يظهر تأخر التطور وقلة الكلام وصعوبات التوازن والحركة وبعض السمات السلوكية المميزة خلال الطفولة المبكرة." },
    { title: "Seizures", ar: "التشنجات", text: "Seizures are common and may begin during childhood.", textAr: "تُعد التشنجات شائعة وقد تبدأ خلال مرحلة الطفولة." },
    { title: "Sleep & Behavioral Features", ar: "النوم والسمات السلوكية", text: "Sleep difficulties and a characteristic happy or excitable behavioral pattern can occur, although presentation varies.", textAr: "قد تحدث صعوبات في النوم ونمط سلوكي يتسم أحيانًا بالسعادة أو النشاط الزائد، مع اختلاف الصورة من شخص لآخر." },
    { title: "Physical Features", ar: "السمات الجسدية", text: "Microcephaly, scoliosis, tongue thrusting, drooling and movement abnormalities may occur.", textAr: "قد تظهر صغر محيط الرأس والجنف ودفع اللسان وزيادة اللعاب واضطرابات الحركة." }
  ],
  diagnosis: [
    { title: "DNA Methylation Testing", ar: "اختبار مثيلة DNA", text: "DNA methylation analysis can identify the majority of molecular mechanisms responsible for Angelman syndrome.", textAr: "يمكن لتحليل مثيلة DNA تحديد غالبية الآليات الجزيئية المسؤولة عن متلازمة أنجلمان." },
    { title: "UBE3A Testing", ar: "اختبار UBE3A", text: "Additional testing can identify pathogenic variants in UBE3A when appropriate.", textAr: "يمكن لاختبارات إضافية تحديد التغيرات المرضية في UBE3A عند الحاجة." },
    { title: "Chromosomal Testing", ar: "اختبارات الكروموسومات", text: "Chromosomal microarray and mechanism-specific studies may help determine the exact genetic cause.", textAr: "يمكن للمصفوفة الكروموسومية والاختبارات الخاصة بالآلية الجينية تحديد السبب الجيني الدقيق." }
  ],
  living: [
    { icon: "fa-comments", title: "Communication", ar: "التواصل", text: "Limited speech can make communication challenging, while nonverbal communication and interaction remain important parts of daily life.", textAr: "يمكن أن يجعل ضعف الكلام التواصل أكثر صعوبة، بينما يظل التواصل غير اللفظي والتفاعل مهمين في الحياة اليومية." },
    { icon: "fa-person-walking", title: "Mobility", ar: "الحركة", text: "Balance and coordination difficulties can influence mobility and independence.", textAr: "يمكن أن تؤثر صعوبات التوازن والتناسق في الحركة والاستقلالية." },
    { icon: "fa-school", title: "Learning & Daily Life", ar: "التعلم والحياة اليومية", text: "Developmental and communication differences can influence education, social interaction and daily activities.", textAr: "يمكن أن تؤثر الاختلافات النمائية والتواصلية في التعليم والتفاعل الاجتماعي والأنشطة اليومية." }
  ],
  sources: [
    ["MedlinePlus Genetics", "https://medlineplus.gov/genetics/condition/angelman-syndrome/"],
    ["GeneReviews", "https://www.ncbi.nlm.nih.gov/books/"],
    ["NIH / NINDS", "https://www.ninds.nih.gov/health-information/disorders/angelman-syndrome"],
    ["NORD", "https://rarediseases.org/rare-diseases/angelman-syndrome/"],
    ["Orphanet", "https://www.orpha.net/"]
  ]
},

/* ---------- EPIDERMOLYSIS BULLOSA ---------- */
eb: {
  name: "Epidermolysis Bullosa", arabicName: "انحلال البشرة الفقاعي",
  tag: "Inherited Skin Fragility Disorder", tagAr: "اضطراب وراثي يسبب هشاشة الجلد",
  heroIcon: "fa-hand-dots",
  intro: "Epidermolysis bullosa, or EB, is a group of rare genetic disorders in which the skin and sometimes mucosal tissues are unusually fragile and can blister or erode after minimal friction or trauma.",
  introAr: "انحلال البشرة الفقاعي أو EB هو مجموعة من الاضطرابات الوراثية النادرة التي يكون فيها الجلد وأحيانًا الأغشية المخاطية هشين بشكل غير طبيعي، مما قد يؤدي إلى ظهور الفقاعات والتقرحات بعد احتكاك أو إصابة بسيطة.",
  overview: [
    { icon: "fa-layer-group", title: "Multiple Types", ar: "أنواع متعددة", text: "Major categories include epidermolysis bullosa simplex, junctional EB, dystrophic EB and Kindler EB.", textAr: "تشمل الفئات الرئيسية انحلال البشرة الفقاعي البسيط والوصلي والضموري ونوع كيندلر." },
    { icon: "fa-hand-dots", title: "Skin Fragility", ar: "هشاشة الجلد", text: "Minor friction or trauma can cause blisters, erosions or wounds.", textAr: "يمكن للاحتكاك أو الإصابة البسيطة أن تسبب فقاعات أو تقرحات أو جروحًا." },
    { icon: "fa-dna", title: "Structural Proteins", ar: "البروتينات البنيوية", text: "Different forms result from genetic changes affecting proteins that maintain connections between layers of skin.", textAr: "تنتج الأشكال المختلفة عن تغيرات جينية تؤثر في البروتينات التي تحافظ على اتصال طبقات الجلد." }
  ],
  journey: [
    { title: "Genetic Structural Defect", ar: "الخلل البنيوي الجيني", description: "A genetic change affects a protein important for skin structure and attachment.", descriptionAr: "يؤثر التغير الجيني في بروتين مهم لبنية الجلد وتماسك طبقاته." },
    { title: "Skin Anchoring Weakness", ar: "ضعف تماسك الجلد", description: "Connections between skin layers become less stable, depending on the EB subtype.", descriptionAr: "تصبح الروابط بين طبقات الجلد أقل ثباتًا حسب نوع EB." },
    { title: "Friction or Trauma", ar: "الاحتكاك أو الإصابة", description: "Minimal mechanical stress can separate skin layers and produce a blister or erosion.", descriptionAr: "يمكن للإجهاد الميكانيكي البسيط أن يفصل طبقات الجلد ويؤدي إلى ظهور فقاعة أو تقرح." },
    { title: "Healing & Scarring", ar: "الالتئام والتندب", description: "Repeated skin injury can lead to chronic wounds and, in some types, significant scarring.", descriptionAr: "يمكن لتكرار إصابات الجلد أن يؤدي إلى جروح مزمنة وتندب واضح في بعض الأنواع." },
    { title: "Systemic Complications", ar: "المضاعفات الجهازية", description: "Severe forms can affect nutrition, growth, blood counts, mucosal tissues and other organs.", descriptionAr: "يمكن أن تؤثر الأشكال الشديدة في التغذية والنمو وصورة الدم والأغشية المخاطية وأعضاء أخرى." }
  ],
  details: [
    { title: "Types of EB", ar: "أنواع EB", text: "The main categories are epidermolysis bullosa simplex, junctional EB, dystrophic EB and Kindler EB, each containing multiple subtypes.", textAr: "تشمل الفئات الرئيسية انحلال البشرة الفقاعي البسيط والوصلي والضموري ونوع كيندلر، ويضم كل منها أنواعًا فرعية متعددة." },
    { title: "Causes & Genetics", ar: "الأسباب والجينات", text: "Genes associated with EB include KRT5 and KRT14 in some simplex forms, COL7A1 in dystrophic EB, and several genes including LAMA3, LAMB3, LAMC2 and COL17A1 in junctional forms.", textAr: "تشمل الجينات المرتبطة بـ EB جينات KRT5 وKRT14 في بعض أشكال النوع البسيط، وCOL7A1 في النوع الضموري، وعدة جينات مثل LAMA3 وLAMB3 وLAMC2 وCOL17A1 في بعض الأنواع الوصلية." },
    { title: "Inheritance", ar: "الوراثة", text: "Inheritance varies by subtype. EB can be autosomal dominant or autosomal recessive depending on the specific form.", textAr: "يختلف نمط الوراثة حسب النوع، فقد يكون المرض جسديًا سائدًا أو جسديًا متنحيًا." },
    { title: "Symptoms & Clinical Features", ar: "الأعراض والسمات السريرية", text: "Features can include blisters, erosions, pain, scarring, nail abnormalities, hair loss, dental problems and mucosal involvement.", textAr: "قد تشمل السمات الفقاعات والتقرحات والألم والتندب وتغيرات الأظافر وتساقط الشعر ومشكلات الأسنان وتأثر الأغشية المخاطية." },
    { title: "Internal Organs", ar: "الأعضاء الداخلية", text: "Some severe forms can affect the esophagus, urinary tract or airway and may cause strictures or other structural complications.", textAr: "يمكن لبعض الأشكال الشديدة أن تؤثر في المريء أو الجهاز البولي أو مجرى الهواء وقد تسبب تضيقًا أو مضاعفات بنيوية أخرى." },
    { title: "Severe Complications", ar: "المضاعفات الشديدة", text: "Severe EB can be associated with anemia, malnutrition, growth problems, chronic wounds and increased risk of squamous cell carcinoma in certain forms, particularly severe recessive dystrophic EB.", textAr: "قد ترتبط الأشكال الشديدة بفقر الدم وسوء التغذية ومشكلات النمو والجروح المزمنة وزيادة خطر سرطان الخلايا الحرشفية في بعض الأنواع، خاصة النوع الضموري المتنحي الشديد." }
  ],
  diagnosis: [
    { title: "Clinical Evaluation", ar: "التقييم السريري", text: "The pattern, distribution and severity of blistering provide important clues about the EB subtype.", textAr: "يوفر نمط الفقاعات وتوزيعها وشدتها دلائل مهمة على نوع EB." },
    { title: "Skin Biopsy", ar: "خزعة الجلد", text: "Specialized testing of a skin biopsy can determine where the skin layers separate and which structural proteins are affected.", textAr: "يمكن للاختبارات المتخصصة على خزعة الجلد تحديد مكان انفصال طبقات الجلد والبروتينات البنيوية المتأثرة." },
    { title: "Genetic Testing", ar: "الفحص الجيني", text: "Molecular genetic testing can identify the specific disease-causing variant and help classify the subtype.", textAr: "يمكن للاختبار الجيني الجزيئي تحديد التغير المسبب للمرض والمساعدة في تصنيف النوع." }
  ],
  living: [
    { icon: "fa-shirt", title: "Everyday Movement", ar: "الحركة اليومية", text: "Skin fragility can make ordinary movement, clothing and physical contact more challenging.", textAr: "يمكن أن تجعل هشاشة الجلد الحركة العادية والملابس والاحتكاك الجسدي أكثر صعوبة." },
    { icon: "fa-utensils", title: "Eating & Nutrition", ar: "الأكل والتغذية", text: "When mucosal tissues are affected, eating and swallowing can become difficult and nutritional status may be affected.", textAr: "عند تأثر الأغشية المخاطية، قد يصبح الأكل والبلع أكثر صعوبة وقد تتأثر الحالة الغذائية." },
    { icon: "fa-school", title: "Education & Work", ar: "التعليم والعمل", text: "Pain, wounds and mobility limitations can influence attendance, concentration, work and social participation.", textAr: "يمكن أن يؤثر الألم والجروح ومحدودية الحركة في الحضور والتركيز والعمل والمشاركة الاجتماعية." },
    { icon: "fa-users", title: "Social Life", ar: "الحياة الاجتماعية", text: "Visible skin changes and chronic wounds may influence social interaction and body image.", textAr: "يمكن أن تؤثر تغيرات الجلد الظاهرة والجروح المزمنة في التفاعل الاجتماعي وصورة الجسم." }
  ],
  sources: [
    ["MedlinePlus Genetics", "https://medlineplus.gov/genetics/condition/epidermolysis-bullosa/"],
    ["GeneReviews", "https://www.ncbi.nlm.nih.gov/books/"],
    ["NORD", "https://rarediseases.org/rare-diseases/epidermolysis-bullosa/"],
    ["DEBRA International", "https://www.debra-international.org/"],
    ["Orphanet", "https://www.orpha.net/"]
  ]
}

};


/* =========================================================
   STATE
========================================================= */

const params = new URLSearchParams(window.location.search);

const normalizeKey = s => String(s || "").toLowerCase().replace(/[^a-z0-9]/g, "");

const diseaseKeyLookup = {};
Object.keys(diseases).forEach(k => { diseaseKeyLookup[normalizeKey(k)] = k; });
diseaseKeyLookup["epidermolysisbullosa"] = "eb";

function rememberDisease(key) {
  try { localStorage.setItem("rde-last-disease", key); } catch (e) {}
}

let diseaseKey = diseaseKeyLookup[normalizeKey(params.get("disease") || params.get("id"))];

if (!diseaseKey) {
  let last = null;
  try { last = localStorage.getItem("rde-last-disease"); } catch (e) {}
  diseaseKey = diseases[last] ? last : "rett";
}

rememberDisease(diseaseKey);

let disease = diseases[diseaseKey];
let activeJourneyIndex = 0;

const $ = id => document.getElementById(id);
const pad = n => String(n).padStart(2, "0");
const pick = (item, en, ar) => (isArabic() ? item[ar] || item[en] : item[en]) || "";


/* =========================================================
   DIRECTION & STATIC UI
========================================================= */

function updateDirection() {
  document.documentElement.lang = isArabic() ? "ar" : "en";
  document.documentElement.dir = isArabic() ? "rtl" : "ltr";
  document.body.classList.toggle("rtl", isArabic());
}

function renderUI() {
  document.querySelectorAll("[data-ui]").forEach(el => {
    const value = ui[currentLanguage][el.dataset.ui];
    if (value) el.textContent = value;
  });
}

function updateLanguageButton() {
  if (languageButton) languageButton.textContent = isArabic() ? "English" : "العربية";
}


/* =========================================================
   HERO
========================================================= */

function renderHero() {
  const isAr = isArabic();

  $("diseaseName").textContent = isAr ? disease.arabicName : disease.name;

  // Secondary bilingual name stays hidden so each language is shown on its own
  const arabicNameElem = $("diseaseArabicName");
  if (arabicNameElem) arabicNameElem.style.display = "none";

  $("diseaseTag").textContent = pick(disease, "tag", "tagAr");
  $("diseaseIntro").textContent = pick(disease, "intro", "introAr");
  $("diseaseHeroIcon").className = `fa-solid ${disease.heroIcon}`;
  document.title = `${isAr ? disease.arabicName : disease.name} | Rare Disease Explorer`;
}


/* =========================================================
   SELECTOR
========================================================= */

function renderSelector() {
  const select = $("diseaseSelector");
  select.innerHTML = "";

  Object.keys(diseases).forEach(key => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = isArabic() ? diseases[key].arabicName : diseases[key].name;
    option.selected = key === diseaseKey;
    select.appendChild(option);
  });
}

$("diseaseSelector").addEventListener("change", event => {
  const key = event.target.value;
  if (!diseases[key]) return;

  diseaseKey = key;
  disease = diseases[key];
  rememberDisease(key);
  activeJourneyIndex = 0;

  history.replaceState(null, "", `?disease=${encodeURIComponent(key)}`);

  renderPage();
  window.scrollTo({ top: 0, behavior: "smooth" });
});


/* =========================================================
   OVERVIEW
========================================================= */

function renderOverview() {
  const box = $("overviewContainer");
  box.innerHTML = "";

  disease.overview.forEach(item => {
    const card = document.createElement("article");
    card.className = "info-card fade-up";
    card.innerHTML = `
      <div class="info-card-icon"><i class="fa-solid ${item.icon}"></i></div>
      <h3>${pick(item, "title", "ar")}</h3>
      <p>${pick(item, "text", "textAr")}</p>
    `;
    box.appendChild(card);
  });
}


/* =========================================================
   JOURNEY
========================================================= */

function renderJourney() {
  const timeline = $("journeyTimeline");
  timeline.innerHTML = "";

  const arrow = isArabic() ? "fa-chevron-left" : "fa-chevron-right";

  disease.journey.forEach((stage, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "journey-item fade-up" + (index === activeJourneyIndex ? " active" : "");
    item.innerHTML = `
      <span class="journey-number">${pad(index + 1)}</span>
      <span class="journey-item-content">
        <span class="journey-item-title">${pick(stage, "title", "ar")}</span>
        <span class="journey-item-arrow"><i class="fa-solid ${arrow}"></i></span>
      </span>
    `;

    item.addEventListener("click", () => {
      activeJourneyIndex = index;
      updateJourney();
    });

    timeline.appendChild(item);
  });

  updateJourney();
}

function updateJourney() {
  const stages = disease.journey;
  const stage = stages[activeJourneyIndex];
  if (!stage) return;

  document.querySelectorAll(".journey-item").forEach((item, i) => {
    item.classList.toggle("active", i === activeJourneyIndex);
  });

  $("stageLabel").textContent = `${t("Stage", "المرحلة")} ${pad(activeJourneyIndex + 1)}`;
  $("stageNumber").textContent = pad(activeJourneyIndex + 1);
  $("journeyStageTitle").textContent = pick(stage, "title", "ar");
  $("journeyStageDescription").textContent = pick(stage, "description", "descriptionAr");

  const isLast = activeJourneyIndex === stages.length - 1;
  $("nextStageBtn").classList.toggle("disabled", isLast);
  $("nextStageText").textContent = isLast
    ? ui[currentLanguage].journeyComplete
    : ui[currentLanguage].nextStage;
}

$("nextStageBtn").addEventListener("click", () => {
  if (activeJourneyIndex < disease.journey.length - 1) {
    activeJourneyIndex++;
    updateJourney();
  }
});


/* =========================================================
   DETAILS (ACCORDION)
========================================================= */

function renderDetails() {
  const box = $("detailsContainer");
  box.innerHTML = "";

  disease.details.forEach((item, index) => {
    const section = document.createElement("article");
    section.className = "detail-section fade-up";
    section.innerHTML = `
      <button class="detail-header" type="button" aria-expanded="false">
        <span class="detail-title">
          <span class="detail-icon">${pad(index + 1)}</span>
          <span>${pick(item, "title", "ar")}</span>
        </span>
        <span class="detail-toggle"><i class="fa-solid fa-plus"></i></span>
      </button>
      <div class="detail-content">
        <p>${pick(item, "text", "textAr")}</p>
      </div>
    `;

    section.querySelector(".detail-header").addEventListener("click", () => {
      const willOpen = !section.classList.contains("active");

      box.querySelectorAll(".detail-section.active").forEach(other => {
        other.classList.remove("active");
        other.querySelector(".detail-header").setAttribute("aria-expanded", "false");
        other.querySelector(".detail-toggle i").className = "fa-solid fa-plus";
      });

      if (willOpen) {
        section.classList.add("active");
        section.querySelector(".detail-header").setAttribute("aria-expanded", "true");
        section.querySelector(".detail-toggle i").className = "fa-solid fa-minus";
      }
    });

    box.appendChild(section);
  });
}


/* =========================================================
   DIAGNOSIS
========================================================= */

function renderDiagnosis() {
  const box = $("diagnosisContainer");
  box.innerHTML = "";

  disease.diagnosis.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "diagnosis-card fade-up";
    card.innerHTML = `
      <div class="diagnosis-icon">${pad(index + 1)}</div>
      <h3>${pick(item, "title", "ar")}</h3>
      <p>${pick(item, "text", "textAr")}</p>
    `;
    box.appendChild(card);
  });
}


/* =========================================================
   LIVING WITH
========================================================= */

function renderLiving() {
  const box = $("livingContainer");
  box.innerHTML = "";

  disease.living.forEach(item => {
    const card = document.createElement("article");
    card.className = "living-card fade-up";
    card.innerHTML = `
      <div class="living-icon"><i class="fa-solid ${item.icon}"></i></div>
      <h3>${pick(item, "title", "ar")}</h3>
      <p>${pick(item, "text", "textAr")}</p>
    `;
    box.appendChild(card);
  });
}


/* =========================================================
   SOURCES
========================================================= */

function renderSources() {
  const box = $("sourcesContainer");
  box.innerHTML = "";

  disease.sources.forEach(([name, url]) => {
    const link = document.createElement("a");
    link.className = "source-card fade-up";
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.title = ui[currentLanguage].sourceVisit;
    link.innerHTML = `
      <span class="source-name">${name}</span>
      <span class="source-link"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
    `;
    box.appendChild(link);
  });
}


/* =========================================================
   RENDER ALL
========================================================= */

function renderPage() {
  updateDirection();
  renderUI();
  renderHero();
  renderSelector();
  renderOverview();
  renderJourney();
  renderDetails();
  renderDiagnosis();
  renderLiving();
  renderSources();
  updateLanguageButton();
}


/* =========================================================
   EVENTS
========================================================= */

// Language
if (languageButton) {
  languageButton.addEventListener("click", () => {
    currentLanguage = isArabic() ? "en" : "ar";
    saveLanguage();
    renderPage();
  });
}

// Mobile menu (same behaviour as the other pages)
const menuButton = $("mobileMenuBtn");
const mobileMenu = $("mobileMenu");

function setMobileMenu(open) {
  if (!menuButton || !mobileMenu) return;
  mobileMenu.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", open ? "true" : "false");
  mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
  const icon = menuButton.querySelector("i");
  if (icon) {
    icon.classList.toggle("fa-bars", !open);
    icon.classList.toggle("fa-xmark", open);
  }
}

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    setMobileMenu(!mobileMenu.classList.contains("is-open"));
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => setMobileMenu(false));
  });

  document.addEventListener("click", event => {
    if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
      setMobileMenu(false);
    }
  });
}

// Explore journey button
$("journeyButton")?.addEventListener("click", () => {
  $("journey").scrollIntoView({ behavior: "smooth" });
});


/* =========================================================
   INIT
========================================================= */

document.addEventListener("DOMContentLoaded", renderPage);