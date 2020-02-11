/*!
 * ScrollMagic v2.0.5 (2015-04-29)
 * The javascript library for magical scroll interactions.
 * (c) 2015 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.5
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic Velocity Animation Plugin.
 *
 * requires: velocity ~1.2
 * Powered by VelocityJS: http://VelocityJS.org
 * Velocity is published under MIT license.
 */
!function(e,o){"function"==typeof define&&define.amd?define(["ScrollMagic","velocity"],o):"object"==typeof exports?o(require("scrollmagic"),require("velocity")):o(e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic,e.Velocity||e.jQuery&&e.jQuery.Velocity)}(this,function(e,o){"use strict";var i="animation.velocity",t=window.console||{},n=Function.prototype.bind.call(t.error||t.log||function(){},t);e||n("("+i+") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."),o||n("("+i+") -> ERROR: Velocity could not be found. Please make sure it's loaded before ScrollMagic or use an asynchronous loader like requirejs.");var r=0;e.Scene.extend(function(){var t,n,u,c,l=this,a=e._util,s=0,d=function(){l._log&&(Array.prototype.splice.call(arguments,1,0,"("+i+")","->"),l._log.apply(this,arguments))};l.on("progress.plugin_velocity",function(){p()}),l.on("destroy.plugin_velocity",function(e){l.off("*.plugin_velocity"),l.removeVelocity(e.reset)});var f=function(e,i,t){a.type.Array(e)?e.forEach(function(e){f(e,i,t)}):(o.Utilities.data(e,c)||o.Utilities.data(e,c,{reverseProps:a.css(e,Object.keys(n))}),o(e,i,t),void 0!==t.queue&&o.Utilities.dequeue(e,t.queue))},y=function(e,i){if(a.type.Array(e))e.forEach(function(e){y(e,i)});else{var t=o.Utilities.data(e,c);t&&t.reverseProps&&(o(e,t.reverseProps,i),void 0!==i.queue&&o.Utilities.dequeue(e,i.queue))}},p=function(){if(t){var e=l.progress();e!=s&&(0===l.duration()&&(e>0?f(t,n,u):y(t,u)),s=e)}};l.setVelocity=function(e,o,s){t&&l.removeVelocity(),t=a.get.elements(e),n=o||{},u=s||{},c="ScrollMagic."+i+"["+r++ +"]",void 0!==u.queue&&(u.queue=c+"_queue");var f=function(){0!==l.duration()&&d(1,"ERROR: The Velocity animation plugin does not support scrollbound animations (scenes with duration) yet.")};return l.on("change.plugin_velocity",function(e){"duration"==e.what&&f()}),f(),d(3,"added animation"),p(),l},l.removeVelocity=function(e){return t&&(void 0!==u.queue&&o(t,"stop",u.queue),e&&y(t,{duration:0}),t.forEach(function(e){o.Utilities.removeData(e,c)}),t=n=u=c=void 0),l}})});