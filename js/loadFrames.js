
var loginDialog;
var nav;
var globalConfig;
//load global

  $.ajax({
    url: "data/global.json",
    global: false,
    type: "GET",
    data: ({
     
    }),
    dataType: "html",
    async: false,
    success: function(msg) {
    
    globalConfig=msg;
    console.log("load global data from server ")
    },
    error: function () {
      alert('Call not resolved')
  }
  })
  globalConfig=jQuery.parseJSON(globalConfig)
  console.log("load loginid="+globalConfig.loginid)
   

alert(globalConfig)
//load dialog

   $.ajax({
        url: "templates/logindialog.html",
        global: false,
        type: "GET",
        data: ({
         
        }),
        dataType: "html",
        async: false,
        success: function(msg) {
          loginDialog=msg;

          console.log("load login dialog from outer site")
        },
        error: function () {
          alert('Call not resolved')
      }
      })
   

//load nav
$.ajax({
  url: "templates/nav.html",
  global: false,
  type: "GET",
  data: ({
   
  }),
  dataType: "html",
  async: false,
  success: function(msg) {
  nav=msg;
  console.log("load nav from outer site")
  },
  error: function () {
    alert('Call not resolved')
}
})

$(document).ready(function(){
  if(nav==null)
  console.log("nav is null")
else
{
 console.log("load nav bar")
 $(".container-fluid").append(nav)
}
if(loginDialog==null)
console.log("login window object is null")
else{
  alert()
  $('.container-fluid').append(loginDialog)
  console.log("append login dialog")
}
//bind function to loginid
loginid='#'+globalConfig.loginid
console.log("bind login id="+loginid)
$(loginid).click(function(){

  
})

})


//