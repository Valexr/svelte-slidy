(() => {
  var __defProp = Object.defineProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name2 in all)
      __defProp(target, name2, { get: all[name2], enumerable: true });
  };

  // fakecss:/Users/valexr/Desktop/SLIDY/www/src/cmp/Button.esbuild-svelte-fake-css
  var require_ = __commonJS({
    "fakecss:/Users/valexr/Desktop/SLIDY/www/src/cmp/Button.esbuild-svelte-fake-css"(exports, module2) {
      module2.exports = {};
    }
  });

  // fakecss:/Users/valexr/Desktop/SLIDY/www/src/cmp/Controls.esbuild-svelte-fake-css
  var require_2 = __commonJS({
    "fakecss:/Users/valexr/Desktop/SLIDY/www/src/cmp/Controls.esbuild-svelte-fake-css"(exports, module2) {
      module2.exports = {};
    }
  });

  // fakecss:/Users/valexr/Desktop/SLIDY/www/src/cmp/NavBottom.esbuild-svelte-fake-css
  var require_3 = __commonJS({
    "fakecss:/Users/valexr/Desktop/SLIDY/www/src/cmp/NavBottom.esbuild-svelte-fake-css"(exports, module2) {
      module2.exports = {};
    }
  });

  // fakecss:/Users/valexr/Desktop/SLIDY/www/src/cmp/NavThumbs.esbuild-svelte-fake-css
  var require_4 = __commonJS({
    "fakecss:/Users/valexr/Desktop/SLIDY/www/src/cmp/NavThumbs.esbuild-svelte-fake-css"(exports, module2) {
      module2.exports = {};
    }
  });

  // fakecss:/Users/valexr/Desktop/SLIDY/www/src/cmp/NavTop.esbuild-svelte-fake-css
  var require_5 = __commonJS({
    "fakecss:/Users/valexr/Desktop/SLIDY/www/src/cmp/NavTop.esbuild-svelte-fake-css"(exports, module2) {
      module2.exports = {};
    }
  });

  // fakecss:/Users/valexr/Desktop/SLIDY/www/src/cmp/Settings.esbuild-svelte-fake-css
  var require_6 = __commonJS({
    "fakecss:/Users/valexr/Desktop/SLIDY/www/src/cmp/Settings.esbuild-svelte-fake-css"(exports, module2) {
      module2.exports = {};
    }
  });

  // fakecss:/Users/valexr/Desktop/SLIDY/www/src/cmp/Spinner.esbuild-svelte-fake-css
  var require_7 = __commonJS({
    "fakecss:/Users/valexr/Desktop/SLIDY/www/src/cmp/Spinner.esbuild-svelte-fake-css"(exports, module2) {
      module2.exports = {};
    }
  });

  // fakecss:/Users/valexr/Desktop/SLIDY/www/src/cmp/SpinnerD.esbuild-svelte-fake-css
  var require_8 = __commonJS({
    "fakecss:/Users/valexr/Desktop/SLIDY/www/src/cmp/SpinnerD.esbuild-svelte-fake-css"(exports, module2) {
      module2.exports = {};
    }
  });

  // fakecss:/Users/valexr/Desktop/SLIDY/www/src/cmp/Svg.esbuild-svelte-fake-css
  var require_9 = __commonJS({
    "fakecss:/Users/valexr/Desktop/SLIDY/www/src/cmp/Svg.esbuild-svelte-fake-css"(exports, module2) {
      module2.exports = {};
    }
  });

  // fakecss:/Users/valexr/Desktop/SLIDY/www/src/cmp/Slidy.esbuild-svelte-fake-css
  var require_10 = __commonJS({
    "fakecss:/Users/valexr/Desktop/SLIDY/www/src/cmp/Slidy.esbuild-svelte-fake-css"(exports, module2) {
      module2.exports = {};
    }
  });

  // fakecss:/Users/valexr/Desktop/SLIDY/src/Slidy.esbuild-svelte-fake-css
  var require_11 = __commonJS({
    "fakecss:/Users/valexr/Desktop/SLIDY/src/Slidy.esbuild-svelte-fake-css"(exports, module2) {
      module2.exports = {};
    }
  });

  // fakecss:/Users/valexr/Desktop/SLIDY/www/src/App.esbuild-svelte-fake-css
  var require_12 = __commonJS({
    "fakecss:/Users/valexr/Desktop/SLIDY/www/src/App.esbuild-svelte-fake-css"(exports, module2) {
      module2.exports = {};
    }
  });

  // node_modules/.pnpm/svelte@3.38.2/node_modules/svelte/internal/index.mjs
  function noop() {
  }
  var identity = (x) => x;
  function assign(tar, src) {
    for (const k in src)
      tar[k] = src[k];
    return tar;
  }
  function add_location(element2, file12, line, column, char) {
    element2.__svelte_meta = {
      loc: { file: file12, line, column, char }
    };
  }
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  function is_function(thing) {
    return typeof thing === "function";
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
  }
  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }
  function validate_store(store, name2) {
    if (store != null && typeof store.subscribe !== "function") {
      throw new Error(`'${name2}' is not a store with a 'subscribe' method`);
    }
  }
  function subscribe(store, ...callbacks) {
    if (store == null) {
      return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
  }
  function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
  }
  function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
      const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
      return definition[0](slot_ctx);
    }
  }
  function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
  }
  function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
      const lets = definition[2](fn(dirty));
      if ($$scope.dirty === void 0) {
        return lets;
      }
      if (typeof lets === "object") {
        const merged = [];
        const len = Math.max($$scope.dirty.length, lets.length);
        for (let i = 0; i < len; i += 1) {
          merged[i] = $$scope.dirty[i] | lets[i];
        }
        return merged;
      }
      return $$scope.dirty | lets;
    }
    return $$scope.dirty;
  }
  function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
    const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
    if (slot_changes) {
      const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
      slot.p(slot_context, slot_changes);
    }
  }
  function null_to_empty(value) {
    return value == null ? "" : value;
  }
  function set_store_value(store, ret, value = ret) {
    store.set(value);
    return ret;
  }
  function action_destroyer(action_result) {
    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
  }
  var is_client = typeof window !== "undefined";
  var now = is_client ? () => window.performance.now() : () => Date.now();
  var raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
  var tasks = new Set();
  function run_tasks(now2) {
    tasks.forEach((task) => {
      if (!task.c(now2)) {
        tasks.delete(task);
        task.f();
      }
    });
    if (tasks.size !== 0)
      raf(run_tasks);
  }
  function loop(callback) {
    let task;
    if (tasks.size === 0)
      raf(run_tasks);
    return {
      promise: new Promise((fulfill) => {
        tasks.add(task = { c: callback, f: fulfill });
      }),
      abort() {
        tasks.delete(task);
      }
    };
  }
  function append(target, node) {
    target.appendChild(node);
  }
  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }
  function detach(node) {
    node.parentNode.removeChild(node);
  }
  function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
      if (iterations[i])
        iterations[i].d(detaching);
    }
  }
  function element(name2) {
    return document.createElement(name2);
  }
  function svg_element(name2) {
    return document.createElementNS("http://www.w3.org/2000/svg", name2);
  }
  function text(data) {
    return document.createTextNode(data);
  }
  function space() {
    return text(" ");
  }
  function empty() {
    return text("");
  }
  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
  }
  function stop_propagation(fn) {
    return function(event) {
      event.stopPropagation();
      return fn.call(this, event);
    };
  }
  function attr(node, attribute, value) {
    if (value == null)
      node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
      node.setAttribute(attribute, value);
  }
  function to_number(value) {
    return value === "" ? null : +value;
  }
  function children(element2) {
    return Array.from(element2.childNodes);
  }
  function set_input_value(input, value) {
    input.value = value == null ? "" : value;
  }
  function set_style(node, key, value, important) {
    node.style.setProperty(key, value, important ? "important" : "");
  }
  function toggle_class(element2, name2, toggle) {
    element2.classList[toggle ? "add" : "remove"](name2);
  }
  function custom_event(type, detail) {
    const e = document.createEvent("CustomEvent");
    e.initCustomEvent(type, false, false, detail);
    return e;
  }
  var active_docs = new Set();
  var active = 0;
  function hash(str) {
    let hash2 = 5381;
    let i = str.length;
    while (i--)
      hash2 = (hash2 << 5) - hash2 ^ str.charCodeAt(i);
    return hash2 >>> 0;
  }
  function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = "{\n";
    for (let p = 0; p <= 1; p += step) {
      const t = a + (b - a) * ease(p);
      keyframes += p * 100 + `%{${fn(t, 1 - t)}}
`;
    }
    const rule = keyframes + `100% {${fn(b, 1 - b)}}
}`;
    const name2 = `__svelte_${hash(rule)}_${uid}`;
    const doc = node.ownerDocument;
    active_docs.add(doc);
    const stylesheet = doc.__svelte_stylesheet || (doc.__svelte_stylesheet = doc.head.appendChild(element("style")).sheet);
    const current_rules = doc.__svelte_rules || (doc.__svelte_rules = {});
    if (!current_rules[name2]) {
      current_rules[name2] = true;
      stylesheet.insertRule(`@keyframes ${name2} ${rule}`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || "";
    node.style.animation = `${animation ? `${animation}, ` : ""}${name2} ${duration}ms linear ${delay}ms 1 both`;
    active += 1;
    return name2;
  }
  function delete_rule(node, name2) {
    const previous = (node.style.animation || "").split(", ");
    const next = previous.filter(name2 ? (anim) => anim.indexOf(name2) < 0 : (anim) => anim.indexOf("__svelte") === -1);
    const deleted = previous.length - next.length;
    if (deleted) {
      node.style.animation = next.join(", ");
      active -= deleted;
      if (!active)
        clear_rules();
    }
  }
  function clear_rules() {
    raf(() => {
      if (active)
        return;
      active_docs.forEach((doc) => {
        const stylesheet = doc.__svelte_stylesheet;
        let i = stylesheet.cssRules.length;
        while (i--)
          stylesheet.deleteRule(i);
        doc.__svelte_rules = {};
      });
      active_docs.clear();
    });
  }
  var current_component;
  function set_current_component(component) {
    current_component = component;
  }
  function get_current_component() {
    if (!current_component)
      throw new Error("Function called outside component initialization");
    return current_component;
  }
  function beforeUpdate(fn) {
    get_current_component().$$.before_update.push(fn);
  }
  function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
  }
  function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
  }
  function bubble(component, event) {
    const callbacks = component.$$.callbacks[event.type];
    if (callbacks) {
      callbacks.slice().forEach((fn) => fn(event));
    }
  }
  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = Promise.resolve();
  var update_scheduled = false;
  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }
  function tick() {
    schedule_update();
    return resolved_promise;
  }
  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }
  function add_flush_callback(fn) {
    flush_callbacks.push(fn);
  }
  var flushing = false;
  var seen_callbacks = new Set();
  function flush() {
    if (flushing)
      return;
    flushing = true;
    do {
      for (let i = 0; i < dirty_components.length; i += 1) {
        const component = dirty_components[i];
        set_current_component(component);
        update(component.$$);
      }
      set_current_component(null);
      dirty_components.length = 0;
      while (binding_callbacks.length)
        binding_callbacks.pop()();
      for (let i = 0; i < render_callbacks.length; i += 1) {
        const callback = render_callbacks[i];
        if (!seen_callbacks.has(callback)) {
          seen_callbacks.add(callback);
          callback();
        }
      }
      render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }
    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
  }
  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      const dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }
  var promise;
  function wait() {
    if (!promise) {
      promise = Promise.resolve();
      promise.then(() => {
        promise = null;
      });
    }
    return promise;
  }
  function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(`${direction ? "intro" : "outro"}${kind}`));
  }
  var outroing = new Set();
  var outros;
  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros
    };
  }
  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }
    outros = outros.p;
  }
  function transition_in(block, local2) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local2);
    }
  }
  function transition_out(block, local2, detach2, callback) {
    if (block && block.o) {
      if (outroing.has(block))
        return;
      outroing.add(block);
      outros.c.push(() => {
        outroing.delete(block);
        if (callback) {
          if (detach2)
            block.d(1);
          callback();
        }
      });
      block.o(local2);
    }
  }
  var null_transition = { duration: 0 };
  function create_bidirectional_transition(node, fn, params, intro) {
    let config = fn(node, params);
    let t = intro ? 0 : 1;
    let running_program = null;
    let pending_program = null;
    let animation_name = null;
    function clear_animation() {
      if (animation_name)
        delete_rule(node, animation_name);
    }
    function init2(program, duration) {
      const d = program.b - t;
      duration *= Math.abs(d);
      return {
        a: t,
        b: program.b,
        d,
        duration,
        start: program.start,
        end: program.start + duration,
        group: program.group
      };
    }
    function go(b) {
      const { delay = 0, duration = 300, easing = identity, tick: tick2 = noop, css } = config || null_transition;
      const program = {
        start: now() + delay,
        b
      };
      if (!b) {
        program.group = outros;
        outros.r += 1;
      }
      if (running_program || pending_program) {
        pending_program = program;
      } else {
        if (css) {
          clear_animation();
          animation_name = create_rule(node, t, b, duration, delay, easing, css);
        }
        if (b)
          tick2(0, 1);
        running_program = init2(program, duration);
        add_render_callback(() => dispatch(node, b, "start"));
        loop((now2) => {
          if (pending_program && now2 > pending_program.start) {
            running_program = init2(pending_program, duration);
            pending_program = null;
            dispatch(node, running_program.b, "start");
            if (css) {
              clear_animation();
              animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
            }
          }
          if (running_program) {
            if (now2 >= running_program.end) {
              tick2(t = running_program.b, 1 - t);
              dispatch(node, running_program.b, "end");
              if (!pending_program) {
                if (running_program.b) {
                  clear_animation();
                } else {
                  if (!--running_program.group.r)
                    run_all(running_program.group.c);
                }
              }
              running_program = null;
            } else if (now2 >= running_program.start) {
              const p = now2 - running_program.start;
              t = running_program.a + running_program.d * easing(p / running_program.duration);
              tick2(t, 1 - t);
            }
          }
          return !!(running_program || pending_program);
        });
      }
    }
    return {
      run(b) {
        if (is_function(config)) {
          wait().then(() => {
            config = config();
            go(b);
          });
        } else {
          go(b);
        }
      },
      end() {
        clear_animation();
        running_program = pending_program = null;
      }
    };
  }
  var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
  function destroy_block(block, lookup) {
    block.d(1);
    lookup.delete(block.key);
  }
  function outro_and_destroy_block(block, lookup) {
    transition_out(block, 1, 1, () => {
      lookup.delete(block.key);
    });
  }
  function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block5, next, get_context) {
    let o = old_blocks.length;
    let n = list.length;
    let i = o;
    const old_indexes = {};
    while (i--)
      old_indexes[old_blocks[i].key] = i;
    const new_blocks = [];
    const new_lookup = new Map();
    const deltas = new Map();
    i = n;
    while (i--) {
      const child_ctx = get_context(ctx, list, i);
      const key = get_key(child_ctx);
      let block = lookup.get(key);
      if (!block) {
        block = create_each_block5(key, child_ctx);
        block.c();
      } else if (dynamic) {
        block.p(child_ctx, dirty);
      }
      new_lookup.set(key, new_blocks[i] = block);
      if (key in old_indexes)
        deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    const will_move = new Set();
    const did_move = new Set();
    function insert2(block) {
      transition_in(block, 1);
      block.m(node, next);
      lookup.set(block.key, block);
      next = block.first;
      n--;
    }
    while (o && n) {
      const new_block = new_blocks[n - 1];
      const old_block = old_blocks[o - 1];
      const new_key = new_block.key;
      const old_key = old_block.key;
      if (new_block === old_block) {
        next = new_block.first;
        o--;
        n--;
      } else if (!new_lookup.has(old_key)) {
        destroy(old_block, lookup);
        o--;
      } else if (!lookup.has(new_key) || will_move.has(new_key)) {
        insert2(new_block);
      } else if (did_move.has(old_key)) {
        o--;
      } else if (deltas.get(new_key) > deltas.get(old_key)) {
        did_move.add(new_key);
        insert2(new_block);
      } else {
        will_move.add(old_key);
        o--;
      }
    }
    while (o--) {
      const old_block = old_blocks[o];
      if (!new_lookup.has(old_block.key))
        destroy(old_block, lookup);
    }
    while (n)
      insert2(new_blocks[n - 1]);
    return new_blocks;
  }
  function validate_each_keys(ctx, list, get_context, get_key) {
    const keys = new Set();
    for (let i = 0; i < list.length; i++) {
      const key = get_key(get_context(ctx, list, i));
      if (keys.has(key)) {
        throw new Error("Cannot have duplicate keys in a keyed each");
      }
      keys.add(key);
    }
  }
  function get_spread_update(levels, updates) {
    const update2 = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
      const o = levels[i];
      const n = updates[i];
      if (n) {
        for (const key in o) {
          if (!(key in n))
            to_null_out[key] = 1;
        }
        for (const key in n) {
          if (!accounted_for[key]) {
            update2[key] = n[key];
            accounted_for[key] = 1;
          }
        }
        levels[i] = n;
      } else {
        for (const key in o) {
          accounted_for[key] = 1;
        }
      }
    }
    for (const key in to_null_out) {
      if (!(key in update2))
        update2[key] = void 0;
    }
    return update2;
  }
  function get_spread_object(spread_props) {
    return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
  }
  var boolean_attributes = new Set([
    "allowfullscreen",
    "allowpaymentrequest",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "hidden",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected"
  ]);
  function bind(component, name2, callback) {
    const index2 = component.$$.props[name2];
    if (index2 !== void 0) {
      component.$$.bound[index2] = callback;
      callback(component.$$.ctx[index2]);
    }
  }
  function create_component(block) {
    block && block.c();
  }
  function mount_component(component, target, anchor, customElement) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
      add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);
        if (on_destroy) {
          on_destroy.push(...new_on_destroy);
        } else {
          run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
      });
    }
    after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching);
      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }
  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }
    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }
  function init(component, options, instance12, create_fragment12, not_equal, props, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
      fragment: null,
      ctx: null,
      props,
      update: noop,
      not_equal,
      bound: blank_object(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(parent_component ? parent_component.$$.context : options.context || []),
      callbacks: blank_object(),
      dirty,
      skip_bound: false
    };
    let ready = false;
    $$.ctx = instance12 ? instance12(component, options.props || {}, (i, ret, ...rest) => {
      const value = rest.length ? rest[0] : ret;
      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i])
          $$.bound[i](value);
        if (ready)
          make_dirty(component, i);
      }
      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment12 ? create_fragment12($$.ctx) : false;
    if (options.target) {
      if (options.hydrate) {
        const nodes = children(options.target);
        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        $$.fragment && $$.fragment.c();
      }
      if (options.intro)
        transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor, options.customElement);
      flush();
    }
    set_current_component(parent_component);
  }
  var SvelteElement;
  if (typeof HTMLElement === "function") {
    SvelteElement = class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        const { on_mount } = this.$$;
        this.$$.on_disconnect = on_mount.map(run).filter(is_function);
        for (const key in this.$$.slotted) {
          this.appendChild(this.$$.slotted[key]);
        }
      }
      attributeChangedCallback(attr2, _oldValue, newValue) {
        this[attr2] = newValue;
      }
      disconnectedCallback() {
        run_all(this.$$.on_disconnect);
      }
      $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
      $on(type, callback) {
        const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return () => {
          const index2 = callbacks.indexOf(callback);
          if (index2 !== -1)
            callbacks.splice(index2, 1);
        };
      }
      $set($$props) {
        if (this.$$set && !is_empty($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }
    };
  }
  var SvelteComponent = class {
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index2 = callbacks.indexOf(callback);
        if (index2 !== -1)
          callbacks.splice(index2, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
  function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({ version: "3.38.2" }, detail)));
  }
  function append_dev(target, node) {
    dispatch_dev("SvelteDOMInsert", { target, node });
    append(target, node);
  }
  function insert_dev(target, node, anchor) {
    dispatch_dev("SvelteDOMInsert", { target, node, anchor });
    insert(target, node, anchor);
  }
  function detach_dev(node) {
    dispatch_dev("SvelteDOMRemove", { node });
    detach(node);
  }
  function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
    const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
    if (has_prevent_default)
      modifiers.push("preventDefault");
    if (has_stop_propagation)
      modifiers.push("stopPropagation");
    dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
    const dispose = listen(node, event, handler, options);
    return () => {
      dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
      dispose();
    };
  }
  function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null)
      dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
    else
      dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
  }
  function set_data_dev(text2, data) {
    data = "" + data;
    if (text2.wholeText === data)
      return;
    dispatch_dev("SvelteDOMSetData", { node: text2, data });
    text2.data = data;
  }
  function validate_each_argument(arg) {
    if (typeof arg !== "string" && !(arg && typeof arg === "object" && "length" in arg)) {
      let msg = "{#each} only iterates over array-like objects.";
      if (typeof Symbol === "function" && arg && Symbol.iterator in arg) {
        msg += " You can use a spread to convert this iterable into an array.";
      }
      throw new Error(msg);
    }
  }
  function validate_slots(name2, slot, keys) {
    for (const slot_key of Object.keys(slot)) {
      if (!~keys.indexOf(slot_key)) {
        console.warn(`<${name2}> received an unexpected slot "${slot_key}".`);
      }
    }
  }
  var SvelteComponentDev = class extends SvelteComponent {
    constructor(options) {
      if (!options || !options.target && !options.$$inline) {
        throw new Error("'target' is a required option");
      }
      super();
    }
    $destroy() {
      super.$destroy();
      this.$destroy = () => {
        console.warn("Component was already destroyed");
      };
    }
    $capture_state() {
    }
    $inject_state() {
    }
  };

  // node_modules/.pnpm/svelte@3.38.2/node_modules/svelte/easing/index.mjs
  function cubicOut(t) {
    const f = t - 1;
    return f * f * f + 1;
  }

  // node_modules/.pnpm/svelte@3.38.2/node_modules/svelte/transition/index.mjs
  function __rest(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  }
  function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
    const o = +getComputedStyle(node).opacity;
    return {
      delay,
      duration,
      easing,
      css: (t) => `opacity: ${t * o}`
    };
  }
  function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const transform = style.transform === "none" ? "" : style.transform;
    const od = target_opacity * (1 - opacity);
    return {
      delay,
      duration,
      easing,
      css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - od * u}`
    };
  }
  function slide(node, { delay = 0, duration = 400, easing = cubicOut } = {}) {
    const style = getComputedStyle(node);
    const opacity = +style.opacity;
    const height = parseFloat(style.height);
    const padding_top = parseFloat(style.paddingTop);
    const padding_bottom = parseFloat(style.paddingBottom);
    const margin_top = parseFloat(style.marginTop);
    const margin_bottom = parseFloat(style.marginBottom);
    const border_top_width = parseFloat(style.borderTopWidth);
    const border_bottom_width = parseFloat(style.borderBottomWidth);
    return {
      delay,
      duration,
      easing,
      css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};height: ${t * height}px;padding-top: ${t * padding_top}px;padding-bottom: ${t * padding_bottom}px;margin-top: ${t * margin_top}px;margin-bottom: ${t * margin_bottom}px;border-top-width: ${t * border_top_width}px;border-bottom-width: ${t * border_bottom_width}px;`
    };
  }
  function scale(node, { delay = 0, duration = 400, easing = cubicOut, start = 0, opacity = 0 } = {}) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const transform = style.transform === "none" ? "" : style.transform;
    const sd = 1 - start;
    const od = target_opacity * (1 - opacity);
    return {
      delay,
      duration,
      easing,
      css: (_t, u) => `
			transform: ${transform} scale(${1 - sd * u});
			opacity: ${target_opacity - od * u}
		`
    };
  }
  function crossfade(_a) {
    var { fallback } = _a, defaults = __rest(_a, ["fallback"]);
    const to_receive = new Map();
    const to_send = new Map();
    function crossfade2(from, node, params) {
      const { delay = 0, duration = (d2) => Math.sqrt(d2) * 30, easing = cubicOut } = assign(assign({}, defaults), params);
      const to = node.getBoundingClientRect();
      const dx = from.left - to.left;
      const dy = from.top - to.top;
      const dw = from.width / to.width;
      const dh = from.height / to.height;
      const d = Math.sqrt(dx * dx + dy * dy);
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;
      const opacity = +style.opacity;
      return {
        delay,
        duration: is_function(duration) ? duration(d) : duration,
        easing,
        css: (t, u) => `
				opacity: ${t * opacity};
				transform-origin: top left;
				transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
			`
      };
    }
    function transition(items, counterparts, intro) {
      return (node, params) => {
        items.set(params.key, {
          rect: node.getBoundingClientRect()
        });
        return () => {
          if (counterparts.has(params.key)) {
            const { rect } = counterparts.get(params.key);
            counterparts.delete(params.key);
            return crossfade2(rect, node, params);
          }
          items.delete(params.key);
          return fallback && fallback(node, params, intro);
        };
      };
    }
    return [
      transition(to_send, to_receive, false),
      transition(to_receive, to_send, true)
    ];
  }

  // package.json
  var name = "svelte-slidy";
  var version = "2.6.8";
  var description = "SLIDY \u2013 simple, configurable & reusable carousel component built with SvelteJS";
  var main = "dist/slidy.js";
  var module = "dist/slidy.es.js";
  var svelte = "src/index.js";
  var scripts = {
    build: "node esbuild",
    dev: "node esbuild --dev",
    start: "npx derver --production --port=5000 www/public",
    predeploy: "node esbuild",
    deploy: "gh-pages -d www/public",
    prepublishOnly: "node esbuild"
  };
  var repository = {
    type: "git",
    url: "git+https://github.com/Valexr/svelte-slidy.git"
  };
  var keywords = [
    "Svelte",
    "SvelteJs",
    "Carousel",
    "Svelte-plugin"
  ];
  var author = "Valexr";
  var license = "MIT";
  var bugs = {
    url: "https://github.com/Valexr/svelte-slidy/issues"
  };
  var homepage = "https://slidy.valexr.online";
  var devDependencies = {
    derver: "^0.4.15",
    esbuild: "^0.12.5",
    "esbuild-svelte": "^0.5.1",
    "gh-pages": "^3.2.0",
    sass: "^1.34.1",
    svelte: "^3.38.2",
    "svelte-preprocess": "^4.7.3"
  };
  var peerDependencies = {
    svelte: "^3.38.2"
  };
  var package_default = {
    name,
    version,
    description,
    main,
    module,
    svelte,
    scripts,
    repository,
    keywords,
    author,
    license,
    bugs,
    homepage,
    devDependencies,
    peerDependencies
  };

  // node_modules/.pnpm/svelte@3.38.2/node_modules/svelte/store/index.mjs
  var subscriber_queue = [];
  function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set2(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;
        if (stop) {
          const run_queue = !subscriber_queue.length;
          for (let i = 0; i < subscribers.length; i += 1) {
            const s = subscribers[i];
            s[1]();
            subscriber_queue.push(s, value);
          }
          if (run_queue) {
            for (let i = 0; i < subscriber_queue.length; i += 2) {
              subscriber_queue[i][0](subscriber_queue[i + 1]);
            }
            subscriber_queue.length = 0;
          }
        }
      }
    }
    function update2(fn) {
      set2(fn(value));
    }
    function subscribe2(run2, invalidate = noop) {
      const subscriber = [run2, invalidate];
      subscribers.push(subscriber);
      if (subscribers.length === 1) {
        stop = start(set2) || noop;
      }
      run2(value);
      return () => {
        const index2 = subscribers.indexOf(subscriber);
        if (index2 !== -1) {
          subscribers.splice(index2, 1);
        }
        if (subscribers.length === 0) {
          stop();
          stop = null;
        }
      };
    }
    return { set: set2, update: update2, subscribe: subscribe2 };
  }

  // www/src/utils/settings.js
  var settingX = {
    index: 1,
    wrap: {
      id: "slidy",
      width: "100%",
      height: "100%",
      padding: "0",
      align: "middle",
      alignmargin: 50
    },
    slide: {
      gap: 50,
      class: "slide",
      width: "50%",
      height: "50%",
      backimg: false,
      imgsrckey: "src",
      objectfit: "cover",
      overflow: "hidden"
    },
    controls: {
      dots: true,
      dotsnum: true,
      dotsarrow: true,
      dotspure: true,
      arrows: false,
      keys: true,
      drag: true,
      wheel: true
    },
    options: {
      axis: "x",
      loop: false,
      duration: 550,
      intersecting: false
    }
  };
  var settings = writable(JSON.parse(sessionStorage.getItem("slidySettings")) || settingX);
  settings.subscribe((val) => sessionStorage.setItem("slidySettings", JSON.stringify(val)));
  var set = writable({
    open: false,
    input: false,
    check: false
  });
  var con = writable({
    open: false
  });
  var index = writable(4);

  // www/src/api/items.js
  var local = [
    { id: 1, header: "What is Slidy?", text: `<strong>SLIDY</strong> \u2013 simple configurable carousel component on SvelteJS`, src: "../img/face.webp" },
    { id: 2, header: "What is Slidy?", text: `<strong>SLIDY</strong> \u2013 simple configurable carousel component on SvelteJS`, src: "../img/photo.webp" },
    { id: 3, header: "What is Slidy?", text: `<strong>SLIDY</strong> \u2013 simple configurable carousel component on SvelteJS`, src: "../img/platonic.webp" },
    { id: 4, header: "What is Slidy?", text: `<strong>SLIDY</strong> \u2013 simple configurable carousel component on SvelteJS`, src: "../img/dark.webp" },
    { id: 5, header: "What is Slidy?", text: `<strong>SLIDY</strong> \u2013 simple configurable carousel component on SvelteJS`, src: "../img/reading.webp" },
    { id: 6, header: "What is Slidy?", text: `<strong>SLIDY</strong> \u2013 simple configurable carousel component on SvelteJS`, src: "../img/light.webp" },
    { id: 7, header: "What is Slidy?", text: `<strong>SLIDY</strong> \u2013 simple configurable carousel component on SvelteJS`, src: "../img/atom.webp" },
    { id: 8, header: "What is Slidy?", text: `<strong>SLIDY</strong> \u2013 simple configurable carousel component on SvelteJS`, src: "../img/photo2.webp" },
    { id: 9, header: "What is Slidy?", text: `<strong>SLIDY</strong> \u2013 simple configurable carousel component on SvelteJS`, src: "../img/torus.webp" }
  ];
  var slides = writable([]);

  // www/src/utils/utils.js
  function aspectQ(srcWidth, srcHeight, maxWidth, maxHeight) {
    let ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
    return { width: Math.round(srcWidth * ratio), height: Math.round(srcHeight * ratio) };
  }
  function randomQ(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // www/src/api/api.js
  async function getPhotos(limit, page, width = 1280, height = 800) {
    const res = await fetch(`https://picsum.photos/v2/list?limit=${limit}&page=${page}`);
    let it = await res.json();
    let dat = it.map((item) => {
      let aspect = aspectQ(item.width, item.height, width, height);
      let data = { ...item, src: `https://picsum.photos/id/${item.id}/${aspect.width}/${aspect.height}.jpg`, width: aspect.width, height: aspect.height };
      return data;
    });
    return dat;
  }

  // www/src/cmp/Button.svelte
  var file = "www/src/cmp/Button.svelte";
  function create_fragment(ctx) {
    let button;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = ctx[5].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[4], null);
    const block = {
      c: function create() {
        button = element("button");
        if (default_slot)
          default_slot.c();
        attr_dev(button, "id", ctx[0]);
        attr_dev(button, "style", ctx[1]);
        attr_dev(button, "class", "svelte-wzo9cq");
        toggle_class(button, "open", ctx[2]);
        toggle_class(button, "check", ctx[3]);
        add_location(button, file, 7, 0, 108);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, button, anchor);
        if (default_slot) {
          default_slot.m(button, null);
        }
        current = true;
        if (!mounted) {
          dispose = listen_dev(button, "click", stop_propagation(ctx[6]), false, false, true);
          mounted = true;
        }
      },
      p: function update2(ctx2, [dirty]) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 16)) {
            update_slot(default_slot, default_slot_template, ctx2, ctx2[4], dirty, null, null);
          }
        }
        if (!current || dirty & 1) {
          attr_dev(button, "id", ctx2[0]);
        }
        if (!current || dirty & 2) {
          attr_dev(button, "style", ctx2[1]);
        }
        if (dirty & 4) {
          toggle_class(button, "open", ctx2[2]);
        }
        if (dirty & 8) {
          toggle_class(button, "check", ctx2[3]);
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(default_slot, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(default_slot, local2);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(button);
        if (default_slot)
          default_slot.d(detaching);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_fragment.name,
      type: "component",
      source: "",
      ctx
    });
    return block;
  }
  function instance($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("Button", slots, ["default"]);
    let { id = "" } = $$props, { style = "" } = $$props, { open = false } = $$props, { check = false } = $$props;
    const writable_props = ["id", "style", "open", "check"];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$")
        console.warn(`<Button> was created with unknown prop '${key}'`);
    });
    function click_handler(event) {
      bubble($$self, event);
    }
    $$self.$$set = ($$props2) => {
      if ("id" in $$props2)
        $$invalidate(0, id = $$props2.id);
      if ("style" in $$props2)
        $$invalidate(1, style = $$props2.style);
      if ("open" in $$props2)
        $$invalidate(2, open = $$props2.open);
      if ("check" in $$props2)
        $$invalidate(3, check = $$props2.check);
      if ("$$scope" in $$props2)
        $$invalidate(4, $$scope = $$props2.$$scope);
    };
    $$self.$capture_state = () => ({ id, style, open, check });
    $$self.$inject_state = ($$props2) => {
      if ("id" in $$props2)
        $$invalidate(0, id = $$props2.id);
      if ("style" in $$props2)
        $$invalidate(1, style = $$props2.style);
      if ("open" in $$props2)
        $$invalidate(2, open = $$props2.open);
      if ("check" in $$props2)
        $$invalidate(3, check = $$props2.check);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    return [id, style, open, check, $$scope, slots, click_handler];
  }
  var Button = class extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance, create_fragment, safe_not_equal, { id: 0, style: 1, open: 2, check: 3 });
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "Button",
        options,
        id: create_fragment.name
      });
    }
    get id() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set id(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    get style() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set style(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    get open() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set open(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    get check() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set check(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  };
  var Button_default = Button;
  require_();

  // www/src/act/clickout.js
  function clickout(node) {
    window.addEventListener("click", handleClick);
    function handleClick(e) {
      if (!node.contains(e.target)) {
        node.dispatchEvent(new CustomEvent("clickout"));
      }
    }
    return {
      destroy() {
        window.removeEventListener("click", handleClick);
      }
    };
  }

  // www/src/cmp/Controls.svelte
  var file2 = "www/src/cmp/Controls.svelte";
  function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[18] = list[i];
    child_ctx[20] = i;
    return child_ctx;
  }
  function get_each_context_1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[21] = list[i];
    child_ctx[20] = i;
    return child_ctx;
  }
  function create_else_block(ctx) {
    let svg;
    let current;
    svg = new Svg_default({
      props: { name: "slidy-play" },
      $$inline: true
    });
    const block = {
      c: function create() {
        create_component(svg.$$.fragment);
      },
      m: function mount(target, anchor) {
        mount_component(svg, target, anchor);
        current = true;
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(svg.$$.fragment, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(svg.$$.fragment, local2);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(svg, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_else_block.name,
      type: "else",
      source: "(44:12) {:else}",
      ctx
    });
    return block;
  }
  function create_if_block(ctx) {
    let svg;
    let current;
    svg = new Svg_default({
      props: { name: "slidy-pause" },
      $$inline: true
    });
    const block = {
      c: function create() {
        create_component(svg.$$.fragment);
      },
      m: function mount(target, anchor) {
        mount_component(svg, target, anchor);
        current = true;
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(svg.$$.fragment, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(svg.$$.fragment, local2);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(svg, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block.name,
      type: "if",
      source: "(42:12) {#if play}",
      ctx
    });
    return block;
  }
  function create_each_block_1(ctx) {
    let button;
    let mounted;
    let dispose;
    function click_handler_4() {
      return ctx[12](ctx[20]);
    }
    const block = {
      c: function create() {
        button = element("button");
        set_style(button, "--imgback", "url('" + (ctx[21].src ? ctx[21].src : ctx[21].download_url) + "')");
        attr_dev(button, "class", "svelte-1hu8egl");
        toggle_class(button, "active", ctx[20] === ctx[1]);
        add_location(button, file2, 55, 12, 1915);
      },
      m: function mount(target, anchor) {
        insert_dev(target, button, anchor);
        if (!mounted) {
          dispose = listen_dev(button, "click", click_handler_4, false, false, false);
          mounted = true;
        }
      },
      p: function update2(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & 4) {
          set_style(button, "--imgback", "url('" + (ctx[21].src ? ctx[21].src : ctx[21].download_url) + "')");
        }
        if (dirty & 2) {
          toggle_class(button, "active", ctx[20] === ctx[1]);
        }
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(button);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_each_block_1.name,
      type: "each",
      source: "(55:8) {#each $slides as dot, i}",
      ctx
    });
    return block;
  }
  function create_each_block(ctx) {
    let button;
    let t_value = ctx[18].id + "";
    let t;
    let mounted;
    let dispose;
    function click_handler_6() {
      return ctx[14](ctx[20]);
    }
    const block = {
      c: function create() {
        button = element("button");
        t = text(t_value);
        set_style(button, "background-image", "url(" + (ctx[18].src ? ctx[18].src : ctx[18].download_url) + ")");
        attr_dev(button, "class", "svelte-1hu8egl");
        toggle_class(button, "active", ctx[20] === ctx[1]);
        add_location(button, file2, 62, 12, 2225);
      },
      m: function mount(target, anchor) {
        insert_dev(target, button, anchor);
        append_dev(button, t);
        if (!mounted) {
          dispose = listen_dev(button, "click", click_handler_6, false, false, false);
          mounted = true;
        }
      },
      p: function update2(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & 4 && t_value !== (t_value = ctx[18].id + ""))
          set_data_dev(t, t_value);
        if (dirty & 4) {
          set_style(button, "background-image", "url(" + (ctx[18].src ? ctx[18].src : ctx[18].download_url) + ")");
        }
        if (dirty & 2) {
          toggle_class(button, "active", ctx[20] === ctx[1]);
        }
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(button);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_each_block.name,
      type: "each",
      source: "(62:8) {#each $slides as thumb, i}",
      ctx
    });
    return block;
  }
  function create_fragment2(ctx) {
    let section;
    let h2;
    let t1;
    let h30;
    let t2;
    let strong;
    let t3;
    let t4;
    let t5;
    let label;
    let input;
    let input_max_value;
    let t6;
    let h31;
    let t8;
    let nav0;
    let button0;
    let svg0;
    let t9;
    let button1;
    let current_block_type_index;
    let if_block;
    let t10;
    let button2;
    let svg1;
    let t11;
    let h32;
    let t13;
    let nav1;
    let button3;
    let t15;
    let t16;
    let button4;
    let t18;
    let h33;
    let t20;
    let nav2;
    let clickout_action;
    let section_transition;
    let current;
    let mounted;
    let dispose;
    svg0 = new Svg_default({
      props: { name: "slidy-back" },
      $$inline: true
    });
    const if_block_creators = [create_if_block, create_else_block];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (ctx2[0])
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    svg1 = new Svg_default({
      props: { name: "slidy-forward" },
      $$inline: true
    });
    let each_value_1 = ctx[2];
    validate_each_argument(each_value_1);
    let each_blocks_1 = [];
    for (let i = 0; i < each_value_1.length; i += 1) {
      each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    }
    let each_value = ctx[2];
    validate_each_argument(each_value);
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }
    const block = {
      c: function create() {
        section = element("section");
        h2 = element("h2");
        h2.textContent = "Controls";
        t1 = space();
        h30 = element("h3");
        t2 = text("Goto ");
        strong = element("strong");
        t3 = text(ctx[1]);
        t4 = text(" index");
        t5 = space();
        label = element("label");
        input = element("input");
        t6 = space();
        h31 = element("h3");
        h31.textContent = "Buttons";
        t8 = space();
        nav0 = element("nav");
        button0 = element("button");
        create_component(svg0.$$.fragment);
        t9 = space();
        button1 = element("button");
        if_block.c();
        t10 = space();
        button2 = element("button");
        create_component(svg1.$$.fragment);
        t11 = space();
        h32 = element("h3");
        h32.textContent = "Dots";
        t13 = space();
        nav1 = element("nav");
        button3 = element("button");
        button3.textContent = "\u2190";
        t15 = space();
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].c();
        }
        t16 = space();
        button4 = element("button");
        button4.textContent = "\u2192";
        t18 = space();
        h33 = element("h3");
        h33.textContent = "Thumbs";
        t20 = space();
        nav2 = element("nav");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr_dev(h2, "class", "svelte-1hu8egl");
        add_location(h2, file2, 30, 4, 1018);
        attr_dev(strong, "class", "svelte-1hu8egl");
        add_location(strong, file2, 31, 13, 1049);
        attr_dev(h30, "class", "svelte-1hu8egl");
        add_location(h30, file2, 31, 4, 1040);
        attr_dev(input, "type", "range");
        attr_dev(input, "min", "0");
        attr_dev(input, "max", input_max_value = ctx[2].length - 1);
        attr_dev(input, "step", "1");
        attr_dev(input, "class", "svelte-1hu8egl");
        add_location(input, file2, 33, 8, 1106);
        attr_dev(label, "class", "svelte-1hu8egl");
        add_location(label, file2, 32, 4, 1090);
        attr_dev(h31, "class", "svelte-1hu8egl");
        add_location(h31, file2, 35, 4, 1208);
        attr_dev(button0, "class", "slidy-ext-controls svelte-1hu8egl");
        add_location(button0, file2, 37, 8, 1263);
        attr_dev(button1, "class", "slidy-ext-controls svelte-1hu8egl");
        toggle_class(button1, "play", ctx[0]);
        add_location(button1, file2, 40, 8, 1389);
        attr_dev(button2, "class", "slidy-ext-controls svelte-1hu8egl");
        add_location(button2, file2, 47, 8, 1640);
        attr_dev(nav0, "id", "slidy-controls");
        attr_dev(nav0, "class", "svelte-1hu8egl");
        add_location(nav0, file2, 36, 4, 1229);
        attr_dev(h32, "class", "svelte-1hu8egl");
        add_location(h32, file2, 51, 4, 1776);
        attr_dev(button3, "class", "svelte-1hu8egl");
        add_location(button3, file2, 53, 8, 1818);
        attr_dev(button4, "class", "svelte-1hu8egl");
        add_location(button4, file2, 57, 8, 2073);
        attr_dev(nav1, "id", "dots");
        attr_dev(nav1, "class", "svelte-1hu8egl");
        add_location(nav1, file2, 52, 4, 1794);
        attr_dev(h33, "class", "svelte-1hu8egl");
        add_location(h33, file2, 59, 4, 2139);
        attr_dev(nav2, "id", "thumbs");
        attr_dev(nav2, "class", "svelte-1hu8egl");
        add_location(nav2, file2, 60, 4, 2159);
        attr_dev(section, "id", "controls");
        attr_dev(section, "class", "svelte-1hu8egl");
        add_location(section, file2, 29, 0, 893);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, section, anchor);
        append_dev(section, h2);
        append_dev(section, t1);
        append_dev(section, h30);
        append_dev(h30, t2);
        append_dev(h30, strong);
        append_dev(strong, t3);
        append_dev(h30, t4);
        append_dev(section, t5);
        append_dev(section, label);
        append_dev(label, input);
        set_input_value(input, ctx[1]);
        append_dev(section, t6);
        append_dev(section, h31);
        append_dev(section, t8);
        append_dev(section, nav0);
        append_dev(nav0, button0);
        mount_component(svg0, button0, null);
        append_dev(nav0, t9);
        append_dev(nav0, button1);
        if_blocks[current_block_type_index].m(button1, null);
        append_dev(nav0, t10);
        append_dev(nav0, button2);
        mount_component(svg1, button2, null);
        append_dev(section, t11);
        append_dev(section, h32);
        append_dev(section, t13);
        append_dev(section, nav1);
        append_dev(nav1, button3);
        append_dev(nav1, t15);
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].m(nav1, null);
        }
        append_dev(nav1, t16);
        append_dev(nav1, button4);
        append_dev(section, t18);
        append_dev(section, h33);
        append_dev(section, t20);
        append_dev(section, nav2);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(nav2, null);
        }
        current = true;
        if (!mounted) {
          dispose = [
            listen_dev(window, "keydown", function() {
              if (is_function(ctx[3].open ? ctx[4] : null))
                (ctx[3].open ? ctx[4] : null).apply(this, arguments);
            }, false, false, false),
            listen_dev(input, "change", ctx[7]),
            listen_dev(input, "input", ctx[7]),
            listen_dev(button0, "click", ctx[8], false, false, false),
            listen_dev(button1, "click", ctx[9], false, false, false),
            listen_dev(button2, "click", ctx[10], false, false, false),
            listen_dev(button3, "click", ctx[11], false, false, false),
            listen_dev(button4, "click", ctx[13], false, false, false),
            action_destroyer(clickout_action = clickout.call(null, section)),
            listen_dev(section, "clickout", ctx[15], false, false, false)
          ];
          mounted = true;
        }
      },
      p: function update2(new_ctx, [dirty]) {
        ctx = new_ctx;
        if (!current || dirty & 2)
          set_data_dev(t3, ctx[1]);
        if (!current || dirty & 4 && input_max_value !== (input_max_value = ctx[2].length - 1)) {
          attr_dev(input, "max", input_max_value);
        }
        if (dirty & 2) {
          set_input_value(input, ctx[1]);
        }
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx, dirty);
        if (current_block_type_index !== previous_block_index) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block.c();
          } else {
          }
          transition_in(if_block, 1);
          if_block.m(button1, null);
        }
        if (dirty & 1) {
          toggle_class(button1, "play", ctx[0]);
        }
        if (dirty & 6) {
          each_value_1 = ctx[2];
          validate_each_argument(each_value_1);
          let i;
          for (i = 0; i < each_value_1.length; i += 1) {
            const child_ctx = get_each_context_1(ctx, each_value_1, i);
            if (each_blocks_1[i]) {
              each_blocks_1[i].p(child_ctx, dirty);
            } else {
              each_blocks_1[i] = create_each_block_1(child_ctx);
              each_blocks_1[i].c();
              each_blocks_1[i].m(nav1, t16);
            }
          }
          for (; i < each_blocks_1.length; i += 1) {
            each_blocks_1[i].d(1);
          }
          each_blocks_1.length = each_value_1.length;
        }
        if (dirty & 6) {
          each_value = ctx[2];
          validate_each_argument(each_value);
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context(ctx, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(nav2, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(svg0.$$.fragment, local2);
        transition_in(if_block);
        transition_in(svg1.$$.fragment, local2);
        add_render_callback(() => {
          if (!section_transition)
            section_transition = create_bidirectional_transition(section, fly, { x: -350, duration: 350 }, true);
          section_transition.run(1);
        });
        current = true;
      },
      o: function outro(local2) {
        transition_out(svg0.$$.fragment, local2);
        transition_out(if_block);
        transition_out(svg1.$$.fragment, local2);
        if (!section_transition)
          section_transition = create_bidirectional_transition(section, fly, { x: -350, duration: 350 }, false);
        section_transition.run(0);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(section);
        destroy_component(svg0);
        if_blocks[current_block_type_index].d();
        destroy_component(svg1);
        destroy_each(each_blocks_1, detaching);
        destroy_each(each_blocks, detaching);
        if (detaching && section_transition)
          section_transition.end();
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_fragment2.name,
      type: "component",
      source: "",
      ctx
    });
    return block;
  }
  function instance2($$self, $$props, $$invalidate) {
    let $index;
    let $slides;
    let $settings;
    let $con;
    validate_store(index, "index");
    component_subscribe($$self, index, ($$value) => $$invalidate(1, $index = $$value));
    validate_store(slides, "slides");
    component_subscribe($$self, slides, ($$value) => $$invalidate(2, $slides = $$value));
    validate_store(settings, "settings");
    component_subscribe($$self, settings, ($$value) => $$invalidate(6, $settings = $$value));
    validate_store(con, "con");
    component_subscribe($$self, con, ($$value) => $$invalidate(3, $con = $$value));
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("Controls", slots, []);
    let play = false, playduration = 550, timerPlay;
    function slidyPlay() {
      if (timerPlay !== null) {
        clearInterval(timerPlay);
      }
      $$invalidate(5, timerPlay = setInterval(() => set_store_value(index, $index++, $index), playduration));
    }
    function onKeydown(e) {
      if (e.keyCode === 27) {
        e.preventDefault();
        set_store_value(con, $con.open = !$con.open, $con);
      }
    }
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$")
        console.warn(`<Controls> was created with unknown prop '${key}'`);
    });
    function input_change_input_handler() {
      $index = to_number(this.value);
      index.set($index);
    }
    const click_handler = () => set_store_value(index, $index--, $index);
    const click_handler_1 = () => $$invalidate(0, play = !play);
    const click_handler_2 = () => set_store_value(index, $index++, $index);
    const click_handler_3 = () => set_store_value(index, $index--, $index);
    const click_handler_4 = (i) => set_store_value(index, $index = i, $index);
    const click_handler_5 = () => set_store_value(index, $index++, $index);
    const click_handler_6 = (i) => set_store_value(index, $index = i, $index);
    const clickout_handler = () => set_store_value(con, $con.open = false, $con);
    $$self.$capture_state = () => ({
      fly,
      settings,
      con,
      index,
      clickout,
      slides,
      Svg: Svg_default,
      play,
      playduration,
      timerPlay,
      slidyPlay,
      onKeydown,
      $index,
      $slides,
      $settings,
      $con
    });
    $$self.$inject_state = ($$props2) => {
      if ("play" in $$props2)
        $$invalidate(0, play = $$props2.play);
      if ("playduration" in $$props2)
        playduration = $$props2.playduration;
      if ("timerPlay" in $$props2)
        $$invalidate(5, timerPlay = $$props2.timerPlay);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 70) {
        $:
          if ($slides)
            !$settings.options.loop && $index >= $slides.length - 1 || !$settings.options.loop && $index <= 0 ? $$invalidate(0, play = false) : null;
      }
      if ($$self.$$.dirty & 41) {
        $:
          play && $con.open ? slidyPlay() : clearInterval(timerPlay);
      }
    };
    return [
      play,
      $index,
      $slides,
      $con,
      onKeydown,
      timerPlay,
      $settings,
      input_change_input_handler,
      click_handler,
      click_handler_1,
      click_handler_2,
      click_handler_3,
      click_handler_4,
      click_handler_5,
      click_handler_6,
      clickout_handler
    ];
  }
  var Controls = class extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance2, create_fragment2, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "Controls",
        options,
        id: create_fragment2.name
      });
    }
  };
  var Controls_default = Controls;
  require_2();

  // www/src/cmp/NavBottom.svelte
  var file3 = "www/src/cmp/NavBottom.svelte";
  function get_each_context2(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[5] = list[i];
    child_ctx[7] = i;
    return child_ctx;
  }
  function create_each_block2(ctx) {
    let span;
    let t_value = ctx[5] + "";
    let t;
    let mounted;
    let dispose;
    function click_handler() {
      return ctx[2](ctx[7]);
    }
    const block = {
      c: function create() {
        span = element("span");
        t = text(t_value);
        attr_dev(span, "class", "svelte-1gkkmuy");
        toggle_class(span, "active", ctx[7] === ctx[0]);
        add_location(span, file3, 26, 16, 610);
      },
      m: function mount(target, anchor) {
        insert_dev(target, span, anchor);
        append_dev(span, t);
        if (!mounted) {
          dispose = listen_dev(span, "click", click_handler, false, false, false);
          mounted = true;
        }
      },
      p: function update2(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & 1) {
          toggle_class(span, "active", ctx[7] === ctx[0]);
        }
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(span);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_each_block2.name,
      type: "each",
      source: "(26:12) {#each alignvals as val, i}",
      ctx
    });
    return block;
  }
  function create_fragment3(ctx) {
    let nav;
    let label;
    let div;
    let t;
    let input;
    let mounted;
    let dispose;
    let each_value = ctx[1];
    validate_each_argument(each_value);
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block2(get_each_context2(ctx, each_value, i));
    }
    const block = {
      c: function create() {
        nav = element("nav");
        label = element("label");
        div = element("div");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t = space();
        input = element("input");
        attr_dev(div, "class", "svelte-1gkkmuy");
        add_location(div, file3, 24, 8, 548);
        attr_dev(input, "type", "range");
        attr_dev(input, "min", "0");
        attr_dev(input, "max", "2");
        attr_dev(input, "step", "1");
        attr_dev(input, "class", "svelte-1gkkmuy");
        add_location(input, file3, 29, 8, 728);
        attr_dev(label, "id", "slidy-align");
        add_location(label, file3, 23, 4, 515);
        attr_dev(nav, "id", "slidy-controls-bottom");
        attr_dev(nav, "class", "svelte-1gkkmuy");
        add_location(nav, file3, 22, 0, 478);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, nav, anchor);
        append_dev(nav, label);
        append_dev(label, div);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(div, null);
        }
        append_dev(label, t);
        append_dev(label, input);
        set_input_value(input, ctx[0]);
        if (!mounted) {
          dispose = [
            listen_dev(input, "change", ctx[3]),
            listen_dev(input, "input", ctx[3])
          ];
          mounted = true;
        }
      },
      p: function update2(ctx2, [dirty]) {
        if (dirty & 3) {
          each_value = ctx2[1];
          validate_each_argument(each_value);
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context2(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block2(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(div, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
        if (dirty & 1) {
          set_input_value(input, ctx2[0]);
        }
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(nav);
        destroy_each(each_blocks, detaching);
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_fragment3.name,
      type: "component",
      source: "",
      ctx
    });
    return block;
  }
  function instance3($$self, $$props, $$invalidate) {
    let $settings;
    validate_store(settings, "settings");
    component_subscribe($$self, settings, ($$value) => $$invalidate(4, $settings = $$value));
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("NavBottom", slots, []);
    let align = 1, alignvals = ["start", "middle", "end"];
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$")
        console.warn(`<NavBottom> was created with unknown prop '${key}'`);
    });
    const click_handler = (i) => $$invalidate(0, align = i);
    function input_change_input_handler() {
      align = to_number(this.value);
      $$invalidate(0, align);
    }
    $$self.$capture_state = () => ({ settings, align, alignvals, $settings });
    $$self.$inject_state = ($$props2) => {
      if ("align" in $$props2)
        $$invalidate(0, align = $$props2.align);
      if ("alignvals" in $$props2)
        $$invalidate(1, alignvals = $$props2.alignvals);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 1) {
        $:
          switch (align) {
            case 0:
              set_store_value(settings, $settings.wrap.align = "start", $settings);
              break;
            case 1:
              set_store_value(settings, $settings.wrap.align = "middle", $settings);
              break;
            case 2:
              set_store_value(settings, $settings.wrap.align = "end", $settings);
              break;
            default:
              set_store_value(settings, $settings.wrap.align = "middle", $settings);
              break;
          }
      }
    };
    return [align, alignvals, click_handler, input_change_input_handler];
  }
  var NavBottom = class extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance3, create_fragment3, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "NavBottom",
        options,
        id: create_fragment3.name
      });
    }
  };
  var NavBottom_default = NavBottom;
  require_3();

  // www/src/cmp/NavThumbs.svelte
  var file4 = "www/src/cmp/NavThumbs.svelte";
  function get_each_context3(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[4] = list[i];
    child_ctx[6] = i;
    return child_ctx;
  }
  function create_each_block3(key_1, ctx) {
    let button;
    let mounted;
    let dispose;
    function click_handler() {
      return ctx[3](ctx[6]);
    }
    const block = {
      key: key_1,
      first: null,
      c: function create() {
        button = element("button");
        set_style(button, "background-image", "url(" + (ctx[4].src ? ctx[4].src : ctx[4].download_url) + ")");
        attr_dev(button, "class", "svelte-duztqv");
        toggle_class(button, "active", ctx[6] === ctx[2]);
        add_location(button, file4, 7, 8, 216);
        this.first = button;
      },
      m: function mount(target, anchor) {
        insert_dev(target, button, anchor);
        if (!mounted) {
          dispose = listen_dev(button, "click", click_handler, false, false, false);
          mounted = true;
        }
      },
      p: function update2(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & 2) {
          set_style(button, "background-image", "url(" + (ctx[4].src ? ctx[4].src : ctx[4].download_url) + ")");
        }
        if (dirty & 6) {
          toggle_class(button, "active", ctx[6] === ctx[2]);
        }
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(button);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_each_block3.name,
      type: "each",
      source: "(7:4) {#each $slides as dot, i (dot.id)}",
      ctx
    });
    return block;
  }
  function create_fragment4(ctx) {
    let nav;
    let each_blocks = [];
    let each_1_lookup = new Map();
    let each_value = ctx[1];
    validate_each_argument(each_value);
    const get_key = (ctx2) => ctx2[4].id;
    validate_each_keys(ctx, each_value, get_each_context3, get_key);
    for (let i = 0; i < each_value.length; i += 1) {
      let child_ctx = get_each_context3(ctx, each_value, i);
      let key = get_key(child_ctx);
      each_1_lookup.set(key, each_blocks[i] = create_each_block3(key, child_ctx));
    }
    const block = {
      c: function create() {
        nav = element("nav");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        attr_dev(nav, "id", "thumbs");
        attr_dev(nav, "class", "svelte-duztqv");
        toggle_class(nav, "axisx", ctx[0].options.axis !== "y");
        add_location(nav, file4, 5, 0, 106);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, nav, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(nav, null);
        }
      },
      p: function update2(ctx2, [dirty]) {
        if (dirty & 6) {
          each_value = ctx2[1];
          validate_each_argument(each_value);
          validate_each_keys(ctx2, each_value, get_each_context3, get_key);
          each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, nav, destroy_block, create_each_block3, null, get_each_context3);
        }
        if (dirty & 1) {
          toggle_class(nav, "axisx", ctx2[0].options.axis !== "y");
        }
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(nav);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].d();
        }
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_fragment4.name,
      type: "component",
      source: "",
      ctx
    });
    return block;
  }
  function instance4($$self, $$props, $$invalidate) {
    let $settings;
    let $slides;
    let $index;
    validate_store(settings, "settings");
    component_subscribe($$self, settings, ($$value) => $$invalidate(0, $settings = $$value));
    validate_store(slides, "slides");
    component_subscribe($$self, slides, ($$value) => $$invalidate(1, $slides = $$value));
    validate_store(index, "index");
    component_subscribe($$self, index, ($$value) => $$invalidate(2, $index = $$value));
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("NavThumbs", slots, []);
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$")
        console.warn(`<NavThumbs> was created with unknown prop '${key}'`);
    });
    const click_handler = (i) => set_store_value(index, $index = i, $index);
    $$self.$capture_state = () => ({
      settings,
      index,
      slides,
      $settings,
      $slides,
      $index
    });
    return [$settings, $slides, $index, click_handler];
  }
  var NavThumbs = class extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance4, create_fragment4, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "NavThumbs",
        options,
        id: create_fragment4.name
      });
    }
  };
  var NavThumbs_default = NavThumbs;
  require_4();

  // www/src/cmp/NavTop.svelte
  var file5 = "www/src/cmp/NavTop.svelte";
  function create_fragment5(ctx) {
    let nav;
    let div0;
    let button0;
    let svg0;
    let t0;
    let button1;
    let svg1;
    let t1;
    let button2;
    let svg2;
    let t2;
    let button3;
    let svg3;
    let t3;
    let button4;
    let svg4;
    let t4;
    let div1;
    let button5;
    let svg5;
    let t5;
    let button6;
    let svg6;
    let t6;
    let button7;
    let svg7;
    let current;
    let mounted;
    let dispose;
    svg0 = new Svg_default({
      props: {
        name: "slidy-repeat",
        transform: "scale(0.69)",
        color: ctx[4].options.loop ? "blue" : "white"
      },
      $$inline: true
    });
    svg1 = new Svg_default({
      props: { name: "slidy-back" },
      $$inline: true
    });
    svg2 = new Svg_default({
      props: {
        name: ctx[2] ? "slidy-pause" : "slidy-play"
      },
      $$inline: true
    });
    svg3 = new Svg_default({
      props: { name: "slidy-forward" },
      $$inline: true
    });
    svg4 = new Svg_default({
      props: {
        name: !ctx[4].options.intersecting ? "slidy-eye-off" : "slidy-eye",
        transform: "scale(0.69)",
        color: ctx[4].options.intersecting ? "blue" : "white"
      },
      $$inline: true
    });
    svg5 = new Svg_default({
      props: { name: "slidy-mines" },
      $$inline: true
    });
    svg6 = new Svg_default({
      props: { name: "slidy-refresh" },
      $$inline: true
    });
    svg7 = new Svg_default({
      props: { name: "slidy-plus" },
      $$inline: true
    });
    const block = {
      c: function create() {
        nav = element("nav");
        div0 = element("div");
        button0 = element("button");
        create_component(svg0.$$.fragment);
        t0 = space();
        button1 = element("button");
        create_component(svg1.$$.fragment);
        t1 = space();
        button2 = element("button");
        create_component(svg2.$$.fragment);
        t2 = space();
        button3 = element("button");
        create_component(svg3.$$.fragment);
        t3 = space();
        button4 = element("button");
        create_component(svg4.$$.fragment);
        t4 = space();
        div1 = element("div");
        button5 = element("button");
        create_component(svg5.$$.fragment);
        t5 = space();
        button6 = element("button");
        create_component(svg6.$$.fragment);
        t6 = space();
        button7 = element("button");
        create_component(svg7.$$.fragment);
        attr_dev(button0, "class", "slidy-ext-controls svelte-1tk7p0y");
        add_location(button0, file5, 28, 8, 755);
        attr_dev(button1, "class", "slidy-ext-controls svelte-1tk7p0y");
        add_location(button1, file5, 38, 8, 1092);
        attr_dev(button2, "class", "slidy-ext-controls svelte-1tk7p0y");
        toggle_class(button2, "play", ctx[2]);
        add_location(button2, file5, 41, 8, 1218);
        attr_dev(button3, "class", "slidy-ext-controls svelte-1tk7p0y");
        add_location(button3, file5, 48, 8, 1431);
        attr_dev(button4, "class", "slidy-ext-controls svelte-1tk7p0y");
        add_location(button4, file5, 51, 8, 1560);
        attr_dev(div0, "class", "svelte-1tk7p0y");
        add_location(div0, file5, 27, 4, 741);
        attr_dev(button5, "class", "slidy-ext-controls svelte-1tk7p0y");
        add_location(button5, file5, 68, 8, 2169);
        attr_dev(button6, "class", "slidy-ext-controls svelte-1tk7p0y");
        add_location(button6, file5, 71, 8, 2295);
        attr_dev(button7, "class", "slidy-ext-controls svelte-1tk7p0y");
        add_location(button7, file5, 77, 8, 2472);
        attr_dev(div1, "class", "svelte-1tk7p0y");
        add_location(div1, file5, 67, 4, 2155);
        attr_dev(nav, "id", "slidy-controls");
        attr_dev(nav, "class", "svelte-1tk7p0y");
        add_location(nav, file5, 26, 0, 711);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, nav, anchor);
        append_dev(nav, div0);
        append_dev(div0, button0);
        mount_component(svg0, button0, null);
        append_dev(div0, t0);
        append_dev(div0, button1);
        mount_component(svg1, button1, null);
        append_dev(div0, t1);
        append_dev(div0, button2);
        mount_component(svg2, button2, null);
        append_dev(div0, t2);
        append_dev(div0, button3);
        mount_component(svg3, button3, null);
        append_dev(div0, t3);
        append_dev(div0, button4);
        mount_component(svg4, button4, null);
        append_dev(nav, t4);
        append_dev(nav, div1);
        append_dev(div1, button5);
        mount_component(svg5, button5, null);
        append_dev(div1, t5);
        append_dev(div1, button6);
        mount_component(svg6, button6, null);
        append_dev(div1, t6);
        append_dev(div1, button7);
        mount_component(svg7, button7, null);
        current = true;
        if (!mounted) {
          dispose = [
            listen_dev(button0, "click", ctx[7], false, false, false),
            listen_dev(button1, "click", ctx[8], false, false, false),
            listen_dev(button2, "click", ctx[9], false, false, false),
            listen_dev(button3, "click", ctx[10], false, false, false),
            listen_dev(button4, "click", ctx[11], false, false, false),
            listen_dev(button5, "click", ctx[12], false, false, false),
            listen_dev(button6, "click", ctx[13], false, false, false),
            listen_dev(button7, "click", ctx[14], false, false, false)
          ];
          mounted = true;
        }
      },
      p: function update2(ctx2, [dirty]) {
        const svg0_changes = {};
        if (dirty & 16)
          svg0_changes.color = ctx2[4].options.loop ? "blue" : "white";
        svg0.$set(svg0_changes);
        const svg2_changes = {};
        if (dirty & 4)
          svg2_changes.name = ctx2[2] ? "slidy-pause" : "slidy-play";
        svg2.$set(svg2_changes);
        if (dirty & 4) {
          toggle_class(button2, "play", ctx2[2]);
        }
        const svg4_changes = {};
        if (dirty & 16)
          svg4_changes.name = !ctx2[4].options.intersecting ? "slidy-eye-off" : "slidy-eye";
        if (dirty & 16)
          svg4_changes.color = ctx2[4].options.intersecting ? "blue" : "white";
        svg4.$set(svg4_changes);
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(svg0.$$.fragment, local2);
        transition_in(svg1.$$.fragment, local2);
        transition_in(svg2.$$.fragment, local2);
        transition_in(svg3.$$.fragment, local2);
        transition_in(svg4.$$.fragment, local2);
        transition_in(svg5.$$.fragment, local2);
        transition_in(svg6.$$.fragment, local2);
        transition_in(svg7.$$.fragment, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(svg0.$$.fragment, local2);
        transition_out(svg1.$$.fragment, local2);
        transition_out(svg2.$$.fragment, local2);
        transition_out(svg3.$$.fragment, local2);
        transition_out(svg4.$$.fragment, local2);
        transition_out(svg5.$$.fragment, local2);
        transition_out(svg6.$$.fragment, local2);
        transition_out(svg7.$$.fragment, local2);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(nav);
        destroy_component(svg0);
        destroy_component(svg1);
        destroy_component(svg2);
        destroy_component(svg3);
        destroy_component(svg4);
        destroy_component(svg5);
        destroy_component(svg6);
        destroy_component(svg7);
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_fragment5.name,
      type: "component",
      source: "",
      ctx
    });
    return block;
  }
  function instance5($$self, $$props, $$invalidate) {
    let $index;
    let $slides;
    let $settings;
    validate_store(index, "index");
    component_subscribe($$self, index, ($$value) => $$invalidate(3, $index = $$value));
    validate_store(slides, "slides");
    component_subscribe($$self, slides, ($$value) => $$invalidate(6, $slides = $$value));
    validate_store(settings, "settings");
    component_subscribe($$self, settings, ($$value) => $$invalidate(4, $settings = $$value));
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("NavTop", slots, []);
    let { limit = 9 } = $$props, { page = 25 } = $$props;
    let play = false, playduration = 550, timerPlay;
    function slidyPlay() {
      if (timerPlay !== null) {
        clearInterval(timerPlay);
      }
      $$invalidate(5, timerPlay = setInterval(() => set_store_value(index, $index++, $index), playduration));
    }
    const writable_props = ["limit", "page"];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$")
        console.warn(`<NavTop> was created with unknown prop '${key}'`);
    });
    const click_handler = () => set_store_value(settings, $settings.options.loop = !$settings.options.loop, $settings);
    const click_handler_1 = () => set_store_value(index, $index--, $index);
    const click_handler_2 = () => $$invalidate(2, play = !play);
    const click_handler_3 = () => set_store_value(index, $index++, $index);
    const click_handler_4 = () => set_store_value(settings, $settings.options.intersecting = !$settings.options.intersecting, $settings);
    const click_handler_5 = () => $$invalidate(0, limit--, limit);
    const click_handler_6 = () => $$invalidate(1, page = randomQ(0, 96));
    const click_handler_7 = () => $$invalidate(0, limit++, limit);
    $$self.$$set = ($$props2) => {
      if ("limit" in $$props2)
        $$invalidate(0, limit = $$props2.limit);
      if ("page" in $$props2)
        $$invalidate(1, page = $$props2.page);
    };
    $$self.$capture_state = () => ({
      settings,
      index,
      slides,
      randomQ,
      Svg: Svg_default,
      limit,
      page,
      play,
      playduration,
      timerPlay,
      slidyPlay,
      $index,
      $slides,
      $settings
    });
    $$self.$inject_state = ($$props2) => {
      if ("limit" in $$props2)
        $$invalidate(0, limit = $$props2.limit);
      if ("page" in $$props2)
        $$invalidate(1, page = $$props2.page);
      if ("play" in $$props2)
        $$invalidate(2, play = $$props2.play);
      if ("playduration" in $$props2)
        playduration = $$props2.playduration;
      if ("timerPlay" in $$props2)
        $$invalidate(5, timerPlay = $$props2.timerPlay);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 88) {
        $:
          if ($slides)
            !$settings.options.loop && $index >= $slides.length - 1 || !$settings.options.loop && $index <= 0 ? $$invalidate(2, play = false) : null;
      }
      if ($$self.$$.dirty & 36) {
        $:
          play ? slidyPlay() : clearInterval(timerPlay);
      }
    };
    return [
      limit,
      page,
      play,
      $index,
      $settings,
      timerPlay,
      $slides,
      click_handler,
      click_handler_1,
      click_handler_2,
      click_handler_3,
      click_handler_4,
      click_handler_5,
      click_handler_6,
      click_handler_7
    ];
  }
  var NavTop = class extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance5, create_fragment5, safe_not_equal, { limit: 0, page: 1 });
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "NavTop",
        options,
        id: create_fragment5.name
      });
    }
    get limit() {
      throw new Error("<NavTop>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set limit(value) {
      throw new Error("<NavTop>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    get page() {
      throw new Error("<NavTop>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set page(value) {
      throw new Error("<NavTop>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  };
  var NavTop_default = NavTop;
  require_5();

  // www/src/cmp/Settings.svelte
  var file6 = "www/src/cmp/Settings.svelte";
  function create_fragment6(ctx) {
    let section;
    let h2;
    let t1;
    let pre;
    let code;
    let clickout_action;
    let section_transition;
    let current;
    let mounted;
    let dispose;
    const block = {
      c: function create() {
        section = element("section");
        h2 = element("h2");
        h2.textContent = "Settings";
        t1 = space();
        pre = element("pre");
        code = element("code");
        attr_dev(h2, "class", "svelte-1xlbxt3");
        add_location(h2, file6, 38, 4, 953);
        attr_dev(code, "contenteditable", "true");
        attr_dev(code, "class", "svelte-1xlbxt3");
        if (ctx[1] === void 0)
          add_render_callback(() => ctx[3].call(code));
        add_location(code, file6, 40, 8, 989);
        attr_dev(pre, "class", "svelte-1xlbxt3");
        add_location(pre, file6, 39, 4, 975);
        attr_dev(section, "id", "settings");
        attr_dev(section, "class", "svelte-1xlbxt3");
        add_location(section, file6, 32, 0, 812);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, section, anchor);
        append_dev(section, h2);
        append_dev(section, t1);
        append_dev(section, pre);
        append_dev(pre, code);
        if (ctx[1] !== void 0) {
          code.textContent = ctx[1];
        }
        current = true;
        if (!mounted) {
          dispose = [
            listen_dev(window, "keydown", function() {
              if (is_function(ctx[0].open ? ctx[2] : null))
                (ctx[0].open ? ctx[2] : null).apply(this, arguments);
            }, false, false, false),
            listen_dev(code, "input", ctx[3]),
            listen_dev(code, "input", ctx[4], false, false, false),
            action_destroyer(clickout_action = clickout.call(null, section)),
            listen_dev(section, "clickout", ctx[5], false, false, false)
          ];
          mounted = true;
        }
      },
      p: function update2(new_ctx, [dirty]) {
        ctx = new_ctx;
        if (dirty & 2 && ctx[1] !== code.textContent) {
          code.textContent = ctx[1];
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        add_render_callback(() => {
          if (!section_transition)
            section_transition = create_bidirectional_transition(section, fly, { x: 350, duration: 350 }, true);
          section_transition.run(1);
        });
        current = true;
      },
      o: function outro(local2) {
        if (!section_transition)
          section_transition = create_bidirectional_transition(section, fly, { x: 350, duration: 350 }, false);
        section_transition.run(0);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(section);
        if (detaching && section_transition)
          section_transition.end();
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_fragment6.name,
      type: "component",
      source: "",
      ctx
    });
    return block;
  }
  function instance6($$self, $$props, $$invalidate) {
    let $settings;
    let $set;
    validate_store(settings, "settings");
    component_subscribe($$self, settings, ($$value) => $$invalidate(6, $settings = $$value));
    validate_store(set, "set");
    component_subscribe($$self, set, ($$value) => $$invalidate(0, $set = $$value));
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("Settings", slots, []);
    let text2 = JSON.stringify($settings, 0, 2);
    function onKeydown(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        if ($set.input) {
          set_store_value(set, $set.check = !$set.check, $set);
          set_store_value(set, $set.input = false, $set);
        }
      } else if (e.keyCode === 27) {
        e.preventDefault();
        set_store_value(set, $set.check = !$set.check, $set);
        set_store_value(set, $set.input = false, $set);
        set_store_value(set, $set.open = !$set.open, $set);
      }
    }
    function setSettings() {
      set_store_value(settings, $settings = JSON.parse(text2), $settings);
      set_store_value(set, $set.check = !$set.check, $set);
    }
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$")
        console.warn(`<Settings> was created with unknown prop '${key}'`);
    });
    function code_input_handler() {
      text2 = this.textContent;
      $$invalidate(1, text2);
    }
    const input_handler = () => set_store_value(set, $set.input = true, $set);
    const clickout_handler = () => set_store_value(set, $set.open = false, $set);
    $$self.$capture_state = () => ({
      fly,
      settings,
      set,
      clickout,
      text: text2,
      onKeydown,
      setSettings,
      $settings,
      $set
    });
    $$self.$inject_state = ($$props2) => {
      if ("text" in $$props2)
        $$invalidate(1, text2 = $$props2.text);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 1) {
        $:
          $set.check && setSettings();
      }
    };
    return [$set, text2, onKeydown, code_input_handler, input_handler, clickout_handler];
  }
  var Settings = class extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance6, create_fragment6, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "Settings",
        options,
        id: create_fragment6.name
      });
    }
  };
  var Settings_default = Settings;
  require_6();

  // www/src/cmp/Spinner.svelte
  var file7 = "www/src/cmp/Spinner.svelte";
  function create_fragment7(ctx) {
    let svg;
    let circle;
    let circle_stroke_dasharray_value;
    const block = {
      c: function create() {
        svg = svg_element("svg");
        circle = svg_element("circle");
        attr_dev(circle, "role", "presentation");
        attr_dev(circle, "cx", "16");
        attr_dev(circle, "cy", "16");
        attr_dev(circle, "r", ctx[4]);
        attr_dev(circle, "stroke", ctx[2]);
        attr_dev(circle, "fill", "none");
        attr_dev(circle, "stroke-width", ctx[3]);
        attr_dev(circle, "stroke-dasharray", circle_stroke_dasharray_value = "" + (ctx[5] + ",100"));
        attr_dev(circle, "stroke-linecap", "round");
        add_location(circle, file7, 17, 4, 384);
        attr_dev(svg, "height", ctx[0]);
        attr_dev(svg, "width", ctx[0]);
        set_style(svg, "animation-duration", ctx[1] + "ms");
        attr_dev(svg, "class", "svelte-spinner svelte-1ivtu7s");
        attr_dev(svg, "viewBox", "0 0 32 32");
        add_location(svg, file7, 11, 0, 246);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, svg, anchor);
        append_dev(svg, circle);
      },
      p: function update2(ctx2, [dirty]) {
        if (dirty & 16) {
          attr_dev(circle, "r", ctx2[4]);
        }
        if (dirty & 4) {
          attr_dev(circle, "stroke", ctx2[2]);
        }
        if (dirty & 8) {
          attr_dev(circle, "stroke-width", ctx2[3]);
        }
        if (dirty & 32 && circle_stroke_dasharray_value !== (circle_stroke_dasharray_value = "" + (ctx2[5] + ",100"))) {
          attr_dev(circle, "stroke-dasharray", circle_stroke_dasharray_value);
        }
        if (dirty & 1) {
          attr_dev(svg, "height", ctx2[0]);
        }
        if (dirty & 1) {
          attr_dev(svg, "width", ctx2[0]);
        }
        if (dirty & 2) {
          set_style(svg, "animation-duration", ctx2[1] + "ms");
        }
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(svg);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_fragment7.name,
      type: "component",
      source: "",
      ctx
    });
    return block;
  }
  function instance7($$self, $$props, $$invalidate) {
    let dash;
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("Spinner", slots, []);
    let { size = 75 } = $$props;
    let { speed = 550 } = $$props;
    let { color = "red" } = $$props;
    let { thickness = 1 } = $$props;
    let { gap = 25 } = $$props;
    let { radius = 10 } = $$props;
    const writable_props = ["size", "speed", "color", "thickness", "gap", "radius"];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$")
        console.warn(`<Spinner> was created with unknown prop '${key}'`);
    });
    $$self.$$set = ($$props2) => {
      if ("size" in $$props2)
        $$invalidate(0, size = $$props2.size);
      if ("speed" in $$props2)
        $$invalidate(1, speed = $$props2.speed);
      if ("color" in $$props2)
        $$invalidate(2, color = $$props2.color);
      if ("thickness" in $$props2)
        $$invalidate(3, thickness = $$props2.thickness);
      if ("gap" in $$props2)
        $$invalidate(6, gap = $$props2.gap);
      if ("radius" in $$props2)
        $$invalidate(4, radius = $$props2.radius);
    };
    $$self.$capture_state = () => ({
      size,
      speed,
      color,
      thickness,
      gap,
      radius,
      dash
    });
    $$self.$inject_state = ($$props2) => {
      if ("size" in $$props2)
        $$invalidate(0, size = $$props2.size);
      if ("speed" in $$props2)
        $$invalidate(1, speed = $$props2.speed);
      if ("color" in $$props2)
        $$invalidate(2, color = $$props2.color);
      if ("thickness" in $$props2)
        $$invalidate(3, thickness = $$props2.thickness);
      if ("gap" in $$props2)
        $$invalidate(6, gap = $$props2.gap);
      if ("radius" in $$props2)
        $$invalidate(4, radius = $$props2.radius);
      if ("dash" in $$props2)
        $$invalidate(5, dash = $$props2.dash);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 80) {
        $:
          $$invalidate(5, dash = 2 * Math.PI * radius * (100 - gap) / 100);
      }
    };
    return [size, speed, color, thickness, radius, dash, gap];
  }
  var Spinner = class extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance7, create_fragment7, safe_not_equal, {
        size: 0,
        speed: 1,
        color: 2,
        thickness: 3,
        gap: 6,
        radius: 4
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "Spinner",
        options,
        id: create_fragment7.name
      });
    }
    get size() {
      throw new Error("<Spinner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set size(value) {
      throw new Error("<Spinner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    get speed() {
      throw new Error("<Spinner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set speed(value) {
      throw new Error("<Spinner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    get color() {
      throw new Error("<Spinner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set color(value) {
      throw new Error("<Spinner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    get thickness() {
      throw new Error("<Spinner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set thickness(value) {
      throw new Error("<Spinner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    get gap() {
      throw new Error("<Spinner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set gap(value) {
      throw new Error("<Spinner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    get radius() {
      throw new Error("<Spinner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set radius(value) {
      throw new Error("<Spinner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  };
  var Spinner_default = Spinner;
  require_7();

  // www/src/cmp/SpinnerD.svelte
  var file8 = "www/src/cmp/SpinnerD.svelte";
  function create_fragment8(ctx) {
    let svg;
    let circle;
    const block = {
      c: function create() {
        svg = svg_element("svg");
        circle = svg_element("circle");
        attr_dev(circle, "class", "path svelte-12lx0wt");
        attr_dev(circle, "cx", "25");
        attr_dev(circle, "cy", "25");
        attr_dev(circle, "r", "20");
        attr_dev(circle, "fill", "none");
        attr_dev(circle, "stroke-width", ctx[1]);
        add_location(circle, file8, 7, 4, 184);
        attr_dev(svg, "class", "spinner svelte-12lx0wt");
        attr_dev(svg, "viewBox", "0 0 50 50");
        attr_dev(svg, "width", ctx[0]);
        attr_dev(svg, "height", ctx[0]);
        set_style(svg, "--speed", ctx[2] + "ms");
        add_location(svg, file8, 6, 0, 84);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, svg, anchor);
        append_dev(svg, circle);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(svg);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_fragment8.name,
      type: "component",
      source: "",
      ctx
    });
    return block;
  }
  function instance8($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("SpinnerD", slots, []);
    let size = 50, thickness = 3, speed = 2e3;
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$")
        console.warn(`<SpinnerD> was created with unknown prop '${key}'`);
    });
    $$self.$capture_state = () => ({ size, thickness, speed });
    $$self.$inject_state = ($$props2) => {
      if ("size" in $$props2)
        $$invalidate(0, size = $$props2.size);
      if ("thickness" in $$props2)
        $$invalidate(1, thickness = $$props2.thickness);
      if ("speed" in $$props2)
        $$invalidate(2, speed = $$props2.speed);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    return [size, thickness, speed];
  }
  var SpinnerD = class extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance8, create_fragment8, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "SpinnerD",
        options,
        id: create_fragment8.name
      });
    }
  };
  var SpinnerD_default = SpinnerD;
  require_8();

  // www/src/cmp/Svg.svelte
  var file9 = "www/src/cmp/Svg.svelte";
  function create_else_block2(ctx) {
    let current;
    const default_slot_template = ctx[4].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[3], null);
    const block = {
      c: function create() {
        if (default_slot)
          default_slot.c();
      },
      m: function mount(target, anchor) {
        if (default_slot) {
          default_slot.m(target, anchor);
        }
        current = true;
      },
      p: function update2(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 8)) {
            update_slot(default_slot, default_slot_template, ctx2, ctx2[3], dirty, null, null);
          }
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(default_slot, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(default_slot, local2);
        current = false;
      },
      d: function destroy(detaching) {
        if (default_slot)
          default_slot.d(detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_else_block2.name,
      type: "else",
      source: "(87:1) {:else}",
      ctx
    });
    return block;
  }
  function create_if_block_20(ctx) {
    let path;
    const block = {
      c: function create() {
        path = svg_element("path");
        attr_dev(path, "d", "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12");
        add_location(path, file9, 83, 2, 3181);
      },
      m: function mount(target, anchor) {
        insert_dev(target, path, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(path);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_20.name,
      type: "if",
      source: "(83:29) ",
      ctx
    });
    return block;
  }
  function create_if_block_19(ctx) {
    let path;
    let line;
    const block = {
      c: function create() {
        path = svg_element("path");
        line = svg_element("line");
        attr_dev(path, "d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24");
        add_location(path, file9, 78, 2, 2909);
        attr_dev(line, "x1", "1");
        attr_dev(line, "y1", "1");
        attr_dev(line, "x2", "23");
        attr_dev(line, "y2", "23");
        add_location(line, file9, 81, 2, 3110);
      },
      m: function mount(target, anchor) {
        insert_dev(target, path, anchor);
        insert_dev(target, line, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(path);
        if (detaching)
          detach_dev(line);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_19.name,
      type: "if",
      source: "(78:36) ",
      ctx
    });
    return block;
  }
  function create_if_block_18(ctx) {
    let path;
    let circle;
    const block = {
      c: function create() {
        path = svg_element("path");
        circle = svg_element("circle");
        attr_dev(path, "d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z");
        add_location(path, file9, 75, 2, 2777);
        attr_dev(circle, "cx", "12");
        attr_dev(circle, "cy", "12");
        attr_dev(circle, "r", "3");
        add_location(circle, file9, 76, 2, 2837);
      },
      m: function mount(target, anchor) {
        insert_dev(target, path, anchor);
        insert_dev(target, circle, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(path);
        if (detaching)
          detach_dev(circle);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_18.name,
      type: "if",
      source: "(75:32) ",
      ctx
    });
    return block;
  }
  function create_if_block_17(ctx) {
    let polyline0;
    let polyline1;
    let path;
    const block = {
      c: function create() {
        polyline0 = svg_element("polyline");
        polyline1 = svg_element("polyline");
        path = svg_element("path");
        attr_dev(polyline0, "points", "1 4 1 10 7 10");
        add_location(polyline0, file9, 69, 2, 2576);
        attr_dev(polyline1, "points", "23 20 23 14 17 14");
        add_location(polyline1, file9, 70, 2, 2614);
        attr_dev(path, "d", "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15");
        add_location(path, file9, 71, 2, 2656);
      },
      m: function mount(target, anchor) {
        insert_dev(target, polyline0, anchor);
        insert_dev(target, polyline1, anchor);
        insert_dev(target, path, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(polyline0);
        if (detaching)
          detach_dev(polyline1);
        if (detaching)
          detach_dev(path);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_17.name,
      type: "if",
      source: "(69:36) ",
      ctx
    });
    return block;
  }
  function create_if_block_16(ctx) {
    let line;
    const block = {
      c: function create() {
        line = svg_element("line");
        attr_dev(line, "x1", "5");
        attr_dev(line, "y1", "12");
        attr_dev(line, "x2", "19");
        attr_dev(line, "y2", "12");
        add_location(line, file9, 67, 2, 2497);
      },
      m: function mount(target, anchor) {
        insert_dev(target, line, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(line);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_16.name,
      type: "if",
      source: "(67:34) ",
      ctx
    });
    return block;
  }
  function create_if_block_15(ctx) {
    let line0;
    let line1;
    const block = {
      c: function create() {
        line0 = svg_element("line");
        line1 = svg_element("line");
        attr_dev(line0, "x1", "12");
        attr_dev(line0, "y1", "5");
        attr_dev(line0, "x2", "12");
        attr_dev(line0, "y2", "19");
        add_location(line0, file9, 64, 2, 2378);
        attr_dev(line1, "x1", "5");
        attr_dev(line1, "y1", "12");
        attr_dev(line1, "x2", "19");
        attr_dev(line1, "y2", "12");
        add_location(line1, file9, 65, 2, 2420);
      },
      m: function mount(target, anchor) {
        insert_dev(target, line0, anchor);
        insert_dev(target, line1, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(line0);
        if (detaching)
          detach_dev(line1);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_15.name,
      type: "if",
      source: "(64:33) ",
      ctx
    });
    return block;
  }
  function create_if_block_14(ctx) {
    let polyline0;
    let line0;
    let polyline1;
    let line1;
    let line2;
    const block = {
      c: function create() {
        polyline0 = svg_element("polyline");
        line0 = svg_element("line");
        polyline1 = svg_element("polyline");
        line1 = svg_element("line");
        line2 = svg_element("line");
        attr_dev(polyline0, "points", "16 3 21 3 21 8");
        add_location(polyline0, file9, 58, 2, 2140);
        attr_dev(line0, "x1", "4");
        attr_dev(line0, "y1", "20");
        attr_dev(line0, "x2", "21");
        attr_dev(line0, "y2", "3");
        add_location(line0, file9, 59, 2, 2179);
        attr_dev(polyline1, "points", "21 16 21 21 16 21");
        add_location(polyline1, file9, 60, 2, 2220);
        attr_dev(line1, "x1", "15");
        attr_dev(line1, "y1", "15");
        attr_dev(line1, "x2", "21");
        attr_dev(line1, "y2", "21");
        add_location(line1, file9, 61, 2, 2262);
        attr_dev(line2, "x1", "4");
        attr_dev(line2, "y1", "4");
        attr_dev(line2, "x2", "9");
        attr_dev(line2, "y2", "9");
        add_location(line2, file9, 62, 2, 2305);
      },
      m: function mount(target, anchor) {
        insert_dev(target, polyline0, anchor);
        insert_dev(target, line0, anchor);
        insert_dev(target, polyline1, anchor);
        insert_dev(target, line1, anchor);
        insert_dev(target, line2, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(polyline0);
        if (detaching)
          detach_dev(line0);
        if (detaching)
          detach_dev(polyline1);
        if (detaching)
          detach_dev(line1);
        if (detaching)
          detach_dev(line2);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_14.name,
      type: "if",
      source: "(58:36) ",
      ctx
    });
    return block;
  }
  function create_if_block_13(ctx) {
    let polyline0;
    let path0;
    let polyline1;
    let path1;
    const block = {
      c: function create() {
        polyline0 = svg_element("polyline");
        path0 = svg_element("path");
        polyline1 = svg_element("polyline");
        path1 = svg_element("path");
        attr_dev(polyline0, "points", "17 1 21 5 17 9");
        add_location(polyline0, file9, 53, 2, 1945);
        attr_dev(path0, "d", "M3 11V9a4 4 0 0 1 4-4h14");
        add_location(path0, file9, 54, 2, 1984);
        attr_dev(polyline1, "points", "7 23 3 19 7 15");
        add_location(polyline1, file9, 55, 2, 2024);
        attr_dev(path1, "d", "M21 13v2a4 4 0 0 1-4 4H3");
        add_location(path1, file9, 56, 2, 2063);
      },
      m: function mount(target, anchor) {
        insert_dev(target, polyline0, anchor);
        insert_dev(target, path0, anchor);
        insert_dev(target, polyline1, anchor);
        insert_dev(target, path1, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(polyline0);
        if (detaching)
          detach_dev(path0);
        if (detaching)
          detach_dev(polyline1);
        if (detaching)
          detach_dev(path1);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_13.name,
      type: "if",
      source: "(53:35) ",
      ctx
    });
    return block;
  }
  function create_if_block_12(ctx) {
    let polyline;
    let path;
    const block = {
      c: function create() {
        polyline = svg_element("polyline");
        path = svg_element("path");
        attr_dev(polyline, "points", "23 4 23 10 17 10");
        add_location(polyline, file9, 50, 2, 1817);
        attr_dev(path, "d", "M20.49 15a9 9 0 1 1-2.12-9.36L23 10");
        add_location(path, file9, 51, 2, 1858);
      },
      m: function mount(target, anchor) {
        insert_dev(target, polyline, anchor);
        insert_dev(target, path, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(polyline);
        if (detaching)
          detach_dev(path);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_12.name,
      type: "if",
      source: "(50:38) ",
      ctx
    });
    return block;
  }
  function create_if_block_11(ctx) {
    let polyline;
    let path;
    const block = {
      c: function create() {
        polyline = svg_element("polyline");
        path = svg_element("path");
        attr_dev(polyline, "points", "1 4 1 10 7 10");
        add_location(polyline, file9, 47, 2, 1691);
        attr_dev(path, "d", "M3.51 15a9 9 0 1 0 2.13-9.36L1 10");
        add_location(path, file9, 48, 2, 1729);
      },
      m: function mount(target, anchor) {
        insert_dev(target, polyline, anchor);
        insert_dev(target, path, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(polyline);
        if (detaching)
          detach_dev(path);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_11.name,
      type: "if",
      source: "(47:39) ",
      ctx
    });
    return block;
  }
  function create_if_block_10(ctx) {
    let polygon0;
    let polygon1;
    const block = {
      c: function create() {
        polygon0 = svg_element("polygon");
        polygon1 = svg_element("polygon");
        attr_dev(polygon0, "points", "11 19 2 12 11 5 11 19");
        add_location(polygon0, file9, 44, 2, 1560);
        attr_dev(polygon1, "points", "22 19 13 12 22 5 22 19");
        add_location(polygon1, file9, 45, 2, 1605);
      },
      m: function mount(target, anchor) {
        insert_dev(target, polygon0, anchor);
        insert_dev(target, polygon1, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(polygon0);
        if (detaching)
          detach_dev(polygon1);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_10.name,
      type: "if",
      source: "(44:33) ",
      ctx
    });
    return block;
  }
  function create_if_block_9(ctx) {
    let polygon;
    const block = {
      c: function create() {
        polygon = svg_element("polygon");
        attr_dev(polygon, "points", "5 3 19 12 5 21 5 3");
        add_location(polygon, file9, 42, 2, 1484);
      },
      m: function mount(target, anchor) {
        insert_dev(target, polygon, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(polygon);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_9.name,
      type: "if",
      source: "(42:33) ",
      ctx
    });
    return block;
  }
  function create_if_block_8(ctx) {
    let rect0;
    let rect1;
    const block = {
      c: function create() {
        rect0 = svg_element("rect");
        rect1 = svg_element("rect");
        attr_dev(rect0, "x", "6");
        attr_dev(rect0, "y", "4");
        attr_dev(rect0, "width", "4");
        attr_dev(rect0, "height", "16");
        add_location(rect0, file9, 39, 2, 1359);
        attr_dev(rect1, "x", "14");
        attr_dev(rect1, "y", "4");
        attr_dev(rect1, "width", "4");
        attr_dev(rect1, "height", "16");
        add_location(rect1, file9, 40, 2, 1404);
      },
      m: function mount(target, anchor) {
        insert_dev(target, rect0, anchor);
        insert_dev(target, rect1, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(rect0);
        if (detaching)
          detach_dev(rect1);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_8.name,
      type: "if",
      source: "(39:34) ",
      ctx
    });
    return block;
  }
  function create_if_block_7(ctx) {
    let polygon0;
    let polygon1;
    const block = {
      c: function create() {
        polygon0 = svg_element("polygon");
        polygon1 = svg_element("polygon");
        attr_dev(polygon0, "points", "13 19 22 12 13 5 13 19");
        add_location(polygon0, file9, 36, 2, 1235);
        attr_dev(polygon1, "points", "2 19 11 12 2 5 2 19");
        add_location(polygon1, file9, 37, 2, 1281);
      },
      m: function mount(target, anchor) {
        insert_dev(target, polygon0, anchor);
        insert_dev(target, polygon1, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(polygon0);
        if (detaching)
          detach_dev(polygon1);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_7.name,
      type: "if",
      source: "(36:36) ",
      ctx
    });
    return block;
  }
  function create_if_block_6(ctx) {
    let line0;
    let line1;
    const block = {
      c: function create() {
        line0 = svg_element("line");
        line1 = svg_element("line");
        attr_dev(line0, "x1", "18");
        attr_dev(line0, "y1", "6");
        attr_dev(line0, "x2", "6");
        attr_dev(line0, "y2", "18");
        add_location(line0, file9, 33, 2, 1116);
        attr_dev(line1, "x1", "6");
        attr_dev(line1, "y1", "6");
        attr_dev(line1, "x2", "18");
        attr_dev(line1, "y2", "18");
        add_location(line1, file9, 34, 2, 1157);
      },
      m: function mount(target, anchor) {
        insert_dev(target, line0, anchor);
        insert_dev(target, line1, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(line0);
        if (detaching)
          detach_dev(line1);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_6.name,
      type: "if",
      source: "(33:30) ",
      ctx
    });
    return block;
  }
  function create_if_block_5(ctx) {
    let polyline;
    const block = {
      c: function create() {
        polyline = svg_element("polyline");
        attr_dev(polyline, "points", "20 6 9 17 4 12");
        add_location(polyline, file9, 31, 2, 1046);
      },
      m: function mount(target, anchor) {
        insert_dev(target, polyline, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(polyline);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_5.name,
      type: "if",
      source: "(31:34) ",
      ctx
    });
    return block;
  }
  function create_if_block_4(ctx) {
    let line0;
    let line1;
    let line2;
    let line3;
    let line4;
    let line5;
    let line6;
    let line7;
    let line8;
    const block = {
      c: function create() {
        line0 = svg_element("line");
        line1 = svg_element("line");
        line2 = svg_element("line");
        line3 = svg_element("line");
        line4 = svg_element("line");
        line5 = svg_element("line");
        line6 = svg_element("line");
        line7 = svg_element("line");
        line8 = svg_element("line");
        attr_dev(line0, "x1", "4");
        attr_dev(line0, "y1", "21");
        attr_dev(line0, "x2", "4");
        attr_dev(line0, "y2", "14");
        add_location(line0, file9, 21, 2, 637);
        attr_dev(line1, "x1", "4");
        attr_dev(line1, "y1", "10");
        attr_dev(line1, "x2", "4");
        attr_dev(line1, "y2", "3");
        add_location(line1, file9, 22, 2, 678);
        attr_dev(line2, "x1", "12");
        attr_dev(line2, "y1", "21");
        attr_dev(line2, "x2", "12");
        attr_dev(line2, "y2", "12");
        add_location(line2, file9, 23, 2, 718);
        attr_dev(line3, "x1", "12");
        attr_dev(line3, "y1", "8");
        attr_dev(line3, "x2", "12");
        attr_dev(line3, "y2", "3");
        add_location(line3, file9, 24, 2, 761);
        attr_dev(line4, "x1", "20");
        attr_dev(line4, "y1", "21");
        attr_dev(line4, "x2", "20");
        attr_dev(line4, "y2", "16");
        add_location(line4, file9, 25, 2, 802);
        attr_dev(line5, "x1", "20");
        attr_dev(line5, "y1", "12");
        attr_dev(line5, "x2", "20");
        attr_dev(line5, "y2", "3");
        add_location(line5, file9, 26, 2, 845);
        attr_dev(line6, "x1", "1");
        attr_dev(line6, "y1", "14");
        attr_dev(line6, "x2", "7");
        attr_dev(line6, "y2", "14");
        add_location(line6, file9, 27, 2, 887);
        attr_dev(line7, "x1", "9");
        attr_dev(line7, "y1", "8");
        attr_dev(line7, "x2", "15");
        attr_dev(line7, "y2", "8");
        add_location(line7, file9, 28, 2, 928);
        attr_dev(line8, "x1", "17");
        attr_dev(line8, "y1", "16");
        attr_dev(line8, "x2", "23");
        attr_dev(line8, "y2", "16");
        add_location(line8, file9, 29, 2, 968);
      },
      m: function mount(target, anchor) {
        insert_dev(target, line0, anchor);
        insert_dev(target, line1, anchor);
        insert_dev(target, line2, anchor);
        insert_dev(target, line3, anchor);
        insert_dev(target, line4, anchor);
        insert_dev(target, line5, anchor);
        insert_dev(target, line6, anchor);
        insert_dev(target, line7, anchor);
        insert_dev(target, line8, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(line0);
        if (detaching)
          detach_dev(line1);
        if (detaching)
          detach_dev(line2);
        if (detaching)
          detach_dev(line3);
        if (detaching)
          detach_dev(line4);
        if (detaching)
          detach_dev(line5);
        if (detaching)
          detach_dev(line6);
        if (detaching)
          detach_dev(line7);
        if (detaching)
          detach_dev(line8);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_4.name,
      type: "if",
      source: "(21:36) ",
      ctx
    });
    return block;
  }
  function create_if_block_3(ctx) {
    let line;
    let polyline;
    const block = {
      c: function create() {
        line = svg_element("line");
        polyline = svg_element("polyline");
        attr_dev(line, "x1", "5");
        attr_dev(line, "y1", "12");
        attr_dev(line, "x2", "19");
        attr_dev(line, "y2", "12");
        add_location(line, file9, 18, 2, 517);
        attr_dev(polyline, "points", "12 5 19 12 12 19");
        add_location(polyline, file9, 19, 2, 559);
      },
      m: function mount(target, anchor) {
        insert_dev(target, line, anchor);
        insert_dev(target, polyline, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(line);
        if (detaching)
          detach_dev(polyline);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_3.name,
      type: "if",
      source: "(18:40) ",
      ctx
    });
    return block;
  }
  function create_if_block_2(ctx) {
    let line;
    let polyline;
    const block = {
      c: function create() {
        line = svg_element("line");
        polyline = svg_element("polyline");
        attr_dev(line, "x1", "19");
        attr_dev(line, "y1", "12");
        attr_dev(line, "x2", "5");
        attr_dev(line, "y2", "12");
        add_location(line, file9, 15, 2, 394);
        attr_dev(polyline, "points", "12 19 5 12 12 5");
        add_location(polyline, file9, 16, 2, 436);
      },
      m: function mount(target, anchor) {
        insert_dev(target, line, anchor);
        insert_dev(target, polyline, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(line);
        if (detaching)
          detach_dev(polyline);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_2.name,
      type: "if",
      source: "(15:39) ",
      ctx
    });
    return block;
  }
  function create_if_block_1(ctx) {
    let polyline;
    const block = {
      c: function create() {
        polyline = svg_element("polyline");
        attr_dev(polyline, "points", "9 18 15 12 9 6");
        add_location(polyline, file9, 13, 2, 315);
      },
      m: function mount(target, anchor) {
        insert_dev(target, polyline, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(polyline);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_1.name,
      type: "if",
      source: "(13:42) ",
      ctx
    });
    return block;
  }
  function create_if_block2(ctx) {
    let polyline;
    const block = {
      c: function create() {
        polyline = svg_element("polyline");
        attr_dev(polyline, "points", "15 18 9 12 15 6");
        add_location(polyline, file9, 11, 2, 232);
      },
      m: function mount(target, anchor) {
        insert_dev(target, polyline, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(polyline);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block2.name,
      type: "if",
      source: '(11:1) {#if name === \\"slidy-chevron-left\\"}',
      ctx
    });
    return block;
  }
  function create_fragment9(ctx) {
    let svg;
    let current_block_type_index;
    let if_block;
    let current;
    let mounted;
    let dispose;
    const if_block_creators = [
      create_if_block2,
      create_if_block_1,
      create_if_block_2,
      create_if_block_3,
      create_if_block_4,
      create_if_block_5,
      create_if_block_6,
      create_if_block_7,
      create_if_block_8,
      create_if_block_9,
      create_if_block_10,
      create_if_block_11,
      create_if_block_12,
      create_if_block_13,
      create_if_block_14,
      create_if_block_15,
      create_if_block_16,
      create_if_block_17,
      create_if_block_18,
      create_if_block_19,
      create_if_block_20,
      create_else_block2
    ];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (ctx2[0] === "slidy-chevron-left")
        return 0;
      if (ctx2[0] === "slidy-chevron-right")
        return 1;
      if (ctx2[0] === "slidy-arrow-left")
        return 2;
      if (ctx2[0] === "slidy-arrow-right")
        return 3;
      if (ctx2[0] === "slidy-sliders")
        return 4;
      if (ctx2[0] === "slidy-check")
        return 5;
      if (ctx2[0] === "slidy-x")
        return 6;
      if (ctx2[0] === "slidy-forward")
        return 7;
      if (ctx2[0] === "slidy-pause")
        return 8;
      if (ctx2[0] === "slidy-play")
        return 9;
      if (ctx2[0] === "slidy-back")
        return 10;
      if (ctx2[0] === "slidy-rotate-ccw")
        return 11;
      if (ctx2[0] === "slidy-rotate-cw")
        return 12;
      if (ctx2[0] === "slidy-repeat")
        return 13;
      if (ctx2[0] === "slidy-shuffle")
        return 14;
      if (ctx2[0] === "slidy-plus")
        return 15;
      if (ctx2[0] === "slidy-mines")
        return 16;
      if (ctx2[0] === "slidy-refresh")
        return 17;
      if (ctx2[0] === "slidy-eye")
        return 18;
      if (ctx2[0] === "slidy-eye-off")
        return 19;
      if (ctx2[0] === "github")
        return 20;
      return 21;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    const block = {
      c: function create() {
        svg = svg_element("svg");
        if_block.c();
        attr_dev(svg, "class", "feather svelte-1fdzpgf");
        set_style(svg, "--transform", ctx[1]);
        set_style(svg, "--stroke", ctx[2]);
        add_location(svg, file9, 6, 0, 107);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, svg, anchor);
        if_blocks[current_block_type_index].m(svg, null);
        current = true;
        if (!mounted) {
          dispose = listen_dev(svg, "click", ctx[5], false, false, false);
          mounted = true;
        }
      },
      p: function update2(ctx2, [dirty]) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(svg, null);
        }
        if (!current || dirty & 2) {
          set_style(svg, "--transform", ctx2[1]);
        }
        if (!current || dirty & 4) {
          set_style(svg, "--stroke", ctx2[2]);
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local2) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(svg);
        if_blocks[current_block_type_index].d();
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_fragment9.name,
      type: "component",
      source: "",
      ctx
    });
    return block;
  }
  function instance9($$self, $$props, $$invalidate) {
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("Svg", slots, ["default"]);
    let { name: name2 = "" } = $$props;
    let { transform = "" } = $$props;
    let { color = "currentColor" } = $$props;
    const writable_props = ["name", "transform", "color"];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$")
        console.warn(`<Svg> was created with unknown prop '${key}'`);
    });
    function click_handler(event) {
      bubble($$self, event);
    }
    $$self.$$set = ($$props2) => {
      if ("name" in $$props2)
        $$invalidate(0, name2 = $$props2.name);
      if ("transform" in $$props2)
        $$invalidate(1, transform = $$props2.transform);
      if ("color" in $$props2)
        $$invalidate(2, color = $$props2.color);
      if ("$$scope" in $$props2)
        $$invalidate(3, $$scope = $$props2.$$scope);
    };
    $$self.$capture_state = () => ({ name: name2, transform, color });
    $$self.$inject_state = ($$props2) => {
      if ("name" in $$props2)
        $$invalidate(0, name2 = $$props2.name);
      if ("transform" in $$props2)
        $$invalidate(1, transform = $$props2.transform);
      if ("color" in $$props2)
        $$invalidate(2, color = $$props2.color);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    return [name2, transform, color, $$scope, slots, click_handler];
  }
  var Svg = class extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance9, create_fragment9, safe_not_equal, { name: 0, transform: 1, color: 2 });
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "Svg",
        options,
        id: create_fragment9.name
      });
    }
    get name() {
      throw new Error("<Svg>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set name(value) {
      throw new Error("<Svg>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    get transform() {
      throw new Error("<Svg>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set transform(value) {
      throw new Error("<Svg>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    get color() {
      throw new Error("<Svg>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set color(value) {
      throw new Error("<Svg>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  };
  var Svg_default = Svg;
  require_9();

  // www/src/cmp/Slidy.svelte
  require_10();

  // src/actions.js
  var actions_exports = {};
  __export(actions_exports, {
    pannable: () => pannable2,
    resize: () => resize2,
    wheel: () => wheel2
  });
  function pannable2(node) {
    const eventHandlerOptions = { passive: false };
    let x = 0, y = 0;
    function unify(e) {
      return e.changedTouches ? e.changedTouches[0] : e;
    }
    ;
    function handleMousedown(e) {
      x = unify(e).clientX;
      y = unify(e).clientY;
      node.dispatchEvent(new CustomEvent("panstart", {
        detail: { x, y }
      }));
      window.addEventListener("mousemove", handleMousemove, eventHandlerOptions);
      window.addEventListener("mouseup", handleMouseup, eventHandlerOptions);
      window.addEventListener("touchmove", handleMousemove, eventHandlerOptions);
      window.addEventListener("touchend", handleMouseup, eventHandlerOptions);
    }
    function handleMousemove(e) {
      const dx = unify(e).clientX - x;
      const dy = unify(e).clientY - y;
      x = unify(e).clientX;
      y = unify(e).clientY;
      node.dispatchEvent(new CustomEvent("panmove", {
        detail: { x, y, dx, dy }
      }));
    }
    function handleMouseup(e) {
      x = unify(e).clientX;
      y = unify(e).clientY;
      node.dispatchEvent(new CustomEvent("panend", {
        detail: { x, y }
      }));
      window.removeEventListener("mousemove", handleMousemove, eventHandlerOptions);
      window.removeEventListener("mouseup", handleMouseup, eventHandlerOptions);
      window.removeEventListener("touchmove", handleMousemove, eventHandlerOptions);
      window.removeEventListener("touchend", handleMouseup, eventHandlerOptions);
    }
    node.addEventListener("mousedown", handleMousedown, eventHandlerOptions);
    node.addEventListener("touchstart", handleMousedown, eventHandlerOptions);
    return {
      destroy() {
        node.removeEventListener("mousedown", handleMousedown, eventHandlerOptions);
        node.removeEventListener("touchstart", handleMousedown, eventHandlerOptions);
      }
    };
  }
  function resize2(node) {
    let CR;
    let ET;
    const ro = new ResizeObserver((entries, observer) => {
      for (let entry of entries) {
        CR = entry.contentRect;
        ET = entry.target;
      }
      node.dispatchEvent(new CustomEvent("resize", {
        detail: { CR, ET }
      }));
    });
    ro.observe(node);
    return {
      destroy() {
        ro.disconnect();
      }
    };
  }
  function wheel2(node) {
    let dx = 0, dy = 0;
    function handleWheel(e) {
      if (navigator.platform.indexOf("Win") > -1 && e.shiftKey) {
        dx = e.deltaY;
      } else {
        dx = e.deltaX * 1.5;
        dy = e.deltaY * 1.5;
      }
      if (dx !== 0) {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
      }
      node.dispatchEvent(new CustomEvent("wheels", {
        detail: { dx, dy }
      }));
    }
    node.addEventListener("wheel", handleWheel, { passive: false });
    return {
      destroy() {
        node.removeEventListener("wheel", handleWheel);
      }
    };
  }

  // src/Slidy.svelte
  var { Boolean: Boolean_1 } = globals;
  var file10 = "src/Slidy.svelte";
  var get_dots_arrow_right_slot_changes_1 = (dirty) => ({ item: dirty[0] & 1 });
  var get_dots_arrow_right_slot_context_1 = (ctx) => ({ item: ctx[64] });
  var get_dots_arrow_right_slot_changes = (dirty) => ({ item: dirty[0] & 1 });
  var get_dots_arrow_right_slot_context = (ctx) => ({ item: ctx[64] });
  function get_each_context4(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[61] = list[i];
    child_ctx[63] = i;
    return child_ctx;
  }
  var get_dot_slot_changes = (dirty) => ({
    dot: dirty[0] & 1024,
    item: dirty[0] & 1
  });
  var get_dot_slot_context = (ctx) => ({
    dot: ctx[61],
    item: ctx[64]
  });
  var get_dots_arrow_left_slot_changes_1 = (dirty) => ({ item: dirty[0] & 1 });
  var get_dots_arrow_left_slot_context_1 = (ctx) => ({ item: ctx[64] });
  var get_dots_arrow_left_slot_changes = (dirty) => ({ item: dirty[0] & 1 });
  var get_dots_arrow_left_slot_context = (ctx) => ({ item: ctx[64] });
  var get_arrow_right_slot_changes_1 = (dirty) => ({ item: dirty[0] & 1 });
  var get_arrow_right_slot_context_1 = (ctx) => ({ item: ctx[64] });
  var get_arrow_left_slot_changes_1 = (dirty) => ({ item: dirty[0] & 1 });
  var get_arrow_left_slot_context_1 = (ctx) => ({ item: ctx[64] });
  var get_arrow_right_slot_changes = (dirty) => ({ item: dirty[0] & 1 });
  var get_arrow_right_slot_context = (ctx) => ({ item: ctx[64] });
  var get_arrow_left_slot_changes = (dirty) => ({ item: dirty[0] & 1 });
  var get_arrow_left_slot_context = (ctx) => ({ item: ctx[64] });
  function get_each_context_12(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[64] = list[i];
    child_ctx[65] = list;
    child_ctx[63] = i;
    return child_ctx;
  }
  var get_default_slot_changes = (dirty) => ({ item: dirty[0] & 1 });
  var get_default_slot_context = (ctx) => ({ item: ctx[64] });
  var get_loader_slot_changes = (dirty) => ({ item: dirty[0] & 1 });
  var get_loader_slot_context = (ctx) => ({ item: ctx[64] });
  function create_if_block_142(ctx) {
    let section;
    let current;
    const loader_slot_template = ctx[29].loader;
    const loader_slot = create_slot(loader_slot_template, ctx, ctx[28], get_loader_slot_context);
    const loader_slot_or_fallback = loader_slot || fallback_block_10(ctx);
    const block = {
      c: function create() {
        section = element("section");
        if (loader_slot_or_fallback)
          loader_slot_or_fallback.c();
        attr_dev(section, "id", "loader");
        attr_dev(section, "class", "svelte-c3tglu");
        add_location(section, file10, 387, 8, 11702);
      },
      m: function mount(target, anchor) {
        insert_dev(target, section, anchor);
        if (loader_slot_or_fallback) {
          loader_slot_or_fallback.m(section, null);
        }
        current = true;
      },
      p: function update2(ctx2, dirty) {
        if (loader_slot) {
          if (loader_slot.p && (!current || dirty[0] & 268435457)) {
            update_slot(loader_slot, loader_slot_template, ctx2, ctx2[28], dirty, get_loader_slot_changes, get_loader_slot_context);
          }
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(loader_slot_or_fallback, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(loader_slot_or_fallback, local2);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(section);
        if (loader_slot_or_fallback)
          loader_slot_or_fallback.d(detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_142.name,
      type: "if",
      source: "(387:4) {#if !slidyinit}",
      ctx
    });
    return block;
  }
  function fallback_block_10(ctx) {
    let t;
    const block = {
      c: function create() {
        t = text("Loading...");
      },
      m: function mount(target, anchor) {
        insert_dev(target, t, anchor);
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(t);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: fallback_block_10.name,
      type: "fallback",
      source: "(389:32) Loading...",
      ctx
    });
    return block;
  }
  function create_if_block_112(ctx) {
    let each_blocks = [];
    let each_1_lookup = new Map();
    let each_1_anchor;
    let current;
    let each_value_1 = ctx[0];
    validate_each_argument(each_value_1);
    const get_key = (ctx2) => ctx2[3](ctx2[64], ctx2[63]);
    validate_each_keys(ctx, each_value_1, get_each_context_12, get_key);
    for (let i = 0; i < each_value_1.length; i += 1) {
      let child_ctx = get_each_context_12(ctx, each_value_1, i);
      let key = get_key(child_ctx);
      each_1_lookup.set(key, each_blocks[i] = create_each_block_12(key, child_ctx));
    }
    const block = {
      c: function create() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m: function mount(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(target, anchor);
        }
        insert_dev(target, each_1_anchor, anchor);
        current = true;
      },
      p: function update2(ctx2, dirty) {
        if (dirty[0] & 268665199) {
          each_value_1 = ctx2[0];
          validate_each_argument(each_value_1);
          group_outros();
          validate_each_keys(ctx2, each_value_1, get_each_context_12, get_key);
          each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value_1, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block_12, each_1_anchor, get_each_context_12);
          check_outros();
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        for (let i = 0; i < each_value_1.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o: function outro(local2) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d: function destroy(detaching) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].d(detaching);
        }
        if (detaching)
          detach_dev(each_1_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_112.name,
      type: "if",
      source: "(394:8) {#if slides}",
      ctx
    });
    return block;
  }
  function create_if_block_122(ctx) {
    let current;
    const default_slot_template = ctx[29].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[28], get_default_slot_context);
    const default_slot_or_fallback = default_slot || fallback_block_9(ctx);
    const block = {
      c: function create() {
        if (default_slot_or_fallback)
          default_slot_or_fallback.c();
      },
      m: function mount(target, anchor) {
        if (default_slot_or_fallback) {
          default_slot_or_fallback.m(target, anchor);
        }
        current = true;
      },
      p: function update2(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty[0] & 268435457)) {
            update_slot(default_slot, default_slot_template, ctx2, ctx2[28], dirty, get_default_slot_changes, get_default_slot_context);
          }
        } else {
          if (default_slot_or_fallback && default_slot_or_fallback.p && dirty[0] & 41) {
            default_slot_or_fallback.p(ctx2, dirty);
          }
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(default_slot_or_fallback, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(default_slot_or_fallback, local2);
        current = false;
      },
      d: function destroy(detaching) {
        if (default_slot_or_fallback)
          default_slot_or_fallback.d(detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_122.name,
      type: "if",
      source: "(409:20) {#if slidyinit}",
      ctx
    });
    return block;
  }
  function create_if_block_132(ctx) {
    let img;
    let img_alt_value;
    let img_src_value;
    let img_width_value;
    let img_height_value;
    const block = {
      c: function create() {
        img = element("img");
        attr_dev(img, "alt", img_alt_value = ctx[3](ctx[64], ctx[63]));
        if (img.src !== (img_src_value = ctx[64][ctx[5].imgsrckey]))
          attr_dev(img, "src", img_src_value);
        attr_dev(img, "width", img_width_value = ctx[64].width);
        attr_dev(img, "height", img_height_value = ctx[64].height);
        add_location(img, file10, 411, 32, 12731);
      },
      m: function mount(target, anchor) {
        insert_dev(target, img, anchor);
      },
      p: function update2(ctx2, dirty) {
        if (dirty[0] & 9 && img_alt_value !== (img_alt_value = ctx2[3](ctx2[64], ctx2[63]))) {
          attr_dev(img, "alt", img_alt_value);
        }
        if (dirty[0] & 33 && img.src !== (img_src_value = ctx2[64][ctx2[5].imgsrckey])) {
          attr_dev(img, "src", img_src_value);
        }
        if (dirty[0] & 1 && img_width_value !== (img_width_value = ctx2[64].width)) {
          attr_dev(img, "width", img_width_value);
        }
        if (dirty[0] & 1 && img_height_value !== (img_height_value = ctx2[64].height)) {
          attr_dev(img, "height", img_height_value);
        }
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(img);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_132.name,
      type: "if",
      source: "(411:28) {#if slide.backimg === false}",
      ctx
    });
    return block;
  }
  function fallback_block_9(ctx) {
    let if_block_anchor;
    let if_block = ctx[5].backimg === false && create_if_block_132(ctx);
    const block = {
      c: function create() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m: function mount(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
      },
      p: function update2(ctx2, dirty) {
        if (ctx2[5].backimg === false) {
          if (if_block) {
            if_block.p(ctx2, dirty);
          } else {
            if_block = create_if_block_132(ctx2);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d: function destroy(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: fallback_block_9.name,
      type: "fallback",
      source: "(410:37)                              ",
      ctx
    });
    return block;
  }
  function create_each_block_12(key_1, ctx) {
    let li;
    let t;
    let li_data_id_value;
    let li_class_value;
    let li_style_value;
    let i = ctx[63];
    let action_pannable_action;
    let current;
    let mounted;
    let dispose;
    let if_block = ctx[2] && create_if_block_122(ctx);
    const assign_li = () => ctx[30](li, i);
    const unassign_li = () => ctx[30](null, i);
    const block = {
      key: key_1,
      first: null,
      c: function create() {
        li = element("li");
        if (if_block)
          if_block.c();
        t = space();
        attr_dev(li, "data-id", li_data_id_value = ctx[63]);
        attr_dev(li, "class", li_class_value = "" + (null_to_empty(ctx[5].class) + " svelte-c3tglu"));
        attr_dev(li, "style", li_style_value = ctx[5].backimg === true ? `background-image: url(${ctx[64][ctx[5].imgsrckey]})` : null);
        toggle_class(li, "active", ctx[64].ix === ctx[1]);
        add_location(li, file10, 395, 16, 11984);
        this.first = li;
      },
      m: function mount(target, anchor) {
        insert_dev(target, li, anchor);
        if (if_block)
          if_block.m(li, null);
        append_dev(li, t);
        assign_li();
        current = true;
        if (!mounted) {
          dispose = [
            action_destroyer(action_pannable_action = pannable2(li)),
            listen_dev(li, "panstart", function() {
              if (is_function(ctx[6].drag ? ctx[15] : null))
                (ctx[6].drag ? ctx[15] : null).apply(this, arguments);
            }, false, false, false),
            listen_dev(li, "panmove", function() {
              if (is_function(ctx[6].drag ? ctx[16] : null))
                (ctx[6].drag ? ctx[16] : null).apply(this, arguments);
            }, false, false, false),
            listen_dev(li, "panend", function() {
              if (is_function(ctx[6].drag ? ctx[17] : null))
                (ctx[6].drag ? ctx[17] : null).apply(this, arguments);
            }, false, false, false)
          ];
          mounted = true;
        }
      },
      p: function update2(new_ctx, dirty) {
        ctx = new_ctx;
        if (ctx[2]) {
          if (if_block) {
            if_block.p(ctx, dirty);
            if (dirty[0] & 4) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_122(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(li, t);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
        if (!current || dirty[0] & 1 && li_data_id_value !== (li_data_id_value = ctx[63])) {
          attr_dev(li, "data-id", li_data_id_value);
        }
        if (!current || dirty[0] & 32 && li_class_value !== (li_class_value = "" + (null_to_empty(ctx[5].class) + " svelte-c3tglu"))) {
          attr_dev(li, "class", li_class_value);
        }
        if (!current || dirty[0] & 33 && li_style_value !== (li_style_value = ctx[5].backimg === true ? `background-image: url(${ctx[64][ctx[5].imgsrckey]})` : null)) {
          attr_dev(li, "style", li_style_value);
        }
        if (i !== ctx[63]) {
          unassign_li();
          i = ctx[63];
          assign_li();
        }
        if (dirty[0] & 35) {
          toggle_class(li, "active", ctx[64].ix === ctx[1]);
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local2) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(li);
        if (if_block)
          if_block.d();
        unassign_li();
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_each_block_12.name,
      type: "each",
      source: "(395:12) {#each slides as item, i (keyExtractor(item, i))}",
      ctx
    });
    return block;
  }
  function create_if_block_72(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block_82, create_else_block_2];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (!ctx2[7].loop)
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, [-1]);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    const block = {
      c: function create() {
        if_block.c();
        if_block_anchor = empty();
      },
      m: function mount(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;
      },
      p: function update2(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local2) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_72.name,
      type: "if",
      source: "(426:4) {#if controls.arrows && slidyinit}",
      ctx
    });
    return block;
  }
  function create_else_block_2(ctx) {
    let button0;
    let t;
    let button1;
    let current;
    let mounted;
    let dispose;
    const arrow_left_slot_template = ctx[29]["arrow-left"];
    const arrow_left_slot = create_slot(arrow_left_slot_template, ctx, ctx[28], get_arrow_left_slot_context_1);
    const arrow_left_slot_or_fallback = arrow_left_slot || fallback_block_8(ctx);
    const arrow_right_slot_template = ctx[29]["arrow-right"];
    const arrow_right_slot = create_slot(arrow_right_slot_template, ctx, ctx[28], get_arrow_right_slot_context_1);
    const arrow_right_slot_or_fallback = arrow_right_slot || fallback_block_7(ctx);
    const block = {
      c: function create() {
        button0 = element("button");
        if (arrow_left_slot_or_fallback)
          arrow_left_slot_or_fallback.c();
        t = space();
        button1 = element("button");
        if (arrow_right_slot_or_fallback)
          arrow_right_slot_or_fallback.c();
        attr_dev(button0, "class", "arrow-left svelte-c3tglu");
        add_location(button0, file10, 438, 12, 13683);
        attr_dev(button1, "class", "arrow-right svelte-c3tglu");
        add_location(button1, file10, 441, 12, 13825);
      },
      m: function mount(target, anchor) {
        insert_dev(target, button0, anchor);
        if (arrow_left_slot_or_fallback) {
          arrow_left_slot_or_fallback.m(button0, null);
        }
        insert_dev(target, t, anchor);
        insert_dev(target, button1, anchor);
        if (arrow_right_slot_or_fallback) {
          arrow_right_slot_or_fallback.m(button1, null);
        }
        current = true;
        if (!mounted) {
          dispose = [
            listen_dev(button0, "click", ctx[34], false, false, false),
            listen_dev(button1, "click", ctx[35], false, false, false)
          ];
          mounted = true;
        }
      },
      p: function update2(ctx2, dirty) {
        if (arrow_left_slot) {
          if (arrow_left_slot.p && (!current || dirty[0] & 268435457)) {
            update_slot(arrow_left_slot, arrow_left_slot_template, ctx2, ctx2[28], dirty, get_arrow_left_slot_changes_1, get_arrow_left_slot_context_1);
          }
        }
        if (arrow_right_slot) {
          if (arrow_right_slot.p && (!current || dirty[0] & 268435457)) {
            update_slot(arrow_right_slot, arrow_right_slot_template, ctx2, ctx2[28], dirty, get_arrow_right_slot_changes_1, get_arrow_right_slot_context_1);
          }
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(arrow_left_slot_or_fallback, local2);
        transition_in(arrow_right_slot_or_fallback, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(arrow_left_slot_or_fallback, local2);
        transition_out(arrow_right_slot_or_fallback, local2);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(button0);
        if (arrow_left_slot_or_fallback)
          arrow_left_slot_or_fallback.d(detaching);
        if (detaching)
          detach_dev(t);
        if (detaching)
          detach_dev(button1);
        if (arrow_right_slot_or_fallback)
          arrow_right_slot_or_fallback.d(detaching);
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_else_block_2.name,
      type: "else",
      source: "(438:8) {:else}",
      ctx
    });
    return block;
  }
  function create_if_block_82(ctx) {
    let t;
    let if_block1_anchor;
    let current;
    let if_block0 = ctx[1] > 0 && create_if_block_102(ctx);
    let if_block1 = ctx[1] < ctx[0].length - 1 && create_if_block_92(ctx);
    const block = {
      c: function create() {
        if (if_block0)
          if_block0.c();
        t = space();
        if (if_block1)
          if_block1.c();
        if_block1_anchor = empty();
      },
      m: function mount(target, anchor) {
        if (if_block0)
          if_block0.m(target, anchor);
        insert_dev(target, t, anchor);
        if (if_block1)
          if_block1.m(target, anchor);
        insert_dev(target, if_block1_anchor, anchor);
        current = true;
      },
      p: function update2(ctx2, dirty) {
        if (ctx2[1] > 0) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
            if (dirty[0] & 2) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_102(ctx2);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(t.parentNode, t);
          }
        } else if (if_block0) {
          group_outros();
          transition_out(if_block0, 1, 1, () => {
            if_block0 = null;
          });
          check_outros();
        }
        if (ctx2[1] < ctx2[0].length - 1) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
            if (dirty[0] & 3) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block_92(ctx2);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(if_block0);
        transition_in(if_block1);
        current = true;
      },
      o: function outro(local2) {
        transition_out(if_block0);
        transition_out(if_block1);
        current = false;
      },
      d: function destroy(detaching) {
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach_dev(t);
        if (if_block1)
          if_block1.d(detaching);
        if (detaching)
          detach_dev(if_block1_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_82.name,
      type: "if",
      source: "(427:8) {#if !options.loop}",
      ctx
    });
    return block;
  }
  function fallback_block_8(ctx) {
    let t;
    const block = {
      c: function create() {
        t = text("\u2190");
      },
      m: function mount(target, anchor) {
        insert_dev(target, t, anchor);
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(t);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: fallback_block_8.name,
      type: "fallback",
      source: "(440:40) &#8592;",
      ctx
    });
    return block;
  }
  function fallback_block_7(ctx) {
    let t;
    const block = {
      c: function create() {
        t = text("\u2192");
      },
      m: function mount(target, anchor) {
        insert_dev(target, t, anchor);
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(t);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: fallback_block_7.name,
      type: "fallback",
      source: "(443:41) &#8594;",
      ctx
    });
    return block;
  }
  function create_if_block_102(ctx) {
    let button;
    let current;
    let mounted;
    let dispose;
    const arrow_left_slot_template = ctx[29]["arrow-left"];
    const arrow_left_slot = create_slot(arrow_left_slot_template, ctx, ctx[28], get_arrow_left_slot_context);
    const arrow_left_slot_or_fallback = arrow_left_slot || fallback_block_6(ctx);
    const block = {
      c: function create() {
        button = element("button");
        if (arrow_left_slot_or_fallback)
          arrow_left_slot_or_fallback.c();
        attr_dev(button, "class", "arrow-left svelte-c3tglu");
        add_location(button, file10, 428, 16, 13281);
      },
      m: function mount(target, anchor) {
        insert_dev(target, button, anchor);
        if (arrow_left_slot_or_fallback) {
          arrow_left_slot_or_fallback.m(button, null);
        }
        current = true;
        if (!mounted) {
          dispose = listen_dev(button, "click", ctx[32], false, false, false);
          mounted = true;
        }
      },
      p: function update2(ctx2, dirty) {
        if (arrow_left_slot) {
          if (arrow_left_slot.p && (!current || dirty[0] & 268435457)) {
            update_slot(arrow_left_slot, arrow_left_slot_template, ctx2, ctx2[28], dirty, get_arrow_left_slot_changes, get_arrow_left_slot_context);
          }
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(arrow_left_slot_or_fallback, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(arrow_left_slot_or_fallback, local2);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(button);
        if (arrow_left_slot_or_fallback)
          arrow_left_slot_or_fallback.d(detaching);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_102.name,
      type: "if",
      source: "(428:12) {#if index > 0}",
      ctx
    });
    return block;
  }
  function fallback_block_6(ctx) {
    let t;
    const block = {
      c: function create() {
        t = text("\u2190");
      },
      m: function mount(target, anchor) {
        insert_dev(target, t, anchor);
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(t);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: fallback_block_6.name,
      type: "fallback",
      source: "(430:44) &#8592;",
      ctx
    });
    return block;
  }
  function create_if_block_92(ctx) {
    let button;
    let current;
    let mounted;
    let dispose;
    const arrow_right_slot_template = ctx[29]["arrow-right"];
    const arrow_right_slot = create_slot(arrow_right_slot_template, ctx, ctx[28], get_arrow_right_slot_context);
    const arrow_right_slot_or_fallback = arrow_right_slot || fallback_block_5(ctx);
    const block = {
      c: function create() {
        button = element("button");
        if (arrow_right_slot_or_fallback)
          arrow_right_slot_or_fallback.c();
        attr_dev(button, "class", "arrow-right svelte-c3tglu");
        add_location(button, file10, 433, 16, 13497);
      },
      m: function mount(target, anchor) {
        insert_dev(target, button, anchor);
        if (arrow_right_slot_or_fallback) {
          arrow_right_slot_or_fallback.m(button, null);
        }
        current = true;
        if (!mounted) {
          dispose = listen_dev(button, "click", ctx[33], false, false, false);
          mounted = true;
        }
      },
      p: function update2(ctx2, dirty) {
        if (arrow_right_slot) {
          if (arrow_right_slot.p && (!current || dirty[0] & 268435457)) {
            update_slot(arrow_right_slot, arrow_right_slot_template, ctx2, ctx2[28], dirty, get_arrow_right_slot_changes, get_arrow_right_slot_context);
          }
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(arrow_right_slot_or_fallback, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(arrow_right_slot_or_fallback, local2);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(button);
        if (arrow_right_slot_or_fallback)
          arrow_right_slot_or_fallback.d(detaching);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_92.name,
      type: "if",
      source: "(433:12) {#if index < slides.length - 1}",
      ctx
    });
    return block;
  }
  function fallback_block_5(ctx) {
    let t;
    const block = {
      c: function create() {
        t = text("\u2192");
      },
      m: function mount(target, anchor) {
        insert_dev(target, t, anchor);
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(t);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: fallback_block_5.name,
      type: "fallback",
      source: "(435:45) &#8594;",
      ctx
    });
    return block;
  }
  function create_if_block3(ctx) {
    let ul;
    let t0;
    let t1;
    let current;
    let if_block0 = ctx[6].dotsarrow && create_if_block_42(ctx);
    let each_value = ctx[10];
    validate_each_argument(each_value);
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block4(get_each_context4(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    let if_block1 = ctx[6].dotsarrow && create_if_block_110(ctx);
    const block = {
      c: function create() {
        ul = element("ul");
        if (if_block0)
          if_block0.c();
        t0 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t1 = space();
        if (if_block1)
          if_block1.c();
        attr_dev(ul, "class", "slidy-dots svelte-c3tglu");
        toggle_class(ul, "pure", ctx[6].dotspure);
        add_location(ul, file10, 447, 8, 14026);
      },
      m: function mount(target, anchor) {
        insert_dev(target, ul, anchor);
        if (if_block0)
          if_block0.m(ul, null);
        append_dev(ul, t0);
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(ul, null);
        }
        append_dev(ul, t1);
        if (if_block1)
          if_block1.m(ul, null);
        current = true;
      },
      p: function update2(ctx2, dirty) {
        if (ctx2[6].dotsarrow) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
            if (dirty[0] & 64) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_42(ctx2);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(ul, t0);
          }
        } else if (if_block0) {
          group_outros();
          transition_out(if_block0, 1, 1, () => {
            if_block0 = null;
          });
          check_outros();
        }
        if (dirty[0] & 268436547) {
          each_value = ctx2[10];
          validate_each_argument(each_value);
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context4(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block4(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(ul, t1);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
        if (ctx2[6].dotsarrow) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
            if (dirty[0] & 64) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block_110(ctx2);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(ul, null);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
        if (dirty[0] & 64) {
          toggle_class(ul, "pure", ctx2[6].dotspure);
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(if_block0);
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        transition_in(if_block1);
        current = true;
      },
      o: function outro(local2) {
        transition_out(if_block0);
        each_blocks = each_blocks.filter(Boolean_1);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        transition_out(if_block1);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(ul);
        if (if_block0)
          if_block0.d();
        destroy_each(each_blocks, detaching);
        if (if_block1)
          if_block1.d();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block3.name,
      type: "if",
      source: "(447:4) {#if controls.dots && slidyinit}",
      ctx
    });
    return block;
  }
  function create_if_block_42(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block_52, create_else_block_1];
    const if_blocks = [];
    function select_block_type_1(ctx2, dirty) {
      if (!ctx2[7].loop)
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type_1(ctx, [-1]);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    const block = {
      c: function create() {
        if_block.c();
        if_block_anchor = empty();
      },
      m: function mount(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;
      },
      p: function update2(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_1(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local2) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_42.name,
      type: "if",
      source: "(449:12) {#if controls.dotsarrow}",
      ctx
    });
    return block;
  }
  function create_else_block_1(ctx) {
    let li;
    let current;
    let mounted;
    let dispose;
    const dots_arrow_left_slot_template = ctx[29]["dots-arrow-left"];
    const dots_arrow_left_slot = create_slot(dots_arrow_left_slot_template, ctx, ctx[28], get_dots_arrow_left_slot_context_1);
    const dots_arrow_left_slot_or_fallback = dots_arrow_left_slot || fallback_block_4(ctx);
    const block = {
      c: function create() {
        li = element("li");
        if (dots_arrow_left_slot_or_fallback)
          dots_arrow_left_slot_or_fallback.c();
        attr_dev(li, "class", "dots-arrow-left svelte-c3tglu");
        add_location(li, file10, 458, 20, 14519);
      },
      m: function mount(target, anchor) {
        insert_dev(target, li, anchor);
        if (dots_arrow_left_slot_or_fallback) {
          dots_arrow_left_slot_or_fallback.m(li, null);
        }
        current = true;
        if (!mounted) {
          dispose = listen_dev(li, "click", ctx[37], false, false, false);
          mounted = true;
        }
      },
      p: function update2(ctx2, dirty) {
        if (dots_arrow_left_slot) {
          if (dots_arrow_left_slot.p && (!current || dirty[0] & 268435457)) {
            update_slot(dots_arrow_left_slot, dots_arrow_left_slot_template, ctx2, ctx2[28], dirty, get_dots_arrow_left_slot_changes_1, get_dots_arrow_left_slot_context_1);
          }
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(dots_arrow_left_slot_or_fallback, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(dots_arrow_left_slot_or_fallback, local2);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(li);
        if (dots_arrow_left_slot_or_fallback)
          dots_arrow_left_slot_or_fallback.d(detaching);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_else_block_1.name,
      type: "else",
      source: "(458:16) {:else}",
      ctx
    });
    return block;
  }
  function create_if_block_52(ctx) {
    let if_block_anchor;
    let current;
    let if_block = ctx[1] > 0 && create_if_block_62(ctx);
    const block = {
      c: function create() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m: function mount(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;
      },
      p: function update2(ctx2, dirty) {
        if (ctx2[1] > 0) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty[0] & 2) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_62(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local2) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_52.name,
      type: "if",
      source: "(450:16) {#if !options.loop}",
      ctx
    });
    return block;
  }
  function fallback_block_4(ctx) {
    let button;
    const block = {
      c: function create() {
        button = element("button");
        button.textContent = "\u2190";
        attr_dev(button, "class", "svelte-c3tglu");
        add_location(button, file10, 460, 29, 14655);
      },
      m: function mount(target, anchor) {
        insert_dev(target, button, anchor);
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(button);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: fallback_block_4.name,
      type: "fallback",
      source: "(461:29) <button>",
      ctx
    });
    return block;
  }
  function create_if_block_62(ctx) {
    let li;
    let current;
    let mounted;
    let dispose;
    const dots_arrow_left_slot_template = ctx[29]["dots-arrow-left"];
    const dots_arrow_left_slot = create_slot(dots_arrow_left_slot_template, ctx, ctx[28], get_dots_arrow_left_slot_context);
    const dots_arrow_left_slot_or_fallback = dots_arrow_left_slot || fallback_block_3(ctx);
    const block = {
      c: function create() {
        li = element("li");
        if (dots_arrow_left_slot_or_fallback)
          dots_arrow_left_slot_or_fallback.c();
        attr_dev(li, "class", "dots-arrow-left svelte-c3tglu");
        add_location(li, file10, 451, 24, 14214);
      },
      m: function mount(target, anchor) {
        insert_dev(target, li, anchor);
        if (dots_arrow_left_slot_or_fallback) {
          dots_arrow_left_slot_or_fallback.m(li, null);
        }
        current = true;
        if (!mounted) {
          dispose = listen_dev(li, "click", ctx[36], false, false, false);
          mounted = true;
        }
      },
      p: function update2(ctx2, dirty) {
        if (dots_arrow_left_slot) {
          if (dots_arrow_left_slot.p && (!current || dirty[0] & 268435457)) {
            update_slot(dots_arrow_left_slot, dots_arrow_left_slot_template, ctx2, ctx2[28], dirty, get_dots_arrow_left_slot_changes, get_dots_arrow_left_slot_context);
          }
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(dots_arrow_left_slot_or_fallback, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(dots_arrow_left_slot_or_fallback, local2);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(li);
        if (dots_arrow_left_slot_or_fallback)
          dots_arrow_left_slot_or_fallback.d(detaching);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_62.name,
      type: "if",
      source: "(451:20) {#if index > 0}",
      ctx
    });
    return block;
  }
  function fallback_block_3(ctx) {
    let button;
    const block = {
      c: function create() {
        button = element("button");
        button.textContent = "\u2190";
        attr_dev(button, "class", "svelte-c3tglu");
        add_location(button, file10, 453, 33, 14358);
      },
      m: function mount(target, anchor) {
        insert_dev(target, button, anchor);
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(button);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: fallback_block_3.name,
      type: "fallback",
      source: "(454:33) <button>",
      ctx
    });
    return block;
  }
  function fallback_block_2(ctx) {
    let button;
    let t_value = (ctx[6].dotsnum && !ctx[6].dotspure ? ctx[63] : "") + "";
    let t;
    const block = {
      c: function create() {
        button = element("button");
        t = text(t_value);
        attr_dev(button, "class", "svelte-c3tglu");
        add_location(button, file10, 471, 24, 15031);
      },
      m: function mount(target, anchor) {
        insert_dev(target, button, anchor);
        append_dev(button, t);
      },
      p: function update2(ctx2, dirty) {
        if (dirty[0] & 64 && t_value !== (t_value = (ctx2[6].dotsnum && !ctx2[6].dotspure ? ctx2[63] : "") + ""))
          set_data_dev(t, t_value);
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(button);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: fallback_block_2.name,
      type: "fallback",
      source: "(471:43)                          ",
      ctx
    });
    return block;
  }
  function create_each_block4(ctx) {
    let li;
    let current;
    let mounted;
    let dispose;
    const dot_slot_template = ctx[29].dot;
    const dot_slot = create_slot(dot_slot_template, ctx, ctx[28], get_dot_slot_context);
    const dot_slot_or_fallback = dot_slot || fallback_block_2(ctx);
    function click_handler_6() {
      return ctx[38](ctx[63]);
    }
    const block = {
      c: function create() {
        li = element("li");
        if (dot_slot_or_fallback)
          dot_slot_or_fallback.c();
        attr_dev(li, "class", "svelte-c3tglu");
        toggle_class(li, "active", ctx[63] === ctx[1]);
        add_location(li, file10, 466, 16, 14829);
      },
      m: function mount(target, anchor) {
        insert_dev(target, li, anchor);
        if (dot_slot_or_fallback) {
          dot_slot_or_fallback.m(li, null);
        }
        current = true;
        if (!mounted) {
          dispose = listen_dev(li, "click", stop_propagation(click_handler_6), false, false, true);
          mounted = true;
        }
      },
      p: function update2(new_ctx, dirty) {
        ctx = new_ctx;
        if (dot_slot) {
          if (dot_slot.p && (!current || dirty[0] & 268436481)) {
            update_slot(dot_slot, dot_slot_template, ctx, ctx[28], dirty, get_dot_slot_changes, get_dot_slot_context);
          }
        } else {
          if (dot_slot_or_fallback && dot_slot_or_fallback.p && dirty[0] & 64) {
            dot_slot_or_fallback.p(ctx, dirty);
          }
        }
        if (dirty[0] & 2) {
          toggle_class(li, "active", ctx[63] === ctx[1]);
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(dot_slot_or_fallback, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(dot_slot_or_fallback, local2);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(li);
        if (dot_slot_or_fallback)
          dot_slot_or_fallback.d(detaching);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_each_block4.name,
      type: "each",
      source: "(466:12) {#each dots as dot, i}",
      ctx
    });
    return block;
  }
  function create_if_block_110(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block_22, create_else_block3];
    const if_blocks = [];
    function select_block_type_2(ctx2, dirty) {
      if (!ctx2[7].loop)
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type_2(ctx, [-1]);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    const block = {
      c: function create() {
        if_block.c();
        if_block_anchor = empty();
      },
      m: function mount(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;
      },
      p: function update2(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_2(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local2) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_110.name,
      type: "if",
      source: "(480:12) {#if controls.dotsarrow}",
      ctx
    });
    return block;
  }
  function create_else_block3(ctx) {
    let li;
    let current;
    let mounted;
    let dispose;
    const dots_arrow_right_slot_template = ctx[29]["dots-arrow-right"];
    const dots_arrow_right_slot = create_slot(dots_arrow_right_slot_template, ctx, ctx[28], get_dots_arrow_right_slot_context_1);
    const dots_arrow_right_slot_or_fallback = dots_arrow_right_slot || fallback_block_1(ctx);
    const block = {
      c: function create() {
        li = element("li");
        if (dots_arrow_right_slot_or_fallback)
          dots_arrow_right_slot_or_fallback.c();
        attr_dev(li, "class", "dots-arrow-right svelte-c3tglu");
        add_location(li, file10, 489, 20, 15742);
      },
      m: function mount(target, anchor) {
        insert_dev(target, li, anchor);
        if (dots_arrow_right_slot_or_fallback) {
          dots_arrow_right_slot_or_fallback.m(li, null);
        }
        current = true;
        if (!mounted) {
          dispose = listen_dev(li, "click", ctx[40], false, false, false);
          mounted = true;
        }
      },
      p: function update2(ctx2, dirty) {
        if (dots_arrow_right_slot) {
          if (dots_arrow_right_slot.p && (!current || dirty[0] & 268435457)) {
            update_slot(dots_arrow_right_slot, dots_arrow_right_slot_template, ctx2, ctx2[28], dirty, get_dots_arrow_right_slot_changes_1, get_dots_arrow_right_slot_context_1);
          }
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(dots_arrow_right_slot_or_fallback, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(dots_arrow_right_slot_or_fallback, local2);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(li);
        if (dots_arrow_right_slot_or_fallback)
          dots_arrow_right_slot_or_fallback.d(detaching);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_else_block3.name,
      type: "else",
      source: "(489:16) {:else}",
      ctx
    });
    return block;
  }
  function create_if_block_22(ctx) {
    let if_block_anchor;
    let current;
    let if_block = ctx[1] < ctx[0].length - 1 && create_if_block_32(ctx);
    const block = {
      c: function create() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m: function mount(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;
      },
      p: function update2(ctx2, dirty) {
        if (ctx2[1] < ctx2[0].length - 1) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty[0] & 3) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_32(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local2) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_22.name,
      type: "if",
      source: "(481:16) {#if !options.loop}",
      ctx
    });
    return block;
  }
  function fallback_block_1(ctx) {
    let button;
    const block = {
      c: function create() {
        button = element("button");
        button.textContent = "\u2192";
        attr_dev(button, "class", "svelte-c3tglu");
        add_location(button, file10, 491, 29, 15880);
      },
      m: function mount(target, anchor) {
        insert_dev(target, button, anchor);
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(button);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: fallback_block_1.name,
      type: "fallback",
      source: "(492:29) <button>",
      ctx
    });
    return block;
  }
  function create_if_block_32(ctx) {
    let li;
    let current;
    let mounted;
    let dispose;
    const dots_arrow_right_slot_template = ctx[29]["dots-arrow-right"];
    const dots_arrow_right_slot = create_slot(dots_arrow_right_slot_template, ctx, ctx[28], get_dots_arrow_right_slot_context);
    const dots_arrow_right_slot_or_fallback = dots_arrow_right_slot || fallback_block(ctx);
    const block = {
      c: function create() {
        li = element("li");
        if (dots_arrow_right_slot_or_fallback)
          dots_arrow_right_slot_or_fallback.c();
        attr_dev(li, "class", "dots-arrow-right svelte-c3tglu");
        add_location(li, file10, 482, 24, 15435);
      },
      m: function mount(target, anchor) {
        insert_dev(target, li, anchor);
        if (dots_arrow_right_slot_or_fallback) {
          dots_arrow_right_slot_or_fallback.m(li, null);
        }
        current = true;
        if (!mounted) {
          dispose = listen_dev(li, "click", ctx[39], false, false, false);
          mounted = true;
        }
      },
      p: function update2(ctx2, dirty) {
        if (dots_arrow_right_slot) {
          if (dots_arrow_right_slot.p && (!current || dirty[0] & 268435457)) {
            update_slot(dots_arrow_right_slot, dots_arrow_right_slot_template, ctx2, ctx2[28], dirty, get_dots_arrow_right_slot_changes, get_dots_arrow_right_slot_context);
          }
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(dots_arrow_right_slot_or_fallback, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(dots_arrow_right_slot_or_fallback, local2);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(li);
        if (dots_arrow_right_slot_or_fallback)
          dots_arrow_right_slot_or_fallback.d(detaching);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_32.name,
      type: "if",
      source: "(482:20) {#if index < slides.length - 1}",
      ctx
    });
    return block;
  }
  function fallback_block(ctx) {
    let button;
    const block = {
      c: function create() {
        button = element("button");
        button.textContent = "\u2192";
        attr_dev(button, "class", "svelte-c3tglu");
        add_location(button, file10, 484, 33, 15581);
      },
      m: function mount(target, anchor) {
        insert_dev(target, button, anchor);
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(button);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: fallback_block.name,
      type: "fallback",
      source: "(485:33) <button>",
      ctx
    });
    return block;
  }
  function create_fragment10(ctx) {
    let section;
    let t0;
    let ul;
    let ul_style_value;
    let t1;
    let t2;
    let section_id_value;
    let action_resize_action;
    let action_wheel_action;
    let current;
    let mounted;
    let dispose;
    let if_block0 = !ctx[2] && create_if_block_142(ctx);
    let if_block1 = ctx[0] && create_if_block_112(ctx);
    let if_block2 = ctx[6].arrows && ctx[2] && create_if_block_72(ctx);
    let if_block3 = ctx[6].dots && ctx[2] && create_if_block3(ctx);
    const block = {
      c: function create() {
        section = element("section");
        if (if_block0)
          if_block0.c();
        t0 = space();
        ul = element("ul");
        if (if_block1)
          if_block1.c();
        t1 = space();
        if (if_block2)
          if_block2.c();
        t2 = space();
        if (if_block3)
          if_block3.c();
        attr_dev(ul, "class", "slidy-ul svelte-c3tglu");
        attr_dev(ul, "style", ul_style_value = ctx[12]());
        add_location(ul, file10, 392, 4, 11808);
        attr_dev(section, "role", "region");
        attr_dev(section, "tabindex", "0");
        attr_dev(section, "aria-label", "Slidy");
        attr_dev(section, "id", section_id_value = ctx[4].id);
        attr_dev(section, "class", "slidy svelte-c3tglu");
        set_style(section, "--wrapw", ctx[4].width);
        set_style(section, "--wraph", ctx[4].height);
        set_style(section, "--wrapp", ctx[4].padding);
        set_style(section, "--slidew", ctx[5].width);
        set_style(section, "--slideh", ctx[5].height);
        set_style(section, "--slidef", ctx[5].objectfit);
        set_style(section, "--slideo", ctx[5].overflow);
        set_style(section, "--slideg", ctx[9] ? `${ctx[5].gap}px 0 0 0` : `0 0 0 ${ctx[5].gap}px`);
        set_style(section, "--dur", ctx[7].duration + "ms");
        toggle_class(section, "loaded", ctx[2]);
        toggle_class(section, "axisy", ctx[9]);
        toggle_class(section, "autowidth", ctx[5].width === "auto");
        toggle_class(section, "antiloop", ctx[7].loop === false);
        toggle_class(section, "alignmiddle", ctx[4].align === "middle");
        toggle_class(section, "alignstart", ctx[4].align === "start");
        toggle_class(section, "alignend", ctx[4].align === "end");
        add_location(section, file10, 357, 0, 10765);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, section, anchor);
        if (if_block0)
          if_block0.m(section, null);
        append_dev(section, t0);
        append_dev(section, ul);
        if (if_block1)
          if_block1.m(ul, null);
        append_dev(section, t1);
        if (if_block2)
          if_block2.m(section, null);
        append_dev(section, t2);
        if (if_block3)
          if_block3.m(section, null);
        current = true;
        if (!mounted) {
          dispose = [
            listen_dev(ul, "contextmenu", ctx[31], false, false, false),
            action_destroyer(action_resize_action = resize2(section)),
            listen_dev(section, "resize", ctx[13], false, false, false),
            action_destroyer(action_wheel_action = wheel2(section)),
            listen_dev(section, "wheels", function() {
              if (is_function(ctx[6].wheel ? ctx[14] : null))
                (ctx[6].wheel ? ctx[14] : null).apply(this, arguments);
            }, false, false, false),
            listen_dev(section, "keydown", function() {
              if (is_function(ctx[6].keys ? ctx[18] : null))
                (ctx[6].keys ? ctx[18] : null).apply(this, arguments);
            }, false, false, false)
          ];
          mounted = true;
        }
      },
      p: function update2(new_ctx, dirty) {
        ctx = new_ctx;
        if (!ctx[2]) {
          if (if_block0) {
            if_block0.p(ctx, dirty);
            if (dirty[0] & 4) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_142(ctx);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(section, t0);
          }
        } else if (if_block0) {
          group_outros();
          transition_out(if_block0, 1, 1, () => {
            if_block0 = null;
          });
          check_outros();
        }
        if (ctx[0]) {
          if (if_block1) {
            if_block1.p(ctx, dirty);
            if (dirty[0] & 1) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block_112(ctx);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(ul, null);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
        if (!current || dirty[0] & 4096 && ul_style_value !== (ul_style_value = ctx[12]())) {
          attr_dev(ul, "style", ul_style_value);
        }
        if (ctx[6].arrows && ctx[2]) {
          if (if_block2) {
            if_block2.p(ctx, dirty);
            if (dirty[0] & 68) {
              transition_in(if_block2, 1);
            }
          } else {
            if_block2 = create_if_block_72(ctx);
            if_block2.c();
            transition_in(if_block2, 1);
            if_block2.m(section, t2);
          }
        } else if (if_block2) {
          group_outros();
          transition_out(if_block2, 1, 1, () => {
            if_block2 = null;
          });
          check_outros();
        }
        if (ctx[6].dots && ctx[2]) {
          if (if_block3) {
            if_block3.p(ctx, dirty);
            if (dirty[0] & 68) {
              transition_in(if_block3, 1);
            }
          } else {
            if_block3 = create_if_block3(ctx);
            if_block3.c();
            transition_in(if_block3, 1);
            if_block3.m(section, null);
          }
        } else if (if_block3) {
          group_outros();
          transition_out(if_block3, 1, 1, () => {
            if_block3 = null;
          });
          check_outros();
        }
        if (!current || dirty[0] & 16 && section_id_value !== (section_id_value = ctx[4].id)) {
          attr_dev(section, "id", section_id_value);
        }
        if (!current || dirty[0] & 16) {
          set_style(section, "--wrapw", ctx[4].width);
        }
        if (!current || dirty[0] & 16) {
          set_style(section, "--wraph", ctx[4].height);
        }
        if (!current || dirty[0] & 16) {
          set_style(section, "--wrapp", ctx[4].padding);
        }
        if (!current || dirty[0] & 32) {
          set_style(section, "--slidew", ctx[5].width);
        }
        if (!current || dirty[0] & 32) {
          set_style(section, "--slideh", ctx[5].height);
        }
        if (!current || dirty[0] & 32) {
          set_style(section, "--slidef", ctx[5].objectfit);
        }
        if (!current || dirty[0] & 32) {
          set_style(section, "--slideo", ctx[5].overflow);
        }
        if (!current || dirty[0] & 544) {
          set_style(section, "--slideg", ctx[9] ? `${ctx[5].gap}px 0 0 0` : `0 0 0 ${ctx[5].gap}px`);
        }
        if (!current || dirty[0] & 128) {
          set_style(section, "--dur", ctx[7].duration + "ms");
        }
        if (dirty[0] & 4) {
          toggle_class(section, "loaded", ctx[2]);
        }
        if (dirty[0] & 512) {
          toggle_class(section, "axisy", ctx[9]);
        }
        if (dirty[0] & 32) {
          toggle_class(section, "autowidth", ctx[5].width === "auto");
        }
        if (dirty[0] & 128) {
          toggle_class(section, "antiloop", ctx[7].loop === false);
        }
        if (dirty[0] & 16) {
          toggle_class(section, "alignmiddle", ctx[4].align === "middle");
        }
        if (dirty[0] & 16) {
          toggle_class(section, "alignstart", ctx[4].align === "start");
        }
        if (dirty[0] & 16) {
          toggle_class(section, "alignend", ctx[4].align === "end");
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(if_block0);
        transition_in(if_block1);
        transition_in(if_block2);
        transition_in(if_block3);
        current = true;
      },
      o: function outro(local2) {
        transition_out(if_block0);
        transition_out(if_block1);
        transition_out(if_block2);
        transition_out(if_block3);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(section);
        if (if_block0)
          if_block0.d();
        if (if_block1)
          if_block1.d();
        if (if_block2)
          if_block2.d();
        if (if_block3)
          if_block3.d();
        mounted = false;
        run_all(dispose);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_fragment10.name,
      type: "component",
      source: "",
      ctx
    });
    return block;
  }
  function instance10($$self, $$props, $$invalidate) {
    let render;
    let axisy;
    let move;
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("Slidy", slots, [
      "loader",
      "default",
      "arrow-left",
      "arrow-right",
      "dots-arrow-left",
      "dot",
      "dots-arrow-right"
    ]);
    let { slides: slides2 = [] } = $$props, { keyExtractor = (item, i) => item.id || i } = $$props, { wrap = {
      id: null,
      width: "100%",
      height: "50%",
      padding: "0",
      align: "middle",
      alignmargin: 0
    } } = $$props, { slide: slide2 = {
      gap: 0,
      class: "",
      width: "50%",
      height: "100%",
      backimg: false,
      imgsrckey: "src",
      objectfit: "cover",
      overflow: "hidden"
    } } = $$props, { controls = {
      dots: true,
      dotsnum: true,
      dotsarrow: true,
      dotspure: false,
      arrows: true,
      keys: true,
      drag: true,
      wheel: true
    } } = $$props, { options = { axis: "x", loop: true, duration: 450 } } = $$props, { index: index2 = Math.floor(slides2.length / 2) } = $$props, { slidyinit = false } = $$props, { timeout = 0 } = $$props;
    async function slidyInit() {
      if (slides2) {
        $$invalidate(0, slides2 = $$invalidate(10, dots = slides2.map((s, i) => {
          return { ix: i, ...s };
        })));
        timeout ? setTimeout(() => $$invalidate(2, slidyinit = true), timeout) : tick().then(() => $$invalidate(2, slidyinit = true));
      }
    }
    let nodes = [], dots = [], el2 = {}, aix = 0;
    function slidySizes() {
      if (render) {
        aix = options.loop ? Math.floor(slides2.length / 2) : index2;
        $$invalidate(20, el2 = {
          active: {
            node: slides2[aix],
            width: nodes[aix].offsetWidth + slide2.gap,
            height: nodes[aix].offsetHeight + slide2.gap
          },
          first: {
            node: slides2[0],
            width: nodes[0].offsetWidth + slide2.gap,
            height: nodes[0].offsetHeight + slide2.gap
          },
          last: {
            node: slides2[slides2.length - 1],
            width: nodes[slides2.length - 1].offsetWidth + slide2.gap,
            height: nodes[slides2.length - 1].offsetHeight + slide2.gap
          },
          before: {
            width: nodes.map((a, i) => i < index2 ? a.offsetWidth + slide2.gap : null).reduce((p, v) => p + v),
            height: nodes.map((a, i) => i < index2 ? a.offsetHeight + slide2.gap : null).reduce((p, v) => p + v)
          },
          after: {
            width: nodes.map((a, i) => i > index2 ? a.offsetWidth + slide2.gap : null).reduce((p, v) => p + v),
            height: nodes.map((a, i) => i > index2 ? a.offsetHeight + slide2.gap : null).reduce((p, v) => p + v)
          }
        });
      }
    }
    let size = {}, diff = {};
    function slidyMatch() {
      if (render) {
        $$invalidate(21, size = {
          first: axisy ? el2.first.height : el2.first.width,
          last: axisy ? el2.last.height : el2.last.width,
          active: axisy ? el2.active.height : el2.active.width,
          before: axisy ? el2.before.height : el2.before.width,
          after: axisy ? el2.after.height : el2.after.width,
          wrap: axisy ? wh : ww
        });
        $$invalidate(22, diff = {
          align: (size.wrap - size.active + slide2.gap) / 2 - wrap.alignmargin,
          pos: (size.before - size.after) / 2 - pos
        });
      }
    }
    let ww, wh;
    function resizeWrap(e) {
      ww = e.detail.CR.width;
      wh = e.detail.CR.height;
      slidySizes();
    }
    let pos = 0, comp = 0, translate = 0, transition = options.duration;
    function prev() {
      $$invalidate(0, slides2 = [slides2[slides2.length - 1], ...slides2.slice(0, -1)]);
    }
    function next() {
      $$invalidate(0, slides2 = [...slides2.slice(1), slides2[0]]);
    }
    let ix = index2;
    function slidyIndex(id) {
      while (ix > id) {
        $$invalidate(26, transition = options.duration);
        if (options.loop) {
          $$invalidate(23, pos += size.last);
          $$invalidate(24, comp = -pos);
          prev();
        }
        ix--;
      }
      while (ix < id) {
        $$invalidate(26, transition = options.duration);
        if (options.loop) {
          $$invalidate(23, pos -= size.first);
          $$invalidate(24, comp = -pos);
          next();
        }
        ix++;
      }
    }
    function slidyLoop() {
      if (pos >= size.last) {
        options.loop ? prev() : $$invalidate(1, index2 = ix -= 1);
        $$invalidate(23, pos = $$invalidate(24, comp = 0));
      } else if (pos <= -size.first) {
        options.loop ? next() : $$invalidate(1, index2 = ix += 1);
        $$invalidate(23, pos = $$invalidate(24, comp = 0));
      }
      options.loop ? $$invalidate(1, index2 = ix = el2.active.node.ix) : pos >= size.before || pos <= -size.after ? $$invalidate(23, pos = pos / 1.5) : $$invalidate(23, pos);
    }
    let transtime;
    function slidyStop() {
      $$invalidate(26, transition = options.duration);
      const nulled = (direct) => {
        if (direct) {
          if (options.loop) {
            direct();
            $$invalidate(23, pos = speed = $$invalidate(26, transition = 0));
            tick().then(() => $$invalidate(1, index2 = ix = el2.active.node.ix));
            clearTimeout(transtime);
          } else {
            $$invalidate(1, index2 = direct);
            $$invalidate(23, pos = speed = 0);
          }
        } else {
          $$invalidate(23, pos = $$invalidate(24, comp = speed = 0));
        }
      };
      if (pos > size.last / 3 || speed < 0) {
        if (options.loop) {
          $$invalidate(23, pos += size.last - pos);
          transtime = setTimeout(() => nulled(prev), transition);
        } else {
          nulled($$invalidate(1, index2 = ix -= 1));
        }
      } else if (pos < -size.first / 3 || speed > 0) {
        if (options.loop) {
          $$invalidate(23, pos -= size.first + pos);
          transtime = setTimeout(() => nulled(next), transition);
        } else {
          nulled($$invalidate(1, index2 = ix += 1));
        }
      } else {
        nulled();
      }
    }
    function slidyNull() {
      $$invalidate(26, transition = 0);
      comp !== 0 && $$invalidate(24, comp = $$invalidate(23, pos = speed = 0));
      transtime !== null && clearTimeout(transtime);
      wheeltime !== null && clearTimeout(wheeltime);
      dragtime !== null && clearInterval(dragtime);
      return;
    }
    const axiscoord = (e) => Math.floor(axisy ? e.detail.dy : e.detail.dx) * 1.6;
    let iswheel = false, wheeltime;
    function slidyWheel(e) {
      slidyNull();
      iswheel = true;
      $$invalidate(23, pos -= axiscoord(e));
      slidyLoop();
      wheeltime = setTimeout(() => {
        iswheel = false;
        clearTimeout(wheeltime);
        slidyStop();
      }, options.duration / 2);
    }
    let isdrag = false, htx = 0, speed = 0, dragtime;
    function dragStart() {
      slidyNull();
      $$invalidate(11, isdrag = true);
    }
    function dragSlide(e) {
      $$invalidate(23, pos += axiscoord(e));
      dragtime = setInterval(() => htx = pos, 60);
      speed = (htx - pos) / 60;
      slidyLoop();
    }
    function dragStop() {
      $$invalidate(11, isdrag = false);
      $$invalidate(23, pos += pos * speed / 1.6);
      clearInterval(dragtime);
      slidyStop();
    }
    function slidyKeys(e) {
      if (e.keyCode === 37 || e.keyCode === 38) {
        $$invalidate(1, index2--, index2);
      } else if (e.keyCode === 39 || e.keyCode === 40) {
        $$invalidate(1, index2++, index2);
      }
    }
    const writable_props = [
      "slides",
      "keyExtractor",
      "wrap",
      "slide",
      "controls",
      "options",
      "index",
      "slidyinit",
      "timeout"
    ];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$")
        console.warn(`<Slidy> was created with unknown prop '${key}'`);
    });
    function li_binding($$value, i) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        nodes[i] = $$value;
        $$invalidate(8, nodes);
        $$invalidate(0, slides2);
      });
    }
    const contextmenu_handler = () => $$invalidate(11, isdrag = false);
    const click_handler = () => $$invalidate(1, index2--, index2);
    const click_handler_1 = () => $$invalidate(1, index2++, index2);
    const click_handler_2 = () => $$invalidate(1, index2--, index2);
    const click_handler_3 = () => $$invalidate(1, index2++, index2);
    const click_handler_4 = () => $$invalidate(1, index2--, index2);
    const click_handler_5 = () => $$invalidate(1, index2--, index2);
    const click_handler_6 = (i) => $$invalidate(1, index2 = i);
    const click_handler_7 = () => $$invalidate(1, index2++, index2);
    const click_handler_8 = () => $$invalidate(1, index2++, index2);
    $$self.$$set = ($$props2) => {
      if ("slides" in $$props2)
        $$invalidate(0, slides2 = $$props2.slides);
      if ("keyExtractor" in $$props2)
        $$invalidate(3, keyExtractor = $$props2.keyExtractor);
      if ("wrap" in $$props2)
        $$invalidate(4, wrap = $$props2.wrap);
      if ("slide" in $$props2)
        $$invalidate(5, slide2 = $$props2.slide);
      if ("controls" in $$props2)
        $$invalidate(6, controls = $$props2.controls);
      if ("options" in $$props2)
        $$invalidate(7, options = $$props2.options);
      if ("index" in $$props2)
        $$invalidate(1, index2 = $$props2.index);
      if ("slidyinit" in $$props2)
        $$invalidate(2, slidyinit = $$props2.slidyinit);
      if ("timeout" in $$props2)
        $$invalidate(19, timeout = $$props2.timeout);
      if ("$$scope" in $$props2)
        $$invalidate(28, $$scope = $$props2.$$scope);
    };
    $$self.$capture_state = () => ({
      tick,
      action: actions_exports,
      slides: slides2,
      keyExtractor,
      wrap,
      slide: slide2,
      controls,
      options,
      index: index2,
      slidyinit,
      timeout,
      slidyInit,
      nodes,
      dots,
      el: el2,
      aix,
      slidySizes,
      size,
      diff,
      slidyMatch,
      ww,
      wh,
      resizeWrap,
      pos,
      comp,
      translate,
      transition,
      prev,
      next,
      ix,
      slidyIndex,
      slidyLoop,
      transtime,
      slidyStop,
      slidyNull,
      axiscoord,
      iswheel,
      wheeltime,
      slidyWheel,
      isdrag,
      htx,
      speed,
      dragtime,
      dragStart,
      dragSlide,
      dragStop,
      slidyKeys,
      render,
      axisy,
      move
    });
    $$self.$inject_state = ($$props2) => {
      if ("slides" in $$props2)
        $$invalidate(0, slides2 = $$props2.slides);
      if ("keyExtractor" in $$props2)
        $$invalidate(3, keyExtractor = $$props2.keyExtractor);
      if ("wrap" in $$props2)
        $$invalidate(4, wrap = $$props2.wrap);
      if ("slide" in $$props2)
        $$invalidate(5, slide2 = $$props2.slide);
      if ("controls" in $$props2)
        $$invalidate(6, controls = $$props2.controls);
      if ("options" in $$props2)
        $$invalidate(7, options = $$props2.options);
      if ("index" in $$props2)
        $$invalidate(1, index2 = $$props2.index);
      if ("slidyinit" in $$props2)
        $$invalidate(2, slidyinit = $$props2.slidyinit);
      if ("timeout" in $$props2)
        $$invalidate(19, timeout = $$props2.timeout);
      if ("nodes" in $$props2)
        $$invalidate(8, nodes = $$props2.nodes);
      if ("dots" in $$props2)
        $$invalidate(10, dots = $$props2.dots);
      if ("el" in $$props2)
        $$invalidate(20, el2 = $$props2.el);
      if ("aix" in $$props2)
        aix = $$props2.aix;
      if ("size" in $$props2)
        $$invalidate(21, size = $$props2.size);
      if ("diff" in $$props2)
        $$invalidate(22, diff = $$props2.diff);
      if ("ww" in $$props2)
        ww = $$props2.ww;
      if ("wh" in $$props2)
        wh = $$props2.wh;
      if ("pos" in $$props2)
        $$invalidate(23, pos = $$props2.pos);
      if ("comp" in $$props2)
        $$invalidate(24, comp = $$props2.comp);
      if ("translate" in $$props2)
        $$invalidate(25, translate = $$props2.translate);
      if ("transition" in $$props2)
        $$invalidate(26, transition = $$props2.transition);
      if ("ix" in $$props2)
        ix = $$props2.ix;
      if ("transtime" in $$props2)
        transtime = $$props2.transtime;
      if ("iswheel" in $$props2)
        iswheel = $$props2.iswheel;
      if ("wheeltime" in $$props2)
        wheeltime = $$props2.wheeltime;
      if ("isdrag" in $$props2)
        $$invalidate(11, isdrag = $$props2.isdrag);
      if ("htx" in $$props2)
        htx = $$props2.htx;
      if ("speed" in $$props2)
        speed = $$props2.speed;
      if ("dragtime" in $$props2)
        dragtime = $$props2.dragtime;
      if ("render" in $$props2)
        $$invalidate(27, render = $$props2.render);
      if ("axisy" in $$props2)
        $$invalidate(9, axisy = $$props2.axisy);
      if ("move" in $$props2)
        $$invalidate(12, move = $$props2.move);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    $$self.$$.update = () => {
      if ($$self.$$.dirty[0] & 256) {
        $:
          $$invalidate(8, nodes = nodes.filter(Boolean));
      }
      if ($$self.$$.dirty[0] & 257) {
        $:
          $$invalidate(27, render = nodes.length !== 0 && slides2.length !== 0 && nodes.length === slides2.length);
      }
      if ($$self.$$.dirty[0] & 134217729) {
        $:
          render && slidyInit(slides2);
      }
      if ($$self.$$.dirty[0] & 135) {
        $:
          if (slidyinit) {
            if (index2 < 0) {
              if (options.loop) {
                $$invalidate(1, index2 = slides2.length - 1);
                ix = slides2.length;
              } else {
                $$invalidate(1, index2 = 0);
              }
            } else if (index2 > slides2.length - 1) {
              if (options.loop) {
                $$invalidate(1, index2 = 0);
                ix = -1;
              } else {
                $$invalidate(1, index2 = slides2.length - 1);
              }
            }
          }
      }
      if ($$self.$$.dirty[0] & 142606338) {
        $:
          render && slidySizes(pos, index2);
      }
      if ($$self.$$.dirty[0] & 128) {
        $:
          $$invalidate(9, axisy = options.axis === "y");
      }
      if ($$self.$$.dirty[0] & 135266304) {
        $:
          render && slidyMatch(el2);
      }
      if ($$self.$$.dirty[0] & 14680209) {
        $:
          if (wrap.align === "end") {
            $$invalidate(25, translate = slides2.length % 2 === 0 ? options.loop ? pos + diff.align - size.active / 2 : -diff.pos + diff.align : options.loop ? pos + diff.align : -diff.pos + diff.align);
          } else if (wrap.align === "start") {
            $$invalidate(25, translate = slides2.length % 2 === 0 ? options.loop ? pos - diff.align - size.active / 2 : -diff.pos - diff.align : options.loop ? pos - diff.align : -diff.pos - diff.align);
          } else {
            $$invalidate(25, translate = slides2.length % 2 === 0 ? options.loop ? pos - size.active / 2 : -diff.pos : options.loop ? pos : -diff.pos);
          }
      }
      if ($$self.$$.dirty[0] & 117441024) {
        $:
          $$invalidate(12, move = () => {
            if (axisy) {
              return `transform: translate(0, ${translate}px); top: ${comp}px; transition: transform ${transition}ms;`;
            } else {
              return `transform: translate(${translate}px, 0); left: ${comp}px; transition: transform ${transition}ms;`;
            }
          });
      }
      if ($$self.$$.dirty[0] & 134217730) {
        $:
          render && slidyIndex(index2);
      }
    };
    return [
      slides2,
      index2,
      slidyinit,
      keyExtractor,
      wrap,
      slide2,
      controls,
      options,
      nodes,
      axisy,
      dots,
      isdrag,
      move,
      resizeWrap,
      slidyWheel,
      dragStart,
      dragSlide,
      dragStop,
      slidyKeys,
      timeout,
      el2,
      size,
      diff,
      pos,
      comp,
      translate,
      transition,
      render,
      $$scope,
      slots,
      li_binding,
      contextmenu_handler,
      click_handler,
      click_handler_1,
      click_handler_2,
      click_handler_3,
      click_handler_4,
      click_handler_5,
      click_handler_6,
      click_handler_7,
      click_handler_8
    ];
  }
  var Slidy = class extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance10, create_fragment10, safe_not_equal, {
        slides: 0,
        keyExtractor: 3,
        wrap: 4,
        slide: 5,
        controls: 6,
        options: 7,
        index: 1,
        slidyinit: 2,
        timeout: 19
      }, [-1, -1, -1]);
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "Slidy",
        options,
        id: create_fragment10.name
      });
    }
    get slides() {
      throw new Error("<Slidy>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set slides(value) {
      throw new Error("<Slidy>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    get keyExtractor() {
      throw new Error("<Slidy>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set keyExtractor(value) {
      throw new Error("<Slidy>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    get wrap() {
      throw new Error("<Slidy>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set wrap(value) {
      throw new Error("<Slidy>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    get slide() {
      throw new Error("<Slidy>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set slide(value) {
      throw new Error("<Slidy>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    get controls() {
      throw new Error("<Slidy>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set controls(value) {
      throw new Error("<Slidy>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    get options() {
      throw new Error("<Slidy>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set options(value) {
      throw new Error("<Slidy>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    get index() {
      throw new Error("<Slidy>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set index(value) {
      throw new Error("<Slidy>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    get slidyinit() {
      throw new Error("<Slidy>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set slidyinit(value) {
      throw new Error("<Slidy>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    get timeout() {
      throw new Error("<Slidy>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
    set timeout(value) {
      throw new Error("<Slidy>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  };
  var Slidy_default2 = Slidy;
  require_11();

  // www/src/App.svelte
  var { console: console_1 } = globals;
  var file11 = "www/src/App.svelte";
  function create_else_block_22(ctx) {
    let show_if;
    let t;
    let img;
    let img_alt_value;
    let img_src_value;
    let mounted;
    let dispose;
    function select_block_type_1(ctx2, dirty) {
      if (show_if == null || dirty & 67108928)
        show_if = !!ctx2[6].includes(ctx2[26].ix);
      if (show_if)
        return create_if_block_73;
      return create_else_block_3;
    }
    let current_block_type = select_block_type_1(ctx, -1);
    let if_block = current_block_type(ctx);
    function load_handler() {
      return ctx[21](ctx[26]);
    }
    const block = {
      c: function create() {
        if_block.c();
        t = space();
        img = element("img");
        attr_dev(img, "alt", img_alt_value = ctx[26].id);
        if (img.src !== (img_src_value = ctx[13](ctx[26])))
          attr_dev(img, "src", img_src_value);
        attr_dev(img, "class", "svelte-1nidue");
        toggle_class(img, "loaded", ctx[6].includes(ctx[26].ix));
        add_location(img, file11, 140, 8, 3967);
      },
      m: function mount(target, anchor) {
        if_block.m(target, anchor);
        insert_dev(target, t, anchor);
        insert_dev(target, img, anchor);
        if (!mounted) {
          dispose = listen_dev(img, "load", load_handler, { once: true }, false, false);
          mounted = true;
        }
      },
      p: function update2(new_ctx, dirty) {
        ctx = new_ctx;
        if (current_block_type === (current_block_type = select_block_type_1(ctx, dirty)) && if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx);
          if (if_block) {
            if_block.c();
            if_block.m(t.parentNode, t);
          }
        }
        if (dirty & 67108864 && img_alt_value !== (img_alt_value = ctx[26].id)) {
          attr_dev(img, "alt", img_alt_value);
        }
        if (dirty & 67108864 && img.src !== (img_src_value = ctx[13](ctx[26]))) {
          attr_dev(img, "src", img_src_value);
        }
        if (dirty & 67108928) {
          toggle_class(img, "loaded", ctx[6].includes(ctx[26].ix));
        }
      },
      d: function destroy(detaching) {
        if_block.d(detaching);
        if (detaching)
          detach_dev(t);
        if (detaching)
          detach_dev(img);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_else_block_22.name,
      type: "else",
      source: "(135:4) {:else}",
      ctx
    });
    return block;
  }
  function create_if_block_63(ctx) {
    let span;
    let strong;
    let t_value = ctx[26].ix + "";
    let t;
    const block = {
      c: function create() {
        span = element("span");
        strong = element("strong");
        t = text(t_value);
        attr_dev(strong, "class", "svelte-1nidue");
        add_location(strong, file11, 132, 12, 3707);
        attr_dev(span, "class", "default svelte-1nidue");
        add_location(span, file11, 131, 8, 3672);
      },
      m: function mount(target, anchor) {
        insert_dev(target, span, anchor);
        append_dev(span, strong);
        append_dev(strong, t);
      },
      p: function update2(ctx2, dirty) {
        if (dirty & 67108864 && t_value !== (t_value = ctx2[26].ix + ""))
          set_data_dev(t, t_value);
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(span);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_63.name,
      type: "if",
      source: "(131:4) {#if $settings.slide.backimg === true}",
      ctx
    });
    return block;
  }
  function create_else_block_3(ctx) {
    let span;
    const block = {
      c: function create() {
        span = element("span");
        span.textContent = "Loading...";
        attr_dev(span, "class", "loading svelte-1nidue");
        add_location(span, file11, 139, 15, 3914);
      },
      m: function mount(target, anchor) {
        insert_dev(target, span, anchor);
      },
      p: noop,
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(span);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_else_block_3.name,
      type: "else",
      source: "(140:8) {:else}",
      ctx
    });
    return block;
  }
  function create_if_block_73(ctx) {
    let span;
    let strong;
    let t_value = ctx[26].ix + "";
    let t;
    const block = {
      c: function create() {
        span = element("span");
        strong = element("strong");
        t = text(t_value);
        attr_dev(strong, "class", "svelte-1nidue");
        add_location(strong, file11, 137, 16, 3852);
        attr_dev(span, "class", "default svelte-1nidue");
        add_location(span, file11, 136, 12, 3813);
      },
      m: function mount(target, anchor) {
        insert_dev(target, span, anchor);
        append_dev(span, strong);
        append_dev(strong, t);
      },
      p: function update2(ctx2, dirty) {
        if (dirty & 67108864 && t_value !== (t_value = ctx2[26].ix + ""))
          set_data_dev(t, t_value);
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(span);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_73.name,
      type: "if",
      source: "(136:8) {#if loaded.includes(item.ix)}",
      ctx
    });
    return block;
  }
  function create_default_slot_2(ctx) {
    let if_block_anchor;
    function select_block_type(ctx2, dirty) {
      if (ctx2[9].slide.backimg === true)
        return create_if_block_63;
      return create_else_block_22;
    }
    let current_block_type = select_block_type(ctx, -1);
    let if_block = current_block_type(ctx);
    const block = {
      c: function create() {
        if_block.c();
        if_block_anchor = empty();
      },
      m: function mount(target, anchor) {
        if_block.m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
      },
      p: function update2(ctx2, dirty) {
        if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx2);
          if (if_block) {
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        }
      },
      d: function destroy(detaching) {
        if_block.d(detaching);
        if (detaching)
          detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_default_slot_2.name,
      type: "slot",
      source: '(118:0) <Slidy     timeout=\\"500\\"     let:item     {...$settings}     slides={$slides}     bind:slidyinit     bind:index={$index}     bind:intersect >',
      ctx
    });
    return block;
  }
  function create_loader_slot(ctx) {
    let span;
    let spinnerd;
    let current;
    spinnerd = new SpinnerD_default({ $$inline: true });
    const block = {
      c: function create() {
        span = element("span");
        create_component(spinnerd.$$.fragment);
        attr_dev(span, "slot", "loader");
        attr_dev(span, "class", "svelte-1nidue");
        add_location(span, file11, 126, 4, 3566);
      },
      m: function mount(target, anchor) {
        insert_dev(target, span, anchor);
        mount_component(spinnerd, span, null);
        current = true;
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(spinnerd.$$.fragment, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(spinnerd.$$.fragment, local2);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(span);
        destroy_component(spinnerd);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_loader_slot.name,
      type: "slot",
      source: "(127:4) ",
      ctx
    });
    return block;
  }
  function create_arrow_left_slot(ctx) {
    let span;
    let svg;
    let current;
    svg = new Svg_default({
      props: { name: "slidy-chevron-left" },
      $$inline: true
    });
    const block = {
      c: function create() {
        span = element("span");
        create_component(svg.$$.fragment);
        attr_dev(span, "class", "internal-controls svelte-1nidue");
        attr_dev(span, "slot", "arrow-left");
        add_location(span, file11, 148, 4, 4156);
      },
      m: function mount(target, anchor) {
        insert_dev(target, span, anchor);
        mount_component(svg, span, null);
        current = true;
      },
      p: noop,
      i: function intro(local2) {
        if (current)
          return;
        transition_in(svg.$$.fragment, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(svg.$$.fragment, local2);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(span);
        destroy_component(svg);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_arrow_left_slot.name,
      type: "slot",
      source: "(149:4) ",
      ctx
    });
    return block;
  }
  function create_arrow_right_slot(ctx) {
    let span;
    let svg;
    let current;
    svg = new Svg_default({
      props: { name: "slidy-chevron-right" },
      $$inline: true
    });
    const block = {
      c: function create() {
        span = element("span");
        create_component(svg.$$.fragment);
        attr_dev(span, "class", "internal-controls svelte-1nidue");
        attr_dev(span, "slot", "arrow-right");
        add_location(span, file11, 151, 4, 4267);
      },
      m: function mount(target, anchor) {
        insert_dev(target, span, anchor);
        mount_component(svg, span, null);
        current = true;
      },
      p: noop,
      i: function intro(local2) {
        if (current)
          return;
        transition_in(svg.$$.fragment, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(svg.$$.fragment, local2);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(span);
        destroy_component(svg);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_arrow_right_slot.name,
      type: "slot",
      source: "(152:4) ",
      ctx
    });
    return block;
  }
  function create_dots_arrow_left_slot(ctx) {
    let span;
    let svg;
    let current;
    svg = new Svg_default({
      props: { name: "slidy-arrow-left" },
      $$inline: true
    });
    const block = {
      c: function create() {
        span = element("span");
        create_component(svg.$$.fragment);
        attr_dev(span, "class", "internal-controls svelte-1nidue");
        attr_dev(span, "slot", "dots-arrow-left");
        add_location(span, file11, 154, 4, 4380);
      },
      m: function mount(target, anchor) {
        insert_dev(target, span, anchor);
        mount_component(svg, span, null);
        current = true;
      },
      p: noop,
      i: function intro(local2) {
        if (current)
          return;
        transition_in(svg.$$.fragment, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(svg.$$.fragment, local2);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(span);
        destroy_component(svg);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_dots_arrow_left_slot.name,
      type: "slot",
      source: "(155:4) ",
      ctx
    });
    return block;
  }
  function create_dots_arrow_right_slot(ctx) {
    let span;
    let svg;
    let current;
    svg = new Svg_default({
      props: { name: "slidy-arrow-right" },
      $$inline: true
    });
    const block = {
      c: function create() {
        span = element("span");
        create_component(svg.$$.fragment);
        attr_dev(span, "class", "internal-controls svelte-1nidue");
        attr_dev(span, "slot", "dots-arrow-right");
        add_location(span, file11, 157, 4, 4494);
      },
      m: function mount(target, anchor) {
        insert_dev(target, span, anchor);
        mount_component(svg, span, null);
        current = true;
      },
      p: noop,
      i: function intro(local2) {
        if (current)
          return;
        transition_in(svg.$$.fragment, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(svg.$$.fragment, local2);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(span);
        destroy_component(svg);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_dots_arrow_right_slot.name,
      type: "slot",
      source: "(158:4) ",
      ctx
    });
    return block;
  }
  function create_if_block_53(ctx) {
    let navthumbs;
    let current;
    navthumbs = new NavThumbs_default({ $$inline: true });
    const block = {
      c: function create() {
        create_component(navthumbs.$$.fragment);
      },
      m: function mount(target, anchor) {
        mount_component(navthumbs, target, anchor);
        current = true;
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(navthumbs.$$.fragment, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(navthumbs.$$.fragment, local2);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(navthumbs, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_53.name,
      type: "if",
      source: "(165:0) {#if slidyinit}",
      ctx
    });
    return block;
  }
  function create_if_block_43(ctx) {
    let controls;
    let current;
    controls = new Controls_default({ $$inline: true });
    const block = {
      c: function create() {
        create_component(controls.$$.fragment);
      },
      m: function mount(target, anchor) {
        mount_component(controls, target, anchor);
        current = true;
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(controls.$$.fragment, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(controls.$$.fragment, local2);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(controls, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_43.name,
      type: "if",
      source: "(169:0) {#if $con.open}",
      ctx
    });
    return block;
  }
  function create_else_block_12(ctx) {
    let svg;
    let current;
    svg = new Svg_default({
      props: {
        name: "slidy-play",
        transform: "translate(3px, 0)"
      },
      $$inline: true
    });
    const block = {
      c: function create() {
        create_component(svg.$$.fragment);
      },
      m: function mount(target, anchor) {
        mount_component(svg, target, anchor);
        current = true;
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(svg.$$.fragment, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(svg.$$.fragment, local2);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(svg, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_else_block_12.name,
      type: "else",
      source: "(181:4) {:else}",
      ctx
    });
    return block;
  }
  function create_if_block_33(ctx) {
    let svg;
    let current;
    svg = new Svg_default({
      props: { name: "slidy-x" },
      $$inline: true
    });
    const block = {
      c: function create() {
        create_component(svg.$$.fragment);
      },
      m: function mount(target, anchor) {
        mount_component(svg, target, anchor);
        current = true;
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(svg.$$.fragment, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(svg.$$.fragment, local2);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(svg, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_33.name,
      type: "if",
      source: "(179:4) {#if $con.open}",
      ctx
    });
    return block;
  }
  function create_default_slot_1(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block_33, create_else_block_12];
    const if_blocks = [];
    function select_block_type_2(ctx2, dirty) {
      if (ctx2[11].open)
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type_2(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    const block = {
      c: function create() {
        if_block.c();
        if_block_anchor = empty();
      },
      m: function mount(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;
      },
      p: function update2(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_2(ctx2, dirty);
        if (current_block_type_index !== previous_block_index) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local2) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_default_slot_1.name,
      type: "slot",
      source: '(173:0) <Button     id=\\"controls\\"     style={\\"left: 20px;\\"}     open={$con.open}     on:click={controlsClick} >',
      ctx
    });
    return block;
  }
  function create_if_block_23(ctx) {
    let settings_1;
    let current;
    settings_1 = new Settings_default({ $$inline: true });
    const block = {
      c: function create() {
        create_component(settings_1.$$.fragment);
      },
      m: function mount(target, anchor) {
        mount_component(settings_1, target, anchor);
        current = true;
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(settings_1.$$.fragment, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(settings_1.$$.fragment, local2);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(settings_1, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_23.name,
      type: "if",
      source: "(186:0) {#if $set.open}",
      ctx
    });
    return block;
  }
  function create_else_block4(ctx) {
    let svg;
    let current;
    svg = new Svg_default({
      props: { name: "slidy-sliders" },
      $$inline: true
    });
    const block = {
      c: function create() {
        create_component(svg.$$.fragment);
      },
      m: function mount(target, anchor) {
        mount_component(svg, target, anchor);
        current = true;
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(svg.$$.fragment, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(svg.$$.fragment, local2);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(svg, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_else_block4.name,
      type: "else",
      source: "(201:4) {:else}",
      ctx
    });
    return block;
  }
  function create_if_block_111(ctx) {
    let svg;
    let current;
    svg = new Svg_default({
      props: { name: "slidy-x" },
      $$inline: true
    });
    const block = {
      c: function create() {
        create_component(svg.$$.fragment);
      },
      m: function mount(target, anchor) {
        mount_component(svg, target, anchor);
        current = true;
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(svg.$$.fragment, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(svg.$$.fragment, local2);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(svg, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block_111.name,
      type: "if",
      source: "(199:24) ",
      ctx
    });
    return block;
  }
  function create_if_block4(ctx) {
    let svg;
    let current;
    svg = new Svg_default({
      props: { name: "slidy-check" },
      $$inline: true
    });
    const block = {
      c: function create() {
        create_component(svg.$$.fragment);
      },
      m: function mount(target, anchor) {
        mount_component(svg, target, anchor);
        current = true;
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(svg.$$.fragment, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(svg.$$.fragment, local2);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(svg, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_if_block4.name,
      type: "if",
      source: "(197:4) {#if $set.input}",
      ctx
    });
    return block;
  }
  function create_default_slot(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block4, create_if_block_111, create_else_block4];
    const if_blocks = [];
    function select_block_type_3(ctx2, dirty) {
      if (ctx2[10].input)
        return 0;
      if (ctx2[10].open)
        return 1;
      return 2;
    }
    current_block_type_index = select_block_type_3(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    const block = {
      c: function create() {
        if_block.c();
        if_block_anchor = empty();
      },
      m: function mount(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert_dev(target, if_block_anchor, anchor);
        current = true;
      },
      p: function update2(ctx2, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type_3(ctx2, dirty);
        if (current_block_type_index !== previous_block_index) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o: function outro(local2) {
        transition_out(if_block);
        current = false;
      },
      d: function destroy(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach_dev(if_block_anchor);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_default_slot.name,
      type: "slot",
      source: '(190:0) <Button     id=\\"settings\\"     style={\\"right: 20px;\\"}     open={$set.open}     check={$set.input}     on:click={settingsClick} >',
      ctx
    });
    return block;
  }
  function create_fragment11(ctx) {
    let h1;
    let t0;
    let strong;
    let t1;
    let sup;
    let t3;
    let t4;
    let t5;
    let navtop;
    let updating_limit;
    let updating_page;
    let t6;
    let slidy;
    let updating_slidyinit;
    let updating_index;
    let updating_intersect;
    let t7;
    let navbottom;
    let t8;
    let t9;
    let t10;
    let button0;
    let t11;
    let t12;
    let button1;
    let t13;
    let a;
    let current;
    let mounted;
    let dispose;
    add_render_callback(ctx[18]);
    function navtop_limit_binding(value) {
      ctx[19](value);
    }
    function navtop_page_binding(value) {
      ctx[20](value);
    }
    let navtop_props = {};
    if (ctx[0] !== void 0) {
      navtop_props.limit = ctx[0];
    }
    if (ctx[1] !== void 0) {
      navtop_props.page = ctx[1];
    }
    navtop = new NavTop_default({ props: navtop_props, $$inline: true });
    binding_callbacks.push(() => bind(navtop, "limit", navtop_limit_binding));
    binding_callbacks.push(() => bind(navtop, "page", navtop_page_binding));
    const slidy_spread_levels = [{ timeout: "500" }, ctx[9], { slides: ctx[8] }];
    function slidy_slidyinit_binding(value) {
      ctx[22](value);
    }
    function slidy_index_binding(value) {
      ctx[23](value);
    }
    function slidy_intersect_binding(value) {
      ctx[24](value);
    }
    let slidy_props = {
      $$slots: {
        "dots-arrow-right": [
          create_dots_arrow_right_slot,
          ({ item }) => ({ 26: item }),
          ({ item }) => item ? 67108864 : 0
        ],
        "dots-arrow-left": [
          create_dots_arrow_left_slot,
          ({ item }) => ({ 26: item }),
          ({ item }) => item ? 67108864 : 0
        ],
        "arrow-right": [
          create_arrow_right_slot,
          ({ item }) => ({ 26: item }),
          ({ item }) => item ? 67108864 : 0
        ],
        "arrow-left": [
          create_arrow_left_slot,
          ({ item }) => ({ 26: item }),
          ({ item }) => item ? 67108864 : 0
        ],
        loader: [
          create_loader_slot,
          ({ item }) => ({ 26: item }),
          ({ item }) => item ? 67108864 : 0
        ],
        default: [
          create_default_slot_2,
          ({ item }) => ({ 26: item }),
          ({ item }) => item ? 67108864 : 0
        ]
      },
      $$scope: { ctx }
    };
    for (let i = 0; i < slidy_spread_levels.length; i += 1) {
      slidy_props = assign(slidy_props, slidy_spread_levels[i]);
    }
    if (ctx[2] !== void 0) {
      slidy_props.slidyinit = ctx[2];
    }
    if (ctx[7] !== void 0) {
      slidy_props.index = ctx[7];
    }
    if (ctx[3] !== void 0) {
      slidy_props.intersect = ctx[3];
    }
    slidy = new Slidy_default2({ props: slidy_props, $$inline: true });
    binding_callbacks.push(() => bind(slidy, "slidyinit", slidy_slidyinit_binding));
    binding_callbacks.push(() => bind(slidy, "index", slidy_index_binding));
    binding_callbacks.push(() => bind(slidy, "intersect", slidy_intersect_binding));
    navbottom = new NavBottom_default({ $$inline: true });
    let if_block0 = ctx[2] && create_if_block_53(ctx);
    let if_block1 = ctx[11].open && create_if_block_43(ctx);
    button0 = new Button_default({
      props: {
        id: "controls",
        style: "left: 20px;",
        open: ctx[11].open,
        $$slots: { default: [create_default_slot_1] },
        $$scope: { ctx }
      },
      $$inline: true
    });
    button0.$on("click", ctx[15]);
    let if_block2 = ctx[10].open && create_if_block_23(ctx);
    button1 = new Button_default({
      props: {
        id: "settings",
        style: "right: 20px;",
        open: ctx[10].open,
        check: ctx[10].input,
        $$slots: { default: [create_default_slot] },
        $$scope: { ctx }
      },
      $$inline: true
    });
    button1.$on("click", ctx[14]);
    const block = {
      c: function create() {
        h1 = element("h1");
        t0 = text("Let`s ");
        strong = element("strong");
        t1 = text("Slidy ");
        sup = element("sup");
        sup.textContent = `${package_default.version.replace(/\.[^.]*$/, "")}`;
        t3 = text("\n    GO! ");
        t4 = text(ctx[7]);
        t5 = space();
        create_component(navtop.$$.fragment);
        t6 = space();
        create_component(slidy.$$.fragment);
        t7 = space();
        create_component(navbottom.$$.fragment);
        t8 = space();
        if (if_block0)
          if_block0.c();
        t9 = space();
        if (if_block1)
          if_block1.c();
        t10 = space();
        create_component(button0.$$.fragment);
        t11 = space();
        if (if_block2)
          if_block2.c();
        t12 = space();
        create_component(button1.$$.fragment);
        t13 = space();
        a = element("a");
        a.textContent = "\xA0";
        attr_dev(sup, "class", "svelte-1nidue");
        add_location(sup, file11, 110, 14, 3300);
        attr_dev(strong, "class", "svelte-1nidue");
        add_location(strong, file11, 109, 10, 3277);
        attr_dev(h1, "class", "svelte-1nidue");
        add_location(h1, file11, 108, 0, 3262);
        attr_dev(a, "id", "github");
        attr_dev(a, "alt", "https://github.com/Valexr/svelte-slidy");
        attr_dev(a, "target", "_blank");
        attr_dev(a, "href", "https://github.com/Valexr/svelte-slidy");
        attr_dev(a, "class", "svelte-1nidue");
        add_location(a, file11, 205, 0, 5324);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, h1, anchor);
        append_dev(h1, t0);
        append_dev(h1, strong);
        append_dev(strong, t1);
        append_dev(strong, sup);
        append_dev(h1, t3);
        append_dev(h1, t4);
        insert_dev(target, t5, anchor);
        mount_component(navtop, target, anchor);
        insert_dev(target, t6, anchor);
        mount_component(slidy, target, anchor);
        insert_dev(target, t7, anchor);
        mount_component(navbottom, target, anchor);
        insert_dev(target, t8, anchor);
        if (if_block0)
          if_block0.m(target, anchor);
        insert_dev(target, t9, anchor);
        if (if_block1)
          if_block1.m(target, anchor);
        insert_dev(target, t10, anchor);
        mount_component(button0, target, anchor);
        insert_dev(target, t11, anchor);
        if (if_block2)
          if_block2.m(target, anchor);
        insert_dev(target, t12, anchor);
        mount_component(button1, target, anchor);
        insert_dev(target, t13, anchor);
        insert_dev(target, a, anchor);
        current = true;
        if (!mounted) {
          dispose = listen_dev(window, "resize", ctx[18]);
          mounted = true;
        }
      },
      p: function update2(ctx2, [dirty]) {
        if (!current || dirty & 128)
          set_data_dev(t4, ctx2[7]);
        const navtop_changes = {};
        if (!updating_limit && dirty & 1) {
          updating_limit = true;
          navtop_changes.limit = ctx2[0];
          add_flush_callback(() => updating_limit = false);
        }
        if (!updating_page && dirty & 2) {
          updating_page = true;
          navtop_changes.page = ctx2[1];
          add_flush_callback(() => updating_page = false);
        }
        navtop.$set(navtop_changes);
        const slidy_changes = dirty & 768 ? get_spread_update(slidy_spread_levels, [
          slidy_spread_levels[0],
          dirty & 512 && get_spread_object(ctx2[9]),
          dirty & 256 && { slides: ctx2[8] }
        ]) : {};
        if (dirty & 201327168) {
          slidy_changes.$$scope = { dirty, ctx: ctx2 };
        }
        if (!updating_slidyinit && dirty & 4) {
          updating_slidyinit = true;
          slidy_changes.slidyinit = ctx2[2];
          add_flush_callback(() => updating_slidyinit = false);
        }
        if (!updating_index && dirty & 128) {
          updating_index = true;
          slidy_changes.index = ctx2[7];
          add_flush_callback(() => updating_index = false);
        }
        if (!updating_intersect && dirty & 8) {
          updating_intersect = true;
          slidy_changes.intersect = ctx2[3];
          add_flush_callback(() => updating_intersect = false);
        }
        slidy.$set(slidy_changes);
        if (ctx2[2]) {
          if (if_block0) {
            if (dirty & 4) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_53(ctx2);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(t9.parentNode, t9);
          }
        } else if (if_block0) {
          group_outros();
          transition_out(if_block0, 1, 1, () => {
            if_block0 = null;
          });
          check_outros();
        }
        if (ctx2[11].open) {
          if (if_block1) {
            if (dirty & 2048) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block_43(ctx2);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(t10.parentNode, t10);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
        const button0_changes = {};
        if (dirty & 2048)
          button0_changes.open = ctx2[11].open;
        if (dirty & 134219776) {
          button0_changes.$$scope = { dirty, ctx: ctx2 };
        }
        button0.$set(button0_changes);
        if (ctx2[10].open) {
          if (if_block2) {
            if (dirty & 1024) {
              transition_in(if_block2, 1);
            }
          } else {
            if_block2 = create_if_block_23(ctx2);
            if_block2.c();
            transition_in(if_block2, 1);
            if_block2.m(t12.parentNode, t12);
          }
        } else if (if_block2) {
          group_outros();
          transition_out(if_block2, 1, 1, () => {
            if_block2 = null;
          });
          check_outros();
        }
        const button1_changes = {};
        if (dirty & 1024)
          button1_changes.open = ctx2[10].open;
        if (dirty & 1024)
          button1_changes.check = ctx2[10].input;
        if (dirty & 134218752) {
          button1_changes.$$scope = { dirty, ctx: ctx2 };
        }
        button1.$set(button1_changes);
      },
      i: function intro(local2) {
        if (current)
          return;
        transition_in(navtop.$$.fragment, local2);
        transition_in(slidy.$$.fragment, local2);
        transition_in(navbottom.$$.fragment, local2);
        transition_in(if_block0);
        transition_in(if_block1);
        transition_in(button0.$$.fragment, local2);
        transition_in(if_block2);
        transition_in(button1.$$.fragment, local2);
        current = true;
      },
      o: function outro(local2) {
        transition_out(navtop.$$.fragment, local2);
        transition_out(slidy.$$.fragment, local2);
        transition_out(navbottom.$$.fragment, local2);
        transition_out(if_block0);
        transition_out(if_block1);
        transition_out(button0.$$.fragment, local2);
        transition_out(if_block2);
        transition_out(button1.$$.fragment, local2);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching)
          detach_dev(h1);
        if (detaching)
          detach_dev(t5);
        destroy_component(navtop, detaching);
        if (detaching)
          detach_dev(t6);
        destroy_component(slidy, detaching);
        if (detaching)
          detach_dev(t7);
        destroy_component(navbottom, detaching);
        if (detaching)
          detach_dev(t8);
        if (if_block0)
          if_block0.d(detaching);
        if (detaching)
          detach_dev(t9);
        if (if_block1)
          if_block1.d(detaching);
        if (detaching)
          detach_dev(t10);
        destroy_component(button0, detaching);
        if (detaching)
          detach_dev(t11);
        if (if_block2)
          if_block2.d(detaching);
        if (detaching)
          detach_dev(t12);
        destroy_component(button1, detaching);
        if (detaching)
          detach_dev(t13);
        if (detaching)
          detach_dev(a);
        mounted = false;
        dispose();
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block,
      id: create_fragment11.name,
      type: "component",
      source: "",
      ctx
    });
    return block;
  }
  function instance11($$self, $$props, $$invalidate) {
    let $index;
    let $slides;
    let $settings;
    let $set;
    let $con;
    validate_store(index, "index");
    component_subscribe($$self, index, ($$value) => $$invalidate(7, $index = $$value));
    validate_store(slides, "slides");
    component_subscribe($$self, slides, ($$value) => $$invalidate(8, $slides = $$value));
    validate_store(settings, "settings");
    component_subscribe($$self, settings, ($$value) => $$invalidate(9, $settings = $$value));
    validate_store(set, "set");
    component_subscribe($$self, set, ($$value) => $$invalidate(10, $set = $$value));
    validate_store(con, "con");
    component_subscribe($$self, con, ($$value) => $$invalidate(11, $con = $$value));
    let { $$slots: slots = {}, $$scope } = $$props;
    validate_slots("App", slots, []);
    let items = [], limit = 9, page = randomQ(0, 96), slidyinit = false, ww = 0, wh = 0;
    async function loadSlides(limit2, page2) {
      $$invalidate(2, slidyinit = false);
      $$invalidate(6, loaded = $$invalidate(17, intersected = $$invalidate(3, intersect.entries = [], intersect)));
      $$invalidate(16, items = await getPhotos(limit2, page2, ww, wh));
    }
    let intersected = [], loaded = [], intersect = {
      init: false,
      options: {
        root: null,
        rootMargin: "0px",
        threshold: 1
      },
      entries: [],
      observer: null,
      index: null
    };
    function onLoad(id) {
      $$invalidate(6, loaded = [...loaded, id]);
    }
    function imgSrc(item) {
      if ($settings.options.intersecting && intersected.length > 0)
        return intersected.includes(item.ix) ? item[$settings.slide.imgsrckey] : null;
      else
        return item[$settings.slide.imgsrckey];
    }
    function settingsClick() {
      $set.input ? (set_store_value(set, $set.check = true, $set), set_store_value(set, $set.input = false, $set)) : (set_store_value(set, $set.open = !$set.open, $set), set_store_value(con, $con.open = false, $con));
    }
    function controlsClick() {
      set_store_value(con, $con.open = !$con.open, $con);
      set_store_value(set, $set.open = false, $set);
    }
    const writable_props = [];
    Object.keys($$props).forEach((key) => {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$")
        console_1.warn(`<App> was created with unknown prop '${key}'`);
    });
    function onwindowresize() {
      $$invalidate(4, ww = window.innerWidth);
      $$invalidate(5, wh = window.innerHeight);
    }
    function navtop_limit_binding(value) {
      limit = value;
      $$invalidate(0, limit);
    }
    function navtop_page_binding(value) {
      page = value;
      $$invalidate(1, page);
    }
    const load_handler = (item) => onLoad(item.ix);
    function slidy_slidyinit_binding(value) {
      slidyinit = value;
      $$invalidate(2, slidyinit);
    }
    function slidy_index_binding(value) {
      $index = value;
      index.set($index);
    }
    function slidy_intersect_binding(value) {
      intersect = value;
      $$invalidate(3, intersect);
    }
    $$self.$capture_state = () => ({
      onMount,
      afterUpdate,
      beforeUpdate,
      tick,
      fly,
      fade,
      scale,
      crossfade,
      slide,
      pkg: package_default,
      settings,
      set,
      con,
      index,
      slides,
      local,
      getPhotos,
      randomQ,
      Settings: Settings_default,
      Controls: Controls_default,
      NavTop: NavTop_default,
      NavBottom: NavBottom_default,
      NavThumbs: NavThumbs_default,
      Button: Button_default,
      Svg: Svg_default,
      Spinner: Spinner_default,
      SpinnerD: SpinnerD_default,
      Slidy: Slidy_default2,
      items,
      limit,
      page,
      slidyinit,
      ww,
      wh,
      loadSlides,
      intersected,
      loaded,
      intersect,
      onLoad,
      imgSrc,
      settingsClick,
      controlsClick,
      $index,
      $slides,
      $settings,
      $set,
      $con
    });
    $$self.$inject_state = ($$props2) => {
      if ("items" in $$props2)
        $$invalidate(16, items = $$props2.items);
      if ("limit" in $$props2)
        $$invalidate(0, limit = $$props2.limit);
      if ("page" in $$props2)
        $$invalidate(1, page = $$props2.page);
      if ("slidyinit" in $$props2)
        $$invalidate(2, slidyinit = $$props2.slidyinit);
      if ("ww" in $$props2)
        $$invalidate(4, ww = $$props2.ww);
      if ("wh" in $$props2)
        $$invalidate(5, wh = $$props2.wh);
      if ("intersected" in $$props2)
        $$invalidate(17, intersected = $$props2.intersected);
      if ("loaded" in $$props2)
        $$invalidate(6, loaded = $$props2.loaded);
      if ("intersect" in $$props2)
        $$invalidate(3, intersect = $$props2.intersect);
    };
    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 4) {
        $:
          slidyinit && set_store_value(index, $index = 1, $index);
      }
      if ($$self.$$.dirty & 4) {
        $:
          console.log(slidyinit);
      }
      if ($$self.$$.dirty & 65536) {
        $:
          items.length, set_store_value(slides, $slides = items, $slides);
      }
      if ($$self.$$.dirty & 3) {
        $:
          loadSlides(limit, page);
      }
      if ($$self.$$.dirty & 131080) {
        $:
          if (intersect.entries)
            for (const entry of intersect.entries) {
              if (entry.isIntersecting) {
                $$invalidate(17, intersected = [...new Set([...intersected, intersect.index])]);
                intersect.observer.unobserve(entry.target);
              } else {
              }
            }
      }
    };
    return [
      limit,
      page,
      slidyinit,
      intersect,
      ww,
      wh,
      loaded,
      $index,
      $slides,
      $settings,
      $set,
      $con,
      onLoad,
      imgSrc,
      settingsClick,
      controlsClick,
      items,
      intersected,
      onwindowresize,
      navtop_limit_binding,
      navtop_page_binding,
      load_handler,
      slidy_slidyinit_binding,
      slidy_index_binding,
      slidy_intersect_binding
    ];
  }
  var App = class extends SvelteComponentDev {
    constructor(options) {
      super(options);
      init(this, options, instance11, create_fragment11, safe_not_equal, {});
      dispatch_dev("SvelteRegisterComponent", {
        component: this,
        tagName: "App",
        options,
        id: create_fragment11.name
      });
    }
  };
  var App_default = App;
  require_12();

  // www/src/main.js
  var app = new App_default({
    target: document.body
  });
  var main_default = app;
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUAzLjM4LjIvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9pbnRlcm5hbC9pbmRleC5tanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUAzLjM4LjIvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9lYXNpbmcvaW5kZXgubWpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdmVsdGVAMy4zOC4yL25vZGVfbW9kdWxlcy9zdmVsdGUvdHJhbnNpdGlvbi9pbmRleC5tanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N2ZWx0ZUAzLjM4LjIvbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zdG9yZS9pbmRleC5tanMiLCAiLi4vLi4vc3JjL3V0aWxzL3NldHRpbmdzLmpzIiwgIi4uLy4uL3NyYy9hcGkvaXRlbXMuanMiLCAiLi4vLi4vc3JjL3V0aWxzL3V0aWxzLmpzIiwgIi4uLy4uL3NyYy9hcGkvYXBpLmpzIiwgIi4uLy4uL3NyYy9jbXAvd3d3L3NyYy9jbXAvQnV0dG9uLnN2ZWx0ZSIsICIuLi8uLi9zcmMvYWN0L2NsaWNrb3V0LmpzIiwgIi4uLy4uL3NyYy9jbXAvd3d3L3NyYy9jbXAvQ29udHJvbHMuc3ZlbHRlIiwgIi4uLy4uL3NyYy9jbXAvd3d3L3NyYy9jbXAvTmF2Qm90dG9tLnN2ZWx0ZSIsICIuLi8uLi9zcmMvY21wL3d3dy9zcmMvY21wL05hdlRodW1icy5zdmVsdGUiLCAiLi4vLi4vc3JjL2NtcC93d3cvc3JjL2NtcC9OYXZUb3Auc3ZlbHRlIiwgIi4uLy4uL3NyYy9jbXAvd3d3L3NyYy9jbXAvU2V0dGluZ3Muc3ZlbHRlIiwgIi4uLy4uL3NyYy9jbXAvd3d3L3NyYy9jbXAvU3Bpbm5lci5zdmVsdGUiLCAiLi4vLi4vc3JjL2NtcC93d3cvc3JjL2NtcC9TcGlubmVyRC5zdmVsdGUiLCAiLi4vLi4vc3JjL2NtcC93d3cvc3JjL2NtcC9Tdmcuc3ZlbHRlIiwgIi4uLy4uLy4uL3NyYy9hY3Rpb25zLmpzIiwgIi4uLy4uLy4uL3NyYy9zcmMvU2xpZHkuc3ZlbHRlIiwgIi4uLy4uL3NyYy93d3cvc3JjL0FwcC5zdmVsdGUiLCAiLi4vLi4vc3JjL21haW4uanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImZ1bmN0aW9uIG5vb3AoKSB7IH1cbmNvbnN0IGlkZW50aXR5ID0geCA9PiB4O1xuZnVuY3Rpb24gYXNzaWduKHRhciwgc3JjKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGZvciAoY29uc3QgayBpbiBzcmMpXG4gICAgICAgIHRhcltrXSA9IHNyY1trXTtcbiAgICByZXR1cm4gdGFyO1xufVxuZnVuY3Rpb24gaXNfcHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gYWRkX2xvY2F0aW9uKGVsZW1lbnQsIGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhcikge1xuICAgIGVsZW1lbnQuX19zdmVsdGVfbWV0YSA9IHtcbiAgICAgICAgbG9jOiB7IGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhciB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJ1bihmbikge1xuICAgIHJldHVybiBmbigpO1xufVxuZnVuY3Rpb24gYmxhbmtfb2JqZWN0KCkge1xuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpO1xufVxuZnVuY3Rpb24gcnVuX2FsbChmbnMpIHtcbiAgICBmbnMuZm9yRWFjaChydW4pO1xufVxuZnVuY3Rpb24gaXNfZnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gc2FmZV9ub3RfZXF1YWwoYSwgYikge1xuICAgIHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiIHx8ICgoYSAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHx8IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nKTtcbn1cbmZ1bmN0aW9uIG5vdF9lcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGI7XG59XG5mdW5jdGlvbiBpc19lbXB0eShvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDA7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9zdG9yZShzdG9yZSwgbmFtZSkge1xuICAgIGlmIChzdG9yZSAhPSBudWxsICYmIHR5cGVvZiBzdG9yZS5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAnJHtuYW1lfScgaXMgbm90IGEgc3RvcmUgd2l0aCBhICdzdWJzY3JpYmUnIG1ldGhvZGApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN1YnNjcmliZShzdG9yZSwgLi4uY2FsbGJhY2tzKSB7XG4gICAgaWYgKHN0b3JlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgfVxuICAgIGNvbnN0IHVuc3ViID0gc3RvcmUuc3Vic2NyaWJlKC4uLmNhbGxiYWNrcyk7XG4gICAgcmV0dXJuIHVuc3ViLnVuc3Vic2NyaWJlID8gKCkgPT4gdW5zdWIudW5zdWJzY3JpYmUoKSA6IHVuc3ViO1xufVxuZnVuY3Rpb24gZ2V0X3N0b3JlX3ZhbHVlKHN0b3JlKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHN1YnNjcmliZShzdG9yZSwgXyA9PiB2YWx1ZSA9IF8pKCk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gY29tcG9uZW50X3N1YnNjcmliZShjb21wb25lbnQsIHN0b3JlLCBjYWxsYmFjaykge1xuICAgIGNvbXBvbmVudC4kJC5vbl9kZXN0cm95LnB1c2goc3Vic2NyaWJlKHN0b3JlLCBjYWxsYmFjaykpO1xufVxuZnVuY3Rpb24gY3JlYXRlX3Nsb3QoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbikge1xuICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICAgIGNvbnN0IHNsb3RfY3R4ID0gZ2V0X3Nsb3RfY29udGV4dChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKTtcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb25bMF0oc2xvdF9jdHgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldF9zbG90X2NvbnRleHQoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbikge1xuICAgIHJldHVybiBkZWZpbml0aW9uWzFdICYmIGZuXG4gICAgICAgID8gYXNzaWduKCQkc2NvcGUuY3R4LnNsaWNlKCksIGRlZmluaXRpb25bMV0oZm4oY3R4KSkpXG4gICAgICAgIDogJCRzY29wZS5jdHg7XG59XG5mdW5jdGlvbiBnZXRfc2xvdF9jaGFuZ2VzKGRlZmluaXRpb24sICQkc2NvcGUsIGRpcnR5LCBmbikge1xuICAgIGlmIChkZWZpbml0aW9uWzJdICYmIGZuKSB7XG4gICAgICAgIGNvbnN0IGxldHMgPSBkZWZpbml0aW9uWzJdKGZuKGRpcnR5KSk7XG4gICAgICAgIGlmICgkJHNjb3BlLmRpcnR5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBsZXRzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbGV0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IFtdO1xuICAgICAgICAgICAgY29uc3QgbGVuID0gTWF0aC5tYXgoJCRzY29wZS5kaXJ0eS5sZW5ndGgsIGxldHMubGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRbaV0gPSAkJHNjb3BlLmRpcnR5W2ldIHwgbGV0c1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICQkc2NvcGUuZGlydHkgfCBsZXRzO1xuICAgIH1cbiAgICByZXR1cm4gJCRzY29wZS5kaXJ0eTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZV9zbG90KHNsb3QsIHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBkaXJ0eSwgZ2V0X3Nsb3RfY2hhbmdlc19mbiwgZ2V0X3Nsb3RfY29udGV4dF9mbikge1xuICAgIGNvbnN0IHNsb3RfY2hhbmdlcyA9IGdldF9zbG90X2NoYW5nZXMoc2xvdF9kZWZpbml0aW9uLCAkJHNjb3BlLCBkaXJ0eSwgZ2V0X3Nsb3RfY2hhbmdlc19mbik7XG4gICAgaWYgKHNsb3RfY2hhbmdlcykge1xuICAgICAgICBjb25zdCBzbG90X2NvbnRleHQgPSBnZXRfc2xvdF9jb250ZXh0KHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBnZXRfc2xvdF9jb250ZXh0X2ZuKTtcbiAgICAgICAgc2xvdC5wKHNsb3RfY29udGV4dCwgc2xvdF9jaGFuZ2VzKTtcbiAgICB9XG59XG5mdW5jdGlvbiB1cGRhdGVfc2xvdF9zcHJlYWQoc2xvdCwgc2xvdF9kZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGRpcnR5LCBnZXRfc2xvdF9jaGFuZ2VzX2ZuLCBnZXRfc2xvdF9zcHJlYWRfY2hhbmdlc19mbiwgZ2V0X3Nsb3RfY29udGV4dF9mbikge1xuICAgIGNvbnN0IHNsb3RfY2hhbmdlcyA9IGdldF9zbG90X3NwcmVhZF9jaGFuZ2VzX2ZuKGRpcnR5KSB8IGdldF9zbG90X2NoYW5nZXMoc2xvdF9kZWZpbml0aW9uLCAkJHNjb3BlLCBkaXJ0eSwgZ2V0X3Nsb3RfY2hhbmdlc19mbik7XG4gICAgaWYgKHNsb3RfY2hhbmdlcykge1xuICAgICAgICBjb25zdCBzbG90X2NvbnRleHQgPSBnZXRfc2xvdF9jb250ZXh0KHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBnZXRfc2xvdF9jb250ZXh0X2ZuKTtcbiAgICAgICAgc2xvdC5wKHNsb3RfY29udGV4dCwgc2xvdF9jaGFuZ2VzKTtcbiAgICB9XG59XG5mdW5jdGlvbiBleGNsdWRlX2ludGVybmFsX3Byb3BzKHByb3BzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBrIGluIHByb3BzKVxuICAgICAgICBpZiAoa1swXSAhPT0gJyQnKVxuICAgICAgICAgICAgcmVzdWx0W2tdID0gcHJvcHNba107XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVfcmVzdF9wcm9wcyhwcm9wcywga2V5cykge1xuICAgIGNvbnN0IHJlc3QgPSB7fTtcbiAgICBrZXlzID0gbmV3IFNldChrZXlzKTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gcHJvcHMpXG4gICAgICAgIGlmICgha2V5cy5oYXMoaykgJiYga1swXSAhPT0gJyQnKVxuICAgICAgICAgICAgcmVzdFtrXSA9IHByb3BzW2tdO1xuICAgIHJldHVybiByZXN0O1xufVxuZnVuY3Rpb24gY29tcHV0ZV9zbG90cyhzbG90cykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIHNsb3RzKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgICBsZXQgcmFuID0gZmFsc2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGlmIChyYW4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHJhbiA9IHRydWU7XG4gICAgICAgIGZuLmNhbGwodGhpcywgLi4uYXJncyk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIG51bGxfdG9fZW1wdHkodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG59XG5mdW5jdGlvbiBzZXRfc3RvcmVfdmFsdWUoc3RvcmUsIHJldCwgdmFsdWUgPSByZXQpIHtcbiAgICBzdG9yZS5zZXQodmFsdWUpO1xuICAgIHJldHVybiByZXQ7XG59XG5jb25zdCBoYXNfcHJvcCA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xuZnVuY3Rpb24gYWN0aW9uX2Rlc3Ryb3llcihhY3Rpb25fcmVzdWx0KSB7XG4gICAgcmV0dXJuIGFjdGlvbl9yZXN1bHQgJiYgaXNfZnVuY3Rpb24oYWN0aW9uX3Jlc3VsdC5kZXN0cm95KSA/IGFjdGlvbl9yZXN1bHQuZGVzdHJveSA6IG5vb3A7XG59XG5cbmNvbnN0IGlzX2NsaWVudCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xubGV0IG5vdyA9IGlzX2NsaWVudFxuICAgID8gKCkgPT4gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpXG4gICAgOiAoKSA9PiBEYXRlLm5vdygpO1xubGV0IHJhZiA9IGlzX2NsaWVudCA/IGNiID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShjYikgOiBub29wO1xuLy8gdXNlZCBpbnRlcm5hbGx5IGZvciB0ZXN0aW5nXG5mdW5jdGlvbiBzZXRfbm93KGZuKSB7XG4gICAgbm93ID0gZm47XG59XG5mdW5jdGlvbiBzZXRfcmFmKGZuKSB7XG4gICAgcmFmID0gZm47XG59XG5cbmNvbnN0IHRhc2tzID0gbmV3IFNldCgpO1xuZnVuY3Rpb24gcnVuX3Rhc2tzKG5vdykge1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGlmICghdGFzay5jKG5vdykpIHtcbiAgICAgICAgICAgIHRhc2tzLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgICAgIHRhc2suZigpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRhc2tzLnNpemUgIT09IDApXG4gICAgICAgIHJhZihydW5fdGFza3MpO1xufVxuLyoqXG4gKiBGb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5IVxuICovXG5mdW5jdGlvbiBjbGVhcl9sb29wcygpIHtcbiAgICB0YXNrcy5jbGVhcigpO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHRhc2sgdGhhdCBydW5zIG9uIGVhY2ggcmFmIGZyYW1lXG4gKiB1bnRpbCBpdCByZXR1cm5zIGEgZmFsc3kgdmFsdWUgb3IgaXMgYWJvcnRlZFxuICovXG5mdW5jdGlvbiBsb29wKGNhbGxiYWNrKSB7XG4gICAgbGV0IHRhc2s7XG4gICAgaWYgKHRhc2tzLnNpemUgPT09IDApXG4gICAgICAgIHJhZihydW5fdGFza3MpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb21pc2U6IG5ldyBQcm9taXNlKGZ1bGZpbGwgPT4ge1xuICAgICAgICAgICAgdGFza3MuYWRkKHRhc2sgPSB7IGM6IGNhbGxiYWNrLCBmOiBmdWxmaWxsIH0pO1xuICAgICAgICB9KSxcbiAgICAgICAgYWJvcnQoKSB7XG4gICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBhcHBlbmQodGFyZ2V0LCBub2RlKSB7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xufVxuZnVuY3Rpb24gaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG59XG5mdW5jdGlvbiBkZXRhY2gobm9kZSkge1xuICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3lfZWFjaChpdGVyYXRpb25zLCBkZXRhY2hpbmcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZXJhdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGl0ZXJhdGlvbnNbaV0pXG4gICAgICAgICAgICBpdGVyYXRpb25zW2ldLmQoZGV0YWNoaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBlbGVtZW50KG5hbWUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbn1cbmZ1bmN0aW9uIGVsZW1lbnRfaXMobmFtZSwgaXMpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lLCB7IGlzIH0pO1xufVxuZnVuY3Rpb24gb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllcyhvYmosIGV4Y2x1ZGUpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gb2JqKSB7XG4gICAgICAgIGlmIChoYXNfcHJvcChvYmosIGspXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAmJiBleGNsdWRlLmluZGV4T2YoaykgPT09IC0xKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB0YXJnZXRba10gPSBvYmpba107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIHN2Z19lbGVtZW50KG5hbWUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIG5hbWUpO1xufVxuZnVuY3Rpb24gdGV4dChkYXRhKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpO1xufVxuZnVuY3Rpb24gc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRleHQoJyAnKTtcbn1cbmZ1bmN0aW9uIGVtcHR5KCkge1xuICAgIHJldHVybiB0ZXh0KCcnKTtcbn1cbmZ1bmN0aW9uIGxpc3Rlbihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgcmV0dXJuICgpID0+IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBwcmV2ZW50X2RlZmF1bHQoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBzdG9wX3Byb3BhZ2F0aW9uKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNlbGYoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcylcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBhdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICBlbHNlIGlmIChub2RlLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpICE9PSB2YWx1ZSlcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBzZXRfYXR0cmlidXRlcyhub2RlLCBhdHRyaWJ1dGVzKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobm9kZS5fX3Byb3RvX18pO1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXNba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gJ19fdmFsdWUnKSB7XG4gICAgICAgICAgICBub2RlLnZhbHVlID0gbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlc2NyaXB0b3JzW2tleV0gJiYgZGVzY3JpcHRvcnNba2V5XS5zZXQpIHtcbiAgICAgICAgICAgIG5vZGVba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF0dHIobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X3N2Z19hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGF0dHIobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9jdXN0b21fZWxlbWVudF9kYXRhKG5vZGUsIHByb3AsIHZhbHVlKSB7XG4gICAgaWYgKHByb3AgaW4gbm9kZSkge1xuICAgICAgICBub2RlW3Byb3BdID0gdHlwZW9mIG5vZGVbcHJvcF0gPT09ICdib29sZWFuJyAmJiB2YWx1ZSA9PT0gJycgPyB0cnVlIDogdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhdHRyKG5vZGUsIHByb3AsIHZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiB4bGlua19hdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgYXR0cmlidXRlLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBnZXRfYmluZGluZ19ncm91cF92YWx1ZShncm91cCwgX192YWx1ZSwgY2hlY2tlZCkge1xuICAgIGNvbnN0IHZhbHVlID0gbmV3IFNldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGdyb3VwW2ldLmNoZWNrZWQpXG4gICAgICAgICAgICB2YWx1ZS5hZGQoZ3JvdXBbaV0uX192YWx1ZSk7XG4gICAgfVxuICAgIGlmICghY2hlY2tlZCkge1xuICAgICAgICB2YWx1ZS5kZWxldGUoX192YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBBcnJheS5mcm9tKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHRvX251bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gJycgPyBudWxsIDogK3ZhbHVlO1xufVxuZnVuY3Rpb24gdGltZV9yYW5nZXNfdG9fYXJyYXkocmFuZ2VzKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnJheS5wdXNoKHsgc3RhcnQ6IHJhbmdlcy5zdGFydChpKSwgZW5kOiByYW5nZXMuZW5kKGkpIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG59XG5mdW5jdGlvbiBjaGlsZHJlbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZE5vZGVzKTtcbn1cbmZ1bmN0aW9uIGNsYWltX2VsZW1lbnQobm9kZXMsIG5hbWUsIGF0dHJpYnV0ZXMsIHN2Zykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAobm9kZS5ub2RlTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgbGV0IGogPSAwO1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gW107XG4gICAgICAgICAgICB3aGlsZSAoaiA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBub2RlLmF0dHJpYnV0ZXNbaisrXTtcbiAgICAgICAgICAgICAgICBpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZS5wdXNoKGF0dHJpYnV0ZS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHJlbW92ZS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKHJlbW92ZVtrXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbm9kZXMuc3BsaWNlKGksIDEpWzBdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdmcgPyBzdmdfZWxlbWVudChuYW1lKSA6IGVsZW1lbnQobmFtZSk7XG59XG5mdW5jdGlvbiBjbGFpbV90ZXh0KG5vZGVzLCBkYXRhKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgICBub2RlLmRhdGEgPSAnJyArIGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gbm9kZXMuc3BsaWNlKGksIDEpWzBdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0ZXh0KGRhdGEpO1xufVxuZnVuY3Rpb24gY2xhaW1fc3BhY2Uobm9kZXMpIHtcbiAgICByZXR1cm4gY2xhaW1fdGV4dChub2RlcywgJyAnKTtcbn1cbmZ1bmN0aW9uIHNldF9kYXRhKHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0Lndob2xlVGV4dCAhPT0gZGF0YSlcbiAgICAgICAgdGV4dC5kYXRhID0gZGF0YTtcbn1cbmZ1bmN0aW9uIHNldF9pbnB1dF92YWx1ZShpbnB1dCwgdmFsdWUpIHtcbiAgICBpbnB1dC52YWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuZnVuY3Rpb24gc2V0X2lucHV0X3R5cGUoaW5wdXQsIHR5cGUpIHtcbiAgICB0cnkge1xuICAgICAgICBpbnB1dC50eXBlID0gdHlwZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9zdHlsZShub2RlLCBrZXksIHZhbHVlLCBpbXBvcnRhbnQpIHtcbiAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUsIGltcG9ydGFudCA/ICdpbXBvcnRhbnQnIDogJycpO1xufVxuZnVuY3Rpb24gc2VsZWN0X29wdGlvbihzZWxlY3QsIHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXTtcbiAgICAgICAgaWYgKG9wdGlvbi5fX3ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHNlbGVjdF9vcHRpb25zKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB+dmFsdWUuaW5kZXhPZihvcHRpb24uX192YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2VsZWN0X3ZhbHVlKHNlbGVjdCkge1xuICAgIGNvbnN0IHNlbGVjdGVkX29wdGlvbiA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpIHx8IHNlbGVjdC5vcHRpb25zWzBdO1xuICAgIHJldHVybiBzZWxlY3RlZF9vcHRpb24gJiYgc2VsZWN0ZWRfb3B0aW9uLl9fdmFsdWU7XG59XG5mdW5jdGlvbiBzZWxlY3RfbXVsdGlwbGVfdmFsdWUoc2VsZWN0KSB7XG4gICAgcmV0dXJuIFtdLm1hcC5jYWxsKHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKCc6Y2hlY2tlZCcpLCBvcHRpb24gPT4gb3B0aW9uLl9fdmFsdWUpO1xufVxuLy8gdW5mb3J0dW5hdGVseSB0aGlzIGNhbid0IGJlIGEgY29uc3RhbnQgYXMgdGhhdCB3b3VsZG4ndCBiZSB0cmVlLXNoYWtlYWJsZVxuLy8gc28gd2UgY2FjaGUgdGhlIHJlc3VsdCBpbnN0ZWFkXG5sZXQgY3Jvc3NvcmlnaW47XG5mdW5jdGlvbiBpc19jcm9zc29yaWdpbigpIHtcbiAgICBpZiAoY3Jvc3NvcmlnaW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjcm9zc29yaWdpbiA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB2b2lkIHdpbmRvdy5wYXJlbnQuZG9jdW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjcm9zc29yaWdpbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNyb3Nzb3JpZ2luO1xufVxuZnVuY3Rpb24gYWRkX3Jlc2l6ZV9saXN0ZW5lcihub2RlLCBmbikge1xuICAgIGNvbnN0IGNvbXB1dGVkX3N0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBpZiAoY29tcHV0ZWRfc3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH1cbiAgICBjb25zdCBpZnJhbWUgPSBlbGVtZW50KCdpZnJhbWUnKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7ICcgK1xuICAgICAgICAnb3ZlcmZsb3c6IGhpZGRlbjsgYm9yZGVyOiAwOyBvcGFjaXR5OiAwOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogLTE7Jyk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIGlmcmFtZS50YWJJbmRleCA9IC0xO1xuICAgIGNvbnN0IGNyb3Nzb3JpZ2luID0gaXNfY3Jvc3NvcmlnaW4oKTtcbiAgICBsZXQgdW5zdWJzY3JpYmU7XG4gICAgaWYgKGNyb3Nzb3JpZ2luKSB7XG4gICAgICAgIGlmcmFtZS5zcmMgPSBcImRhdGE6dGV4dC9odG1sLDxzY3JpcHQ+b25yZXNpemU9ZnVuY3Rpb24oKXtwYXJlbnQucG9zdE1lc3NhZ2UoMCwnKicpfTwvc2NyaXB0PlwiO1xuICAgICAgICB1bnN1YnNjcmliZSA9IGxpc3Rlbih3aW5kb3csICdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBpZnJhbWUuY29udGVudFdpbmRvdylcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmcmFtZS5zcmMgPSAnYWJvdXQ6YmxhbmsnO1xuICAgICAgICBpZnJhbWUub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUgPSBsaXN0ZW4oaWZyYW1lLmNvbnRlbnRXaW5kb3csICdyZXNpemUnLCBmbik7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGFwcGVuZChub2RlLCBpZnJhbWUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChjcm9zc29yaWdpbikge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1bnN1YnNjcmliZSAmJiBpZnJhbWUuY29udGVudFdpbmRvdykge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICBkZXRhY2goaWZyYW1lKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdG9nZ2xlX2NsYXNzKGVsZW1lbnQsIG5hbWUsIHRvZ2dsZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0W3RvZ2dsZSA/ICdhZGQnIDogJ3JlbW92ZSddKG5hbWUpO1xufVxuZnVuY3Rpb24gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCkge1xuICAgIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICBlLmluaXRDdXN0b21FdmVudCh0eXBlLCBmYWxzZSwgZmFsc2UsIGRldGFpbCk7XG4gICAgcmV0dXJuIGU7XG59XG5mdW5jdGlvbiBxdWVyeV9zZWxlY3Rvcl9hbGwoc2VsZWN0b3IsIHBhcmVudCA9IGRvY3VtZW50LmJvZHkpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xufVxuY2xhc3MgSHRtbFRhZyB7XG4gICAgY29uc3RydWN0b3IoYW5jaG9yID0gbnVsbCkge1xuICAgICAgICB0aGlzLmEgPSBhbmNob3I7XG4gICAgICAgIHRoaXMuZSA9IHRoaXMubiA9IG51bGw7XG4gICAgfVxuICAgIG0oaHRtbCwgdGFyZ2V0LCBhbmNob3IgPSBudWxsKSB7XG4gICAgICAgIGlmICghdGhpcy5lKSB7XG4gICAgICAgICAgICB0aGlzLmUgPSBlbGVtZW50KHRhcmdldC5ub2RlTmFtZSk7XG4gICAgICAgICAgICB0aGlzLnQgPSB0YXJnZXQ7XG4gICAgICAgICAgICB0aGlzLmgoaHRtbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pKGFuY2hvcik7XG4gICAgfVxuICAgIGgoaHRtbCkge1xuICAgICAgICB0aGlzLmUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgdGhpcy5uID0gQXJyYXkuZnJvbSh0aGlzLmUuY2hpbGROb2Rlcyk7XG4gICAgfVxuICAgIGkoYW5jaG9yKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpbnNlcnQodGhpcy50LCB0aGlzLm5baV0sIGFuY2hvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcChodG1sKSB7XG4gICAgICAgIHRoaXMuZCgpO1xuICAgICAgICB0aGlzLmgoaHRtbCk7XG4gICAgICAgIHRoaXMuaSh0aGlzLmEpO1xuICAgIH1cbiAgICBkKCkge1xuICAgICAgICB0aGlzLm4uZm9yRWFjaChkZXRhY2gpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGF0dHJpYnV0ZV90b19vYmplY3QoYXR0cmlidXRlcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmVzdWx0W2F0dHJpYnV0ZS5uYW1lXSA9IGF0dHJpYnV0ZS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGdldF9jdXN0b21fZWxlbWVudHNfc2xvdHMoZWxlbWVudCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIHJlc3VsdFtub2RlLnNsb3QgfHwgJ2RlZmF1bHQnXSA9IHRydWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuY29uc3QgYWN0aXZlX2RvY3MgPSBuZXcgU2V0KCk7XG5sZXQgYWN0aXZlID0gMDtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJrc2t5YXBwL3N0cmluZy1oYXNoL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG5mdW5jdGlvbiBoYXNoKHN0cikge1xuICAgIGxldCBoYXNoID0gNTM4MTtcbiAgICBsZXQgaSA9IHN0ci5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpIF4gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGhhc2ggPj4+IDA7XG59XG5mdW5jdGlvbiBjcmVhdGVfcnVsZShub2RlLCBhLCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2UsIGZuLCB1aWQgPSAwKSB7XG4gICAgY29uc3Qgc3RlcCA9IDE2LjY2NiAvIGR1cmF0aW9uO1xuICAgIGxldCBrZXlmcmFtZXMgPSAne1xcbic7XG4gICAgZm9yIChsZXQgcCA9IDA7IHAgPD0gMTsgcCArPSBzdGVwKSB7XG4gICAgICAgIGNvbnN0IHQgPSBhICsgKGIgLSBhKSAqIGVhc2UocCk7XG4gICAgICAgIGtleWZyYW1lcyArPSBwICogMTAwICsgYCV7JHtmbih0LCAxIC0gdCl9fVxcbmA7XG4gICAgfVxuICAgIGNvbnN0IHJ1bGUgPSBrZXlmcmFtZXMgKyBgMTAwJSB7JHtmbihiLCAxIC0gYil9fVxcbn1gO1xuICAgIGNvbnN0IG5hbWUgPSBgX19zdmVsdGVfJHtoYXNoKHJ1bGUpfV8ke3VpZH1gO1xuICAgIGNvbnN0IGRvYyA9IG5vZGUub3duZXJEb2N1bWVudDtcbiAgICBhY3RpdmVfZG9jcy5hZGQoZG9jKTtcbiAgICBjb25zdCBzdHlsZXNoZWV0ID0gZG9jLl9fc3ZlbHRlX3N0eWxlc2hlZXQgfHwgKGRvYy5fX3N2ZWx0ZV9zdHlsZXNoZWV0ID0gZG9jLmhlYWQuYXBwZW5kQ2hpbGQoZWxlbWVudCgnc3R5bGUnKSkuc2hlZXQpO1xuICAgIGNvbnN0IGN1cnJlbnRfcnVsZXMgPSBkb2MuX19zdmVsdGVfcnVsZXMgfHwgKGRvYy5fX3N2ZWx0ZV9ydWxlcyA9IHt9KTtcbiAgICBpZiAoIWN1cnJlbnRfcnVsZXNbbmFtZV0pIHtcbiAgICAgICAgY3VycmVudF9ydWxlc1tuYW1lXSA9IHRydWU7XG4gICAgICAgIHN0eWxlc2hlZXQuaW5zZXJ0UnVsZShgQGtleWZyYW1lcyAke25hbWV9ICR7cnVsZX1gLCBzdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgfVxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnO1xuICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gYCR7YW5pbWF0aW9uID8gYCR7YW5pbWF0aW9ufSwgYCA6ICcnfSR7bmFtZX0gJHtkdXJhdGlvbn1tcyBsaW5lYXIgJHtkZWxheX1tcyAxIGJvdGhgO1xuICAgIGFjdGl2ZSArPSAxO1xuICAgIHJldHVybiBuYW1lO1xufVxuZnVuY3Rpb24gZGVsZXRlX3J1bGUobm9kZSwgbmFtZSkge1xuICAgIGNvbnN0IHByZXZpb3VzID0gKG5vZGUuc3R5bGUuYW5pbWF0aW9uIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgICBjb25zdCBuZXh0ID0gcHJldmlvdXMuZmlsdGVyKG5hbWVcbiAgICAgICAgPyBhbmltID0+IGFuaW0uaW5kZXhPZihuYW1lKSA8IDAgLy8gcmVtb3ZlIHNwZWNpZmljIGFuaW1hdGlvblxuICAgICAgICA6IGFuaW0gPT4gYW5pbS5pbmRleE9mKCdfX3N2ZWx0ZScpID09PSAtMSAvLyByZW1vdmUgYWxsIFN2ZWx0ZSBhbmltYXRpb25zXG4gICAgKTtcbiAgICBjb25zdCBkZWxldGVkID0gcHJldmlvdXMubGVuZ3RoIC0gbmV4dC5sZW5ndGg7XG4gICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5hbmltYXRpb24gPSBuZXh0LmpvaW4oJywgJyk7XG4gICAgICAgIGFjdGl2ZSAtPSBkZWxldGVkO1xuICAgICAgICBpZiAoIWFjdGl2ZSlcbiAgICAgICAgICAgIGNsZWFyX3J1bGVzKCk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2xlYXJfcnVsZXMoKSB7XG4gICAgcmFmKCgpID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgYWN0aXZlX2RvY3MuZm9yRWFjaChkb2MgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVzaGVldCA9IGRvYy5fX3N2ZWx0ZV9zdHlsZXNoZWV0O1xuICAgICAgICAgICAgbGV0IGkgPSBzdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChpLS0pXG4gICAgICAgICAgICAgICAgc3R5bGVzaGVldC5kZWxldGVSdWxlKGkpO1xuICAgICAgICAgICAgZG9jLl9fc3ZlbHRlX3J1bGVzID0ge307XG4gICAgICAgIH0pO1xuICAgICAgICBhY3RpdmVfZG9jcy5jbGVhcigpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfYW5pbWF0aW9uKG5vZGUsIGZyb20sIGZuLCBwYXJhbXMpIHtcbiAgICBpZiAoIWZyb20pXG4gICAgICAgIHJldHVybiBub29wO1xuICAgIGNvbnN0IHRvID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoZnJvbS5sZWZ0ID09PSB0by5sZWZ0ICYmIGZyb20ucmlnaHQgPT09IHRvLnJpZ2h0ICYmIGZyb20udG9wID09PSB0by50b3AgJiYgZnJvbS5ib3R0b20gPT09IHRvLmJvdHRvbSlcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgXG4gICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBzaG91bGQgdGhpcyBiZSBzZXBhcmF0ZWQgZnJvbSBkZXN0cnVjdHVyaW5nPyBPciBzdGFydC9lbmQgYWRkZWQgdG8gcHVibGljIGFwaSBhbmQgZG9jdW1lbnRhdGlvbj9cbiAgICBzdGFydDogc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXksIFxuICAgIC8vIEB0cy1pZ25vcmUgdG9kbzpcbiAgICBlbmQgPSBzdGFydF90aW1lICsgZHVyYXRpb24sIHRpY2sgPSBub29wLCBjc3MgfSA9IGZuKG5vZGUsIHsgZnJvbSwgdG8gfSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IHRydWU7XG4gICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBsZXQgbmFtZTtcbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgaWYgKGNzcykge1xuICAgICAgICAgICAgbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDAsIDEsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGVsYXkpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBuYW1lKTtcbiAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgIGlmICghc3RhcnRlZCAmJiBub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ZWQgJiYgbm93ID49IGVuZCkge1xuICAgICAgICAgICAgdGljaygxLCAwKTtcbiAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRlZCkge1xuICAgICAgICAgICAgY29uc3QgcCA9IG5vdyAtIHN0YXJ0X3RpbWU7XG4gICAgICAgICAgICBjb25zdCB0ID0gMCArIDEgKiBlYXNpbmcocCAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIHN0YXJ0KCk7XG4gICAgdGljaygwLCAxKTtcbiAgICByZXR1cm4gc3RvcDtcbn1cbmZ1bmN0aW9uIGZpeF9wb3NpdGlvbihub2RlKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGlmIChzdHlsZS5wb3NpdGlvbiAhPT0gJ2Fic29sdXRlJyAmJiBzdHlsZS5wb3NpdGlvbiAhPT0gJ2ZpeGVkJykge1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHN0eWxlO1xuICAgICAgICBjb25zdCBhID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIG5vZGUuc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGFkZF90cmFuc2Zvcm0obm9kZSwgYSk7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkX3RyYW5zZm9ybShub2RlLCBhKSB7XG4gICAgY29uc3QgYiA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKGEubGVmdCAhPT0gYi5sZWZ0IHx8IGEudG9wICE9PSBiLnRvcCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIG5vZGUuc3R5bGUudHJhbnNmb3JtID0gYCR7dHJhbnNmb3JtfSB0cmFuc2xhdGUoJHthLmxlZnQgLSBiLmxlZnR9cHgsICR7YS50b3AgLSBiLnRvcH1weClgO1xuICAgIH1cbn1cblxubGV0IGN1cnJlbnRfY29tcG9uZW50O1xuZnVuY3Rpb24gc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIGN1cnJlbnRfY29tcG9uZW50ID0gY29tcG9uZW50O1xufVxuZnVuY3Rpb24gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkge1xuICAgIGlmICghY3VycmVudF9jb21wb25lbnQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRnVuY3Rpb24gY2FsbGVkIG91dHNpZGUgY29tcG9uZW50IGluaXRpYWxpemF0aW9uJyk7XG4gICAgcmV0dXJuIGN1cnJlbnRfY29tcG9uZW50O1xufVxuZnVuY3Rpb24gYmVmb3JlVXBkYXRlKGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuYmVmb3JlX3VwZGF0ZS5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIG9uTW91bnQoZm4pIHtcbiAgICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5vbl9tb3VudC5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIGFmdGVyVXBkYXRlKGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuYWZ0ZXJfdXBkYXRlLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gb25EZXN0cm95KGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fZGVzdHJveS5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBnZXRfY3VycmVudF9jb21wb25lbnQoKTtcbiAgICByZXR1cm4gKHR5cGUsIGRldGFpbCkgPT4ge1xuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSBjb21wb25lbnQuJCQuY2FsbGJhY2tzW3R5cGVdO1xuICAgICAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAvLyBUT0RPIGFyZSB0aGVyZSBzaXR1YXRpb25zIHdoZXJlIGV2ZW50cyBjb3VsZCBiZSBkaXNwYXRjaGVkXG4gICAgICAgICAgICAvLyBpbiBhIHNlcnZlciAobm9uLURPTSkgZW52aXJvbm1lbnQ/XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGN1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwpO1xuICAgICAgICAgICAgY2FsbGJhY2tzLnNsaWNlKCkuZm9yRWFjaChmbiA9PiB7XG4gICAgICAgICAgICAgICAgZm4uY2FsbChjb21wb25lbnQsIGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNldENvbnRleHQoa2V5LCBjb250ZXh0KSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQuY29udGV4dC5zZXQoa2V5LCBjb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGdldENvbnRleHQoa2V5KSB7XG4gICAgcmV0dXJuIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuZ2V0KGtleSk7XG59XG5mdW5jdGlvbiBoYXNDb250ZXh0KGtleSkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmhhcyhrZXkpO1xufVxuLy8gVE9ETyBmaWd1cmUgb3V0IGlmIHdlIHN0aWxsIHdhbnQgdG8gc3VwcG9ydFxuLy8gc2hvcnRoYW5kIGV2ZW50cywgb3IgaWYgd2Ugd2FudCB0byBpbXBsZW1lbnRcbi8vIGEgcmVhbCBidWJibGluZyBtZWNoYW5pc21cbmZ1bmN0aW9uIGJ1YmJsZShjb21wb25lbnQsIGV2ZW50KSB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1tldmVudC50eXBlXTtcbiAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgIGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goZm4gPT4gZm4oZXZlbnQpKTtcbiAgICB9XG59XG5cbmNvbnN0IGRpcnR5X2NvbXBvbmVudHMgPSBbXTtcbmNvbnN0IGludHJvcyA9IHsgZW5hYmxlZDogZmFsc2UgfTtcbmNvbnN0IGJpbmRpbmdfY2FsbGJhY2tzID0gW107XG5jb25zdCByZW5kZXJfY2FsbGJhY2tzID0gW107XG5jb25zdCBmbHVzaF9jYWxsYmFja3MgPSBbXTtcbmNvbnN0IHJlc29sdmVkX3Byb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbmxldCB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG5mdW5jdGlvbiBzY2hlZHVsZV91cGRhdGUoKSB7XG4gICAgaWYgKCF1cGRhdGVfc2NoZWR1bGVkKSB7XG4gICAgICAgIHVwZGF0ZV9zY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICByZXNvbHZlZF9wcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRpY2soKSB7XG4gICAgc2NoZWR1bGVfdXBkYXRlKCk7XG4gICAgcmV0dXJuIHJlc29sdmVkX3Byb21pc2U7XG59XG5mdW5jdGlvbiBhZGRfcmVuZGVyX2NhbGxiYWNrKGZuKSB7XG4gICAgcmVuZGVyX2NhbGxiYWNrcy5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIGFkZF9mbHVzaF9jYWxsYmFjayhmbikge1xuICAgIGZsdXNoX2NhbGxiYWNrcy5wdXNoKGZuKTtcbn1cbmxldCBmbHVzaGluZyA9IGZhbHNlO1xuY29uc3Qgc2Vlbl9jYWxsYmFja3MgPSBuZXcgU2V0KCk7XG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgICBpZiAoZmx1c2hpbmcpXG4gICAgICAgIHJldHVybjtcbiAgICBmbHVzaGluZyA9IHRydWU7XG4gICAgZG8ge1xuICAgICAgICAvLyBmaXJzdCwgY2FsbCBiZWZvcmVVcGRhdGUgZnVuY3Rpb25zXG4gICAgICAgIC8vIGFuZCB1cGRhdGUgY29tcG9uZW50c1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGRpcnR5X2NvbXBvbmVudHNbaV07XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZShjb21wb25lbnQuJCQpO1xuICAgICAgICB9XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgZGlydHlfY29tcG9uZW50cy5sZW5ndGggPSAwO1xuICAgICAgICB3aGlsZSAoYmluZGluZ19jYWxsYmFja3MubGVuZ3RoKVxuICAgICAgICAgICAgYmluZGluZ19jYWxsYmFja3MucG9wKCkoKTtcbiAgICAgICAgLy8gdGhlbiwgb25jZSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLCBjYWxsXG4gICAgICAgIC8vIGFmdGVyVXBkYXRlIGZ1bmN0aW9ucy4gVGhpcyBtYXkgY2F1c2VcbiAgICAgICAgLy8gc3Vic2VxdWVudCB1cGRhdGVzLi4uXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSByZW5kZXJfY2FsbGJhY2tzW2ldO1xuICAgICAgICAgICAgaWYgKCFzZWVuX2NhbGxiYWNrcy5oYXMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgLy8gLi4uc28gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBsb29wc1xuICAgICAgICAgICAgICAgIHNlZW5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgfSB3aGlsZSAoZGlydHlfY29tcG9uZW50cy5sZW5ndGgpO1xuICAgIHdoaWxlIChmbHVzaF9jYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGZsdXNoX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgIH1cbiAgICB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgZmx1c2hpbmcgPSBmYWxzZTtcbiAgICBzZWVuX2NhbGxiYWNrcy5jbGVhcigpO1xufVxuZnVuY3Rpb24gdXBkYXRlKCQkKSB7XG4gICAgaWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICQkLnVwZGF0ZSgpO1xuICAgICAgICBydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpO1xuICAgICAgICBjb25zdCBkaXJ0eSA9ICQkLmRpcnR5O1xuICAgICAgICAkJC5kaXJ0eSA9IFstMV07XG4gICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LnAoJCQuY3R4LCBkaXJ0eSk7XG4gICAgICAgICQkLmFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xuICAgIH1cbn1cblxubGV0IHByb21pc2U7XG5mdW5jdGlvbiB3YWl0KCkge1xuICAgIGlmICghcHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwcm9taXNlO1xufVxuZnVuY3Rpb24gZGlzcGF0Y2gobm9kZSwgZGlyZWN0aW9uLCBraW5kKSB7XG4gICAgbm9kZS5kaXNwYXRjaEV2ZW50KGN1c3RvbV9ldmVudChgJHtkaXJlY3Rpb24gPyAnaW50cm8nIDogJ291dHJvJ30ke2tpbmR9YCkpO1xufVxuY29uc3Qgb3V0cm9pbmcgPSBuZXcgU2V0KCk7XG5sZXQgb3V0cm9zO1xuZnVuY3Rpb24gZ3JvdXBfb3V0cm9zKCkge1xuICAgIG91dHJvcyA9IHtcbiAgICAgICAgcjogMCxcbiAgICAgICAgYzogW10sXG4gICAgICAgIHA6IG91dHJvcyAvLyBwYXJlbnQgZ3JvdXBcbiAgICB9O1xufVxuZnVuY3Rpb24gY2hlY2tfb3V0cm9zKCkge1xuICAgIGlmICghb3V0cm9zLnIpIHtcbiAgICAgICAgcnVuX2FsbChvdXRyb3MuYyk7XG4gICAgfVxuICAgIG91dHJvcyA9IG91dHJvcy5wO1xufVxuZnVuY3Rpb24gdHJhbnNpdGlvbl9pbihibG9jaywgbG9jYWwpIHtcbiAgICBpZiAoYmxvY2sgJiYgYmxvY2suaSkge1xuICAgICAgICBvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuICAgICAgICBibG9jay5pKGxvY2FsKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uX291dChibG9jaywgbG9jYWwsIGRldGFjaCwgY2FsbGJhY2spIHtcbiAgICBpZiAoYmxvY2sgJiYgYmxvY2subykge1xuICAgICAgICBpZiAob3V0cm9pbmcuaGFzKGJsb2NrKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgb3V0cm9pbmcuYWRkKGJsb2NrKTtcbiAgICAgICAgb3V0cm9zLmMucHVzaCgoKSA9PiB7XG4gICAgICAgICAgICBvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRldGFjaClcbiAgICAgICAgICAgICAgICAgICAgYmxvY2suZCgxKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYmxvY2subyhsb2NhbCk7XG4gICAgfVxufVxuY29uc3QgbnVsbF90cmFuc2l0aW9uID0geyBkdXJhdGlvbjogMCB9O1xuZnVuY3Rpb24gY3JlYXRlX2luX3RyYW5zaXRpb24obm9kZSwgZm4sIHBhcmFtcykge1xuICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuICAgIGxldCBydW5uaW5nID0gZmFsc2U7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lO1xuICAgIGxldCB0YXNrO1xuICAgIGxldCB1aWQgPSAwO1xuICAgIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ28oKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDAsIDEsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MsIHVpZCsrKTtcbiAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgY29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG4gICAgICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuICAgICAgICBpZiAodGFzaylcbiAgICAgICAgICAgIHRhc2suYWJvcnQoKTtcbiAgICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgdHJ1ZSwgJ3N0YXJ0JykpO1xuICAgICAgICB0YXNrID0gbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAobm93ID49IGVuZF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHRydWUsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGFydCgpIHtcbiAgICAgICAgICAgIGlmIChzdGFydGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSBjb25maWcoKTtcbiAgICAgICAgICAgICAgICB3YWl0KCkudGhlbihnbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpbnZhbGlkYXRlKCkge1xuICAgICAgICAgICAgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlX291dF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IHRydWU7XG4gICAgbGV0IGFuaW1hdGlvbl9uYW1lO1xuICAgIGNvbnN0IGdyb3VwID0gb3V0cm9zO1xuICAgIGdyb3VwLnIgKz0gMTtcbiAgICBmdW5jdGlvbiBnbygpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gMzAwLCBlYXNpbmcgPSBpZGVudGl0eSwgdGljayA9IG5vb3AsIGNzcyB9ID0gY29uZmlnIHx8IG51bGxfdHJhbnNpdGlvbjtcbiAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgMSwgMCwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGNzcyk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBmYWxzZSwgJ3N0YXJ0JykpO1xuICAgICAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChub3cgPj0gZW5kX3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEtLWdyb3VwLnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCByZXN1bHQgaW4gYGVuZCgpYCBiZWluZyBjYWxsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGNsZWFuIHVwIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwoZ3JvdXAuYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMSAtIHQsIHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgd2FpdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICBnbygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdvKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGVuZChyZXNldCkge1xuICAgICAgICAgICAgaWYgKHJlc2V0ICYmIGNvbmZpZy50aWNrKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLnRpY2soMSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMsIGludHJvKSB7XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgbGV0IHQgPSBpbnRybyA/IDAgOiAxO1xuICAgIGxldCBydW5uaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgIGxldCBwZW5kaW5nX3Byb2dyYW0gPSBudWxsO1xuICAgIGxldCBhbmltYXRpb25fbmFtZSA9IG51bGw7XG4gICAgZnVuY3Rpb24gY2xlYXJfYW5pbWF0aW9uKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluaXQocHJvZ3JhbSwgZHVyYXRpb24pIHtcbiAgICAgICAgY29uc3QgZCA9IHByb2dyYW0uYiAtIHQ7XG4gICAgICAgIGR1cmF0aW9uICo9IE1hdGguYWJzKGQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTogdCxcbiAgICAgICAgICAgIGI6IHByb2dyYW0uYixcbiAgICAgICAgICAgIGQsXG4gICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgIHN0YXJ0OiBwcm9ncmFtLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiBwcm9ncmFtLnN0YXJ0ICsgZHVyYXRpb24sXG4gICAgICAgICAgICBncm91cDogcHJvZ3JhbS5ncm91cFxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBnbyhiKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGNvbnN0IHByb2dyYW0gPSB7XG4gICAgICAgICAgICBzdGFydDogbm93KCkgKyBkZWxheSxcbiAgICAgICAgICAgIGJcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFiKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgcHJvZ3JhbS5ncm91cCA9IG91dHJvcztcbiAgICAgICAgICAgIG91dHJvcy5yICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJ1bm5pbmdfcHJvZ3JhbSB8fCBwZW5kaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgIHBlbmRpbmdfcHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGFuIGludHJvLCBhbmQgdGhlcmUncyBhIGRlbGF5LCB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAvLyBhbiBpbml0aWFsIHRpY2sgYW5kL29yIGFwcGx5IENTUyBhbmltYXRpb24gaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIHQsIGIsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGIpXG4gICAgICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IGluaXQocHJvZ3JhbSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBiLCAnc3RhcnQnKSk7XG4gICAgICAgICAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBlbmRpbmdfcHJvZ3JhbSAmJiBub3cgPiBwZW5kaW5nX3Byb2dyYW0uc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gaW5pdChwZW5kaW5nX3Byb2dyYW0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgcnVubmluZ19wcm9ncmFtLmIsICdzdGFydCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgdCwgcnVubmluZ19wcm9ncmFtLmIsIHJ1bm5pbmdfcHJvZ3JhbS5kdXJhdGlvbiwgMCwgZWFzaW5nLCBjb25maWcuY3NzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3cgPj0gcnVubmluZ19wcm9ncmFtLmVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljayh0ID0gcnVubmluZ19wcm9ncmFtLmIsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBlbmRpbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlJ3JlIGRvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtLmIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW50cm8gXHUyMDE0IHdlIGNhbiB0aWR5IHVwIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3V0cm8gXHUyMDE0IG5lZWRzIHRvIGJlIGNvb3JkaW5hdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghLS1ydW5uaW5nX3Byb2dyYW0uZ3JvdXAucilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwocnVubmluZ19wcm9ncmFtLmdyb3VwLmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobm93ID49IHJ1bm5pbmdfcHJvZ3JhbS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IG5vdyAtIHJ1bm5pbmdfcHJvZ3JhbS5zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBydW5uaW5nX3Byb2dyYW0uYSArIHJ1bm5pbmdfcHJvZ3JhbS5kICogZWFzaW5nKHAgLyBydW5uaW5nX3Byb2dyYW0uZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhKHJ1bm5pbmdfcHJvZ3JhbSB8fCBwZW5kaW5nX3Byb2dyYW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcnVuKGIpIHtcbiAgICAgICAgICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgd2FpdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZygpO1xuICAgICAgICAgICAgICAgICAgICBnbyhiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdvKGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBoYW5kbGVfcHJvbWlzZShwcm9taXNlLCBpbmZvKSB7XG4gICAgY29uc3QgdG9rZW4gPSBpbmZvLnRva2VuID0ge307XG4gICAgZnVuY3Rpb24gdXBkYXRlKHR5cGUsIGluZGV4LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChpbmZvLnRva2VuICE9PSB0b2tlbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaW5mby5yZXNvbHZlZCA9IHZhbHVlO1xuICAgICAgICBsZXQgY2hpbGRfY3R4ID0gaW5mby5jdHg7XG4gICAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2hpbGRfY3R4ID0gY2hpbGRfY3R4LnNsaWNlKCk7XG4gICAgICAgICAgICBjaGlsZF9jdHhba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJsb2NrID0gdHlwZSAmJiAoaW5mby5jdXJyZW50ID0gdHlwZSkoY2hpbGRfY3R4KTtcbiAgICAgICAgbGV0IG5lZWRzX2ZsdXNoID0gZmFsc2U7XG4gICAgICAgIGlmIChpbmZvLmJsb2NrKSB7XG4gICAgICAgICAgICBpZiAoaW5mby5ibG9ja3MpIHtcbiAgICAgICAgICAgICAgICBpbmZvLmJsb2Nrcy5mb3JFYWNoKChibG9jaywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gaW5kZXggJiYgYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwX291dHJvcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbl9vdXQoYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5mby5ibG9ja3NbaV0gPT09IGJsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZm8uYmxvY2tzW2ldID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrX291dHJvcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmZvLmJsb2NrLmQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibG9jay5jKCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uX2luKGJsb2NrLCAxKTtcbiAgICAgICAgICAgIGJsb2NrLm0oaW5mby5tb3VudCgpLCBpbmZvLmFuY2hvcik7XG4gICAgICAgICAgICBuZWVkc19mbHVzaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5ibG9jayA9IGJsb2NrO1xuICAgICAgICBpZiAoaW5mby5ibG9ja3MpXG4gICAgICAgICAgICBpbmZvLmJsb2Nrc1tpbmRleF0gPSBibG9jaztcbiAgICAgICAgaWYgKG5lZWRzX2ZsdXNoKSB7XG4gICAgICAgICAgICBmbHVzaCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpc19wcm9taXNlKHByb21pc2UpKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRfY29tcG9uZW50ID0gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCk7XG4gICAgICAgIHByb21pc2UudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY3VycmVudF9jb21wb25lbnQpO1xuICAgICAgICAgICAgdXBkYXRlKGluZm8udGhlbiwgMSwgaW5mby52YWx1ZSwgdmFsdWUpO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY3VycmVudF9jb21wb25lbnQpO1xuICAgICAgICAgICAgdXBkYXRlKGluZm8uY2F0Y2gsIDIsIGluZm8uZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgICAgIGlmICghaW5mby5oYXNDYXRjaCkge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gaWYgd2UgcHJldmlvdXNseSBoYWQgYSB0aGVuL2NhdGNoIGJsb2NrLCBkZXN0cm95IGl0XG4gICAgICAgIGlmIChpbmZvLmN1cnJlbnQgIT09IGluZm8ucGVuZGluZykge1xuICAgICAgICAgICAgdXBkYXRlKGluZm8ucGVuZGluZywgMCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGluZm8uY3VycmVudCAhPT0gaW5mby50aGVuKSB7XG4gICAgICAgICAgICB1cGRhdGUoaW5mby50aGVuLCAxLCBpbmZvLnZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGluZm8ucmVzb2x2ZWQgPSBwcm9taXNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZV9hd2FpdF9ibG9ja19icmFuY2goaW5mbywgY3R4LCBkaXJ0eSkge1xuICAgIGNvbnN0IGNoaWxkX2N0eCA9IGN0eC5zbGljZSgpO1xuICAgIGNvbnN0IHsgcmVzb2x2ZWQgfSA9IGluZm87XG4gICAgaWYgKGluZm8uY3VycmVudCA9PT0gaW5mby50aGVuKSB7XG4gICAgICAgIGNoaWxkX2N0eFtpbmZvLnZhbHVlXSA9IHJlc29sdmVkO1xuICAgIH1cbiAgICBpZiAoaW5mby5jdXJyZW50ID09PSBpbmZvLmNhdGNoKSB7XG4gICAgICAgIGNoaWxkX2N0eFtpbmZvLmVycm9yXSA9IHJlc29sdmVkO1xuICAgIH1cbiAgICBpbmZvLmJsb2NrLnAoY2hpbGRfY3R4LCBkaXJ0eSk7XG59XG5cbmNvbnN0IGdsb2JhbHMgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IHdpbmRvd1xuICAgIDogdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gZ2xvYmFsVGhpc1xuICAgICAgICA6IGdsb2JhbCk7XG5cbmZ1bmN0aW9uIGRlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmQoMSk7XG4gICAgbG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xufVxuZnVuY3Rpb24gb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIHRyYW5zaXRpb25fb3V0KGJsb2NrLCAxLCAxLCAoKSA9PiB7XG4gICAgICAgIGxvb2t1cC5kZWxldGUoYmxvY2sua2V5KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZpeF9hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZigpO1xuICAgIGRlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCk7XG59XG5mdW5jdGlvbiBmaXhfYW5kX291dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5mKCk7XG4gICAgb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCk7XG59XG5mdW5jdGlvbiB1cGRhdGVfa2V5ZWRfZWFjaChvbGRfYmxvY2tzLCBkaXJ0eSwgZ2V0X2tleSwgZHluYW1pYywgY3R4LCBsaXN0LCBsb29rdXAsIG5vZGUsIGRlc3Ryb3ksIGNyZWF0ZV9lYWNoX2Jsb2NrLCBuZXh0LCBnZXRfY29udGV4dCkge1xuICAgIGxldCBvID0gb2xkX2Jsb2Nrcy5sZW5ndGg7XG4gICAgbGV0IG4gPSBsaXN0Lmxlbmd0aDtcbiAgICBsZXQgaSA9IG87XG4gICAgY29uc3Qgb2xkX2luZGV4ZXMgPSB7fTtcbiAgICB3aGlsZSAoaS0tKVxuICAgICAgICBvbGRfaW5kZXhlc1tvbGRfYmxvY2tzW2ldLmtleV0gPSBpO1xuICAgIGNvbnN0IG5ld19ibG9ja3MgPSBbXTtcbiAgICBjb25zdCBuZXdfbG9va3VwID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGRlbHRhcyA9IG5ldyBNYXAoKTtcbiAgICBpID0gbjtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkX2N0eCA9IGdldF9jb250ZXh0KGN0eCwgbGlzdCwgaSk7XG4gICAgICAgIGNvbnN0IGtleSA9IGdldF9rZXkoY2hpbGRfY3R4KTtcbiAgICAgICAgbGV0IGJsb2NrID0gbG9va3VwLmdldChrZXkpO1xuICAgICAgICBpZiAoIWJsb2NrKSB7XG4gICAgICAgICAgICBibG9jayA9IGNyZWF0ZV9lYWNoX2Jsb2NrKGtleSwgY2hpbGRfY3R4KTtcbiAgICAgICAgICAgIGJsb2NrLmMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkeW5hbWljKSB7XG4gICAgICAgICAgICBibG9jay5wKGNoaWxkX2N0eCwgZGlydHkpO1xuICAgICAgICB9XG4gICAgICAgIG5ld19sb29rdXAuc2V0KGtleSwgbmV3X2Jsb2Nrc1tpXSA9IGJsb2NrKTtcbiAgICAgICAgaWYgKGtleSBpbiBvbGRfaW5kZXhlcylcbiAgICAgICAgICAgIGRlbHRhcy5zZXQoa2V5LCBNYXRoLmFicyhpIC0gb2xkX2luZGV4ZXNba2V5XSkpO1xuICAgIH1cbiAgICBjb25zdCB3aWxsX21vdmUgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgZGlkX21vdmUgPSBuZXcgU2V0KCk7XG4gICAgZnVuY3Rpb24gaW5zZXJ0KGJsb2NrKSB7XG4gICAgICAgIHRyYW5zaXRpb25faW4oYmxvY2ssIDEpO1xuICAgICAgICBibG9jay5tKG5vZGUsIG5leHQpO1xuICAgICAgICBsb29rdXAuc2V0KGJsb2NrLmtleSwgYmxvY2spO1xuICAgICAgICBuZXh0ID0gYmxvY2suZmlyc3Q7XG4gICAgICAgIG4tLTtcbiAgICB9XG4gICAgd2hpbGUgKG8gJiYgbikge1xuICAgICAgICBjb25zdCBuZXdfYmxvY2sgPSBuZXdfYmxvY2tzW24gLSAxXTtcbiAgICAgICAgY29uc3Qgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvIC0gMV07XG4gICAgICAgIGNvbnN0IG5ld19rZXkgPSBuZXdfYmxvY2sua2V5O1xuICAgICAgICBjb25zdCBvbGRfa2V5ID0gb2xkX2Jsb2NrLmtleTtcbiAgICAgICAgaWYgKG5ld19ibG9jayA9PT0gb2xkX2Jsb2NrKSB7XG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICBuZXh0ID0gbmV3X2Jsb2NrLmZpcnN0O1xuICAgICAgICAgICAgby0tO1xuICAgICAgICAgICAgbi0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfa2V5KSkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIG9sZCBibG9ja1xuICAgICAgICAgICAgZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWxvb2t1cC5oYXMobmV3X2tleSkgfHwgd2lsbF9tb3ZlLmhhcyhuZXdfa2V5KSkge1xuICAgICAgICAgICAgaW5zZXJ0KG5ld19ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlkX21vdmUuaGFzKG9sZF9rZXkpKSB7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVsdGFzLmdldChuZXdfa2V5KSA+IGRlbHRhcy5nZXQob2xkX2tleSkpIHtcbiAgICAgICAgICAgIGRpZF9tb3ZlLmFkZChuZXdfa2V5KTtcbiAgICAgICAgICAgIGluc2VydChuZXdfYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd2lsbF9tb3ZlLmFkZChvbGRfa2V5KTtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB3aGlsZSAoby0tKSB7XG4gICAgICAgIGNvbnN0IG9sZF9ibG9jayA9IG9sZF9ibG9ja3Nbb107XG4gICAgICAgIGlmICghbmV3X2xvb2t1cC5oYXMob2xkX2Jsb2NrLmtleSkpXG4gICAgICAgICAgICBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcbiAgICB9XG4gICAgd2hpbGUgKG4pXG4gICAgICAgIGluc2VydChuZXdfYmxvY2tzW24gLSAxXSk7XG4gICAgcmV0dXJuIG5ld19ibG9ja3M7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9lYWNoX2tleXMoY3R4LCBsaXN0LCBnZXRfY29udGV4dCwgZ2V0X2tleSkge1xuICAgIGNvbnN0IGtleXMgPSBuZXcgU2V0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGdldF9rZXkoZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKSk7XG4gICAgICAgIGlmIChrZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBoYXZlIGR1cGxpY2F0ZSBrZXlzIGluIGEga2V5ZWQgZWFjaCcpO1xuICAgICAgICB9XG4gICAgICAgIGtleXMuYWRkKGtleSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRfc3ByZWFkX3VwZGF0ZShsZXZlbHMsIHVwZGF0ZXMpIHtcbiAgICBjb25zdCB1cGRhdGUgPSB7fTtcbiAgICBjb25zdCB0b19udWxsX291dCA9IHt9O1xuICAgIGNvbnN0IGFjY291bnRlZF9mb3IgPSB7ICQkc2NvcGU6IDEgfTtcbiAgICBsZXQgaSA9IGxldmVscy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjb25zdCBvID0gbGV2ZWxzW2ldO1xuICAgICAgICBjb25zdCBuID0gdXBkYXRlc1tpXTtcbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG8pIHtcbiAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4gbikpXG4gICAgICAgICAgICAgICAgICAgIHRvX251bGxfb3V0W2tleV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbikge1xuICAgICAgICAgICAgICAgIGlmICghYWNjb3VudGVkX2ZvcltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVtrZXldID0gbltrZXldO1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldmVsc1tpXSA9IG47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvKSB7XG4gICAgICAgICAgICAgICAgYWNjb3VudGVkX2ZvcltrZXldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0b19udWxsX291dCkge1xuICAgICAgICBpZiAoIShrZXkgaW4gdXBkYXRlKSlcbiAgICAgICAgICAgIHVwZGF0ZVtrZXldID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gdXBkYXRlO1xufVxuZnVuY3Rpb24gZ2V0X3NwcmVhZF9vYmplY3Qoc3ByZWFkX3Byb3BzKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcHJlYWRfcHJvcHMgPT09ICdvYmplY3QnICYmIHNwcmVhZF9wcm9wcyAhPT0gbnVsbCA/IHNwcmVhZF9wcm9wcyA6IHt9O1xufVxuXG4vLyBzb3VyY2U6IGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2luZGljZXMuaHRtbFxuY29uc3QgYm9vbGVhbl9hdHRyaWJ1dGVzID0gbmV3IFNldChbXG4gICAgJ2FsbG93ZnVsbHNjcmVlbicsXG4gICAgJ2FsbG93cGF5bWVudHJlcXVlc3QnLFxuICAgICdhc3luYycsXG4gICAgJ2F1dG9mb2N1cycsXG4gICAgJ2F1dG9wbGF5JyxcbiAgICAnY2hlY2tlZCcsXG4gICAgJ2NvbnRyb2xzJyxcbiAgICAnZGVmYXVsdCcsXG4gICAgJ2RlZmVyJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdmb3Jtbm92YWxpZGF0ZScsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2lzbWFwJyxcbiAgICAnbG9vcCcsXG4gICAgJ211bHRpcGxlJyxcbiAgICAnbXV0ZWQnLFxuICAgICdub21vZHVsZScsXG4gICAgJ25vdmFsaWRhdGUnLFxuICAgICdvcGVuJyxcbiAgICAncGxheXNpbmxpbmUnLFxuICAgICdyZWFkb25seScsXG4gICAgJ3JlcXVpcmVkJyxcbiAgICAncmV2ZXJzZWQnLFxuICAgICdzZWxlY3RlZCdcbl0pO1xuXG5jb25zdCBpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3RlciA9IC9bXFxzJ1wiPi89XFx1e0ZERDB9LVxcdXtGREVGfVxcdXtGRkZFfVxcdXtGRkZGfVxcdXsxRkZGRX1cXHV7MUZGRkZ9XFx1ezJGRkZFfVxcdXsyRkZGRn1cXHV7M0ZGRkV9XFx1ezNGRkZGfVxcdXs0RkZGRX1cXHV7NEZGRkZ9XFx1ezVGRkZFfVxcdXs1RkZGRn1cXHV7NkZGRkV9XFx1ezZGRkZGfVxcdXs3RkZGRX1cXHV7N0ZGRkZ9XFx1ezhGRkZFfVxcdXs4RkZGRn1cXHV7OUZGRkV9XFx1ezlGRkZGfVxcdXtBRkZGRX1cXHV7QUZGRkZ9XFx1e0JGRkZFfVxcdXtCRkZGRn1cXHV7Q0ZGRkV9XFx1e0NGRkZGfVxcdXtERkZGRX1cXHV7REZGRkZ9XFx1e0VGRkZFfVxcdXtFRkZGRn1cXHV7RkZGRkV9XFx1e0ZGRkZGfVxcdXsxMEZGRkV9XFx1ezEwRkZGRn1dL3U7XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTJcbi8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNub25jaGFyYWN0ZXJcbmZ1bmN0aW9uIHNwcmVhZChhcmdzLCBjbGFzc2VzX3RvX2FkZCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5hcmdzKTtcbiAgICBpZiAoY2xhc3Nlc190b19hZGQpIHtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMuY2xhc3MgPT0gbnVsbCkge1xuICAgICAgICAgICAgYXR0cmlidXRlcy5jbGFzcyA9IGNsYXNzZXNfdG9fYWRkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXR0cmlidXRlcy5jbGFzcyArPSAnICcgKyBjbGFzc2VzX3RvX2FkZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3RyID0gJyc7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgaWYgKGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyLnRlc3QobmFtZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcbiAgICAgICAgaWYgKHZhbHVlID09PSB0cnVlKVxuICAgICAgICAgICAgc3RyICs9ICcgJyArIG5hbWU7XG4gICAgICAgIGVsc2UgaWYgKGJvb2xlYW5fYXR0cmlidXRlcy5oYXMobmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgICAgIHN0ciArPSAnICcgKyBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN0ciArPSBgICR7bmFtZX09XCIke1N0cmluZyh2YWx1ZSkucmVwbGFjZSgvXCIvZywgJyYjMzQ7JykucmVwbGFjZSgvJy9nLCAnJiMzOTsnKX1cImA7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3RyO1xufVxuY29uc3QgZXNjYXBlZCA9IHtcbiAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICBcIidcIjogJyYjMzk7JyxcbiAgICAnJic6ICcmYW1wOycsXG4gICAgJzwnOiAnJmx0OycsXG4gICAgJz4nOiAnJmd0Oydcbn07XG5mdW5jdGlvbiBlc2NhcGUoaHRtbCkge1xuICAgIHJldHVybiBTdHJpbmcoaHRtbCkucmVwbGFjZSgvW1wiJyY8Pl0vZywgbWF0Y2ggPT4gZXNjYXBlZFttYXRjaF0pO1xufVxuZnVuY3Rpb24gZWFjaChpdGVtcywgZm4pIHtcbiAgICBsZXQgc3RyID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzdHIgKz0gZm4oaXRlbXNbaV0sIGkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuY29uc3QgbWlzc2luZ19jb21wb25lbnQgPSB7XG4gICAgJCRyZW5kZXI6ICgpID0+ICcnXG59O1xuZnVuY3Rpb24gdmFsaWRhdGVfY29tcG9uZW50KGNvbXBvbmVudCwgbmFtZSkge1xuICAgIGlmICghY29tcG9uZW50IHx8ICFjb21wb25lbnQuJCRyZW5kZXIpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdzdmVsdGU6Y29tcG9uZW50JylcbiAgICAgICAgICAgIG5hbWUgKz0gJyB0aGlzPXsuLi59JztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGA8JHtuYW1lfT4gaXMgbm90IGEgdmFsaWQgU1NSIGNvbXBvbmVudC4gWW91IG1heSBuZWVkIHRvIHJldmlldyB5b3VyIGJ1aWxkIGNvbmZpZyB0byBlbnN1cmUgdGhhdCBkZXBlbmRlbmNpZXMgYXJlIGNvbXBpbGVkLCByYXRoZXIgdGhhbiBpbXBvcnRlZCBhcyBwcmUtY29tcGlsZWQgbW9kdWxlc2ApO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuZnVuY3Rpb24gZGVidWcoZmlsZSwgbGluZSwgY29sdW1uLCB2YWx1ZXMpIHtcbiAgICBjb25zb2xlLmxvZyhge0BkZWJ1Z30gJHtmaWxlID8gZmlsZSArICcgJyA6ICcnfSgke2xpbmV9OiR7Y29sdW1ufSlgKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2codmFsdWVzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgcmV0dXJuICcnO1xufVxubGV0IG9uX2Rlc3Ryb3k7XG5mdW5jdGlvbiBjcmVhdGVfc3NyX2NvbXBvbmVudChmbikge1xuICAgIGZ1bmN0aW9uICQkcmVuZGVyKHJlc3VsdCwgcHJvcHMsIGJpbmRpbmdzLCBzbG90cywgY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYXJlbnRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgICAgIGNvbnN0ICQkID0ge1xuICAgICAgICAgICAgb25fZGVzdHJveSxcbiAgICAgICAgICAgIGNvbnRleHQ6IG5ldyBNYXAocGFyZW50X2NvbXBvbmVudCA/IHBhcmVudF9jb21wb25lbnQuJCQuY29udGV4dCA6IGNvbnRleHQgfHwgW10pLFxuICAgICAgICAgICAgLy8gdGhlc2Ugd2lsbCBiZSBpbW1lZGlhdGVseSBkaXNjYXJkZWRcbiAgICAgICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgICAgIGJlZm9yZV91cGRhdGU6IFtdLFxuICAgICAgICAgICAgYWZ0ZXJfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KClcbiAgICAgICAgfTtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHsgJCQgfSk7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBmbihyZXN1bHQsIHByb3BzLCBiaW5kaW5ncywgc2xvdHMpO1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXI6IChwcm9wcyA9IHt9LCB7ICQkc2xvdHMgPSB7fSwgY29udGV4dCA9IG5ldyBNYXAoKSB9ID0ge30pID0+IHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3kgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgdGl0bGU6ICcnLCBoZWFkOiAnJywgY3NzOiBuZXcgU2V0KCkgfTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSAkJHJlbmRlcihyZXN1bHQsIHByb3BzLCB7fSwgJCRzbG90cywgY29udGV4dCk7XG4gICAgICAgICAgICBydW5fYWxsKG9uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBBcnJheS5mcm9tKHJlc3VsdC5jc3MpLm1hcChjc3MgPT4gY3NzLmNvZGUpLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICBtYXA6IG51bGwgLy8gVE9ET1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhZDogcmVzdWx0LnRpdGxlICsgcmVzdWx0LmhlYWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgICQkcmVuZGVyXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFkZF9hdHRyaWJ1dGUobmFtZSwgdmFsdWUsIGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAoYm9vbGVhbiAmJiAhdmFsdWUpKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgcmV0dXJuIGAgJHtuYW1lfSR7dmFsdWUgPT09IHRydWUgPyAnJyA6IGA9JHt0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gSlNPTi5zdHJpbmdpZnkoZXNjYXBlKHZhbHVlKSkgOiBgXCIke3ZhbHVlfVwiYH1gfWA7XG59XG5mdW5jdGlvbiBhZGRfY2xhc3NlcyhjbGFzc2VzKSB7XG4gICAgcmV0dXJuIGNsYXNzZXMgPyBgIGNsYXNzPVwiJHtjbGFzc2VzfVwiYCA6ICcnO1xufVxuXG5mdW5jdGlvbiBiaW5kKGNvbXBvbmVudCwgbmFtZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBpbmRleCA9IGNvbXBvbmVudC4kJC5wcm9wc1tuYW1lXTtcbiAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb21wb25lbnQuJCQuYm91bmRbaW5kZXhdID0gY2FsbGJhY2s7XG4gICAgICAgIGNhbGxiYWNrKGNvbXBvbmVudC4kJC5jdHhbaW5kZXhdKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjcmVhdGVfY29tcG9uZW50KGJsb2NrKSB7XG4gICAgYmxvY2sgJiYgYmxvY2suYygpO1xufVxuZnVuY3Rpb24gY2xhaW1fY29tcG9uZW50KGJsb2NrLCBwYXJlbnRfbm9kZXMpIHtcbiAgICBibG9jayAmJiBibG9jay5sKHBhcmVudF9ub2Rlcyk7XG59XG5mdW5jdGlvbiBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCB0YXJnZXQsIGFuY2hvciwgY3VzdG9tRWxlbWVudCkge1xuICAgIGNvbnN0IHsgZnJhZ21lbnQsIG9uX21vdW50LCBvbl9kZXN0cm95LCBhZnRlcl91cGRhdGUgfSA9IGNvbXBvbmVudC4kJDtcbiAgICBmcmFnbWVudCAmJiBmcmFnbWVudC5tKHRhcmdldCwgYW5jaG9yKTtcbiAgICBpZiAoIWN1c3RvbUVsZW1lbnQpIHtcbiAgICAgICAgLy8gb25Nb3VudCBoYXBwZW5zIGJlZm9yZSB0aGUgaW5pdGlhbCBhZnRlclVwZGF0ZVxuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld19vbl9kZXN0cm95ID0gb25fbW91bnQubWFwKHJ1bikuZmlsdGVyKGlzX2Z1bmN0aW9uKTtcbiAgICAgICAgICAgIGlmIChvbl9kZXN0cm95KSB7XG4gICAgICAgICAgICAgICAgb25fZGVzdHJveS5wdXNoKC4uLm5ld19vbl9kZXN0cm95KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEVkZ2UgY2FzZSAtIGNvbXBvbmVudCB3YXMgZGVzdHJveWVkIGltbWVkaWF0ZWx5LFxuICAgICAgICAgICAgICAgIC8vIG1vc3QgbGlrZWx5IGFzIGEgcmVzdWx0IG9mIGEgYmluZGluZyBpbml0aWFsaXNpbmdcbiAgICAgICAgICAgICAgICBydW5fYWxsKG5ld19vbl9kZXN0cm95KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbXBvbmVudC4kJC5vbl9tb3VudCA9IFtdO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG59XG5mdW5jdGlvbiBkZXN0cm95X2NvbXBvbmVudChjb21wb25lbnQsIGRldGFjaGluZykge1xuICAgIGNvbnN0ICQkID0gY29tcG9uZW50LiQkO1xuICAgIGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBydW5fYWxsKCQkLm9uX2Rlc3Ryb3kpO1xuICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5kKGRldGFjaGluZyk7XG4gICAgICAgIC8vIFRPRE8gbnVsbCBvdXQgb3RoZXIgcmVmcywgaW5jbHVkaW5nIGNvbXBvbmVudC4kJCAoYnV0IG5lZWQgdG9cbiAgICAgICAgLy8gcHJlc2VydmUgZmluYWwgc3RhdGU/KVxuICAgICAgICAkJC5vbl9kZXN0cm95ID0gJCQuZnJhZ21lbnQgPSBudWxsO1xuICAgICAgICAkJC5jdHggPSBbXTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYWtlX2RpcnR5KGNvbXBvbmVudCwgaSkge1xuICAgIGlmIChjb21wb25lbnQuJCQuZGlydHlbMF0gPT09IC0xKSB7XG4gICAgICAgIGRpcnR5X2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICBzY2hlZHVsZV91cGRhdGUoKTtcbiAgICAgICAgY29tcG9uZW50LiQkLmRpcnR5LmZpbGwoMCk7XG4gICAgfVxuICAgIGNvbXBvbmVudC4kJC5kaXJ0eVsoaSAvIDMxKSB8IDBdIHw9ICgxIDw8IChpICUgMzEpKTtcbn1cbmZ1bmN0aW9uIGluaXQoY29tcG9uZW50LCBvcHRpb25zLCBpbnN0YW5jZSwgY3JlYXRlX2ZyYWdtZW50LCBub3RfZXF1YWwsIHByb3BzLCBkaXJ0eSA9IFstMV0pIHtcbiAgICBjb25zdCBwYXJlbnRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgY29uc3QgJCQgPSBjb21wb25lbnQuJCQgPSB7XG4gICAgICAgIGZyYWdtZW50OiBudWxsLFxuICAgICAgICBjdHg6IG51bGwsXG4gICAgICAgIC8vIHN0YXRlXG4gICAgICAgIHByb3BzLFxuICAgICAgICB1cGRhdGU6IG5vb3AsXG4gICAgICAgIG5vdF9lcXVhbCxcbiAgICAgICAgYm91bmQ6IGJsYW5rX29iamVjdCgpLFxuICAgICAgICAvLyBsaWZlY3ljbGVcbiAgICAgICAgb25fbW91bnQ6IFtdLFxuICAgICAgICBvbl9kZXN0cm95OiBbXSxcbiAgICAgICAgb25fZGlzY29ubmVjdDogW10sXG4gICAgICAgIGJlZm9yZV91cGRhdGU6IFtdLFxuICAgICAgICBhZnRlcl91cGRhdGU6IFtdLFxuICAgICAgICBjb250ZXh0OiBuZXcgTWFwKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBvcHRpb25zLmNvbnRleHQgfHwgW10pLFxuICAgICAgICAvLyBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgY2FsbGJhY2tzOiBibGFua19vYmplY3QoKSxcbiAgICAgICAgZGlydHksXG4gICAgICAgIHNraXBfYm91bmQ6IGZhbHNlXG4gICAgfTtcbiAgICBsZXQgcmVhZHkgPSBmYWxzZTtcbiAgICAkJC5jdHggPSBpbnN0YW5jZVxuICAgICAgICA/IGluc3RhbmNlKGNvbXBvbmVudCwgb3B0aW9ucy5wcm9wcyB8fCB7fSwgKGksIHJldCwgLi4ucmVzdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN0Lmxlbmd0aCA/IHJlc3RbMF0gOiByZXQ7XG4gICAgICAgICAgICBpZiAoJCQuY3R4ICYmIG5vdF9lcXVhbCgkJC5jdHhbaV0sICQkLmN0eFtpXSA9IHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghJCQuc2tpcF9ib3VuZCAmJiAkJC5ib3VuZFtpXSlcbiAgICAgICAgICAgICAgICAgICAgJCQuYm91bmRbaV0odmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChyZWFkeSlcbiAgICAgICAgICAgICAgICAgICAgbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSlcbiAgICAgICAgOiBbXTtcbiAgICAkJC51cGRhdGUoKTtcbiAgICByZWFkeSA9IHRydWU7XG4gICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAvLyBgZmFsc2VgIGFzIGEgc3BlY2lhbCBjYXNlIG9mIG5vIERPTSBjb21wb25lbnRcbiAgICAkJC5mcmFnbWVudCA9IGNyZWF0ZV9mcmFnbWVudCA/IGNyZWF0ZV9mcmFnbWVudCgkJC5jdHgpIDogZmFsc2U7XG4gICAgaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgICAgIGlmIChvcHRpb25zLmh5ZHJhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gY2hpbGRyZW4ob3B0aW9ucy50YXJnZXQpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50Lmwobm9kZXMpO1xuICAgICAgICAgICAgbm9kZXMuZm9yRWFjaChkZXRhY2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LmMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5pbnRybylcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oY29tcG9uZW50LiQkLmZyYWdtZW50KTtcbiAgICAgICAgbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgb3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuYW5jaG9yLCBvcHRpb25zLmN1c3RvbUVsZW1lbnQpO1xuICAgICAgICBmbHVzaCgpO1xuICAgIH1cbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG59XG5sZXQgU3ZlbHRlRWxlbWVudDtcbmlmICh0eXBlb2YgSFRNTEVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBTdmVsdGVFbGVtZW50ID0gY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgY29uc3QgeyBvbl9tb3VudCB9ID0gdGhpcy4kJDtcbiAgICAgICAgICAgIHRoaXMuJCQub25fZGlzY29ubmVjdCA9IG9uX21vdW50Lm1hcChydW4pLmZpbHRlcihpc19mdW5jdGlvbik7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy4kJC5zbG90dGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuJCQuc2xvdHRlZFtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0ciwgX29sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpc1thdHRyXSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgcnVuX2FsbCh0aGlzLiQkLm9uX2Rpc2Nvbm5lY3QpO1xuICAgICAgICB9XG4gICAgICAgICRkZXN0cm95KCkge1xuICAgICAgICAgICAgZGVzdHJveV9jb21wb25lbnQodGhpcywgMSk7XG4gICAgICAgICAgICB0aGlzLiRkZXN0cm95ID0gbm9vcDtcbiAgICAgICAgfVxuICAgICAgICAkb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIC8vIFRPRE8gc2hvdWxkIHRoaXMgZGVsZWdhdGUgdG8gYWRkRXZlbnRMaXN0ZW5lcj9cbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSkpO1xuICAgICAgICAgICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgJHNldCgkJHByb3BzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kJHNldCAmJiAhaXNfZW1wdHkoJCRwcm9wcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJCRzZXQoJCRwcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBTdmVsdGUgY29tcG9uZW50cy4gVXNlZCB3aGVuIGRldj1mYWxzZS5cbiAqL1xuY2xhc3MgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgZGVzdHJveV9jb21wb25lbnQodGhpcywgMSk7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuICAgIH1cbiAgICAkb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKSk7XG4gICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgJHNldCgkJHByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLiQkc2V0ICYmICFpc19lbXB0eSgkJHByb3BzKSkge1xuICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuJCRzZXQoJCRwcm9wcyk7XG4gICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hfZGV2KHR5cGUsIGRldGFpbCkge1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoY3VzdG9tX2V2ZW50KHR5cGUsIE9iamVjdC5hc3NpZ24oeyB2ZXJzaW9uOiAnMy4zOC4yJyB9LCBkZXRhaWwpKSk7XG59XG5mdW5jdGlvbiBhcHBlbmRfZGV2KHRhcmdldCwgbm9kZSkge1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NSW5zZXJ0JywgeyB0YXJnZXQsIG5vZGUgfSk7XG4gICAgYXBwZW5kKHRhcmdldCwgbm9kZSk7XG59XG5mdW5jdGlvbiBpbnNlcnRfZGV2KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01JbnNlcnQnLCB7IHRhcmdldCwgbm9kZSwgYW5jaG9yIH0pO1xuICAgIGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcik7XG59XG5mdW5jdGlvbiBkZXRhY2hfZGV2KG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVJlbW92ZScsIHsgbm9kZSB9KTtcbiAgICBkZXRhY2gobm9kZSk7XG59XG5mdW5jdGlvbiBkZXRhY2hfYmV0d2Vlbl9kZXYoYmVmb3JlLCBhZnRlcikge1xuICAgIHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcgJiYgYmVmb3JlLm5leHRTaWJsaW5nICE9PSBhZnRlcikge1xuICAgICAgICBkZXRhY2hfZGV2KGJlZm9yZS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoX2JlZm9yZV9kZXYoYWZ0ZXIpIHtcbiAgICB3aGlsZSAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXRhY2hfYWZ0ZXJfZGV2KGJlZm9yZSkge1xuICAgIHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgZGV0YWNoX2RldihiZWZvcmUubmV4dFNpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxpc3Rlbl9kZXYobm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMsIGhhc19wcmV2ZW50X2RlZmF1bHQsIGhhc19zdG9wX3Byb3BhZ2F0aW9uKSB7XG4gICAgY29uc3QgbW9kaWZpZXJzID0gb3B0aW9ucyA9PT0gdHJ1ZSA/IFsnY2FwdHVyZSddIDogb3B0aW9ucyA/IEFycmF5LmZyb20oT2JqZWN0LmtleXMob3B0aW9ucykpIDogW107XG4gICAgaWYgKGhhc19wcmV2ZW50X2RlZmF1bHQpXG4gICAgICAgIG1vZGlmaWVycy5wdXNoKCdwcmV2ZW50RGVmYXVsdCcpO1xuICAgIGlmIChoYXNfc3RvcF9wcm9wYWdhdGlvbilcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3N0b3BQcm9wYWdhdGlvbicpO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NQWRkRXZlbnRMaXN0ZW5lcicsIHsgbm9kZSwgZXZlbnQsIGhhbmRsZXIsIG1vZGlmaWVycyB9KTtcbiAgICBjb25zdCBkaXNwb3NlID0gbGlzdGVuKG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVJlbW92ZUV2ZW50TGlzdGVuZXInLCB7IG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBtb2RpZmllcnMgfSk7XG4gICAgICAgIGRpc3Bvc2UoKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gYXR0cl9kZXYobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgaWYgKHZhbHVlID09IG51bGwpXG4gICAgICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NUmVtb3ZlQXR0cmlidXRlJywgeyBub2RlLCBhdHRyaWJ1dGUgfSk7XG4gICAgZWxzZVxuICAgICAgICBkaXNwYXRjaF9kZXYoJ1N2ZWx0ZURPTVNldEF0dHJpYnV0ZScsIHsgbm9kZSwgYXR0cmlidXRlLCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIHByb3BfZGV2KG5vZGUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIG5vZGVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgZGlzcGF0Y2hfZGV2KCdTdmVsdGVET01TZXRQcm9wZXJ0eScsIHsgbm9kZSwgcHJvcGVydHksIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gZGF0YXNldF9kZXYobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbm9kZS5kYXRhc2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0RGF0YXNldCcsIHsgbm9kZSwgcHJvcGVydHksIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gc2V0X2RhdGFfZGV2KHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0Lndob2xlVGV4dCA9PT0gZGF0YSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGRpc3BhdGNoX2RldignU3ZlbHRlRE9NU2V0RGF0YScsIHsgbm9kZTogdGV4dCwgZGF0YSB9KTtcbiAgICB0ZXh0LmRhdGEgPSBkYXRhO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfZWFjaF9hcmd1bWVudChhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ3N0cmluZycgJiYgIShhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gYXJnKSkge1xuICAgICAgICBsZXQgbXNnID0gJ3sjZWFjaH0gb25seSBpdGVyYXRlcyBvdmVyIGFycmF5LWxpa2Ugb2JqZWN0cy4nO1xuICAgICAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBhcmcgJiYgU3ltYm9sLml0ZXJhdG9yIGluIGFyZykge1xuICAgICAgICAgICAgbXNnICs9ICcgWW91IGNhbiB1c2UgYSBzcHJlYWQgdG8gY29udmVydCB0aGlzIGl0ZXJhYmxlIGludG8gYW4gYXJyYXkuJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICB9XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9zbG90cyhuYW1lLCBzbG90LCBrZXlzKSB7XG4gICAgZm9yIChjb25zdCBzbG90X2tleSBvZiBPYmplY3Qua2V5cyhzbG90KSkge1xuICAgICAgICBpZiAoIX5rZXlzLmluZGV4T2Yoc2xvdF9rZXkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYDwke25hbWV9PiByZWNlaXZlZCBhbiB1bmV4cGVjdGVkIHNsb3QgXCIke3Nsb3Rfa2V5fVwiLmApO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBTdmVsdGUgY29tcG9uZW50cyB3aXRoIHNvbWUgbWlub3IgZGV2LWVuaGFuY2VtZW50cy4gVXNlZCB3aGVuIGRldj10cnVlLlxuICovXG5jbGFzcyBTdmVsdGVDb21wb25lbnREZXYgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zIHx8ICghb3B0aW9ucy50YXJnZXQgJiYgIW9wdGlvbnMuJCRpbmxpbmUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCIndGFyZ2V0JyBpcyBhIHJlcXVpcmVkIG9wdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIuJGRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy4kZGVzdHJveSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQ29tcG9uZW50IHdhcyBhbHJlYWR5IGRlc3Ryb3llZCcpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgJGNhcHR1cmVfc3RhdGUoKSB7IH1cbiAgICAkaW5qZWN0X3N0YXRlKCkgeyB9XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgdG8gY3JlYXRlIHN0cm9uZ2x5IHR5cGVkIFN2ZWx0ZSBjb21wb25lbnRzLlxuICogVGhpcyBvbmx5IGV4aXN0cyBmb3IgdHlwaW5nIHB1cnBvc2VzIGFuZCBzaG91bGQgYmUgdXNlZCBpbiBgLmQudHNgIGZpbGVzLlxuICpcbiAqICMjIyBFeGFtcGxlOlxuICpcbiAqIFlvdSBoYXZlIGNvbXBvbmVudCBsaWJyYXJ5IG9uIG5wbSBjYWxsZWQgYGNvbXBvbmVudC1saWJyYXJ5YCwgZnJvbSB3aGljaFxuICogeW91IGV4cG9ydCBhIGNvbXBvbmVudCBjYWxsZWQgYE15Q29tcG9uZW50YC4gRm9yIFN2ZWx0ZStUeXBlU2NyaXB0IHVzZXJzLFxuICogeW91IHdhbnQgdG8gcHJvdmlkZSB0eXBpbmdzLiBUaGVyZWZvcmUgeW91IGNyZWF0ZSBhIGBpbmRleC5kLnRzYDpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBTdmVsdGVDb21wb25lbnRUeXBlZCB9IGZyb20gXCJzdmVsdGVcIjtcbiAqIGV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudFR5cGVkPHtmb286IHN0cmluZ30+IHt9XG4gKiBgYGBcbiAqIFR5cGluZyB0aGlzIG1ha2VzIGl0IHBvc3NpYmxlIGZvciBJREVzIGxpa2UgVlMgQ29kZSB3aXRoIHRoZSBTdmVsdGUgZXh0ZW5zaW9uXG4gKiB0byBwcm92aWRlIGludGVsbGlzZW5zZSBhbmQgdG8gdXNlIHRoZSBjb21wb25lbnQgbGlrZSB0aGlzIGluIGEgU3ZlbHRlIGZpbGVcbiAqIHdpdGggVHlwZVNjcmlwdDpcbiAqIGBgYHN2ZWx0ZVxuICogPHNjcmlwdCBsYW5nPVwidHNcIj5cbiAqIFx0aW1wb3J0IHsgTXlDb21wb25lbnQgfSBmcm9tIFwiY29tcG9uZW50LWxpYnJhcnlcIjtcbiAqIDwvc2NyaXB0PlxuICogPE15Q29tcG9uZW50IGZvbz17J2Jhcid9IC8+XG4gKiBgYGBcbiAqXG4gKiAjIyMjIFdoeSBub3QgbWFrZSB0aGlzIHBhcnQgb2YgYFN2ZWx0ZUNvbXBvbmVudChEZXYpYD9cbiAqIEJlY2F1c2VcbiAqIGBgYHRzXG4gKiBjbGFzcyBBU3ViY2xhc3NPZlN2ZWx0ZUNvbXBvbmVudCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudDx7Zm9vOiBzdHJpbmd9PiB7fVxuICogY29uc3QgY29tcG9uZW50OiB0eXBlb2YgU3ZlbHRlQ29tcG9uZW50ID0gQVN1YmNsYXNzT2ZTdmVsdGVDb21wb25lbnQ7XG4gKiBgYGBcbiAqIHdpbGwgdGhyb3cgYSB0eXBlIGVycm9yLCBzbyB3ZSBuZWVkIHRvIHNlcGVyYXRlIHRoZSBtb3JlIHN0cmljdGx5IHR5cGVkIGNsYXNzLlxuICovXG5jbGFzcyBTdmVsdGVDb21wb25lbnRUeXBlZCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudERldiB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICB9XG59XG5mdW5jdGlvbiBsb29wX2d1YXJkKHRpbWVvdXQpIHtcbiAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKERhdGUubm93KCkgLSBzdGFydCA+IHRpbWVvdXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5maW5pdGUgbG9vcCBkZXRlY3RlZCcpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgSHRtbFRhZywgU3ZlbHRlQ29tcG9uZW50LCBTdmVsdGVDb21wb25lbnREZXYsIFN2ZWx0ZUNvbXBvbmVudFR5cGVkLCBTdmVsdGVFbGVtZW50LCBhY3Rpb25fZGVzdHJveWVyLCBhZGRfYXR0cmlidXRlLCBhZGRfY2xhc3NlcywgYWRkX2ZsdXNoX2NhbGxiYWNrLCBhZGRfbG9jYXRpb24sIGFkZF9yZW5kZXJfY2FsbGJhY2ssIGFkZF9yZXNpemVfbGlzdGVuZXIsIGFkZF90cmFuc2Zvcm0sIGFmdGVyVXBkYXRlLCBhcHBlbmQsIGFwcGVuZF9kZXYsIGFzc2lnbiwgYXR0ciwgYXR0cl9kZXYsIGF0dHJpYnV0ZV90b19vYmplY3QsIGJlZm9yZVVwZGF0ZSwgYmluZCwgYmluZGluZ19jYWxsYmFja3MsIGJsYW5rX29iamVjdCwgYnViYmxlLCBjaGVja19vdXRyb3MsIGNoaWxkcmVuLCBjbGFpbV9jb21wb25lbnQsIGNsYWltX2VsZW1lbnQsIGNsYWltX3NwYWNlLCBjbGFpbV90ZXh0LCBjbGVhcl9sb29wcywgY29tcG9uZW50X3N1YnNjcmliZSwgY29tcHV0ZV9yZXN0X3Byb3BzLCBjb21wdXRlX3Nsb3RzLCBjcmVhdGVFdmVudERpc3BhdGNoZXIsIGNyZWF0ZV9hbmltYXRpb24sIGNyZWF0ZV9iaWRpcmVjdGlvbmFsX3RyYW5zaXRpb24sIGNyZWF0ZV9jb21wb25lbnQsIGNyZWF0ZV9pbl90cmFuc2l0aW9uLCBjcmVhdGVfb3V0X3RyYW5zaXRpb24sIGNyZWF0ZV9zbG90LCBjcmVhdGVfc3NyX2NvbXBvbmVudCwgY3VycmVudF9jb21wb25lbnQsIGN1c3RvbV9ldmVudCwgZGF0YXNldF9kZXYsIGRlYnVnLCBkZXN0cm95X2Jsb2NrLCBkZXN0cm95X2NvbXBvbmVudCwgZGVzdHJveV9lYWNoLCBkZXRhY2gsIGRldGFjaF9hZnRlcl9kZXYsIGRldGFjaF9iZWZvcmVfZGV2LCBkZXRhY2hfYmV0d2Vlbl9kZXYsIGRldGFjaF9kZXYsIGRpcnR5X2NvbXBvbmVudHMsIGRpc3BhdGNoX2RldiwgZWFjaCwgZWxlbWVudCwgZWxlbWVudF9pcywgZW1wdHksIGVzY2FwZSwgZXNjYXBlZCwgZXhjbHVkZV9pbnRlcm5hbF9wcm9wcywgZml4X2FuZF9kZXN0cm95X2Jsb2NrLCBmaXhfYW5kX291dHJvX2FuZF9kZXN0cm95X2Jsb2NrLCBmaXhfcG9zaXRpb24sIGZsdXNoLCBnZXRDb250ZXh0LCBnZXRfYmluZGluZ19ncm91cF92YWx1ZSwgZ2V0X2N1cnJlbnRfY29tcG9uZW50LCBnZXRfY3VzdG9tX2VsZW1lbnRzX3Nsb3RzLCBnZXRfc2xvdF9jaGFuZ2VzLCBnZXRfc2xvdF9jb250ZXh0LCBnZXRfc3ByZWFkX29iamVjdCwgZ2V0X3NwcmVhZF91cGRhdGUsIGdldF9zdG9yZV92YWx1ZSwgZ2xvYmFscywgZ3JvdXBfb3V0cm9zLCBoYW5kbGVfcHJvbWlzZSwgaGFzQ29udGV4dCwgaGFzX3Byb3AsIGlkZW50aXR5LCBpbml0LCBpbnNlcnQsIGluc2VydF9kZXYsIGludHJvcywgaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIsIGlzX2NsaWVudCwgaXNfY3Jvc3NvcmlnaW4sIGlzX2VtcHR5LCBpc19mdW5jdGlvbiwgaXNfcHJvbWlzZSwgbGlzdGVuLCBsaXN0ZW5fZGV2LCBsb29wLCBsb29wX2d1YXJkLCBtaXNzaW5nX2NvbXBvbmVudCwgbW91bnRfY29tcG9uZW50LCBub29wLCBub3RfZXF1YWwsIG5vdywgbnVsbF90b19lbXB0eSwgb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllcywgb25EZXN0cm95LCBvbk1vdW50LCBvbmNlLCBvdXRyb19hbmRfZGVzdHJveV9ibG9jaywgcHJldmVudF9kZWZhdWx0LCBwcm9wX2RldiwgcXVlcnlfc2VsZWN0b3JfYWxsLCByYWYsIHJ1biwgcnVuX2FsbCwgc2FmZV9ub3RfZXF1YWwsIHNjaGVkdWxlX3VwZGF0ZSwgc2VsZWN0X211bHRpcGxlX3ZhbHVlLCBzZWxlY3Rfb3B0aW9uLCBzZWxlY3Rfb3B0aW9ucywgc2VsZWN0X3ZhbHVlLCBzZWxmLCBzZXRDb250ZXh0LCBzZXRfYXR0cmlidXRlcywgc2V0X2N1cnJlbnRfY29tcG9uZW50LCBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YSwgc2V0X2RhdGEsIHNldF9kYXRhX2Rldiwgc2V0X2lucHV0X3R5cGUsIHNldF9pbnB1dF92YWx1ZSwgc2V0X25vdywgc2V0X3JhZiwgc2V0X3N0b3JlX3ZhbHVlLCBzZXRfc3R5bGUsIHNldF9zdmdfYXR0cmlidXRlcywgc3BhY2UsIHNwcmVhZCwgc3RvcF9wcm9wYWdhdGlvbiwgc3Vic2NyaWJlLCBzdmdfZWxlbWVudCwgdGV4dCwgdGljaywgdGltZV9yYW5nZXNfdG9fYXJyYXksIHRvX251bWJlciwgdG9nZ2xlX2NsYXNzLCB0cmFuc2l0aW9uX2luLCB0cmFuc2l0aW9uX291dCwgdXBkYXRlX2F3YWl0X2Jsb2NrX2JyYW5jaCwgdXBkYXRlX2tleWVkX2VhY2gsIHVwZGF0ZV9zbG90LCB1cGRhdGVfc2xvdF9zcHJlYWQsIHZhbGlkYXRlX2NvbXBvbmVudCwgdmFsaWRhdGVfZWFjaF9hcmd1bWVudCwgdmFsaWRhdGVfZWFjaF9rZXlzLCB2YWxpZGF0ZV9zbG90cywgdmFsaWRhdGVfc3RvcmUsIHhsaW5rX2F0dHIgfTtcbiIsICJleHBvcnQgeyBpZGVudGl0eSBhcyBsaW5lYXIgfSBmcm9tICcuLi9pbnRlcm5hbC9pbmRleC5tanMnO1xuXG4vKlxuQWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0ZGVzbFxuRGlzdHJpYnV0ZWQgdW5kZXIgTUlUIExpY2Vuc2UgaHR0cHM6Ly9naXRodWIuY29tL21hdHRkZXNsL2Vhc2VzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcbiovXG5mdW5jdGlvbiBiYWNrSW5PdXQodCkge1xuICAgIGNvbnN0IHMgPSAxLjcwMTU4ICogMS41MjU7XG4gICAgaWYgKCh0ICo9IDIpIDwgMSlcbiAgICAgICAgcmV0dXJuIDAuNSAqICh0ICogdCAqICgocyArIDEpICogdCAtIHMpKTtcbiAgICByZXR1cm4gMC41ICogKCh0IC09IDIpICogdCAqICgocyArIDEpICogdCArIHMpICsgMik7XG59XG5mdW5jdGlvbiBiYWNrSW4odCkge1xuICAgIGNvbnN0IHMgPSAxLjcwMTU4O1xuICAgIHJldHVybiB0ICogdCAqICgocyArIDEpICogdCAtIHMpO1xufVxuZnVuY3Rpb24gYmFja091dCh0KSB7XG4gICAgY29uc3QgcyA9IDEuNzAxNTg7XG4gICAgcmV0dXJuIC0tdCAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDE7XG59XG5mdW5jdGlvbiBib3VuY2VPdXQodCkge1xuICAgIGNvbnN0IGEgPSA0LjAgLyAxMS4wO1xuICAgIGNvbnN0IGIgPSA4LjAgLyAxMS4wO1xuICAgIGNvbnN0IGMgPSA5LjAgLyAxMC4wO1xuICAgIGNvbnN0IGNhID0gNDM1Ni4wIC8gMzYxLjA7XG4gICAgY29uc3QgY2IgPSAzNTQ0Mi4wIC8gMTgwNS4wO1xuICAgIGNvbnN0IGNjID0gMTYwNjEuMCAvIDE4MDUuMDtcbiAgICBjb25zdCB0MiA9IHQgKiB0O1xuICAgIHJldHVybiB0IDwgYVxuICAgICAgICA/IDcuNTYyNSAqIHQyXG4gICAgICAgIDogdCA8IGJcbiAgICAgICAgICAgID8gOS4wNzUgKiB0MiAtIDkuOSAqIHQgKyAzLjRcbiAgICAgICAgICAgIDogdCA8IGNcbiAgICAgICAgICAgICAgICA/IGNhICogdDIgLSBjYiAqIHQgKyBjY1xuICAgICAgICAgICAgICAgIDogMTAuOCAqIHQgKiB0IC0gMjAuNTIgKiB0ICsgMTAuNzI7XG59XG5mdW5jdGlvbiBib3VuY2VJbk91dCh0KSB7XG4gICAgcmV0dXJuIHQgPCAwLjVcbiAgICAgICAgPyAwLjUgKiAoMS4wIC0gYm91bmNlT3V0KDEuMCAtIHQgKiAyLjApKVxuICAgICAgICA6IDAuNSAqIGJvdW5jZU91dCh0ICogMi4wIC0gMS4wKSArIDAuNTtcbn1cbmZ1bmN0aW9uIGJvdW5jZUluKHQpIHtcbiAgICByZXR1cm4gMS4wIC0gYm91bmNlT3V0KDEuMCAtIHQpO1xufVxuZnVuY3Rpb24gY2lyY0luT3V0KHQpIHtcbiAgICBpZiAoKHQgKj0gMikgPCAxKVxuICAgICAgICByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHQgKiB0KSAtIDEpO1xuICAgIHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAodCAtPSAyKSAqIHQpICsgMSk7XG59XG5mdW5jdGlvbiBjaXJjSW4odCkge1xuICAgIHJldHVybiAxLjAgLSBNYXRoLnNxcnQoMS4wIC0gdCAqIHQpO1xufVxuZnVuY3Rpb24gY2lyY091dCh0KSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCgxIC0gLS10ICogdCk7XG59XG5mdW5jdGlvbiBjdWJpY0luT3V0KHQpIHtcbiAgICByZXR1cm4gdCA8IDAuNSA/IDQuMCAqIHQgKiB0ICogdCA6IDAuNSAqIE1hdGgucG93KDIuMCAqIHQgLSAyLjAsIDMuMCkgKyAxLjA7XG59XG5mdW5jdGlvbiBjdWJpY0luKHQpIHtcbiAgICByZXR1cm4gdCAqIHQgKiB0O1xufVxuZnVuY3Rpb24gY3ViaWNPdXQodCkge1xuICAgIGNvbnN0IGYgPSB0IC0gMS4wO1xuICAgIHJldHVybiBmICogZiAqIGYgKyAxLjA7XG59XG5mdW5jdGlvbiBlbGFzdGljSW5PdXQodCkge1xuICAgIHJldHVybiB0IDwgMC41XG4gICAgICAgID8gMC41ICpcbiAgICAgICAgICAgIE1hdGguc2luKCgoKzEzLjAgKiBNYXRoLlBJKSAvIDIpICogMi4wICogdCkgKlxuICAgICAgICAgICAgTWF0aC5wb3coMi4wLCAxMC4wICogKDIuMCAqIHQgLSAxLjApKVxuICAgICAgICA6IDAuNSAqXG4gICAgICAgICAgICBNYXRoLnNpbigoKC0xMy4wICogTWF0aC5QSSkgLyAyKSAqICgyLjAgKiB0IC0gMS4wICsgMS4wKSkgKlxuICAgICAgICAgICAgTWF0aC5wb3coMi4wLCAtMTAuMCAqICgyLjAgKiB0IC0gMS4wKSkgK1xuICAgICAgICAgICAgMS4wO1xufVxuZnVuY3Rpb24gZWxhc3RpY0luKHQpIHtcbiAgICByZXR1cm4gTWF0aC5zaW4oKDEzLjAgKiB0ICogTWF0aC5QSSkgLyAyKSAqIE1hdGgucG93KDIuMCwgMTAuMCAqICh0IC0gMS4wKSk7XG59XG5mdW5jdGlvbiBlbGFzdGljT3V0KHQpIHtcbiAgICByZXR1cm4gKE1hdGguc2luKCgtMTMuMCAqICh0ICsgMS4wKSAqIE1hdGguUEkpIC8gMikgKiBNYXRoLnBvdygyLjAsIC0xMC4wICogdCkgKyAxLjApO1xufVxuZnVuY3Rpb24gZXhwb0luT3V0KHQpIHtcbiAgICByZXR1cm4gdCA9PT0gMC4wIHx8IHQgPT09IDEuMFxuICAgICAgICA/IHRcbiAgICAgICAgOiB0IDwgMC41XG4gICAgICAgICAgICA/ICswLjUgKiBNYXRoLnBvdygyLjAsIDIwLjAgKiB0IC0gMTAuMClcbiAgICAgICAgICAgIDogLTAuNSAqIE1hdGgucG93KDIuMCwgMTAuMCAtIHQgKiAyMC4wKSArIDEuMDtcbn1cbmZ1bmN0aW9uIGV4cG9Jbih0KSB7XG4gICAgcmV0dXJuIHQgPT09IDAuMCA/IHQgOiBNYXRoLnBvdygyLjAsIDEwLjAgKiAodCAtIDEuMCkpO1xufVxuZnVuY3Rpb24gZXhwb091dCh0KSB7XG4gICAgcmV0dXJuIHQgPT09IDEuMCA/IHQgOiAxLjAgLSBNYXRoLnBvdygyLjAsIC0xMC4wICogdCk7XG59XG5mdW5jdGlvbiBxdWFkSW5PdXQodCkge1xuICAgIHQgLz0gMC41O1xuICAgIGlmICh0IDwgMSlcbiAgICAgICAgcmV0dXJuIDAuNSAqIHQgKiB0O1xuICAgIHQtLTtcbiAgICByZXR1cm4gLTAuNSAqICh0ICogKHQgLSAyKSAtIDEpO1xufVxuZnVuY3Rpb24gcXVhZEluKHQpIHtcbiAgICByZXR1cm4gdCAqIHQ7XG59XG5mdW5jdGlvbiBxdWFkT3V0KHQpIHtcbiAgICByZXR1cm4gLXQgKiAodCAtIDIuMCk7XG59XG5mdW5jdGlvbiBxdWFydEluT3V0KHQpIHtcbiAgICByZXR1cm4gdCA8IDAuNVxuICAgICAgICA/ICs4LjAgKiBNYXRoLnBvdyh0LCA0LjApXG4gICAgICAgIDogLTguMCAqIE1hdGgucG93KHQgLSAxLjAsIDQuMCkgKyAxLjA7XG59XG5mdW5jdGlvbiBxdWFydEluKHQpIHtcbiAgICByZXR1cm4gTWF0aC5wb3codCwgNC4wKTtcbn1cbmZ1bmN0aW9uIHF1YXJ0T3V0KHQpIHtcbiAgICByZXR1cm4gTWF0aC5wb3codCAtIDEuMCwgMy4wKSAqICgxLjAgLSB0KSArIDEuMDtcbn1cbmZ1bmN0aW9uIHF1aW50SW5PdXQodCkge1xuICAgIGlmICgodCAqPSAyKSA8IDEpXG4gICAgICAgIHJldHVybiAwLjUgKiB0ICogdCAqIHQgKiB0ICogdDtcbiAgICByZXR1cm4gMC41ICogKCh0IC09IDIpICogdCAqIHQgKiB0ICogdCArIDIpO1xufVxuZnVuY3Rpb24gcXVpbnRJbih0KSB7XG4gICAgcmV0dXJuIHQgKiB0ICogdCAqIHQgKiB0O1xufVxuZnVuY3Rpb24gcXVpbnRPdXQodCkge1xuICAgIHJldHVybiAtLXQgKiB0ICogdCAqIHQgKiB0ICsgMTtcbn1cbmZ1bmN0aW9uIHNpbmVJbk91dCh0KSB7XG4gICAgcmV0dXJuIC0wLjUgKiAoTWF0aC5jb3MoTWF0aC5QSSAqIHQpIC0gMSk7XG59XG5mdW5jdGlvbiBzaW5lSW4odCkge1xuICAgIGNvbnN0IHYgPSBNYXRoLmNvcyh0ICogTWF0aC5QSSAqIDAuNSk7XG4gICAgaWYgKE1hdGguYWJzKHYpIDwgMWUtMTQpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIDEgLSB2O1xufVxuZnVuY3Rpb24gc2luZU91dCh0KSB7XG4gICAgcmV0dXJuIE1hdGguc2luKCh0ICogTWF0aC5QSSkgLyAyKTtcbn1cblxuZXhwb3J0IHsgYmFja0luLCBiYWNrSW5PdXQsIGJhY2tPdXQsIGJvdW5jZUluLCBib3VuY2VJbk91dCwgYm91bmNlT3V0LCBjaXJjSW4sIGNpcmNJbk91dCwgY2lyY091dCwgY3ViaWNJbiwgY3ViaWNJbk91dCwgY3ViaWNPdXQsIGVsYXN0aWNJbiwgZWxhc3RpY0luT3V0LCBlbGFzdGljT3V0LCBleHBvSW4sIGV4cG9Jbk91dCwgZXhwb091dCwgcXVhZEluLCBxdWFkSW5PdXQsIHF1YWRPdXQsIHF1YXJ0SW4sIHF1YXJ0SW5PdXQsIHF1YXJ0T3V0LCBxdWludEluLCBxdWludEluT3V0LCBxdWludE91dCwgc2luZUluLCBzaW5lSW5PdXQsIHNpbmVPdXQgfTtcbiIsICJpbXBvcnQgeyBjdWJpY0luT3V0LCBsaW5lYXIsIGN1YmljT3V0IH0gZnJvbSAnLi4vZWFzaW5nL2luZGV4Lm1qcyc7XG5pbXBvcnQgeyBpc19mdW5jdGlvbiwgYXNzaWduIH0gZnJvbSAnLi4vaW50ZXJuYWwvaW5kZXgubWpzJztcblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbmZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxuXG5mdW5jdGlvbiBibHVyKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNJbk91dCwgYW1vdW50ID0gNSwgb3BhY2l0eSA9IDAgfSA9IHt9KSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGNvbnN0IHRhcmdldF9vcGFjaXR5ID0gK3N0eWxlLm9wYWNpdHk7XG4gICAgY29uc3QgZiA9IHN0eWxlLmZpbHRlciA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS5maWx0ZXI7XG4gICAgY29uc3Qgb2QgPSB0YXJnZXRfb3BhY2l0eSAqICgxIC0gb3BhY2l0eSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogKF90LCB1KSA9PiBgb3BhY2l0eTogJHt0YXJnZXRfb3BhY2l0eSAtIChvZCAqIHUpfTsgZmlsdGVyOiAke2Z9IGJsdXIoJHt1ICogYW1vdW50fXB4KTtgXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGZhZGUobm9kZSwgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gNDAwLCBlYXNpbmcgPSBsaW5lYXIgfSA9IHt9KSB7XG4gICAgY29uc3QgbyA9ICtnZXRDb21wdXRlZFN0eWxlKG5vZGUpLm9wYWNpdHk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogdCA9PiBgb3BhY2l0eTogJHt0ICogb31gXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGZseShub2RlLCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSA0MDAsIGVhc2luZyA9IGN1YmljT3V0LCB4ID0gMCwgeSA9IDAsIG9wYWNpdHkgPSAwIH0gPSB7fSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBjb25zdCB0YXJnZXRfb3BhY2l0eSA9ICtzdHlsZS5vcGFjaXR5O1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgY29uc3Qgb2QgPSB0YXJnZXRfb3BhY2l0eSAqICgxIC0gb3BhY2l0eSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogKHQsIHUpID0+IGBcblx0XHRcdHRyYW5zZm9ybTogJHt0cmFuc2Zvcm19IHRyYW5zbGF0ZSgkeygxIC0gdCkgKiB4fXB4LCAkeygxIC0gdCkgKiB5fXB4KTtcblx0XHRcdG9wYWNpdHk6ICR7dGFyZ2V0X29wYWNpdHkgLSAob2QgKiB1KX1gXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNsaWRlKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNPdXQgfSA9IHt9KSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGNvbnN0IG9wYWNpdHkgPSArc3R5bGUub3BhY2l0eTtcbiAgICBjb25zdCBoZWlnaHQgPSBwYXJzZUZsb2F0KHN0eWxlLmhlaWdodCk7XG4gICAgY29uc3QgcGFkZGluZ190b3AgPSBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdUb3ApO1xuICAgIGNvbnN0IHBhZGRpbmdfYm90dG9tID0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nQm90dG9tKTtcbiAgICBjb25zdCBtYXJnaW5fdG9wID0gcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5Ub3ApO1xuICAgIGNvbnN0IG1hcmdpbl9ib3R0b20gPSBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpbkJvdHRvbSk7XG4gICAgY29uc3QgYm9yZGVyX3RvcF93aWR0aCA9IHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyVG9wV2lkdGgpO1xuICAgIGNvbnN0IGJvcmRlcl9ib3R0b21fd2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlckJvdHRvbVdpZHRoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBkZWxheSxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIGVhc2luZyxcbiAgICAgICAgY3NzOiB0ID0+ICdvdmVyZmxvdzogaGlkZGVuOycgK1xuICAgICAgICAgICAgYG9wYWNpdHk6ICR7TWF0aC5taW4odCAqIDIwLCAxKSAqIG9wYWNpdHl9O2AgK1xuICAgICAgICAgICAgYGhlaWdodDogJHt0ICogaGVpZ2h0fXB4O2AgK1xuICAgICAgICAgICAgYHBhZGRpbmctdG9wOiAke3QgKiBwYWRkaW5nX3RvcH1weDtgICtcbiAgICAgICAgICAgIGBwYWRkaW5nLWJvdHRvbTogJHt0ICogcGFkZGluZ19ib3R0b219cHg7YCArXG4gICAgICAgICAgICBgbWFyZ2luLXRvcDogJHt0ICogbWFyZ2luX3RvcH1weDtgICtcbiAgICAgICAgICAgIGBtYXJnaW4tYm90dG9tOiAke3QgKiBtYXJnaW5fYm90dG9tfXB4O2AgK1xuICAgICAgICAgICAgYGJvcmRlci10b3Atd2lkdGg6ICR7dCAqIGJvcmRlcl90b3Bfd2lkdGh9cHg7YCArXG4gICAgICAgICAgICBgYm9yZGVyLWJvdHRvbS13aWR0aDogJHt0ICogYm9yZGVyX2JvdHRvbV93aWR0aH1weDtgXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNjYWxlKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNPdXQsIHN0YXJ0ID0gMCwgb3BhY2l0eSA9IDAgfSA9IHt9KSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGNvbnN0IHRhcmdldF9vcGFjaXR5ID0gK3N0eWxlLm9wYWNpdHk7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IHN0eWxlLnRyYW5zZm9ybTtcbiAgICBjb25zdCBzZCA9IDEgLSBzdGFydDtcbiAgICBjb25zdCBvZCA9IHRhcmdldF9vcGFjaXR5ICogKDEgLSBvcGFjaXR5KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBkZWxheSxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIGVhc2luZyxcbiAgICAgICAgY3NzOiAoX3QsIHUpID0+IGBcblx0XHRcdHRyYW5zZm9ybTogJHt0cmFuc2Zvcm19IHNjYWxlKCR7MSAtIChzZCAqIHUpfSk7XG5cdFx0XHRvcGFjaXR5OiAke3RhcmdldF9vcGFjaXR5IC0gKG9kICogdSl9XG5cdFx0YFxuICAgIH07XG59XG5mdW5jdGlvbiBkcmF3KG5vZGUsIHsgZGVsYXkgPSAwLCBzcGVlZCwgZHVyYXRpb24sIGVhc2luZyA9IGN1YmljSW5PdXQgfSA9IHt9KSB7XG4gICAgY29uc3QgbGVuID0gbm9kZS5nZXRUb3RhbExlbmd0aCgpO1xuICAgIGlmIChkdXJhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChzcGVlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IDgwMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0gbGVuIC8gc3BlZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGR1cmF0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24obGVuKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogKHQsIHUpID0+IGBzdHJva2UtZGFzaGFycmF5OiAke3QgKiBsZW59ICR7dSAqIGxlbn1gXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyb3NzZmFkZShfYSkge1xuICAgIHZhciB7IGZhbGxiYWNrIH0gPSBfYSwgZGVmYXVsdHMgPSBfX3Jlc3QoX2EsIFtcImZhbGxiYWNrXCJdKTtcbiAgICBjb25zdCB0b19yZWNlaXZlID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHRvX3NlbmQgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gY3Jvc3NmYWRlKGZyb20sIG5vZGUsIHBhcmFtcykge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSBkID0+IE1hdGguc3FydChkKSAqIDMwLCBlYXNpbmcgPSBjdWJpY091dCB9ID0gYXNzaWduKGFzc2lnbih7fSwgZGVmYXVsdHMpLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCB0byA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGR4ID0gZnJvbS5sZWZ0IC0gdG8ubGVmdDtcbiAgICAgICAgY29uc3QgZHkgPSBmcm9tLnRvcCAtIHRvLnRvcDtcbiAgICAgICAgY29uc3QgZHcgPSBmcm9tLndpZHRoIC8gdG8ud2lkdGg7XG4gICAgICAgIGNvbnN0IGRoID0gZnJvbS5oZWlnaHQgLyB0by5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IG9wYWNpdHkgPSArc3R5bGUub3BhY2l0eTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlbGF5LFxuICAgICAgICAgICAgZHVyYXRpb246IGlzX2Z1bmN0aW9uKGR1cmF0aW9uKSA/IGR1cmF0aW9uKGQpIDogZHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmcsXG4gICAgICAgICAgICBjc3M6ICh0LCB1KSA9PiBgXG5cdFx0XHRcdG9wYWNpdHk6ICR7dCAqIG9wYWNpdHl9O1xuXHRcdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcblx0XHRcdFx0dHJhbnNmb3JtOiAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7dSAqIGR4fXB4LCR7dSAqIGR5fXB4KSBzY2FsZSgke3QgKyAoMSAtIHQpICogZHd9LCAke3QgKyAoMSAtIHQpICogZGh9KTtcblx0XHRcdGBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNpdGlvbihpdGVtcywgY291bnRlcnBhcnRzLCBpbnRybykge1xuICAgICAgICByZXR1cm4gKG5vZGUsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgaXRlbXMuc2V0KHBhcmFtcy5rZXksIHtcbiAgICAgICAgICAgICAgICByZWN0OiBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJwYXJ0cy5oYXMocGFyYW1zLmtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyByZWN0IH0gPSBjb3VudGVycGFydHMuZ2V0KHBhcmFtcy5rZXkpO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydHMuZGVsZXRlKHBhcmFtcy5rZXkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3Jvc3NmYWRlKHJlY3QsIG5vZGUsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBub2RlIGlzIGRpc2FwcGVhcmluZyBhbHRvZ2V0aGVyXG4gICAgICAgICAgICAgICAgLy8gKGkuZS4gd2Fzbid0IGNsYWltZWQgYnkgdGhlIG90aGVyIGxpc3QpXG4gICAgICAgICAgICAgICAgLy8gdGhlbiB3ZSBuZWVkIHRvIHN1cHBseSBhbiBvdXRyb1xuICAgICAgICAgICAgICAgIGl0ZW1zLmRlbGV0ZShwYXJhbXMua2V5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsbGJhY2sgJiYgZmFsbGJhY2sobm9kZSwgcGFyYW1zLCBpbnRybyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAgICB0cmFuc2l0aW9uKHRvX3NlbmQsIHRvX3JlY2VpdmUsIGZhbHNlKSxcbiAgICAgICAgdHJhbnNpdGlvbih0b19yZWNlaXZlLCB0b19zZW5kLCB0cnVlKVxuICAgIF07XG59XG5cbmV4cG9ydCB7IGJsdXIsIGNyb3NzZmFkZSwgZHJhdywgZmFkZSwgZmx5LCBzY2FsZSwgc2xpZGUgfTtcbiIsICJpbXBvcnQgeyBub29wLCBzYWZlX25vdF9lcXVhbCwgc3Vic2NyaWJlLCBydW5fYWxsLCBpc19mdW5jdGlvbiB9IGZyb20gJy4uL2ludGVybmFsL2luZGV4Lm1qcyc7XG5leHBvcnQgeyBnZXRfc3RvcmVfdmFsdWUgYXMgZ2V0IH0gZnJvbSAnLi4vaW50ZXJuYWwvaW5kZXgubWpzJztcblxuY29uc3Qgc3Vic2NyaWJlcl9xdWV1ZSA9IFtdO1xuLyoqXG4gKiBDcmVhdGVzIGEgYFJlYWRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAqIEBwYXJhbSB2YWx1ZSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge1N0YXJ0U3RvcE5vdGlmaWVyfXN0YXJ0IHN0YXJ0IGFuZCBzdG9wIG5vdGlmaWNhdGlvbnMgZm9yIHN1YnNjcmlwdGlvbnNcbiAqL1xuZnVuY3Rpb24gcmVhZGFibGUodmFsdWUsIHN0YXJ0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlOiB3cml0YWJsZSh2YWx1ZSwgc3RhcnQpLnN1YnNjcmliZVxuICAgIH07XG59XG4vKipcbiAqIENyZWF0ZSBhIGBXcml0YWJsZWAgc3RvcmUgdGhhdCBhbGxvd3MgYm90aCB1cGRhdGluZyBhbmQgcmVhZGluZyBieSBzdWJzY3JpcHRpb24uXG4gKiBAcGFyYW0geyo9fXZhbHVlIGluaXRpYWwgdmFsdWVcbiAqIEBwYXJhbSB7U3RhcnRTdG9wTm90aWZpZXI9fXN0YXJ0IHN0YXJ0IGFuZCBzdG9wIG5vdGlmaWNhdGlvbnMgZm9yIHN1YnNjcmlwdGlvbnNcbiAqL1xuZnVuY3Rpb24gd3JpdGFibGUodmFsdWUsIHN0YXJ0ID0gbm9vcCkge1xuICAgIGxldCBzdG9wO1xuICAgIGNvbnN0IHN1YnNjcmliZXJzID0gW107XG4gICAgZnVuY3Rpb24gc2V0KG5ld192YWx1ZSkge1xuICAgICAgICBpZiAoc2FmZV9ub3RfZXF1YWwodmFsdWUsIG5ld192YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3X3ZhbHVlO1xuICAgICAgICAgICAgaWYgKHN0b3ApIHsgLy8gc3RvcmUgaXMgcmVhZHlcbiAgICAgICAgICAgICAgICBjb25zdCBydW5fcXVldWUgPSAhc3Vic2NyaWJlcl9xdWV1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzID0gc3Vic2NyaWJlcnNbaV07XG4gICAgICAgICAgICAgICAgICAgIHNbMV0oKTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZS5wdXNoKHMsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bl9xdWV1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZXJfcXVldWUubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWVbaV1bMF0oc3Vic2NyaWJlcl9xdWV1ZVtpICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlKGZuKSB7XG4gICAgICAgIHNldChmbih2YWx1ZSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUocnVuLCBpbnZhbGlkYXRlID0gbm9vcCkge1xuICAgICAgICBjb25zdCBzdWJzY3JpYmVyID0gW3J1biwgaW52YWxpZGF0ZV07XG4gICAgICAgIHN1YnNjcmliZXJzLnB1c2goc3Vic2NyaWJlcik7XG4gICAgICAgIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHN0b3AgPSBzdGFydChzZXQpIHx8IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgcnVuKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3Vic2NyaWJlcnMuaW5kZXhPZihzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgICAgICAgICBzdG9wID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgc2V0LCB1cGRhdGUsIHN1YnNjcmliZSB9O1xufVxuZnVuY3Rpb24gZGVyaXZlZChzdG9yZXMsIGZuLCBpbml0aWFsX3ZhbHVlKSB7XG4gICAgY29uc3Qgc2luZ2xlID0gIUFycmF5LmlzQXJyYXkoc3RvcmVzKTtcbiAgICBjb25zdCBzdG9yZXNfYXJyYXkgPSBzaW5nbGVcbiAgICAgICAgPyBbc3RvcmVzXVxuICAgICAgICA6IHN0b3JlcztcbiAgICBjb25zdCBhdXRvID0gZm4ubGVuZ3RoIDwgMjtcbiAgICByZXR1cm4gcmVhZGFibGUoaW5pdGlhbF92YWx1ZSwgKHNldCkgPT4ge1xuICAgICAgICBsZXQgaW5pdGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgICAgICBsZXQgcGVuZGluZyA9IDA7XG4gICAgICAgIGxldCBjbGVhbnVwID0gbm9vcDtcbiAgICAgICAgY29uc3Qgc3luYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChwZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm4oc2luZ2xlID8gdmFsdWVzWzBdIDogdmFsdWVzLCBzZXQpO1xuICAgICAgICAgICAgaWYgKGF1dG8pIHtcbiAgICAgICAgICAgICAgICBzZXQocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNsZWFudXAgPSBpc19mdW5jdGlvbihyZXN1bHQpID8gcmVzdWx0IDogbm9vcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmVycyA9IHN0b3Jlc19hcnJheS5tYXAoKHN0b3JlLCBpKSA9PiBzdWJzY3JpYmUoc3RvcmUsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdmFsdWVzW2ldID0gdmFsdWU7XG4gICAgICAgICAgICBwZW5kaW5nICY9IH4oMSA8PCBpKTtcbiAgICAgICAgICAgIGlmIChpbml0ZWQpIHtcbiAgICAgICAgICAgICAgICBzeW5jKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHBlbmRpbmcgfD0gKDEgPDwgaSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgaW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgc3luYygpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgICAgIHJ1bl9hbGwodW5zdWJzY3JpYmVycyk7XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGRlcml2ZWQsIHJlYWRhYmxlLCB3cml0YWJsZSB9O1xuIiwgImltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSAnc3ZlbHRlL3N0b3JlJ1xuXG5sZXQgc2V0dGluZ1ggPSB7XG4gICAgaW5kZXg6IDEsXG4gICAgd3JhcDoge1xuICAgICAgICBpZDogJ3NsaWR5JyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHBhZGRpbmc6ICcwJyxcbiAgICAgICAgYWxpZ246ICdtaWRkbGUnLFxuICAgICAgICBhbGlnbm1hcmdpbjogNTBcbiAgICB9LFxuICAgIHNsaWRlOiB7XG4gICAgICAgIGdhcDogNTAsXG4gICAgICAgIGNsYXNzOiAnc2xpZGUnLFxuICAgICAgICB3aWR0aDogJzUwJScsXG4gICAgICAgIGhlaWdodDogJzUwJScsXG4gICAgICAgIGJhY2tpbWc6IGZhbHNlLFxuICAgICAgICBpbWdzcmNrZXk6ICdzcmMnLFxuICAgICAgICBvYmplY3RmaXQ6ICdjb3ZlcicsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB9LFxuICAgIGNvbnRyb2xzOiB7XG4gICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgIGRvdHNudW06IHRydWUsXG4gICAgICAgIGRvdHNhcnJvdzogdHJ1ZSxcbiAgICAgICAgZG90c3B1cmU6IHRydWUsXG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGtleXM6IHRydWUsXG4gICAgICAgIGRyYWc6IHRydWUsXG4gICAgICAgIHdoZWVsOiB0cnVlLFxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgICBheGlzOiAneCcsXG4gICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICBkdXJhdGlvbjogNTUwLFxuICAgICAgICBpbnRlcnNlY3Rpbmc6IGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB3cml0YWJsZShKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJzbGlkeVNldHRpbmdzXCIpKSB8fCBzZXR0aW5nWCk7XG5zZXR0aW5ncy5zdWJzY3JpYmUodmFsID0+IHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJzbGlkeVNldHRpbmdzXCIsIEpTT04uc3RyaW5naWZ5KHZhbCkpKTtcblxuZXhwb3J0IGNvbnN0IHNldCA9IHdyaXRhYmxlKHtcbiAgICBvcGVuOiBmYWxzZSxcbiAgICBpbnB1dDogZmFsc2UsXG4gICAgY2hlY2s6IGZhbHNlXG59KVxuXG5leHBvcnQgY29uc3QgY29uID0gd3JpdGFibGUoe1xuICAgIG9wZW46IGZhbHNlXG59KVxuXG5leHBvcnQgY29uc3QgaW5kZXggPSB3cml0YWJsZSg0KVxuIiwgImV4cG9ydCBjb25zdCBsb2NhbCA9IFtcbiAgICB7IGlkOiAxLCBoZWFkZXI6ICdXaGF0IGlzIFNsaWR5PycsIHRleHQ6IGA8c3Ryb25nPlNMSURZPC9zdHJvbmc+IFx1MjAxMyBzaW1wbGUgY29uZmlndXJhYmxlIGNhcm91c2VsIGNvbXBvbmVudCBvbiBTdmVsdGVKU2AsIHNyYzogJy4uL2ltZy9mYWNlLndlYnAnIH0sXG4gICAgeyBpZDogMiwgaGVhZGVyOiAnV2hhdCBpcyBTbGlkeT8nLCB0ZXh0OiBgPHN0cm9uZz5TTElEWTwvc3Ryb25nPiBcdTIwMTMgc2ltcGxlIGNvbmZpZ3VyYWJsZSBjYXJvdXNlbCBjb21wb25lbnQgb24gU3ZlbHRlSlNgLCBzcmM6ICcuLi9pbWcvcGhvdG8ud2VicCcgfSxcbiAgICB7IGlkOiAzLCBoZWFkZXI6ICdXaGF0IGlzIFNsaWR5PycsIHRleHQ6IGA8c3Ryb25nPlNMSURZPC9zdHJvbmc+IFx1MjAxMyBzaW1wbGUgY29uZmlndXJhYmxlIGNhcm91c2VsIGNvbXBvbmVudCBvbiBTdmVsdGVKU2AsIHNyYzogJy4uL2ltZy9wbGF0b25pYy53ZWJwJyB9LFxuICAgIHsgaWQ6IDQsIGhlYWRlcjogJ1doYXQgaXMgU2xpZHk/JywgdGV4dDogYDxzdHJvbmc+U0xJRFk8L3N0cm9uZz4gXHUyMDEzIHNpbXBsZSBjb25maWd1cmFibGUgY2Fyb3VzZWwgY29tcG9uZW50IG9uIFN2ZWx0ZUpTYCwgc3JjOiAnLi4vaW1nL2Rhcmsud2VicCcgfSxcbiAgICB7IGlkOiA1LCBoZWFkZXI6ICdXaGF0IGlzIFNsaWR5PycsIHRleHQ6IGA8c3Ryb25nPlNMSURZPC9zdHJvbmc+IFx1MjAxMyBzaW1wbGUgY29uZmlndXJhYmxlIGNhcm91c2VsIGNvbXBvbmVudCBvbiBTdmVsdGVKU2AsIHNyYzogJy4uL2ltZy9yZWFkaW5nLndlYnAnIH0sXG4gICAgeyBpZDogNiwgaGVhZGVyOiAnV2hhdCBpcyBTbGlkeT8nLCB0ZXh0OiBgPHN0cm9uZz5TTElEWTwvc3Ryb25nPiBcdTIwMTMgc2ltcGxlIGNvbmZpZ3VyYWJsZSBjYXJvdXNlbCBjb21wb25lbnQgb24gU3ZlbHRlSlNgLCBzcmM6ICcuLi9pbWcvbGlnaHQud2VicCcgfSxcbiAgICB7IGlkOiA3LCBoZWFkZXI6ICdXaGF0IGlzIFNsaWR5PycsIHRleHQ6IGA8c3Ryb25nPlNMSURZPC9zdHJvbmc+IFx1MjAxMyBzaW1wbGUgY29uZmlndXJhYmxlIGNhcm91c2VsIGNvbXBvbmVudCBvbiBTdmVsdGVKU2AsIHNyYzogJy4uL2ltZy9hdG9tLndlYnAnIH0sXG4gICAgeyBpZDogOCwgaGVhZGVyOiAnV2hhdCBpcyBTbGlkeT8nLCB0ZXh0OiBgPHN0cm9uZz5TTElEWTwvc3Ryb25nPiBcdTIwMTMgc2ltcGxlIGNvbmZpZ3VyYWJsZSBjYXJvdXNlbCBjb21wb25lbnQgb24gU3ZlbHRlSlNgLCBzcmM6ICcuLi9pbWcvcGhvdG8yLndlYnAnIH0sXG4gICAgeyBpZDogOSwgaGVhZGVyOiAnV2hhdCBpcyBTbGlkeT8nLCB0ZXh0OiBgPHN0cm9uZz5TTElEWTwvc3Ryb25nPiBcdTIwMTMgc2ltcGxlIGNvbmZpZ3VyYWJsZSBjYXJvdXNlbCBjb21wb25lbnQgb24gU3ZlbHRlSlNgLCBzcmM6ICcuLi9pbWcvdG9ydXMud2VicCcgfSxcbl1cblxuZXhwb3J0IGNvbnN0IHZpZGVvID0gW1xuICAgIHsgaWQ6IDEsIHR5cGU6ICd2aWRlbycsIHNyYzogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3M1SEVPbWF3Rk9BJyB9LFxuICAgIHsgaWQ6IDIsIHNyYzogJ2ltZy9waG90by5qcGcnIH0sXG4gICAgeyBpZDogMywgdHlwZTogJ3ZpZGVvJywgc3JjOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvdE5mNW9uT1lFdFknIH0sXG4gICAgeyBpZDogNCwgc3JjOiAnaW1nL2RhcmsuanBnJyB9LFxuICAgIHsgaWQ6IDUsIHR5cGU6ICd2aWRlbycsIHNyYzogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1VFalh1RDdSN2hNJyB9LFxuICAgIHsgaWQ6IDYsIHNyYzogJ2ltZy9saWdodC5qcGcnIH0sXG4gICAgeyBpZDogNywgdHlwZTogJ3ZpZGVvJywgc3JjOiAnaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzI2NTA0NTUyNScgfSxcbiAgICB7IGlkOiA4LCBzcmM6ICdpbWcvcGhvdG8yLmpwZycgfSxcbiAgICB7IGlkOiA5LCB0eXBlOiAndmlkZW8nLCBzcmM6ICdodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vMjU5NDExNTYzJyB9LFxuXVxuXG5pbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSdcbmV4cG9ydCBjb25zdCBzbGlkZXMgPSB3cml0YWJsZShbXSkiLCAiZXhwb3J0IGZ1bmN0aW9uIHJvdW5kNSh4KSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoeCAvIDUpICogNVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXRlbXNRKHEsIGkpIHtcbiAgICByZXR1cm4gaS5zbGljZSgwLCBxID09PSBpLmxlbmd0aCA/IGkubGVuZ3RoIDogcSAtIGkubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWluUShvYmopIHsgcmV0dXJuIE1hdGgubWluKC4uLm9iaikgfVxuXG5leHBvcnQgZnVuY3Rpb24gYXNwZWN0UShzcmNXaWR0aCwgc3JjSGVpZ2h0LCBtYXhXaWR0aCwgbWF4SGVpZ2h0KSB7XG4gICAgbGV0IHJhdGlvID0gTWF0aC5taW4obWF4V2lkdGggLyBzcmNXaWR0aCwgbWF4SGVpZ2h0IC8gc3JjSGVpZ2h0KTtcbiAgICByZXR1cm4geyB3aWR0aDogTWF0aC5yb3VuZChzcmNXaWR0aCAqIHJhdGlvKSwgaGVpZ2h0OiBNYXRoLnJvdW5kKHNyY0hlaWdodCAqIHJhdGlvKSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tUShtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyT2JqKG9iaiwga2V5cykge1xuICAgIGNvbnN0IG5ld29iaiA9IHt9O1xuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKG9iaikpIHtcbiAgICAgICAgaWYgKGtleXMuaW5jbHVkZXMoaykgJiYgdiAhPSBudWxsKVxuICAgICAgICAgICAgbmV3b2JqW2tdID0gdjtcbiAgICB9XG4gICAgcmV0dXJuIG5ld29iajtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RNYXAob2JqLCBmbikge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhvYmopLnJlZHVjZSgoY29iaiwgW2ssIHZdKSA9PiB7XG4gICAgICAgIGNvYmpba10gPSBmbih2KTtcbiAgICB9LCB7fSk7XG59XG5cbmNvbnN0IG9iamVjdHNNYXAgPSAob2JqLCBmbikgPT4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKG9iaikubWFwKChbaywgdl0sIGkpID0+IFtrLCBmbih2LCBrLCBpKV0pKVxuY29uc3Qgb2JqZWN0UmVkdWNlID0gKG9iaiwgdmFsdWUpID0+IE9iamVjdC52YWx1ZXMob2JqLCB2YWx1ZSkucmVkdWNlKCh0LCB7IHZhbHVlIH0pID0+IHQgKyB2YWx1ZSwgMClcbi8vIGV4cG9ydCBmdW5jdGlvbiBwcmV2KGFycikgeyBhcnIgPSBbeyAuLi5hcnJbYXJyLmxlbmd0aCAtIDFdIH0sIC4uLmFyci5zbGljZSgwLCAtMSldIH1cbi8vIGV4cG9ydCBmdW5jdGlvbiBuZXh0KGFycikgeyBhcnIgPSBbLi4uYXJyLnNsaWNlKDEpLCB7IC4uLmFyclswXSB9XSB9XG5cbmZ1bmN0aW9uIGRlYm91bmNlKGYsIG1zKSB7XG4gICAgbGV0IGlzQ29vbGRvd24gPSBmYWxzZVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzQ29vbGRvd24pIHJldHVyblxuICAgICAgICBmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgICAgaXNDb29sZG93biA9IHRydWVcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiAoaXNDb29sZG93biA9IGZhbHNlKSwgbXMpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0ludGVnZXIobnVtKSB7XG4gICAgcmV0dXJuIChudW0gXiAwKSA9PT0gbnVtXG59XG4vLyBleHBvcnQgZnVuY3Rpb24gc2xpZHkoYXJyLCBpdGVtLCBjb3VudCwgZGlzdCwgZGVsdCkge1xuLy8gICAgIGlmIChjb3VudCA9PT0gaXRlbSkge1xuLy8gICAgICAgICByZXR1cm5cbi8vICAgICB9IGVsc2UgaWYgKGNvdW50ID4gaXRlbSkge1xuLy8gICAgICAgICBkaXN0ID0gZGVsdCAqIGl0ZW1cbi8vICAgICAgICAgYXJyID0gWy4uLmFyci5zbGljZSgxKSwgeyAuLi5hcnJbMF0gfV1cbi8vICAgICB9IGVsc2UgaWYgKGNvdW50IDwgaXRlbSkge1xuLy8gICAgICAgICBkaXN0ID0gZGVsdCAqIGl0ZW1cbi8vICAgICAgICAgYXJyID0gW3sgLi4uYXJyW2Fyci5sZW5ndGggLSAxXSB9LCAuLi5hcnIuc2xpY2UoMCwgLTEpXVxuLy8gICAgIH1cbi8vICAgICBjb3VudCA9IGl0ZW1cbi8vIH1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHJlc2l6ZShpbWcsIG1heGgsIG1heHcpIHtcbi8vICAgICBsZXQgcmF0aW8gPSBtYXhoIC8gbWF4dztcbi8vICAgICBpZiAoaW1nLmhlaWdodCAvIGltZy53aWR0aCA+IHJhdGlvKSB7XG4vLyAgICAgICAgIC8vIGhlaWdodCBpcyB0aGUgcHJvYmxlbVxuLy8gICAgICAgICBpZiAoaW1nLmhlaWdodCA+IG1heGgpIHtcbi8vICAgICAgICAgICAgIGltZy53aWR0aCA9IE1hdGgucm91bmQoaW1nLndpZHRoICogKG1heGggLyBpbWcuaGVpZ2h0KSk7XG4vLyAgICAgICAgICAgICBpbWcuaGVpZ2h0ID0gbWF4aDtcbi8vICAgICAgICAgfVxuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIC8vIHdpZHRoIGlzIHRoZSBwcm9ibGVtXG4vLyAgICAgICAgIGlmIChpbWcud2lkdGggPiBtYXhoKSB7XG4vLyAgICAgICAgICAgICBpbWcuaGVpZ2h0ID0gTWF0aC5yb3VuZChpbWcuaGVpZ2h0ICogKG1heHcgLyBpbWcud2lkdGgpKTtcbi8vICAgICAgICAgICAgIGltZy53aWR0aCA9IG1heHc7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9O1xuXG4vLyBmdW5jdGlvbiBnY2QgKGEsIGIpIHtcbi8vICAgICByZXR1cm4gKGIgPT0gMCkgPyBhIDogZ2NkIChiLCBhJWIpO1xuLy8gfVxuLy8gdmFyIHcgPSBzY3JlZW4ud2lkdGg7XG4vLyB2YXIgaCA9IHNjcmVlbi5oZWlnaHQ7XG4vLyB2YXIgciA9IGdjZCAodywgaCk7XG4vLyBkb2N1bWVudC53cml0ZSAoXCI8cHJlPlwiKTtcbi8vIGRvY3VtZW50LndyaXRlIChcIkRpbWVuc2lvbnMgPSBcIiwgdywgXCIgeCBcIiwgaCwgXCI8YnI+XCIpO1xuLy8gZG9jdW1lbnQud3JpdGUgKFwiR2NkICAgICAgICA9IFwiLCByLCBcIjxicj5cIik7XG4vLyBkb2N1bWVudC53cml0ZSAoXCJBc3BlY3QgICAgID0gXCIsIHcvciwgXCI6XCIsIGgvcik7XG4vLyBkb2N1bWVudC53cml0ZSAoXCI8L3ByZT5cIik7XG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludGVnZXIobWluLCBtYXgpIHtcbi8vICAgICBsZXQgcmFuZCA9IG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4ICsgMSAtIG1pbik7XG4vLyAgICAgcmV0dXJuIE1hdGguZmxvb3IocmFuZCk7XG4vLyB9XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnRlZ2VyKG1pbiwgbWF4KSB7XG4vLyAgICAgbGV0IHJhbmQgPSBtaW4gLSAwLjUgKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpO1xuLy8gICAgIHJldHVybiBNYXRoLnJvdW5kKHJhbmQpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBkaWZmKGExLCBhMikge1xuLy8gICAgIHJldHVybiBhMS5maWx0ZXIoKGkpID0+ICFhMi5pbmNsdWRlcyhpKSkuY29uY2F0KGEyLmZpbHRlcigoaSkgPT4gIWExLmluY2x1ZGVzKGkpKSlcbi8vIH1cbi8vIGZ1bmN0aW9uIHJlcGxhY2VJKGExLCBhMikge1xuLy8gICAgIHJldHVybiBhMS5tYXAoKG4pID0+IGEyW25dKVxuLy8gfVxuLy8gZnVuY3Rpb24gcmVwbGFjZVYoYTEsIGEyLCB2YWwpIHtcbi8vICAgICBhMS5tYXAoKG4pID0+IHtcbi8vICAgICAgICAgcmV0dXJuIHsgLi4ubiwgdmFsOiBhMltuXS52YWwgfVxuLy8gICAgIH0pXG4vLyB9IiwgImltcG9ydCB7IGFzcGVjdFEgfSBmcm9tICcuLi91dGlscy91dGlscy5qcydcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBob3RvcyhsaW1pdCwgcGFnZSkge1xuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3BpY3N1bS5waG90b3MvdjIvbGlzdD9saW1pdD0ke2xpbWl0fSZwYWdlPSR7cGFnZX1gKTtcbi8vICAgICByZXR1cm4gcmVzLmpzb24oKTtcbi8vIH1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBob3RvcyhsaW1pdCwgcGFnZSwgd2lkdGggPSAxMjgwLCBoZWlnaHQgPSA4MDApIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3YyL2xpc3Q/bGltaXQ9JHtsaW1pdH0mcGFnZT0ke3BhZ2V9YCk7XG4gICAgbGV0IGl0ID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIGxldCBkYXQgPSBpdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGFzcGVjdCA9IGFzcGVjdFEoaXRlbS53aWR0aCwgaXRlbS5oZWlnaHQsIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIGxldCBkYXRhID0geyAuLi5pdGVtLCBzcmM6IGBodHRwczovL3BpY3N1bS5waG90b3MvaWQvJHtpdGVtLmlkfS8ke2FzcGVjdC53aWR0aH0vJHthc3BlY3QuaGVpZ2h0fS5qcGdgLCB3aWR0aDogYXNwZWN0LndpZHRoLCBoZWlnaHQ6IGFzcGVjdC5oZWlnaHQgfVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgIH0pO1xuICAgIHJldHVybiBkYXRcbn0iLCAiPHNjcmlwdD5cbiAgICBleHBvcnQgbGV0IGlkID0gJycsXG4gICAgICAgIHN0eWxlID0gJycsXG4gICAgICAgIG9wZW4gPSBmYWxzZSxcbiAgICAgICAgY2hlY2sgPSBmYWxzZVxuPC9zY3JpcHQ+XG5cbjxidXR0b24gaWQ9XCJ7aWR9XCIgY2xhc3M6b3BlbiBjbGFzczpjaGVjayBvbjpjbGlja3xzdG9wUHJvcGFnYXRpb24gc3R5bGU9XCJ7c3R5bGV9XCI+XG4gICAgPHNsb3QgLz5cbjwvYnV0dG9uPlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgei1pbmRleDogMTAwMDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItYWN0aXZlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1hY3RpdmUpO1xuICBvdXRsaW5lOiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjUwbXMsIGNvbG9yIDI1MG1zLCBib3JkZXItY29sb3IgMjUwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbi5vcGVuIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY3RpdmUpO1xufVxuXG5idXR0b24uY2hlY2sge1xuICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG59PC9zdHlsZT5cbiIsICJleHBvcnQgZnVuY3Rpb24gY2xpY2tvdXQobm9kZSkge1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgICAgICBpZiAoIW5vZGUuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICBub2RlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjbGlja291dCcpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveSgpIHtcbiAgICAgICAgICAgIC8vIHRoZSBub2RlIGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljaylcbiAgICAgICAgfVxuICAgIH07XG59ICIsICI8c2NyaXB0PlxuICAgIGltcG9ydCB7IGZseSB9IGZyb20gJ3N2ZWx0ZS90cmFuc2l0aW9uJztcbiAgICBpbXBvcnQgeyBzZXR0aW5ncywgY29uLCBpbmRleCB9IGZyb20gJ0BzZXR0aW5ncyc7XG4gICAgaW1wb3J0IHsgY2xpY2tvdXQgfSBmcm9tICdAYWN0JztcbiAgICBpbXBvcnQgeyBzbGlkZXMgfSBmcm9tICdAaXRlbXMnO1xuICAgIGltcG9ydCB7IFN2ZyB9IGZyb20gJ0BjbXAnO1xuXG4gICAgbGV0IHBsYXkgPSBmYWxzZSxcbiAgICAgICAgcGxheWR1cmF0aW9uID0gNTUwLFxuICAgICAgICB0aW1lclBsYXk7XG4gICAgZnVuY3Rpb24gc2xpZHlQbGF5KCkge1xuICAgICAgICBpZiAodGltZXJQbGF5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyUGxheSk7XG4gICAgICAgIH1cbiAgICAgICAgdGltZXJQbGF5ID0gc2V0SW50ZXJ2YWwoKCkgPT4gJGluZGV4KyssIHBsYXlkdXJhdGlvbik7XG4gICAgfVxuICAgICQ6IGlmICgkc2xpZGVzKSAoISRzZXR0aW5ncy5vcHRpb25zLmxvb3AgJiYgJGluZGV4ID49ICRzbGlkZXMubGVuZ3RoIC0gMSkgfHwgKCEkc2V0dGluZ3Mub3B0aW9ucy5sb29wICYmICRpbmRleCA8PSAwKSA/IChwbGF5ID0gZmFsc2UpIDogbnVsbDtcbiAgICAkOiBwbGF5ICYmICRjb24ub3BlbiA/IHNsaWR5UGxheSgpIDogY2xlYXJJbnRlcnZhbCh0aW1lclBsYXkpO1xuXG4gICAgZnVuY3Rpb24gb25LZXlkb3duKGUpIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICRjb24ub3BlbiA9ICEkY29uLm9wZW47XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN2ZWx0ZTp3aW5kb3cgb246a2V5ZG93bj17JGNvbi5vcGVuID8gb25LZXlkb3duIDogbnVsbH0gLz5cblxuPHNlY3Rpb24gaWQ9XCJjb250cm9sc1wiIHVzZTpjbGlja291dCBvbjpjbGlja291dD17KCkgPT4gKCRjb24ub3BlbiA9IGZhbHNlKX0gdHJhbnNpdGlvbjpmbHk9e3sgeDogLTM1MCwgZHVyYXRpb246IDM1MCB9fT5cbiAgICA8aDI+Q29udHJvbHM8L2gyPlxuICAgIDxoMz5Hb3RvIDxzdHJvbmc+eyRpbmRleH08L3N0cm9uZz4gaW5kZXg8L2gzPlxuICAgIDxsYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9eyRzbGlkZXMubGVuZ3RoIC0gMX0gc3RlcD1cIjFcIiBiaW5kOnZhbHVlPXskaW5kZXh9IC8+XG4gICAgPC9sYWJlbD5cbiAgICA8aDM+QnV0dG9uczwvaDM+XG4gICAgPG5hdiBpZD1cInNsaWR5LWNvbnRyb2xzXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJzbGlkeS1leHQtY29udHJvbHNcIiBvbjpjbGljaz17KCkgPT4gJGluZGV4LS19PlxuICAgICAgICAgICAgPFN2ZyBuYW1lPVwic2xpZHktYmFja1wiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2xpZHktZXh0LWNvbnRyb2xzXCIgY2xhc3M6cGxheSBvbjpjbGljaz17KCkgPT4gKHBsYXkgPSAhcGxheSl9PlxuICAgICAgICAgICAgeyNpZiBwbGF5fVxuICAgICAgICAgICAgICAgIDxTdmcgbmFtZT1cInNsaWR5LXBhdXNlXCIgLz5cbiAgICAgICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgICAgICA8U3ZnIG5hbWU9XCJzbGlkeS1wbGF5XCIgLz5cbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2xpZHktZXh0LWNvbnRyb2xzXCIgb246Y2xpY2s9eygpID0+ICRpbmRleCsrfT5cbiAgICAgICAgICAgIDxTdmcgbmFtZT1cInNsaWR5LWZvcndhcmRcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L25hdj5cbiAgICA8aDM+RG90czwvaDM+XG4gICAgPG5hdiBpZD1cImRvdHNcIj5cbiAgICAgICAgPGJ1dHRvbiBvbjpjbGljaz17KCkgPT4gJGluZGV4LS19PiYjODU5Mjs8L2J1dHRvbj5cbiAgICAgICAgeyNlYWNoICRzbGlkZXMgYXMgZG90LCBpfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzczphY3RpdmU9e2kgPT09ICRpbmRleH0gb246Y2xpY2s9eygpID0+ICgkaW5kZXggPSBpKX0gc3R5bGU9XCItLWltZ2JhY2s6IHVybCgne2RvdC5zcmMgPyBkb3Quc3JjIDogZG90LmRvd25sb2FkX3VybH0nKVwiIC8+XG4gICAgICAgIHsvZWFjaH1cbiAgICAgICAgPGJ1dHRvbiBvbjpjbGljaz17KCkgPT4gJGluZGV4Kyt9PiYjODU5NDs8L2J1dHRvbj5cbiAgICA8L25hdj5cbiAgICA8aDM+VGh1bWJzPC9oMz5cbiAgICA8bmF2IGlkPVwidGh1bWJzXCI+XG4gICAgICAgIHsjZWFjaCAkc2xpZGVzIGFzIHRodW1iLCBpfVxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCh7dGh1bWIuc3JjID8gdGh1bWIuc3JjIDogdGh1bWIuZG93bmxvYWRfdXJsfSlcIiBjbGFzczphY3RpdmU9e2kgPT09ICRpbmRleH0gb246Y2xpY2s9eygpID0+ICgkaW5kZXggPSBpKX0+e3RodW1iLmlkfTwvYnV0dG9uPlxuICAgICAgICB7L2VhY2h9XG4gICAgPC9uYXY+XG48L3NlY3Rpb24+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPiNjb250cm9scyB7XG4gIGhlaWdodDogODBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMCAycmVtIDJyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk2KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNoYWRvdzogMCAyOHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAvKiBJRSBhbmQgRWRnZSAqL1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIC8qIEZpcmVmb3ggKi9cbn1cbiNjb250cm9sczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuI2NvbnRyb2xzIGgyLFxuI2NvbnRyb2xzIGgzIHtcbiAgY29sb3I6ICMyYzMzM2E7XG59XG4jY29udHJvbHMgaDIgc3Ryb25nLFxuI2NvbnRyb2xzIGgzIHN0cm9uZyB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuOmdsb2JhbChpbnB1dFt0eXBlPVwicmFuZ2VcIl0pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbjpnbG9iYWwoaW5wdXRbdHlwZT1cInJhbmdlXCJdKTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbjpnbG9iYWwoaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotd2Via2l0LXNsaWRlci10aHVtYiksXG46Z2xvYmFsKGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LW1vei1yYW5nZS10aHVtYiksXG46Z2xvYmFsKGlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2spIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgYm9yZGVyOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cblxuOmdsb2JhbChpbnB1dFt0eXBlPVwicmFuZ2VcIl06Oi13ZWJraXQtc2xpZGVyLXRodW1iKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGJvcmRlcjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG5cbiNzbGlkeS1jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMTAwcHg7XG59XG4jc2xpZHktY29udHJvbHMgLnNsaWR5LWV4dC1jb250cm9scyB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogcmVkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI3NsaWR5LWNvbnRyb2xzIC5zbGlkeS1leHQtY29udHJvbHM6YWN0aXZlIHtcbiAgY29sb3I6IGJsdWU7XG59XG4jc2xpZHktY29udHJvbHMgLnNsaWR5LWV4dC1jb250cm9scy5wbGF5IHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbiN0aHVtYnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG4jdGh1bWJzIGJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgd2lkdGg6IDc4cHg7XG4gIGhlaWdodDogNzhweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgY29sb3I6IHdoaXRlO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxKSBvcGFjaXR5KDAuMTgpO1xuICB0cmFuc2l0aW9uOiBmaWx0ZXIgNTUwbXM7XG4gIHdpbGwtY2hhbmdlOiBmaWx0ZXI7XG4gIG91dGxpbmU6IDA7XG59XG4jdGh1bWJzIGJ1dHRvbi5hY3RpdmUge1xuICBjb2xvcjogcmVkO1xufVxuI3RodW1icyBidXR0b24uYWN0aXZlLCAjdGh1bWJzIGJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDApIG9wYWNpdHkoMSk7XG59XG5cbiNkb3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbn1cbiNkb3RzIGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogcmVkO1xuICB3aWR0aDogOXB4O1xuICBoZWlnaHQ6IDlweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMjUwLCB0cmFuc2Zvcm0gMjUwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wOSk7XG4gIG91dGxpbmU6IDA7XG59XG4jZG90cyBidXR0b246Zmlyc3Qtb2YtdHlwZSwgI2RvdHMgYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG59XG4jZG90cyBidXR0b246YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiBjZW50ZXIgdmFyKC0taW1nYmFjaykgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogNzhweDtcbiAgaGVpZ2h0OiA3OHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogLTM1cHg7XG4gIGJvdHRvbTogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzUwbXMsIHRyYW5zZm9ybSAzNTBtcztcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4jZG90cyBidXR0b246aG92ZXIsICNkb3RzIGJ1dHRvbjpmb2N1cyB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG4jZG90cyBidXR0b246aG92ZXI6Zmlyc3Qtb2YtdHlwZSwgI2RvdHMgYnV0dG9uOmhvdmVyOmxhc3Qtb2YtdHlwZSwgI2RvdHMgYnV0dG9uOmZvY3VzOmZpcnN0LW9mLXR5cGUsICNkb3RzIGJ1dHRvbjpmb2N1czpsYXN0LW9mLXR5cGUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuI2RvdHMgYnV0dG9uOmhvdmVyOmFmdGVyLCAjZG90cyBidXR0b246Zm9jdXM6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTUlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTUlKTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbiNkb3RzIGJ1dHRvbi5hY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG4jZG90cyBidXR0b24uYWN0aXZlOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHRyYW5zbGF0ZSgwLCA0MCUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KSB0cmFuc2xhdGUoMCwgNDAlKTtcbn08L3N0eWxlPlxuIiwgIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgc2V0dGluZ3MgfSBmcm9tIFwiQHNldHRpbmdzXCI7XG5cbiAgICBsZXQgYWxpZ24gPSAxLFxuICAgICAgICBhbGlnbnZhbHMgPSBbXCJzdGFydFwiLCBcIm1pZGRsZVwiLCBcImVuZFwiXTtcblxuICAgICQ6IHN3aXRjaCAoYWxpZ24pIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgJHNldHRpbmdzLndyYXAuYWxpZ24gPSBcInN0YXJ0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgJHNldHRpbmdzLndyYXAuYWxpZ24gPSBcIm1pZGRsZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICRzZXR0aW5ncy53cmFwLmFsaWduID0gXCJlbmRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgJHNldHRpbmdzLndyYXAuYWxpZ24gPSBcIm1pZGRsZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxuYXYgaWQ9XCJzbGlkeS1jb250cm9scy1ib3R0b21cIj5cbiAgICA8bGFiZWwgaWQ9XCJzbGlkeS1hbGlnblwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyNlYWNoIGFsaWdudmFscyBhcyB2YWwsIGl9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M6YWN0aXZlPXtpID09PSBhbGlnbn0gb246Y2xpY2s9eygpID0+IChhbGlnbiA9IGkpfT57dmFsfTwvc3Bhbj5cbiAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMlwiIHN0ZXA9XCIxXCIgYmluZDp2YWx1ZT17YWxpZ259IC8+XG4gICAgPC9sYWJlbD5cbjwvbmF2PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj4jc2xpZHktY29udHJvbHMtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm90dG9tOiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbn1cbiNzbGlkeS1jb250cm9scy1ib3R0b20gI3NsaWR5LWFsaWduIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxODBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuI3NsaWR5LWNvbnRyb2xzLWJvdHRvbSAjc2xpZHktYWxpZ24gZGl2IHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jc2xpZHktY29udHJvbHMtYm90dG9tICNzbGlkeS1hbGlnbiBkaXYgc3Bhbi5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0tY29sb3ItYWN0aXZlKTtcbn1cbiNzbGlkeS1jb250cm9scy1ib3R0b20gI3NsaWR5LWFsaWduIGlucHV0W3R5cGU9cmFuZ2VdIHtcbiAgd2lkdGg6IDE4MHB4O1xufVxuI3NsaWR5LWNvbnRyb2xzLWJvdHRvbSAjc2xpZHktYWxpZ24gaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iLCAjc2xpZHktY29udHJvbHMtYm90dG9tICNzbGlkeS1hbGlnbiBpbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10aHVtYiwgI3NsaWR5LWNvbnRyb2xzLWJvdHRvbSAjc2xpZHktYWxpZ24gaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB2YXIoLS1jb2xvci1hY3RpdmUpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogLTEwMHB4O1xuICB0b3A6IC0xMDBweDtcbn1cblxuaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB2YXIoLS1jb2xvci1hY3RpdmUpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn08L3N0eWxlPlxuIiwgIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgc2V0dGluZ3MsIGluZGV4IH0gZnJvbSBcIkBzZXR0aW5nc1wiO1xuICAgIGltcG9ydCB7IHNsaWRlcyB9IGZyb20gXCJAaXRlbXNcIjtcbjwvc2NyaXB0PlxuXG48bmF2IGlkPVwidGh1bWJzXCIgY2xhc3M6YXhpc3g9eyRzZXR0aW5ncy5vcHRpb25zLmF4aXMgIT09IFwieVwifT5cbiAgICB7I2VhY2ggJHNsaWRlcyBhcyBkb3QsIGkgKGRvdC5pZCl9XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKHtkb3Quc3JjXG4gICAgICAgICAgICAgICAgPyBkb3Quc3JjXG4gICAgICAgICAgICAgICAgOiBkb3QuZG93bmxvYWRfdXJsfSlcIlxuICAgICAgICAgICAgY2xhc3M6YWN0aXZlPXtpID09PSAkaW5kZXh9XG4gICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gKCRpbmRleCA9IGkpfVxuICAgICAgICAvPlxuICAgIHsvZWFjaH1cbjwvbmF2PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj4jdGh1bWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG59XG4jdGh1bWJzIGJ1dHRvbiB7XG4gIGZsZXg6IDE7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxKSBvcGFjaXR5KDAuMTgpO1xuICB0cmFuc2l0aW9uOiBmaWx0ZXIgNTUwbXM7XG4gIHdpbGwtY2hhbmdlOiBmaWx0ZXI7XG4gIG91dGxpbmU6IDA7XG59XG4jdGh1bWJzIGJ1dHRvbi5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0tY29sb3ItYWN0aXZlKTtcbn1cbiN0aHVtYnMgYnV0dG9uLmFjdGl2ZSwgI3RodW1icyBidXR0b246aG92ZXIge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgwKSBvcGFjaXR5KDEpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYWN0aXZlKTtcbn1cbiN0aHVtYnMuYXhpc3gge1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwcHg7XG4gIHotaW5kZXg6IDE7XG4gIHJpZ2h0OiAwO1xufTwvc3R5bGU+XG4iLCAiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBzZXR0aW5ncywgaW5kZXggfSBmcm9tIFwiQHNldHRpbmdzXCI7XG4gICAgaW1wb3J0IHsgc2xpZGVzIH0gZnJvbSBcIkBpdGVtc1wiO1xuICAgIGltcG9ydCB7IHJhbmRvbVEgfSBmcm9tIFwiQHV0aWxzXCI7XG4gICAgaW1wb3J0IHsgU3ZnIH0gZnJvbSBcIkBjbXBcIjtcblxuICAgIGV4cG9ydCBsZXQgbGltaXQgPSA5LFxuICAgICAgICBwYWdlID0gMjU7XG5cbiAgICBsZXQgcGxheSA9IGZhbHNlLFxuICAgICAgICBwbGF5ZHVyYXRpb24gPSA1NTAsXG4gICAgICAgIHRpbWVyUGxheTtcbiAgICBmdW5jdGlvbiBzbGlkeVBsYXkoKSB7XG4gICAgICAgIGlmICh0aW1lclBsYXkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJQbGF5KTtcbiAgICAgICAgfVxuICAgICAgICB0aW1lclBsYXkgPSBzZXRJbnRlcnZhbCgoKSA9PiAkaW5kZXgrKywgcGxheWR1cmF0aW9uKTtcbiAgICB9XG4gICAgJDogaWYgKCRzbGlkZXMpXG4gICAgICAgICghJHNldHRpbmdzLm9wdGlvbnMubG9vcCAmJiAkaW5kZXggPj0gJHNsaWRlcy5sZW5ndGggLSAxKSB8fFxuICAgICAgICAoISRzZXR0aW5ncy5vcHRpb25zLmxvb3AgJiYgJGluZGV4IDw9IDApXG4gICAgICAgICAgICA/IChwbGF5ID0gZmFsc2UpXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgJDogcGxheSA/IHNsaWR5UGxheSgpIDogY2xlYXJJbnRlcnZhbCh0aW1lclBsYXkpO1xuPC9zY3JpcHQ+XG5cbjxuYXYgaWQ9XCJzbGlkeS1jb250cm9sc1wiPlxuICAgIDxkaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwic2xpZHktZXh0LWNvbnRyb2xzXCJcbiAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiAoJHNldHRpbmdzLm9wdGlvbnMubG9vcCA9ICEkc2V0dGluZ3Mub3B0aW9ucy5sb29wKX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPFN2Z1xuICAgICAgICAgICAgICAgIG5hbWU9XCJzbGlkeS1yZXBlYXRcIlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInNjYWxlKDAuNjkpXCJcbiAgICAgICAgICAgICAgICBjb2xvcj17JHNldHRpbmdzLm9wdGlvbnMubG9vcCA/IFwiYmx1ZVwiIDogXCJ3aGl0ZVwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJzbGlkeS1leHQtY29udHJvbHNcIiBvbjpjbGljaz17KCkgPT4gJGluZGV4LS19PlxuICAgICAgICAgICAgPFN2ZyBuYW1lPVwic2xpZHktYmFja1wiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cInNsaWR5LWV4dC1jb250cm9sc1wiXG4gICAgICAgICAgICBjbGFzczpwbGF5XG4gICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gKHBsYXkgPSAhcGxheSl9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxTdmcgbmFtZT17cGxheSA/IFwic2xpZHktcGF1c2VcIiA6IFwic2xpZHktcGxheVwifSAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNsaWR5LWV4dC1jb250cm9sc1wiIG9uOmNsaWNrPXsoKSA9PiAkaW5kZXgrK30+XG4gICAgICAgICAgICA8U3ZnIG5hbWU9XCJzbGlkeS1mb3J3YXJkXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwic2xpZHktZXh0LWNvbnRyb2xzXCJcbiAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICgkc2V0dGluZ3Mub3B0aW9ucy5pbnRlcnNlY3RpbmcgPVxuICAgICAgICAgICAgICAgICAgICAhJHNldHRpbmdzLm9wdGlvbnMuaW50ZXJzZWN0aW5nKX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPFN2Z1xuICAgICAgICAgICAgICAgIG5hbWU9eyEkc2V0dGluZ3Mub3B0aW9ucy5pbnRlcnNlY3RpbmdcbiAgICAgICAgICAgICAgICAgICAgPyBcInNsaWR5LWV5ZS1vZmZcIlxuICAgICAgICAgICAgICAgICAgICA6IFwic2xpZHktZXllXCJ9XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwic2NhbGUoMC42OSlcIlxuICAgICAgICAgICAgICAgIGNvbG9yPXskc2V0dGluZ3Mub3B0aW9ucy5pbnRlcnNlY3RpbmcgPyBcImJsdWVcIiA6IFwid2hpdGVcIn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8IS0tIDxidXR0b24gY2xhc3M9XCJzbGlkeS1leHQtY29udHJvbHNcIiBvbjpjbGljaz1cIntvYnNlcnZlckNvbm5lY3R9XCI+IE9CU0VSVkUgPC9idXR0b24+IC0tPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJzbGlkeS1leHQtY29udHJvbHNcIiBvbjpjbGljaz17KCkgPT4gbGltaXQtLX0+XG4gICAgICAgICAgICA8U3ZnIG5hbWU9XCJzbGlkeS1taW5lc1wiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cInNsaWR5LWV4dC1jb250cm9sc1wiXG4gICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gKHBhZ2UgPSByYW5kb21RKDAsIDk2KSl9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxTdmcgbmFtZT1cInNsaWR5LXJlZnJlc2hcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNsaWR5LWV4dC1jb250cm9sc1wiIG9uOmNsaWNrPXsoKSA9PiBsaW1pdCsrfT5cbiAgICAgICAgICAgIDxTdmcgbmFtZT1cInNsaWR5LXBsdXNcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbjwvbmF2PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj4jc2xpZHktY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMTAwcHg7XG59XG4jc2xpZHktY29udHJvbHMgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4jc2xpZHktY29udHJvbHMgLnNsaWR5LWV4dC1jb250cm9scyB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYWN0aXZlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNzbGlkeS1jb250cm9scyAuc2xpZHktZXh0LWNvbnRyb2xzOmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xufVxuI3NsaWR5LWNvbnRyb2xzIC5zbGlkeS1leHQtY29udHJvbHMucGxheSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xufTwvc3R5bGU+XG4iLCAiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBmbHkgfSBmcm9tIFwic3ZlbHRlL3RyYW5zaXRpb25cIjtcbiAgICBpbXBvcnQgeyBzZXR0aW5ncywgc2V0IH0gZnJvbSBcIkBzZXR0aW5nc1wiO1xuICAgIGltcG9ydCB7IGNsaWNrb3V0IH0gZnJvbSBcIkBhY3RcIjtcblxuICAgIGxldCB0ZXh0ID0gSlNPTi5zdHJpbmdpZnkoJHNldHRpbmdzLCAwLCAyKTtcblxuICAgICQ6ICRzZXQuY2hlY2sgJiYgc2V0U2V0dGluZ3MoKTtcblxuICAgIGZ1bmN0aW9uIG9uS2V5ZG93bihlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoJHNldC5pbnB1dCkge1xuICAgICAgICAgICAgICAgICRzZXQuY2hlY2sgPSAhJHNldC5jaGVjaztcbiAgICAgICAgICAgICAgICAkc2V0LmlucHV0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJHNldC5jaGVjayA9ICEkc2V0LmNoZWNrO1xuICAgICAgICAgICAgJHNldC5pbnB1dCA9IGZhbHNlO1xuICAgICAgICAgICAgJHNldC5vcGVuID0gISRzZXQub3BlbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFNldHRpbmdzKCkge1xuICAgICAgICAkc2V0dGluZ3MgPSBKU09OLnBhcnNlKHRleHQpO1xuICAgICAgICAkc2V0LmNoZWNrID0gISRzZXQuY2hlY2s7XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6d2luZG93IG9uOmtleWRvd249eyRzZXQub3BlbiA/IG9uS2V5ZG93biA6IG51bGx9IC8+XG5cbjxzZWN0aW9uXG4gICAgaWQ9XCJzZXR0aW5nc1wiXG4gICAgdXNlOmNsaWNrb3V0XG4gICAgb246Y2xpY2tvdXQ9eygpID0+ICgkc2V0Lm9wZW4gPSBmYWxzZSl9XG4gICAgdHJhbnNpdGlvbjpmbHk9e3sgeDogMzUwLCBkdXJhdGlvbjogMzUwIH19XG4+XG4gICAgPGgyPlNldHRpbmdzPC9oMj5cbiAgICA8cHJlPlxuICAgICAgICA8Y29kZVxuICAgICAgICAgICAgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiXG4gICAgICAgICAgICBiaW5kOnRleHRDb250ZW50PVwie3RleHR9XCJcbiAgICAgICAgICAgIG9uOmlucHV0PVwieygpID0+ICgkc2V0LmlucHV0ID0gdHJ1ZSl9XCJcbiAgICAgICAgPjwvY29kZT5cbiAgICA8L3ByZT5cbjwvc2VjdGlvbj5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+I3NldHRpbmdzIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMCAycmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Nik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMjhweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG4jc2V0dGluZ3MgaDIge1xuICBjb2xvcjogIzJjMzMzYTtcbn1cbiNzZXR0aW5ncyBwcmUge1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuI3NldHRpbmdzIHByZSBjb2RlIHtcbiAgY29sb3I6ICMyYzMzM2E7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG59XG4jc2V0dGluZ3MgcHJlIGNvZGU6Oi1tb3otc2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogeWVsbG93O1xufVxuI3NldHRpbmdzIHByZSBjb2RlOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG59PC9zdHlsZT5cbiIsICI8c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgc2l6ZSA9IDc1O1xuICAgIGV4cG9ydCBsZXQgc3BlZWQgPSA1NTA7XG4gICAgZXhwb3J0IGxldCBjb2xvciA9IFwicmVkXCI7XG4gICAgZXhwb3J0IGxldCB0aGlja25lc3MgPSAxO1xuICAgIGV4cG9ydCBsZXQgZ2FwID0gMjU7XG4gICAgZXhwb3J0IGxldCByYWRpdXMgPSAxMDtcblxuICAgICQ6IGRhc2ggPSAoMiAqIE1hdGguUEkgKiByYWRpdXMgKiAoMTAwIC0gZ2FwKSkgLyAxMDA7XG48L3NjcmlwdD5cblxuPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICBzdHlsZT1cImFuaW1hdGlvbi1kdXJhdGlvbjp7c3BlZWR9bXM7XCJcbiAgICBjbGFzcz1cInN2ZWx0ZS1zcGlubmVyXCJcbiAgICB2aWV3Ym94PVwiMCAwIDMyIDMyXCI+XG4gICAgPGNpcmNsZVxuICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgY3g9XCIxNlwiXG4gICAgICAgIGN5PVwiMTZcIlxuICAgICAgICByPXtyYWRpdXN9XG4gICAgICAgIHN0cm9rZT17Y29sb3J9XG4gICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPXt0aGlja25lc3N9XG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk9XCJ7ZGFzaH0sMTAwXCJcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgLz5cbjwvc3ZnPlxuXG48c3R5bGU+LnN2ZWx0ZS1zcGlubmVyIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICBhbmltYXRpb24tbmFtZTogc3ZlbHRlLXNwaW5uZXJfaW5maW5pdGUtc3BpbjtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG5Aa2V5ZnJhbWVzIHN2ZWx0ZS1zcGlubmVyX2luZmluaXRlLXNwaW4ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufTwvc3R5bGU+XG4iLCAiPHNjcmlwdD5cbiAgICBsZXQgc2l6ZSA9IDUwLFxuICAgICAgICB0aGlja25lc3MgPSAzLFxuICAgICAgICBzcGVlZCA9IDIwMDA7XG48L3NjcmlwdD5cblxuPHN2ZyBjbGFzcz1cInNwaW5uZXJcIiB2aWV3Qm94PVwiMCAwIDUwIDUwXCIgd2lkdGg9e3NpemV9IGhlaWdodD17c2l6ZX0gc3R5bGU9XCItLXNwZWVkOiB7c3BlZWR9bXNcIj5cbiAgICA8Y2lyY2xlIGNsYXNzPVwicGF0aFwiIGN4PVwiMjVcIiBjeT1cIjI1XCIgcj1cIjIwXCIgZmlsbD1cIm5vbmVcIiBzdHJva2Utd2lkdGg9e3RoaWNrbmVzc30gLz5cbjwvc3ZnPlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj4uc3Bpbm5lciB7XG4gIGFuaW1hdGlvbjogcm90YXRlIHZhcigtLXNwZWVkKSBsaW5lYXIgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGUgdmFyKC0tc3BlZWQpIGxpbmVhciBpbmZpbml0ZTtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW46IC0zNXB4IDAgMCAtMzVweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbn1cbi5zcGlubmVyIC5wYXRoIHtcbiAgc3Ryb2tlOiByZWQ7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgYW5pbWF0aW9uOiBkYXNoIGNhbGModmFyKC0tc3BlZWQpIC8gMS4zMykgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBkYXNoIGNhbGModmFyKC0tc3BlZWQpIC8gMS4zMykgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBkYXNoIHtcbiAgMCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDE1MDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxuICA1MCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNTtcbiAgfVxuICAxMDAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwgMTUwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTI0O1xuICB9XG59PC9zdHlsZT5cbiIsICI8c2NyaXB0PlxuXHRleHBvcnQgbGV0IG5hbWUgPSBcIlwiO1xuXHRleHBvcnQgbGV0IHRyYW5zZm9ybSA9IFwiXCI7XG5cdGV4cG9ydCBsZXQgY29sb3IgPSBcImN1cnJlbnRDb2xvclwiO1xuPC9zY3JpcHQ+XG5cbjxzdmdcblx0Y2xhc3M9XCJmZWF0aGVyXCJcblx0c3R5bGU9XCItLXRyYW5zZm9ybToge3RyYW5zZm9ybX07IC0tc3Ryb2tlOiB7Y29sb3J9XCJcblx0b246Y2xpY2s+XG5cdHsjaWYgbmFtZSA9PT0gXCJzbGlkeS1jaGV2cm9uLWxlZnRcIn1cblx0XHQ8cG9seWxpbmUgcG9pbnRzPVwiMTUgMTggOSAxMiAxNSA2XCIgLz5cblx0ezplbHNlIGlmIG5hbWUgPT09IFwic2xpZHktY2hldnJvbi1yaWdodFwifVxuXHRcdDxwb2x5bGluZSBwb2ludHM9XCI5IDE4IDE1IDEyIDkgNlwiIC8+XG5cdHs6ZWxzZSBpZiBuYW1lID09PSBcInNsaWR5LWFycm93LWxlZnRcIn1cblx0XHQ8bGluZSB4MT1cIjE5XCIgeTE9XCIxMlwiIHgyPVwiNVwiIHkyPVwiMTJcIiAvPlxuXHRcdDxwb2x5bGluZSBwb2ludHM9XCIxMiAxOSA1IDEyIDEyIDVcIiAvPlxuXHR7OmVsc2UgaWYgbmFtZSA9PT0gXCJzbGlkeS1hcnJvdy1yaWdodFwifVxuXHRcdDxsaW5lIHgxPVwiNVwiIHkxPVwiMTJcIiB4Mj1cIjE5XCIgeTI9XCIxMlwiIC8+XG5cdFx0PHBvbHlsaW5lIHBvaW50cz1cIjEyIDUgMTkgMTIgMTIgMTlcIiAvPlxuXHR7OmVsc2UgaWYgbmFtZSA9PT0gXCJzbGlkeS1zbGlkZXJzXCJ9XG5cdFx0PGxpbmUgeDE9XCI0XCIgeTE9XCIyMVwiIHgyPVwiNFwiIHkyPVwiMTRcIiAvPlxuXHRcdDxsaW5lIHgxPVwiNFwiIHkxPVwiMTBcIiB4Mj1cIjRcIiB5Mj1cIjNcIiAvPlxuXHRcdDxsaW5lIHgxPVwiMTJcIiB5MT1cIjIxXCIgeDI9XCIxMlwiIHkyPVwiMTJcIiAvPlxuXHRcdDxsaW5lIHgxPVwiMTJcIiB5MT1cIjhcIiB4Mj1cIjEyXCIgeTI9XCIzXCIgLz5cblx0XHQ8bGluZSB4MT1cIjIwXCIgeTE9XCIyMVwiIHgyPVwiMjBcIiB5Mj1cIjE2XCIgLz5cblx0XHQ8bGluZSB4MT1cIjIwXCIgeTE9XCIxMlwiIHgyPVwiMjBcIiB5Mj1cIjNcIiAvPlxuXHRcdDxsaW5lIHgxPVwiMVwiIHkxPVwiMTRcIiB4Mj1cIjdcIiB5Mj1cIjE0XCIgLz5cblx0XHQ8bGluZSB4MT1cIjlcIiB5MT1cIjhcIiB4Mj1cIjE1XCIgeTI9XCI4XCIgLz5cblx0XHQ8bGluZSB4MT1cIjE3XCIgeTE9XCIxNlwiIHgyPVwiMjNcIiB5Mj1cIjE2XCIgLz5cblx0ezplbHNlIGlmIG5hbWUgPT09IFwic2xpZHktY2hlY2tcIn1cblx0XHQ8cG9seWxpbmUgcG9pbnRzPVwiMjAgNiA5IDE3IDQgMTJcIiAvPlxuXHR7OmVsc2UgaWYgbmFtZSA9PT0gXCJzbGlkeS14XCJ9XG5cdFx0PGxpbmUgeDE9XCIxOFwiIHkxPVwiNlwiIHgyPVwiNlwiIHkyPVwiMThcIiAvPlxuXHRcdDxsaW5lIHgxPVwiNlwiIHkxPVwiNlwiIHgyPVwiMThcIiB5Mj1cIjE4XCIgLz5cblx0ezplbHNlIGlmIG5hbWUgPT09IFwic2xpZHktZm9yd2FyZFwifVxuXHRcdDxwb2x5Z29uIHBvaW50cz1cIjEzIDE5IDIyIDEyIDEzIDUgMTMgMTlcIiAvPlxuXHRcdDxwb2x5Z29uIHBvaW50cz1cIjIgMTkgMTEgMTIgMiA1IDIgMTlcIiAvPlxuXHR7OmVsc2UgaWYgbmFtZSA9PT0gXCJzbGlkeS1wYXVzZVwifVxuXHRcdDxyZWN0IHg9XCI2XCIgeT1cIjRcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCIxNlwiIC8+XG5cdFx0PHJlY3QgeD1cIjE0XCIgeT1cIjRcIiB3aWR0aD1cIjRcIiBoZWlnaHQ9XCIxNlwiIC8+XG5cdHs6ZWxzZSBpZiBuYW1lID09PSBcInNsaWR5LXBsYXlcIn1cblx0XHQ8cG9seWdvbiBwb2ludHM9XCI1IDMgMTkgMTIgNSAyMSA1IDNcIiAvPlxuXHR7OmVsc2UgaWYgbmFtZSA9PT0gXCJzbGlkeS1iYWNrXCJ9XG5cdFx0PHBvbHlnb24gcG9pbnRzPVwiMTEgMTkgMiAxMiAxMSA1IDExIDE5XCIgLz5cblx0XHQ8cG9seWdvbiBwb2ludHM9XCIyMiAxOSAxMyAxMiAyMiA1IDIyIDE5XCIgLz5cblx0ezplbHNlIGlmIG5hbWUgPT09IFwic2xpZHktcm90YXRlLWNjd1wifVxuXHRcdDxwb2x5bGluZSBwb2ludHM9XCIxIDQgMSAxMCA3IDEwXCIgLz5cblx0XHQ8cGF0aCBkPVwiTTMuNTEgMTVhOSA5IDAgMSAwIDIuMTMtOS4zNkwxIDEwXCIgLz5cblx0ezplbHNlIGlmIG5hbWUgPT09IFwic2xpZHktcm90YXRlLWN3XCJ9XG5cdFx0PHBvbHlsaW5lIHBvaW50cz1cIjIzIDQgMjMgMTAgMTcgMTBcIiAvPlxuXHRcdDxwYXRoIGQ9XCJNMjAuNDkgMTVhOSA5IDAgMSAxLTIuMTItOS4zNkwyMyAxMFwiIC8+XG5cdHs6ZWxzZSBpZiBuYW1lID09PSBcInNsaWR5LXJlcGVhdFwifVxuXHRcdDxwb2x5bGluZSBwb2ludHM9XCIxNyAxIDIxIDUgMTcgOVwiIC8+XG5cdFx0PHBhdGggZD1cIk0zIDExVjlhNCA0IDAgMCAxIDQtNGgxNFwiIC8+XG5cdFx0PHBvbHlsaW5lIHBvaW50cz1cIjcgMjMgMyAxOSA3IDE1XCIgLz5cblx0XHQ8cGF0aCBkPVwiTTIxIDEzdjJhNCA0IDAgMCAxLTQgNEgzXCIgLz5cblx0ezplbHNlIGlmIG5hbWUgPT09IFwic2xpZHktc2h1ZmZsZVwifVxuXHRcdDxwb2x5bGluZSBwb2ludHM9XCIxNiAzIDIxIDMgMjEgOFwiIC8+XG5cdFx0PGxpbmUgeDE9XCI0XCIgeTE9XCIyMFwiIHgyPVwiMjFcIiB5Mj1cIjNcIiAvPlxuXHRcdDxwb2x5bGluZSBwb2ludHM9XCIyMSAxNiAyMSAyMSAxNiAyMVwiIC8+XG5cdFx0PGxpbmUgeDE9XCIxNVwiIHkxPVwiMTVcIiB4Mj1cIjIxXCIgeTI9XCIyMVwiIC8+XG5cdFx0PGxpbmUgeDE9XCI0XCIgeTE9XCI0XCIgeDI9XCI5XCIgeTI9XCI5XCIgLz5cblx0ezplbHNlIGlmIG5hbWUgPT09IFwic2xpZHktcGx1c1wifVxuXHRcdDxsaW5lIHgxPVwiMTJcIiB5MT1cIjVcIiB4Mj1cIjEyXCIgeTI9XCIxOVwiIC8+XG5cdFx0PGxpbmUgeDE9XCI1XCIgeTE9XCIxMlwiIHgyPVwiMTlcIiB5Mj1cIjEyXCIgLz5cblx0ezplbHNlIGlmIG5hbWUgPT09IFwic2xpZHktbWluZXNcIn1cblx0XHQ8bGluZSB4MT1cIjVcIiB5MT1cIjEyXCIgeDI9XCIxOVwiIHkyPVwiMTJcIiAvPlxuXHR7OmVsc2UgaWYgbmFtZSA9PT0gXCJzbGlkeS1yZWZyZXNoXCJ9XG5cdFx0PHBvbHlsaW5lIHBvaW50cz1cIjEgNCAxIDEwIDcgMTBcIiAvPlxuXHRcdDxwb2x5bGluZSBwb2ludHM9XCIyMyAyMCAyMyAxNCAxNyAxNFwiIC8+XG5cdFx0PHBhdGhcblx0XHRcdGQ9XCJNMjAuNDkgOUE5IDkgMCAwIDAgNS42NCA1LjY0TDEgMTBtMjIgNGwtNC42NCA0LjM2QTkgOSAwIDAgMSAzLjUxIDE1XCJcblx0XHQvPlxuXHR7OmVsc2UgaWYgbmFtZSA9PT0gXCJzbGlkeS1leWVcIn1cblx0XHQ8cGF0aCBkPVwiTTEgMTJzNC04IDExLTggMTEgOCAxMSA4LTQgOC0xMSA4LTExLTgtMTEtOHpcIiAvPlxuXHRcdDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiM1wiIC8+XG5cdHs6ZWxzZSBpZiBuYW1lID09PSBcInNsaWR5LWV5ZS1vZmZcIn1cblx0XHQ8cGF0aFxuXHRcdFx0ZD1cIk0xNy45NCAxNy45NEExMC4wNyAxMC4wNyAwIDAgMSAxMiAyMGMtNyAwLTExLTgtMTEtOGExOC40NSAxOC40NSAwIDAgMSA1LjA2LTUuOTRNOS45IDQuMjRBOS4xMiA5LjEyIDAgMCAxIDEyIDRjNyAwIDExIDggMTEgOGExOC41IDE4LjUgMCAwIDEtMi4xNiAzLjE5bS02LjcyLTEuMDdhMyAzIDAgMSAxLTQuMjQtNC4yNFwiXG5cdFx0Lz5cblx0XHQ8bGluZSB4MT1cIjFcIiB5MT1cIjFcIiB4Mj1cIjIzXCIgeTI9XCIyM1wiIC8+XG5cdHs6ZWxzZSBpZiBuYW1lID09PSBcImdpdGh1YlwifVxuXHRcdDxwYXRoXG5cdFx0XHRkPVwiTTEyIC4yOTdjLTYuNjMgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAzIDMuNDM4IDkuOCA4LjIwNSAxMS4zODUuNi4xMTMuODItLjI1OC44Mi0uNTc3IDAtLjI4NS0uMDEtMS4wNC0uMDE1LTIuMDQtMy4zMzguNzI0LTQuMDQyLTEuNjEtNC4wNDItMS42MUM0LjQyMiAxOC4wNyAzLjYzMyAxNy43IDMuNjMzIDE3LjdjLTEuMDg3LS43NDQuMDg0LS43MjkuMDg0LS43MjkgMS4yMDUuMDg0IDEuODM4IDEuMjM2IDEuODM4IDEuMjM2IDEuMDcgMS44MzUgMi44MDkgMS4zMDUgMy40OTUuOTk4LjEwOC0uNzc2LjQxNy0xLjMwNS43Ni0xLjYwNS0yLjY2NS0uMy01LjQ2Ni0xLjMzMi01LjQ2Ni01LjkzIDAtMS4zMS40NjUtMi4zOCAxLjIzNS0zLjIyLS4xMzUtLjMwMy0uNTQtMS41MjMuMTA1LTMuMTc2IDAgMCAxLjAwNS0uMzIyIDMuMyAxLjIzLjk2LS4yNjcgMS45OC0uMzk5IDMtLjQwNSAxLjAyLjAwNiAyLjA0LjEzOCAzIC40MDUgMi4yOC0xLjU1MiAzLjI4NS0xLjIzIDMuMjg1LTEuMjMuNjQ1IDEuNjUzLjI0IDIuODczLjEyIDMuMTc2Ljc2NS44NCAxLjIzIDEuOTEgMS4yMyAzLjIyIDAgNC42MS0yLjgwNSA1LjYyNS01LjQ3NSA1LjkyLjQyLjM2LjgxIDEuMDk2LjgxIDIuMjIgMCAxLjYwNi0uMDE1IDIuODk2LS4wMTUgMy4yODYgMCAuMzE1LjIxLjY5LjgyNS41N0MyMC41NjUgMjIuMDkyIDI0IDE3LjU5MiAyNCAxMi4yOTdjMC02LjYyNy01LjM3My0xMi0xMi0xMlwiXG5cdFx0Lz5cblx0ezplbHNlfVxuXHRcdDxzbG90IC8+XG5cdHsvaWZ9XG48L3N2Zz5cblxuPHN0eWxlPi5mZWF0aGVyIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgc3Ryb2tlOiB2YXIoLS1zdHJva2UpO1xuICBzdHJva2Utd2lkdGg6IDI7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgZmlsbDogbm9uZTtcbiAgdHJhbnNmb3JtOiB2YXIoLS10cmFuc2Zvcm0pO1xufTwvc3R5bGU+XG4iLCAiZXhwb3J0IGZ1bmN0aW9uIHBhbm5hYmxlKG5vZGUpIHtcbiAgICBjb25zdCBldmVudEhhbmRsZXJPcHRpb25zID0geyBwYXNzaXZlOiBmYWxzZSB9O1xuICAgIGxldCB4ID0gMCwgeSA9IDBcblxuICAgIGZ1bmN0aW9uIHVuaWZ5KGUpIHsgcmV0dXJuIGUuY2hhbmdlZFRvdWNoZXMgPyBlLmNoYW5nZWRUb3VjaGVzWzBdIDogZSB9O1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlTW91c2Vkb3duKGUpIHtcbiAgICAgICAgeCA9IHVuaWZ5KGUpLmNsaWVudFg7XG4gICAgICAgIHkgPSB1bmlmeShlKS5jbGllbnRZO1xuXG4gICAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3BhbnN0YXJ0Jywge1xuICAgICAgICAgICAgZGV0YWlsOiB7IHgsIHkgfVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlbW92ZSwgZXZlbnRIYW5kbGVyT3B0aW9ucyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlTW91c2V1cCwgZXZlbnRIYW5kbGVyT3B0aW9ucyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVNb3VzZW1vdmUsIGV2ZW50SGFuZGxlck9wdGlvbnMpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVNb3VzZXVwLCBldmVudEhhbmRsZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZW1vdmUoZSkge1xuICAgICAgICBjb25zdCBkeCA9IHVuaWZ5KGUpLmNsaWVudFggLSB4O1xuICAgICAgICBjb25zdCBkeSA9IHVuaWZ5KGUpLmNsaWVudFkgLSB5O1xuICAgICAgICB4ID0gdW5pZnkoZSkuY2xpZW50WDtcbiAgICAgICAgeSA9IHVuaWZ5KGUpLmNsaWVudFk7XG4gICAgICAgIC8vIGlmIChkeCAhPT0gMCkge1xuICAgICAgICAvLyBcdGUucHJldmVudERlZmF1bHQgPyBlLnByZXZlbnREZWZhdWx0KCkgOiAoZS5yZXR1cm5WYWx1ZSA9IGZhbHNlKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3Bhbm1vdmUnLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHsgeCwgeSwgZHgsIGR5IH1cbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNldXAoZSkge1xuICAgICAgICB4ID0gdW5pZnkoZSkuY2xpZW50WDtcbiAgICAgICAgeSA9IHVuaWZ5KGUpLmNsaWVudFk7XG5cbiAgICAgICAgbm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncGFuZW5kJywge1xuICAgICAgICAgICAgZGV0YWlsOiB7IHgsIHkgfVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlbW92ZSwgZXZlbnRIYW5kbGVyT3B0aW9ucyk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlTW91c2V1cCwgZXZlbnRIYW5kbGVyT3B0aW9ucyk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVNb3VzZW1vdmUsIGV2ZW50SGFuZGxlck9wdGlvbnMpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVNb3VzZXVwLCBldmVudEhhbmRsZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZU1vdXNlZG93biwgZXZlbnRIYW5kbGVyT3B0aW9ucyk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlTW91c2Vkb3duLCBldmVudEhhbmRsZXJPcHRpb25zKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZU1vdXNlZG93biwgZXZlbnRIYW5kbGVyT3B0aW9ucyk7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVNb3VzZWRvd24sIGV2ZW50SGFuZGxlck9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2l6ZShub2RlKSB7XG4gICAgbGV0IENSXG4gICAgbGV0IEVUXG5cbiAgICBjb25zdCBybyA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgZm9yIChsZXQgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgICAgICAgQ1IgPSBlbnRyeS5jb250ZW50UmVjdFxuICAgICAgICAgICAgRVQgPSBlbnRyeS50YXJnZXRcbiAgICAgICAgfVxuICAgICAgICBub2RlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdyZXNpemUnLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHsgQ1IsIEVUIH1cbiAgICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgcm8ub2JzZXJ2ZShub2RlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICByby5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aGVlbChub2RlKSB7XG4gICAgbGV0IGR4ID0gMCwgZHkgPSAwXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVXaGVlbChlKSB7XG4gICAgICAgIGlmICgobmF2aWdhdG9yLnBsYXRmb3JtLmluZGV4T2YoJ1dpbicpID4gLTEpICYmIGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIGR4ID0gZS5kZWx0YVk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkeCA9IGUuZGVsdGFYICogMS41O1xuICAgICAgICAgICAgZHkgPSBlLmRlbHRhWSAqIDEuNTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZHggIT09IDApIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQgPyBlLnByZXZlbnREZWZhdWx0KCkgOiAoZS5yZXR1cm5WYWx1ZSA9IGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd3aGVlbHMnLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHsgZHgsIGR5IH1cbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVXaGVlbCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGFuZGxlV2hlZWwpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG4iLCAiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyB0aWNrIH0gZnJvbSBcInN2ZWx0ZVwiO1xuICAgIGltcG9ydCAqIGFzIGFjdGlvbiBmcm9tIFwiLi9hY3Rpb25zLmpzXCI7XG5cbiAgICBleHBvcnQgbGV0IHNsaWRlcyA9IFtdLFxuICAgICAgICBrZXlFeHRyYWN0b3IgPSAoaXRlbSwgaSkgPT4gaXRlbS5pZCB8fCBpLFxuICAgICAgICB3cmFwID0ge1xuICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiNTAlXCIsXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjBcIixcbiAgICAgICAgICAgIGFsaWduOiBcIm1pZGRsZVwiLFxuICAgICAgICAgICAgYWxpZ25tYXJnaW46IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHNsaWRlID0ge1xuICAgICAgICAgICAgZ2FwOiAwLFxuICAgICAgICAgICAgY2xhc3M6IFwiXCIsXG4gICAgICAgICAgICB3aWR0aDogXCI1MCVcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICBiYWNraW1nOiBmYWxzZSxcbiAgICAgICAgICAgIGltZ3NyY2tleTogXCJzcmNcIixcbiAgICAgICAgICAgIG9iamVjdGZpdDogXCJjb3ZlclwiLFxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRyb2xzID0ge1xuICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIGRvdHNudW06IHRydWUsXG4gICAgICAgICAgICBkb3RzYXJyb3c6IHRydWUsXG4gICAgICAgICAgICBkb3RzcHVyZTogZmFsc2UsXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBrZXlzOiB0cnVlLFxuICAgICAgICAgICAgZHJhZzogdHJ1ZSxcbiAgICAgICAgICAgIHdoZWVsOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgYXhpczogXCJ4XCIsXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgZHVyYXRpb246IDQ1MCxcbiAgICAgICAgfSxcbiAgICAgICAgaW5kZXggPSBNYXRoLmZsb29yKHNsaWRlcy5sZW5ndGggLyAyKSxcbiAgICAgICAgc2xpZHlpbml0ID0gZmFsc2UsXG4gICAgICAgIHRpbWVvdXQgPSAwO1xuXG4gICAgLy8gSU5JVCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgJDogcmVuZGVyICYmIHNsaWR5SW5pdChzbGlkZXMpO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gc2xpZHlJbml0KCkge1xuICAgICAgICBpZiAoc2xpZGVzKSB7XG4gICAgICAgICAgICBzbGlkZXMgPSBkb3RzID0gc2xpZGVzLm1hcCgocywgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGl4OiBpLCAuLi5zIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRpbWVvdXRcbiAgICAgICAgICAgICAgICA/IHNldFRpbWVvdXQoKCkgPT4gKHNsaWR5aW5pdCA9IHRydWUpLCB0aW1lb3V0KVxuICAgICAgICAgICAgICAgIDogdGljaygpLnRoZW4oKCkgPT4gKHNsaWR5aW5pdCA9IHRydWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNJWkVTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGxldCBub2RlcyA9IFtdLFxuICAgICAgICBkb3RzID0gW10sXG4gICAgICAgIGVsID0ge30sXG4gICAgICAgIGFpeCA9IDA7XG4gICAgJDogbm9kZXMgPSBub2Rlcy5maWx0ZXIoQm9vbGVhbik7XG4gICAgJDogcmVuZGVyID1cbiAgICAgICAgbm9kZXMubGVuZ3RoICE9PSAwICYmXG4gICAgICAgIHNsaWRlcy5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgbm9kZXMubGVuZ3RoID09PSBzbGlkZXMubGVuZ3RoO1xuXG4gICAgJDogcmVuZGVyICYmIHNsaWR5U2l6ZXMocG9zLCBpbmRleCk7XG5cbiAgICBmdW5jdGlvbiBzbGlkeVNpemVzKCkge1xuICAgICAgICBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgICBhaXggPSBvcHRpb25zLmxvb3AgPyBNYXRoLmZsb29yKHNsaWRlcy5sZW5ndGggLyAyKSA6IGluZGV4O1xuICAgICAgICAgICAgZWwgPSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGU6IHNsaWRlc1thaXhdLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogbm9kZXNbYWl4XS5vZmZzZXRXaWR0aCArIHNsaWRlLmdhcCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBub2Rlc1thaXhdLm9mZnNldEhlaWdodCArIHNsaWRlLmdhcCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZpcnN0OiB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGU6IHNsaWRlc1swXSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG5vZGVzWzBdLm9mZnNldFdpZHRoICsgc2xpZGUuZ2FwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IG5vZGVzWzBdLm9mZnNldEhlaWdodCArIHNsaWRlLmdhcCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxhc3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogc2xpZGVzW3NsaWRlcy5sZW5ndGggLSAxXSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG5vZGVzW3NsaWRlcy5sZW5ndGggLSAxXS5vZmZzZXRXaWR0aCArIHNsaWRlLmdhcCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBub2Rlc1tzbGlkZXMubGVuZ3RoIC0gMV0ub2Zmc2V0SGVpZ2h0ICsgc2xpZGUuZ2FwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYmVmb3JlOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBub2Rlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoYSwgaSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIDwgaW5kZXggPyBhLm9mZnNldFdpZHRoICsgc2xpZGUuZ2FwIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgocCwgdikgPT4gcCArIHYpLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IG5vZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChhLCBpKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPCBpbmRleCA/IGEub2Zmc2V0SGVpZ2h0ICsgc2xpZGUuZ2FwIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgocCwgdikgPT4gcCArIHYpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWZ0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG5vZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChhLCBpKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPiBpbmRleCA/IGEub2Zmc2V0V2lkdGggKyBzbGlkZS5nYXAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChwLCB2KSA9PiBwICsgdiksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGEsIGkpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA+IGluZGV4ID8gYS5vZmZzZXRIZWlnaHQgKyBzbGlkZS5nYXAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChwLCB2KSA9PiBwICsgdiksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgc2l6ZSA9IHt9LFxuICAgICAgICBkaWZmID0ge307XG5cbiAgICAkOiBheGlzeSA9IG9wdGlvbnMuYXhpcyA9PT0gXCJ5XCI7XG5cbiAgICAkOiByZW5kZXIgJiYgc2xpZHlNYXRjaChlbCk7XG5cbiAgICBmdW5jdGlvbiBzbGlkeU1hdGNoKCkge1xuICAgICAgICBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgICBzaXplID0ge1xuICAgICAgICAgICAgICAgIGZpcnN0OiBheGlzeSA/IGVsLmZpcnN0LmhlaWdodCA6IGVsLmZpcnN0LndpZHRoLFxuICAgICAgICAgICAgICAgIGxhc3Q6IGF4aXN5ID8gZWwubGFzdC5oZWlnaHQgOiBlbC5sYXN0LndpZHRoLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogYXhpc3kgPyBlbC5hY3RpdmUuaGVpZ2h0IDogZWwuYWN0aXZlLndpZHRoLFxuICAgICAgICAgICAgICAgIGJlZm9yZTogYXhpc3kgPyBlbC5iZWZvcmUuaGVpZ2h0IDogZWwuYmVmb3JlLndpZHRoLFxuICAgICAgICAgICAgICAgIGFmdGVyOiBheGlzeSA/IGVsLmFmdGVyLmhlaWdodCA6IGVsLmFmdGVyLndpZHRoLFxuICAgICAgICAgICAgICAgIHdyYXA6IGF4aXN5ID8gd2ggOiB3dyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkaWZmID0ge1xuICAgICAgICAgICAgICAgIGFsaWduOlxuICAgICAgICAgICAgICAgICAgICAoc2l6ZS53cmFwIC0gc2l6ZS5hY3RpdmUgKyBzbGlkZS5nYXApIC8gMiAtXG4gICAgICAgICAgICAgICAgICAgIHdyYXAuYWxpZ25tYXJnaW4sXG4gICAgICAgICAgICAgICAgcG9zOiAoc2l6ZS5iZWZvcmUgLSBzaXplLmFmdGVyKSAvIDIgLSBwb3MsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUkVTSVpFLU9CU0VSVkVSIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBsZXQgd3csIHdoO1xuICAgIGZ1bmN0aW9uIHJlc2l6ZVdyYXAoZSkge1xuICAgICAgICB3dyA9IGUuZGV0YWlsLkNSLndpZHRoO1xuICAgICAgICB3aCA9IGUuZGV0YWlsLkNSLmhlaWdodDtcbiAgICAgICAgc2xpZHlTaXplcygpO1xuICAgIH1cblxuICAgIC8vIENPTlRST0xTICYgQU5JTUFUSU9OIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgbGV0IHBvcyA9IDAsXG4gICAgICAgIGNvbXAgPSAwLFxuICAgICAgICB0cmFuc2xhdGUgPSAwLFxuICAgICAgICB0cmFuc2l0aW9uID0gb3B0aW9ucy5kdXJhdGlvbjtcblxuICAgICQ6IG1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChheGlzeSkge1xuICAgICAgICAgICAgcmV0dXJuIGB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAke3RyYW5zbGF0ZX1weCk7IHRvcDogJHtjb21wfXB4OyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHt0cmFuc2l0aW9ufW1zO2A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYHRyYW5zZm9ybTogdHJhbnNsYXRlKCR7dHJhbnNsYXRlfXB4LCAwKTsgbGVmdDogJHtjb21wfXB4OyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHt0cmFuc2l0aW9ufW1zO2A7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgJDogaWYgKHdyYXAuYWxpZ24gPT09IFwiZW5kXCIpIHtcbiAgICAgICAgdHJhbnNsYXRlID1cbiAgICAgICAgICAgIHNsaWRlcy5sZW5ndGggJSAyID09PSAwXG4gICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvb3BcbiAgICAgICAgICAgICAgICAgICAgPyBwb3MgKyBkaWZmLmFsaWduIC0gc2l6ZS5hY3RpdmUgLyAyXG4gICAgICAgICAgICAgICAgICAgIDogLWRpZmYucG9zICsgZGlmZi5hbGlnblxuICAgICAgICAgICAgICAgIDogb3B0aW9ucy5sb29wXG4gICAgICAgICAgICAgICAgPyBwb3MgKyBkaWZmLmFsaWduXG4gICAgICAgICAgICAgICAgOiAtZGlmZi5wb3MgKyBkaWZmLmFsaWduO1xuICAgIH0gZWxzZSBpZiAod3JhcC5hbGlnbiA9PT0gXCJzdGFydFwiKSB7XG4gICAgICAgIHRyYW5zbGF0ZSA9XG4gICAgICAgICAgICBzbGlkZXMubGVuZ3RoICUgMiA9PT0gMFxuICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb29wXG4gICAgICAgICAgICAgICAgICAgID8gcG9zIC0gZGlmZi5hbGlnbiAtIHNpemUuYWN0aXZlIC8gMlxuICAgICAgICAgICAgICAgICAgICA6IC1kaWZmLnBvcyAtIGRpZmYuYWxpZ25cbiAgICAgICAgICAgICAgICA6IG9wdGlvbnMubG9vcFxuICAgICAgICAgICAgICAgID8gcG9zIC0gZGlmZi5hbGlnblxuICAgICAgICAgICAgICAgIDogLWRpZmYucG9zIC0gZGlmZi5hbGlnbjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2xhdGUgPVxuICAgICAgICAgICAgc2xpZGVzLmxlbmd0aCAlIDIgPT09IDBcbiAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9vcFxuICAgICAgICAgICAgICAgICAgICA/IHBvcyAtIHNpemUuYWN0aXZlIC8gMlxuICAgICAgICAgICAgICAgICAgICA6IC1kaWZmLnBvc1xuICAgICAgICAgICAgICAgIDogb3B0aW9ucy5sb29wXG4gICAgICAgICAgICAgICAgPyBwb3NcbiAgICAgICAgICAgICAgICA6IC1kaWZmLnBvcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmV2KCkge1xuICAgICAgICBzbGlkZXMgPSBbc2xpZGVzW3NsaWRlcy5sZW5ndGggLSAxXSwgLi4uc2xpZGVzLnNsaWNlKDAsIC0xKV07XG4gICAgfVxuICAgIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgIHNsaWRlcyA9IFsuLi5zbGlkZXMuc2xpY2UoMSksIHNsaWRlc1swXV07XG4gICAgfVxuXG4gICAgLy8gSU5ERVggLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgJDogaWYgKHNsaWR5aW5pdClcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9vcCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gc2xpZGVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgaXggPSBzbGlkZXMubGVuZ3RoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPiBzbGlkZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9vcCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBpeCA9IC0xO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IHNsaWRlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAkOiByZW5kZXIgJiYgc2xpZHlJbmRleChpbmRleCk7XG5cbiAgICBsZXQgaXggPSBpbmRleDtcbiAgICBmdW5jdGlvbiBzbGlkeUluZGV4KGlkKSB7XG4gICAgICAgIHdoaWxlIChpeCA+IGlkKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uID0gb3B0aW9ucy5kdXJhdGlvbjtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICBwb3MgKz0gc2l6ZS5sYXN0O1xuICAgICAgICAgICAgICAgIGNvbXAgPSAtcG9zO1xuICAgICAgICAgICAgICAgIHByZXYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl4LS07XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGl4IDwgaWQpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSBvcHRpb25zLmR1cmF0aW9uO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9vcCkge1xuICAgICAgICAgICAgICAgIHBvcyAtPSBzaXplLmZpcnN0O1xuICAgICAgICAgICAgICAgIGNvbXAgPSAtcG9zO1xuICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl4Kys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBMT09QIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGZ1bmN0aW9uIHNsaWR5TG9vcCgpIHtcbiAgICAgICAgaWYgKHBvcyA+PSBzaXplLmxhc3QpIHtcbiAgICAgICAgICAgIG9wdGlvbnMubG9vcCA/IHByZXYoKSA6IChpbmRleCA9IGl4IC09IDEpO1xuICAgICAgICAgICAgcG9zID0gY29tcCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAocG9zIDw9IC1zaXplLmZpcnN0KSB7XG4gICAgICAgICAgICBvcHRpb25zLmxvb3AgPyBuZXh0KCkgOiAoaW5kZXggPSBpeCArPSAxKTtcbiAgICAgICAgICAgIHBvcyA9IGNvbXAgPSAwO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMubG9vcFxuICAgICAgICAgICAgPyAoaW5kZXggPSBpeCA9IGVsLmFjdGl2ZS5ub2RlLml4KVxuICAgICAgICAgICAgOiBwb3MgPj0gc2l6ZS5iZWZvcmUgfHwgcG9zIDw9IC1zaXplLmFmdGVyXG4gICAgICAgICAgICA/IChwb3MgPSBwb3MgLyAxLjUpXG4gICAgICAgICAgICA6IChwb3MgPSBwb3MpO1xuICAgIH1cblxuICAgIC8vIFNUT1AgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgbGV0IHRyYW5zdGltZTtcbiAgICBmdW5jdGlvbiBzbGlkeVN0b3AoKSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSBvcHRpb25zLmR1cmF0aW9uO1xuICAgICAgICBjb25zdCBudWxsZWQgPSAoZGlyZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9vcCkge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgcG9zID0gc3BlZWQgPSB0cmFuc2l0aW9uID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGljaygpLnRoZW4oKCkgPT4gKGluZGV4ID0gaXggPSBlbC5hY3RpdmUubm9kZS5peCkpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodHJhbnN0aW1lKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGRpcmVjdDtcbiAgICAgICAgICAgICAgICAgICAgcG9zID0gc3BlZWQgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zID0gY29tcCA9IHNwZWVkID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHBvcyA+IHNpemUubGFzdCAvIDMgfHwgc3BlZWQgPCAwKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sb29wKSB7XG4gICAgICAgICAgICAgICAgcG9zICs9IHNpemUubGFzdCAtIHBvcztcbiAgICAgICAgICAgICAgICB0cmFuc3RpbWUgPSBzZXRUaW1lb3V0KCgpID0+IG51bGxlZChwcmV2KSwgdHJhbnNpdGlvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG51bGxlZCgoaW5kZXggPSBpeCAtPSAxKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocG9zIDwgLXNpemUuZmlyc3QgLyAzIHx8IHNwZWVkID4gMCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9vcCkge1xuICAgICAgICAgICAgICAgIHBvcyAtPSBzaXplLmZpcnN0ICsgcG9zO1xuICAgICAgICAgICAgICAgIHRyYW5zdGltZSA9IHNldFRpbWVvdXQoKCkgPT4gbnVsbGVkKG5leHQpLCB0cmFuc2l0aW9uKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbnVsbGVkKChpbmRleCA9IGl4ICs9IDEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG51bGxlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTlVMTCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBmdW5jdGlvbiBzbGlkeU51bGwoKSB7XG4gICAgICAgIHRyYW5zaXRpb24gPSAwO1xuICAgICAgICBjb21wICE9PSAwICYmIChjb21wID0gcG9zID0gc3BlZWQgPSAwKTtcbiAgICAgICAgdHJhbnN0aW1lICE9PSBudWxsICYmIGNsZWFyVGltZW91dCh0cmFuc3RpbWUpO1xuICAgICAgICB3aGVlbHRpbWUgIT09IG51bGwgJiYgY2xlYXJUaW1lb3V0KHdoZWVsdGltZSk7XG4gICAgICAgIGRyYWd0aW1lICE9PSBudWxsICYmIGNsZWFySW50ZXJ2YWwoZHJhZ3RpbWUpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gV0hFRUwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBjb25zdCBheGlzY29vcmQgPSAoZSkgPT5cbiAgICAgICAgTWF0aC5mbG9vcihheGlzeSA/IGUuZGV0YWlsLmR5IDogZS5kZXRhaWwuZHgpICogMS42O1xuXG4gICAgbGV0IGlzd2hlZWwgPSBmYWxzZSxcbiAgICAgICAgd2hlZWx0aW1lO1xuICAgIGZ1bmN0aW9uIHNsaWR5V2hlZWwoZSkge1xuICAgICAgICBzbGlkeU51bGwoKTtcbiAgICAgICAgaXN3aGVlbCA9IHRydWU7XG4gICAgICAgIHBvcyAtPSBheGlzY29vcmQoZSk7XG4gICAgICAgIHNsaWR5TG9vcCgpO1xuICAgICAgICB3aGVlbHRpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlzd2hlZWwgPSBmYWxzZTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh3aGVlbHRpbWUpO1xuICAgICAgICAgICAgc2xpZHlTdG9wKCk7XG4gICAgICAgIH0sIG9wdGlvbnMuZHVyYXRpb24gLyAyKTtcbiAgICB9XG5cbiAgICAvLyBEUkFHIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBsZXQgaXNkcmFnID0gZmFsc2UsXG4gICAgICAgIGh0eCA9IDAsXG4gICAgICAgIHNwZWVkID0gMCxcbiAgICAgICAgZHJhZ3RpbWU7XG4gICAgZnVuY3Rpb24gZHJhZ1N0YXJ0KCkge1xuICAgICAgICBzbGlkeU51bGwoKTtcbiAgICAgICAgaXNkcmFnID0gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZHJhZ1NsaWRlKGUpIHtcbiAgICAgICAgcG9zICs9IGF4aXNjb29yZChlKTtcbiAgICAgICAgZHJhZ3RpbWUgPSBzZXRJbnRlcnZhbCgoKSA9PiAoaHR4ID0gcG9zKSwgNjApO1xuICAgICAgICBzcGVlZCA9IChodHggLSBwb3MpIC8gNjA7XG4gICAgICAgIHNsaWR5TG9vcCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkcmFnU3RvcCgpIHtcbiAgICAgICAgaXNkcmFnID0gZmFsc2U7XG4gICAgICAgIHBvcyArPSAocG9zICogc3BlZWQpIC8gMS42O1xuICAgICAgICBjbGVhckludGVydmFsKGRyYWd0aW1lKTtcbiAgICAgICAgc2xpZHlTdG9wKCk7XG4gICAgfVxuXG4gICAgLy8gS0VZUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZnVuY3Rpb24gc2xpZHlLZXlzKGUpIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzcgfHwgZS5rZXlDb2RlID09PSAzOCkge1xuICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM5IHx8IGUua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHNlY3Rpb25cbiAgICByb2xlPVwicmVnaW9uXCJcbiAgICB0YWJpbmRleD1cIjBcIlxuICAgIGFyaWEtbGFiZWw9XCJTbGlkeVwiXG4gICAgaWQ9e3dyYXAuaWR9XG4gICAgY2xhc3M9XCJzbGlkeVwiXG4gICAgY2xhc3M6bG9hZGVkPXtzbGlkeWluaXR9XG4gICAgY2xhc3M6YXhpc3lcbiAgICBjbGFzczphdXRvd2lkdGg9e3NsaWRlLndpZHRoID09PSBcImF1dG9cIn1cbiAgICBjbGFzczphbnRpbG9vcD17b3B0aW9ucy5sb29wID09PSBmYWxzZX1cbiAgICBjbGFzczphbGlnbm1pZGRsZT17d3JhcC5hbGlnbiA9PT0gXCJtaWRkbGVcIn1cbiAgICBjbGFzczphbGlnbnN0YXJ0PXt3cmFwLmFsaWduID09PSBcInN0YXJ0XCJ9XG4gICAgY2xhc3M6YWxpZ25lbmQ9e3dyYXAuYWxpZ24gPT09IFwiZW5kXCJ9XG4gICAgdXNlOmFjdGlvbi5yZXNpemVcbiAgICBvbjpyZXNpemU9e3Jlc2l6ZVdyYXB9XG4gICAgdXNlOmFjdGlvbi53aGVlbFxuICAgIG9uOndoZWVscz17Y29udHJvbHMud2hlZWwgPyBzbGlkeVdoZWVsIDogbnVsbH1cbiAgICBvbjprZXlkb3duPXtjb250cm9scy5rZXlzID8gc2xpZHlLZXlzIDogbnVsbH1cbiAgICBzdHlsZT1cIlxuICAgICAgICAtLXdyYXB3OiB7d3JhcC53aWR0aH07XG4gICAgICAgIC0td3JhcGg6IHt3cmFwLmhlaWdodH07XG4gICAgICAgIC0td3JhcHA6IHt3cmFwLnBhZGRpbmd9O1xuICAgICAgICAtLXNsaWRldzoge3NsaWRlLndpZHRofTtcbiAgICAgICAgLS1zbGlkZWg6IHtzbGlkZS5oZWlnaHR9O1xuICAgICAgICAtLXNsaWRlZjoge3NsaWRlLm9iamVjdGZpdH07XG4gICAgICAgIC0tc2xpZGVvOiB7c2xpZGUub3ZlcmZsb3d9O1xuICAgICAgICAtLXNsaWRlZzoge2F4aXN5ID8gYCR7c2xpZGUuZ2FwfXB4IDAgMCAwYCA6IGAwIDAgMCAke3NsaWRlLmdhcH1weGB9O1xuICAgICAgICAtLWR1cjoge29wdGlvbnMuZHVyYXRpb259bXM7XCJcbj5cbiAgICB7I2lmICFzbGlkeWluaXR9XG4gICAgICAgIDxzZWN0aW9uIGlkPVwibG9hZGVyXCI+XG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwibG9hZGVyXCI+TG9hZGluZy4uLjwvc2xvdD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIHsvaWZ9XG5cbiAgICA8dWwgY2xhc3M9XCJzbGlkeS11bFwiIG9uOmNvbnRleHRtZW51PXsoKSA9PiAoaXNkcmFnID0gZmFsc2UpfSBzdHlsZT17bW92ZSgpfT5cbiAgICAgICAgeyNpZiBzbGlkZXN9XG4gICAgICAgICAgICB7I2VhY2ggc2xpZGVzIGFzIGl0ZW0sIGkgKGtleUV4dHJhY3RvcihpdGVtLCBpKSl9XG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIGJpbmQ6dGhpcz17bm9kZXNbaV19XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtaWQ9e2l9XG4gICAgICAgICAgICAgICAgICAgIHVzZTphY3Rpb24ucGFubmFibGVcbiAgICAgICAgICAgICAgICAgICAgb246cGFuc3RhcnQ9e2NvbnRyb2xzLmRyYWcgPyBkcmFnU3RhcnQgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICBvbjpwYW5tb3ZlPXtjb250cm9scy5kcmFnID8gZHJhZ1NsaWRlIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgb246cGFuZW5kPXtjb250cm9scy5kcmFnID8gZHJhZ1N0b3AgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz17c2xpZGUuY2xhc3N9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOmFjdGl2ZT17aXRlbS5peCA9PT0gaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzbGlkZS5iYWNraW1nID09PSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtpdGVtW3NsaWRlLmltZ3NyY2tleV19KWBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsjaWYgc2xpZHlpbml0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3Qge2l0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsjaWYgc2xpZGUuYmFja2ltZyA9PT0gZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17a2V5RXh0cmFjdG9yKGl0ZW0sIGkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtW3NsaWRlLmltZ3NyY2tleV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17aXRlbS53aWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17aXRlbS5oZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgey9lYWNofVxuICAgICAgICB7L2lmfVxuICAgIDwvdWw+XG5cbiAgICB7I2lmIGNvbnRyb2xzLmFycm93cyAmJiBzbGlkeWluaXR9XG4gICAgICAgIHsjaWYgIW9wdGlvbnMubG9vcH1cbiAgICAgICAgICAgIHsjaWYgaW5kZXggPiAwfVxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhcnJvdy1sZWZ0XCIgb246Y2xpY2s9eygpID0+IGluZGV4LS19PlxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiYXJyb3ctbGVmdFwiPiYjODU5Mjs8L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgeyNpZiBpbmRleCA8IHNsaWRlcy5sZW5ndGggLSAxfVxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhcnJvdy1yaWdodFwiIG9uOmNsaWNrPXsoKSA9PiBpbmRleCsrfT5cbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImFycm93LXJpZ2h0XCI+JiM4NTk0Ozwvc2xvdD5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgIHs6ZWxzZX1cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhcnJvdy1sZWZ0XCIgb246Y2xpY2s9eygpID0+IGluZGV4LS19PlxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJhcnJvdy1sZWZ0XCI+JiM4NTkyOzwvc2xvdD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFycm93LXJpZ2h0XCIgb246Y2xpY2s9eygpID0+IGluZGV4Kyt9PlxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJhcnJvdy1yaWdodFwiPiYjODU5NDs8L3Nsb3Q+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgey9pZn1cbiAgICB7L2lmfVxuICAgIHsjaWYgY29udHJvbHMuZG90cyAmJiBzbGlkeWluaXR9XG4gICAgICAgIDx1bCBjbGFzcz1cInNsaWR5LWRvdHNcIiBjbGFzczpwdXJlPXtjb250cm9scy5kb3RzcHVyZX0+XG4gICAgICAgICAgICB7I2lmIGNvbnRyb2xzLmRvdHNhcnJvd31cbiAgICAgICAgICAgICAgICB7I2lmICFvcHRpb25zLmxvb3B9XG4gICAgICAgICAgICAgICAgICAgIHsjaWYgaW5kZXggPiAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZG90cy1hcnJvdy1sZWZ0XCIgb246Y2xpY2s9eygpID0+IGluZGV4LS19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJkb3RzLWFycm93LWxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PGJ1dHRvbj4mIzg1OTI7PC9idXR0b24+PC9zbG90XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRvdHMtYXJyb3ctbGVmdFwiIG9uOmNsaWNrPXsoKSA9PiBpbmRleC0tfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJkb3RzLWFycm93LWxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48YnV0dG9uPiYjODU5Mjs8L2J1dHRvbj48L3Nsb3RcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgIHsjZWFjaCBkb3RzIGFzIGRvdCwgaX1cbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6YWN0aXZlPXtpID09PSBpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgb246Y2xpY2t8c3RvcFByb3BhZ2F0aW9uPXsoKSA9PiAoaW5kZXggPSBpKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJkb3RcIiB7ZG90fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e2NvbnRyb2xzLmRvdHNudW0gJiYgIWNvbnRyb2xzLmRvdHNwdXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9PC9idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICB7I2lmIGNvbnRyb2xzLmRvdHNhcnJvd31cbiAgICAgICAgICAgICAgICB7I2lmICFvcHRpb25zLmxvb3B9XG4gICAgICAgICAgICAgICAgICAgIHsjaWYgaW5kZXggPCBzbGlkZXMubGVuZ3RoIC0gMX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRvdHMtYXJyb3ctcmlnaHRcIiBvbjpjbGljaz17KCkgPT4gaW5kZXgrK30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImRvdHMtYXJyb3ctcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PGJ1dHRvbj4mIzg1OTQ7PC9idXR0b24+PC9zbG90XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImRvdHMtYXJyb3ctcmlnaHRcIiBvbjpjbGljaz17KCkgPT4gaW5kZXgrK30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiZG90cy1hcnJvdy1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjxidXR0b24+JiM4NTk0OzwvYnV0dG9uPjwvc2xvdFxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICB7L2lmfVxuICAgICAgICA8L3VsPlxuICAgIHsvaWZ9XG48L3NlY3Rpb24+XG5cbjxzdHlsZT4jbG9hZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnNsaWR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IHZhcigtLXdyYXB3KTtcbiAgaGVpZ2h0OiB2YXIoLS13cmFwaCk7XG4gIG91dGxpbmU6IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnNsaWR5IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAwO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnNsaWR5LXVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogdmFyKC0td3JhcHApO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG59XG5cbi5zbGlkeS11bCA+ICogKyAqIHtcbiAgbWFyZ2luOiB2YXIoLS1zbGlkZWcpO1xufVxuXG4uc2xpZHkubG9hZGVkIC5zbGlkeS11bCBsaSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zbGlkeS5heGlzeSAuc2xpZHktdWwge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2xpZHktdWwgbGkge1xuICBmbGV4OiAxIDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogdmFyKC0tc2xpZGVvKTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSB2YXIoLS1kdXIpO1xuICB3aWR0aDogdmFyKC0tc2xpZGV3KTtcbiAgaGVpZ2h0OiB2YXIoLS1zbGlkZWgpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IHZhcigtLXNsaWRlZik7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG46Z2xvYmFsKC5zbGlkeS11bCBsaSBpbWcpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBtYXgtd2lkdGg6IHZhcigtLXdyYXB3KTtcbiAgbWF4LWhlaWdodDogdmFyKC0td3JhcGgpO1xuICBvYmplY3QtZml0OiB2YXIoLS1zbGlkZWYpO1xufVxuXG46Z2xvYmFsKC5zbGlkeS5hdXRvd2lkdGggLnNsaWR5LXVsIGxpIGltZykge1xuICB3aWR0aDogYXV0bztcbn1cblxuLnNsaWR5IGJ1dHRvbiB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2xpZHkgYnV0dG9uOmFjdGl2ZSB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5zbGlkeSBsaS5hY3RpdmUsXG4uc2xpZHkgbGkuYWN0aXZlIGJ1dHRvbiB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5zbGlkeS1kb3RzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zbGlkeS5heGlzeSAuc2xpZHktZG90cyB7XG4gIGJvdHRvbTogYXV0bztcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zbGlkeS1kb3RzIGxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uc2xpZHkuYXhpc3kgLmRvdHMtYXJyb3ctbGVmdCxcbi5zbGlkeS5heGlzeSAuZG90cy1hcnJvdy1yaWdodCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLnNsaWR5LWRvdHMucHVyZSBsaSB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5zbGlkeS1kb3RzLnB1cmUgbGkgYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogcmVkO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICB0cmFuc2l0aW9uOiBjb2xvciB2YXIoLS1kdXIpO1xufVxuXG4uc2xpZHktZG90cy5wdXJlIGxpLmFjdGl2ZSBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5hcnJvdy1sZWZ0LFxuLmRvdHMtYXJyb3ctbGVmdCB7XG4gIGxlZnQ6IDA7XG59XG5cbi5hcnJvdy1yaWdodCxcbi5kb3RzLWFycm93LXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG59XG5cbi5hcnJvdy1yaWdodCxcbi5hcnJvdy1sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uc2xpZHktZG90cy5wdXJlIC5kb3RzLWFycm93LWxlZnQgYnV0dG9uLFxuLnNsaWR5LWRvdHMucHVyZSAuZG90cy1hcnJvdy1yaWdodCBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uZG90cy1hcnJvdy1sZWZ0LFxuLmRvdHMtYXJyb3ctcmlnaHQge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufTwvc3R5bGU+XG4iLCAiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBvbk1vdW50LCBhZnRlclVwZGF0ZSwgYmVmb3JlVXBkYXRlLCB0aWNrIH0gZnJvbSBcInN2ZWx0ZVwiO1xuICAgIGltcG9ydCB7IGZseSwgZmFkZSwgc2NhbGUsIGNyb3NzZmFkZSwgc2xpZGUgfSBmcm9tIFwic3ZlbHRlL3RyYW5zaXRpb25cIjtcbiAgICBpbXBvcnQgcGtnIGZyb20gXCIuLi8uLi9wYWNrYWdlLmpzb25cIjtcbiAgICBpbXBvcnQgeyBzZXR0aW5ncywgc2V0LCBjb24sIGluZGV4IH0gZnJvbSBcIkBzZXR0aW5nc1wiO1xuICAgIGltcG9ydCB7IHNsaWRlcywgbG9jYWwgfSBmcm9tIFwiQGl0ZW1zXCI7XG4gICAgaW1wb3J0IHsgZ2V0UGhvdG9zIH0gZnJvbSBcIkBhcGlcIjtcbiAgICBpbXBvcnQgeyByYW5kb21RIH0gZnJvbSBcIkB1dGlsc1wiO1xuICAgIGltcG9ydCB7XG4gICAgICAgIFNldHRpbmdzLFxuICAgICAgICBDb250cm9scyxcbiAgICAgICAgTmF2VG9wLFxuICAgICAgICBOYXZCb3R0b20sXG4gICAgICAgIE5hdlRodW1icyxcbiAgICAgICAgQnV0dG9uLFxuICAgICAgICBTdmcsXG4gICAgICAgIFNwaW5uZXIsXG4gICAgICAgIFNwaW5uZXJELFxuICAgIH0gZnJvbSBcIkBjbXBcIjtcbiAgICAvLyBpbXBvcnQgeyBTbGlkeSB9IGZyb20gJ0BjbXAnO1xuICAgIGltcG9ydCB7IFNsaWR5IH0gZnJvbSBcInN2ZWx0ZS1zbGlkeVwiO1xuXG4gICAgbGV0IGl0ZW1zID0gW10sXG4gICAgICAgIGxpbWl0ID0gOSxcbiAgICAgICAgcGFnZSA9IHJhbmRvbVEoMCwgOTYpLFxuICAgICAgICBzbGlkeWluaXQgPSBmYWxzZSxcbiAgICAgICAgd3cgPSAwLFxuICAgICAgICB3aCA9IDA7XG4gICAgLy8gJGluZGV4ID0gMTtcbiAgICAvLyBvbk1vdW50KCgpID0+ICgkaW5kZXggPSAxKSk7XG5cbiAgICAvLyAkOiBpdGVtcy5sZW5ndGggPiAxICYmICgkaW5kZXggPSAxKTtcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkU2xpZGVzKGxpbWl0LCBwYWdlKSB7XG4gICAgICAgIHNsaWR5aW5pdCA9IGZhbHNlO1xuICAgICAgICAvLyAkaW5kZXggPSAwO1xuICAgICAgICBsb2FkZWQgPSBpbnRlcnNlY3RlZCA9IGludGVyc2VjdC5lbnRyaWVzID0gW107XG4gICAgICAgIGl0ZW1zID0gYXdhaXQgZ2V0UGhvdG9zKGxpbWl0LCBwYWdlLCB3dywgd2gpO1xuICAgICAgICAvLyAkaW5kZXggPSAxO1xuICAgICAgICAvLyB0aWNrKCkudGhlbigoKSA9PiAoc2xpZHlpbml0ID0gdHJ1ZSkpO1xuICAgIH1cbiAgICAkOiBzbGlkeWluaXQgJiYgKCRpbmRleCA9IDEpO1xuICAgICQ6IGNvbnNvbGUubG9nKHNsaWR5aW5pdCk7XG4gICAgLy8gJDogc2xpZHlpbml0LCAoaW50ZXJzZWN0ZWQgPSBsb2FkZWQgPSBbXSlcbiAgICAkOiBpdGVtcy5sZW5ndGgsICgkc2xpZGVzID0gaXRlbXMpO1xuICAgICQ6IGxvYWRTbGlkZXMobGltaXQsIHBhZ2UpO1xuXG4gICAgbGV0IGludGVyc2VjdGVkID0gW10sXG4gICAgICAgIGxvYWRlZCA9IFtdLFxuICAgICAgICBpbnRlcnNlY3QgPSB7XG4gICAgICAgICAgICBpbml0OiBmYWxzZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW46IFwiMHB4XCIsXG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiAxLjAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW50cmllczogW10sXG4gICAgICAgICAgICBvYnNlcnZlcjogbnVsbCxcbiAgICAgICAgICAgIGluZGV4OiBudWxsLFxuICAgICAgICB9O1xuXG4gICAgJDogaWYgKGludGVyc2VjdC5lbnRyaWVzKVxuICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGludGVyc2VjdC5lbnRyaWVzKSB7XG4gICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnNlY3RlZCA9IFsuLi5uZXcgU2V0KFsuLi5pbnRlcnNlY3RlZCwgaW50ZXJzZWN0LmluZGV4XSldO1xuICAgICAgICAgICAgICAgIGludGVyc2VjdC5vYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAvLyBlaXIgPSBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaW50ZXJzZWN0ZWQgPSBpbnRlcnNlY3RlZC5maWx0ZXIoKHgpID0+IHggIT09IGludGVyc2VjdC5pbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAvLyAkOiBjb25zb2xlLmxvZyhsb2FkZWQsIGludGVyc2VjdGVkKVxuICAgIGZ1bmN0aW9uIG9uTG9hZChpZCkge1xuICAgICAgICBsb2FkZWQgPSBbLi4ubG9hZGVkLCBpZF07XG4gICAgICAgIC8vIGxvYWRlZC5sZW5ndGggPT0gaW50ZXJzZWN0ZWQubGVuZ3RoID8gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpIDogbnVsbFxuICAgIH1cbiAgICAvLyBmdW5jdGlvbiBvYnNlcnZlckNvbm5lY3QoKSB7XG4gICAgLy8gICAgIGludGVyc2VjdCA9IHtcbiAgICAvLyAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAvLyAgICAgICAgICAgICByb290OiBudWxsLFxuICAgIC8vICAgICAgICAgICAgIHJvb3RNYXJnaW46ICcwcHgnLFxuICAgIC8vICAgICAgICAgICAgIHRocmVzaG9sZDogMS4wLFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIGVudHJpZXM6IFtdLFxuICAgIC8vICAgICAgICAgb2JzZXJ2ZXI6IG51bGwsXG4gICAgLy8gICAgICAgICBpbmRleDogbnVsbCxcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICBmdW5jdGlvbiBpbWdTcmMoaXRlbSkge1xuICAgICAgICBpZiAoJHNldHRpbmdzLm9wdGlvbnMuaW50ZXJzZWN0aW5nICYmIGludGVyc2VjdGVkLmxlbmd0aCA+IDApXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0ZWQuaW5jbHVkZXMoaXRlbS5peClcbiAgICAgICAgICAgICAgICA/IGl0ZW1bJHNldHRpbmdzLnNsaWRlLmltZ3NyY2tleV1cbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIGVsc2UgcmV0dXJuIGl0ZW1bJHNldHRpbmdzLnNsaWRlLmltZ3NyY2tleV07XG4gICAgfVxuICAgIC8vICQ6IGNvbnNvbGUubG9nKGludGVyc2VjdGVkKTtcbiAgICBmdW5jdGlvbiBzZXR0aW5nc0NsaWNrKCkge1xuICAgICAgICAkc2V0LmlucHV0XG4gICAgICAgICAgICA/ICgoJHNldC5jaGVjayA9IHRydWUpLCAoJHNldC5pbnB1dCA9IGZhbHNlKSlcbiAgICAgICAgICAgIDogKCgkc2V0Lm9wZW4gPSAhJHNldC5vcGVuKSwgKCRjb24ub3BlbiA9IGZhbHNlKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbnRyb2xzQ2xpY2soKSB7XG4gICAgICAgICRjb24ub3BlbiA9ICEkY29uLm9wZW47XG4gICAgICAgICRzZXQub3BlbiA9IGZhbHNlO1xuICAgIH1cbjwvc2NyaXB0PlxuXG48c3ZlbHRlOndpbmRvdyBiaW5kOmlubmVyV2lkdGg9e3d3fSBiaW5kOmlubmVySGVpZ2h0PXt3aH0gLz5cblxuPGgxPlxuICAgIExldGBzIDxzdHJvbmc+XG4gICAgICAgIFNsaWR5IDxzdXA+e3BrZy52ZXJzaW9uLnJlcGxhY2UoL1xcLlteLl0qJC8sIFwiXCIpfTwvc3VwPlxuICAgIDwvc3Ryb25nPlxuICAgIEdPISB7JGluZGV4fVxuPC9oMT5cblxuPE5hdlRvcCBiaW5kOmxpbWl0IGJpbmQ6cGFnZSAvPlxuXG48U2xpZHlcbiAgICB0aW1lb3V0PVwiNTAwXCJcbiAgICBsZXQ6aXRlbVxuICAgIHsuLi4kc2V0dGluZ3N9XG4gICAgc2xpZGVzPXskc2xpZGVzfVxuICAgIGJpbmQ6c2xpZHlpbml0XG4gICAgYmluZDppbmRleD17JGluZGV4fVxuICAgIGJpbmQ6aW50ZXJzZWN0XG4+XG4gICAgPHNwYW4gc2xvdD1cImxvYWRlclwiPlxuICAgICAgICA8U3Bpbm5lckQgLz5cbiAgICA8L3NwYW4+XG5cbiAgICB7I2lmICRzZXR0aW5ncy5zbGlkZS5iYWNraW1nID09PSB0cnVlfVxuICAgICAgICA8c3BhbiBjbGFzcz1cImRlZmF1bHRcIj5cbiAgICAgICAgICAgIDxzdHJvbmc+e2l0ZW0uaXh9PC9zdHJvbmc+XG4gICAgICAgIDwvc3Bhbj5cbiAgICB7OmVsc2V9XG4gICAgICAgIHsjaWYgbG9hZGVkLmluY2x1ZGVzKGl0ZW0uaXgpfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz57aXRlbS5peH08L3N0cm9uZz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgezplbHNlfTxzcGFuIGNsYXNzPVwibG9hZGluZ1wiPkxvYWRpbmcuLi48L3NwYW4+ey9pZn1cbiAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3M6bG9hZGVkPXtsb2FkZWQuaW5jbHVkZXMoaXRlbS5peCl9XG4gICAgICAgICAgICBhbHQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICBvbjpsb2FkfG9uY2U9eygpID0+IG9uTG9hZChpdGVtLml4KX1cbiAgICAgICAgICAgIHNyYz17aW1nU3JjKGl0ZW0pfVxuICAgICAgICAvPlxuICAgIHsvaWZ9XG5cbiAgICA8c3BhbiBjbGFzcz1cImludGVybmFsLWNvbnRyb2xzXCIgc2xvdD1cImFycm93LWxlZnRcIj5cbiAgICAgICAgPFN2ZyBuYW1lPXtcInNsaWR5LWNoZXZyb24tbGVmdFwifSAvPlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImludGVybmFsLWNvbnRyb2xzXCIgc2xvdD1cImFycm93LXJpZ2h0XCI+XG4gICAgICAgIDxTdmcgbmFtZT17XCJzbGlkeS1jaGV2cm9uLXJpZ2h0XCJ9IC8+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiaW50ZXJuYWwtY29udHJvbHNcIiBzbG90PVwiZG90cy1hcnJvdy1sZWZ0XCI+XG4gICAgICAgIDxTdmcgbmFtZT17XCJzbGlkeS1hcnJvdy1sZWZ0XCJ9IC8+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiaW50ZXJuYWwtY29udHJvbHNcIiBzbG90PVwiZG90cy1hcnJvdy1yaWdodFwiPlxuICAgICAgICA8U3ZnIG5hbWU9e1wic2xpZHktYXJyb3ctcmlnaHRcIn0gLz5cbiAgICA8L3NwYW4+XG48L1NsaWR5PlxuXG48TmF2Qm90dG9tIC8+XG5cbnsjaWYgc2xpZHlpbml0fVxuICAgIDxOYXZUaHVtYnMgLz5cbnsvaWZ9XG5cbnsjaWYgJGNvbi5vcGVufVxuICAgIDxDb250cm9scyAvPlxuey9pZn1cblxuPEJ1dHRvblxuICAgIGlkPVwiY29udHJvbHNcIlxuICAgIHN0eWxlPXtcImxlZnQ6IDIwcHg7XCJ9XG4gICAgb3Blbj17JGNvbi5vcGVufVxuICAgIG9uOmNsaWNrPXtjb250cm9sc0NsaWNrfVxuPlxuICAgIHsjaWYgJGNvbi5vcGVufVxuICAgICAgICA8U3ZnIG5hbWU9e1wic2xpZHkteFwifSAvPlxuICAgIHs6ZWxzZX1cbiAgICAgICAgPFN2ZyBuYW1lPXtcInNsaWR5LXBsYXlcIn0gdHJhbnNmb3JtPVwidHJhbnNsYXRlKDNweCwgMClcIiAvPlxuICAgIHsvaWZ9XG48L0J1dHRvbj5cblxueyNpZiAkc2V0Lm9wZW59XG4gICAgPFNldHRpbmdzIC8+XG57L2lmfVxuXG48QnV0dG9uXG4gICAgaWQ9XCJzZXR0aW5nc1wiXG4gICAgc3R5bGU9e1wicmlnaHQ6IDIwcHg7XCJ9XG4gICAgb3Blbj17JHNldC5vcGVufVxuICAgIGNoZWNrPXskc2V0LmlucHV0fVxuICAgIG9uOmNsaWNrPXtzZXR0aW5nc0NsaWNrfVxuPlxuICAgIHsjaWYgJHNldC5pbnB1dH1cbiAgICAgICAgPFN2ZyBuYW1lPXtcInNsaWR5LWNoZWNrXCJ9IC8+XG4gICAgezplbHNlIGlmICRzZXQub3Blbn1cbiAgICAgICAgPFN2ZyBuYW1lPXtcInNsaWR5LXhcIn0gLz5cbiAgICB7OmVsc2V9XG4gICAgICAgIDxTdmcgbmFtZT17XCJzbGlkeS1zbGlkZXJzXCJ9IC8+XG4gICAgey9pZn1cbjwvQnV0dG9uPlxuXG48YVxuICAgIGlkPVwiZ2l0aHViXCJcbiAgICBhbHQ9XCJodHRwczovL2dpdGh1Yi5jb20vVmFsZXhyL3N2ZWx0ZS1zbGlkeVwiXG4gICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1ZhbGV4ci9zdmVsdGUtc2xpZHlcIj4mbmJzcDs8L2Fcbj5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+OnJvb3Qge1xuICAtLWJveC1zaGFkb3ctc21hbGw6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAtLWJveC1zaGFkb3ctbWVkaXVtOiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIC0tYm94LXNoYWRvdy1sYXJnZTogMCAxNHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgLS1ib3gtc2hhZG93LXhsYXJnZTogMCAyOHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgLS1ib3gtc2hhZG93LXhsYXJnZS1yZWQ6IDAgMCA1MHB4IHJnYmEoMjU1LCAwLCAwLCAwLjQ1KTtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tY29sb3ItYWNjZW50OiBibHVlO1xuICAtLWNvbG9yLWFjdGl2ZTogcmVkO1xuICAtLWJhY2stY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wOSk7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAycmVtIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbmgxIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjdGl2ZSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmgxIHN0cm9uZyBzdXAge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRvcDogOXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA5cHg7XG59XG5cbjpnbG9iYWwoLnNsaWRlKSB7XG4gIHotaW5kZXg6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctbGFyZ2UpO1xufVxuOmdsb2JhbCguc2xpZGUpIHNwYW4ge1xuICB0b3A6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxcmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFjay1jb2xvcik7XG59XG5cbnNwYW4uZGVmYXVsdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZzogMWVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrLWNvbG9yKTtcbn1cbnNwYW4ubG9hZGluZyB7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1jb2xvcik7XG4gIG9wYWNpdHk6IDAuNDU7XG59XG5zcGFuLmludGVybmFsLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjdGl2ZSk7XG59XG5cbmltZyB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTAwMG1zIGVhc2UtaW47XG4gIHdpbGwtY2hhbmdlOiBhdXRvO1xufVxuaW1nLmxvYWRlZCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbiNnaXRodWIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDIwcHg7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICB6LWluZGV4OiAxMDAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltZy9naXQuc3ZnXCIpO1xufTwvc3R5bGU+XG4iLCAiaW1wb3J0IEFwcCBmcm9tICcuL0FwcC5zdmVsdGUnO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKHtcbiAgICB0YXJnZXQ6IGRvY3VtZW50LmJvZHlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7Ozs7Ozs7cUJBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2NBdUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFEVixLQUFJLElBQUM7QUFBSSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkF1QkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBRFYsS0FBSSxJQUFDO0FBQUssZUFBQTtVQUVMLEtBQUksSUFBQztBQUFJLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQTlFZixJQUFTLElBQUEsRUFBQSxRQUNMLElBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUVILElBQU0sT0FBQSxRQUFBOzBCQUFOLElBQU07Ozs7Ozs7Ozs7b0JBeUNqQixJQUFTLE1BQUEsbUJBQUE7b0JBSVQsSUFB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
