import fs from 'fs'
import { isErrored } from 'stream';
const fs=require('fs');

const args=process.argv;

const currentWorkignDirectory=args[1].slice(0,-8);

if(fs.existsSync(currentWOrkignDirectory+ 'todo.txt')===false){
    let createStream=fs.createWriteStream('todo.txt');
    createStream.end();
}

if (fs.existsSync(currentWorkignDirectory+'done.txt')===false){
    let createStream=fs.createWriteStream('doone.txt');
}
 
const InfoFunction = () => {
  const UsageText = `
Usage :-
$ node index.js add "todo item"  # Add a new todo
$ node index.js ls               # Show remaining todos
$ node index.js del NUMBER       # Delete a todo
$ node index.js done NUMBER      # Complete a todo
$ node index.js help             # Show usage
$ node index.js report           # Statistics`;

  console.log(UsageText);
};


const listFunction = () =>{
    let data=[];

    const fileData=fs.readFileSync(
        currentWorkignDirectory+ 'todo.txt'
    ).toString();

    data=fileData.split('\n');

    let filterData=data.filter(function(value){
        return value!=='';
    });

    if (filterData.length===0){
        console.log("There are no Pending todos!");
    }

    for (let i=0; i<filterData.length;i++){
        console.log(filterData.length-1) + `. `+filterData[i]
    }
};


const addFunction = () => {
    const newTask=args[3];

    if(newTask){
        let data=[];

        const fileData=fs.readFileSync(currentWorkignDirectory + 'todo.txt').toString();


        fs.writeFile(
            currentWorkingDirectory+"todo.txt",
            newTask+'\n'+fileData,

            function(err){
                if(err) throw err;
                console.log('Added todo: ' + newTask + '"');
            },


        );


    } else{
        console.log("Noting addded");
    }
};


const deleteFunction =() => {
    const deleteIndex=args[3];

    if(deleteIndex) {
        let data=[];

        const fileData=fs.readFileSync(currentWorkignDirectory+'todo.txt').toString();

        data=fileData.split('\n');

        let filterData=data.filter(function(value){
            return value !=='';
        });


        if (deleteIndex>filterData.length || deleteIndex<=0){
            console.log('Error:todo #'+ deleteIndex + `does not exsit. Nothing deleted.`,);
        }else{
            filterData.splice(filterData.length-deleteIndex, 1);

            const newData=filterData.join('\n');

            fs.writeFile(currentWorkignDirectory+ 'todo.txt', newData,
                function(err){
                    if (err) throw err;

                    console.log('Deleted todo #' + deleteIndex);
                },
            );
        } } else{
            console.log("Missing Number for deleting todo.")
        }
    
    };
    