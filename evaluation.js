$(document).ready(function(){
    $(".menu").click(function(){
        $(this).addClass("bckgr");
        $(".menu").not(this).css("background-color","").removeClass("bckgr");
        if($(this).text()==="Technical Skills"){
            $("#technical").show();
            $("#general").hide();
             $("#overall").hide();
            $(".back").attr("disabled","disabled");
        }
         else if($(this).text()==="General Skills"){
            $("#general").show();
            $("#overall").hide();
            $("#technical").hide();
            $(".back").attr("disabled",false);
        }
        else if($(this).text()==="Overall Summery"){
            $("#overall").show();
             $("#technical").hide();
             $("#general").hide();
             $(".back").attr("disabled",false);
        }
    });
    
    $(document.body).on('click','.removeskill',function(){
       // alert("hello");
    $(this).closest(".singlerow").remove();
    });
    
    $(document.body).on('click',".tablecell",function(){
        $(this).css("background-color","powderblue").prevAll().css("background-color","powderblue");
         $(this).nextAll().css("background-color","");
    });
    
$(".as").click(function(){
    var v="<div class='col-sm-12 singlerow'><div class='col-sm-6'><div class='form-group'><input type='text' class='form-control' id='ip1'></div></div><div class='col-sm-6'><div  class='margin'><div class='divinline'><span class='glyphicon glyphicon-remove-sign removeskill'></span></div><div class='borderspace divinline'><div class='tablecell'>1</div> <div class='tablecell'>2</div><div class='tablecell'>3</div><div class='tablecell'>4</div><div class='tablecell'>5</div><div class='tablecell'>6</div><div class='tablecell'>7</div><div class='tablecell'>8</div><div class='tablecell'>9</div><div class='tablecell'>10</div></div></div></div></div>";
   
    //v.insertBefore(this);
    $(".addSkill").before(v);
  //  $("#general").append(v);
    
});

function makeAJAXcall(){    
return $.ajax({
    url:"data.json",
    dataType:"json",
    type:"GET",
    cache:false
 });

};

$('#closeIcon').click(function(){
    $(this).parent().css("display","none");
});
$('.info').click(function(){
    var div;
    //var ele;
    var br;
    if($(this).children().eq(0).text().trim()=='ContactInfo'){
        makeAJAXcall().done(function(data){
            $('#closeIcon').parent().css("display","block");
            div=$('<div/>');
            br=$('<br/>');
        
            for(var x in data){
                var ele=$('<span/>');
                ele.text(x);
                div.append(ele);
                div.append(br);
                for(var y in data[x]){
                   var ele1=$('<span/>');
                    ele1.text("");
                   ele1.text(y+" :"+data[x][y]);
                    div.append(ele1);
                    div.append(br);
                }
            }
              $('#closeIcon').parent().append(ele);
        });
       
        
    }
    else if($(this).children().eq(0).text().trim()=='JobDescription'){
        $('#closeIcon').parent().css("display","block"); 
    }
    else if($(this).children().eq(0).text().trim()=='RecruiterNotes'){
        $('#closeIcon').parent().css("display","block"); 
    }
    else{
        // no case
    }
    
});

 (function(){
 //$.when(makeAJAXcall()).then(function(data,textStatus,xhr){
     $.ajax({
    url:"data.json",
    dataType:"JSON",
    type:"GET",
    success:function(data){
        var details=data;
     for(var x in details){
         if(x==='candidate'){
             for(var y in details[x]){
                   var ele=$("<span/>");
                   //ele.html(y+":"+x[y]);
                 ele.text(y+" :  "+details[x][y]);
                 $("#ddd1").append(ele).append('<br>');
             }
         }
     }   
    }
    
    
     
});
         })();
    

    
});