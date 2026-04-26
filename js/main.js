// スクロール時のフェードインアニメーション
const fadeTargets = document.querySelectorAll('.bio-card, .work-card, .hobby-item');

fadeTargets.forEach((el) => {
  el.classList.add('fade-in');
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

fadeTargets.forEach((el) => {
  observer.observe(el);
});
