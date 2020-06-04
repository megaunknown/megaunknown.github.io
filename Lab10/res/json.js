$(function () {

    $("#btnGetUserInfo").click(function () {
        if ($("#txtUserId").val().length > 0) {
            $.ajax('https://jsonplaceholder.typicode.com/users/' + $("#txtUserId").val(), {
                "type": "GET"
            }).done(success).fail(failed);

            function success(data) {
                let JSONObject = JSON.parse(JSON.stringify(data));
                $('#textareaOutput').val("");
                let address = JSONObject.address;
                let strUserInfo = `Name:${JSONObject.name}\nUserName:${JSONObject.username}\nEmail:${JSONObject.email}\nAddress:${address.street + ',' + address.suite}\nPhone:${JSONObject.phone}\nWebsite:${JSONObject.website}`;
                $('#textareaOutput').val(strUserInfo);
            }

            function failed() {
                $('#textareaOutput').val("Failed to get user's info");
            }
        }
        else {
            alert("You must enter user's id");
        }
    });


    $("#btnGetPosts").click(function () {
        if ($("#txtUserId").val().length > 0) {
            $.ajax("https://jsonplaceholder.typicode.com/posts?userId=" + $("#txtUserId").val(), {
                "type": "GET"
            }).done(success).fail(failed);

            function success(data) {
                let JSONObject = JSON.parse(JSON.stringify(data));
                console.log(JSONObject);
                let strUserPosts = '';

                for (let i = 0; i < JSONObject.length; i++) {
                    var obj = JSONObject[i];
                    var post = `Title::${obj.title}\nBody::${obj.body}`;
                    strUserPosts = strUserPosts + post + '\n';
                }

                $('#textareaOutput').val(strUserPosts);
            }

            function failed() {
                console.log("Failed");
            }
        }
        else {
            alert("You must enter user's id");
        }
    });


    $("#btnGetComments").click(function () {
        if( $("#txtPostId").val().length > 0 )
        {
        $.ajax('https://jsonplaceholder.typicode.com/comments?postid=' + $("#txtPostId").val(),
            {
                "type": "GET"
            }).done(success).fail(failed);

        function success(data) {
            let JSONObject = JSON.parse(JSON.stringify(data));
            console.log(JSONObject);
            let strUserComments = '';

            for (let i = 0; i < JSONObject.length; i++) {
                /*
                var obj = JSONObject[i];
                var post = `Title::${obj.title}\nBody::${obj.body}`;
                strUserPosts = strUserPosts + post + '\n';
                */
            }

            $('#textareaOutput').val(strUserComments);
        }

        function failed() {
            console.log("Failed");
        }
    }
    else
    {
        alert("You must enter Post's id");
    }
    });
});