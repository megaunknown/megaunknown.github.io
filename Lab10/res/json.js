$(function () {

    $("#btn1").click(function(){
        $.ajax("https://jsonplaceholder.typicode.com/posts?userId="+  $("#txtUserId").val(),{
            "type":"GET"
        }).done(success).fail(failed);

        function success(data){
        //    console.log(data);
            let obj = JSON.parse(JSON.stringify(data));
            console.log(obj);
        }

        function failed(){
            console.log("Failed");
        }

    });

    $("#btnGetUserInfo").click(function () {
        $.ajax('https://jsonplaceholder.typicode.com/users/' +  $("#txtUserId").val(),{
            "type":"GET"
        }).done(success).fail(failed);

        function success(data){
            let JSONObject = JSON.parse(JSON.stringify(data));
            $('#textareaOutput').val("");
            let address = JSONObject.address;
            let strUserInfo = `Name:${JSONObject.name}\nUserName:${JSONObject.username}\nEmail:${JSONObject.email}\nAddress:${address.street + ',' + address.suite}\nPhone:${JSONObject.phone}\nWebsite:${JSONObject.website}`;
            $('#textareaOutput').val(strUserInfo);
        }

        function failed(){
            console.log("Failed");
        }
    });

  
    $("#btnGetPosts").click(function(){
         $.ajax("https://jsonplaceholder.typicode.com/posts?userId="  +  $("#txtUserId").val(),{
            "type":"GET"
        }).done(success).fail(failed);

        function success(data){
            let JSONObject = JSON.parse(JSON.stringify(data));
            console.log(JSONObject);
            let strUserPosts = '';
            
            for(let i = 0 ; i < JSONObject.length; i++)
            {
                var obj = JSONObject[i];
                var post = `Title::${obj.title}\nBody::${obj.body}`;
                strUserPosts = strUserPosts + post +'\n';
            }

            
            
            $('#textareaOutput').val(strUserPosts);
        }

        function failed(){
            console.log("Failed");
        }
    });

  /*
    $("#btnGetComments").click(function(){
        let strPostId = $("#txtPostId"). val();
        JSONString = fetch('https://jsonplaceholder.typicode.com/comments?postid=' + strPostId )
                .then(response => response.json())
                .then(json => console.log(json));

        JSONObject = JSON.parse(JSONString);
    });
    */
});