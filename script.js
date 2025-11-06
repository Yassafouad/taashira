// ===== Language Data =====
const translations = {
    ar: {
        'nav.about': 'حول السعودية',
        'nav.travel': 'دليل السفر',
        'nav.transport': 'المواصلات',
        'nav.visa': 'التأشيرة',
        'nav.register': 'التسجيل',
        'hero.badge': 'اكتشف المملكة',
        'hero.title': 'دليل السفر إلى السعودية',
        'hero.subtitle': '',
        'hero.description': 'افتتحت المملكة العربية السعودية أبوابها للسياحة الترفيهية في عام 2019، لتصبح واحدة من آخر الحدود التي يمكن للمسافرين الشغوفين اكتشافها.',
        'hero.cta': 'سجّل الآن',
        'hero.learn': 'اعرف المزيد',
        'hero.stat1': 'كم من السواحل',
        'hero.stat2': 'أكبر دولة في العالم',
        'hero.stat3': 'دولة مؤهلة للتأشيرة',
        'about.title': 'حول المملكة العربية السعودية',
        'about.card1.title': 'أرض التنوع',
        'about.card1.text': 'تتميز المملكة العربية السعودية بتنوع جغرافي فريد يمتد من الصحاري الذهبية إلى الجبال الشاهقة والشواطئ البكر. اكتشف المناظر الطبيعية المذهلة التي تنتظرك في كل ركن من أركان المملكة.',
        'about.card2.title': 'تراث ثقافي غني',
        'about.card2.text': 'تاريخ المملكة يمتد إلى فجر الحضارة الإنسانية. من المواقع الأثرية القديمة إلى المعالم الحديثة، اكتشف ثقافة غنية تجمع بين التقاليد الأصيلة والابتكار المعاصر.',
        'about.card3.title': 'مدن حديثة ومتطورة',
        'about.card3.text': 'استمتع بالمدن الحديثة التي تجمع بين الهندسة المعمارية المبتكرة والثقافة التقليدية. من الرياض إلى جدة، كل مدينة لها قصتها الفريدة لتخبرها.',
        'about.card4.title': 'الضيافة السعودية',
        'about.card4.text': 'استمتع بالضيافة السعودية الأصيلة حيث يكون الترحيب بالزوار تقليدًا عريقًا. تجربة ثقافية أصيلة تنتظرك في كل محطة من رحلتك.',
        'travel.title': 'دليل التخطيط لرحلتك',
        'travel.card1.title': 'أفضل وقت للزيارة',
        'travel.card1.text': 'يمكن للسياح الاستمتاع بالمدينة خلال الشتاء أو استكشاف الجبال في الصيف – هناك دائمًا شيء رائع للقيام به. الفترة من أكتوبر إلى أبريل هي الأفضل للزيارة مع مناخ معتدل ومريح.',
        'travel.card2.title': 'نصائح للمسافرين',
        'travel.card2.text': 'تأكد من احترام الثقافة والتقاليد المحلية. ارتداء ملابس محتشمة في المناطق العامة، واحترام أوقات الصلاة، والتذوق من المأكولات المحلية المتنوعة.',
        'travel.card3.title': 'التخطيط لرحلتك',
        'travel.card3.text': 'ابدأ بالتخطيط المسبق لرحلتك. استكشف الوجهات المختلفة، احجز الإقامة مسبقًا، وخطط لزيارة المعالم السياحية الرئيسية. استخدم أدوات التخطيط المتاحة عبر الإنترنت.',
        'travel.card4.title': 'وجهات لا تُفوت',
        'travel.card4.text': 'من البلد القديم في الرياض إلى الواجهة البحرية في جدة، ومن المواقع الأثرية في العلا إلى شواطئ البحر الأحمر، اكتشف الوجهات التي تجعل من رحلتك تجربة لا تُنسى.',
        'transport.title': 'دليل المواصلات في السعودية',
        'transport.card1.title': 'السفر الجوي',
        'transport.card1.text': 'تربط المملكة العربية السعودية شبكة واسعة من المطارات الدولية والمحلية. المطارات الرئيسية في الرياض وجدة والدمام تربطك بالعالم وتوفر رحلات داخلية إلى جميع أنحاء المملكة.',
        'transport.card2.title': 'تأجير السيارات',
        'transport.card2.text': 'توفر المملكة خدمات تأجير سيارات حديثة وموثوقة. يمكنك استئجار سيارة من المطارات أو في المدن الرئيسية. تأكد من حمل رخصة قيادة دولية صالحة.',
        'transport.card3.title': 'المترو والنقل العام',
        'transport.card3.text': 'تتوفر أنظمة مترو حديثة في الرياض ومكة المكرمة. بالإضافة إلى ذلك، شبكة واسعة من الحافلات وسيارات الأجرة تغطي جميع أنحاء المدن الرئيسية.',
        'transport.card4.title': 'الحافلات بين المدن',
        'transport.card4.text': 'تربط الحافلات بين المدن الرئيسية في المملكة بخدمات مريحة واقتصادية. يمكنك الحجز مسبقًا عبر الإنترنت أو في محطات الحافلات.',
        'visa.title': 'التأشيرة والأسئلة الشائعة',
        'visa.faq1.question': 'ما هي التأشيرة الإلكترونية السعودية؟',
        'visa.faq1.answer': 'تفتح المملكة العربية السعودية أبوابها للعالم من خلال تأشيرتها السياحية الجديدة. من خلال البوابة الإلكترونية السريعة وسهلة الاستخدام، يمكن للزوار الدوليين من 66 دولة مؤهلة التقدم للحصول على تأشيرة إلكترونية واكتشاف الضيافة الدافئة للشعب السعودي. التأشيرة الإلكترونية صالحة لمدة عام واحد من تاريخ الإصدار وتسمح بإقامة متعددة تصل إلى 90 يومًا في كل زيارة.',
        'visa.faq2.question': 'ما هي الدول المؤهلة للحصول على التأشيرة الإلكترونية؟',
        'visa.faq2.answer': 'يمكن للمواطنين من 66 دولة التقدم بطلب للحصول على التأشيرة الإلكترونية السياحية. تشمل القائمة معظم دول الاتحاد الأوروبي، والولايات المتحدة، وكندا، وأستراليا، واليابان، والعديد من الدول الأخرى. يمكنك التحقق من القائمة الكاملة على الموقع الرسمي.',
        'visa.faq3.question': 'كم تستغرق معالجة التأشيرة الإلكترونية؟',
        'visa.faq3.answer': 'عادة ما يتم معالجة التأشيرة الإلكترونية في غضون 5-30 دقيقة بعد تقديم الطلب. ومع ذلك، قد تستغرق بعض الطلبات وقتًا أطول للتحقق. يُنصح بالتقديم مسبقًا قبل السفر بوقت كافٍ.',
        'visa.faq4.question': 'ما هي متطلبات الحصول على التأشيرة؟',
        'visa.faq4.answer': 'المتطلبات الأساسية تشمل جواز سفر صالح لمدة ستة أشهر على الأقل، وبيانات شخصية، ودفع رسوم التأشيرة. قد يُطلب منك أيضًا تقديم معلومات إضافية حسب جنسيتك. تأكد من أن جميع المستندات صحيحة ومحدثة.',
        'visa.faq5.question': 'هل يمكنني استخدام التأشيرة الإلكترونية لدخول متعدد؟',
        'visa.faq5.answer': 'نعم، التأشيرة الإلكترونية السياحية تسمح بدخول متعدد خلال فترة صلاحيتها التي تصل إلى عام واحد. يمكنك البقاء لمدة تصل إلى 90 يومًا في كل زيارة، مع إجمالي 180 يومًا في السنة.',
        'register.title': 'سجّل الآن للحصول على دليل شامل لرحلتك إلى السعودية',
        'register.subtitle': 'املأ النموذج أدناه للحصول على دليل شامل ومعلومات محدثة حول رحلتك إلى المملكة العربية السعودية.',
        'register.placeholder': 'سيتم إضافة نموذج Zoho هنا',
        'register.placeholder-note': 'Zoho form embed code will be provided by client',
        'footer.company': 'فنادقي MyHotels.SA',
        'footer.quickLinks': 'روابط سريعة',
        'footer.follow': 'تابعنا',
        'footer.website': 'الموقع',
        'footer.facebook': 'فيسبوك',
        'footer.instagram': 'إنستغرام',
        'footer.twitter': 'تويتر/إكس',
        'footer.youtube': 'يوتيوب',
        'footer.linkedin': 'لينكدإن',
        'footer.contact': 'اتصل بنا',
        'footer.phone': '+966 920 033 025',
        'footer.email': 'CC@MyHotels.SA',
        'footer.address': 'جدة، المملكة العربية السعودية',
        'footer.download': 'حمل التطبيق',
        'footer.appStore': 'حمل من App Store',
        'footer.googlePlay': 'حمل من Google Play',
        'footer.copyright': '© 2025 جميع الحقوق محفوظة | All rights reserved'
    },
    en: {
        'nav.about': 'About',
        'nav.travel': 'Travel Guide',
        'nav.transport': 'Transportation',
        'nav.visa': 'Visa',
        'nav.register': 'Registration',
        'hero.badge': 'Discover the Kingdom',
        'hero.title': 'Travel Guide to Saudi Arabia',
        'hero.subtitle': '',
        'hero.description': 'Recently opening its doors to leisure tourism in 2019, the Kingdom of Saudi Arabia has become one of the last frontiers for passionate travelers to discover.',
        'hero.cta': 'Register Now',
        'hero.learn': 'Learn More',
        'hero.stat1': 'km of Coastline',
        'hero.stat2': 'Largest Country in the World',
        'hero.stat3': 'Eligible Countries for Visa',
        'about.title': 'About Saudi Arabia',
        'about.card1.title': 'Land of Diversity',
        'about.card1.text': 'Saudi Arabia features a unique geographical diversity extending from golden deserts to towering mountains and pristine beaches. Discover the stunning landscapes that await you in every corner of the Kingdom.',
        'about.card2.title': 'Rich Cultural Heritage',
        'about.card2.text': 'The Kingdom\'s history stretches back to the dawn of human civilization. From ancient archaeological sites to modern landmarks, discover a rich culture that combines authentic traditions with contemporary innovation.',
        'about.card3.title': 'Modern Cities',
        'about.card3.text': 'Enjoy modern cities that blend innovative architecture with traditional culture. From Riyadh to Jeddah, each city has its unique story to tell.',
        'about.card4.title': 'Saudi Hospitality',
        'about.card4.text': 'Experience authentic Saudi hospitality where welcoming visitors is a time-honored tradition. An authentic cultural experience awaits you at every stop on your journey.',
        'travel.title': 'Travel Planning Guide',
        'travel.card1.title': 'Best Time to Visit',
        'travel.card1.text': 'Tourists can revel in the city during winter or explore the mountains in the summer – there is always something wondrous to do. The period from October to April is best for visiting with a mild and comfortable climate.',
        'travel.card2.title': 'Travel Tips',
        'travel.card2.text': 'Make sure to respect the local culture and traditions. Dress modestly in public areas, respect prayer times, and sample the diverse local cuisine.',
        'travel.card3.title': 'Planning Your Trip',
        'travel.card3.text': 'Start by planning your trip in advance. Explore different destinations, book accommodation in advance, and plan visits to major tourist attractions. Use online planning tools available.',
        'travel.card4.title': 'Must-Visit Destinations',
        'travel.card4.text': 'From the Old Town in Riyadh to the waterfront in Jeddah, and from archaeological sites in Al-Ula to Red Sea beaches, discover destinations that make your trip an unforgettable experience.',
        'transport.title': 'Getting Around Saudi Arabia',
        'transport.card1.title': 'Air Travel',
        'transport.card1.text': 'Saudi Arabia connects through an extensive network of international and domestic airports. Major airports in Riyadh, Jeddah, and Dammam connect you to the world and provide domestic flights throughout the Kingdom.',
        'transport.card2.title': 'Car Rental',
        'transport.card2.text': 'The Kingdom offers modern and reliable car rental services. You can rent a car from airports or in major cities. Make sure to carry a valid international driving license.',
        'transport.card3.title': 'Metro & Public Transport',
        'transport.card3.text': 'Modern metro systems are available in Riyadh and Mecca. In addition, an extensive network of buses and taxis covers all major cities.',
        'transport.card4.title': 'Intercity Buses',
        'transport.card4.text': 'Buses connect major cities in the Kingdom with comfortable and economical services. You can book in advance online or at bus stations.',
        'visa.title': 'Visa & FAQs',
        'visa.faq1.question': 'What is the Saudi eVisa?',
        'visa.faq1.answer': 'Saudi Arabia is opening its doors to the world through its new tourist visa. Through the fast and easy-to-use online portal, international visitors from 66 eligible countries can apply for an eVisa and discover the warm hospitality of Saudi people. The eVisa is valid for one year from the date of issue and allows multiple stays of up to 90 days per visit.',
        'visa.faq2.question': 'Which countries are eligible for the eVisa?',
        'visa.faq2.answer': 'Citizens from 66 countries can apply for the tourist eVisa. The list includes most EU countries, the United States, Canada, Australia, Japan, and many other countries. You can check the complete list on the official website.',
        'visa.faq3.question': 'How long does eVisa processing take?',
        'visa.faq3.answer': 'eVisa processing usually takes 5-30 minutes after submitting the application. However, some applications may take longer for verification. It is recommended to apply well in advance of your travel date.',
        'visa.faq4.question': 'What are the visa requirements?',
        'visa.faq4.answer': 'Basic requirements include a passport valid for at least six months, personal information, and payment of visa fees. You may also be required to provide additional information depending on your nationality. Make sure all documents are correct and up to date.',
        'visa.faq5.question': 'Can I use the eVisa for multiple entries?',
        'visa.faq5.answer': 'Yes, the tourist eVisa allows multiple entries during its validity period of up to one year. You can stay up to 90 days per visit, with a total of 180 days per year.',
        'register.title': 'Register Now for a Comprehensive Guide to Your Trip to Saudi Arabia',
        'register.subtitle': 'Fill out the form below to receive a comprehensive guide and updated information about your trip to Saudi Arabia.',
        'register.placeholder': 'Zoho form will be added here',
        'register.placeholder-note': 'Zoho form embed code will be provided by client',
        'footer.company': 'MyHotels.SA فنادقي',
        'footer.quickLinks': 'Quick Links',
        'footer.follow': 'Follow Us',
        'footer.website': 'Website',
        'footer.facebook': 'Facebook',
        'footer.instagram': 'Instagram',
        'footer.twitter': 'Twitter/X',
        'footer.youtube': 'YouTube',
        'footer.linkedin': 'LinkedIn',
        'footer.contact': 'Contact Us',
        'footer.phone': '+966 920 033 025',
        'footer.email': 'CC@MyHotels.SA',
        'footer.address': 'Jeddah, Saudi Arabia',
        'footer.download': 'Download Our App',
        'footer.appStore': 'Download from App Store',
        'footer.googlePlay': 'Download from Google Play',
        'footer.copyright': '© 2025 All rights reserved | جميع الحقوق محفوظة'
    }
};

// ===== Current Language =====
let currentLang = localStorage.getItem('language') || 'ar';

// ===== Initialize Page =====
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeNavigation();
    initializeFAQ();
    initializeScrollAnimations();
    initializeSmoothScroll();
    initializeCTA();
});

// ===== CTA Button =====
function initializeCTA() {
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            const registrationSection = document.getElementById('registration');
            if (registrationSection) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = registrationSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// ===== Language Functions =====
function initializeLanguage() {
    setLanguage(currentLang);
    
    // Language switcher buttons
    document.getElementById('lang-ar').addEventListener('click', () => setLanguage('ar'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML direction and lang attribute
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// ===== Navigation Functions =====
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    });
}

// ===== FAQ Accordion Functions =====
function initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// ===== Smooth Scroll Functions =====
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerHeight = document.getElementById('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ===== Scroll Animations =====
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    document.querySelectorAll('.about-card, .travel-card, .transport-card, .faq-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ===== Form Placeholder (for when Zoho form is added) =====
function addZohoForm(embedCode) {
    const placeholder = document.getElementById('zoho-form-placeholder');
    if (placeholder && embedCode) {
        placeholder.innerHTML = embedCode;
    }
}

