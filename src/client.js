(() => {
  const root = document.documentElement;
  let initial = 'zh';
  try { initial = sessionStorage.getItem('academic-language-v2') === 'en' ? 'en' : 'zh'; } catch {}
  const videoControlLabel = video => root.dataset.lang === 'en' ? (video.paused ? 'Play video' : 'Pause video') : (video.paused ? '播放视频' : '暂停视频');
  const setLang = (lang) => {
    root.dataset.lang = lang;
    root.lang = lang === 'zh' ? 'zh-CN' : 'en';
    try { sessionStorage.setItem('academic-language-v2', lang); } catch {}
    document.title = document.body.dataset[lang === 'zh' ? 'titleZh' : 'titleEn'];
    document.querySelectorAll('[data-set-lang]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.setLang === lang));
    });
    document.querySelectorAll('[data-title-zh]').forEach(item => { item.title = item.dataset[lang === 'zh' ? 'titleZh' : 'titleEn']; });
    document.querySelectorAll('[data-aria-zh]').forEach(item => { item.setAttribute('aria-label', item.dataset[lang === 'zh' ? 'ariaZh' : 'ariaEn']); });
    document.querySelectorAll('[data-alt-zh]').forEach(img => {
      img.alt = img.dataset[lang === 'zh' ? 'altZh' : 'altEn'];
    });
    document.querySelectorAll('video[data-label-zh]').forEach(video => {
      video.setAttribute('aria-label', video.dataset[lang === 'zh' ? 'labelZh' : 'labelEn']);
      video.parentElement.querySelector('[data-video-toggle]')?.setAttribute('aria-label', videoControlLabel(video));
    });
  };
  setLang(initial);
  document.querySelectorAll('[data-set-lang]').forEach(button => button.addEventListener('click', () => setLang(button.dataset.setLang)));

  const filterButtons = [...document.querySelectorAll('[data-project-filter]')];
  const projectCards = [...document.querySelectorAll('.project-card[data-category]')];
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.projectFilter;
    filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    projectCards.forEach(card => { card.hidden = selected !== 'all' && card.dataset.category !== selected; });
    document.querySelectorAll('[data-project-group]').forEach(group => {
      group.hidden = ![...group.querySelectorAll('.project-card')].some(card => !card.hidden);
    });
  }));

  const videos = [...document.querySelectorAll('.autoplay-video')];
  const visibleVideos = new Set();
  const setSpeed = (video) => {
    const rate = Number(video.dataset.playbackRate) || 1.5;
    video.defaultPlaybackRate = rate;
    video.playbackRate = rate;
  };
  const loadPoster = (video) => {
    if (video.dataset.poster) {
      video.poster = video.dataset.poster;
      delete video.dataset.poster;
    }
  };
  const loadVideo = (video) => {
    loadPoster(video);
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;
    setSpeed(video);
    const source = video.querySelector('source[data-src]');
    if (source) {
      source.src = source.dataset.src;
      source.removeAttribute('data-src');
      video.load();
    }
  };
  const setControl = (video) => {
    const button = video.parentElement.querySelector('[data-video-toggle]');
    if (!button) return;
    button.classList.toggle('is-paused', video.paused);
    button.setAttribute('aria-label', videoControlLabel(video));
  };
  videos.forEach(video => {
    // Source assignment stays lazy; every visible video starts muted at 1.5×.
    video.autoplay = true;
    setSpeed(video);
    video.addEventListener('loadedmetadata', () => setSpeed(video));
    const button = video.parentElement.querySelector('[data-video-toggle]');
    button?.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (video.paused) {
        loadVideo(video);
        video.dataset.userPaused = '';
        video.play().catch(() => setControl(video));
      } else {
        video.dataset.userPaused = 'true';
        video.pause();
      }
      setControl(video);
    });
    video.addEventListener('play', () => { setSpeed(video); setControl(video); });
    video.addEventListener('pause', () => setControl(video));
  });
  const posterObserver = new IntersectionObserver(entries => entries.forEach(({ target: video, isIntersecting }) => {
    if (isIntersecting) {
      loadPoster(video);
      posterObserver.unobserve(video);
    }
  }), { rootMargin: '200px 0px', threshold: 0 });
  const observer = new IntersectionObserver(entries => entries.forEach(({ target: video, isIntersecting, intersectionRatio }) => {
    if (isIntersecting && intersectionRatio >= 0.1) {
      visibleVideos.add(video);
      if (!video.dataset.userPaused && !document.hidden) {
        loadVideo(video);
        video.play().catch(() => {});
      }
    } else {
      visibleVideos.delete(video);
      video.pause();
    }
  }), { rootMargin: '0px', threshold: [0, 0.1] });
  videos.forEach(video => {
    posterObserver.observe(video);
    observer.observe(video);
  });
  document.addEventListener('visibilitychange', () => videos.forEach(video => {
    if (document.hidden) video.pause();
    else if (!video.dataset.userPaused && visibleVideos.has(video)) {
      loadVideo(video);
      video.play().catch(() => {});
    }
  }));
})();
