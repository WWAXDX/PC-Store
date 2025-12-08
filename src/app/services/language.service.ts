import { Injectable, signal } from '@angular/core';

export type Language = 'ar' | 'en';

export interface Translations {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLanguage = signal<Language>('en');
  
  private translations: Record<Language, Translations> = {
    en: {
      // Navbar
      'nav.pcParts': 'PC Parts',
      'nav.monitors': 'Monitors',
      'nav.chairs': 'Chairs',
      'nav.accessories': 'Accessories',
      'nav.search': 'Search for parts, monitors, accessories...',
      'nav.cart': 'Cart',
      'nav.login': 'Login',
      'nav.language': 'عربي',
      
      // Categories
      'category.graphicsCards': 'Graphics Cards (GPU)',
      'category.processors': 'Processors (CPU)',
      'category.memory': 'Memory (RAM)',
      'category.storage': 'Storage (SSD/HDD)',
      'category.motherboards': 'Motherboards',
      'category.powerSupplies': 'Power Supplies',
      'category.cases': 'Cases',
      'category.cpuCoolers': 'CPU Coolers',
      'category.gamingMonitors': 'Gaming Monitors',
      'category.4kMonitors': '4K Monitors',
      'category.ultrawideMonitors': 'Ultrawide Monitors',
      'category.professionalMonitors': 'Professional Monitors',
      'category.gamingChairs': 'Gaming Chairs',
      'category.officeChairs': 'Office Chairs',
      'category.ergonomicChairs': 'Ergonomic Chairs',
      'category.keyboards': 'Keyboards',
      'category.mice': 'Mice',
      'category.headsets': 'Headsets',
      'category.speakers': 'Speakers',
      'category.webcams': 'Webcams',
      'category.cables': 'Cables',
      'category.adapters': 'Adapters',
      'category.usbHubs': 'USB Hubs',
      'category.cleaningKits': 'Cleaning Kits',
      'category.thermalPaste': 'Thermal Paste',
      
      // Home Page
      'home.welcome': 'Build Your Dream PC',
      'home.title': 'PC Parts Store',
      'home.subtitle': 'SSD • RAM • GPU • CPU • Monitor and more',
      'home.shopNow': 'Shop Now',
      'home.categories': 'Shop by Category',
      'home.categoryGraphics': 'Graphics Cards',
      'home.categoryProcessors': 'Processors',
      'home.categoryMemory': 'Memory',
      'home.categoryStorage': 'Storage',
      'home.categoryMotherboards': 'Motherboards',
      'home.categoryKeyboards': 'Keyboards',
      'home.featuredProducts': 'Featured Products',
      'home.viewAll': 'View All',
      'home.viewDetails': 'View Details',
      'home.addToCart': 'Add to Cart',
      'home.sale': 'Sale',
      'home.features': 'Why Choose Us?',
      'home.ctaTitle': 'Ready to Build Your Dream PC?',
      'home.ctaSubtitle': 'Explore our wide selection of premium PC parts',
      'home.browseAll': 'Browse All Products',
      'home.feature1Title': 'Free Shipping',
      'home.feature1Desc': 'On orders over 500 SAR',
      'home.feature2Title': '24/7 Support',
      'home.feature2Desc': 'Expert help anytime',
      'home.feature3Title': 'Secure Payment',
      'home.feature3Desc': 'Safe & encrypted',
      'home.feature4Title': 'Warranty',
      'home.feature4Desc': 'Up to 3 years',
      
      // Cart
      'cart.title': 'Shopping Cart',
      'cart.empty': 'Your cart is empty',
      'cart.emptyDesc': 'Add some products to get started!',
      'cart.startShopping': 'Start Shopping',
      'cart.items': 'Cart Items',
      'cart.clear': 'Clear Cart',
      'cart.product': 'Product',
      'cart.price': 'Price',
      'cart.quantity': 'Quantity',
      'cart.total': 'Total',
      'cart.subtotal': 'Subtotal',
      'cart.itemsCount': 'items',
      'cart.discount': 'Discount',
      'cart.shipping': 'Shipping',
      'cart.free': 'Free',
      'cart.summary': 'Order Summary',
      'cart.grandTotal': 'Grand Total',
      'cart.checkout': 'Proceed to Checkout',
      'cart.continueShopping': 'Continue Shopping',
      'cart.remove': 'Remove',
      
      // Products
      'products.allProducts': 'All Products',
      'products.products': 'Products',
      'products.searchResults': 'Search results for',
      'products.sortBy': 'Sort by',
      'products.default': 'Default',
      'products.priceLowToHigh': 'Price: Low to High',
      'products.priceHighToLow': 'Price: High to Low',
      'products.nameAZ': 'Name: A - Z',
      'products.nameZA': 'Name: Z - A',
      'products.addToCart': 'Add to Cart',
      'products.noProducts': 'No products found in this category',
      'products.noProductsSearch': 'No products found for',
      
      // Product Details
      'productDetails.addToCart': 'Add to Cart',
      'productDetails.backToProducts': 'Back to Products',
      'productDetails.description': 'Product Description',
      'productDetails.keyFeatures': 'Key Features',
      'productDetails.save': 'Save',
      'productDetails.notFound': 'Product not found',
      
      // Login
      'login.signIn': 'Sign In',
      'login.createAccount': 'Create Account',
      'login.welcomeBack': 'Welcome Back!',
      'login.joinUs': 'Join Us Today!',
      'login.signInDesc': 'Sign in to access your account and continue shopping',
      'login.registerDesc': 'Create an account to start building your dream PC',
      'login.enterCredentials': 'Enter your credentials to access your account',
      'login.fillDetails': 'Fill in your details to get started',
      'login.email': 'Email Address',
      'login.password': 'Password',
      'login.confirmPassword': 'Confirm Password',
      'login.fullName': 'Full Name',
      'login.enterEmail': 'Enter your email',
      'login.enterPassword': 'Enter your password',
      'login.enterFullName': 'Enter your full name',
      'login.confirmPasswordPlaceholder': 'Confirm your password',
      'login.rememberMe': 'Remember me',
      'login.forgotPassword': 'Forgot Password?',
      'login.or': 'OR',
      'login.googleSignIn': 'Continue with Google',
      'login.facebookSignIn': 'Continue with Facebook',
      'login.noAccount': "Don't have an account?",
      'login.haveAccount': 'Already have an account?',
      'login.signUp': 'Sign Up',
      'login.signingIn': 'Signing In...',
      'login.creatingAccount': 'Creating Account...',
      'login.secureAndSafe': 'Secure & Safe',
      'login.fastDelivery': 'Fast Delivery',
      'login.bestPrices': 'Best Prices',
      'login.backToHome': 'Back to Home',
      
      // Common
      'common.sar': 'SAR',
      'common.search': 'Search',
      'common.loading': 'Loading...',
      'common.error': 'Error',
      'common.success': 'Success',
      
      // Footer
      'footer.copyright': '© 2025 PC Parts Store. All rights reserved.',
    },
    ar: {
      // Navbar
      'nav.pcParts': 'قطع الكمبيوتر',
      'nav.monitors': 'الشاشات',
      'nav.chairs': 'الكراسي',
      'nav.accessories': 'الإكسسوارات',
      'nav.search': 'ابحث عن قطع، شاشات، إكسسوارات...',
      'nav.cart': 'السلة',
      'nav.login': 'تسجيل الدخول',
      'nav.language': 'E',
      
      // Categories
      'category.graphicsCards': 'كروت الشاشة (GPU)',
      'category.processors': 'المعالجات (CPU)',
      'category.memory': 'الذاكرة العشوائية (RAM)',
      'category.storage': 'التخزين (SSD/HDD)',
      'category.motherboards': 'اللوحات الأم',
      'category.powerSupplies': 'مزودات الطاقة',
      'category.cases': 'صناديق الكمبيوتر',
      'category.cpuCoolers': 'مبردات المعالج',
      'category.gamingMonitors': 'شاشات الألعاب',
      'category.4kMonitors': 'شاشات 4K',
      'category.ultrawideMonitors': 'شاشات عريضة',
      'category.professionalMonitors': 'شاشات احترافية',
      'category.gamingChairs': 'كراسي ألعاب',
      'category.officeChairs': 'كراسي مكتبية',
      'category.ergonomicChairs': 'كراسي مريحة',
      'category.keyboards': 'لوحات المفاتيح',
      'category.mice': 'الفأرات',
      'category.headsets': 'سماعات الرأس',
      'category.speakers': 'السماعات',
      'category.webcams': 'كاميرات الويب',
      'category.cables': 'الكابلات',
      'category.adapters': 'المحولات',
      'category.usbHubs': 'موزعات USB',
      'category.cleaningKits': 'أدوات التنظيف',
      'category.thermalPaste': 'المعجون الحراري',
      
      // Home Page
      'home.welcome': 'اصنع جهاز أحلامك',
      'home.title': 'متجر قطع الكمبيوتر',
      'home.subtitle': 'SSD • RAM • GPU • CPU • شاشات والمزيد',
      'home.shopNow': 'تسوق الآن',
      'home.categories': 'تسوق حسب الفئة',
      'home.categoryGraphics': 'كروت الشاشة',
      'home.categoryProcessors': 'المعالجات',
      'home.categoryMemory': 'الذاكرة العشوائية',
      'home.categoryStorage': 'التخزين',
      'home.categoryMotherboards': 'اللوحات الأم',
      'home.categoryKeyboards': 'لوحات المفاتيح',
      'home.featuredProducts': 'المنتجات المميزة',
      'home.viewAll': 'عرض الكل',
      'home.viewDetails': 'عرض التفاصيل',
      'home.addToCart': 'أضف للسلة',
      'home.sale': 'تخفيض',
      'home.features': 'لماذا تختارنا؟',
      'home.ctaTitle': 'هل أنت جاهز لبناء جهاز أحلامك؟',
      'home.ctaSubtitle': 'استكشف مجموعتنا الواسعة من قطع الكمبيوتر الفاخرة',
      'home.browseAll': 'تصفح جميع المنتجات',
      'home.feature1Title': 'شحن مجاني',
      'home.feature1Desc': 'للطلبات فوق 500 ريال',
      'home.feature2Title': 'دعم 24/7',
      'home.feature2Desc': 'مساعدة الخبراء في أي وقت',
      'home.feature3Title': 'دفع آمن',
      'home.feature3Desc': 'آمن ومشفر',
      'home.feature4Title': 'ضمان',
      'home.feature4Desc': 'حتى 3 سنوات',
      
      // Cart
      'cart.title': 'سلة التسوق',
      'cart.empty': 'السلة فارغة',
      'cart.emptyDesc': 'أضف بعض المنتجات للبدء!',
      'cart.startShopping': 'ابدأ التسوق',
      'cart.items': 'عناصر السلة',
      'cart.clear': 'إفراغ السلة',
      'cart.product': 'المنتج',
      'cart.price': 'السعر',
      'cart.quantity': 'الكمية',
      'cart.total': 'المجموع',
      'cart.subtotal': 'المجموع الفرعي',
      'cart.itemsCount': 'منتج',
      'cart.discount': 'الخصم',
      'cart.shipping': 'الشحن',
      'cart.free': 'مجاني',
      'cart.summary': 'ملخص الطلب',
      'cart.grandTotal': 'المجموع الكلي',
      'cart.checkout': 'إتمام الطلب',
      'cart.continueShopping': 'متابعة التسوق',
      'cart.remove': 'إزالة',
      
      // Products
      'products.allProducts': 'جميع المنتجات',
      'products.products': 'المنتجات',
      'products.searchResults': 'نتائج البحث عن',
      'products.sortBy': 'ترتيب حسب',
      'products.default': 'افتراضي',
      'products.priceLowToHigh': 'السعر: من الأقل للأعلى',
      'products.priceHighToLow': 'السعر: من الأعلى للأقل',
      'products.nameAZ': 'الاسم: أ - ي',
      'products.nameZA': 'الاسم: ي - أ',
      'products.addToCart': 'أضف للسلة',
      'products.noProducts': 'لا توجد منتجات في هذه الفئة',
      'products.noProductsSearch': 'لا توجد منتجات عن',
      
      // Product Details
      'productDetails.addToCart': 'أضف للسلة',
      'productDetails.backToProducts': 'العودة للمنتجات',
      'productDetails.description': 'وصف المنتج',
      'productDetails.keyFeatures': 'المميزات الرئيسية',
      'productDetails.save': 'وفر',
      'productDetails.notFound': 'المنتج غير موجود',
      
      // Login
      'login.signIn': 'تسجيل الدخول',
      'login.createAccount': 'إنشاء حساب',
      'login.welcomeBack': 'مرحباً بعودتك!',
      'login.joinUs': 'انضم إلينا اليوم!',
      'login.signInDesc': 'سجل دخولك للوصول إلى حسابك ومتابعة التسوق',
      'login.registerDesc': 'أنشئ حساباً لتبدأ ببناء جهاز أحلامك',
      'login.enterCredentials': 'أدخل بيانات اعتمادك للوصول إلى حسابك',
      'login.fillDetails': 'املأ بياناتك للبدء',
      'login.email': 'البريد الإلكتروني',
      'login.password': 'كلمة المرور',
      'login.confirmPassword': 'تأكيد كلمة المرور',
      'login.fullName': 'الاسم الكامل',
      'login.enterEmail': 'أدخل بريدك الإلكتروني',
      'login.enterPassword': 'أدخل كلمة المرور',
      'login.enterFullName': 'أدخل اسمك الكامل',
      'login.confirmPasswordPlaceholder': 'أكد كلمة المرور',
      'login.rememberMe': 'تذكرني',
      'login.forgotPassword': 'نسيت كلمة المرور؟',
      'login.or': 'أو',
      'login.googleSignIn': 'متابعة بحساب جوجل',
      'login.facebookSignIn': 'متابعة بحساب فيسبوك',
      'login.noAccount': 'ليس لديك حساب؟',
      'login.haveAccount': 'لديك حساب بالفعل؟',
      'login.signUp': 'سجل الآن',
      'login.signingIn': 'جاري تسجيل الدخول...',
      'login.creatingAccount': 'جاري إنشاء الحساب...',
      'login.secureAndSafe': 'آمن ومضمون',
      'login.fastDelivery': 'توصيل سريع',
      'login.bestPrices': 'أفضل الأسعار',
      'login.backToHome': 'العودة للرئيسية',
      
      // Common
      'common.sar': 'ريال',
      'common.search': 'بحث',
      'common.loading': 'جاري التحميل...',
      'common.error': 'خطأ',
      'common.success': 'نجح',
      
      // Footer
      'footer.copyright': '© 2025 متجر قطع الكمبيوتر. جميع الحقوق محفوظة.',
    }
  };

  constructor() {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
      this.currentLanguage.set(savedLang);
      this.updateDocumentDirection(savedLang);
    }
  }

  toggleLanguage() {
    const newLang: Language = this.currentLanguage() === 'en' ? 'ar' : 'en';
    this.setLanguage(newLang);
  }

  setLanguage(lang: Language) {
    this.currentLanguage.set(lang);
    localStorage.setItem('language', lang);
    this.updateDocumentDirection(lang);
  }

  private updateDocumentDirection(lang: Language) {
    const htmlElement = document.documentElement;
    if (lang === 'ar') {
      htmlElement.setAttribute('dir', 'rtl');
      htmlElement.setAttribute('lang', 'ar');
    } else {
      htmlElement.setAttribute('dir', 'ltr');
      htmlElement.setAttribute('lang', 'en');
    }
  }

  translate(key: string): string {
    const currentLang = this.currentLanguage();
    return this.translations[currentLang][key] || key;
  }

  t(key: string): string {
    return this.translate(key);
  }
}
