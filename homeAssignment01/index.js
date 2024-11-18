const rl = require('readline-sync');
const fs = require('fs')


let menutext = '1. Add Item\n2. Remove Item\n3. View all items\n4. Mark done\n5. Exit\n'

let readData = function(){
    try {
    const file = fs.readFileSync('./todo.json');
    const data = JSON.parse(file)
    // console.log(data)
    
    return data
} catch (err) {
        // console.log(err)
        return []
}
}
let todo = readData()
let writeFile = function(){
    try{
        fs.writeFileSync('./todo.json', JSON.stringify(todo));
        // console.log("Data successfully written to output.txt");
    }
    catch(err){
        // console.log(err)
    }
    
}

let addItem = function () {
    let item = rl.question('Enter the todo:')
    todo.push({
        content: item,
        status: false
    })
    console.log('item added')
    main();
}


let displayItems = function () {
    todo.forEach((ele, i) => {
        console.log(`id: ${i + 1}`)
        console.log(ele.content)
        console.log(`Status: ${ele.status ? 'completed' : 'uncomplete'}\n`)
    })
    main()
}

let editItem = function () {
    let index = rl.question('Enter the id of todo-item: ')
    if(index > 0 && index-1 < todo.length){
        todo[index-1].status = true
        console.log('Item marked as done\n')
    }
    else{
        console.log('invalid id')
    }
    main()
}

let delAnItem = function () {
    let index = rl.question('Enter the id of todo-item: ')
    if(index > 0 && index < todo.length){
        todo.splice(index-1, 1)
        console.log('Item deleted\n')
    }
    else{
        console.log('invalid id')
    }
    main()
}

let main = function () {
    console.log(menutext);
    const input = rl.question('Enter choice : ');
    switch ( input) {
        case '1':
            addItem()
            break;
        case '2':
            delAnItem()
            break;
        case '3':
            displayItems()
            break;
        case '4':
            editItem()
            break;
        case '5':
            writeFile()
            break;
        default:
            console.log('invalid command')
    }


}
main()