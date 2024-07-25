// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8bDoD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5a1bda1ab8fca702";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3cYfC":[function(require,module,exports) {
/* eslint-disable no-shadow */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _gameClassJs = require("../modules/Game.class.js");
var _gameClassJsDefault = parcelHelpers.interopDefault(_gameClassJs);
"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
    // #region constants
    const MESSAGE_RESTART = "Are you sure you want to start a new game? All progress will be lost.";
    const game = new (0, _gameClassJsDefault.default)();
    const gameStart = document.querySelector(".button");
    const score = document.querySelector(".game-score");
    const messageStart = document.querySelector(".message-start");
    // #endregion
    // #region func
    const checkStatus = ()=>{
        const hasStart = gameStart.classList.contains("start");
        if (hasStart) {
            game.start(gameStart);
            messageStart.classList.add("hidden");
        } else {
            if (confirm(MESSAGE_RESTART)) {
                game.restart(gameStart);
                game.start(gameStart);
            } else return;
        }
        setUpScore();
        setUpInputOnce();
    };
    const setUpInputOnce = ()=>window.addEventListener("keydown", handleInput, {
            once: true
        });
    const setUpScore = ()=>{
        score.textContent = game.getScore();
    };
    const handleInput = (event)=>{
        switch(event.key){
            case "ArrowUp":
                game.moveUp();
                break;
            case "ArrowDown":
                game.moveDown();
                break;
            case "ArrowLeft":
                game.moveLeft();
                break;
            case "ArrowRight":
                game.moveRight();
                break;
            default:
                setUpInputOnce();
                return;
        }
        setUpScore();
        setUpInputOnce();
    };
    // #endregion
    // #region addEventListeners and initial
    setUpInputOnce();
    gameStart.addEventListener("click", checkStatus);
