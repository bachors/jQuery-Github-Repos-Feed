# jQuery-Github-Repos-Feed
jQuery Github Repos Feed

<h3>Usage</h3>
CSS
<pre>&lt;!-- Include Font Awesome --&gt;
&lt;link href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"&gt;

&lt;!-- Codemirror --&gt;
&lt;link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/4.3.0/codemirror.min.css"&gt;
&lt;link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/4.3.0/addon/dialog/dialog.min.css"&gt;

&lt;!-- jgrfeed Style --&gt;
&lt;link type="text/css" rel="stylesheet" href="css/jgrfeed.css" /&gt;</pre>

HTML
<pre>&lt;div id="jgrfeed"&gt;&lt;/div&gt;</pre>

JS
<pre>&lt;!-- Codemirror --&gt;
&lt;script src="//cdnjs.cloudflare.com/ajax/libs/codemirror/4.3.0/codemirror.min.js"&gt;&lt;/script&gt;
&lt;script src="//cdnjs.cloudflare.com/ajax/libs/codemirror/4.3.0/mode/xml/xml.min.js"&gt;&lt;/script&gt;
&lt;script src="//cdnjs.cloudflare.com/ajax/libs/codemirror/4.3.0/mode/javascript/javascript.min.js"&gt;&lt;/script&gt;
&lt;script src="//cdnjs.cloudflare.com/ajax/libs/codemirror/4.3.0/mode/css/css.min.js"&gt;&lt;/script&gt;
&lt;script src="//cdnjs.cloudflare.com/ajax/libs/codemirror/4.3.0/mode/htmlmixed/htmlmixed.min.js"&gt;&lt;/script&gt;
&lt;script src="//cdnjs.cloudflare.com/ajax/libs/codemirror/4.3.0/addon/dialog/dialog.min.js"&gt;&lt;/script&gt;
&lt;script src="//cdnjs.cloudflare.com/ajax/libs/codemirror/4.3.0/addon/search/searchcursor.min.js"&gt;&lt;/script&gt;
&lt;script src="//cdnjs.cloudflare.com/ajax/libs/codemirror/4.3.0/addon/search/search.min.js"&gt;&lt;/script&gt;

&lt;!-- Include jQuery --&gt;
&lt;script src="//code.jquery.com/jquery-2.1.1.min.js"&gt;&lt;/script&gt;

&lt;!-- Include jgrfeed.js --&gt;
&lt;script src="js/jgrfeed.js"&gt;&lt;/script&gt;
&lt;script&gt;

// https://github.com/{username}/{reponame}

var username = 'bachors', // username
reponame = 'Chat-Realtime'; // reponame

// run
jgrfeed(username, reponame);
        
&lt;/script&gt;</pre>
