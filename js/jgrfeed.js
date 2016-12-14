/******************************************************
* #### jQuery Github Repos Feed v0.0.1 ####
* Coded by Ican Bachors 2016.
* http://ibacor.com/labs/jquery-github-repos-feed
* Updates will be posted to this site.
******************************************************/

var jgrfeed = function(h, k) {
	
    var j = '<div class="jgrfeed_direktori"></div>' + '<div class="jgrfeed_read_file"><i class="fa fa-code"></i> <a href="https://github.com/' + h + '/' + k + '" target="_BLANK">' + h + '/' + k + '</a></div>' + '<textarea id="jgrfeed_text"></textarea>';
	$("#jgrfeed").html(j);
    jgrfeed_direktori('');
	var l = CodeMirror.fromTextArea(document.getElementById("jgrfeed_text"), {
		mode: "text/html",
		lineNumbers: true
	});
	
    function jgrfeed_direktori(g) {
        $.ajax({
            type: "GET",
            url: 'https://api.github.com/repos/' + h + '/' + k + '/contents/' + g,
            crossDomain: true,
            dataType: "json"
        }).done(function(c) {
            var r = "";
            r += '<div class="jgrfeed_header"><div>Name</div><div>Size</div></div>';
            r += '<div class="jgrfeed_body">';
            if (g != "") {
                var d = g.split('/'),
					e = [];
                for (i = 0; i < d.length - 1; i++) {
                    e.push(d[i])
                }
                var f = (d.length > 1 ? e.join('/') : '');
                r += '<div class="jgrfeed_root"><i class="bsub fa fa-level-up" data-bsub="' + f + '" title="Up"></i> ' + g + unescape('%3C%61%20%68%72%65%66%3D%27%68%74%74%70%73%3A%2F%2F%67%69%74%68%75%62%2E%63%6F%6D%2F%62%61%63%68%6F%72%73%2F%6A%51%75%65%72%79%2D%47%69%74%68%75%62%2D%52%65%70%6F%73%2D%46%65%65%64%27%20%74%69%74%6C%65%3D%27%6A%51%75%65%72%79%20%47%69%74%68%75%62%20%52%65%70%6F%73%20%46%65%65%64%27%20%73%74%79%6C%65%3D%27%66%6C%6F%61%74%3A%72%69%67%68%74%27%20%74%61%72%67%65%74%3D%27%5F%42%4C%41%4E%4B%27%3E%3C%69%20%63%6C%61%73%73%3D%27%66%61%20%66%61%2D%69%6E%66%6F%2D%63%69%72%63%6C%65%27%3E%3C%2F%69%3E%3C%2F%61%3E%3C%2F%64%69%76%3E')
            }
            $.each(c, function(i, a) {
                if (c[i].type == "dir") {
                    r += '<div class="jgrfeed_content"><div class="name"><span class="sub fa" data-sub="' + c[i].path + '"><i class="fa fa-folder"></i> ' + c[i].name + '</span></div><div class="size">-</div></div>'
                } else {
                    var b = jgrfeed_size(c[i].size),
						s = c[i].path.substr(c[i].path.lastIndexOf(".") + 1);
                    switch (s) {	
					
						// download file
                        case "jpg":
                        case "png":
                        case "gif":
                        case "rar":
                        case "tar":
                        case "zip":
                        case "exe":
                        case "jar":
                            r += '<div class="jgrfeed_content"><div class="name"><a href="' + c[i].html_url + '" target="_blank"><i class="fa fa-cloud-download"></i> ' + c[i].name + '</a></div><div class="size">' + b + '</div></div>';
                            break;
							
						// read file
                        default:
                            r += '<div class="jgrfeed_content"><div class="name"><span class="rfile fa" data-rfile="' + c[i].path + '"><i class="fa fa-file-text-o"></i> ' + c[i].name + '</span></div><div class="size">' + b + '</div></div>'
                    }
                }
            });
            r += "</div>";
            $(".jgrfeed_direktori").html(r);
            $(".sub").click(function() {
                var t = $(this).data("sub");
                jgrfeed_direktori(t);
                return false
            });
            $(".bsub").click(function() {
                var t = $(this).data("bsub");
                jgrfeed_direktori(t);
                return false
            });
            $(".rfile").click(function() {
                var a = $(this).data("rfile");
                jgrfeed_file(a);
                return false
            })
        })
    }

    function jgrfeed_file(b) {
        $.ajax({
            type: "GET",
            url: 'https://raw.githubusercontent.com/' + h + '/' + k + '/master/' + b,
            crossDomain: true
        }).done(function(a) {
            $(".jgrfeed_read_file").html('<i class="fa fa-code"></i> <a href="https://github.com/' + h + '/' + k + '" target="_BLANK">' + h + '/' + k + '</a>/' + b);
            l.setValue(a)
        })
    }

    function jgrfeed_size(e) {
        var t = ["Bytes", "KB", "MB", "GB", "TB"];
        if (e == 0) return "0 Bytes";
        var n = parseInt(Math.floor(Math.log(e) / Math.log(1024)));
        return Math.round(e / Math.pow(1024, n), 2) + " " + t[n]
    }
}
