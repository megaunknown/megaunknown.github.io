$(function(){
    let JSONString,JSONObject;

    $("#btnGetUserInfo").click(function(){
        let strUserId = $("#txtUserId").val();
        /*
        JSONString = fetch('https://jsonplaceholder.typicode.com/users/' + strUserId )
                .then(response => response.json())
                .then(json => console.log(json));

        JSONObject = JSON.parse(JSONString);
        */
        $('#textareaOutput').val("sadfsafsdf");
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