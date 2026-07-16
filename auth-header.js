// =========================================================
// وحدة مشتركة: مزامنة أيقونة/رابط الحساب في الهيدر مع حالة تسجيل الدخول
// تُستخدم في كل صفحات الموقع (index, search, product, add-product, auth)
// =========================================================
import { auth, onAuthStateChanged, signOut } from './firebase-config.js';

export function wireAuthHeader() {
  const accountEls = document.querySelectorAll('[data-account-link]');

  onAuthStateChanged(auth, (user) => {
    accountEls.forEach((el) => {
      if (user) {
        el.dataset.loggedIn = 'true';
        el.setAttribute('href', '#');
        el.title = 'تسجيل الخروج (' + (user.displayName || user.email) + ')';
        el.innerHTML = `<span class="text-xs font-display font-bold">${(user.displayName || user.email || 'م').trim().charAt(0)}</span>`;
        el.classList.add('!bg-gold-500/15', '!border-gold-500/40', '!text-gold-400');
      } else {
        el.dataset.loggedIn = 'false';
        el.setAttribute('href', 'auth.html');
        el.title = 'تسجيل الدخول';
        el.innerHTML = '<i data-lucide="user" class="w-5 h-5"></i>';
        el.classList.remove('!bg-gold-500/15', '!border-gold-500/40', '!text-gold-400');
      }
      if (window.lucide) window.lucide.createIcons();
    });
  });

  accountEls.forEach((el) => {
    el.addEventListener('click', (event) => {
      if (el.dataset.loggedIn === 'true') {
        event.preventDefault();
        if (confirm('هل تريد تسجيل الخروج من دكان؟')) {
          signOut(auth).then(() => {
            window.location.href = 'index.html';
          });
        }
      }
    });
  });
}

// دالة مساعدة لحماية صفحة "أضف منتجك": لازم المستخدم يكون مسجل دخول
export function requireAuth(onReady) {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = 'auth.html';
    } else {
      onReady(user);
    }
  });
}
