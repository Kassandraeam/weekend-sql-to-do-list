$(document).ready(function(){
    console.log('jQuery sourced.');
    getTasks();
    $('#submitBtn').on('click', inputTask);
    $('#toDoTable').on('click', '.deleteBtn', handleDelete);
    $('#toDoTable').on('click', '.completeBtn', handleComplete);
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
    $.ajax({
        method: 'POST',
        url: '/toDoList',
        data: getTheTask,
    }).then(function (response){
        console.log(response);
        getTasks();
    }).catch( function(err) {
        console.log(err);
        alert('Error in POST');
    })
}

function appendTasks(response){
    $('#toDoTable').empty();
    for (let i = 0; i < response.length; i++){
        let task = response[i];
        console.log(response[i])
        if (task.complete === false) {
        $('#toDoTable').append(`
        <tr data-id=${task.id}>
            <td class = "incomplete">${task.task}</td>
            <td><button class='completeBtn'>Complete</button></td>
            <td><button class='deleteBtn'>Delete this Task</button></td>
        </tr>
        `)
        } else {
            $('#toDoTable').append(`
            <tr data-id=${task.id}>
                <td class = "completed">${task.task}</td>
                <td><button class='completeBtn'>Complete</button></td>
                <td><button class='deleteBtn'>Delete this Task</button></td>
            </tr>
            `)
        }
    }
};

// DELETE
function handleDelete() {
    console.log('Task has been deleted');

    const id = $(this).closest('tr').data('id');
    console.log('this should be id but it is returning undefined',id);

    $.ajax({
        method: 'DELETE',
        url: `/toDoList/${id}`,
    }).then(function(response){
        console.log(response);
        getTasks(response);
    }).catch(function(err){
        console.log(err);
        alert('Error in delete on client side');
    })
};

// PUT
function handleComplete(){
    console.log('Task has been completed');

    const id = $(this).closest('tr').data('id');
    console.log(id);
  
    $.ajax({
        method: 'PUT',
        url: `/toDoList/${id}`,
    }).then(function(response){
        console.log(response);
        getTasks(response);
    }).catch(function(err){
        console.log(err);
        alert('Error in PUT on client side');
    })
}

