/* =========================================================
   RARE DISEASE EXPLORER - LANDING PAGE SCRIPT (script.js)
========================================================= */

(function () {
    "use strict";

    /* ---------------------------------------------------------
       1. STATE
    --------------------------------------------------------- */
    let currentLanguage = localStorage.getItem("rde-language") || "en";

    /* ---------------------------------------------------------
       2. TRANSLATIONS (strict separation)
    --------------------------------------------------------- */
    const translations = {
        en: {
            brandName: "Rare Disease Explorer",
            langBtnText: "العربية",
            navHome: "Home",
            navComparison: "Diseases Comparison",
            navJourney: "Disease Journey",
            navLocation: "Location",

            heroBadge: "Rare disease information platform",
            heroTitle: "Understand rare<br>diseases, step by<br>step",
            heroSubtitle: "Explore rare conditions with clarity and guided clinical pathways.",
            heroDescription: "Rare Disease Explorer helps you look up a rare disease by name, or start from a symptom and see which conditions relate to it. Each disease page shows a timeline of how it starts and progresses, how it is diagnosed and managed, and trusted sources to read next. It is for learning, not diagnosis, and never replaces your doctor.",

            chipSearch: "+10 Rare Diseases",
            chipJourney: "Educational, Not Diagnostic",
            chipSources: "Read trusted sources",

            catSectionTitle: "Browse by category",
            catSectionSubtitle: "Pick a body system to see the rare diseases that affect it.",

            catNeurologicalTitle: "Neurological",
            catNeurologicalDesc: "Brain, nerves and movement",
            catGeneticTitle: "Genetic & Metabolic",
            catGeneticDesc: "Inherited and enzyme conditions",
            catRespiratoryTitle: "Respiratory",
            catRespiratoryDesc: "Lungs and breathing",
            catMusculoskeletalTitle: "Musculoskeletal",
            catMusculoskeletalDesc: "Bones, joints and muscles",
            catBloodTitle: "Blood Disorders",
            catBloodDesc: "Blood cells and clotting",
            catVisionTitle: "Vision & Hearing",
            catVisionDesc: "Eyes, ears and senses",
            catSyndromesTitle: "Genetic Syndromes",
            catSyndromesDesc: "Conditions present from birth",
            catSkinTitle: "Skin Disorders",
            catSkinDesc: "Skin, hair and nails",
            catDigestiveTitle: "Digestive & Kidney",
            catDigestiveDesc: "Gut, liver and kidneys",

            disclaimerText: "Information on this site is educational and may not apply to your case. Talk to a doctor about any health concern.",

            modalTitle: "Search Rare Diseases",
            searchPlaceholder: "Type a disease name, symptom, or genetic mutation...",
            quickSuggestions: "Popular:",
            searchHint: "Press Esc to close",
            noResults: "No matching rare diseases found.",

            btnExploreJourney: "Explore Disease Journey",
            btnCompareMimic: "Compare with Common Mimic",
            viewAllInComparison: "View All Category Comparisons",
            conditionsCountWord: "conditions in this category"
        },
        ar: {
            brandName: "مستكشف الأمراض النادرة",
            langBtnText: "English",
            navHome: "الرئيسية",
            navComparison: "مقارنة الأمراض",
            navJourney: "رحلة المرض",
            navLocation: "الموقع",

            heroBadge: "منصة معلومات الأمراض النادرة",
            heroTitle: "افهم الأمراض النادرة،<br>خطوة بخطوة",
            heroSubtitle: "استكشف الأمراض النادرة بسهولة ومسارات إكلينيكية واضحة.",
            heroDescription: "تساعدك منصة مستكشف الأمراض النادرة في البحث عن مرض نادر بالاسم، أو البدء من الأعراض ومعرفة الحالات المرتبطة بها. توضح صفحة كل مرض تسلسلاً زمنياً لبدايته وتطوره، وكيفية تشخيصه وإدارته، ومصادر موثوقة لمتابعة القراءة. المنصة للتعلم وليس للتشخيص، ولا تغني أبداً عن زيارة الطبيب.",

            chipSearch: "اكثر من 10 أمراض نادرة",
            chipJourney: "تعليمي، وليس تشخيصي",
            chipSources: "قراءة مصادر موثوقة",

            catSectionTitle: "التصفح حسب الفئة",
            catSectionSubtitle: "اختر جهازاً من أجهزة الجسم لرؤية الأمراض النادرة التي تؤثر عليه.",

            catNeurologicalTitle: "الجهاز العصبي",
            catNeurologicalDesc: "الدماغ، الأعصاب والحركة",
            catGeneticTitle: "الأمراض الجينية والاستقلابية",
            catGeneticDesc: "الحالات الوراثية ونقص الإنزيمات",
            catRespiratoryTitle: "الجهاز التنفسي",
            catRespiratoryDesc: "الرئتان وصعوبات التنفس",
            catMusculoskeletalTitle: "الجهاز العضلي الهيكلي",
            catMusculoskeletalDesc: "العظام، المفاصل والعضلات",
            catBloodTitle: "اضطرابات الدم",
            catBloodDesc: "خلايا الدم وعوامل التخثر",
            catVisionTitle: "البصر والسمع",
            catVisionDesc: "العيون، الأذنان والحواس",
            catSyndromesTitle: "المتلازمات الوراثية",
            catSyndromesDesc: "حالات خلقية منذ الولادة",
            catSkinTitle: "الأمراض الجلدية",
            catSkinDesc: "الجلد، الشعر والأظافر",
            catDigestiveTitle: "الجهاز الهضمي والكلى",
            catDigestiveDesc: "الأمعاء، الكبد والكليتان",

            disclaimerText: "المعلومات الواردة في هذا الموقع ذات طابع تعليمي وقد لا تنطبق على حالتك. يرجى استشارة الطبيب المختص لأي استفسار صحي.",

            modalTitle: "البحث في الأمراض النادرة",
            searchPlaceholder: "اكتب اسم المرض، الأعراض، أو الطفرة الجينية...",
            quickSuggestions: "شائع:",
            searchHint: "اضغط Esc للإغلاق",
            noResults: "لم يتم العثور على نتائج مطابقة.",

            btnExploreJourney: "استكشف رحلة المرض",
            btnCompareMimic: "مقارنة بمرض مشابه شائع",
            viewAllInComparison: "عرض جميع مقارنات هذا القسم",
            conditionsCountWord: "أمراض نادرة ضمن هذا القسم"
        }
    };

    /* ---------------------------------------------------------
       3. CATEGORY & DISEASE DATABASE
    --------------------------------------------------------- */
    const categoryInfo = {
        "neurological": {
            icon: "🧠",
            nameEn: "Neurological Diseases",
            nameAr: "أمراض الجهاز العصبي",
            descEn: "Rare disorders affecting the brain, spinal cord, nerves, and motor coordination.",
            descAr: "اضطرابات نادرة تصيب الدماغ والحبل الشوكي والأعصاب والتنسيق الحركي.",
            diseases: [
                {
                    id: "rett",
                    nameEn: "Rett Syndrome", nameAr: "متلازمة ريت",
                    tagEn: "Neurogenetic", tagAr: "جيني عصبي",
                    descEn: "A rare genetic neurological disorder mainly affecting girls, marked by developmental regression, loss of purposeful hand use, and speech changes.",
                    descAr: "اضطراب عصبي جيني نادر يؤثر بشكل أساسي على الإناث، ويتميز بتراجع المهارات وفقدان استخدام اليدين والكلام.",
                    mimicNameEn: "Autism Spectrum Disorder (ASD)", mimicNameAr: "اضطراب طيف التوحد"
                },
                {
                    id: "huntington",
                    nameEn: "Huntington's Disease", nameAr: "مرض هنتنغتون",
                    tagEn: "Neurodegenerative", tagAr: "تنكسي عصبي",
                    descEn: "A progressive inherited neurological disorder caused by HTT gene CAG repeat expansion, causing chorea, cognitive decline, and mood changes.",
                    descAr: "اضطراب عصبي وراثي تدريجي ينتج عن طفرة في جين HTT، ويسبب حركات لا إرادية وتراجعاً معرفياً وتغيرات سلوكية.",
                    mimicNameEn: "Parkinson's Disease", mimicNameAr: "مرض باركنسون"
                }
            ]
        },
        "genetic-metabolic": {
            icon: "🧬",
            nameEn: "Genetic & Metabolic Disorders",
            nameAr: "الأمراض الجينية والاستقلابية",
            descEn: "Inherited conditions resulting from enzyme deficiencies and metabolic pathway dysfunction.",
            descAr: "حالات وراثية ناتجة عن نقص الإنزيمات وخلل مسارات التمثيل الغذائي داخل الخلايا.",
            diseases: [
                {
                    id: "gaucher",
                    nameEn: "Gaucher Disease", nameAr: "مرض غوشيه",
                    tagEn: "Lysosomal Storage", tagAr: "تخزين ليزوزومي",
                    descEn: "A rare metabolic disorder where fatty glucocerebrosides accumulate in spleen, liver, and bones due to glucocerebrosidase deficiency.",
                    descAr: "اضطراب استقلابي وراثي تتراكم فيه الدهون السكرية في الطحال والكبد والعظام بسبب نقص إنزيم محدد.",
                    mimicNameEn: "Leukemia / Lymphoma", mimicNameAr: "اللوكيميا / الليمفوما"
                }
            ]
        },
        "respiratory": {
            icon: '<i class="fa-solid fa-lungs" aria-hidden="true"></i>',
            nameEn: "Respiratory Conditions",
            nameAr: "أمراض الجهاز التنفسي",
            descEn: "Rare genetic and chronic conditions severely affecting lungs, airways, and oxygen exchange.",
            descAr: "أمراض وراثية ومزمنة تؤثر بشكل حاد على الرئتين والمجاري الهوائية وتبادل الأكسجين.",
            diseases: [
                {
                    id: "cysticFibrosis",
                    nameEn: "Cystic Fibrosis", nameAr: "التليف الكيسي",
                    tagEn: "CFTR Mutation", tagAr: "طفرة CFTR",
                    descEn: "An inherited disorder causing thick, sticky mucus build-up in the lungs and digestive tract, leading to recurrent infections.",
                    descAr: "اضطراب وراثي يسبب تراكم مخاط سميك ولزج في الرئتين والجهاز الهضمي مما يسبب التهابات متكررة.",
                    mimicNameEn: "Asthma / Recurrent Respiratory Infections", mimicNameAr: "الربو والتهابات الصدر المتكررة"
                }
            ]
        },
        "musculoskeletal": {
            icon: "🦴",
            nameEn: "Musculoskeletal Disorders",
            nameAr: "أمراض الجهاز العضلي الهيكلي",
            descEn: "Conditions affecting bones, soft connective tissues, ligaments, and joints.",
            descAr: "حالات تؤثر على العظام والأنسجة الضامة الرخوة والأربطة والمفاصل.",
            diseases: [
                {
                    id: "fop",
                    nameEn: "Fibrodysplasia Ossificans Progressiva (FOP)", nameAr: "خلل التعظم الليفي المترقي (FOP)",
                    tagEn: "Heterotopic Ossification", tagAr: "تعظم شاذ",
                    descEn: "An ultra-rare disorder where muscles and soft tissues progressively transform into bone, preceded by malformed big toes from birth.",
                    descAr: "اضطراب نادر جداً تتحول فيه العضلات والأنسجة الرخوة تدريجياً إلى عظم حقيقي مع تشوه مميز بإصبع القدم منذ الولادة.",
                    mimicNameEn: "Ankylosing Spondylitis", mimicNameAr: "التهاب الفقار اللاصق"
                },
                {
                    id: "eds",
                    nameEn: "Ehlers-Danlos Syndromes (EDS)", nameAr: "متلازمات إهلرز-دانلوس (EDS)",
                    tagEn: "Connective Tissue", tagAr: "نسيج ضام",
                    descEn: "A group of inherited connective tissue conditions causing joint hypermobility, tissue fragility, easy bruising, and chronic pain.",
                    descAr: "مجموعة من الاضطرابات الوراثية للنسيج الضام تسبب فرط مرونة المفاصل وهشاشة الأنسجة وسهولة الكدمات.",
                    mimicNameEn: "Fibromyalgia", mimicNameAr: "الفيبروميالجيا"
                }
            ]
        },
        "blood-disorders": {
            icon: "🩸",
            nameEn: "Blood Disorders",
            nameAr: "اضطرابات الدم",
            descEn: "Rare hematological conditions affecting hemoglobin, red cells, clotting, and bone marrow function.",
            descAr: "حالات دموية نادرة تصيب الهيموجلوبين وخلايا الدم الحمراء وعوامل التخثر ووظائف نخاع العظم.",
            diseases: [
                {
                    id: "sickleCell",
                    nameEn: "Sickle Cell Disease", nameAr: "مرض الخلايا المنجلية",
                    tagEn: "Hemoglobinopathy", tagAr: "اعتلال الهيموجلوبين",
                    descEn: "An inherited red blood cell disorder leading to sickle-shaped erythrocytes, painful vaso-occlusive crises, and chronic hemolysis.",
                    descAr: "اضطراب وراثي في كريات الدم الحمراء يؤدي لتمنجلها مسبباً نوبات ألم شديدة وتكسيراً مزمناً للدم.",
                    mimicNameEn: "Thalassemia", mimicNameAr: "الثلاسيميا"
                },
                {
                    id: "pnh",
                    nameEn: "Paroxysmal Nocturnal Hemoglobinuria (PNH)", nameAr: "بيلة الهيموجلوبين الليلية الانتيابية (PNH)",
                    tagEn: "Complement Mediated", tagAr: "خلل المتممة",
                    descEn: "A rare acquired clonal hematopoietic disorder causing complement-mediated hemolysis, dark morning urine, and dangerous thrombosis.",
                    descAr: "اضطراب دموي مكتسب يؤدي لتدمير خلايا الدم بواسطة نظام المتممة وظهور بول داكن صباحاً والجلطات.",
                    mimicNameEn: "Aplastic Anemia", mimicNameAr: "فقر الدم اللاتنسجي"
                }
            ]
        },
        "vision-hearing": {
            icon: "👁️",
            nameEn: "Vision & Hearing Disorders",
            nameAr: "اضطرابات البصر والسمع",
            descEn: "Rare inherited conditions impacting sensory organs, retinal degeneration, and auditory pathways.",
            descAr: "حالات وراثية نادرة تؤثر على الحواس وتدهور شبكية العين ومسارات السمع العصبية.",
            diseases: [
                {
                    id: "usher",
                    nameEn: "Usher Syndrome", nameAr: "متلازمة أشر",
                    tagEn: "Sensorineural & Retinal", tagAr: "سمعي بصري وراثي",
                    descEn: "An inherited disorder characterized by sensorineural hearing loss coupled with progressive retinitis pigmentosa leading to tunnel vision.",
                    descAr: "اضطراب وراثي يجمع بين فقدان السمع الحسي العصبي وتدهور تدريجي في شبكية العين مسبباً ضيق مجال الرؤية.",
                    mimicNameEn: "Isolated Hearing Loss / Retinal Disorders", mimicNameAr: "فقدان السمع المنفصل أو اعتلال الشبكية"
                }
            ]
        },
        "genetic-syndromes": {
            icon: "🧒",
            nameEn: "Genetic Syndromes",
            nameAr: "المتلازمات الوراثية",
            descEn: "Chromosomal and multi-system conditions present from birth that affect cognitive and physical development.",
            descAr: "حالات وراثية وصبغية تظهر منذ الولادة وتؤثر على التطور المعرفي والبدني للطفل.",
            diseases: [
                {
                    id: "angelman",
                    nameEn: "Angelman Syndrome", nameAr: "متلازمة أنجلمان",
                    tagEn: "15q11-q13 / UBE3A", tagAr: "خلل جيني 15q11",
                    descEn: "A rare neurogenetic condition characterized by severe speech impairment, unsteady jerky gait, seizures, and characteristic frequent laughter.",
                    descAr: "اضطراب عصبي جيني نادر يتميز بانعدام الكلام وصعوبات التوازن والمشي والتشنجات والابتسام المتكرر.",
                    mimicNameEn: "Autism Spectrum Disorder (ASD)", mimicNameAr: "اضطراب طيف التوحد"
                }
            ]
        },
        "skin-disorders": {
            icon: "🧴",
            nameEn: "Rare Skin Disorders",
            nameAr: "الأمراض الجلدية النادرة",
            descEn: "Inherited dermatological diseases causing extreme tissue fragility, blistering, and mucosal disruption.",
            descAr: "أمراض جلدية وراثية تسبب هشاشة فائقة للجلد وظهور فقاعات متكررة عند أقل احتكاك.",
            diseases: [
                {
                    id: "eb",
                    nameEn: "Epidermolysis Bullosa (EB)", nameAr: "انحلال البشرة الفقاعي (EB)",
                    tagEn: "Fragile Skin", tagAr: "أطفال الفراشة",
                    descEn: "A cluster of genetic conditions making skin as delicate as a butterfly's wing, with painful blisters forming from the slightest friction.",
                    descAr: "مجموعة من الاضطرابات الجينية تجعل الجلد شديد الهشاشة كأجنحة الفراشة وتظهر فقاعات مؤلمة بأقل ملامسة.",
                    mimicNameEn: "Eczema / Impetigo", mimicNameAr: "الإكزيما والقوباء الجلدية"
                }
            ]
        },
        "digestive-kidney": {
            icon: "🩺",
            nameEn: "Digestive & Kidney Conditions",
            nameAr: "أمراض الجهاز الهضمي والكلى",
            descEn: "Metabolic and organ-specific conditions causing heavy metal accumulation and organ dysfunction.",
            descAr: "أمراض استقلابية تسبب تراكم العناصر والمعادن وخلل وظائف الكبد والأمعاء والكليتين.",
            diseases: [
                {
                    id: "wilson",
                    nameEn: "Wilson Disease", nameAr: "مرض ويلسون",
                    tagEn: "ATP7B Copper", tagAr: "تراكم النحاس",
                    descEn: "A genetic disorder causing excessive toxic copper accumulation in the liver, brain, and cornea (Kayser-Fleischer rings).",
                    descAr: "اضطراب وراثي يسبب تراكم النحاس السام في الكبد والدماغ وقرنية العين مسبباً مشاكل حركية وكبدية.",
                    mimicNameEn: "Parkinsonism", mimicNameAr: "الباركنسونية واضطرابات الحركة"
                }
            ]
        }
    };

    /* ---------------------------------------------------------
       4. DOM ELEMENTS
    --------------------------------------------------------- */
    const langBtn = document.getElementById("langBtn");
    const langBtnText = document.getElementById("langBtnText");
    const mobileMenuToggle = document.getElementById("mobileMenuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const categoryCards = document.querySelectorAll(".category-card");

    const categoryModal = document.getElementById("categoryModal");
    const categoryModalBackdrop = document.getElementById("categoryModalBackdrop");
    const categoryModalClose = document.getElementById("categoryModalClose");
    const catModalIcon = document.getElementById("catModalIcon");
    const catModalTitle = document.getElementById("catModalTitle");
    const catModalSubtitle = document.getElementById("catModalSubtitle");
    const catModalBody = document.getElementById("categoryModalBody");
    const catModalCount = document.getElementById("catModalCount");
    const catModalCompareAll = document.getElementById("catModalCompareAll");

    const searchChip = document.getElementById("searchChip");
    const searchModal = document.getElementById("searchModal");
    const searchModalClose = document.getElementById("searchModalClose");
    const searchModalBackdrop = document.getElementById("searchModalBackdrop");
    const diseaseSearchInput = document.getElementById("diseaseSearchInput");
    const searchResultsList = document.getElementById("searchResultsList");
    const searchTags = document.querySelectorAll(".search-tag");

    let openCategorySlug = null;

    /* ---------------------------------------------------------
       5. NAV LINKS -> LAST VIEWED DISEASE
    --------------------------------------------------------- */
    function updateDiseaseNavLinks() {
        let last = null;
        try { last = localStorage.getItem("rde-last-disease"); } catch (e) {}
        if (!last) return;

        const journeyUrl = "disease.html?disease=" + encodeURIComponent(last);
        const sourcesUrl = journeyUrl + "#sources";

        document.querySelectorAll('[data-nav="journey"], [data-disease-link="journey"]').forEach(function (a) {
            a.href = journeyUrl;
        });
        document.querySelectorAll('[data-nav="resources"], [data-disease-link="resources"]').forEach(function (a) {
            a.href = sourcesUrl;
        });
    }

    /* ---------------------------------------------------------
       6. LANGUAGE SWITCHER
    --------------------------------------------------------- */
    function applyLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem("rde-language", lang);

        const dict = translations[lang] || translations.en;
        const isAr = lang === "ar";

        document.documentElement.lang = lang;
        document.documentElement.dir = isAr ? "rtl" : "ltr";
        document.body.classList.toggle("rtl", isAr);

        if (langBtnText) langBtnText.textContent = dict.langBtnText;

        document.querySelectorAll("[data-i18n]").forEach(function (elem) {
            const key = elem.getAttribute("data-i18n");
            if (dict[key]) elem.innerHTML = dict[key];
        });

        document.querySelectorAll("[data-nav]").forEach(function (link) {
            const navKey = link.getAttribute("data-nav");
            const mapKey = "nav" + navKey.charAt(0).toUpperCase() + navKey.slice(1);
            if (dict[mapKey]) link.textContent = dict[mapKey];
        });

        if (diseaseSearchInput) diseaseSearchInput.placeholder = dict.searchPlaceholder;
        updateSearchTagLabels();

        // Re-render open modals in the new language
        if (openCategorySlug) openCategoryModal(openCategorySlug);
        if (searchModal && searchModal.classList.contains("is-active") && diseaseSearchInput) {
            renderSearchResults(diseaseSearchInput.value.trim());
        }
    }

    if (langBtn) {
        langBtn.addEventListener("click", function () {
            applyLanguage(currentLanguage === "en" ? "ar" : "en");
        });
    }

    /* ---------------------------------------------------------
       7. CATEGORY MODAL
       Lists the diseases in the category. Each disease has:
       - Explore Disease Journey  -> disease.html?disease=<id>
       - Compare with Common Mimic -> diseases-comparison.html?disease=<id>
    --------------------------------------------------------- */
    function openCategoryModal(categorySlug) {
        if (!categoryModal || !categoryInfo[categorySlug]) return;

        openCategorySlug = categorySlug;

        const info = categoryInfo[categorySlug];
        const isAr = currentLanguage === "ar";
        const dict = translations[currentLanguage] || translations.en;

        if (catModalIcon) catModalIcon.innerHTML = info.icon;
        if (catModalTitle) catModalTitle.textContent = isAr ? info.nameAr : info.nameEn;
        if (catModalSubtitle) catModalSubtitle.textContent = isAr ? info.descAr : info.descEn;
        if (catModalCount) catModalCount.textContent = info.diseases.length + " " + dict.conditionsCountWord;
        if (catModalCompareAll) {
            catModalCompareAll.href = "diseases-comparison.html?category=" + encodeURIComponent(categorySlug);
        }

        const viewAllLabel = catModalCompareAll && catModalCompareAll.querySelector("span");
        if (viewAllLabel) viewAllLabel.textContent = dict.viewAllInComparison;

        if (catModalBody) {
            catModalBody.innerHTML = "";

            info.diseases.forEach(function (dis) {
                const diseaseName = isAr ? dis.nameAr : dis.nameEn;
                const diseaseDesc = isAr ? dis.descAr : dis.descEn;
                const diseaseTag = isAr ? dis.tagAr : dis.tagEn;
                const mimicName = isAr ? dis.mimicNameAr : dis.mimicNameEn;

                const cardElem = document.createElement("article");
                cardElem.className = "cat-disease-card";
                cardElem.innerHTML = `
                    <div class="cat-disease-card__header">
                        <h4 class="cat-disease-card__name">${diseaseName}</h4>
                        <span class="cat-disease-card__tag">${diseaseTag}</span>
                    </div>
                    <p class="cat-disease-card__desc">${diseaseDesc}</p>
                    <div class="cat-disease-card__actions">
                        <a href="disease.html?disease=${encodeURIComponent(dis.id)}" class="cat-btn-journey" data-disease-id="${dis.id}">
                            <i class="fa-solid fa-route" aria-hidden="true"></i>
                            <span>${dict.btnExploreJourney}</span>
                        </a>
                        <a href="diseases-comparison.html?disease=${encodeURIComponent(dis.id)}" class="cat-btn-compare" data-disease-id="${dis.id}">
                            <i class="fa-solid fa-code-compare" aria-hidden="true"></i>
                            <span>${dict.btnCompareMimic}: ${mimicName}</span>
                        </a>
                    </div>
                `;
                catModalBody.appendChild(cardElem);
            });

            // Remember the disease the user is interested in
            catModalBody.querySelectorAll("a[data-disease-id]").forEach(function (a) {
                a.addEventListener("click", function () {
                    try { localStorage.setItem("rde-last-disease", a.getAttribute("data-disease-id")); } catch (e) {}
                });
            });
        }

        categoryModal.classList.add("is-active");
        categoryModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeCategoryModal() {
        if (!categoryModal) return;
        openCategorySlug = null;
        categoryModal.classList.remove("is-active");
        categoryModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    categoryCards.forEach(function (card) {
        card.addEventListener("click", function () {
            openCategoryModal(this.getAttribute("data-category"));
        });
        card.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openCategoryModal(this.getAttribute("data-category"));
            }
        });
    });

    if (categoryModalClose) categoryModalClose.addEventListener("click", closeCategoryModal);
    if (categoryModalBackdrop) categoryModalBackdrop.addEventListener("click", closeCategoryModal);

    /* ---------------------------------------------------------
       8. MOBILE MENU
    --------------------------------------------------------- */
    function setMobileMenu(open) {
        if (!mobileMenu || !mobileMenuToggle) return;
        mobileMenu.classList.toggle("is-open", open);
        mobileMenuToggle.setAttribute("aria-expanded", open ? "true" : "false");
        mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
        const icon = mobileMenuToggle.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-bars", !open);
            icon.classList.toggle("fa-xmark", open);
        }
    }

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener("click", function () {
            setMobileMenu(!mobileMenu.classList.contains("is-open"));
        });

        document.addEventListener("click", function (event) {
            if (!mobileMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                setMobileMenu(false);
            }
        });
    }

    /* ---------------------------------------------------------
       9. QUICK SEARCH MODAL
    --------------------------------------------------------- */
    const allSearchableDiseases = [
        { id: "rett", nameEn: "Rett Syndrome", nameAr: "متلازمة ريت", catEn: "Neurological", catAr: "الجهاز العصبي" },
        { id: "huntington", nameEn: "Huntington's Disease", nameAr: "مرض هنتنغتون", catEn: "Neurological", catAr: "الجهاز العصبي" },
        { id: "wilson", nameEn: "Wilson Disease", nameAr: "مرض ويلسون", catEn: "Digestive & Kidney", catAr: "الجهاز الهضمي والكلى" },
        { id: "gaucher", nameEn: "Gaucher Disease", nameAr: "مرض غوشيه", catEn: "Genetic & Metabolic", catAr: "الأمراض الجينية" },
        { id: "cysticFibrosis", nameEn: "Cystic Fibrosis", nameAr: "التليف الكيسي", catEn: "Respiratory", catAr: "الجهاز التنفسي" },
        { id: "fop", nameEn: "Fibrodysplasia Ossificans Progressiva (FOP)", nameAr: "خلل التعظم الليفي المترقي", catEn: "Musculoskeletal", catAr: "العظام والمفاصل" },
        { id: "eds", nameEn: "Ehlers-Danlos Syndromes (EDS)", nameAr: "متلازمات إهلرز-دانلوس", catEn: "Musculoskeletal", catAr: "العظام والمفاصل" },
        { id: "sickleCell", nameEn: "Sickle Cell Disease", nameAr: "مرض الخلايا المنجلية", catEn: "Blood Disorders", catAr: "اضطرابات الدم" },
        { id: "pnh", nameEn: "Paroxysmal Nocturnal Hemoglobinuria (PNH)", nameAr: "بيلة الهيموجلوبين الليلية الانتيابية", catEn: "Blood Disorders", catAr: "اضطرابات الدم" },
        { id: "usher", nameEn: "Usher Syndrome", nameAr: "متلازمة أشر", catEn: "Vision & Hearing", catAr: "البصر والسمع" },
        { id: "angelman", nameEn: "Angelman Syndrome", nameAr: "متلازمة أنجلمان", catEn: "Genetic Syndromes", catAr: "المتلازمات الوراثية" },
        { id: "eb", nameEn: "Epidermolysis Bullosa (EB)", nameAr: "انحلال البشرة الفقاعي", catEn: "Skin Disorders", catAr: "الأمراض الجلدية" }
    ];

    // Extra search keywords (symptoms / genes) so people can search by symptom too
    const searchKeywords = {
        rett: { en: "girls MECP2 regression hand movements speech loss seizures autism", ar: "بنات تراجع المهارات حركات اليدين فقدان الكلام تشنجات توحد" },
        huntington: { en: "chorea involuntary movements HTT cognitive behavior inherited parkinson", ar: "حركات لا إرادية رقص عته سلوك وراثي باركنسون" },
        wilson: { en: "copper liver ATP7B tremor Kayser-Fleischer rings parkinsonism", ar: "نحاس كبد رعشة حلقات كايزر فلايشر" },
        gaucher: { en: "spleen liver enlarged anemia bone pain platelets enzyme leukemia", ar: "طحال كبد تضخم فقر الدم ألم العظام صفائح إنزيم" },
        cysticFibrosis: { en: "CFTR mucus lungs cough sweat chloride digestion asthma infections", ar: "مخاط رئتين سعال عرق كلوريد هضم ربو التهابات" },
        fop: { en: "bone muscle ossification stiffness big toe ACVR1 swelling", ar: "عظام عضلات تعظم تيبس إصبع القدم تورم" },
        eds: { en: "joint hypermobility skin stretchy bruising collagen fibromyalgia pain", ar: "مفاصل مرونة جلد كدمات كولاجين ألم" },
        sickleCell: { en: "anemia pain crisis hemoglobin sickle HBB thalassemia", ar: "فقر الدم نوبات ألم هيموجلوبين منجلية ثلاسيميا" },
        pnh: { en: "hemolysis dark urine clots complement PIGA aplastic anemia fatigue", ar: "بول داكن جلطات تكسير الدم إرهاق فقر الدم" },
        usher: { en: "hearing loss vision night blindness retina balance deaf blind", ar: "سمع بصر عمى ليلي شبكية توازن صمم" },
        angelman: { en: "speech seizures balance happy laughter UBE3A sleep autism", ar: "كلام تشنجات توازن ضحك نوم توحد" },
        eb: { en: "skin blisters fragile wounds friction butterfly eczema", ar: "جلد فقاعات هشاشة جروح احتكاك إكزيما" }
    };

    function openSearchModal() {
        if (!searchModal) return;
        searchModal.classList.add("is-active");
        searchModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        if (diseaseSearchInput) {
            setTimeout(function () {
                diseaseSearchInput.focus();
                renderSearchResults(diseaseSearchInput.value.trim());
            }, 100);
        }
    }

    function closeSearchModal() {
        if (!searchModal) return;
        searchModal.classList.remove("is-active");
        searchModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    function renderSearchResults(query) {
        if (!searchResultsList) return;
        searchResultsList.innerHTML = "";

        const isAr = currentLanguage === "ar";
        const dict = translations[currentLanguage] || translations.en;
        const q = query.toLowerCase();

        // Search in the displayed language: disease name, category, mimic and symptom keywords
        const filtered = allSearchableDiseases.filter(function (item) {
            if (!q) return true;
            const lang = isAr ? "ar" : "en";
            const kws = (searchKeywords[item.id] && searchKeywords[item.id][lang]) || "";
            const haystack = [
                isAr ? item.nameAr : item.nameEn,
                isAr ? item.catAr : item.catEn,
                kws
            ].join(" ").toLowerCase();
            return haystack.includes(q);
        });

        if (filtered.length === 0) {
            const noRes = document.createElement("div");
            noRes.className = "search-result-item";
            noRes.style.cursor = "default";
            noRes.textContent = dict.noResults;
            searchResultsList.appendChild(noRes);
            return;
        }

        filtered.forEach(function (item) {
            const itemElem = document.createElement("div");
            itemElem.className = "search-result-item";
            itemElem.setAttribute("role", "option");
            itemElem.tabIndex = 0;

            itemElem.innerHTML = `
                <span class="search-result-item__name">${isAr ? item.nameAr : item.nameEn}</span>
                <span class="search-result-item__cat">${isAr ? item.catAr : item.catEn}</span>
            `;

            function navigate() {
                try { localStorage.setItem("rde-last-disease", item.id); } catch (e) {}
                window.location.href = "disease.html?disease=" + encodeURIComponent(item.id);
            }

            itemElem.addEventListener("click", navigate);
            itemElem.addEventListener("keydown", function (e) {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    navigate();
                }
            });

            searchResultsList.appendChild(itemElem);
        });
    }

    if (searchChip) searchChip.addEventListener("click", openSearchModal);
    if (searchModalClose) searchModalClose.addEventListener("click", closeSearchModal);
    if (searchModalBackdrop) searchModalBackdrop.addEventListener("click", closeSearchModal);

    if (diseaseSearchInput) {
        diseaseSearchInput.addEventListener("input", function () {
            renderSearchResults(this.value.trim());
        });
    }

    function diseaseNameById(id) {
        const item = allSearchableDiseases.find(function (d) { return d.id === id; });
        if (!item) return "";
        return currentLanguage === "ar" ? item.nameAr : item.nameEn;
    }

    function updateSearchTagLabels() {
        searchTags.forEach(function (tag) {
            const full = diseaseNameById(tag.getAttribute("data-disease-id"));
            if (full) tag.textContent = full.replace(/\s*\(.*\)$/, "");
        });
    }

    searchTags.forEach(function (tag) {
        tag.addEventListener("click", function () {
            const term = this.textContent.trim();
            if (diseaseSearchInput) {
                diseaseSearchInput.value = term;
                renderSearchResults(term);
            }
        });
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            if (searchModal && searchModal.classList.contains("is-active")) closeSearchModal();
            if (categoryModal && categoryModal.classList.contains("is-active")) closeCategoryModal();
        }
    });

    /* ---------------------------------------------------------
       10. INIT
    --------------------------------------------------------- */
    applyLanguage(currentLanguage);
    updateDiseaseNavLinks();

})();