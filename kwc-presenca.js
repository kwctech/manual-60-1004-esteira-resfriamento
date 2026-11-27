/*! KWC Industrial TECH · Presença padrão nos manuais digitais · v1.3
 *  O mesmo bloco KWC em todo manual.
 *  Uso: copie este arquivo ao lado do index.html e, no <head> do manual:
 *  <script defer src="kwc-presenca.js"
 *          data-codigo="60.1004" data-rev="01" data-data="21/11/2026"
 *          data-cliente="Engeprak" data-equipamento="Esteira FC.1001"></script>
 *  Opcional: <div data-kwc-selo></div> e <div data-kwc-ficha></div> para posicionar selo e ficha.
 *  Opcional (v1.3): data-selo="0" tira o selo da capa · data-barra="0" tira a barra fixa
 *  · data-projeto="Nome" credita o projeto ao cliente (a KWC fica como desenvolvimento digital).
 */
(function () {
  'use strict';
  if (window.__kwcPresenca) return; window.__kwcPresenca = 1;
  var S = document.currentScript || document.querySelector('script[src*="kwc-presenca"]') || { dataset: {} };
  var D = S.dataset || {};
  var KWC = {
    nome: 'KWC Industrial TECH',
    site: 'https://kwcindustrial.tech/',
    resp: 'Kawan Cordeiro',
    cargo: 'Projetista mecânico / Dev. de software',
    zap: '5547997485816',
    zapTxt: '(47) 99748-5816',
    logo: 'data:image/webp;base64,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'
  };
  var comSelo = D.selo !== '0', comBarra = D.barra !== '0', projeto = D.projeto || '';
  var cod = D.codigo || '', rev = D.rev || '00', dt = D.data || '', cli = D.cliente || '', eq = D.equipamento || document.title.split('|')[0].trim();
  var zapMsg = encodeURIComponent('Olá KWC! Preciso de suporte técnico — manual ' + (eq || '') + (cod ? ' (' + cod + ')' : '') + (cli ? ' · ' + cli : ''));
  var ZAP = 'https://wa.me/' + KWC.zap + '?text=' + zapMsg;
  var ICO_ZAP = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>';
  var css = [
    '.kwcp,.kwcp *{box-sizing:border-box;font-family:"Chakra Petch","Bahnschrift","Segoe UI",system-ui,sans-serif;letter-spacing:.02em}',
    '.kwcp-g{color:#39FF6A}',
    /* assinatura fixa */
    '.kwcp-sig{position:fixed;left:0;right:0;bottom:0;z-index:2147483000;display:flex;align-items:center;justify-content:space-between;gap:16px;height:46px;padding:0 22px;background:rgba(10,10,10,.97);border-top:1px solid rgba(57,255,106,.45);box-shadow:0 -8px 24px -12px rgba(0,0,0,.7);color:#E8EAED}',
    '.kwcp-sig a{color:inherit;text-decoration:none;display:flex;align-items:center;gap:12px}',
    '.kwcp-sig img{height:24px;width:auto;display:block}',
    '.kwcp-sig small{white-space:nowrap;font-size:11px;text-transform:uppercase;color:#A7AEB9;letter-spacing:.14em}',
    '.kwcp-sig small b{color:#39FF6A;letter-spacing:.08em;margin-left:6px}',
    '.kwcp-site{white-space:nowrap;color:#39FF6A!important;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:.1em}',
    '.kwcp-site:hover{text-decoration:underline!important}',
    comBarra ? 'html.kwcp-pad body{padding-bottom:46px!important}#backToTop{bottom:62px!important}' : '',
    /* selo da capa */
    '.kwcp-selo{display:flex;flex-wrap:wrap;align-items:center;gap:10px 14px;margin:14px 0 26px;padding:10px 14px;border-radius:10px;background:rgba(10,10,10,.55);border:1px solid rgba(57,255,106,.35);border-left:3px solid #39FF6A;color:#E8EAED;font-size:12px;text-transform:uppercase;letter-spacing:.1em;max-width:100%}',
    '.kwcp-selo img{height:22px;width:auto}',
    '.kwcp-selo span{color:#A7AEB9}',
    '.kwcp-selo em{font-style:normal;color:#39FF6A;font-weight:700}',
    /* ficha de controle */
    '.kwcp-ficha{text-align:left;margin:56px 0 90px;border-radius:14px;overflow:hidden;background:#0D0D0D;border:1px solid #2C2C2C;color:#E8EAED;position:relative}',
    '.kwcp-ficha:before{content:"";display:block;height:3px;background:linear-gradient(90deg,#39FF6A,#16A34A)}',
    '.kwcp-fh{display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;padding:18px 22px;border-bottom:1px solid #1F1F1F}',
    '.kwcp-fh img{height:34px;width:auto}',
    '.kwcp-fh h4{margin:0;font-size:13px;text-transform:uppercase;letter-spacing:.16em;color:#A7AEB9;font-weight:600}',
    '.kwcp-fg{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#1F1F1F}',
    '.kwcp-fg div{background:#0D0D0D;padding:14px 22px}',
    '.kwcp-fg small{display:block;font-size:10px;text-transform:uppercase;letter-spacing:.16em;color:#5F6771;margin-bottom:4px}',
    '.kwcp-fg b{font-size:14px;color:#E8EAED;font-weight:600;word-break:break-word}',
    '.kwcp-fg b.kwcp-g,.kwcp-fg b a{color:#39FF6A!important}',
    '.kwcp-ff{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;padding:16px 22px;font-size:12px;color:#A7AEB9}',
    '.kwcp-ff a{color:#39FF6A!important;text-decoration:none;font-weight:700}',
    /* impressão */
    '.kwcp-print{display:none}',
    '@media print{.kwcp-sig{display:none!important}.kwcp-print{display:flex;position:fixed;left:0;right:0;bottom:0;justify-content:space-between;padding:4px 10mm;font-size:9px;color:#333;border-top:1px solid #39FF6A;background:#fff}.kwcp-print b{color:#16A34A}.kwcp-ficha,.kwcp-selo{break-inside:avoid}}',
    /* celular */
    '@media (max-width:768px){.kwcp-fg{grid-template-columns:repeat(2,1fr)}.kwcp-sig{height:42px;padding:0 12px}.kwcp-sig small{display:none}.kwcp-sig img{height:20px}.kwcp-site{font-size:11px}' + (comBarra ? 'html.kwcp-pad body{padding-bottom:42px!important}#backToTop{bottom:56px!important}' : '') + '.kwcp-fg div,.kwcp-fh,.kwcp-ff{padding-left:16px;padding-right:16px}}'
  ].join('');

  function el(h) { var d = document.createElement('div'); d.innerHTML = h; return d.firstChild; }
  function alvoConteudo() {
    return document.querySelector('[data-kwc-ficha]') || document.querySelector('main .container, .main-content .container, main, .main-content, article') || document.body;
  }
  function iniciar() {
    if (!document.querySelector('link[href*="Chakra+Petch"]')) {
      var f = document.createElement('link'); f.rel = 'stylesheet';
      f.href = 'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;700&display=swap';
      document.head.appendChild(f);
    }
    var st = document.createElement('style'); st.id = 'kwc-presenca-css'; st.textContent = css; document.head.appendChild(st);

    // 1. Barra inferior fixa (largura total) com link do site KWC
    if (comBarra) (function () {
    document.body.appendChild(el('<div class="kwcp kwcp-sig" role="contentinfo">' +
      '<a href="' + KWC.site + '" target="_blank" rel="noopener" title="' + KWC.nome + '"><img src="' + KWC.logo + '" alt="' + KWC.nome + '" width="78" height="24"><small><span>Desenvolvido por</span><b>' + KWC.nome + '</b></small></a>' +
      '<a class="kwcp-site" href="' + KWC.site + '" target="_blank" rel="noopener">kwcindustrial.tech ›</a></div>'));
    // a barra fica só na área do manual: começa onde o menu lateral termina
    var barra = document.querySelector('.kwcp-sig');
    var menu = document.querySelector('.sidebar, nav.sidebar, aside.sidebar, [data-kwc-menu]');
    function alinhar() {
      var esq = 0;
      if (menu) {
        var r = menu.getBoundingClientRect(), cs = getComputedStyle(menu);
        var fixo = cs.position === 'fixed' || cs.position === 'sticky' || r.height >= innerHeight * 0.9;
        if (fixo && r.left <= 1 && r.right > 0 && r.width < innerWidth * 0.6 && cs.display !== 'none' && cs.visibility !== 'hidden') esq = Math.round(r.right);
      }
      barra.style.left = esq + 'px';
    }
    if (!menu) document.documentElement.classList.add('kwcp-pad');
    alinhar();
    addEventListener('resize', alinhar, { passive: true });
    if (menu) {
      if (window.MutationObserver) new MutationObserver(function () { setTimeout(alinhar, 320); alinhar(); }).observe(menu, { attributes: true, attributeFilter: ['class', 'style'] });
      menu.addEventListener('transitionend', alinhar);
    }
    })();

    // 2. Selo de autoria na capa
    var selo = '<div class="kwcp kwcp-selo"><img src="' + KWC.logo + '" alt="KWC" width="71" height="22">' +
      '<span>Projeto e documentação técnica</span><em>' + KWC.nome + '</em>' +
      (cod ? '<span>Cód. <em>' + cod + '</em></span>' : '') + '<span>Rev. <em>' + rev + '</em></span></div>';
    var ps = document.querySelector('[data-kwc-selo]'), h1 = document.querySelector('h1');
    if (!comSelo) { if (ps) ps.remove(); }
    else if (ps) ps.replaceWith(el(selo)); else if (h1) h1.insertAdjacentElement('afterend', el(selo));

    // 3. Ficha de controle do documento
    var url = location.protocol.indexOf('http') === 0 ? location.href.split('#')[0] : '';
    var ficha = '<section class="kwcp kwcp-ficha" aria-label="Controle do documento">' +
      '<div class="kwcp-fh"><h4>Controle do documento</h4><img src="' + KWC.logo + '" alt="' + KWC.nome + '" width="109" height="34"></div>' +
      '<div class="kwcp-fg">' +
      (cli && !projeto ? '<div><small>Cliente</small><b>' + cli + '</b></div>' : '') +
      '<div><small>Equipamento</small><b>' + eq + '</b></div>' +
      (cod ? '<div><small>Código KWC</small><b class="kwcp-g">' + cod + '</b></div>' : '') +
      '<div><small>Revisão</small><b>' + rev + (dt ? ' · ' + dt : '') + '</b></div>' +
      (projeto ? '<div><small>Projeto</small><b>' + projeto + '</b></div>' +
                 '<div><small>Desenvolvimento digital</small><b class="kwcp-g">' + KWC.nome + '</b></div>'
               : '<div><small>Responsável técnico</small><b>' + KWC.resp + '</b></div>') +
      '<div><small>Site</small><b><a class="kwcp-g" style="text-decoration:none" href="' + KWC.site + '" target="_blank" rel="noopener">kwcindustrial.tech</a></b></div>' +
      '</div><div class="kwcp-ff"><span>' + (projeto ? 'Projeto <b>' + projeto + '</b> · desenvolvimento digital <b class="kwcp-g">' + KWC.nome + '</b>' : 'Projeto, documentação e manual digital por <b class="kwcp-g">' + KWC.nome + '</b>') + (url ? ' · versão online: ' + url.replace(/^https?:\/\//, '') : '') + '</span>' +
      '<a href="' + KWC.site + '" target="_blank" rel="noopener">kwcindustrial.tech ›</a></div></section>';
    var pf = document.querySelector('[data-kwc-ficha]');
    if (pf) pf.replaceWith(el(ficha)); else alvoConteudo().appendChild(el(ficha));

    // 4. Rodapé de impressão / PDF
    document.body.appendChild(el('<div class="kwcp kwcp-print"><span>' + (cli ? cli + ' · ' : '') + eq + (cod ? ' · ' + cod : '') + ' · Rev. ' + rev + '</span><span>' + (projeto ? 'Projeto ' + projeto + ' · desenvolvimento digital <b>' + KWC.nome + '</b>' : 'Desenvolvido por <b>' + KWC.nome + '</b>') + ' · kwcindustrial.tech</span></div>'));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar); else iniciar();
})();
