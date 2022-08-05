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
    appendTasks(response);
}).catch(function(err){
    console.log(err);
    alert( 'Error in getTasks function' );
})
};
// POST

// PUT

// DELETE

// renderToDOM

function appendTasks(response){
    $('#toDoTable').empty();

    for (let i = 0; i < response.length; i++){
        let task = response[i];
        console.log(response[i])
        $('#toDoTable').append(`
        <tr>
            <td>${task.task}</td>
            <td>${task.complete}</td>
            <td><button>Delete this Task</button></td>
            <td></td>
        </tr>
        
        `)
    }
}