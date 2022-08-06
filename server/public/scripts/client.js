$(document).ready(function(){
    console.log('jQuery sourced.');
    getTasks();
    $('#submitBtn').on('click', inputTask);
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
function inputTask(){
    console.log( 'In inputTask function' );
    let getTheTask = {
       task: $('#toDo').val(),
    }
    // console.log(getTheTask);
    $.ajax({
        method: 'POST',
        url: '/toDoList',
        data: getTheTask,
    }).then(function (response){
        console.log(response);
    }).catch( function(err) {
        console.log(err);
        alert('Error in POST');
    })
}


// function saveKoala( newKoala ){
//     console.log( 'in saveKoala', newKoala );
//     // ajax call to server to add koalas
//     $.ajax({
//       method: 'POST',
//       url: '/koalas',
//       data: newKoala
//     }).then(function(response) {
//       console.log(response)
//       getKoalas(response);
//     }).catch(function(err) {
//       console.log(err)
//       alert('Error in POST')
//     });
//   }
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
        </tr>
        
        `)
    }
}