// #endregion
});

},{"../modules/Game.class.js":"eIbh2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eIbh2":[function(require,module,exports) {
/* eslint-disable no-console */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
const GRID_SIZE = 4;
class Game {
    constructor(){
        this.board = this.getState();
        this.score = 0;
        this.gameActive = false;
        this.cells = document.querySelectorAll(".field-cell");
        this.messageWin = document.querySelector(".message-win");
        this.messageLose = document.querySelector(".message-lose");
        this.assignDataAttributes();
    }
    assignDataAttributes() {
        this.cells.forEach((cell, index)=>{
            const row = Math.floor(index / GRID_SIZE);
            const col = index % GRID_SIZE;
            cell.dataset.row = row;
            cell.dataset.col = col;
        });
    }
    moveUp() {
        if (!this.gameActive) return;
        let changed = false;
        for(let col = 0; col < GRID_SIZE; col++)if (this.moveColumnUp(col)) changed = true;
        if (changed) {
            this.getRandomTile();
            this.addCell();
        }
        this.checkGameStatus();
    }
    moveDown() {
        if (!this.gameActive) return;
        let changed = false;
        for(let col = 0; col < GRID_SIZE; col++)if (this.moveColumnDown(col)) changed = true;
        if (changed) {
            this.getRandomTile();
            this.addCell();
        }
        this.checkGameStatus();
    }
    moveLeft() {
        if (!this.gameActive) return;
        let changed = false;
        for(let row = 0; row < GRID_SIZE; row++)if (this.moveColumnLeft(row)) changed = true;
        if (changed) {
            this.getRandomTile();
            this.addCell();
        }
        this.checkGameStatus();
    }
    moveRight() {
        if (!this.gameActive) return;
        let changed = false;
        for(let row = 0; row < GRID_SIZE; row++)if (this.moveColumnRight(row)) changed = true;
        if (changed) {
            this.getRandomTile();
            this.addCell();
        }
        this.checkGameStatus();
    }
    getScore() {
        return this.board.flat().reduce((acc, value)=>acc + value, 0);
    }
    getState() {
        return [
            ...Array(GRID_SIZE)
        ].map(()=>Array(GRID_SIZE).fill(0));
    }
    getRandomTile() {
        const emptyTiles = [];
        for(let row = 0; row < GRID_SIZE; row++){
            for(let col = 0; col < GRID_SIZE; col++)if (this.board[row][col] === 0) emptyTiles.push({
                row,
                col
            });
        }
        if (emptyTiles.length) {
            const { row, col } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
            this.board[row][col] = Math.random() < 0.9 ? 2 : 4;
            this.animateNewTile(row, col);
            return {
                row,
                col,
                value: this.board[row][col]
            };
        }
        return null;
    }
    checkWin() {
        return this.board.flat().includes(2048);
    }
    checkLose() {
        for(let row = 0; row < GRID_SIZE; row++)for(let col = 0; col < GRID_SIZE; col++){
            if (this.board[row][col] === 0) return false;
            const checkCol = col < GRID_SIZE - 1 && this.board[row][col] === this.board[row][col + 1];
            const checkRow = row < GRID_SIZE - 1 && this.board[row][col] === this.board[row + 1][col];
            if (checkCol || checkRow) return false;
        }
        return true;
    }
    getStatus() {
        if (this.checkWin()) return "win";
        if (this.checkLose()) return "lose";
        return `playing`;
    }
    checkGameStatus() {
        const gameStatus = this.getStatus();
        if (gameStatus === "win") this.messageWin.classList.remove("hidden");
        else if (gameStatus === "lose") this.messageLose.classList.remove("hidden");
    }
    addCell() {
        this.cells.forEach((cell, index)=>{
            const row = Math.floor(index / GRID_SIZE);
            const col = index % GRID_SIZE;
            const value = this.board[row][col];
            const hasValue = value ? ` field-cell--${value}` : "";
            cell.className = "field-cell" + hasValue;
            cell.textContent = value || "";
            this.animateAppear(row, col);
        });
    }
    deleteCell() {
        this.cells.forEach((cell)=>{
            cell.className = "field-cell";
            cell.textContent = "";
        });
    }
    start(element) {
        this.gameActive = true;
        this.score = 0;
        element.classList.replace("start", "restart");
        element.textContent = "Restart";
        setTimeout(()=>{
            this.getRandomTile();
            this.getRandomTile();
            this.addCell();
            this.assignDataAttributes();
        }, 100);
    }
    restart(element) {
        this.gameActive = false;
        this.score = 0;
        const hasHiddenLose = this.messageLose.classList.contains("hidden");
        const hasHiddenWin = this.messageWin.classList.contains("hidden");
        if (!hasHiddenLose) this.messageLose.classList.add("hidden");
        if (!hasHiddenWin) this.messageWin.classList.add("hidden");
        element.classList.replace("restart", "start");
        element.textContent = "Start";
        this.board = this.getState();
        this.deleteCell();
        this.assignDataAttributes();
    }
    moveColumnUp(col) {
        let changed = false;
        const compressedColumn = this.board.map((row)=>row[col]).filter((value)=>value !== 0);
        for(let i = 0; i < compressedColumn.length - 1; i++)if (compressedColumn[i] === compressedColumn[i + 1]) {
            compressedColumn[i] *= 2;
            compressedColumn.splice(i + 1, 1);
            this.score += compressedColumn[i];
            this.animateMerge(i, col);
            changed = true;
        }
        while(compressedColumn.length < GRID_SIZE)compressedColumn.push(0);
        for(let row = 0; row < GRID_SIZE; row++){
            if (this.board[row][col] !== compressedColumn[row]) changed = true;
            this.board[row][col] = compressedColumn[row];
            this.animateMove(row, col);
        }
        return changed;
    }
    moveColumnDown(col) {
        let changed = false;
        const compressedColumn = this.board.map((row)=>row[col]).filter((value)=>value !== 0);
        for(let i = compressedColumn.length - 1; i > 0; i--)if (compressedColumn[i] === compressedColumn[i - 1]) {
            compressedColumn[i] *= 2;
            compressedColumn.splice(i - 1, 1);
            this.score += compressedColumn[i];
            this.animateMerge(i, col);
            changed = true;
        }
        while(compressedColumn.length < GRID_SIZE)compressedColumn.unshift(0);
        for(let row = 0; row < GRID_SIZE; row++){
            if (this.board[row][col] !== compressedColumn[row]) changed = true;
            this.board[row][col] = compressedColumn[row];
            this.animateMove(row, col);
        }
        return changed;
    }
    moveColumnLeft(row) {
        let changed = false;
        const compressedRow = this.board[row].filter((value)=>value !== 0);
        for(let i = 0; i < compressedRow.length - 1; i++)if (compressedRow[i] === compressedRow[i + 1]) {
            compressedRow[i] *= 2;
            compressedRow.splice(i + 1, 1);
            this.score += compressedRow[i];
            this.animateMerge(row, i);
            changed = true;
        }
        while(compressedRow.length < GRID_SIZE)compressedRow.push(0);
        if (this.board[row].some((value, index)=>value !== compressedRow[index])) changed = true;
        this.board[row] = compressedRow;
        for(let col = 0; col < GRID_SIZE; col++)this.animateMove(row, col);
        return changed;
    }
    moveColumnRight(row) {
        let changed = false;
        const compressedRow = this.board[row].filter((value)=>value !== 0);
        for(let i = compressedRow.length - 1; i > 0; i--)if (compressedRow[i] === compressedRow[i - 1]) {
            compressedRow[i] *= 2;
            compressedRow.splice(i - 1, 1);
            this.score += compressedRow[i];
            this.animateMerge(row, i);
            changed = true;
        }
        while(compressedRow.length < GRID_SIZE)compressedRow.unshift(0);
        if (this.board[row].some((value, index)=>value !== compressedRow[index])) changed = true;
        this.board[row] = compressedRow;
        for(let col = 0; col < GRID_SIZE; col++)this.animateMove(row, col);
        return changed;
    }
    animateNewTile(row, col) {
        const cell = document.querySelector(`.field-cell[data-row="${row}"][data-col="${col}"]`);
        if (cell) {
            cell.classList.add("field-cell--new");
            setTimeout(()=>{
                cell.classList.remove("field-cell--new");
            }, 300);
        }
    }
    animateAppear(row, col) {
        const cell = document.querySelector(`.field-cell[data-row="${row}"][data-col="${col}"]`);
        if (cell) {
            cell.classList.add("field-cell--appear");
            setTimeout(()=>{
                cell.classList.remove("field-cell--appear");
            }, 200);
        }
    }
    animateMerge(row, col) {
        const cell = document.querySelector(`.field-cell[data-row="${row}"][data-col="${col}"]`);
        if (cell) {
            cell.classList.add("field-cell--merge");
            setTimeout(()=>{
                cell.classList.remove("field-cell--merge");
            }, 300);
        }
    }
    animateMove(row, col) {
        const cell = document.querySelector(`.field-cell[data-row="${row}"][data-col="${col}"]`);
        if (cell) {
            cell.classList.add("field-cell--move");
            setTimeout(()=>{
                cell.classList.remove("field-cell--move");
            }, 300);
        }
    }
}
exports.default = Game;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["8bDoD","3cYfC"], "3cYfC", "parcelRequire7b01")

//# sourceMappingURL=index.b8fca702.js.map
