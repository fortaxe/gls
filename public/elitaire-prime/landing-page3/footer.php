


<footer>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-sm-12 col-md-10">
				<p class="footer-prgh text-center">
					HARERA: 10 of 2021 Dated 01.03.2021 & 68 of 2023 Dated 29.05.2023 | Licence Number: 34 of 2020 dated: 30-10-2020, Additional License No. 160 of 2022, Date:- 04.10.2022 <br>
					Copyright © GLS Infracon 2023. All rights reserved.
				</p>
				<ul class="footer-list">
					<li><a href="#">PRIVACY POLICY</a></li>
					<li><a href="#">TERMS & CONDITIONS</a></li>
				</ul>
				<p class="footer-prgh pb-5">
					*Source: Data from secondary sources, as of 2018 with an assumption of 10% y-o-y increment <br>
					Disclaimer: The Real Estate (Regulation and Development) Act 2016 and the rules made there have brought significant changes to the real estate sector. The Promoter/Developer is fully committed to be compliant with the provisions laid down under RERA. Promoter / Developer urges every applicant to inspect the site where the project is proposed to be constructed and shall not merely rely upon or to be influenced by any architectural impression, plan or sales brochure and therefore requested to make personal judgment prior to submitting an application for booking. The images shown here are indicative of design and for illustration purpose only. Further, the actual design may vary in fit and finish from the one displayed above. Project details/specification can also be accessed at the oce of Haryana Real Estate Regulatory Authority; website https://haryanarera.gov.in. 1 sq.mt. = 10.763 sq.ft </p>
			</div>
		</div>
	</div>
</footer>

<a href="tel:011-43099673">
	<div class="fix-btn right-pos">
		<svg>
			<use xlink:href="#download-btn"></use>
		</svg>
	</div>
</a>	


	<!-- <div class="fix-btn right-pos" data-toggle="modal" data-target="#enquiry-form">
		<svg>
			<use xlink:href="#download-btn"></use>
		</svg>
	</div> -->	

<!-- <a href="javascript:void(0)" data-toggle="modal" data-target="#enquiry-form">
    <div class="chatbot-btn">
        <img src="images/live-chat.png" alt="">
    </div>
</a> -->

<div class="modal fade" id="enquiry-form">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content ">
      <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        <div class="row">
          <div class="col-sm-12 col-md-12">
            <h2 class="wrap-subhding">Send Your Enquiry </h2>
            <div class="frmsend">
                <form action="enquiry.php" method="post" id="myform" class="pt-3 pb-4">
                    <div class="form-group">
                        <input type="text" name="name" class="form-field" placeholder="Name" required>
                        <span class="form-icon"><i class="fas fa-user"></i></span>
                    </div>
                    <div class="form-group">
                        <input type="text" name="phone" class="form-field" placeholder="Phone Number" required>
                        <span class="form-icon"><i class="fas fa-phone-volume"></i></span>
                    </div>
                    <div class="form-group">
                        <input type="email" name="email" class="form-field" placeholder="Email Address" required>
                        <span class="form-icon"><i class="fas fa-envelope"></i></span>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="submit" name="submit" id="submit-btn" class="form-btn">Submit</button>
                    </div>  
                    <div class="frmloader">
                        <img src="images/formloader.gif" alt="">
                    </div>  
                </form>
            </div>    
          </div>
        </div>
      </div>      
    </div>
  </div>
</div>

<!-- <a href="javascript:void(0)" data-toggle="modal" data-target="#chatbot-modal">
	<div class="chatbot-btn">
		<img src="images/live-chat.png" alt="">
	</div>
</a> 	

<div class="modal fade" id="chatbot-modal">
	<div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content ">
      <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="window.location.reload();">
          <span aria-hidden="true">×</span>
        </button>
        <div class="row">
          <div class="col-sm-12 col-md-12">
            <div class="chatbox">
                <div class="chatlogs" id="chatlogs"></div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  </div>
</div> -->


<?php include("svg-icon.php"); ?>

<script type="text/javascript" src="js/jquery-3.5.1.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript">
	$('ul.navbar-nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});
</script>
<script type="text/javascript">
	 $(document).ready(function(){
       $(".frmsend").submit(function(){
         $(".frmloader").show();
	   })
	})
</script>

<script type="text/javascript" src="js/owl.carousel.min.js"></script>
<script type="text/javascript">
$('#owl-carousel2').owlCarousel({
	  items: 1,
	  loop: true,
	  //center:true,
	  singleItem:true,
	  navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      dots: false,
	  slideBy: 1,
	  margin: 0,
	  animateIn: true,
	  animateOut: true,
	  merge: true,
	  lazyLoad: true,
	  autoplay: false,
	  //autoplayTimeout: 3000,
	  //autoplayHoverPause: true,
	  
});      
$('#owl-carousel3').owlCarousel({
	  items: 1,
	  loop: true,
	  //center:true,
	  singleItem:true,
	  navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      dots: false,
	  slideBy: 1,
	  margin: 0,
	  animateIn: true,
	  animateOut: true,
	  merge: true,
	  lazyLoad: true,
	  autoplay: true,
	  autoplayTimeout: 3000,
	  autoplayHoverPause: true,
	  
});       
</script>

<!-- Ctrl + U Disable -->
<!-- <script>
document.onkeydown = function(e) {
  if (e.ctrlKey && 
      (e.keyCode === 67 || 
       e.keyCode === 86 || 
       e.keyCode === 85 || 
       e.keyCode === 117)) {
      return false;
  } else {
      return true;
  }
};
$(document).keypress("u",function(e) {
  if(e.ctrlKey)
  {
	return false;
	}
	else
	{
	return true;
	}
});
</script> -->
<!-- Right click disable -->
<!-- <script type="text/javascript">
	$(document).on({
    "contextmenu": function (e) {
        console.log("ctx menu button:", e.which); 

        // Stop the context menu
        e.preventDefault();
    },
    "mousedown": function(e) { 
        console.log("normal mouse down:", e.which); 
    },
    "mouseup": function(e) { 
        console.log("normal mouse up:", e.which); 
    }
});
</script> -->
<script type="text/javascript">
	$(document).ready(function(){
		// Mobile Toggle button
		$(".mobbtn").click(function(){
			$(this).toggleClass("is-active");
		})
		 
	})
</script>


</body>
</html>