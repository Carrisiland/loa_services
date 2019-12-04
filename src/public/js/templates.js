(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["auth/login.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n\n";
env.getTemplate("../skel.html", true, "auth/login.html", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("title"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("body"))(env, context, frame, runtime, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += t_6;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_title(env, context, frame, runtime, cb) {
var lineno = 4;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Login";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_body(env, context, frame, runtime, cb) {
var lineno = 6;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<h2>Login</h2>\n\n<form class=\"ui large form\" method=\"post\">\n  <div class=\"field required\">\n    <label>Username:</label>\n    <input required type=\"text\" name=\"username\" placeholder=\"joe@smith.com\">\n  </div>\n  <div class=\"field required\">\n    <label>Password:</label>\n    <input required type=\"password\" name=\"password\">\n  </div>\n  <div class=\"field\">\n    <button class=\"ui button\" type=\"submit\">Login</button>\n  </div>\n</form>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_title: b_title,
b_body: b_body,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["auth/signup.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n\n";
env.getTemplate("../skel.html", true, "auth/signup.html", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("title"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("body"))(env, context, frame, runtime, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += t_6;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_title(env, context, frame, runtime, cb) {
var lineno = 4;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Signup";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_body(env, context, frame, runtime, cb) {
var lineno = 6;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<h2>Signup</h2>\n\n<form class=\"ui large form\" method=\"post\">\n  <div class=\"field required\">\n    <label>Username:</label>\n    <input required type=\"text\" name=\"username\" placeholder=\"Mark4316\">\n  </div>\n  <div class=\"field required\">\n    <label>E-mail:</label>\n    <input required type=\"email\" name=\"email\" placeholder=\"joe@smith.com\">\n  </div>\n  <div class=\"field required\">\n    <label>Password:</label>\n    <input required type=\"password\" name=\"password\">\n  </div>\n  <div class=\"field required\">\n    <label>Password (again):</label>\n    <input required type=\"password\" name=\"password2\">\n  </div>\n  <div class=\"field\">\n    <button class=\"ui button\" type=\"submit\">Register</button>\n  </div>\n</form>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_title: b_title,
b_body: b_body,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["editVideoForm.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
env.getTemplate("skel.html", true, "editVideoForm.html", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("title"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("body"))(env, context, frame, runtime, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += t_6;
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("scripts"))(env, context, frame, runtime, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
output += t_8;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_title(env, context, frame, runtime, cb) {
var lineno = 2;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "New post";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_body(env, context, frame, runtime, cb) {
var lineno = 3;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<template id=\"player-placeholder\">\n  <div class=\"ui icon header\" id=\"player\">\n    <i class=\"video icon\"></i>\n    Put your <em>Youtube</em> or <em>Vimeo</em> video URL below.\n    A preview will appear here.\n  </div>\n</template>\n\n<form class=\"ui form new\" method=\"POST\" action='/post/edit/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"id"), env.opts.autoescape);
output += "?_method=PATCH'>\n  <h1 class=\"ui header\">Upload New Video</h1>\n  <div class=\"new-video-player ui placeholder segment\">\n    <div class=\"ui icon header\" id=\"player\">\n      <i class=\"video icon\"></i>\n      Put your <em>Youtube</em> or <em>Vimeo</em> video URL below.\n      A preview will appear here.\n    </div>\n  </div>\n  <div class=\"field required\">\n    <label>Link:</label>\n    <input type=\"text\" name=\"link\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"video")),"link"), env.opts.autoescape);
output += "\" readonly>\n  </div>\n  <div class=\"field required\">\n    <label>Start:</label>\n    <input type=\"text\" name=\"start\" value=";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"video")),"start"), env.opts.autoescape);
output += ">\n  </div>\n  <div class=\"field required\">\n    <label>End:</label>\n    <input type=\"text\" name=\"end\" value=";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"video")),"end"), env.opts.autoescape);
output += ">\n  </div>\n  <div class=\"field required\">\n    <label>Title:</label>\n    <input type=\"text\" name=\"title\" value=";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"title"), env.opts.autoescape);
output += ">\n  </div>\n  <div class=\"field\">\n    <label>Tags:</label>\n    <input type=\"text\" name=\"tags\" value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"tags"), env.opts.autoescape);
output += "\">\n  </div>\n  <div class=\"field\">\n    <label>Description</label>\n    <textarea rows=\"2\" name='description' value=";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"description"), env.opts.autoescape);
output += " style=\"margin-top: 0px; margin-bottom: 0px; height: 100px; resize: none\"></textarea>\n  </div>\n  <div class=\"field required\">\n    <label>Visibility</label>\n    <div class=\"two fields\">\n      <div class=\"field required\">\n        <select class=\"ui fluid search dropdown\" value='";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"visibility"), env.opts.autoescape);
output += "' name=\"visibility\">\n          <option value=\"public\">Public</option>\n          <option value=\"private\">Private</option>\n        </select>\n      </div>\n    </div>\n  </div>\n  <div class=\"field\">\n    <button class=\"ui button\" type=\"submit\">Edit</button>\n  </div>\n  <div class=\"ui error message\"></div>\n</form>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_scripts(env, context, frame, runtime, cb) {
var lineno = 62;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<script src=\"https://player.vimeo.com/api/player.js\"></script>\n<script src=\"/js/player.js\"></script>\n<script src=\"/js/newClip.js\"></script>\n<script src=\"https://www.youtube.com/iframe_api\"></script>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_title: b_title,
b_body: b_body,
b_scripts: b_scripts,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["feed.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
env.getTemplate("skel.html", true, "feed.html", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("title"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("body"))(env, context, frame, runtime, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += t_6;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_title(env, context, frame, runtime, cb) {
var lineno = 2;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Feed";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_body(env, context, frame, runtime, cb) {
var lineno = 3;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<h1 class=\"ui header\">Feed</h1>\n<div class=\"ui link cards\">\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("post/list.html", false, "feed.html", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
callback(null,t_10);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n</div>\n<!-- <div id=\"mainContent\">\n  <h1> Feed </h1>\n  <div class=\"ui link cards\">\n    ";
frame = frame.push();
var t_14 = (lineno = 11, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [1,5]));
if(t_14) {t_14 = runtime.fromIterator(t_14);
var t_13 = t_14.length;
for(var t_12=0; t_12 < t_14.length; t_12++) {
var t_15 = t_14[t_12];
frame.set("i", t_15);
frame.set("loop.index", t_12 + 1);
frame.set("loop.index0", t_12);
frame.set("loop.revindex", t_13 - t_12);
frame.set("loop.revindex0", t_13 - t_12 - 1);
frame.set("loop.first", t_12 === 0);
frame.set("loop.last", t_12 === t_13 - 1);
frame.set("loop.length", t_13);
output += "\n    <div class=\"card\">\n      <iframe src=\"https://www.youtube.com/embed/e-u-W03SgYk\" frameborder=\"0\"\n        allow=\" autoplay; encrypted-media;\"></iframe>\n      <div class=\"content\">\n        <div class=\"header\">Salvini è uno di noi</div>\n        <div class=\"meta\">\n          <a>Quick Video</a>\n        </div>\n        <div class=\"description\">\n          Salvini aiuta la gente comune, quella vera!\n        </div>\n      </div>\n      <div class=\"extra content\">\n        <span>\n        <i class=\"user icon\"></i>\n        ";
output += "\n        Mark4316\n        </span>\n        <span class=\"right floated\">\n        <button> <i class=\"thumbs up outline icon\"></i> 10</button>\n        <button> <i class=\"thumbs down outline icon\"></i> 6</button>\n        </span>\n      </div>\n    </div>\n    ";
;
}
}
frame = frame.pop();
output += "\n  </div>\n</div> -->\n";
cb(null, output);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_title: b_title,
b_body: b_body,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["gallery.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
env.getTemplate("skel.html", true, "gallery.html", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("title"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("body"))(env, context, frame, runtime, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += t_6;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_title(env, context, frame, runtime, cb) {
var lineno = 2;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Gallery";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_body(env, context, frame, runtime, cb) {
var lineno = 3;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<h1 class=\"ui header\">Gallery</h1>\n<div class=\"ui link cards\">\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("post/list.html", false, "gallery.html", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
callback(null,t_10);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n</div>\n";
cb(null, output);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_title: b_title,
b_body: b_body,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["header.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n\n<div class=\"ui inverted header segment\" style=\"border-radius: 0\">\n  <div class=\"ui large secondary inverted menu\">\n    <div class=\"ui container\">\n      ";
if(!runtime.contextOrFrameLookup(context, frame, "index")) {
output += "\n      <div class=\"item\">\n        <div class=\"ui logo shape\">\n          <div class=\"sides\">\n            <div class=\"active ui side\">\n              <a href=\"/\" class=\"vimtok\">Vimtok</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      ";
;
}
output += "\n      <div class=\"left item\">\n        <a href=\"/post/new\" class=\"header active item\">New Post</a>\n        <a href=\"/post/gallery\" class=\"header active item\">Gallery</a>\n        ";
if(runtime.contextOrFrameLookup(context, frame, "user")) {
output += "\n        <a href=\"/follow/feed\" class=\"header active item\">Feed</a>\n        ";
;
}
output += "\n        <div class=\"ui icon input\" style=\"margin-left: 1em;\">\n          <input type=\"text\" placeholder=\"Search Posts, Users...\">\n          <i class=\"inverted circular search link icon\"></i>\n        </div>\n      </div>\n      ";
if(!runtime.contextOrFrameLookup(context, frame, "user")) {
output += "\n      <div class=\"right item\">\n\n        <a href=\"/auth/login\" class=\"ui inverted button user-btn\">Log in</a>\n        <a href=\"/auth/signup\" class=\"ui inverted button\">Sign Up</a>\n      </div>\n      ";
;
}
else {
output += "\n      <div class=\"right item\">\n        <a href=\"/profile/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"id"), env.opts.autoescape);
output += "\" class=\"ui inverted button user-btn\">\n          <i class=\"user icon\"></i> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"username"), env.opts.autoescape);
output += "\n        </a>\n        <a href=\"/auth/logout\" class=\"ui inverted button\">Logout</a>\n      </div>\n      ";
;
}
output += "\n    </div>\n  </div>\n</div>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["index.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n\n";
env.getTemplate("skel.html", true, "index.html", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
var t_4;
t_4 = true;
frame.set("index", t_4, true);
if(frame.topLevel) {
context.setVariable("index", t_4);
}
if(frame.topLevel) {
context.addExport("index", t_4);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("title"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("rootbody"))(env, context, frame, runtime, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += t_7;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_title(env, context, frame, runtime, cb) {
var lineno = 6;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Vimtok";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_rootbody(env, context, frame, runtime, cb) {
var lineno = 7;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<div class=\"ui inverted vertical masthead center aligned segment\">\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("header.html", false, "index.html", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n\n  <div class=\"ui text container bigTop\">\n    <h1 class=\"ui inverted header\">\n      VimTok\n    </h1>\n    <h2 style= \"font-size: 3em; margin-top: -2vh;\"> Share only the best moments</h2>\n    <br>\n    <a href=\"/auth/signup\" style=\"color: white;\" class=\"ui huge primary button myTop\"> Get Started <i class=\"right arrow icon\"></i></a>\n  </div>\n</div>\n\n<div class=\"ui vertical stripe segment\">\n  <div class=\"ui middle aligned stackable grid container\">\n    <div class=\"row\">\n      <div class=\"eight wide column\">\n        <h3 class=\"ui header\" style=\"font-size: 2.1em;\">We Help People share their best moments</h3>\n        <p style=\"font-size: 1.5em;\">We can give you superpowers to do things that you never thought possible. Let us delight you and your friends through snippets of funny videos.</p>\n        <h3 class=\"ui header\" style=\"font-size: 2.1em;\">Register for Free and Join the  Community</h3>\n        <p style=\"font-size: 1.5em;\">Yes that's right, you thought you had to pay fro such an amazing service, but it's actually completly free and it will be forever.</p>\n      </div>\n      <div class=\"six wide right floated column\">\n        <img src=\"/img/logo.png\" class=\"ui large image\">\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"ui vertical stripe quote segment\">\n  <div class=\"ui equal width stackable internally celled grid\">\n    <div class=\"center aligned row\">\n      <div class=\"column\">\n        <h3 style=\"font-size: 1.8em;\">\"A breath of Fresh Air\"</h3>\n        <p style=\"font-size: 1.35em;\">\n        <img src=\"/img/steve_jobs.jpg\" class=\"ui avatar bordered image\"> <b> Steve Jobs </b>\n        </p>\n      </div>\n      <div class=\"column\">\n        <h3 style=\"font-size: 1.8em;\">\"The best thing after my Pickup Truck\"</h3>\n        <p style=\"font-size: 1.35em;\">\n        <img src=\"/img/elon_musk.jpg\" class=\"ui avatar image\"> <b>Elon Musk</b>\n        Tesla Chief Executive Officer\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n";
cb(null, output);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_title: b_title,
b_rootbody: b_rootbody,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["newVideoForm.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
env.getTemplate("skel.html", true, "newVideoForm.html", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("title"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("body"))(env, context, frame, runtime, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += t_6;
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("scripts"))(env, context, frame, runtime, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
output += t_8;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_title(env, context, frame, runtime, cb) {
var lineno = 2;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "New post";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_body(env, context, frame, runtime, cb) {
var lineno = 3;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<template id=\"player-placeholder\">\n  <div class=\"ui icon header\" id=\"player\">\n    <i class=\"video icon\"></i>\n    Put your <em>Youtube</em> or <em>Vimeo</em> video URL below.\n    A preview will appear here.\n  </div>\n</template>\n\n<form class=\"ui form new\" method=\"POST\" action='/post'>\n  <h1 class=\"ui header\">Upload New Video</h1>\n  <div class=\"new-video-player ui placeholder segment\">\n    <div class=\"ui icon header\" id=\"player\">\n      <i class=\"video icon\"></i>\n      Put your <em>Youtube</em> or <em>Vimeo</em> video URL below.\n      A preview will appear here.\n    </div>\n  </div>\n  <div class=\"field required\">\n    <label>Link:</label>\n    <input type=\"text\" name=\"link\" placeholder=\"htps://www.youtube.com/watch?v=YlUKcNNmywk\">\n  </div>\n  <div class=\"field required\">\n    <label>Start:</label>\n    <input type=\"text\" name=\"start\" placeholder=\"01:12\">\n  </div>\n  <div class=\"field required\">\n    <label>End:</label>\n    <input type=\"text\" name=\"end\" placeholder=\"22:21\">\n  </div>\n  <div class=\"field required\">\n    <label>Title:</label>\n    <input type=\"text\" name=\"title\" placeholder=\"An old classic that everyone should know\">\n  </div>\n  <div class=\"field\">\n    <label>Tags:</label>\n    <input type=\"text\" name=\"tags\">\n  </div>\n  <div class=\"field\">\n    <label>Description</label>\n    <textarea rows=\"2\" name='description' style=\"margin-top: 0px; margin-bottom: 0px; height: 100px; resize: none\"></textarea>\n  </div>\n  <div class=\"field required\">\n    <label>Visibility</label>\n    <div class=\"two fields\">\n      <div class=\"field required\">\n        <select class=\"ui fluid search dropdown\" value=\"public\" name=\"visibility\">\n          <option value=\"public\">Public</option>\n          <option value=\"private\">Private</option>\n        </select>\n      </div>\n    </div>\n  </div>\n  <div class=\"field\">\n    <button class=\"ui button\" type=\"submit\">Upload</button>\n  </div>\n  <div class=\"ui error message\"></div>\n</form>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_scripts(env, context, frame, runtime, cb) {
var lineno = 62;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<script src=\"https://player.vimeo.com/api/player.js\"></script>\n<script src=\"/js/player.js\"></script>\n<script src=\"/js/newClip.js\"></script>\n<script src=\"https://www.youtube.com/iframe_api\"></script>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_title: b_title,
b_body: b_body,
b_scripts: b_scripts,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["post/list.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n\n";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "posts");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("post", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\n<div class=\"card\">\n  <img width=\"100%\" height=\"56.25%\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"video")),"thumbnailLink"), env.opts.autoescape);
output += "\" onclick=\"window.location='/post/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "'\">\n  <div class=\"content\">\n    ";
if(runtime.memberLookup((t_4),"user")) {
output += "\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"id") == runtime.memberLookup((runtime.memberLookup((t_4),"user")),"id")) {
output += "\n    <div class=\"ui dropdown\" style=\"float: right;\">\n      <i class=\"dropdown icon\"></i>\n      <div class=\"menu\">\n        ";
output += "\n        ";
output += "\n        ";
output += "\n        <form class=\"item\" method=\"GET\" action=\"/post/edit/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "\">\n          <button>\n            <i class=\"edit icon\"></i>\n            Edit\n          </button>\n        </form>\n        <form class=\"item\" method=\"POST\" action=\"/post/delete/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "?_method=DELETE\">\n          <button>\n            <i class=\"trash icon\"></i>\n            Delete\n          </button>\n        </form>\n        <div class=\"divider\"></div>\n        <form class=\"item\" method=\"GET\" action=\"/post/gallery\">\n          <button>\n            <i class=\"folder icon\"></i>\n            Add to Album\n          </button>\n        </form>\n      </div>\n    </div>\n      ";
;
}
output += "\n    ";
;
}
output += "\n    <div class=\"header\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title"), env.opts.autoescape);
output += "</div>\n    <!-- <div class=\"description\">\n      ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description"), env.opts.autoescape);
output += "\n    </div> -->\n    <hr>\n    <div class=\"extra content\">\n        ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"views"), env.opts.autoescape);
output += " views\n    </div>\n  </div>\n  <div class=\"extra content\">\n    <span>\n      <i class=\"user icon\"></i>\n      ";
if(!runtime.memberLookup((t_4),"user")) {
output += "\n      Anonymous\n      ";
;
}
else {
output += "\n      <a href=\"/profile/";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"user")),"_id"), env.opts.autoescape);
output += "\">@";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"user")),"username"), env.opts.autoescape);
output += "</a>\n      ";
;
}
output += "\n      <br>\n      ";
output += runtime.suppressValue((lineno = 57, colno = 30, runtime.callWrap(runtime.memberLookup((runtime.memberLookup((t_4),"dateCreated")),"slice"), "post[\"dateCreated\"][\"slice\"]", context, [4,21])), env.opts.autoescape);
output += "\n    </span>\n    <span class=\"right floated\">\n      <form method='POST' action='/like/post/up/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "' style='display: inline;'>\n        <button><i class=\"thumbs up outline icon\"></i>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"upvotes"), env.opts.autoescape);
output += "</button>\n      </form>\n      <form method='POST' action='/like/post/down/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "' style='display: inline;'>\n        <button><i class=\"thumbs down outline icon\"></i>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"downvotes"), env.opts.autoescape);
output += "</button>\n      </form>\n    </span>\n  </div>\n</div>\n\n\n";
;
}
}
if (!t_2) {
output += "\n<div class=\"ui card\" style=\"width: 100%\">\n  <div class=\"ui placeholder segment\">\n    <div class=\"ui icon header\">\n      <i class=\"video icon\"></i>\n      <h4><em>Oops! No post found.</em></h4>\n    </div>\n  </div>\n</div>\n";
}
frame = frame.pop();
output += "\n\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("scripts"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_scripts(env, context, frame, runtime, cb) {
var lineno = 83;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_scripts: b_scripts,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["post/view.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n\n";
env.getTemplate("skel.html", true, "post/view.html", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
var t_4;
t_4 = "youtube";
frame.set("service", t_4, true);
if(frame.topLevel) {
context.setVariable("service", t_4);
}
if(frame.topLevel) {
context.addExport("service", t_4);
}
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("title"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("body"))(env, context, frame, runtime, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += t_7;
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("scripts"))(env, context, frame, runtime, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
output += t_9;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_title(env, context, frame, runtime, cb) {
var lineno = 5;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += " New Post ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_body(env, context, frame, runtime, cb) {
var lineno = 6;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n\n<div class=\"center-margin ui grid\">\n  <div class=\"row centered\">\n    <div class=\"column\" id=\"player\"></div>\n  </div>\n  <div class=\"row centered\" style=\"text-align: center\">\n    <form method='POST' action='/like/post/up/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"id"), env.opts.autoescape);
output += "' style='display: inline;'>\n      <button class=\"ui blue button\"><i class=\"thumbs up outline icon\"></i>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"upvotes"), env.opts.autoescape);
output += "</button>\n    </form>\n    <form method='POST' action='/like/post/down/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"id"), env.opts.autoescape);
output += "' style='display: inline;'>\n      <button class=\"ui red button\"><i class=\"thumbs down outline icon\"></i>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"downvotes"), env.opts.autoescape);
output += "</button>\n    </form>\n    <a class=\"ui button\" href=\"/post/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"id"), env.opts.autoescape);
output += "/gif\" target=\"_blank\">GIF it</a>\n  </div>\n  <div class=\"row centered\">\n    <div class=\"ui orange label\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"views"), env.opts.autoescape);
output += " views</div>\n  </div>\n</div>\n\n<div class=\"ui comments center-margin\">\n  <div>\n    <h2>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"title"), env.opts.autoescape);
output += "</h2>\n    ";
frame = frame.push();
var t_13 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"tags");
if(t_13) {t_13 = runtime.fromIterator(t_13);
var t_12 = t_13.length;
for(var t_11=0; t_11 < t_13.length; t_11++) {
var t_14 = t_13[t_11];
frame.set("tag", t_14);
frame.set("loop.index", t_11 + 1);
frame.set("loop.index0", t_11);
frame.set("loop.revindex", t_12 - t_11);
frame.set("loop.revindex0", t_12 - t_11 - 1);
frame.set("loop.first", t_11 === 0);
frame.set("loop.last", t_11 === t_12 - 1);
frame.set("loop.length", t_12);
output += "\n    ";
if(t_14) {
output += "\n    <a href=\"/feed/";
output += runtime.suppressValue(t_14, env.opts.autoescape);
output += "\">#";
output += runtime.suppressValue(t_14, env.opts.autoescape);
output += "</a>\n    ";
;
}
output += "\n    ";
;
}
}
frame = frame.pop();
output += "\n    <br>\n    ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"user")),"username")) {
output += "\n    <a class=\"author\" href=\"/profile/";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"user")),"_id"), env.opts.autoescape);
output += "\">@";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"user")),"username"), env.opts.autoescape);
output += "</a>\n    ";
;
}
else {
output += "\n    <a class=\"author\">Anonymous</a>\n    ";
;
}
output += " <br>\n    ";
output += runtime.suppressValue((lineno = 40, colno = 28, runtime.callWrap(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"dateCreated")),"slice"), "post[\"dateCreated\"][\"slice\"]", context, [4,21])), env.opts.autoescape);
output += "\n  </div>\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"user")) {
output += "\n  ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"id") == runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"user")),"id")) {
output += "\n  <div class=\"ui dropdown\" style=\"float: right;\">\n    <i class=\"dropdown icon\"></i>\n    <div class=\"menu\">\n      ";
output += "\n      ";
output += "\n      ";
output += "\n      <form class=\"item\" method=\"GET\" action=\"/post/edit/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"id"), env.opts.autoescape);
output += "\">\n        <button>\n          <i class=\"edit icon\"></i>\n          Edit\n        </button>\n      </form>\n      <form class=\"item\" method=\"POST\" action=\"/post/delete/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"id"), env.opts.autoescape);
output += "?_method=DELETE\">\n        <button>\n          <i class=\"trash icon\"></i>\n          Delete\n        </button>\n      </form>\n      <div class=\"divider\"></div>\n      <form class=\"item\" method=\"GET\" action=\"/post/gallery\">\n        <button>\n          <i class=\"folder icon\"></i>\n          Add to Album\n        </button>\n      </form>\n    </div>\n  </div>\n  ";
;
}
output += "\n  ";
;
}
output += "\n  <h3 class=\"ui dividing header\">Comments</h3>\n  ";
frame = frame.push();
var t_17 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"comments");
if(t_17) {t_17 = runtime.fromIterator(t_17);
var t_16 = t_17.length;
for(var t_15=0; t_15 < t_17.length; t_15++) {
var t_18 = t_17[t_15];
frame.set("comment", t_18);
frame.set("loop.index", t_15 + 1);
frame.set("loop.index0", t_15);
frame.set("loop.revindex", t_16 - t_15);
frame.set("loop.revindex0", t_16 - t_15 - 1);
frame.set("loop.first", t_15 === 0);
frame.set("loop.last", t_15 === t_16 - 1);
frame.set("loop.length", t_16);
output += "\n  <div class=\"comment\">\n    <div class=\"content\">\n      ";
if(runtime.memberLookup((t_18),"user")) {
output += "\n      <a class=\"author\" href=\"/profile/";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_18),"user")),"_id"), env.opts.autoescape);
output += "\">@";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_18),"user")),"username"), env.opts.autoescape);
output += "</a>\n      ";
;
}
else {
output += "\n      <a class=\"author\">Anonymous</a>\n      ";
;
}
output += "\n      <div class=\"metadata\">\n        <span class=\"date\">";
output += runtime.suppressValue(runtime.memberLookup((t_18),"dateCreated"), env.opts.autoescape);
output += "</span>\n      </div>\n      <div class=\"text\">\n        ";
output += runtime.suppressValue(runtime.memberLookup((t_18),"text"), env.opts.autoescape);
output += "\n      </div>\n      <div class=\"actions\">\n        <a class=\"reply\">Reply</a>\n        <form method='POST' action='/like/comment/up/";
output += runtime.suppressValue(runtime.memberLookup((t_18),"id"), env.opts.autoescape);
output += "' style='display: inline;'>\n          <button><i class=\"thumbs up outline icon\"></i>";
output += runtime.suppressValue(runtime.memberLookup((t_18),"upvotes"), env.opts.autoescape);
output += "</button>\n        </form>\n        <form method='POST' action='/like/comment/down/";
output += runtime.suppressValue(runtime.memberLookup((t_18),"id"), env.opts.autoescape);
output += "' style='display: inline;'>\n          <button><i class=\"thumbs down outline icon\"></i>";
output += runtime.suppressValue(runtime.memberLookup((t_18),"downvotes"), env.opts.autoescape);
output += "</button>\n        </form>\n      </div>\n\n    </div>\n  </div>\n  ";
;
}
}
frame = frame.pop();
output += "\n\n  <form class=\"ui reply form\" method=\"POST\" action=\"/post/comment/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"id"), env.opts.autoescape);
output += "\">\n    <div class=\"field\">\n      <textarea name='reply'></textarea>\n    </div>\n    <button class=\"ui blue labeled submit icon button\">\n      <i class=\"icon edit\"></i> Add Reply\n    </button>\n  </form>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_scripts(env, context, frame, runtime, cb) {
var lineno = 114;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n\n<script src=\"https://player.vimeo.com/api/player.js\"></script>\n<script src=\"https://www.youtube.com/iframe_api\"></script>\n<script src=\"/js/player.js\"></script>\n<script src=\"/js/viewClip.js\"></script>\n<script type=\"application/json\" id=\"selected-video\">\n  ";
output += runtime.suppressValue(env.getFilter("safe").call(context, env.getFilter("json").call(context, runtime.contextOrFrameLookup(context, frame, "post"))), env.opts.autoescape);
output += "\n</script>\n<script>\n\n  function onYouTubeIframeAPIReady() {\n    var post = JSON.parse($('#selected-video').html());\n    console.log(post)\n    console.log(post.video.link)\n    loadVideo(post.video.link, post.video.start, post.video.end);\n  }\n</script>\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_title: b_title,
b_body: b_body,
b_scripts: b_scripts,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["profile/profile.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n\n";
env.getTemplate("skel.html", true, "profile/profile.html", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("title"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("rootbody"))(env, context, frame, runtime, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += t_6;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_title(env, context, frame, runtime, cb) {
var lineno = 4;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "@";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "profileUser")),"username"), env.opts.autoescape);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_rootbody(env, context, frame, runtime, cb) {
var lineno = 5;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<div id=\"my\">\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("header.html", false, "profile/profile.html", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
callback(null,t_10);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n\n  <div class=\"ui text container user-top\">\n    <h1 class=\"ui inverted header\">\n      @";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "profileUser")),"username"), env.opts.autoescape);
output += "\n    </h1>\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"id") != runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "profileUser")),"id")) {
output += "\n    <form method='POST' action='/follow/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "profileUser")),"id"), env.opts.autoescape);
output += "' style='display: inline;'>\n      <button class=\"ui button\"><i class=\"thumbs up outline icon\"></i>Follow</button>\n    </form>\n    <br>\n    ";
;
}
output += "\n    <br>\n  </div>\n\n  <div id='menus'>\n    <div class=\"ui four item menu\">\n      <a href=\"/profile/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"id"), env.opts.autoescape);
output += "\" class=\"item\">All</a>\n      <a href=\"/profile/public/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"id"), env.opts.autoescape);
output += "\"class=\"item\">Public</a>\n      <a href=\"/profile/private/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"id"), env.opts.autoescape);
output += "\"class=\"item\">Private</a>\n      <a class=\"item\">Albums</a>\n    </div>\n  </div>\n</div>\n\n<main class=\"ui container\">\n  <h1 class=\"ui header\">My Clips</h1>\n  <div class=\"ui link cards\">\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("post/list.html", false, "profile/profile.html", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
callback(null,t_12);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
callback(null,t_14);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  </div>\n</main>\n";
cb(null, output);
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_title: b_title,
b_rootbody: b_rootbody,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["skel.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n\n<!DOCTYPE html>\n<html lang=\"en\">\n\n  <head>\n    <link rel=\"stylesheet\" type=\"text/css\"\n                           href=\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css\">\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("title"))(env, context, frame, runtime, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += t_1;
output += " - Vimtok</title>\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"/project.css\">\n  </head>\n\n  <body>\n    <div class=\"rootbody\">\n    ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("rootbody"))(env, context, frame, runtime, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += t_3;
output += "\n  </div>\n\n    <div class=\"ui inverted vertical footer segment\">\n      <div class=\"ui container\">\n        <div class=\"ui stackable inverted divided equal height stackable grid\">\n          <div class=\"two wide column\">\n            <h4 class=\"ui inverted header\">About</h4>\n            <div class=\"ui inverted link list\">\n              <a href=\"#\" class=\"item\">Authors</a>\n              <a href=\"#\" class=\"item\">Contact Us</a>\n              <a href=\"https://www.usi.ch/it\" class=\"item\">USI</a>\n            </div>\n          </div>\n          <div class=\"three wide column\">\n            <h4 class=\"ui inverted header\">Technologies</h4>\n            <div class=\"ui inverted link list\">\n              <a href=\"https://semantic-ui.com/\" class=\"item\">SemanticUI</a>\n              <a href=\"https://mozilla.github.io/nunjucks/\" class=\"item\">Nunjucks</a>\n              <a href=\"http://www.passportjs.org/\" class=\"item\">PassportJS</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <script\n      src=\"https://code.jquery.com/jquery-3.1.1.min.js\"\n      integrity=\"sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=\"\n      crossorigin=\"anonymous\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js\"></script>\n    <script src=\"/js/fetch.js\"></script>\n    <script>\n    $(document).ready(() => {\n      $('select.dropdown').dropdown();\n    });\n    </script>\n    <script>\n    $(document).ready(() => {\n      $('div.dropdown').dropdown();\n    });\n    </script>\n    <script src=\"nunjucks.js\"></script>\n    ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("scripts"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n  </body>\n</html>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_title(env, context, frame, runtime, cb) {
var lineno = 10;
var colno = 14;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_rootbody(env, context, frame, runtime, cb) {
var lineno = 16;
var colno = 7;
var output = "";
try {
var frame = frame.push(true);
output += "\n    ";
context.getBlock("header")(env, context, frame, runtime, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += t_7;
output += "\n\n    <main class=\"ui container\">\n      ";
var t_9;
t_9 = (lineno = 22, colno = 35, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "getMessages"), "getMessages", context, []));
frame.set("messages", t_9, true);
if(frame.topLevel) {
context.setVariable("messages", t_9);
}
if(frame.topLevel) {
context.addExport("messages", t_9);
}
output += "\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "messages")),"success")) {
output += "\n      <div class=\"ui positive message\">\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "messages")),"success")), env.opts.autoescape);
output += "\n      </div>\n      ";
;
}
output += "\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "messages")),"info")) {
output += "\n      <div class=\"ui info message\">\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "messages")),"info")), env.opts.autoescape);
output += "\n      </div>\n      ";
;
}
output += "\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "messages")),"warn")) {
output += "\n      <div class=\"ui warning message\">\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "messages")),"warn")), env.opts.autoescape);
output += "\n      </div>\n      ";
;
}
output += "\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "messages")),"error")) {
output += "\n      <div class=\"ui error message\">\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "messages")),"error")), env.opts.autoescape);
output += "\n      </div>\n      ";
;
}
output += "\n      ";
context.getBlock("body")(env, context, frame, runtime, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
output += t_10;
output += "\n    </main>\n    ";
cb(null, output);
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_header(env, context, frame, runtime, cb) {
var lineno = 17;
var colno = 7;
var output = "";
try {
var frame = frame.push(true);
output += "\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("header.html", false, "skel.html", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
callback(null,t_12);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
callback(null,t_14);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
cb(null, output);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_body(env, context, frame, runtime, cb) {
var lineno = 43;
var colno = 9;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_scripts(env, context, frame, runtime, cb) {
var lineno = 88;
var colno = 7;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_title: b_title,
b_rootbody: b_rootbody,
b_header: b_header,
b_body: b_body,
b_scripts: b_scripts,
root: root
};

})();
})();

