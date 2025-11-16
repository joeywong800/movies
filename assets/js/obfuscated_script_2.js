function playVideo() {
    		document.getElementById("iframe").innerHTML='<iframe id="full-screen-me" style="height:100%;width:100%;" height="100%" width="100%" frameborder="0" wmode="transparent" src="' + video1 + '" loading="lazy" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media;" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>';
            window.onresize = autoResizeDiv;
            autoResizeDiv();
    	}

		function gantiSource(server) {
			if(server === undefined || server == null || server.length <= 0 || server <= false) {
				alert("Sorry, Server not available!");
			}
			else {
				document.getElementById("full-screen-me").src=server;
			}
		}

		function tampilButton(x) {
            x.style.right = '105px';
            
        }

        function normalButton(x) {
            x.style.right = '0px';
            
        }

        function tutup() {
            document.getElementById("sticky-footer2").style.right='0px';
            
        }
        
        function buka() {
            document.getElementById("sticky-footer2").style.right='105px';
            
        }

        function autoResizeDiv()
        {
            document.getElementById('full-screen-me').style.height = window.innerHeight +'px';
        }
        window.onresize = autoResizeDiv;
        autoResizeDiv();