import Link from "next/link";
import {useRouter} from 'next/router'

export async function getStaticProps(context){
    const {params} = context

    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`)

    const todo = await data.json()

    return{
        props: {todo},
    }
}

export async function getStaticPaths (){
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`)

    const data = await response.json()

    const paths = data.map((todo) =>{
        return {
            params: {
                todoId: `${todo.id}`,
            },
        }
    })

    return{
        paths,
        fallback:false,
    }
}

export default function Todo({ todo }){

    const router = useRouter()

    const todoId = router.query.todoId

    return (
        <>
            <Link href="/">
                <a>voltar</a>
            </Link>
            <h1>Exibindo o todo: {todoId}</h1>
            
            <p> exibindo um comentário: 
                <Link href={`/todos/${todoId}/comments/1`}>
                    <a>comentário 1</a>
                </Link>
            </p>

            <p> exibindo um comentário: 
                <Link href={`/todos/${todoId}/comments/2`}>
                    <a>comentário 2</a>
                </Link>
            </p>

            <p> exibindo um comentário: 
                <Link href={`/todos/${todoId}/comments/3`}>
                    <a>comentário 3</a>
                </Link>
            </p>
        </>
    )    
}