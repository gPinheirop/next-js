import Link from "next/link";

export default function NotFound(){

    return (
        <>
            <h1>404</h1>
            <p>Puts, parece que a página não foi encontrada! ¯\_(ツ)_/¯</p>
            <Link href="/"><a>Voltar para a pagina inicial</a></Link>


        </>
    )
    
}