(function(){
  window.__PASS_MACHINE_BOOTED__ = true;
  const SVG_LOGO = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.41 7.55">
  <g fill="#fff">
    <path d="M47.7,7.41c-.11,0-.16-.05-.16-.16V.3c0-.11.05-.16.16-.16h2.43c1.06,0,1.83.22,2.32.66s.73,1.09.73,1.95c0,.48-.08.89-.25,1.26-.17.36-.42.65-.75.87l1.21,2.34c.03.05.04.1,0,.14-.03.03-.07.05-.13.05h-1.69c-.09,0-.15-.04-.18-.12l-.92-1.93c-.11,0-.23,0-.35,0h-.76v1.88c0,.11-.05.16-.16.16h-1.51ZM50.09,1.68h-.73v2.14h.73c.38,0,.68-.08.88-.25.21-.17.32-.44.32-.82s-.11-.66-.32-.82c-.2-.17-.5-.25-.88-.25Z"/>
    <path d="M39.88,7.41c-.06,0-.1-.02-.13-.05-.02-.04-.02-.08,0-.13l2.86-6.97c.03-.08.09-.12.18-.12h1.25c.09,0,.15.04.18.12l2.86,6.97s.02.09,0,.13c-.02.03-.06.05-.11.05h-1.66c-.09,0-.15-.04-.18-.13l-.4-1.12h-2.64l-.4,1.12c-.03.09-.09.13-.18.13h-1.62ZM42.61,4.66h1.58l-.8-2.24-.78,2.24Z"/>
    <path d="M36.88,7.41c-.11,0-.16-.05-.16-.16V1.87h-2.09c-.1,0-.15-.05-.15-.15V.3c0-.11.05-.16.15-.16h6.02c.11,0,.16.05.16.16v1.43c0,.1-.05.15-.16.15h-2.08v5.38c0,.11-.05.16-.16.16h-1.54Z"/>
    <path d="M31.67,7.55c-.69,0-1.27-.17-1.76-.5-.49-.34-.84-.82-1.04-1.44-.03-.1,0-.17.11-.2l1.38-.34c.09-.02.16.01.2.1.11.26.26.46.45.57.19.11.43.17.72.17.24,0,.43-.04.57-.12.15-.09.23-.21.23-.38,0-.18-.08-.33-.24-.44-.15-.11-.38-.22-.68-.33l-.75-.27c-.55-.19-1-.47-1.33-.83-.32-.36-.49-.82-.49-1.36,0-.44.12-.82.35-1.15.24-.33.55-.59.94-.77.4-.19.84-.29,1.32-.29.61,0,1.14.15,1.59.44.46.28.8.74,1,1.36.05.11.01.17-.1.2l-1.45.39c-.09.03-.16,0-.2-.1-.11-.26-.23-.43-.39-.52-.15-.09-.31-.14-.5-.14-.2,0-.36.04-.5.13-.13.09-.2.2-.2.36s.08.29.23.41c.15.11.41.23.78.36l.54.18c.65.22,1.13.51,1.45.86.32.35.48.83.48,1.43,0,.43-.12.81-.35,1.15-.23.33-.55.59-.96.78-.41.18-.88.28-1.42.28Z"/>
    <path d="M23.62,7.41c-.11,0-.16-.05-.16-.16V.3c0-.11.05-.16.16-.16h4.78c.11,0,.16.05.16.16v1.28c0,.11-.05.16-.16.16h-3.11v1.19h2.74c.11,0,.16.05.16.16v1.23c0,.11-.05.16-.16.16h-2.74v1.35h3.23c.11,0,.16.05.16.16v1.28c0,.11-.05.16-.16.16h-4.9Z"/>
    <path d="M16.57,7.41c-.11,0-.16-.05-.16-.16V.3c0-.11.05-.16.16-.16h1.54c.11,0,.16.05.16.16v2.81L20.62.23c.05-.06.12-.09.19-.09h1.75c.07,0,.11.02.12.06.02.03,0,.08-.03.13l-2.21,2.55,2.49,4.35c.03.05.04.1.02.14-.02.03-.06.05-.13.05h-1.77c-.08,0-.14-.04-.18-.11l-1.67-3-.93,1.07v1.88c0,.11-.05.16-.16.16h-1.54Z"/>
    <path d="M8.75,7.41c-.06,0-.1-.02-.13-.05-.02-.04-.02-.08,0-.13L11.49.26c.03-.08.09-.12.18-.12h1.25c.09,0,.15.04.18.12l2.86,6.97s.02.09,0,.13c-.02.03-.06.05-.11.05h-1.66c-.09,0-.15-.04-.18-.13l-.4-1.12h-2.64l-.4,1.12c-.03.09-.09.13-.18.13h-1.62ZM11.48,4.66h1.58l-.8-2.24-.78,2.24Z"/>
    <path d="M.16,7.41c-.11,0-.16-.05-.16-.16V.3c0-.11.05-.16.16-.16h1.6c.09,0,.15.04.18.11l2.19,3.65L6.26.25c.04-.07.10-.11.18-.11h1.57c.11,0,.16.05.16.16v6.95c0,.11-.05.16-.16.16h-1.46c-.11,0-.16-.05-.16-.16V3.12l-2.27,3.77L1.77,3.19v4.06c0,.11-.05.16-.16.16H.16Z"/>
  </g>
</svg>`;

  const ROLE_LABELS = {
    staff: "STAFF",
    artist: "ARTIST",
    vip: "VIP",
    aaa: "AAA",
    team: "TEAM"
  };

  const TEXT_TRACKING_EM = 0.016;
  const ROLE_TRACKING_EM = 0.018;
  const TEXT_STYLE_DEFAULTS = {
    textA: {
      fontScale: 0.8,
      trackingEm: TEXT_TRACKING_EM,
      verticalShift: -2
    },
    textB: {
      fontScale: 1,
      trackingEm: TEXT_TRACKING_EM,
      verticalShift: 0
    }
  };

  function svgToDataUrl(svgText){
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgText);
  }

  function loadImage(src){
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.decoding = "async";
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error("Image load failed"));
      img.src = src;
    });
  }

  function setFont(ctx, sizePx, weight){
    ctx.font = `${weight} ${sizePx}px Pretendard, system-ui, -apple-system, Segoe UI, Roboto, sans-serif`;
  }

  function bboxHeight(ctx, text){
    const m = ctx.measureText(text || "Hg");
    const ascent = m.actualBoundingBoxAscent ?? 0;
    const descent = m.actualBoundingBoxDescent ?? 0;
    const h = ascent + descent;
    if(h > 0) return h;
    const px = parseFloat((ctx.font.match(/\s(\d+(?:\.\d+)?)px\s/) || [])[1] || "0");
    return px || 0;
  }

  function fitFontPxToBBoxHeight(ctx, text, targetHpx, weight, basePx){
    setFont(ctx, basePx, weight);
    const h = bboxHeight(ctx, text);
    if(!h) return basePx;
    return basePx * (targetHpx / h);
  }

  function baselineForBBoxCenter(ctx, text, centerY){
    const m = ctx.measureText(text || "Hg");
    const ascent = m.actualBoundingBoxAscent ?? 0;
    const descent = m.actualBoundingBoxDescent ?? 0;
    return centerY + (ascent - descent) / 2;
  }

  function measureTracking(ctx, text, trackingPx){
    let width = 0;
    for(let i = 0; i < text.length; i += 1){
      width += ctx.measureText(text[i]).width;
      if(i !== text.length - 1) width += trackingPx;
    }
    return width;
  }

  function drawTextTracking(ctx, text, x, y, align, trackingPx){
    const w = measureTracking(ctx, text, trackingPx);
    let cursor = x - w / 2;
    if(align === "left") cursor = x;
    if(align === "right") cursor = x - w;
    for(let i = 0; i < text.length; i += 1){
      ctx.fillText(text[i], cursor, y);
      cursor += ctx.measureText(text[i]).width + trackingPx;
    }
  }

  function wrapText(ctx, text, maxWidth, trackingPx){
    const words = (text || "").split(/\s+/).filter(Boolean);
    const lines = [];
    let current = "";
    const fits = (value) => measureTracking(ctx, value, trackingPx) <= maxWidth;

    for(const word of words){
      const next = current ? `${current} ${word}` : word;
      if(fits(next)){
        current = next;
      }else{
        if(current) lines.push(current);
        current = word;
      }
    }

    if(current) lines.push(current);
    return lines.length ? lines : [""];
  }

  function normalizeMultiline(text){
    return String(text ?? "").replace(/\r/g, "");
  }

  function splitExplicitLines(text, maxLines){
    const parts = normalizeMultiline(text).split("\n");
    if(!Number.isFinite(maxLines) || maxLines < 1 || parts.length <= maxLines){
      return parts;
    }
    return [
      ...parts.slice(0, maxLines - 1),
      parts.slice(maxLines - 1).join(" ")
    ];
  }

  function wrapTextWithNewlines(ctx, text, maxWidth, trackingPx, maxLines){
    const parts = splitExplicitLines(text, maxLines);
    const out = [];

    for(const part of parts){
      const remaining = Number.isFinite(maxLines) ? maxLines - out.length : Infinity;
      if(remaining <= 0) break;

      if(part.trim().length === 0){
        out.push("");
        continue;
      }

      let wrapped = wrapText(ctx, part, maxWidth, trackingPx);
      if(Number.isFinite(maxLines) && wrapped.length > remaining){
        if(remaining === 1){
          wrapped = [wrapped.join(" ").replace(/\s+/g, " ").trim()];
        }else{
          const head = wrapped.slice(0, remaining - 1);
          const tail = wrapped.slice(remaining - 1).join(" ").replace(/\s+/g, " ").trim();
          wrapped = [...head, tail];
        }
      }

      out.push(...wrapped);
    }

    return out.length ? out : [""];
  }

  function fitTextToBox(ctx, text, box, weight, trackingEm, minPx){
    const sample = normalizeMultiline(text).replace(/\n+/g, " ").trim() || "Hg";
    let size = fitFontPxToBBoxHeight(ctx, sample, box.h, weight, Math.max(box.h * 2, 64));
    let trackingPx = size * trackingEm;
    const floor = minPx ?? 6;

    while(size >= floor){
      setFont(ctx, size, weight);
      trackingPx = size * trackingEm;
      if(
        bboxHeight(ctx, sample) <= box.h + 0.5 &&
        measureTracking(ctx, sample, trackingPx) <= box.w + 0.5
      ){
        break;
      }
      size -= 0.5;
    }

    return { size, trackingPx };
  }

  function inferLineCount(ctx, text, targetHeight, weight, maxWidth, style){
    const resolvedStyle = {
      ...TEXT_STYLE_DEFAULTS.textB,
      ...(style || {})
    };
    const sample = normalizeMultiline(text).replace(/\n+/g, " ").trim() || "Hg";
    const size = fitFontPxToBBoxHeight(
      ctx,
      sample,
      targetHeight * resolvedStyle.fontScale,
      weight,
      Math.max(targetHeight * 2, 64)
    );
    setFont(ctx, size, weight);
    const trackingPx = size * resolvedStyle.trackingEm;
    return Math.max(1, Math.min(2, wrapTextWithNewlines(ctx, text, maxWidth, trackingPx, 2).length));
  }

  function expandBoxes(defs, defaultX, defaultW){
    return defs.map((box) => ({
      x: box.x ?? defaultX,
      y: box.y,
      w: box.w ?? defaultW,
      h: box.h
    }));
  }

  function resolveLineCenters(boxes, lineCount, gapScale, verticalShift){
    const centers = boxes.map((box) => box.y + box.h / 2 + verticalShift);
    if(lineCount <= 1){
      const first = centers[0];
      const last = centers[centers.length - 1];
      return [(first + last) / 2];
    }
    const first = centers[0];
    const last = centers[lineCount - 1];
    const anchorCenter = (first + last) / 2;
    const baseStep = lineCount > 1 ? (last - first) / (lineCount - 1) : 0;
    const step = baseStep * gapScale;
    return Array.from({ length: lineCount }, (_, index) => (
      anchorCenter + (index - (lineCount - 1) / 2) * step
    ));
  }

  function drawTextBlock(ctx, text, boxes, weight, maxWidth, minPx, probeHeight, style){
    const resolvedStyle = {
      ...TEXT_STYLE_DEFAULTS.textB,
      ...(style || {})
    };
    const sample = normalizeMultiline(text).replace(/\n+/g, " ").trim() || "Hg";
    const targetHeight = Math.min(...boxes.map((box) => box.h));
    const startHeight = boxes.length > 1 ? Math.max(probeHeight || targetHeight, targetHeight) : targetHeight;
    const referenceSize = fitFontPxToBBoxHeight(
      ctx,
      sample,
      startHeight * resolvedStyle.fontScale,
      weight,
      Math.max(startHeight * 2, 64)
    );
    let size = referenceSize;
    let trackingPx = size * resolvedStyle.trackingEm;
    let lines = wrapTextWithNewlines(ctx, text, maxWidth, trackingPx, boxes.length);
    const floor = minPx ?? 6;
    let fallback = null;

    while(size >= floor){
      setFont(ctx, size, weight);
      trackingPx = size * resolvedStyle.trackingEm;
      lines = wrapTextWithNewlines(ctx, text, maxWidth, trackingPx, boxes.length);
      const widthsOk = lines.every((line) => measureTracking(ctx, line, trackingPx) <= maxWidth + 0.5);
      const expectedLineCount = text.trim().length === 0 ? 1 : boxes.length;
      if(widthsOk && lines.length === expectedLineCount){
        break;
      }
      if(widthsOk && fallback === null){
        fallback = { size, trackingPx, lines: [...lines] };
      }
      size -= 0.5;
    }

    if(
      fallback &&
      (lines.length !== (text.trim().length === 0 ? 1 : boxes.length) ||
      lines.some((line) => measureTracking(ctx, line, trackingPx) > maxWidth + 0.5))
    ){
      size = fallback.size;
      trackingPx = fallback.trackingPx;
      lines = fallback.lines;
    }

    ctx.save();
    ctx.fillStyle = "#FFFFFF";
    setFont(ctx, size, weight);
    ctx.textBaseline = "alphabetic";

    const usedLines = lines.slice(0, boxes.length);
    const gapScale = usedLines.length > 1 && referenceSize > 0
      ? Math.max(0.55, Math.min(1, size / referenceSize))
      : 1;
    const centers = resolveLineCenters(
      boxes,
      usedLines.length,
      gapScale,
      resolvedStyle.verticalShift
    );

    usedLines.forEach((line, index) => {
      const box = boxes[index];
      const baseline = baselineForBBoxCenter(ctx, line, centers[index]);
      drawTextTracking(ctx, line, box.x + box.w / 2, baseline, "center", trackingPx);
    });

    ctx.restore();
  }

  function boot(){
    const config = window.PASS_MACHINE_CONFIG;
    if(!config) return;

    const DPI = 300;
    const PX_PER_MM = DPI / 25.4;
    const BADGE_W = Math.round(config.badgeWmm * PX_PER_MM);
    const BADGE_H = Math.round(config.badgeHmm * PX_PER_MM);
    const A4_W = 2480;
    const A4_H = 3508;
    const CUTLINE_PX = Math.max(1, Math.round((0.5 * DPI) / 25.4));

    const contentRect = { ...config.contentRect };
    const photoRect = { ...config.photoRect };
    const dateBox = { ...config.dateBox };
    const logoBox = { ...config.logoBox };
    const roleArea = { ...config.roleArea };
    const lineProbe = {
      textA: config.states.A.textA[0].h,
      textB: config.states.A.textB[0].h
    };
    const textStyles = {
      textA: {
        ...TEXT_STYLE_DEFAULTS.textA,
        ...(config.textStyles?.textA || {})
      },
      textB: {
        ...TEXT_STYLE_DEFAULTS.textB,
        ...(config.textStyles?.textB || {})
      }
    };

    const badgeCanvas = document.getElementById("badgeCanvas");
    const a4Canvas = document.getElementById("a4Canvas");
    const textAEl = document.getElementById("textA");
    const textBEl = document.getElementById("textB");
    const textCEl = document.getElementById("textC");
    const roleEl = document.getElementById("role");
    const photoEl = document.getElementById("photo");
    const scaleEl = document.getElementById("scale");
    const scaleLabel = document.getElementById("scaleLabel");
    const resetBtn = document.getElementById("reset");
    const dlSinglePDFBtn = document.getElementById("dlSinglePDF");
    const dlPDFBtn = document.getElementById("dlPDF");

    if(!badgeCanvas || !a4Canvas) return;

    badgeCanvas.width = BADGE_W;
    badgeCanvas.height = BADGE_H;
    badgeCanvas.style.width = `${config.previewCanvasWidth ?? 360}px`;
    badgeCanvas.style.height = `${(badgeCanvas.clientWidth || (config.previewCanvasWidth ?? 360)) * BADGE_H / BADGE_W}px`;

    a4Canvas.width = A4_W;
    a4Canvas.height = A4_H;
    a4Canvas.style.width = `${config.a4CanvasWidth ?? 600}px`;
    a4Canvas.style.height = `${(config.a4CanvasWidth ?? 600) * A4_H / A4_W}px`;

    const badgeCtx = badgeCanvas.getContext("2d", { alpha: false });
    const a4Ctx = a4Canvas.getContext("2d", { alpha: false });

    const photoState = {
      img: null,
      userScale: 1.0,
      baseScale: 1.0,
      offsetX: 0,
      offsetY: 0,
      dragging: false,
      lastX: 0,
      lastY: 0
    };

    let logoImg = null;
    let currentPhotoRect = { ...photoRect };

    function currentData(){
      return {
        textA: textAEl.value.trim(),
        textB: textBEl.value.trim(),
        textC: textCEl.value.trim(),
        role: roleEl.value
      };
    }

    function updateRangeFill(){
      const min = Number(scaleEl.min);
      const max = Number(scaleEl.max);
      const value = Number(scaleEl.value);
      const pct = ((value - min) / (max - min)) * 100;
      scaleEl.style.setProperty("--range-fill", `${pct}%`);
    }

    function resolveStateKey(ctx, data){
      const aLines = inferLineCount(ctx, data.textA, lineProbe.textA, 700, contentRect.w, textStyles.textA);
      const bLines = inferLineCount(ctx, data.textB, lineProbe.textB, 800, contentRect.w, textStyles.textB);
      if(aLines === 1 && bLines === 1) return "A";
      if(aLines === 2 && bLines === 1) return "B";
      if(aLines === 1 && bLines === 2) return "C";
      return "D";
    }

    function drawRole(ctx, roleKey, roleBox){
      const text = ROLE_LABELS[roleKey] || ROLE_LABELS.staff;
      const fitted = fitTextToBox(ctx, text, roleBox, 900, ROLE_TRACKING_EM, 8);
      ctx.save();
      ctx.fillStyle = "#FFFFFF";
      setFont(ctx, fitted.size, 900);
      ctx.textBaseline = "alphabetic";
      const baseline = baselineForBBoxCenter(ctx, text, roleBox.y + roleBox.h / 2);
      drawTextTracking(ctx, text, roleBox.x + roleBox.w / 2, baseline, "center", fitted.trackingPx);
      ctx.restore();
    }

    function drawDate(ctx, text){
      const fitted = fitTextToBox(ctx, text || "YYYY.MM.DD", dateBox, 700, TEXT_TRACKING_EM, 6);
      ctx.save();
      ctx.fillStyle = "#FFFFFF";
      setFont(ctx, fitted.size, 700);
      ctx.textBaseline = "alphabetic";
      const baseline = baselineForBBoxCenter(ctx, text, dateBox.y + dateBox.h / 2);
      drawTextTracking(ctx, text, dateBox.x + dateBox.w / 2, baseline, "center", fitted.trackingPx);
      ctx.restore();
    }

    function drawBadge(ctx, data, opts){
      const stateKey = resolveStateKey(ctx, data);
      const state = config.states[stateKey];
      const textABoxes = expandBoxes(state.textA, contentRect.x, contentRect.w);
      const textBBoxes = expandBoxes(state.textB, contentRect.x, contentRect.w);
      const roleBox = {
        x: roleArea.x,
        y: state.role.y,
        w: roleArea.w,
        h: state.role.h
      };

      currentPhotoRect = { ...photoRect };

      ctx.save();
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, BADGE_W, BADGE_H);

      drawTextBlock(ctx, data.textA, textABoxes, 700, contentRect.w, 6, lineProbe.textA, textStyles.textA);
      drawTextBlock(ctx, data.textB, textBBoxes, 800, contentRect.w, 6, lineProbe.textB, textStyles.textB);
      drawRole(ctx, data.role, roleBox);
      drawDate(ctx, data.textC);

      const photoBg = opts.preview ? "#FFBF00" : "#000000";
      ctx.fillStyle = photoBg;
      ctx.fillRect(currentPhotoRect.x, currentPhotoRect.y, currentPhotoRect.w, currentPhotoRect.h);

      photoState.baseScale = photoState.img
        ? Math.max(currentPhotoRect.w / photoState.img.width, currentPhotoRect.h / photoState.img.height)
        : 1.0;

      ctx.save();
      ctx.beginPath();
      ctx.rect(currentPhotoRect.x - 2, currentPhotoRect.y - 2, currentPhotoRect.w + 4, currentPhotoRect.h + 4);
      ctx.clip();

      if(photoState.img){
        const cover = photoState.baseScale * photoState.userScale * 1.02;
        const drawW = photoState.img.width * cover;
        const drawH = photoState.img.height * cover;
        const centerX = currentPhotoRect.x + currentPhotoRect.w / 2 + photoState.offsetX;
        const centerY = currentPhotoRect.y + currentPhotoRect.h / 2 + photoState.offsetY;
        ctx.drawImage(photoState.img, centerX - drawW / 2, centerY - drawH / 2, drawW, drawH);
      }
      ctx.restore();

      if(logoImg){
        const drawW = logoBox.w;
        const drawH = drawW * (logoImg.height / logoImg.width);
        const drawX = logoBox.x + (logoBox.w - drawW) / 2;
        const drawY = logoBox.y + (logoBox.h - drawH) / 2;
        ctx.drawImage(logoImg, drawX, drawY, drawW, drawH);
      }

      ctx.restore();
    }

    function drawA4(ctxA4, badgeBitmapCanvas){
      ctxA4.save();
      ctxA4.fillStyle = "#FFFFFF";
      ctxA4.fillRect(0, 0, A4_W, A4_H);

      const gap = CUTLINE_PX;
      const totalW = BADGE_W * 2 + gap;
      const totalH = BADGE_H * 2 + gap;
      const startX = Math.floor((A4_W - totalW) / 2);
      const startY = Math.floor((A4_H - totalH) / 2);

      const x1 = startX;
      const x2 = startX + BADGE_W + gap;
      const y1 = startY;
      const y2 = startY + BADGE_H + gap;

      ctxA4.drawImage(badgeBitmapCanvas, x1, y1);
      ctxA4.drawImage(badgeBitmapCanvas, x2, y1);
      ctxA4.drawImage(badgeBitmapCanvas, x1, y2);
      ctxA4.drawImage(badgeBitmapCanvas, x2, y2);

      ctxA4.fillStyle = "#000000";
      ctxA4.fillRect(startX + BADGE_W, 0, gap, A4_H);
      ctxA4.fillRect(0, startY + BADGE_H, A4_W, gap);
      ctxA4.restore();
    }

    function renderAll(){
      const data = currentData();
      drawBadge(badgeCtx, data, { preview: true });

      const off = document.createElement("canvas");
      off.width = BADGE_W;
      off.height = BADGE_H;
      const offCtx = off.getContext("2d", { alpha: false });
      drawBadge(offCtx, data, { preview: false });
      drawA4(a4Ctx, off);
    }

    function resetPhoto(){
      photoState.userScale = 1.0;
      photoState.offsetX = 0;
      photoState.offsetY = 0;
      scaleEl.value = "100";
      scaleLabel.textContent = "100%";
      updateRangeFill();
    }

    function withinPhotoArea(x, y){
      return x >= currentPhotoRect.x &&
        x <= currentPhotoRect.x + currentPhotoRect.w &&
        y >= currentPhotoRect.y &&
        y <= currentPhotoRect.y + currentPhotoRect.h;
    }

    function canvasToBadgeCoords(evt){
      const rect = badgeCanvas.getBoundingClientRect();
      const sx = BADGE_W / rect.width;
      const sy = BADGE_H / rect.height;
      return {
        x: (evt.clientX - rect.left) * sx,
        y: (evt.clientY - rect.top) * sy
      };
    }

    function sanitizeFilename(name){
      const base = (name || "PASS")
        .replace(/[\\/:*?"<>|]/g, "")
        .replace(/\s+/g, " ")
        .trim();
      return base.length ? base.slice(0, 80) : "PASS";
    }

    function showDownloadComplete(){
      window.setTimeout(() => {
        window.alert("고생하셨습니다");
      }, 0);
    }

    async function initAssets(){
      try{
        logoImg = await loadImage(svgToDataUrl(SVG_LOGO));
      }catch(error){
        console.warn("[Logo] load failed. Continue without logo.", error);
        logoImg = null;
      }
    }

    async function downloadSingleBadgePDF(){
      const jspdfNS = window.jspdf;
      if(!jspdfNS || !jspdfNS.jsPDF){
        alert("PDF 라이브러리(jsPDF)가 아직 로드되지 않았어요. 새로고침 후 다시 시도해 주세요.");
        return;
      }

      const { jsPDF } = jspdfNS;
      const data = currentData();
      const off = document.createElement("canvas");
      off.width = BADGE_W;
      off.height = BADGE_H;
      const offCtx = off.getContext("2d", { alpha: false });
      drawBadge(offCtx, data, { preview: false });

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [config.badgeWmm, config.badgeHmm],
        compress: true
      });
      pdf.addImage(off.toDataURL("image/png"), "PNG", 0, 0, config.badgeWmm, config.badgeHmm, undefined, "FAST");
      pdf.save(`${sanitizeFilename(data.textA)}_Pass_${config.badgeWmm}-${config.badgeHmm}.pdf`);
      showDownloadComplete();
    }

    async function downloadA4PDF(){
      const jspdfNS = window.jspdf;
      if(!jspdfNS || !jspdfNS.jsPDF){
        alert("PDF 라이브러리(jsPDF)가 아직 로드되지 않았어요. 새로고침 후 다시 시도해 주세요.");
        return;
      }

      const { jsPDF } = jspdfNS;
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true
      });
      pdf.addImage(a4Canvas.toDataURL("image/png"), "PNG", 0, 0, 210, 297, undefined, "FAST");
      pdf.save(`${sanitizeFilename(currentData().textA)}_Pass_${config.badgeWmm}-${config.badgeHmm}_A4.pdf`);
      showDownloadComplete();
    }

    badgeCanvas.addEventListener("pointerdown", (evt) => {
      if(!photoState.img) return;
      const { x, y } = canvasToBadgeCoords(evt);
      if(!withinPhotoArea(x, y)) return;
      photoState.dragging = true;
      photoState.lastX = x;
      photoState.lastY = y;
      badgeCanvas.setPointerCapture(evt.pointerId);
    });

    badgeCanvas.addEventListener("pointermove", (evt) => {
      if(!photoState.dragging) return;
      const { x, y } = canvasToBadgeCoords(evt);
      photoState.offsetX += x - photoState.lastX;
      photoState.offsetY += y - photoState.lastY;
      photoState.lastX = x;
      photoState.lastY = y;
      renderAll();
    });

    badgeCanvas.addEventListener("pointerup", () => {
      photoState.dragging = false;
    });

    badgeCanvas.addEventListener("pointercancel", () => {
      photoState.dragging = false;
    });

    [textAEl, textBEl, textCEl, roleEl].forEach((el) => {
      el.addEventListener("input", renderAll);
      el.addEventListener("change", renderAll);
    });

    scaleEl.addEventListener("input", () => {
      const value = Number(scaleEl.value);
      scaleLabel.textContent = `${value}%`;
      photoState.userScale = value / 100;
      updateRangeFill();
      renderAll();
    });

    photoEl.addEventListener("change", async () => {
      const file = photoEl.files?.[0];
      if(!file) return;

      const url = URL.createObjectURL(file);
      try{
        photoState.img = await loadImage(url);
      }catch(error){
        alert("이미지 로딩에 실패했어요. 다른 이미지를 시도해 주세요.");
      }finally{
        URL.revokeObjectURL(url);
      }

      resetPhoto();
      renderAll();
    });

    resetBtn.addEventListener("click", () => {
      resetPhoto();
      renderAll();
    });

    dlSinglePDFBtn.addEventListener("click", downloadSingleBadgePDF);
    dlPDFBtn.addEventListener("click", downloadA4PDF);

    (async function init(){
      updateRangeFill();
      renderAll();

      try{
        if(document.fonts && document.fonts.ready){
          await document.fonts.ready;
        }
      }catch(error){}

      await initAssets();
      renderAll();
    })();
  }

  boot();
})();
