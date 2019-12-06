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
output += "\n<h1 class=\"ui header\">Feed</h1>\n";
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
output += "\n";
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
output += "\n\n\n";
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
output += "\n<h1 class=\"ui header\">Gallery</h1>\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("post/list.html", false, "gallery.html", false, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
callback(null,t_10);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
callback(null,t_12);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
cb(null, output);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_scripts(env, context, frame, runtime, cb) {
var lineno = 9;
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
b_title: b_title,
b_body: b_body,
b_scripts: b_scripts,
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
output += "\n\n<div class=\"ui inverted header segment\" style=\"border-radius: 0\">\n  <div class=\"ui large secondary inverted menu main-menu\">\n    ";
if(!runtime.contextOrFrameLookup(context, frame, "index")) {
output += "\n    <div class=\"item\">\n      <div class=\"ui logo shape\">\n        <div class=\"sides\">\n          <div class=\"active ui side\">\n            <a href=\"/\" class=\"vimtok\">Vimtok</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    ";
;
}
output += "\n    <div class=\"left item\">\n      <a href=\"/post/new\" class=\"header active item\">New Post</a>\n      <a href=\"/post/gallery\" class=\"header active item\">Gallery</a>\n      ";
if(runtime.contextOrFrameLookup(context, frame, "user")) {
output += "\n      <a href=\"/follow/feed\" class=\"header active item\">Feed</a>\n      ";
;
}
output += "\n    </div>\n    <div class=\"right item\">\n      <div  class=\"ui icon input\" style=\"margin-left: 1em;\">\n        <form   method=\"GET\" action='/search'> \n         <input type=\"text\" name= \"searchBar\" placeholder=\"Search Posts, Users...\">\n         <input type=\"submit\" style=\"visibility: hidden;\">\n        </form> \n        <i class=\"inverted circular search link icon\"></i>\n      </div>\n    </div>\n    ";
if(!runtime.contextOrFrameLookup(context, frame, "user")) {
output += "\n    <div class=\"right item\">\n      <a href=\"/auth/login\" class=\"ui inverted button user-btn\">Log in</a>\n      <a href=\"/auth/signup\" class=\"ui inverted button\">Sign Up</a>\n    </div>\n    ";
;
}
else {
output += "\n    <div class=\"right item\">\n      <a href=\"/profile/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"id"), env.opts.autoescape);
output += "\" class=\"ui inverted button user-btn\">\n        <i class=\"user icon\"></i> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"username"), env.opts.autoescape);
output += "\n      </a>\n      <a href=\"/auth/logout\" class=\"ui inverted button\">Logout</a>\n    </div>\n    ";
;
}
output += "\n  </div>\n</div>\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("scripts"))(env, context, frame, runtime, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += t_1;
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
var lineno = 46;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<script src=\"https://code.jquery.com/jquery-3.4.1.min.js\"></script>\n<script src=\"/js/search.js\"></script>\n<script> searchInit() </script>\n";
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
output += "\n<script src=\"https://player.vimeo.com/api/player.js\"></script>\n<script src=\"/js/player.js\"></script>\n<script src=\"/js/regex.js\"></script>\n<script src=\"/js/newClip.js\"></script>\n<script src=\"https://www.youtube.com/iframe_api\"></script>\n";
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
output += "\n\n<div class=\"ui three stackable cards\">\n  ";
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
output += "\n  <div class=\"card\">\n    <img width=\"100%\" height=\"56.25%\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"video")),"thumbnailLink"), env.opts.autoescape);
output += "\"\n                                      onclick=\"window.location='/post/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "'\">\n    <div class=\"content\">\n      ";
if(runtime.memberLookup((t_4),"user")) {
output += "\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"id") == runtime.memberLookup((runtime.memberLookup((t_4),"user")),"id")) {
output += "\n      <div class=\"ui dropdown\" style=\"float: right;\">\n        <i class=\"dropdown icon\"></i>\n        <div class=\"menu\">\n          ";
output += "\n          ";
output += "\n          ";
output += "\n          <form class=\"item\" method=\"GET\" action=\"/post/edit/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "\">\n            <button>\n              <i class=\"edit icon\"></i>\n              Edit\n            </button>\n          </form>\n          <form class=\"item\" method=\"POST\" action=\"/post/delete/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "?_method=DELETE\">\n            <button>\n              <i class=\"trash icon\"></i>\n              Delete\n            </button>\n          </form>\n          <div class=\"divider\"></div>\n          <form class=\"item\" method=\"GET\" action=\"/post/gallery\">\n            <button>\n              <i class=\"folder icon\"></i>\n              Add to Album\n            </button>\n          </form>\n        </div>\n      </div>\n      ";
;
}
output += "\n      ";
;
}
output += "\n      <div class=\"header\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title"), env.opts.autoescape);
output += "</div>\n      <br>\n\n      <a class=\"teal ui label\" ";
if(runtime.memberLookup((t_4),"user")) {
output += "href=\"/profile/";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"user")),"_id"), env.opts.autoescape);
output += "\"";
;
}
output += ">\n        <i class=\"user icon\"></i>\n        ";
if(!runtime.memberLookup((t_4),"user")) {
output += "\n        Anonymous\n        ";
;
}
else {
output += "\n        ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"user")),"username"), env.opts.autoescape);
output += "\n        ";
;
}
output += "\n      </a>\n      <div class=\"ui grey label\">\n        ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"views"), env.opts.autoescape);
output += " views\n      </div>\n      <br>\n      ";
frame = frame.push();
var t_7 = runtime.memberLookup((t_4),"tags");
if(t_7) {t_7 = runtime.fromIterator(t_7);
var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("tag", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\n      ";
if(t_8) {
output += "\n        <a class=\"ui red label\" href=\"/search/";
output += runtime.suppressValue(t_8, env.opts.autoescape);
output += "\">#";
output += runtime.suppressValue(t_8, env.opts.autoescape);
output += "</a>\n      ";
;
}
output += "\n      ";
;
}
}
frame = frame.pop();
output += "\n      <br>\n      <a class=\"ui label\" style=\"margin-top: .5em\">\n        <i class=\"calendar icon\"></i>";
output += runtime.suppressValue((lineno = 62, colno = 62, runtime.callWrap(runtime.memberLookup((runtime.memberLookup((t_4),"dateCreated")),"slice"), "post[\"dateCreated\"][\"slice\"]", context, [4,21])), env.opts.autoescape);
output += "\n      </a>\n    </div>\n    <div class=\"extra content\">\n      <span class=\"right floated\">\n          <button id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "likeup\" class=\"ui tiny blue button likeUp\">\n            <i class=\"thumbs up icon\"></i>\n            <span class='num'>\n              ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"upvotes"), env.opts.autoescape);
output += "\n            </span>\n          </button>\n          <button  id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "likedown\" class=\"ui tiny red button likeDown\">\n            <i class=\"thumbs down icon\"></i>\n            <span class='num'>\n              ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"downvotes"), env.opts.autoescape);
output += "\n            </span>\n          </button>\n      </span>\n    </div>\n  </div>\n\n  ";
;
}
}
if (!t_2) {
output += "\n  <div class=\"ui sixteen wide column\">\n    <div class=\"ui card\" style=\"width: 70vw\">\n      <div class=\"ui placeholder segment\">\n        <div class=\"ui icon header\">\n          <i class=\"video icon\"></i>\n          <h4><em>Oops! No post found.</em></h4>\n        </div>\n      </div>\n    </div>\n  </div>\n  ";
}
frame = frame.pop();
output += "\n</div>\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("scripts"))(env, context, frame, runtime, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
output += t_9;
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
var lineno = 97;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <script src=\"https://code.jquery.com/jquery-3.1.1.min.js\"> </script>\n  <script src=\"/js/like.js\"></script><script> likeStart(); </script>\n  <script src=\"https://mozilla.github.io/nunjucks/files/nunjucks.js\"> </script>\n  <script src=\"/js/visibility.js\"></script><script> visibilityStart(); </script>\n\n";
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
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("title"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("body"))(env, context, frame, runtime, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += t_6;
output += "\n\n";
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
var lineno = 4;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "New Post";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_body(env, context, frame, runtime, cb) {
var lineno = 5;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n\n<div class=\"ui grid segment\">\n  <div class=\"row centered\">\n    <div class=\"ui sixteen wide column\" id=\"player\"></div>\n    <div class=\"ui sixteen wide column\">\n      <h2 class=\"margin-top center\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"title"), env.opts.autoescape);
output += "</h2>\n    </div>\n    <div class=\"ui sixteen wide column center margin-top\">\n      ";
frame = frame.push();
var t_12 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"tags");
if(t_12) {t_12 = runtime.fromIterator(t_12);
var t_11 = t_12.length;
for(var t_10=0; t_10 < t_12.length; t_10++) {
var t_13 = t_12[t_10];
frame.set("tag", t_13);
frame.set("loop.index", t_10 + 1);
frame.set("loop.index0", t_10);
frame.set("loop.revindex", t_11 - t_10);
frame.set("loop.revindex0", t_11 - t_10 - 1);
frame.set("loop.first", t_10 === 0);
frame.set("loop.last", t_10 === t_11 - 1);
frame.set("loop.length", t_11);
output += "\n      ";
if(t_13) {
output += "\n      <a class=\"ui red label\" href=\"/search/";
output += runtime.suppressValue(t_13, env.opts.autoescape);
output += "\">#";
output += runtime.suppressValue(t_13, env.opts.autoescape);
output += "</a>\n      ";
;
}
output += "\n      ";
;
}
}
frame = frame.pop();
output += "\n\n      <a class=\"ui teal label\"\n         ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"user")) {
output += "href=\"/profile/";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"user")),"_id"), env.opts.autoescape);
output += "\"";
;
}
output += ">\n        <i class=\"user icon\"></i>\n        ";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"user")),"username")) {
output += "\n        ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"user")),"username"), env.opts.autoescape);
output += "\n        ";
;
}
else {
output += "\n        Anonymous\n        ";
;
}
output += "\n      </a>\n      <a class=\"ui label\">\n        <i class=\"calendar icon\"></i>";
output += runtime.suppressValue((lineno = 30, colno = 62, runtime.callWrap(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"dateCreated")),"slice"), "post[\"dateCreated\"][\"slice\"]", context, [4,21])), env.opts.autoescape);
output += "\n      </a>\n      <div class=\"ui grey label\" href=\"#\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"views"), env.opts.autoescape);
output += " views</div>\n    </div>\n    <div class=\"ui sixteen wide column\">\n        <button id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"id"), env.opts.autoescape);
output += "likeup\" class=\"ui labeled button likeUp\" tabindex=\"0\">\n          <div class=\"ui blue icon button\">\n            <i class=\"thumbs up icon\"></i>\n          </div>\n          <a class=\"ui basic label num\">\n            ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"upvotes"), env.opts.autoescape);
output += "\n          </a>\n        </button>\n        <button id=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"id"), env.opts.autoescape);
output += "likedown\" class=\"ui labeled button likeDown\" tabindex=\"0\">\n          <div class=\"ui red icon button\">\n            <i class=\"thumbs down icon\"></i>\n          </div>\n          <a class=\"ui basic label num\">\n            ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"downvotes"), env.opts.autoescape);
output += "\n          </a>\n        </button>\n        <a class=\"ui orange button\" href=\"/post/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"id"), env.opts.autoescape);
output += "/gif\" target=\"_blank\">GIF it</a>\n    </div>\n  </div>\n</div>\n\n<div class=\"ui comments center-margin\">\n  ";
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
var t_16 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"comments");
if(t_16) {t_16 = runtime.fromIterator(t_16);
var t_15 = t_16.length;
for(var t_14=0; t_14 < t_16.length; t_14++) {
var t_17 = t_16[t_14];
frame.set("comment", t_17);
frame.set("loop.index", t_14 + 1);
frame.set("loop.index0", t_14);
frame.set("loop.revindex", t_15 - t_14);
frame.set("loop.revindex0", t_15 - t_14 - 1);
frame.set("loop.first", t_14 === 0);
frame.set("loop.last", t_14 === t_15 - 1);
frame.set("loop.length", t_15);
output += "\n  <div class=\"comment\">\n    <div class=\"content\">\n      ";
if(runtime.memberLookup((t_17),"user")) {
output += "\n      <a class=\"author\" href=\"/profile/";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_17),"user")),"_id"), env.opts.autoescape);
output += "\">@";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_17),"user")),"username"), env.opts.autoescape);
output += "</a>\n      ";
;
}
else {
output += "\n      <a class=\"author\">Anonymous</a>\n      ";
;
}
output += "\n      <div class=\"metadata\">\n        <span class=\"date\">";
output += runtime.suppressValue(runtime.memberLookup((t_17),"dateCreated"), env.opts.autoescape);
output += "</span>\n      </div>\n      <div class=\"text\">\n        ";
output += runtime.suppressValue(runtime.memberLookup((t_17),"text"), env.opts.autoescape);
output += "\n      </div>\n      <div class=\"actions\">\n        <a class=\"reply\">Reply</a>\n\n          <button id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_17),"id"), env.opts.autoescape);
output += "likeup\" class=\"ui blue tiny button likeUpComment\">\n            <i class=\"thumbs up icon\"></i>\n            <span class='num'>\n              ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"upvotes"), env.opts.autoescape);
output += "\n            </span>\n          </button>\n\n          <button id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_17),"id"), env.opts.autoescape);
output += "likedown\" class=\"ui red tiny button likeDownComment\">\n            <i class=\"thumbs down icon\"></i>\n            <span class='num'>\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"downvotes"), env.opts.autoescape);
output += "\n            </span>\n          </button>\n      </div>\n    </div>\n  </div>\n  ";
;
}
}
frame = frame.pop();
output += "\n\n  <form class=\"ui reply form\" method=\"POST\" action=\"/post/comment/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "post")),"id"), env.opts.autoescape);
output += "\">\n    <div class=\"field\">\n      <textarea name=\"reply\"></textarea>\n    </div>\n    <button class=\"ui blue labeled submit icon button\">\n      <i class=\"icon edit\"></i> Add Reply\n    </button>\n  </form>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_scripts(env, context, frame, runtime, cb) {
var lineno = 136;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<script> src=\"https://code.jquery.com/jquery-3.1.1.min.js\" </script>\n<script src=\"/js/like.js\"></script><script> likeStart(); </script>\n<script src=\"https://player.vimeo.com/api/player.js\"></script>\n<script src=\"https://www.youtube.com/iframe_api\"></script>\n<script src=\"/js/player.js\"></script>\n<script src=\"/js/regex.js\"></script>\n<script type=\"application/json\" id=\"selected-video\">\n  ";
output += runtime.suppressValue(env.getFilter("safe").call(context, env.getFilter("json").call(context, runtime.contextOrFrameLookup(context, frame, "post"))), env.opts.autoescape);
output += "\n</script>\n<script src=\"/js/viewClip.js\"></script>\n<script>\n  function onYouTubeIframeAPIReady() {\n    const post = JSON.parse($(\"#selected-video\").html());\n    loadVideo(post.video.link, post.video.start, post.video.end);\n  }\n</script>\n\n";
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
output += "\n    <br>\n  </div>\n\n  <div id='menus'>\n    <div class=\"ui four item menu\">\n      <a id=\"all\" class=\"item\">All</a>\n      <a id=\"public\" class=\"item\">Public</a>\n      <a id=\"private\" class=\"item\">Private</a>\n      <a class=\"item\">Albums</a>\n    </div>\n  </div>\n</div>\n\n<main class=\"ui container\">\n  <h1 class=\"ui header\">My Clips</h1>\n  ";
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
output += "\n</main>\n\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["prova.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("ciao"))(env, context, frame, runtime, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += t_1;
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
function b_ciao(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n\n  ";
frame = frame.push();
var t_5 = runtime.contextOrFrameLookup(context, frame, "posts");
if(t_5) {t_5 = runtime.fromIterator(t_5);
var t_4 = t_5.length;
for(var t_3=0; t_3 < t_5.length; t_3++) {
var t_6 = t_5[t_3];
frame.set("post", t_6);
frame.set("loop.index", t_3 + 1);
frame.set("loop.index0", t_3);
frame.set("loop.revindex", t_4 - t_3);
frame.set("loop.revindex0", t_4 - t_3 - 1);
frame.set("loop.first", t_3 === 0);
frame.set("loop.last", t_3 === t_4 - 1);
frame.set("loop.length", t_4);
output += "\n\n    <h1> OOOOOO </h1>\n  ";
;
}
}
frame = frame.pop();
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_ciao: b_ciao,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["searchResult.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n";
env.getTemplate("skel.html", true, "searchResult.html", false, function(t_3,t_2) {
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
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("users"))(env, context, frame, runtime, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
output += t_8;
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
output += "Reasult";
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
output += "\n<h1 class=\"ui header\">Result</h1>\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("post/list.html", false, "searchResult.html", false, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
callback(null,t_10);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
callback(null,t_12);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
cb(null, output);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_users(env, context, frame, runtime, cb) {
var lineno = 7;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<div>\n    <ul>\n    ";
frame = frame.push();
var t_16 = runtime.contextOrFrameLookup(context, frame, "users");
if(t_16) {t_16 = runtime.fromIterator(t_16);
var t_15 = t_16.length;
for(var t_14=0; t_14 < t_16.length; t_14++) {
var t_17 = t_16[t_14];
frame.set("user", t_17);
frame.set("loop.index", t_14 + 1);
frame.set("loop.index0", t_14);
frame.set("loop.revindex", t_15 - t_14);
frame.set("loop.revindex0", t_15 - t_14 - 1);
frame.set("loop.first", t_14 === 0);
frame.set("loop.last", t_14 === t_15 - 1);
frame.set("loop.length", t_15);
output += "\n    <a href=\"/profile/";
output += runtime.suppressValue(runtime.memberLookup((t_17),"_id"), env.opts.autoescape);
output += "\"><li> {user.username} </li></a>\n    ";
;
}
}
frame = frame.pop();
output += "\n    </ul>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_title: b_title,
b_body: b_body,
b_users: b_users,
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
output += "\n  </div>\n\n    <div class=\"ui inverted vertical footer segment\">\n      <div class=\"ui container\">\n        <div class=\"ui stackable inverted divided equal height stackable grid\">\n          <div class=\"two wide column\">\n            <h4 class=\"ui inverted header\">About</h4>\n            <div class=\"ui inverted link list\">\n              <a href=\"#\" class=\"item\">Authors</a>\n              <a href=\"#\" class=\"item\">Contact Us</a>\n              <a href=\"https://www.usi.ch/it\" class=\"item\">USI</a>\n            </div>\n          </div>\n          <div class=\"three wide column\">\n            <h4 class=\"ui inverted header\">Technologies</h4>\n            <div class=\"ui inverted link list\">\n              <a href=\"https://semantic-ui.com/\" class=\"item\">SemanticUI</a>\n              <a href=\"https://mozilla.github.io/nunjucks/\" class=\"item\">Nunjucks</a>\n              <a href=\"http://www.passportjs.org/\" class=\"item\">PassportJS</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <script\n      src=\"https://code.jquery.com/jquery-3.1.1.min.js\"\n      integrity=\"sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=\"\n      crossorigin=\"anonymous\"></script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js\"></script>\n    <script src=\"/js/fetch.js\"></script>\n    <script src=\"/js/templates.js\"></script>\n    <script>\n      $(document).ready(() => {\n        $('select.dropdown').dropdown();\n      });\n      </script>\n      <script>\n      $(document).ready(() => {\n        $('div.dropdown').dropdown();\n      });\n    </script>\n    ";
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

