/*
  Brand Check — share controls
  Injects "Post on X" buttons into article pages.
  - One inline button in the byline (top of article)
  - One prominent share card just before .article-foot
  Reads the article title from <h1> and uses the current page URL.
*/
(function () {
  var article = document.querySelector('article.article');
  if (!article) return;

  var titleEl = article.querySelector('h1');
  if (!titleEl) return;

  var title = titleEl.textContent.replace(/\s+/g, ' ').trim();
  var url = location.href.split('#')[0];

  // Tweet text: title + attribution. X will fetch the URL preview.
  var tweetText = title + ' — via Brand Check';
  var intent =
    'https://twitter.com/intent/tweet?text=' +
    encodeURIComponent(tweetText) +
    '&url=' + encodeURIComponent(url);

  // Official X logo path
  var xSvg =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>' +
    '</svg>';

  function makeShareLink(extraClass, label) {
    var a = document.createElement('a');
    a.className = 'share-x' + (extraClass ? ' ' + extraClass : '');
    a.href = intent;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label', 'Share on X (formerly Twitter)');
    a.innerHTML = xSvg + '<span>' + label + '</span>';
    // Open in a centered popup when possible (desktop)
    a.addEventListener('click', function (e) {
      if (window.innerWidth < 720) return; // let mobile use the OS-native flow
      e.preventDefault();
      var w = 600, h = 520;
      var left = (screen.width - w) / 2;
      var top = (screen.height - h) / 2;
      window.open(
        intent,
        'share-x',
        'noopener,noreferrer,width=' + w + ',height=' + h +
        ',left=' + left + ',top=' + top
      );
    });
    return a;
  }

  // 1) Inline button — appended to the byline, floats right
  var byline = article.querySelector('.byline');
  if (byline) {
    byline.appendChild(makeShareLink('share-x-inline', 'Post on X'));
  }

  // 2) Bottom share card — inserted just before .article-foot
  var foot = article.querySelector('.article-foot');
  if (foot) {
    var card = document.createElement('div');
    card.className = 'share-foot';
    var lab = document.createElement('div');
    lab.className = 'lab';
    lab.textContent = 'Share this article';
    card.appendChild(lab);
    card.appendChild(makeShareLink('', 'Post on X'));
    foot.parentNode.insertBefore(card, foot);
  }
})();
