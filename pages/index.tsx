import { Botao } from "@/app/componentes/atomos/Botao";
import styled from "styled-components";
import { useRouter } from "next/router";

const ContainerPaginaInicial = styled.div`
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;

	.lista-botoes{
		list-style: none;
		margin: 0;
		padding: 0;
	}
`;

export default function PaginaInicial() {
	const router = useRouter();
	return (
		<ContainerPaginaInicial>
			<ul className='lista-botoes'>
				<li>
					<Botao onClick={()=> router.push('/eventos')}>Listar eventos</Botao>
				</li>
			</ul>
		</ContainerPaginaInicial>
	);
}
