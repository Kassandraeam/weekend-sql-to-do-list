$(document).ready(function(){
    console.log('jQuery sourced.');
    getTasks();
})

// GET
function getTasks(){
    console.log( 'In getTasks function' );
$.ajax({
    method: 'GET',
    url: '/toDoList'
}).then(function (response){
    console.log(response);
    // appendTasks();
}).catch(function(err){
    console.log(err);
    alert( 'Error in getTasks function' );
})
};
// POST

// PUT

// DELETE