$(function () {
    $("#btnGetUserInfo").click(function () {
        let JSONObject;
        let strUserId = $("#txtUserId").val();
        $.ajax('https://jsonplaceholder.typicode.com/users/' + strUserId,
            {
                "type": "GET"
            }).done(success).fail(fail);
            
        function success(data) {
            JSONObject = JSON.parse(JSON.stringify(data));
            return JSONObject;
        }

        function fail() {
            console.log("Failed.");
        }


        $('#textareaOutput').val("");
        let address = JSONObject.address;

        let strUserInfo = `Name:${JSONObject.name}\n
                           UserName:${JSONObject.username}\n
                           Email:${JSONObject.email}\n
                           Address:${address.street + ',' + address.suite}\n
                           Phone:${JSONObject.phone}\n
                           Website:${JSONObject.website}`;

        //let strUserInfo = "Name:" + JSONObject.name;
        //   alert(strUserInfo);
        $('#textareaOutput').val(strUserInfo);

    });
    /*
    $("#btnGetPosts").click(function(){
        let strUserId = $("#txtUserId").val();

        JSONString = fetch('https://jsonplaceholder.typicode.com/posts?userId=' + strUserId )
                .then(response => response.json())
                .then(json => console.log(json));
        JSONObject = JSON.parse(JSONString);
    });


    $("#btnGetComments").click(function(){
        let strPostId = $("#txtPostId"). val();
        JSONString = fetch('https://jsonplaceholder.typicode.com/comments?postid=' + strPostId )
                .then(response => response.json())
                .then(json => console.log(json));

        JSONObject = JSON.parse(JSONString);
    });
    */
});