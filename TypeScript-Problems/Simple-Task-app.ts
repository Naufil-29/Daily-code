// Create an interface named Task with the following properties:

// id of type number
// title of type string
// status that can only be one of these literal values: 'todo', 'in-progress', or 'done'
// Using your Task interface, create the following variables:

// Create a variable named firstTask of type Task with id 1, title "Learn TypeScript interfaces", and status 'todo'
// Create a variable named secondTask of type Task with id 2, title "Build task management app", and status 'in-progress'
// Create a variable named thirdTask of type Task with id 3, title "Write unit tests", and status 'done'
// Create a function named getTaskInfo that accepts a parameter of type Task and returns a string in the format "Task [id]: [title] - [status]".

// Print the following outputs on separate lines:

// Call getTaskInfo with firstTask and print the result
// Call getTaskInfo with secondTask and print the result
// Call getTaskInfo with thirdTask and print the result
// Print the status of firstTask
// Print the title of secondTask


interface Task { 
    id: number,
    title: string,
    status: 'todo' | 'in-progress' | 'done'
}


// Create the task variables
const firstTask: Task = { 
    id: 1,
    title: "Learn TypeScript interfaces",
    status: 'todo'
};
const secondTask: Task = { 
    id: 2,
    title: "Build task management app",
    status: 'in-progress'
};
const thirdTask: Task = { 
    id: 3,
    title: "Write unit tests",
    status: 'done'
};


// Create the getTaskInfo function
function getTaskInfo(data: Task):string { 
    return `Task ${data.id}: ${data.title} - ${data.status}`
};

function addTask(taskList: Task[], title: string) { 
    const newTask: Task = { 
        id: taskList.length + 1,
        title: title,
        status: 'todo'
    };
    let updatedTaskList = ([...taskList, newTask])
    return updatedTaskList;
};

function changeTaskStatus(taskList: Task[], taskId:number, newStatus: 'todo' | 'in-progress' | 'done') {
    const updatedList = taskList.map((task) => {
        if (task.id === taskId) {
            return{...task, status: newStatus}
        }
        return task
    });

    return updatedList;
};

function listTasksByStatus(taskList: Task[], status: 'todo' | 'in-progress' | 'done'){ 
    const updatedArray = taskList.filter((task) => { 
        if(task.status === status){ 
            return task;
        }
    });
    return updatedArray;
}

// Print the required outputs
let mixedTasks: Task[] = [ firstTask, secondTask, thirdTask ];
const todoTasks: Task[] = listTasksByStatus(mixedTasks, 'todo');
const inProgressTasks: Task[] = listTasksByStatus(mixedTasks, 'in-progress');
const doneTasks: Task[] = listTasksByStatus(mixedTasks, 'done');

console.log('todoTasks', todoTasks)
console.log('inProgressTasks', inProgressTasks)
console.log('doneTasks', doneTasks)
console.log(mixedTasks.length);
console.log(todoTasks.length);
console.log(inProgressTasks.length);
console.log(doneTasks.length);
console.log(getTaskInfo(todoTasks[0]));
console.log(getTaskInfo(inProgressTasks[0]));
console.log(getTaskInfo(doneTasks[0]));



