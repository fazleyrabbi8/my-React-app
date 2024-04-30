// export default function Todo({ task, isDone }) {



//     return (

//     <li>
//         {isDone ? 'finished! Great Job' : 'Work On'} :

//         {task}
//     </li> 
//     )

// }
export default function Todo({ task, isDone }) {


    let listItem;
    if (isDone) {
        listItem =
            <li>
                'finished  {task} Great Job'

            </li>
    }
    else {


        listItem = <li>
            Work On {task}


        </li>
    }

    return listItem;

}
