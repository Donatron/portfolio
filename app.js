$(document).ready(function(){function e(e,a,t,s){let o='<div class="card col-6 col-md-3 badges" style="width: 20rem;">';return o+='<img class="card-img-top treehouse-badge" ',o+='src="'+e+'" ',o+='alt="Image for Treehouse "'+a+'" badge">',o+='<div class="card-body text-center">',o+='<h4 class="card-title">Badge Name:</h4>',o+="<p>"+a+"</p>",o+="<h4>Course:</h4>",o+="<p>"+t+"</p>",o+="</div>",o+='<a href="'+s+'" target="_blank"',o+='class="btn btn-outline-info btn-badges mb-5 mx-2">View Course</a>',o+="</div>"}function a(e,a){return $html='<div class="col-6 col-md-4 text-center mb-3 treehouse-points">',$html+="<h4>"+e+"</h4>",$html+="<p>"+a+" points</p>",$html+="</div>",$html}var t=(new Date).getFullYear();$("#date").append(t),$(".nav-link").click(function(e){var a=$(this).attr("href");$("html, body").animate({scrollTop:$(a).offset().top-30},1e3),e.preventDefault()}),$(".nav-toggler").click(function(){$("#myNavbar").toggle("collapse")}),$(".nav-link").click(function(){$("#myNavbar").toggle("collapse")}),$("#myNavbar").sticky({topSpacing:-100}),$("#myNavbar").on("sticky-start",function(){$("#myNavbar").css("background-color","pink")}),$(".skills-card").hover(function(){$(this).find("i.colored").toggleClass("colored")},function(){$(this).find("i").addClass("colored")});try{$.getJSON({url:"https://teamtreehouse.com/donmacarthur.json",context:document.body}).done(function(t){function s(e){return $index=Math.floor(Math.random()*e)+1,$index}$(".loading-spinner").hide();try{$totalBadges=t.badges.length,$headingHTML=function(e){let a='<p class="col-12 text-center">';return a+="These are some of the "+e+" badges I have received for my achievements with ",a+='<a href="https://teamtreehouse.com" class="treehouse-link">Team Treehouse</a> so far</p>',a+='<p class="col-12 text-center">Click <a href="badges.html">here</a> to see all my badges</p>'}($totalBadges),$("#badges-heading").append($headingHTML)}catch(e){console.log("There is an error here: "+e)}for(let a=1;a<=8;a++)$index=s(t.badges.length),$badgeImage=t.badges[$index].icon_url,$badgeName=t.badges[$index].name,$course=t.badges[$index].courses[0].title,$courseURL=t.badges[$index].url,$badgeHTML=e($badgeImage,$badgeName,$course,$courseURL),$("#badges").append($badgeHTML);for(let a=1;a<t.badges.length;a++)$badgeImage=t.badges[a].icon_url,$badgeName=t.badges[a].name,$course=t.badges[a].courses[0].title,$courseURL=t.badges[a].url,$badgeHTML=e($badgeImage,$badgeName,$course,$courseURL),$("#my-badges").append($badgeHTML);$values=Object.values(t.points),$keys=Object.keys(t.points),$totalPoints=0;for($key in $keys)$values[$key]>1e3&&"total"!=$keys[$key]&&($language=$keys[$key],$points=$values[$key],$pointsHTML=a($language,$points),$("#points").append($pointsHTML))})}catch(e){console.log("This line is evaluating")}$(".skills-card").hover(function(){$(this).$(this).css("background-color","black")})});